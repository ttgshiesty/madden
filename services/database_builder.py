#!/usr/bin/env python3
"""
Player Database Builder
Constructs SQLite database from scraped player data for fast lookups and sharing.
"""

import sqlite3
import json
import logging
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Optional

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Paths
DATA_DIR = Path(__file__).resolve().parent.parent / "Data"
DATA_DIR.mkdir(exist_ok=True)
PLAYERS_DB = DATA_DIR / "players.db"
PLAYERS_BACKUP_DB = DATA_DIR / "players_backup.db"
INPUT_JSON = DATA_DIR / "mut27_players.json"


def create_database_schema(db_path: Path) -> sqlite3.Connection:
    """Create database schema with indexes for fast lookups."""
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Create players table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS players (
            external_id TEXT PRIMARY KEY,
            player_name TEXT NOT NULL,
            ovr INTEGER,
            position TEXT,
            program TEXT,
            team TEXT,
            url TEXT,
            image_url TEXT,
            scraped_at TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    # Create indexes for fast lookups
    cursor.execute('CREATE INDEX IF NOT EXISTS idx_player_name ON players(player_name)')
    cursor.execute('CREATE INDEX IF NOT EXISTS idx_ovr ON players(ovr)')
    cursor.execute('CREATE INDEX IF NOT EXISTS idx_position ON players(position)')
    cursor.execute('CREATE INDEX IF NOT EXISTS idx_program ON players(program)')
    cursor.execute('CREATE INDEX IF NOT EXISTS idx_team ON players(team)')
    
    conn.commit()
    logger.info(f"Created database schema with indexes")
    return conn


def import_scraped_data(conn: sqlite3.Connection, json_path: Path) -> int:
    """Import scraped player data from JSON file."""
    if not json_path.exists():
        logger.error(f"Input file not found: {json_path}")
        return 0
    
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    players = data.get('data', [])
    if not players:
        logger.error("No player data found in JSON file")
        return 0
    
    cursor = conn.cursor()
    imported_count = 0
    updated_count = 0
    scraped_at = datetime.now().isoformat()
    
    for player in players:
        external_id = player.get('externalId')
        if not external_id:
            continue
        
        # Generate image URL if not present
        if not player.get('imageUrl') and external_id:
            image_url = f"https://media.mut.gg/27/mutdb/playeritem/card_{external_id}.webp"
        else:
            image_url = player.get('imageUrl', '')
        
        # Check if player exists
        cursor.execute('SELECT external_id FROM players WHERE external_id = ?', (external_id,))
        existing = cursor.fetchone()
        
        if existing:
            # Update existing record
            cursor.execute('''
                UPDATE players SET 
                    player_name = ?,
                    ovr = ?,
                    position = ?,
                    program = ?,
                    team = ?,
                    url = ?,
                    image_url = ?,
                    updated_at = CURRENT_TIMESTAMP
                WHERE external_id = ?
            ''', (
                player.get('playerName', ''),
                player.get('ovr') or None,
                player.get('position', ''),
                player.get('program', ''),
                player.get('team', ''),
                player.get('url', ''),
                image_url,
                external_id
            ))
            updated_count += 1
        else:
            # Insert new record
            cursor.execute('''
                INSERT INTO players (
                    external_id, player_name, ovr, position, program, team, url, image_url, scraped_at
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (
                external_id,
                player.get('playerName', ''),
                player.get('ovr') or None,
                player.get('position', ''),
                player.get('program', ''),
                player.get('team', ''),
                player.get('url', ''),
                image_url,
                scraped_at
            ))
            imported_count += 1
    
    conn.commit()
    logger.info(f"Imported {imported_count} new players, updated {updated_count} existing players")
    return imported_count + updated_count


def verify_database(conn: sqlite3.Connection) -> Dict:
    """Verify database integrity and return statistics."""
    cursor = conn.cursor()
    
    stats = {}
    
    # Total players
    cursor.execute('SELECT COUNT(*) FROM players')
    stats['total_players'] = cursor.fetchone()[0]
    
    # Unique external IDs
    cursor.execute('SELECT COUNT(DISTINCT external_id) FROM players')
    stats['unique_external_ids'] = cursor.fetchone()[0]
    
    # Players by position
    cursor.execute('SELECT position, COUNT(*) FROM players GROUP BY position ORDER BY COUNT(*) DESC')
    stats['by_position'] = dict(cursor.fetchall())
    
    # Players by OVR range
    cursor.execute('''
        SELECT 
            CASE 
                WHEN ovr >= 90 THEN '90+'
                WHEN ovr >= 85 THEN '85-89'
                WHEN ovr >= 80 THEN '80-84'
                WHEN ovr >= 75 THEN '75-79'
                ELSE '74-'
            END as ovr_range,
            COUNT(*)
        FROM players 
        GROUP BY ovr_range
        ORDER BY ovr_range DESC
    ''')
    stats['by_ovr_range'] = dict(cursor.fetchall())
    
    # Database size
    stats['db_size_mb'] = PLAYERS_DB.stat().st_size / (1024 * 1024) if PLAYERS_DB.exists() else 0
    
    return stats


def backup_database(db_path: Path, backup_path: Path):
    """Create backup of database for sharing."""
    import shutil
    if db_path.exists():
        shutil.copy2(db_path, backup_path)
        logger.info(f"Created backup: {backup_path}")
    else:
        logger.warning(f"Database file not found: {db_path}")


def build_database(input_json: Optional[Path] = None, output_db: Optional[Path] = None):
    """Main function to build player database."""
    if input_json is None:
        input_json = INPUT_JSON
    if output_db is None:
        output_db = PLAYERS_DB
    
    logger.info("=" * 60)
    logger.info("Player Database Builder")
    logger.info("=" * 60)
    logger.info(f"Input: {input_json}")
    logger.info(f"Output: {output_db}")
    
    # Create database schema
    conn = create_database_schema(output_db)
    
    # Import data
    count = import_scraped_data(conn, input_json)
    
    if count == 0:
        logger.error("No players imported")
        conn.close()
        return False
    
    # Verify database
    stats = verify_database(conn)
    
    # Create backup
    backup_database(output_db, PLAYERS_BACKUP_DB)
    
    conn.close()
    
    # Print summary
    logger.info("=" * 60)
    logger.info("DATABASE BUILD SUMMARY")
    logger.info("=" * 60)
    logger.info(f"Total players: {stats['total_players']}")
    logger.info(f"Unique external IDs: {stats['unique_external_ids']}")
    logger.info(f"Database size: {stats['db_size_mb']:.2f} MB")
    logger.info(f"Position distribution: {stats['by_position']}")
    logger.info(f"OVR distribution: {stats['by_ovr_range']}")
    logger.info("=" * 60)
    logger.info("Database built successfully!")
    
    return True


if __name__ == "__main__":
    success = build_database()
    if success:
        print("✅ Player database built successfully!")
    else:
        print("❌ Failed to build player database")