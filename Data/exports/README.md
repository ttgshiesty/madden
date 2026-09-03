# Player Database Export

This database contains player information for auction house sniper integration.

## Database Information
- **Players**: 1,497 unique players
- **Last Updated**: 2026-08-22 02:24:21
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
