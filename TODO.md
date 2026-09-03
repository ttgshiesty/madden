# MUT 27 Dashboard - COMPLETE FIX LIST

## CRITICAL BLOCKERS (nothing works until these are fixed)

### 1. Fix mutgg_scraper.py - API returns same 10 players on every page
- **Status**: BROKEN
- **Problem**: `get_all_players()` loops pages but API returns identical 10 players (Reggie Bush, Sauce Gardner, Christian Watson, DK Metcalf, etc.) on every request
- **Root cause**: Unknown - need to test different params/headers/endpoints
- **Impact**: Data/mut27_players.json has 2720 entries but only 10 unique players
- **Fix approach**: 
  - Test API without pagination params
  - Test different User-Agent strings
  - Test if API needs cookies/session
  - Test alternative endpoints
  - If API is broken, scrape player list pages directly from mut.gg/players/

### 2. Re-scrape ALL players with working scraper
- **Status**: BLOCKED by #1
- **Problem**: Data/mut27_players.json is garbage (10 unique players x 272)
- **Fix**: Delete file, run fixed scraper, verify 2000+ unique players
- **Validation**: Check unique externalId count > 2000

### 3. Fix position/program fields showing as "[object Object]"
- **Status**: BROKEN
- **Problem**: `transform_player()` does `str(api_player["program"])` when it's a dict, producing "[object Object]"
- **Fix**: Extract `.name` from nested objects properly
- **Impact**: UI shows broken text instead of "QB", "WR", "Legends", etc.

### 4. Fix server.ts static file serving paths
- **Status**: BROKEN
- **Problem**: Lines 850-857 serve from `path.join(__dirname, 'main-project')` but files are IN `main-project`, not inside a subdirectory
- **Fix**: Change to `path.join(__dirname)` or correct relative path
- **Impact**: ALL pages return 404 or wrong files

### 5. Fix server.ts route for `/binder` 
- **Status**: BROKEN
- **Problem**: Line 876 does `res.sendFile(path.join(mainProjectPath, 'binder'))` but `binder` is a FILE not a directory
- **Fix**: Should be `res.sendFile(path.join(mainProjectPath, 'binder'))` - wait, that's what it says. But `binder` has no extension. Express might not serve it correctly.
- **Impact**: /binder route broken

### 6. Fix server.ts route for `/snipes-classic`
- **Status**: BROKEN
- **Problem**: Line 868 does `res.sendFile(path.join(mainProjectPath, 'snipes'))` but `snipes` is a file without extension
- **Fix**: Rename to `snipes.html` or add proper extension handling
- **Impact**: /snipes-classic route broken

## HIGH PRIORITY (core functionality)

### 7. Verify server.ts loads Data/mut27_players.json on startup
- **Status**: UNKNOWN
- **Check**: Lines 52-69 load the file, but with broken data it's useless
- **Fix**: Depends on #2

### 8. Verify server.ts price endpoints return correct data
- **Status**: UNKNOWN
- **Endpoints to test**:
  - GET /api/prices/overall
  - GET /api/prices/dashboard
  - GET /api/prices/player/:externalId
  - GET /api/cards
  - GET /api/snipes/feed
- **Fix**: Depends on #2, #3

### 9. Fix index.html script loading
- **Status**: NEEDS VERIFICATION
- **Current**: `<script type="module" src="/index.js"></script>`
- **Check**: Does /index.js exist? Does it import correctly?
- **Impact**: Main dashboard won't load if broken

### 10. Fix cards.html script loading order
- **Status**: NEEDS VERIFICATION
- **Current order**:
  1. /img-proxy.js
  2. /binder-client.js
  3. /alert-modal.js
  4. /cards.js
  5. /nav.js
- **Check**: Are all globals defined before use? Any missing dependencies?

### 11. Fix binder/ script loading order
- **Status**: NEEDS VERIFICATION
- **Current order** (all defer):
  1. /img-proxy.js?v=1
  2. /cards.js?v=20
  3. /binder.js?v=3
  4. /binder-client.js?v=1
  5. /nav.js?v=7
  6. /analytics.js?v=3
- **Check**: Does binder.js depend on cards.js? Are globals available?

### 12. Fix snipes/ script loading
- **Status**: UNKNOWN
- **Check**: What scripts does snipes load? Are they present?

### 13. Create prices.html page
- **Status**: MISSING
- **Problem**: Server has route `GET /prices` but no prices.html file exists
- **Fix**: Create prices.html or remove route

## MEDIUM PRIORITY (data quality)

### 14. Deduplicate players by externalId
- **Status**: NEEDED
- **Problem**: Even after scraper fix, API might return duplicates
- **Fix**: Add dedup logic in scraper: `seen = {}`, skip if externalId already seen

### 15. Clean up scraper output format
- **Status**: NEEDED
- **Problem**: Current transform flattens some fields but keeps nested objects
- **Fix**: Ensure consistent flat structure for all fields

### 16. Add price refresh cycle for mut.gg data
- **Status**: NOT IMPLEMENTED
- **Problem**: Prices are static after scrape
- **Fix**: Add endpoint to fetch fresh prices from mut.gg API on schedule

### 17. Integrate EA Blaze live prices with mut.gg metadata
- **Status**: PARTIALLY DONE
- **Problem**: server.ts has both data sources but doesn't merge them properly
- **Fix**: Join eaBlazeAuctions with mutGGPlayers by externalId/cardId

## LOW PRIORITY (polish)

### 18. Remove unused files
- **Files to check**:
  - .trash/ directory (13 old hashed files)
  - MUT-GG/ directory (unused source files)
  - exstenion/ directory (old extension build)
  - scrapper/Regression_On_Price.py
  - scrapper/Unused_Code.py
  - MUTScraper.py (old scraper)

### 19. Clean up duplicate JS files
- **Duplicates found**:
  - analytics.js + analytics-service.js
  - animation.js + panel-animations.js
  - binder.js + binder-service.js + binder-store.js + binder-view.js
  - icons.js
  - layout-system.js
  - player.js + playeritem.js
  - sample-deals.js
  - app-shell.js

### 20. Verify all HTML pages have proper meta tags
- **Check**: title, description, favicon on all pages

---

## EXECUTION ORDER (strict)

1. **#1** - Fix scraper pagination (BLOCKS EVERYTHING)
2. **#2** - Re-scrape all players (depends on #1)
3. **#3** - Fix position/program fields (depends on #2)
4. **#4** - Fix server.ts static paths (independent)
5. **#5** - Fix /binder route (depends on #4)
6. **#6** - Fix /snipes-classic route (depends on #4)
7. **#7** - Verify server loads data (depends on #2)
8. **#8** - Verify price endpoints (depends on #3, #7)
9. **#9** - Fix index.html scripts (independent)
10. **#10** - Fix cards.html scripts (independent)
11. **#11** - Fix binder/ scripts (depends on #5)
12. **#12** - Fix snipes/ scripts (independent)
13. **#13** - Create prices.html (independent)
14. **#14** - Deduplicate players (depends on #2)
15. **#15** - Clean scraper output (depends on #2)
16. **#16** - Add price refresh (depends on #8)
17. **#17** - Merge EA Blaze + mut.gg data (depends on #8)
18. **#18** - Remove unused files (independent)
19. **#19** - Clean duplicate JS (independent)
20. **#20** - Verify meta tags (independent)
