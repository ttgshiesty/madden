#!/usr/bin/env python3
"""
MUT.GG Core-Data Scraper
Fetches core game data (abilities, teams, programs) from MUT.GG API
"""

import json
import time
import logging
from pathlib import Path
from typing import Dict, List, Optional, Set
from datetime import datetime
import hashlib

import requests
from bs4 import BeautifulSoup


# Configuration
CORE_DATA_API = "https://www.mut.gg/api/27/core-data/"
DEFAULT_OUTPUT_DIR = Path(__file__).resolve().parent.parent / "Data"
DEFAULT_OUTPUT_DIR.mkdir(exist_ok=True)

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
    "Accept": "application/json",
    "Accept-Language": "en-US,en;q=0.9",
}

# Progress tracking file
CORE_DATA_PROGRESS_FILE = DEFAULT_OUTPUT_DIR / "core_data_incremental.json"

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler(DEFAULT_OUTPUT_DIR / 'core_data_scraper.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)


def make_request_with_retry(url: str, timeout: int = 30, retry_attempts: int = 3, retry_delay: float = 1.0) -> Optional[requests.Response]:
    """Make HTTP request with exponential backoff retry logic."""
    for attempt in range(retry_attempts):
        try:
            response = requests.get(url, headers=HEADERS, timeout=timeout)
            response.raise_for_status()
            return response
        except requests.exceptions.RequestException as e:
            if attempt < retry_attempts - 1:
                wait_time = retry_delay * (2 ** attempt)  # Exponential backoff
                logger.warning(f"Request failed (attempt {attempt + 1}/{retry_attempts}): {e}. Retrying in {wait_time}s...")
                time.sleep(wait_time)
            else:
                logger.error(f"Request failed after {retry_attempts} attempts: {e}")
                return None
    return None


def fetch_core_data() -> Optional[Dict]:
    """Fetch core data from MUT.GG API."""
    logger.info(f"Fetching core data from {CORE_DATA_API}")
    
    response = make_request_with_retry(CORE_DATA_API)
    if not response:
        logger.error("Failed to fetch core data")
        return None
    
    try:
        data = response.json()
        logger.info(f"Successfully fetched core data")
        return data
    except json.JSONDecodeError as e:
        logger.error(f"Failed to parse JSON response: {e}")
        return None


def parse_abilities(abilities_data: List[Dict]) -> List[Dict]:
    """Parse and structure abilities data."""
    parsed_abilities = []
    
    for ability in abilities_data:
        try:
            parsed_ability = {
                "id": ability.get("id"),
                "externalId": ability.get("externalId"),
                "name": ability.get("name"),
                "abilityType": ability.get("abilityType"),
                "description": ability.get("description"),
                "overallDescription": ability.get("overallDescription"),
                "activationDescription": ability.get("activationDescription"),
                "deactivationDescription": ability.get("deactivationDescription"),
                "startsActive": ability.get("startsActive"),
                "imageUrl": ability.get("image", {}).get("url") if ability.get("image") else None,
                "salaryCapCost": ability.get("salaryCapCost"),
                "isHidden": ability.get("isHidden"),
                "url": ability.get("url"),
                "nameSlug": ability.get("nameSlug"),
                "hash": generate_ability_hash(ability)
            }
            parsed_abilities.append(parsed_ability)
        except Exception as e:
            logger.warning(f"Error parsing ability {ability.get('name', 'unknown')}: {e}")
            continue
    
    logger.info(f"Parsed {len(parsed_abilities)} abilities")
    return parsed_abilities


def generate_ability_hash(ability: Dict) -> str:
    """Generate hash for ability change detection."""
    data = f"{ability.get('name')}|{ability.get('abilityType')}|{ability.get('description')}|{ability.get('overallDescription')}"
    return hashlib.md5(data.encode()).hexdigest()


def parse_teams(teams_data: List[Dict]) -> List[Dict]:
    """Parse and structure teams data."""
    parsed_teams = []
    
    for team in teams_data:
        try:
            parsed_team = {
                "id": team.get("id"),
                "externalId": team.get("externalId"),
                "name": team.get("name"),
                "abbreviation": team.get("abbreviation"),
                "logoUrl": team.get("logo", {}).get("url") if team.get("logo") else None,
                "hash": generate_team_hash(team)
            }
            parsed_teams.append(parsed_team)
        except Exception as e:
            logger.warning(f"Error parsing team {team.get('name', 'unknown')}: {e}")
            continue
    
    logger.info(f"Parsed {len(parsed_teams)} teams")
    return parsed_teams


def generate_team_hash(team: Dict) -> str:
    """Generate hash for team change detection."""
    data = f"{team.get('name')}|{team.get('abbreviation')}"
    return hashlib.md5(data.encode()).hexdigest()


def parse_programs(programs_data: List[Dict]) -> List[Dict]:
    """Parse and structure programs data."""
    parsed_programs = []
    
    for program in programs_data:
        try:
            parsed_program = {
                "id": program.get("id"),
                "externalId": program.get("externalId"),
                "name": program.get("name"),
                "description": program.get("description"),
                "imageUrl": program.get("image", {}).get("url") if program.get("image") else None,
                "hash": generate_program_hash(program)
            }
            parsed_programs.append(parsed_program)
        except Exception as e:
            logger.warning(f"Error parsing program {program.get('name', 'unknown')}: {e}")
            continue
    
    logger.info(f"Parsed {len(parsed_programs)} programs")
    return parsed_programs


def generate_program_hash(program: Dict) -> str:
    """Generate hash for program change detection."""
    data = f"{program.get('name')}|{program.get('description')}"
    return hashlib.md5(data.encode()).hexdigest()


def save_core_data(core_data: Dict, output_dir: Path):
    """Save core data to JSON file."""
    output_dir = Path(output_dir)
    output_dir.mkdir(exist_ok=True)
    
    core_data_path = output_dir / "core_data.json"
    
    with open(core_data_path, "w", encoding="utf-8") as f:
        json.dump(core_data, f, indent=2, ensure_ascii=False)
    
    logger.info(f"Saved core data to {core_data_path}")
    return core_data_path


def save_abilities(abilities: List[Dict], output_dir: Path):
    """Save abilities to separate JSON file."""
    output_dir = Path(output_dir)
    output_dir.mkdir(exist_ok=True)
    
    abilities_path = output_dir / "abilities.json"
    
    with open(abilities_path, "w", encoding="utf-8") as f:
        json.dump({"data": abilities}, f, indent=2, ensure_ascii=False)
    
    logger.info(f"Saved {len(abilities)} abilities to {abilities_path}")
    return abilities_path


def save_teams(teams: List[Dict], output_dir: Path):
    """Save teams to separate JSON file."""
    output_dir = Path(output_dir)
    output_dir.mkdir(exist_ok=True)
    
    teams_path = output_dir / "teams.json"
    
    with open(teams_path, "w", encoding="utf-8") as f:
        json.dump({"data": teams}, f, indent=2, ensure_ascii=False)
    
    logger.info(f"Saved {len(teams)} teams to {teams_path}")
    return teams_path


def save_programs(programs: List[Dict], output_dir: Path):
    """Save programs to separate JSON file."""
    output_dir = Path(output_dir)
    output_dir.mkdir(exist_ok=True)
    
    programs_path = output_dir / "programs.json"
    
    with open(programs_path, "w", encoding="utf-8") as f:
        json.dump({"data": programs}, f, indent=2, ensure_ascii=False)
    
    logger.info(f"Saved {len(programs)} programs to {programs_path}")
    return programs_path


def load_incremental_state() -> Dict:
    """Load incremental state from file if it exists."""
    if CORE_DATA_PROGRESS_FILE.exists():
        try:
            with open(CORE_DATA_PROGRESS_FILE, 'r') as f:
                state = json.load(f)
                logger.info(f"Loaded incremental state from {CORE_DATA_PROGRESS_FILE}")
                return state
        except Exception as e:
            logger.warning(f"Could not load incremental state: {e}")
    return {}


def save_incremental_state(state: Dict):
    """Save incremental state to file."""
    state['last_run'] = datetime.now().isoformat()
    try:
        with open(CORE_DATA_PROGRESS_FILE, 'w') as f:
            json.dump(state, f, indent=2)
        logger.debug(f"Saved incremental state")
    except Exception as e:
        logger.warning(f"Could not save incremental state: {e}")


def detect_changes(old_data: Dict, new_data: Dict) -> Dict:
    """Detect changes between old and new core data."""
    changes = {
        "new_abilities": [],
        "changed_abilities": [],
        "new_teams": [],
        "changed_teams": [],
        "new_programs": [],
        "changed_programs": []
    }
    
    # Ability changes
    old_abilities = {a['externalId']: a for a in old_data.get('abilities', [])}
    new_abilities = {a['externalId']: a for a in new_data.get('abilities', [])}
    
    new_ability_ids = set(new_abilities.keys()) - set(old_abilities.keys())
    changes['new_abilities'] = [new_abilities[eid] for eid in new_ability_ids]
    
    for eid in set(old_abilities.keys()) & set(new_abilities.keys()):
        if old_abilities[eid]['hash'] != new_abilities[eid]['hash']:
            changes['changed_abilities'].append({
                'externalId': eid,
                'old': old_abilities[eid],
                'new': new_abilities[eid]
            })
    
    # Team changes
    old_teams = {t['externalId']: t for t in old_data.get('teams', [])}
    new_teams = {t['externalId']: t for t in new_data.get('teams', [])}
    
    new_team_ids = set(new_teams.keys()) - set(old_teams.keys())
    changes['new_teams'] = [new_teams[eid] for eid in new_team_ids]
    
    for eid in set(old_teams.keys()) & set(new_teams.keys()):
        if old_teams[eid]['hash'] != new_teams[eid]['hash']:
            changes['changed_teams'].append({
                'externalId': eid,
                'old': old_teams[eid],
                'new': new_teams[eid]
            })
    
    # Program changes
    old_programs = {p['externalId']: p for p in old_data.get('programs', [])}
    new_programs = {p['externalId']: p for p in new_data.get('programs', [])}
    
    new_program_ids = set(new_programs.keys()) - set(old_programs.keys())
    changes['new_programs'] = [new_programs[eid] for eid in new_program_ids]
    
    for eid in set(old_programs.keys()) & set(new_programs.keys()):
        if old_programs[eid]['hash'] != new_programs[eid]['hash']:
            changes['changed_programs'].append({
                'externalId': eid,
                'old': old_programs[eid],
                'new': new_programs[eid]
            })
    
    return changes


def scrape_core_data(
    output_dir: Path = DEFAULT_OUTPUT_DIR,
    incremental: bool = False,
    timeout: int = 30,
    retry_attempts: int = 3
) -> Dict:
    """Main function to scrape core data."""
    logger.info("=" * 60)
    logger.info("Core-Data Scraper")
    logger.info("=" * 60)
    
    start_time = time.time()
    
    # Load existing state if incremental
    old_data = {}
    if incremental:
        old_state = load_incremental_state()
        if old_state and 'last_data' in old_state:
            old_data = old_state['last_data']
            logger.info(f"Loaded {len(old_data.get('abilities', []))} abilities from previous run")
    
    # Fetch new data
    api_response = fetch_core_data()
    if not api_response:
        logger.error("Failed to fetch core data")
        return {"success": False, "error": "Failed to fetch core data"}
    
    # Parse data
    raw_data = api_response.get('data', {})
    
    abilities = parse_abilities(raw_data.get('abilities', []))
    teams = parse_teams(raw_data.get('teams', []))
    programs = parse_programs(raw_data.get('programs', []))
    
    new_data = {
        "abilities": abilities,
        "teams": teams,
        "programs": programs,
        "scraped_at": datetime.now().isoformat()
    }
    
    # Detect changes if incremental
    changes = {}
    if incremental and old_data:
        changes = detect_changes(old_data, new_data)
        logger.info(f"Changes detected: {len(changes['new_abilities'])} new abilities, {len(changes['changed_abilities'])} changed abilities")
    
    # Save data
    save_core_data(new_data, output_dir)
    save_abilities(abilities, output_dir)
    save_teams(teams, output_dir)
    save_programs(programs, output_dir)
    
    # Save incremental state
    if incremental:
        state = {
            "last_run": datetime.now().isoformat(),
            "last_data": new_data,
            "changes": changes
        }
        save_incremental_state(state)
    
    # Save changes report if incremental
    if incremental and changes:
        changes_path = output_dir / "core_data_changes.json"
        with open(changes_path, "w", encoding="utf-8") as f:
            json.dump(changes, f, indent=2, ensure_ascii=False)
        logger.info(f"Saved changes report to {changes_path}")
    
    elapsed_time = time.time() - start_time
    logger.info("=" * 60)
    logger.info("CORE-DATA SCRAPER SUMMARY")
    logger.info("=" * 60)
    logger.info(f"Abilities: {len(abilities)}")
    logger.info(f"Teams: {len(teams)}")
    logger.info(f"Programs: {len(programs)}")
    logger.info(f"Time elapsed: {elapsed_time:.2f}s")
    if incremental and changes:
        logger.info(f"New abilities: {len(changes['new_abilities'])}")
        logger.info(f"Changed abilities: {len(changes['changed_abilities'])}")
    logger.info("=" * 60)
    
    return {
        "success": True,
        "abilities": len(abilities),
        "teams": len(teams),
        "programs": len(programs),
        "changes": changes if incremental else None,
        "elapsed_time": elapsed_time
    }


if __name__ == "__main__":
    result = scrape_core_data()
    if result["success"]:
        print("Core-data scraping completed successfully!")
    else:
        print("Core-data scraping failed:", result.get("error"))