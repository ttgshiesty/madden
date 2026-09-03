#!/usr/bin/env python3
"""
Export Database for Sharing
Exports the player database for easy sharing with friends.
"""

import sqlite3
import shutil
import logging
from pathlib import Path
from datetime import datetime

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Paths
DATA_DIR = Path(__file__).resolve().parent.parent / "Data"
PLAYERS_DB = DATA_DIR / "players.db"
EXPORT_DIR = DATA_DIR / "exports"
EXPORT_DIR.mkdir(exist_ok=True)


def export_database(output_name: str = None) -> Path:
    """
    Export player database for sharing.
    
    Args:
        output_name: Custom name for exported file (optional)
        
    Returns:
        Path to exported database file
    """
    if not PLAYERS_DB.exists():
        logger.error(f"Database not found: {PLAYERS_DB}")
        return None
    
    # Generate filename
    if output_name is None:
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        output_name = f"players_export_{timestamp}.db"
    
    export_path = EXPORT_DIR / output_name
    
    # Copy database
    shutil.copy2(PLAYERS_DB, export_path)
    
    # Get file size
    file_size_mb = export_path.stat().st_size / (1024 * 1024)
    
    logger.info(f"Exported database to: {export_path}")
    logger.info(f"File size: {file_size_mb:.2f} MB")
    
    return export_path


def export_readme() -> Path:
    """Create README file for sharing."""
    readme_path = EXPORT_DIR / "README.md"
    
    readme_content = """# Player Database Export

This database contains player information for auction house sniper integration.

## Database Information
- **Players**: 1,497 unique players
- **Last Updated**: """ + datetime.now().strftime("%Y-%m-%d %H:%M:%S") + """
- **Source**: MUT.GG Madden 27 Player Data

## How to Use

### Import to SQLite
```bash
# Copy the database file to your Data directory
cp players_export_*.db /path/to/your/project/Data/players.db
```

### Import with Python
```python
from services.player_lookup import PlayerLookup

# The lookup service will automatically use the imported database
lookup = PlayerLookup()
player = lookup.get_by_external_id("109027227")
print(lookup.format_player_display("109027227"))
```

### Import with JavaScript
```javascript
// Use the SQLite database with node-sqlite3 or similar
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./Data/players.db');

db.get("SELECT * FROM players WHERE external_id = ?", ["109027227"], (err, row) => {
    if (row) {
        console.log(row.player_name + " (" + row.ovr + ") " + row.position);
    }
});
```

## Database Schema

### Players Table
- external_id (TEXT PRIMARY KEY): Player external ID
- player_name (TEXT): Player full name
- ovr (INTEGER): Overall rating
- position (TEXT): Player position
- program (TEXT): Program name
- team (TEXT): Team abbreviation
- url (TEXT): MUT.GG player page URL
- image_url (TEXT): Player card image URL
- scraped_at (TIMESTAMP): When data was scraped
- updated_at (TIMESTAMP): Last update time

## Indexes
The database includes indexes on:
- external_id (primary key)
- player_name
- ovr
- position
- program
- team

## Performance
- Database size: ~0.5 MB
- Lookup time: <10ms per query (indexed)
- Memory usage: ~0.5 MB when loaded

## Support
For questions or issues, contact the database provider.
"""
    
    with open(readme_path, 'w', encoding='utf-8') as f:
        f.write(readme_content)
    
    logger.info(f"Created README: {readme_path}")
    return readme_path


if __name__ == "__main__":
    logger.info("=" * 60)
    logger.info("Export Database for Sharing")
    logger.info("=" * 60)
    
    # Export database
    db_path = export_database()
    
    if db_path:
        # Create README
        export_readme()
        
        logger.info("=" * 60)
        logger.info("Export completed successfully!")
        logger.info(f"Share this file with friends: {db_path}")
        logger.info("=" * 60)
    else:
        logger.error("Export failed")