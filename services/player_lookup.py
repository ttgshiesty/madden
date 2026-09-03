#!/usr/bin/env python3
"""
Player Lookup Service
Provides fast in-memory hash map lookups for auction house sniper integration.
"""

import sqlite3
import json
import logging
from pathlib import Path
from typing import Dict, Optional, List
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
INPUT_JSON = DATA_DIR / "mut27_players.json"


class PlayerLookup:
    """Fast in-memory player lookup service with SQLite fallback."""
    
    def __init__(self, use_sqlite: bool = True, auto_refresh: bool = False):
        """
        Initialize player lookup service.
        
        Args:
            use_sqlite: If True, load from SQLite database (preferred)
            auto_refresh: If True, automatically refresh data periodically
        """
        self.use_sqlite = use_sqlite and PLAYERS_DB.exists()
        self.auto_refresh = auto_refresh
        self.player_hash: Dict[str, Dict] = {}
        self.name_hash: Dict[str, str] = {}  # name -> external_id
        self.last_refresh = None
        
        if self.use_sqlite:
            self._load_from_sqlite()
        else:
            self._load_from_json()
        
        logger.info(f"PlayerLookup initialized with {len(self.player_hash)} players")
    
    def _load_from_sqlite(self):
        """Load player data from SQLite database into memory hash."""
        try:
            conn = sqlite3.connect(PLAYERS_DB)
            conn.row_factory = sqlite3.Row
            cursor = conn.cursor()
            
            cursor.execute('SELECT * FROM players')
            rows = cursor.fetchall()
            
            for row in rows:
                player_data = dict(row)
                external_id = player_data['external_id']
                player_name = player_data['player_name']
                
                self.player_hash[external_id] = player_data
                self.name_hash[player_name.lower()] = external_id
            
            conn.close()
            self.last_refresh = datetime.now()
            logger.info(f"Loaded {len(self.player_hash)} players from SQLite database")
            
        except Exception as e:
            logger.error(f"Failed to load from SQLite: {e}")
            logger.info("Falling back to JSON file")
            self._load_from_json()
    
    def _load_from_json(self):
        """Load player data from JSON file into memory hash."""
        try:
            with open(INPUT_JSON, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            players = data.get('data', [])
            
            for player in players:
                external_id = player.get('externalId')
                if not external_id:
                    continue
                
                # Convert to consistent format
                player_data = {
                    'external_id': external_id,
                    'player_name': player.get('playerName', ''),
                    'ovr': player.get('ovr'),
                    'position': player.get('position', ''),
                    'program': player.get('program', ''),
                    'team': player.get('team', ''),
                    'url': player.get('url', ''),
                    'image_url': f"https://media.mut.gg/27/mutdb/playeritem/card_{external_id}.webp",
                    'scraped_at': datetime.now().isoformat()
                }
                
                self.player_hash[external_id] = player_data
                self.name_hash[player_data['player_name'].lower()] = external_id
            
            self.last_refresh = datetime.now()
            logger.info(f"Loaded {len(self.player_hash)} players from JSON file")
            
        except Exception as e:
            logger.error(f"Failed to load from JSON: {e}")
    
    def get_by_external_id(self, external_id: str) -> Optional[Dict]:
        """
        Get player information by external ID.
        
        Args:
            external_id: Player external ID
            
        Returns:
            Player data dict or None if not found
        """
        return self.player_hash.get(str(external_id))
    
    def get_by_name(self, player_name: str) -> Optional[Dict]:
        """
        Get player information by name (case-insensitive).
        
        Args:
            player_name: Player name
            
        Returns:
            Player data dict or None if not found
        """
        external_id = self.name_hash.get(player_name.lower())
        if external_id:
            return self.player_hash.get(external_id)
        return None
    
    def search_by_name(self, search_term: str, limit: int = 10) -> List[Dict]:
        """
        Search players by name (fuzzy search).
        
        Args:
            search_term: Search term
            limit: Maximum results to return
            
        Returns:
            List of matching player data dicts
        """
        search_term = search_term.lower()
        results = []
        
        for external_id, player in self.player_hash.items():
            if search_term in player['player_name'].lower():
                results.append(player)
                if len(results) >= limit:
                    break
        
        return results
    
    def get_by_position(self, position: str) -> List[Dict]:
        """
        Get all players for a specific position.
        
        Args:
            position: Player position (QB, HB, WR, etc.)
            
        Returns:
            List of player data dicts
        """
        position = position.upper()
        return [p for p in self.player_hash.values() if p.get('position') == position]
    
    def get_by_ovr_range(self, min_ovr: int, max_ovr: int) -> List[Dict]:
        """
        Get players within OVR range.
        
        Args:
            min_ovr: Minimum OVR
            max_ovr: Maximum OVR
            
        Returns:
            List of player data dicts
        """
        results = []
        for player in self.player_hash.values():
            ovr = player.get('ovr')
            if ovr and min_ovr <= ovr <= max_ovr:
                results.append(player)
        return results
    
    def get_batch(self, external_ids: List[str]) -> Dict[str, Dict]:
        """
        Get multiple players by external IDs.
        
        Args:
            external_ids: List of external IDs
            
        Returns:
            Dict mapping external_id to player data
        """
        results = {}
        for external_id in external_ids:
            player = self.get_by_external_id(external_id)
            if player:
                results[external_id] = player
        return results
    
    def format_player_display(self, external_id: str) -> str:
        """
        Format player information for display.
        
        Args:
            external_id: Player external ID
            
        Returns:
            Formatted string: "Player Name (OVR) POS - Team"
        """
        player = self.get_by_external_id(external_id)
        if not player:
            return f"Unknown Player ({external_id})"
        
        name = player.get('player_name', 'Unknown')
        ovr = player.get('ovr', '?')
        position = player.get('position', '?')
        team = player.get('team', 'N/A')
        
        return f"{name} ({ovr}) {position} - {team}"
    
    def refresh(self):
        """Refresh player data from source."""
        logger.info("Refreshing player data...")
        self.player_hash.clear()
        self.name_hash.clear()
        
        if self.use_sqlite:
            self._load_from_sqlite()
        else:
            self._load_from_json()
        
        logger.info(f"Refreshed {len(self.player_hash)} players")
    
    def get_statistics(self) -> Dict:
        """Get lookup service statistics."""
        return {
            'total_players': len(self.player_hash),
            'data_source': 'sqlite' if self.use_sqlite else 'json',
            'last_refresh': self.last_refresh.isoformat() if self.last_refresh else None,
            'memory_usage_mb': len(json.dumps(self.player_hash)) / (1024 * 1024)
        }


# Singleton instance for easy import
_lookup_instance: Optional[PlayerLookup] = None

def get_lookup() -> PlayerLookup:
    """Get singleton PlayerLookup instance."""
    global _lookup_instance
    if _lookup_instance is None:
        _lookup_instance = PlayerLookup()
    return _lookup_instance


if __name__ == "__main__":
    # Test the lookup service
    lookup = PlayerLookup()
    
    # Test lookup by external ID
    test_id = "109027227"
    player = lookup.get_by_external_id(test_id)
    if player:
        print(f"✅ Found player: {lookup.format_player_display(test_id)}")
    else:
        print(f"❌ Player not found: {test_id}")
    
    # Test search
    results = lookup.search_by_name("Reggie")
    print(f"✅ Found {len(results)} players matching 'Reggie'")
    
    # Test statistics
    stats = lookup.get_statistics()
    print(f"📊 Statistics: {stats}")