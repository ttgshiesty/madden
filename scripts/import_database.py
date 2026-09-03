#!/usr/bin/env python3
"""
Player Database Import
Imports shared player database for use with lookup service.
"""

import shutil
import logging
from pathlib import Path

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Paths
DATA_DIR = Path(__file__).resolve().parent.parent / "Data"
PLAYERS_DB = DATA_DIR / "players.db"


def import_database(source_db: str) -> bool:
    """
    Import shared player database.
    
    Args:
        source_db: Path to source database file
        
    Returns:
        True if successful, False otherwise
    """
    source_path = Path(source_db)
    
    if not source_path.exists():
        logger.error(f"Source database not found: {source_db}")
        return False
    
    # Backup existing database if it exists
    if PLAYERS_DB.exists():
        backup_path = DATA_DIR / "players.db.backup"
        shutil.copy2(PLAYERS_DB, backup_path)
        logger.info(f"Backed up existing database to: {backup_path}")
    
    # Copy new database
    shutil.copy2(source_path, PLAYERS_DB)
    
    file_size_mb = PLAYERS_DB.stat().st_size / (1024 * 1024)
    logger.info(f"Imported database: {PLAYERS_DB}")
    logger.info(f"File size: {file_size_mb:.2f} MB")
    
    return True


if __name__ == "__main__":
    import sys
    
    if len(sys.argv) < 2:
        logger.error("Usage: python import_database.py <source_database_path>")
        sys.exit(1)
    
    source_db = sys.argv[1]
    
    logger.info("=" * 60)
    logger.info("Import Player Database")
    logger.info("=" * 60)
    logger.info(f"Source: {source_db}")
    
    if import_database(source_db):
        logger.info("=" * 60)
        logger.info("Import completed successfully!")
        logger.info("You can now use the PlayerLookup service")
        logger.info("=" * 60)
    else:
        logger.error("Import failed")
        sys.exit(1)