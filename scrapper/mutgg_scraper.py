#!/usr/bin/env python3
"""
MUT.GG Madden 27 Full Player + Price Scraper
Enhanced version with parallel requests, multiple export formats, resume capability, and robust error handling.
"""

import json
import time
import csv
import re
import argparse
import logging
from pathlib import Path
from typing import Optional, List, Dict, Set
from datetime import datetime
from concurrent.futures import ThreadPoolExecutor, as_completed
import threading

import requests
from bs4 import BeautifulSoup

# Import core-data scraper
try:
    from core_data_scraper import scrape_core_data
    CORE_DATA_AVAILABLE = True
except ImportError:
    CORE_DATA_AVAILABLE = False
    logger.warning("Core-data scraper module not available")


# Configuration
BASE_URL = "https://www.mut.gg"
PLAYERS_URL = f"{BASE_URL}/players/"
DEFAULT_OUTPUT_DIR = Path(__file__).resolve().parent.parent / "Data"
DEFAULT_OUTPUT_DIR.mkdir(exist_ok=True)

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
}

# Progress tracking file
PROGRESS_FILE = DEFAULT_OUTPUT_DIR / "scrape_progress.json"

# Configuration file
CONFIG_FILE = Path(__file__).resolve().parent / "scraper_config.json"

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler(DEFAULT_OUTPUT_DIR / 'scraper.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)


def load_config() -> Dict:
    """Load configuration from config file if it exists."""
    default_config = {
        "default_pages": 100,
        "default_parallel": 3,
        "default_format": "json",
        "default_output_dir": str(DEFAULT_OUTPUT_DIR),
        "request_timeout": 30,
        "retry_attempts": 3,
        "retry_delay": 1,
        "rate_limit_delay": 0.3,
        "external_ids_only": False,
        "user_agent": HEADERS["User-Agent"]
    }
    
    if CONFIG_FILE.exists():
        try:
            with open(CONFIG_FILE, 'r') as f:
                user_config = json.load(f)
                default_config.update(user_config)
                logger.info(f"Loaded configuration from {CONFIG_FILE}")
        except Exception as e:
            logger.warning(f"Could not load config file: {e}")
    
    return default_config


def parse_arguments() -> argparse.Namespace:
    """Parse command-line arguments."""
    config = load_config()
    
    parser = argparse.ArgumentParser(
        description='Enhanced MUT.GG Player Scraper with parallel requests and multiple export formats'
    )
    
    parser.add_argument(
        '--pages', '-p',
        type=int,
        default=config["default_pages"],
        help=f'Number of pages to scrape (default: {config["default_pages"]})'
    )
    
    parser.add_argument(
        '--parallel', '-n',
        type=int,
        default=config["default_parallel"],
        help=f'Number of parallel requests (default: {config["default_parallel"]})'
    )
    
    parser.add_argument(
        '--format', '-f',
        type=str,
        default=config["default_format"],
        choices=['json', 'csv', 'txt', 'js', 'all'],
        help=f'Output format (default: {config["default_format"]})'
    )
    
    parser.add_argument(
        '--output-dir', '-o',
        type=str,
        default=config["default_output_dir"],
        help=f'Output directory (default: {config["default_output_dir"]})'
    )
    
    parser.add_argument(
        '--external-ids-only',
        action='store_true',
        default=config["external_ids_only"],
        help='Export only external IDs in simplified formats'
    )
    
    parser.add_argument(
        '--resume',
        action='store_true',
        help='Resume from last successful page'
    )
    
    parser.add_argument(
        '--timeout',
        type=int,
        default=config["request_timeout"],
        help=f'Request timeout in seconds (default: {config["request_timeout"]})'
    )
    
    parser.add_argument(
        '--retry-attempts',
        type=int,
        default=config["retry_attempts"],
        help=f'Number of retry attempts for failed requests (default: {config["retry_attempts"]})'
    )
    
    parser.add_argument(
        '--verbose', '-v',
        action='store_true',
        help='Enable verbose logging'
    )
    
    # Core-data scraping arguments
    parser.add_argument(
        '--core-data',
        action='store_true',
        help='Scrape core-data (abilities, teams, programs) along with players'
    )
    
    parser.add_argument(
        '--core-data-only',
        action='store_true',
        help='Scrape only core-data, skip player scraping'
    )
    
    parser.add_argument(
        '--core-data-incremental',
        action='store_true',
        help='Use incremental updates for core-data scraping'
    )
    
    return parser.parse_args()


def save_progress(page: int, total_players: int, seen_ids: Set[str]):
    """Save current progress to checkpoint file."""
    progress_data = {
        "last_page": page,
        "total_players": total_players,
        "seen_ids": list(seen_ids),
        "timestamp": datetime.now().isoformat()
    }
    try:
        with open(PROGRESS_FILE, 'w') as f:
            json.dump(progress_data, f, indent=2)
        logger.debug(f"Saved progress: page {page}, {total_players} players")
    except Exception as e:
        logger.warning(f"Could not save progress: {e}")


def load_progress() -> Dict:
    """Load progress from checkpoint file if it exists."""
    if PROGRESS_FILE.exists():
        try:
            with open(PROGRESS_FILE, 'r') as f:
                progress = json.load(f)
                logger.info(f"Loaded progress from page {progress.get('last_page', 0)}")
                return progress
        except Exception as e:
            logger.warning(f"Could not load progress file: {e}")
    return {}


def clear_progress():
    """Clear progress checkpoint file."""
    if PROGRESS_FILE.exists():
        try:
            PROGRESS_FILE.unlink()
            logger.info("Cleared progress file")
        except Exception as e:
            logger.warning(f"Could not clear progress file: {e}")


def make_request_with_retry(url: str, params: Dict, timeout: int, retry_attempts: int, retry_delay: float) -> Optional[requests.Response]:
    """Make HTTP request with exponential backoff retry logic."""
    for attempt in range(retry_attempts):
        try:
            response = requests.get(url, params=params, headers=HEADERS, timeout=timeout)
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


def get_players_from_page(page: int, timeout: int = 30, retry_attempts: int = 3, retry_delay: float = 1.0) -> List[Dict]:
    """Scrape players from a single HTML page with retry logic."""
    response = make_request_with_retry(PLAYERS_URL, {"page": page}, timeout, retry_attempts, retry_delay)
    
    if not response:
        logger.error(f"Failed to fetch page {page} after retries")
        return []
    
    soup = BeautifulSoup(response.text, "html.parser")

    players = []
    items = soup.find_all(class_="player-list-item")
    logger.info(f"Page {page}: found {len(items)} player-list-item elements")

    for item in items:
        try:
            # Extract name
            name_first = item.find(class_="player-list-item__name-first")
            name_last = item.find(class_="player-list-item__name-last")
            first_name = name_first.text.strip() if name_first else ""
            last_name = name_last.text.strip() if name_last else ""
            player_name = f"{first_name} {last_name}".strip()

            # Extract OVR
            score_elem = item.find(class_="player-list-item__score-value")
            ovr = score_elem.text.strip() if score_elem else ""

            # Extract program
            program_elem = item.find(class_="player-list-item__program")
            program = program_elem.text.strip() if program_elem else ""

            # Extract position
            pos_elem = item.find(class_="player-list-item__position")
            position = pos_elem.text.strip() if pos_elem else ""

            # Extract team
            team_elem = item.find(class_="player-list-item__team")
            team = team_elem.text.strip() if team_elem else ""

            # Extract price
            price_elem = item.find(class_="js-player-list-item-price")
            price_text = price_elem.text.strip() if price_elem else ""
            # Clean price - remove whitespace and newlines
            price_text = " ".join(price_text.split())

            # Extract externalId from link with improved regex
            link_elem = item.find("a", href=True)
            external_id = ""
            if link_elem:
                href = link_elem["href"]
                # Multiple patterns to handle different URL formats
                patterns = [
                    r"/players/\d+-[^/]+/(\d+)-(\d+)/",  # Original pattern
                    r"/players/(\d+)-[^/]+/",           # Alternative pattern
                    r"externalId[=:](\d+)",             # Direct externalId pattern
                ]
                
                for pattern in patterns:
                    match = re.search(pattern, href)
                    if match:
                        # Try to get the second group first (external ID), then first
                        external_id = match.group(2) if match.lastindex >= 2 else match.group(1)
                        break

            # Data validation
            if not external_id:
                logger.warning(f"Could not extract external ID for player: {player_name}")
                continue
                
            if not player_name:
                logger.warning(f"Could not extract player name for external ID: {external_id}")
                continue

            players.append({
                "playerName": player_name,
                "ovr": ovr,
                "position": position,
                "program": program,
                "team": team,
                "price": price_text,
                "externalId": external_id,
                "url": f"{BASE_URL}{link_elem['href']}" if link_elem else "",
            })
            
        except Exception as e:
            logger.warning(f"Error processing player item on page {page}: {e}")
            continue

    return players


def get_all_players_parallel(
    max_pages: int = 100, 
    parallel_workers: int = 3,
    timeout: int = 30,
    retry_attempts: int = 3,
    retry_delay: float = 1.0,
    rate_limit_delay: float = 0.3,
    resume: bool = False
) -> List[Dict]:
    """Scrape ALL players from all pages using parallel requests."""
    all_players = []
    seen_ids: Set[str] = set()
    start_page = 1
    
    # Handle resume functionality
    if resume:
        progress = load_progress()
        if progress:
            start_page = progress.get("last_page", 0) + 1
            seen_ids = set(progress.get("seen_ids", []))
            all_players = progress.get("all_players", [])
            logger.info(f"Resuming from page {start_page} with {len(all_players)} players already scraped")
    
    logger.info(f"Starting parallel scrape with {parallel_workers} workers from page {start_page} to {max_pages}")
    start_time = time.time()
    
    # Thread-safe data structures
    lock = threading.Lock()
    page_count = 0
    error_count = 0
    
    def process_page(page: int) -> Optional[List[Dict]]:
        """Process a single page - designed for parallel execution."""
        nonlocal page_count, error_count
        
        try:
            logger.info(f"Fetching page {page}...")
            players = get_players_from_page(page, timeout, retry_attempts, retry_delay)
            
            if not players:
                logger.warning(f"No players found on page {page}")
                return None
            
            # Rate limiting
            time.sleep(rate_limit_delay)
            
            with lock:
                page_count += 1
                logger.info(f"Completed page {page}/{max_pages} ({page_count}/{max_pages - start_page + 1} processed)")
            
            return players
            
        except Exception as e:
            with lock:
                error_count += 1
            logger.error(f"Error processing page {page}: {e}")
            return None
    
    # Process pages in parallel batches
    for page_batch_start in range(start_page, max_pages + 1, parallel_workers):
        page_batch_end = min(page_batch_start + parallel_workers - 1, max_pages)
        page_range = list(range(page_batch_start, page_batch_end + 1))
        
        logger.info(f"Processing batch: pages {page_batch_start}-{page_batch_end}")
        
        with ThreadPoolExecutor(max_workers=parallel_workers) as executor:
            # Submit all pages in current batch
            future_to_page = {
                executor.submit(process_page, page): page 
                for page in page_range
            }
            
            # Collect results as they complete
            batch_players = []
            for future in as_completed(future_to_page):
                page = future_to_page[future]
                try:
                    players = future.result()
                    if players:
                        batch_players.extend(players)
                except Exception as e:
                    logger.error(f"Exception in future for page {page}: {e}")
        
        # Deduplicate and add players from this batch
        new_players = []
        for p in batch_players:
            ext_id = p.get("externalId")
            if ext_id and ext_id not in seen_ids:
                seen_ids.add(ext_id)
                new_players.append(p)
        
        all_players.extend(new_players)
        logger.info(f"Batch complete: added {len(new_players)} new players (total unique: {len(all_players)})")
        
        # Save progress after each batch
        save_progress(page_batch_end, len(all_players), seen_ids)
        
        # If we got very few new players, we might be at the end
        if len(new_players) < len(batch_players) * 0.5:
            logger.info("Low yield detected, possibly near end of player list")
    
    elapsed_time = time.time() - start_time
    logger.info(f"Parallel scrape completed in {elapsed_time:.2f}s ({elapsed_time/60:.2f} minutes)")
    logger.info(f"Processed {page_count} pages with {error_count} errors")
    logger.info(f"Total unique players: {len(all_players)}")
    
    # Clear progress file on successful completion
    if not resume:
        clear_progress()
    
    return all_players


def export_players_json(players: List[Dict], output_path: Path, external_ids_only: bool = False):
    """Export players to JSON format."""
    if external_ids_only:
        data = [p.get("externalId") for p in players if p.get("externalId")]
        filename = "external_ids.json"
    else:
        data = {"data": players}
        filename = "mut27_players.json"
    
    json_path = output_path / filename
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    logger.info(f"Saved {len(data) if external_ids_only else len(players)} players to {json_path}")
    return json_path


def export_players_csv(players: List[Dict], output_path: Path, external_ids_only: bool = False):
    """Export players to CSV format."""
    if external_ids_only:
        data = [{"externalId": p.get("externalId")} for p in players if p.get("externalId")]
        filename = "external_ids.csv"
    else:
        data = players
        filename = "mut27_players.csv"
    
    if not data:
        logger.warning("No data to export to CSV")
        return None
    
    csv_path = output_path / filename
    fieldnames = list(data[0].keys())
    
    with open(csv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(data)
    
    logger.info(f"Saved {len(data)} players to {csv_path}")
    return csv_path


def export_players_txt(players: List[Dict], output_path: Path):
    """Export only external IDs to plain text file (one per line)."""
    external_ids = [p.get("externalId") for p in players if p.get("externalId")]
    txt_path = output_path / "external_ids.txt"
    
    with open(txt_path, "w", encoding="utf-8") as f:
        for ext_id in external_ids:
            f.write(f"{ext_id}\n")
    
    logger.info(f"Saved {len(external_ids)} external IDs to {txt_path}")
    return txt_path


def export_players_js(players: List[Dict], output_path: Path):
    """Export external IDs as JavaScript array."""
    external_ids = [p.get("externalId") for p in players if p.get("externalId")]
    js_path = output_path / "external_ids.js"
    
    js_content = f"const externalIds = {json.dumps(external_ids, indent=2)};\n"
    js_content += "module.exports = externalIds;\n"
    
    with open(js_path, "w", encoding="utf-8") as f:
        f.write(js_content)
    
    logger.info(f"Saved {len(external_ids)} external IDs to {js_path}")
    return js_path


def export_players(
    players: List[Dict], 
    output_dir: Path, 
    format_type: str = "json",
    external_ids_only: bool = False
) -> List[Path]:
    """Export players in specified format(s)."""
    output_dir = Path(output_dir)
    output_dir.mkdir(exist_ok=True)
    
    exported_files = []
    
    if format_type == "all":
        formats = ["json", "csv", "txt", "js"]
    else:
        formats = [format_type]
    
    for fmt in formats:
        try:
            if fmt == "json":
                path = export_players_json(players, output_dir, external_ids_only)
                if path:
                    exported_files.append(path)
            elif fmt == "csv":
                path = export_players_csv(players, output_dir, external_ids_only)
                if path:
                    exported_files.append(path)
            elif fmt == "txt":
                path = export_players_txt(players, output_dir)
                if path:
                    exported_files.append(path)
            elif fmt == "js":
                path = export_players_js(players, output_dir)
                if path:
                    exported_files.append(path)
        except Exception as e:
            logger.error(f"Error exporting to {fmt}: {e}")
    
    return exported_files


def get_all_players(max_pages: int = 300) -> list[dict]:
    """Legacy sequential scrape function - kept for backward compatibility."""
    all_players = []
    seen_ids = set()

    for page in range(1, max_pages + 1):
        print(f"Fetching page {page}...")
        try:
            players = get_players_from_page(page, timeout=30, retry_attempts=3, retry_delay=1.0)
        except Exception as e:
            print(f"  Error on page {page}: {e}")
            break

        if not players:
            print(f"  No players found on page {page}, stopping.")
            break

        # Deduplicate by externalId
        new_players = []
        for p in players:
            ext_id = p.get("externalId")
            if ext_id and ext_id not in seen_ids:
                seen_ids.add(ext_id)
                new_players.append(p)

        all_players.extend(new_players)
        print(f"  Added {len(new_players)} new players (total unique: {len(all_players)})")

        # If we got fewer new players than page size, we might be at the end
        if len(new_players) < len(players):
            print(f"  Possible end of list reached.")
            break

        time.sleep(0.3)  # Be polite

    return all_players


def save_players(players: list[dict], filename: str = "mut27_players.json"):
    """Legacy save function - kept for backward compatibility."""
    json_path = OUTPUT_DIR / filename
    csv_path = OUTPUT_DIR / filename.replace(".json", ".csv")

    with open(json_path, "w", encoding="utf-8") as f:
        json.dump({"data": players}, f, indent=2, ensure_ascii=False)

    if players:
        flat_players = []
        for p in players:
            flat = {
                "playerName": p.get("playerName", ""),
                "ovr": p.get("ovr", ""),
                "position": p.get("position", ""),
                "program": p.get("program", ""),
                "team": p.get("team", ""),
                "price": p.get("price", ""),
                "externalId": p.get("externalId", ""),
                "url": p.get("url", ""),
            }
            flat_players.append(flat)

        fieldnames = list(flat_players[0].keys())
        with open(csv_path, "w", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(flat_players)

    print(f"Saved {len(players)} players to {json_path} and {csv_path}")


def main():
    """Main entry point with enhanced features."""
    args = parse_arguments()
    
    # Set logging level based on verbose flag
    if args.verbose:
        logger.setLevel(logging.DEBUG)
    
    # Set output directory
    output_dir = Path(args.output_dir)
    output_dir.mkdir(exist_ok=True)
    
    # Handle core-data only mode
    if args.core_data_only:
        if not CORE_DATA_AVAILABLE:
            logger.error("Core-data scraper module not available")
            return
        
        logger.info("=" * 60)
        logger.info("Core-Data Scraper Mode")
        logger.info("=" * 60)
        logger.info(f"Output directory: {output_dir}")
        logger.info(f"Incremental mode: {args.core_data_incremental}")
        logger.info("=" * 60)
        
        result = scrape_core_data(
            output_dir=output_dir,
            incremental=args.core_data_incremental,
            timeout=args.timeout,
            retry_attempts=args.retry_attempts
        )
        
        if result["success"]:
            logger.info("Core-data scraping completed successfully!")
        else:
            logger.error(f"Core-data scraping failed: {result.get('error')}")
        return
    
    logger.info("=" * 60)
    logger.info("Enhanced MUT.GG Player Scraper")
    logger.info("=" * 60)
    logger.info(f"Configuration:")
    logger.info(f"  Pages to scrape: {args.pages}")
    logger.info(f"  Parallel workers: {args.parallel}")
    logger.info(f"  Output format: {args.format}")
    logger.info(f"  Output directory: {output_dir}")
    logger.info(f"  External IDs only: {args.external_ids_only}")
    logger.info(f"  Resume mode: {args.resume}")
    logger.info(f"  Request timeout: {args.timeout}s")
    logger.info(f"  Retry attempts: {args.retry_attempts}")
    logger.info(f"  Core-data scraping: {args.core_data}")
    logger.info("=" * 60)
    
    start_time = time.time()
    
    try:
        # Use parallel scraper
        players = get_all_players_parallel(
            max_pages=args.pages,
            parallel_workers=args.parallel,
            timeout=args.timeout,
            retry_attempts=args.retry_attempts,
            retry_delay=1.0,
            rate_limit_delay=0.3,
            resume=args.resume
        )
        
        if not players:
            logger.error("No players were scraped. Check logs for errors.")
            return
        
        # Export data
        logger.info("Exporting data...")
        exported_files = export_players(
            players, 
            output_dir, 
            args.format, 
            args.external_ids_only
        )
        
        # Scrape core-data if requested
        if args.core_data and CORE_DATA_AVAILABLE:
            logger.info("Scraping core-data...")
            core_data_result = scrape_core_data(
                output_dir=output_dir,
                incremental=args.core_data_incremental,
                timeout=args.timeout,
                retry_attempts=args.retry_attempts
            )
            if core_data_result["success"]:
                logger.info(f"Core-data scraped: {core_data_result['abilities']} abilities, {core_data_result['teams']} teams, {core_data_result['programs']} programs")
            else:
                logger.warning(f"Core-data scraping failed: {core_data_result.get('error')}")
        elif args.core_data and not CORE_DATA_AVAILABLE:
            logger.warning("Core-data scraping requested but module not available")
        
        # Print summary statistics
        elapsed_time = time.time() - start_time
        logger.info("=" * 60)
        logger.info("SCRAPER SUMMARY")
        logger.info("=" * 60)
        logger.info(f"Total players scraped: {len(players)}")
        logger.info(f"Total time elapsed: {elapsed_time:.2f}s ({elapsed_time/60:.2f} minutes)")
        logger.info(f"Average rate: {len(players)/elapsed_time:.2f} players/second")
        
        with_prices = [p for p in players if p.get("price")]
        logger.info(f"Players with prices: {len(with_prices)}")
        
        if with_prices:
            sample = with_prices[0]
            logger.info(f"Sample player: {sample['playerName']} - {sample['ovr']} OVR - {sample['price']}")
        
        logger.info(f"Exported files: {len(exported_files)}")
        for file_path in exported_files:
            logger.info(f"  - {file_path}")
        
        logger.info("=" * 60)
        logger.info("Scraping completed successfully!")
        
    except KeyboardInterrupt:
        logger.warning("Scraping interrupted by user")
        logger.info("Progress has been saved. Use --resume to continue.")
    except Exception as e:
        logger.error(f"Scraping failed with error: {e}")
        raise


if __name__ == "__main__":
    main()
