#!/usr/bin/env python3
"""
Example: Using Player Lookup for Auction House Sniper
Demonstrates how to use the PlayerLookup service for auction house integration.
"""

import sys
from pathlib import Path

# Add parent directory to path for imports
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from services.player_lookup import PlayerLookup

def main():
    print("=" * 60)
    print("Auction House Sniper - Player Lookup Example")
    print("=" * 60)
    
    # Initialize lookup service
    lookup = PlayerLookup()
    
    # Example 1: Quick lookup by external ID
    print("\n📋 Example 1: Quick Lookup by External ID")
    print("-" * 40)
    test_ids = ["109027227", "109022260", "109022373"]
    
    for external_id in test_ids:
        player = lookup.get_by_external_id(external_id)
        if player:
            display = lookup.format_player_display(external_id)
            print(f"  {external_id}: {display}")
        else:
            print(f"  {external_id}: Player not found")
    
    # Example 2: Batch lookup for multiple cards
    print("\n📋 Example 2: Batch Lookup for Multiple Cards")
    print("-" * 40)
    batch_ids = ["109027227", "109022260", "109022373", "111022115", "111020552"]
    batch_results = lookup.get_batch(batch_ids)
    
    print(f"  Looked up {len(batch_results)} of {len(batch_ids)} players:")
    for external_id, player in batch_results.items():
        print(f"    {lookup.format_player_display(external_id)}")
    
    # Example 3: Search by player name
    print("\n📋 Example 3: Search by Player Name")
    print("-" * 40)
    search_results = lookup.search_by_name("Reggie", limit=5)
    print(f"  Found {len(search_results)} players matching 'Reggie':")
    for player in search_results:
        print(f"    {player['player_name']} ({player['ovr']}) {player['position']}")
    
    # Example 4: Filter by position
    print("\n📋 Example 4: Filter by Position")
    print("-" * 40)
    wr_players = lookup.get_by_position("WR")
    print(f"  Found {len(wr_players)} Wide Receivers:")
    for player in wr_players[:5]:  # Show first 5
        print(f"    {player['player_name']} ({player['ovr']})")
    
    # Example 5: Filter by OVR range
    print("\n📋 Example 5: Filter by OVR Range")
    print("-" * 40)
    elite_players = lookup.get_by_ovr_range(85, 90)
    print(f"  Found {len(elite_players)} elite players (85-90 OVR):")
    for player in elite_players[:5]:  # Show first 5
        print(f"    {player['player_name']} ({player['ovr']}) {player['position']}")
    
    # Example 6: Performance test
    print("\n📋 Example 6: Performance Test")
    print("-" * 40)
    import time
    
    # Test lookup speed
    test_id = "109027227"
    iterations = 1000
    
    start_time = time.time()
    for _ in range(iterations):
        lookup.get_by_external_id(test_id)
    elapsed = time.time() - start_time
    
    print(f"  {iterations} lookups in {elapsed:.4f}s")
    print(f"  Average: {(elapsed/iterations)*1000:.2f}ms per lookup")
    print(f"  Rate: {iterations/elapsed:.0f} lookups/second")
    
    # Statistics
    print("\n📊 Service Statistics")
    print("-" * 40)
    stats = lookup.get_statistics()
    print(f"  Total players: {stats['total_players']}")
    print(f"  Data source: {stats['data_source']}")
    print(f"  Memory usage: {stats['memory_usage_mb']:.2f} MB")
    print(f"  Last refresh: {stats['last_refresh']}")
    
    print("\n" + "=" * 60)
    print("Player lookup service ready for auction house sniper integration!")
    print("=" * 60)

if __name__ == "__main__":
    main()