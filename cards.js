// Position-relevant attributes in priority order. Listed first in the modal
// with prominent bar visualization; the rest fall into a collapsed "Other"
// section so a HB's Throw Accuracy doesn't dilute his Trucking/Speed.
var POSITION_RELEVANT_ATTRS = {
  QB: ['throwPower','throwAccuracyShort','throwAccuracyMedium','throwAccuracyDeep','throwOnTheRun','throwUnderPressure','playAction','breakSack','awareness','speed','acceleration','ballCarrierVision'],
  HB: ['speed','acceleration','agility','carrying','ballCarrierVision','breakTackle','trucking','juke','spinMove','stiffArm','changeOfDirection','catching','awareness','catchInTraffic'],
  FB: ['speed','acceleration','strength','carrying','breakTackle','leadBlock','impactBlocking','passBlock','runBlock','awareness','catching'],
  WR: ['speed','acceleration','agility','catching','catchInTraffic','spectacularCatch','shortRouteRun','mediumRouteRun','deepRouteRun','release','jumping','awareness','changeOfDirection','breakTackle'],
  TE: ['speed','acceleration','catching','catchInTraffic','spectacularCatch','shortRouteRun','mediumRouteRun','release','runBlock','impactBlocking','leadBlock','awareness','breakTackle'],
  LT: ['passBlock','passBlockPower','passBlockFinesse','runBlock','runBlockPower','runBlockFinesse','strength','awareness','impactBlocking','leadBlock'],
  LG: ['passBlock','passBlockPower','passBlockFinesse','runBlock','runBlockPower','runBlockFinesse','strength','awareness','impactBlocking','leadBlock'],
  C:  ['passBlock','passBlockPower','passBlockFinesse','runBlock','runBlockPower','runBlockFinesse','strength','awareness','impactBlocking','leadBlock'],
  RG: ['passBlock','passBlockPower','passBlockFinesse','runBlock','runBlockPower','runBlockFinesse','strength','awareness','impactBlocking','leadBlock'],
  RT: ['passBlock','passBlockPower','passBlockFinesse','runBlock','runBlockPower','runBlockFinesse','strength','awareness','impactBlocking','leadBlock'],
  LE: ['speed','acceleration','strength','powerMoves','finesseMoves','blockShedding','tackle','hitPower','pursuit','playRecognition','awareness'],
  RE: ['speed','acceleration','strength','powerMoves','finesseMoves','blockShedding','tackle','hitPower','pursuit','playRecognition','awareness'],
  DT: ['strength','powerMoves','finesseMoves','blockShedding','tackle','hitPower','awareness','playRecognition','pursuit','acceleration'],
  LOLB: ['speed','acceleration','agility','tackle','hitPower','pursuit','playRecognition','awareness','zoneCoverage','manCoverage','powerMoves','finesseMoves','blockShedding'],
  ROLB: ['speed','acceleration','agility','tackle','hitPower','pursuit','playRecognition','awareness','zoneCoverage','manCoverage','powerMoves','finesseMoves','blockShedding'],
  MLB:  ['speed','acceleration','agility','tackle','hitPower','pursuit','playRecognition','awareness','zoneCoverage','manCoverage','blockShedding'],
  CB: ['speed','acceleration','agility','manCoverage','zoneCoverage','press','catching','catchInTraffic','awareness','tackle','hitPower','playRecognition','jumping'],
  FS: ['speed','acceleration','agility','zoneCoverage','manCoverage','tackle','hitPower','pursuit','playRecognition','awareness','catching','catchInTraffic'],
  SS: ['speed','acceleration','agility','zoneCoverage','manCoverage','tackle','hitPower','pursuit','playRecognition','awareness','catching','catchInTraffic'],
  K:  ['kickPower','kickAccuracy','awareness'],
  P:  ['kickPower','kickAccuracy','awareness'],
  DEFAULT: ['speed','acceleration','agility','strength','awareness','jumping'],
};

var PAGE_SIZE = 60;
var currentOffset = 0;
var currentTotal = 0;
var filtersLoaded = false;
var debounceTimer = null;

// proxyImg() is defined globally in /img-proxy.js (loaded before this script).

// synergyId → NFL team shortname. Team chem id = teamId × 10 + 6000.
// Mirrors NFL_TEAM_ID_TO_SHORTNAME on the server.
var TEAM_ID_TO_SHORT = {
  6010: 'CHI', 6020: 'CIN', 6030: 'BUF', 6040: 'DEN', 6050: 'CLE',
  6060: 'TB',  6070: 'ARI', 6080: 'LAC', 6090: 'KC',  6100: 'IND',
  6110: 'DAL', 6120: 'MIA', 6130: 'PHI', 6140: 'ATL', 6150: 'SF',
  6160: 'NYG', 6170: 'JAX', 6180: 'NYJ', 6190: 'DET', 6200: 'GB',
  6210: 'CAR', 6220: 'NE',  6230: 'LV',  6240: 'LAR', 6250: 'BAL',
  6260: 'WAS', 6270: 'NO',  6280: 'SEA', 6290: 'PIT', 6300: 'TEN',
  6310: 'MIN', 6320: 'HOU'
};

// Ticker — load top players + snipe teasers
(function loadTicker() {
  Promise.all([
    fetch('/api/ticker').then(function(r) { return r.json(); }).catch(function() { return []; }),
    fetch('/api/snipes?limit=8&min_score=70').then(function(r) { return r.json(); }).then(function(d) { return d.snipes || []; }).catch(function() { return []; })
  ]).then(function(results) {
    var players = results[0];
    var snipes = results[1];
    var ticker = document.getElementById('ticker');
    if (!ticker) return;
    if (!players.length && !snipes.length) return;

    // Shuffle players
    for (var i = players.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = players[i]; players[i] = players[j]; players[j] = tmp;
    }

    var html = '';
    // Mix snipe teasers in between player items
    var snipeIdx = 0;
    for (var i = 0; i < players.length; i++) {
      html += tickerPlayerItem(players[i]);
      if (snipeIdx < snipes.length && i % 4 === 3) {
        html += tickerSnipeItem(snipes[snipeIdx++]);
      }
    }
    // Add remaining snipes
    while (snipeIdx < snipes.length) {
      html += tickerSnipeItem(snipes[snipeIdx++]);
    }
    ticker.innerHTML = html + html; // duplicate for seamless loop
  });
})();

function tickerPlayerItem(p) {
  var img = p.imageUrl
    ? '<img src="' + esc(proxyImg(p.imageUrl)) + '" alt="" onerror="this.style.display=\'none\'">'
    : '';
  return '<div class="ticker-item">' + img +
    '<span class="ticker-name">' + esc(p.playerName) + '</span>' +
    '<span class="ticker-ovr">' + p.ovr + ' OVR ' + esc(p.position) + '</span>' +
    '<span class="ticker-price">' + fmtCoins(p.buyNowPrice) + '</span></div>';
}

function tickerSnipeItem(s) {
  var ago = timeAgo(s.detectedAt);
  var pct = Math.round(s.discount * 100);
  var img = s.imageUrl
    ? '<img src="' + esc(proxyImg(s.imageUrl)) + '" alt="" onerror="this.style.display=\'none\'">'
    : '';
  var safeName = esc(s.playerName).replace(/'/g, "\\'");
  var safeProg = esc(s.program).replace(/'/g, "\\'");
  return '<div class="ticker-item ticker-snipe" onclick="showCardDetail(\'' + safeName + '\',' + s.ovr + ',\'' + safeProg + '\')" style="cursor:pointer">' + img +
    '<span class="ticker-snipe-tag">SNIPE</span>' +
    '<span class="ticker-name">' + esc(s.playerName) + '</span>' +
    '<span class="ticker-ovr">' + s.ovr + ' OVR &middot; ' + pct + '% off</span>' +
    '<span class="ticker-ago">' + ago + '</span></div>';
}

function esc(s) {
  var d = document.createElement('div');
  d.textContent = s || '';
  return d.innerHTML;
}

function fmtCoins(n) { return (n == null || isNaN(n)) ? '—' : n.toLocaleString('en-US'); }
function isBndCard(card) { return !!card && (card.isBnd === true || card.canAuction === false); }
// Kebab-case slug for SEO permalinks — must match the server-side parser
// in src/web/routes/cardPage.ts so /card/<slug> resolves correctly.
function slugify(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''); }
// Compact thousand/million form for the sold-strip on each row.
// 248,500 → "249k", 1,250,000 → "1.3M". Keeps the strip aligned at 4 chars.
function abbrevCoins(n) {
  if (n == null || isNaN(n)) return '—';
  if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1e3) return Math.round(n / 1e3) + 'k';
  return String(n);
}

// Toggles the Add-to-binder / In-binder state on the card-detail header.
// Sync UI flip + delegate to binderClient which mirrors to server when auth.
window.__toggleCardBinder = function (btn) {
  var id = parseInt(btn.getAttribute('data-card-id'), 10);
  if (!id || !window.binderClient) return;
  var isOwned = btn.classList.contains('is-owned');
  if (isOwned) {
    window.binderClient.remove(id);
    btn.classList.remove('is-owned');
    btn.innerHTML = '+ Add to binder';
  } else {
    window.binderClient.add(id);
    btn.classList.add('is-owned');
    btn.innerHTML = '✓ In binder';
  }
};

// Toggles the hidden "extra rows" container under a Show-more button.
// Bound via inline onclick on .card-rows-toggle inside the card-detail modal.
window.__toggleCardRows = function (btn) {
  var id = btn.getAttribute('data-target');
  var rest = document.getElementById(id);
  if (!rest) return;
  var hidden = rest.style.display === 'none' || rest.style.display === '';
  rest.style.display = hidden ? 'block' : 'none';
  btn.textContent = hidden ? 'Show less' : ('Show ' + btn.getAttribute('data-rest') + ' more');
};

function timeAgo(iso) {
  var ms = Date.now() - new Date(iso).getTime();
  if (isNaN(ms)) return '';
  var min = Math.floor(ms / 60000);
  if (min < 1) return 'just now';
  if (min < 60) return min + 'm ago';
  var hr = Math.floor(min / 60);
  if (hr < 24) return hr + 'h ago';
  return Math.floor(hr / 24) + 'd ago';
}

function getFilters() {
  var search = document.getElementById('cardSearch').value.trim();
  var pos = document.getElementById('posFilter').value;
  var prog = document.getElementById('progFilter').value;
  var ovr = document.getElementById('ovrFilter').value;
  var sortVal = document.getElementById('sortFilter').value;

  var sort = sortVal;
  var sortDir = 'desc';
  if (sortVal === 'name_asc') { sort = 'name'; sortDir = 'asc'; }

  // Handle exact OVR (e.g. "97") vs range (e.g. "96+")
  var minOvr = '';
  var maxOvr = '';
  if (ovr && ovr.endsWith('+')) {
    minOvr = ovr.slice(0, -1);
  } else if (ovr) {
    minOvr = ovr;
    maxOvr = ovr;
  }

  return { search: search, position: pos, program: prog, minOvr: minOvr, maxOvr: maxOvr, sort: sort, sortDir: sortDir };
}

function buildUrl(offset) {
  var f = getFilters();
  var params = ['limit=' + PAGE_SIZE, 'offset=' + offset];
  if (f.search) params.push('search=' + encodeURIComponent(f.search));
  if (f.position) params.push('position=' + encodeURIComponent(f.position));
  if (f.program) params.push('program=' + encodeURIComponent(f.program));
  if (f.minOvr) params.push('min_ovr=' + f.minOvr);
  if (f.maxOvr) params.push('max_ovr=' + f.maxOvr);
  if (f.sort) params.push('sort=' + f.sort);
  if (f.sortDir) params.push('sort_dir=' + f.sortDir);
  return '/api/cards?' + params.join('&');
}

async function loadCards(offset) {
  currentOffset = offset || 0;
  var grid = document.getElementById('cardsGrid');

  if (currentOffset === 0) {
    grid.innerHTML = '<div class="loading"><div class="spinner"></div><p>Loading cards...</p></div>';
  }

  try {
    var res = await fetch(buildUrl(currentOffset));
    if (!res.ok) throw new Error('Failed');
    var data = await res.json();

    currentTotal = data.total;

    // Populate filter dropdowns once
    if (!filtersLoaded && data.positions && data.programs) {
      populateFilters(data.positions, data.programs);
      filtersLoaded = true;
    }

    // Update catalog count
    var countEl = document.getElementById('catalogCount');
    if (countEl) countEl.textContent = data.catalogSize + ' cards tracked';

    // Update meta
    var meta = document.getElementById('cardsMeta');
    meta.textContent = data.total + ' cards' + (data.total !== data.catalogSize ? ' (filtered)' : '');

    renderGrid(data.cards);
    renderPagination();
  } catch (e) {
    grid.innerHTML = '<div class="empty"><p>Unable to load card database.</p></div>';
  }
}

function populateFilters(positions, programs) {
  var posEl = document.getElementById('posFilter');
  for (var i = 0; i < positions.length; i++) {
    var opt = document.createElement('option');
    opt.value = positions[i];
    opt.textContent = positions[i];
    posEl.appendChild(opt);
  }

  var progEl = document.getElementById('progFilter');
  for (var i = 0; i < programs.length; i++) {
    var opt = document.createElement('option');
    opt.value = programs[i];
    opt.textContent = programs[i];
    progEl.appendChild(opt);
  }
}

// Cards from the most recent /api/cards response — used by the hover tooltip
// to look up data via the row's data-idx without re-fetching.
var currentCards = [];

function renderGrid(cards) {
  var grid = document.getElementById('cardsGrid');
  currentCards = cards;

  if (!cards.length) {
    grid.innerHTML = '<div class="empty"><p>No cards match your filters.</p></div>';
    return;
  }

  var html = '';
  for (var i = 0; i < cards.length; i++) {
    var c = cards[i];
    var isBnd = isBndCard(c);
    var img = c.imageUrl
      ? '<img src="' + esc(proxyImg(c.imageUrl)) + '" alt="" loading="lazy" onerror="this.className=\'card-noimg\';this.src=\'\';this.onerror=null">'
      : '<div class="card-noimg"></div>';

    var safeName = esc(c.playerName).replace(/'/g, "\\'");
    var safeProg = esc(c.program).replace(/'/g, "\\'");

    // Color-code OVR badge by tier — 99 gold, 96-98 silver, 94-95 bronze, lower neutral
    var ovrTier = 'neutral';
    if (c.ovr >= 99) ovrTier = 'gold';
    else if (c.ovr >= 96) ovrTier = 'silver';
    else if (c.ovr >= 94) ovrTier = 'bronze';

    var statsHtml = '';
    if (c.keyStats) {
      var statKeys = Object.keys(c.keyStats);
      for (var j = 0; j < statKeys.length; j++) {
        statsHtml += '<div class="player-row-stat"><span class="player-row-stat-abbr">' + statAbbr(statKeys[j]) + '</span><span class="player-row-stat-val">' + c.keyStats[statKeys[j]] + '</span></div>';
      }
    }

    var teamLogoHtml = '';
    if (c.team) {
      var teamLogo = 'https://a.espncdn.com/i/teamlogos/nfl/500/' + c.team.toLowerCase() + '.png';
      teamLogoHtml = '<img class="player-row-team-logo" src="' + teamLogo + '" alt="' + esc(c.team) + '" loading="lazy" onerror="this.style.display=\'none\'">';
    }

    // Chem chips — show non-team chems (team is already in the team chip above).
    // Cap at 3 chips to keep the row clean; tooltip the rest if user wants detail.
    var chemHtml = '';
    if (c.chems && c.chems.length) {
      var nonTeamChems = c.chems.filter(function (ch) {
        // Team chem IDs follow 60xx-63xx; skip those, they're already shown via team logo
        return !(ch.id >= 6010 && ch.id <= 6320 && (ch.id % 10) === 0);
      });
      var visible = nonTeamChems.slice(0, 3);
      for (var ci = 0; ci < visible.length; ci++) {
        var ch = visible[ci];
        var label = esc(ch.title) + (ch.count > 1 ? ' ×' + ch.count : '');
        chemHtml += '<span class="player-row-chem" title="' + esc(ch.title) + '">' + label + '</span>';
      }
      if (nonTeamChems.length > visible.length) {
        chemHtml += '<span class="player-row-chem player-row-chem-more">+' + (nonTeamChems.length - visible.length) + '</span>';
      }
    }

    // Row is a real link to /card/<slug>. Click navigates to the SEO page;
    // crawlers follow the href; Cmd-click still opens in a new tab.
    var rowHref = '/card/' + slugify(c.playerName) + '-' + slugify(c.program || '');
    html += '<a class="player-row" href="' + rowHref + '" data-idx="' + i + '">';
    html += '<div class="player-row-ovr player-row-ovr-' + ovrTier + '">' + c.ovr + '</div>';
    html += '<div class="player-row-img">' + img + '</div>';
    html += '<div class="player-row-info">';
    html += '<div class="player-row-name">' + esc(c.playerName) + '</div>';
    html += '<div class="player-row-tags">';
    html += '<span class="player-row-pos">' + esc(c.position) + '</span>';
    if (c.team) html += '<span class="player-row-team">' + teamLogoHtml + esc(c.team) + '</span>';
    html += '<span class="player-row-prog">' + esc(c.program) + '</span>';
    if (isBnd) html += '<span class="player-row-bnd">BND</span>';
    if (chemHtml) html += chemHtml;
    html += '</div>';
    // Compact sold-trend strip — last 5 sold prices in dot-separated form.
    // Skips the row entirely when we have no sales data so empty cards stay tight.
    if (c.recentSold && c.recentSold.length) {
      var trend = c.recentSold.map(abbrevCoins).join(' &middot; ');
      html += '<div class="player-row-trend"><span class="player-row-trend-label">SOLD</span><span class="player-row-trend-vals">' + trend + '</span></div>';
    }
    html += '</div>';
    html += '<div class="player-row-stats">' + statsHtml + '</div>';
    // Display value matches the active sort metric. Default = last listing.
    var STALE_MS = 7 * 24 * 60 * 60 * 1000;
    var now = Date.now();
    var currentSort = document.getElementById('sortFilter').value;

    var displayValue = null;
    var displayLabel = '';
    if (isBnd) {
      displayLabel = 'unauctionable';
    } else if (currentSort === 'ea_median') {
      var eaAge = c.eaMedianAt ? (now - new Date(c.eaMedianAt).getTime()) : Infinity;
      displayValue = (c.eaMedian && eaAge <= STALE_MS) ? c.eaMedian : null;
      displayLabel = 'EA median';
    } else if (currentSort === 'sold_median') {
      displayValue = (c.soldMedian && c.soldSamples >= 3) ? c.soldMedian : null;
      displayLabel = 'sold median (' + (c.soldSamples || 0) + ')';
    } else {
      var seenAge = c.lastSeen ? (now - new Date(c.lastSeen).getTime()) : Infinity;
      displayValue = (c.lastSeenPrice && seenAge <= STALE_MS) ? c.lastSeenPrice : null;
      displayLabel = c.lastSeen ? timeAgo(c.lastSeen) : 'no listings';
    }
    var priceText = isBnd ? 'BND' : (displayValue ? fmtCoins(displayValue) : '—');
    html += '<div class="player-row-price-col">';
    html += '<div class="player-row-price' + (isBnd ? ' player-row-price-bnd' : (displayValue ? '' : ' player-row-price-empty')) + '">' + priceText + '</div>';
    html += '<div class="player-row-seen">' + esc(displayLabel) + '</div>';
    html += '</div>';
    // Set Alert bell — preventDefault so the row's <a href> doesn't navigate
    // when the button is clicked. stopPropagation alone isn't enough now that
    // the row is a link, not a div with click handler.
    if (isBnd) {
      html += '<span class="player-row-alert player-row-alert-disabled" title="BND cards cannot be auctioned">BND</span>';
    } else {
      html += '<button type="button" class="player-row-alert" title="Set price alert" ' +
        'onclick="event.preventDefault();event.stopPropagation();window.openAlertModal({playerName:\'' + safeName + '\',ovr:' + c.ovr + ',program:\'' + safeProg + '\'})">&#128276;</button>';
    }
    html += '</a>';
  }

  grid.innerHTML = html;
  attachHoverTip(grid);
}

// --- Hover tooltip ---
// One tooltip element reused for every row. We attach delegated listeners on
// the grid so it survives re-renders without rebinding 60+ row handlers.
var hoverTipEl = null;
var hoverTipTimer = null;

function ensureHoverTip() {
  if (hoverTipEl) return hoverTipEl;
  hoverTipEl = document.createElement('div');
  hoverTipEl.className = 'card-hovertip';
  document.body.appendChild(hoverTipEl);
  return hoverTipEl;
}

function renderHoverTipHtml(c) {
  var parts = [];

  // 1. Team chems — row of NFL logos. Wildcards show "All 32 Teams" label.
  if (c.wildTeamChem) {
    parts.push('<div class="ht-section-label">Team Chemistry <span class="ht-sub">All 32 Teams</span></div>');
  } else {
    var teamChems = (c.chems || []).filter(function (ch) {
      return ch.id >= 6010 && ch.id <= 6320 && (ch.id % 10) === 0;
    });
    if (teamChems.length) {
      var logos = '';
      for (var i = 0; i < teamChems.length; i++) {
        var short = (TEAM_ID_TO_SHORT[teamChems[i].id] || '').toLowerCase();
        if (!short) continue;
        logos += '<img class="ht-chem-logo" src="https://a.espncdn.com/i/teamlogos/nfl/500/' + short + '.png" alt="' + esc(teamChems[i].title) + '" title="' + esc(teamChems[i].title) + '" onerror="this.style.display=\'none\'">';
      }
      parts.push('<div class="ht-section-label">Team Chemistry</div><div class="ht-chems">' + logos + '</div>');
    }
  }

  // 2. Key stats — 2×2 grid with abbreviation + value
  if (c.keyStats && Object.keys(c.keyStats).length) {
    var statRows = '';
    var keys = Object.keys(c.keyStats);
    for (var k = 0; k < keys.length; k++) {
      var key = keys[k];
      var val = c.keyStats[key];
      var tier = val >= 99 ? 'gold' : val >= 90 ? 'green' : val >= 70 ? 'yellow' : 'red';
      statRows += '<div class="ht-stat ht-stat-' + tier + '"><span class="ht-stat-name">' + esc(statAbbr(key)) + '</span><span class="ht-stat-val">' + val + '</span></div>';
    }
    parts.push('<div class="ht-section-label">Key Stats</div><div class="ht-stats">' + statRows + '</div>');
  }

  // 3. Prices — sold median + last listed
  var priceRows = '';
  if (c.soldMedian) {
    priceRows += '<div class="ht-price-row"><span>Sold (7d)</span><span class="ht-price-val">' + fmtCoins(c.soldMedian) + (c.soldSamples ? ' <span class="ht-price-samples">×' + c.soldSamples + '</span>' : '') + '</span></div>';
  }
  if (c.lastSeenPrice) {
    priceRows += '<div class="ht-price-row"><span>Last listed</span><span class="ht-price-val">' + fmtCoins(c.lastSeenPrice) + '</span></div>';
  }
  if (priceRows) {
    parts.push('<div class="ht-section-label">Prices</div><div class="ht-prices">' + priceRows + '</div>');
  }

  // 4. Top abilities — name only (compact)
  if (c.topAbilities && c.topAbilities.length) {
    var abRows = '';
    for (var ai = 0; ai < c.topAbilities.length; ai++) {
      abRows += '<div class="ht-ability">' + esc(c.topAbilities[ai].name) + '</div>';
    }
    parts.push('<div class="ht-section-label">Top Abilities</div><div class="ht-abilities">' + abRows + '</div>');
  }

  return parts.length ? parts.join('') : '<div class="ht-chem-none">No data</div>';
}

function positionHoverTip(row) {
  // Tooltip floats BELOW the hovered row with a small gap so it never overlaps
  // the row itself (only the row beneath). If there isn't room below, flip up.
  // The arrow class controls which edge the triangle pointer attaches to.
  var rect = row.getBoundingClientRect();
  var w = hoverTipEl.offsetWidth || 340;
  var h = hoverTipEl.offsetHeight || 300;
  var gap = 12;

  var left = rect.left + (rect.width / 2) - (w / 2);
  left = Math.max(8, Math.min(window.innerWidth - w - 8, left));

  hoverTipEl.classList.remove('ht-arrow-up', 'ht-arrow-down');
  var top;
  if (rect.bottom + gap + h <= window.innerHeight - 8) {
    top = rect.bottom + gap;
    hoverTipEl.classList.add('ht-arrow-up');
  } else {
    top = rect.top - gap - h;
    hoverTipEl.classList.add('ht-arrow-down');
  }

  // Anchor the triangle to the row's horizontal center
  var arrowX = rect.left + (rect.width / 2) - left;
  arrowX = Math.max(20, Math.min(w - 20, arrowX));
  hoverTipEl.style.setProperty('--ht-arrow-x', arrowX + 'px');

  hoverTipEl.style.left = left + 'px';
  hoverTipEl.style.top = top + 'px';
}

function showHoverTip(row) {
  var idx = parseInt(row.getAttribute('data-idx'), 10);
  if (isNaN(idx) || !currentCards[idx]) return;
  var c = currentCards[idx];
  ensureHoverTip();
  hoverTipEl.innerHTML = renderHoverTipHtml(c);
  hoverTipEl.classList.add('show');
  positionHoverTip(row);
}

function hideHoverTip() {
  if (hoverTipEl) hoverTipEl.classList.remove('show');
}

function attachHoverTip(grid) {
  grid.addEventListener('mouseover', function (e) {
    var row = e.target.closest('.player-row');
    if (!row || !grid.contains(row)) return;
    clearTimeout(hoverTipTimer);
    hoverTipTimer = setTimeout(function () { showHoverTip(row); }, 150);
  });
  grid.addEventListener('mouseout', function (e) {
    var row = e.target.closest('.player-row');
    if (!row) return;
    var to = e.relatedTarget;
    if (to && row.contains(to)) return;
    clearTimeout(hoverTipTimer);
    hideHoverTip();
  });
}

function renderPagination() {
  var pag = document.getElementById('pagination');
  var totalPages = Math.ceil(currentTotal / PAGE_SIZE);
  var currentPage = Math.floor(currentOffset / PAGE_SIZE) + 1;

  if (totalPages <= 1) { pag.innerHTML = ''; return; }

  var html = '';

  if (currentPage > 1) {
    html += '<button onclick="goPage(' + (currentPage - 1) + ')">Prev</button>';
  }

  // Show page numbers with ellipsis
  var start = Math.max(1, currentPage - 2);
  var end = Math.min(totalPages, currentPage + 2);

  if (start > 1) {
    html += '<button onclick="goPage(1)">1</button>';
    if (start > 2) html += '<span class="pag-ellipsis">...</span>';
  }

  for (var p = start; p <= end; p++) {
    var cls = p === currentPage ? ' class="pag-active"' : '';
    html += '<button' + cls + ' onclick="goPage(' + p + ')">' + p + '</button>';
  }

  if (end < totalPages) {
    if (end < totalPages - 1) html += '<span class="pag-ellipsis">...</span>';
    html += '<button onclick="goPage(' + totalPages + ')">' + totalPages + '</button>';
  }

  if (currentPage < totalPages) {
    html += '<button onclick="goPage(' + (currentPage + 1) + ')">Next</button>';
  }

  pag.innerHTML = html;
}

function goPage(page) {
  var offset = (page - 1) * PAGE_SIZE;
  loadCards(offset);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Filter change handlers
function onFilterChange() {
  currentOffset = 0;
  loadCards(0);
}

document.getElementById('posFilter').addEventListener('change', onFilterChange);
document.getElementById('progFilter').addEventListener('change', onFilterChange);
document.getElementById('ovrFilter').addEventListener('change', onFilterChange);
document.getElementById('sortFilter').addEventListener('change', onFilterChange);

// Debounced search
document.getElementById('cardSearch').addEventListener('input', function() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(function() {
    currentOffset = 0;
    loadCards(0);
  }, 300);
});

// Card detail modal (reused from app.js pattern)
async function showCardDetail(player, ovr, program) {
  var overlay = document.createElement('div');
  overlay.className = 'card-detail-overlay';
  overlay.innerHTML = '<div class="card-detail"><div class="loading"><div class="spinner"></div><p>Loading card details...</p></div></div>';
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  overlay.addEventListener('click', function(e) { if (e.target === overlay) closeCardDetail(); });
  document.addEventListener('keydown', function handler(e) {
    if (e.key === 'Escape') { closeCardDetail(); document.removeEventListener('keydown', handler); }
  });

  var url = '/api/card?player=' + encodeURIComponent(player);
  if (ovr) url += '&ovr=' + ovr;
  if (program) url += '&program=' + encodeURIComponent(program);

  try {
    var res = await fetch(url);
    if (!res.ok) throw new Error('Failed');
    var data = await res.json();
    overlay.querySelector('.card-detail').innerHTML = renderCardDetail(data);

    if (!isBndCard(data) && data.priceChart && data.priceChart.points && data.priceChart.points.length > 1) {
      drawPriceChart(data.priceChart.points, data.soldHistory || []);
    }
  } catch (e) {
    console.error('[showCardDetail]', (e && e.message) || String(e), (e && e.stack) || '', { player: player, ovr: ovr, program: program });
    overlay.querySelector('.card-detail').innerHTML =
      '<div class="error"><p>Unable to load card details.</p></div>' +
      '<button class="card-back-btn" onclick="closeCardDetail()" style="margin-top:16px">Close</button>';
  }
}

function closeCardDetail() {
  var overlay = document.querySelector('.card-detail-overlay');
  if (overlay) overlay.remove();
  document.body.style.overflow = '';
}

function renderCardDetail(data) {
  var html = '';
  var img = proxyImg(data.heroImage || (data.liveAuctions[0] && data.liveAuctions[0].imageUrl));
  var isBnd = isBndCard(data);

  html += '<button class="card-detail-close-btn" type="button" aria-label="Close" onclick="closeCardDetail()">×</button>';
  html += '<div class="card-detail-header">';
  if (img) html += '<img src="' + esc(img) + '" alt="" onerror="this.style.display=\'none\'">';
  html += '<div class="card-detail-info">';
  html += '<h2>' + esc(data.player) + '</h2>';
  html += '<div class="card-detail-meta">' + data.ovr + ' OVR' + (data.program ? ' &middot; ' + esc(data.program) : '') + (isBnd ? ' <span class="card-bnd-badge">BND</span>' : '') + '</div>';
  // Set Alert button — opens the shared alert modal pre-filled with this card.
  var safePlayer = esc(data.player).replace(/'/g, "&#39;");
  var safeProg = data.program ? esc(data.program).replace(/'/g, "&#39;") : '';
  if (!isBnd) {
    html += '<button type="button" class="card-alert-btn" onclick="window.openAlertModal({playerName:\'' + safePlayer + '\',ovr:' + data.ovr + ',program:\'' + safeProg + '\'})">&#128276; Set price alert</button>';
  }
  // Add-to-binder button. Reads its initial state synchronously from
  // localStorage (which binderClient keeps in sync with the server). The
  // button mutates that state via window.binderClient so signed-in users
  // get a server write too.
  if (data.cardId) {
    var ownedRaw = (function () { try { return JSON.parse(localStorage.getItem('mut_owned_cards_v1') || '{}'); } catch (e) { return {}; } })();
    var ownedNow = ownedRaw[data.cardId] === true;
    html += '<button type="button" class="card-binder-btn ' + (ownedNow ? 'is-owned' : '') + '" data-card-id="' + data.cardId + '" onclick="window.__toggleCardBinder(this)">' +
      (ownedNow ? '&#10003; In binder' : '+ Add to binder') +
      '</button>';
  }
  html += '</div></div>';

  var m = data.marketMetrics;
  if (isBnd) {
    html += '<div class="card-bnd-panel"><strong>BND card</strong><span>This card is bound and cannot be listed on the auction house. Live auctions, sale history, and price alerts are unavailable.</span></div>';
  } else {
    html += '<div class="card-market-stats">';
    html += statBox('EA Median', m.eaMedian ? fmtCoins(m.eaMedian) : '-');
    html += statBox('Sold Median', m.soldMedian ? fmtCoins(m.soldMedian) + ' <small>(' + m.soldSamples + ')</small>' : '-');
    html += statBox('Listing Median', m.listingMedian ? fmtCoins(m.listingMedian) + ' <small>(' + m.listingSamples + ')</small>' : '-');
    html += statBox('Sold (1h)', m.soldVelocity ? String(m.soldVelocity.sales1h) : '0');
    html += statBox('Sold (24h)', m.soldVelocity ? String(m.soldVelocity.sales24h) : '0');
    html += statBox('Stability', m.stability && m.stability.hasPriceData ? (Math.round(m.stability.cv * 100) + '% CV') : '-');
    html += '</div>';
  }

  // Attributes — split into position-relevant (prominent, with bars, in priority
  // order) and other (compact, alphabetical, smaller). A HB's Throw Accuracy is
  // truth but irrelevant; a HB's Trucking is the headline.
  if (data.attributes) {
    var allKeys = Object.keys(data.attributes).filter(function (k) {
      return typeof data.attributes[k] === 'number' && data.attributes[k] > 0;
    });
    if (allKeys.length) {
      var relevantOrder = POSITION_RELEVANT_ATTRS[data.position] || POSITION_RELEVANT_ATTRS.DEFAULT;
      var relevantSet = {};
      var relevantList = [];
      for (var ro = 0; ro < relevantOrder.length; ro++) {
        var rk = relevantOrder[ro];
        if (data.attributes[rk] != null && allKeys.indexOf(rk) !== -1) {
          relevantSet[rk] = true;
          relevantList.push(rk);
        }
      }
      var otherList = allKeys.filter(function (k) { return !relevantSet[k]; }).sort();

      // Color scheme: 99 = gold (elite), 90-98 = green (great), 70-89 = yellow
      // (decent), <70 = red (weak). Keeps the eye focused on what matters.
      function tierOf(v) {
        return v >= 99 ? 'gold' : v >= 90 ? 'green' : v >= 70 ? 'yellow' : 'red';
      }

      html += '<p class="section-header">Key Attributes' + (data.position ? ' <span class="section-header-sub">for ' + esc(data.position) + '</span>' : '') + '</p>';
      html += '<div class="card-attrs-grid card-attrs-grid-prominent">';
      for (var ai2 = 0; ai2 < relevantList.length; ai2++) {
        var ak = relevantList[ai2];
        var av = data.attributes[ak];
        var fullName = formatAttrName(ak);
        html += '<div class="card-attr card-attr-' + tierOf(av) + '" title="' + esc(fullName) + '">' +
          '<div class="card-attr-row">' +
            '<span class="attr-name">' + esc(statAbbr(ak)) + '</span>' +
            '<span class="attr-val">' + av + '</span>' +
          '</div>' +
          '<div class="card-attr-bar"><div class="card-attr-bar-fill" style="width:' + Math.min(100, av) + '%"></div></div>' +
        '</div>';
      }
      html += '</div>';

      if (otherList.length) {
        html += '<details class="card-details-collapsible card-attrs-other-wrap">';
        html += '<summary><span>Other Attributes</span><span class="card-details-count">' + otherList.length + '</span></summary>';
        html += '<div class="card-details-body card-attrs-grid-compact">';
        for (var oi = 0; oi < otherList.length; oi++) {
          var ok = otherList[oi];
          var ov = data.attributes[ok];
          html += '<div class="card-attr-compact"><span class="attr-name">' + formatAttrName(ok) + '</span><span class="attr-val attr-val-' + tierOf(ov) + '">' + ov + '</span></div>';
        }
        html += '</div></details>';
      }
    }
  }

  // Live auctions + recent sales — collapsible so the modal stays compact.
  // Default open is "no" to keep visual focus on stats/abilities; users who
  // need pricing detail click to expand. Each section shows 5 rows by
  // default with a "Show N more" toggle to keep scrolling minimal.
  function renderRows(items, fmt, restId) {
    var out = '';
    for (var k = 0; k < Math.min(items.length, 5); k++) out += fmt(items[k]);
    if (items.length > 5) {
      out += '<div id="' + restId + '" class="card-rows-rest" style="display:none">';
      for (var j = 5; j < items.length; j++) out += fmt(items[j]);
      out += '</div>';
      out += '<button type="button" class="card-rows-toggle" data-target="' + restId + '" data-rest="' + (items.length - 5) + '" onclick="window.__toggleCardRows(this)">Show ' + (items.length - 5) + ' more</button>';
    }
    return out;
  }
  var fmtAuction = function (a) {
    return '<div class="card-col-row"><span class="price">' + fmtCoins(a.buyNowPrice) + '</span><span class="time">' + formatTime(a.timeRemaining) + '</span></div>';
  };
  var fmtSale = function (s) {
    return '<div class="card-col-row"><span class="price">' + fmtCoins(s.price) + '</span><span class="sold-ago">' + timeAgo(s.soldAt) + '</span></div>';
  };

  if (!isBnd) {
    html += '<details class="card-details-collapsible" open>';
    html += '<summary><span>Live Auctions</span><span class="card-details-count">' + data.liveAuctions.length + '</span></summary>';
    html += '<div class="card-details-body">';
    html += renderRows(data.liveAuctions, fmtAuction, 'live-auctions-rest');
    if (!data.liveAuctions.length) html += '<div class="card-details-empty">No active listings</div>';
    html += '</div></details>';

    html += '<details class="card-details-collapsible" open>';
    html += '<summary><span>Recent Sales</span><span class="card-details-count">' + data.soldHistory.length + '</span></summary>';
    html += '<div class="card-details-body">';
    html += renderRows(data.soldHistory, fmtSale, 'sold-history-rest');
    if (!data.soldHistory.length) html += '<div class="card-details-empty">No sold data tracked</div>';
    if (m.soldVelocity && (m.soldVelocity.sales1h > 0 || m.soldVelocity.sales24h > 0)) {
      html += '<div class="card-sold-summary">Sold: ' + m.soldVelocity.sales1h + ' (1h) / ' + m.soldVelocity.sales12h + ' (12h) / ' + m.soldVelocity.sales24h + ' (24h)</div>';
    }
    html += '</div></details>';

    html += '<details class="card-details-collapsible" open>';
    html += '<summary><span>Price History (48h)</span></summary>';
    html += '<div class="card-details-body card-chart-container"><canvas id="priceChart" width="836" height="200"></canvas></div>';
    html += '</details>';
  }

  // Abilities — popular abilities scraped from mut.gg per variant, ranked by
  // community usage %. Top 4 shown by default; the rest sit in a collapsed
  // "More Abilities" panel so the modal stays compact.
  if (data.abilities && data.abilities.length) {
    function renderAbilityTile(ab) {
      // Compact square: image dominates, name underneath, tier dot top-right.
      // Full description on hover via native title tooltip.
      var img = '<img class="card-ability-img" src="' + esc(proxyImg('https://media.mut.gg/26/mutdb/ability/' + ab.id + '.png')) + '" alt="" onerror="this.style.display=\'none\'">';
      var tierClass = ab.tier ? 'card-ability-tier-' + esc(ab.tier.toLowerCase().replace(/\s+/g, '-')) : '';
      var tooltip = (ab.tier ? ab.tier + (ab.description ? ' — ' : '') : '') + (ab.description || '');
      return '<div class="card-ability card-ability-square" title="' + esc(tooltip) + '">' +
        (ab.tier ? '<span class="card-ability-tier-dot ' + tierClass + '" aria-hidden="true"></span>' : '') +
        img +
        '<span class="card-ability-name">' + esc(ab.name) + '</span>' +
      '</div>';
    }
    var topN = 6;
    var topAb = data.abilities.slice(0, topN);
    var restAb = data.abilities.slice(topN);

    html += '<p class="section-header">Popular Abilities</p>';
    html += '<div class="card-abilities">';
    for (var ai = 0; ai < topAb.length; ai++) html += renderAbilityTile(topAb[ai]);
    html += '</div>';

    if (restAb.length) {
      // Group the dropdown by tier (Superstar / X-Factor / Ultimate / Unknown)
      // so the long tail is scannable. Within each tier we keep the popularity
      // order so the most-used variants surface first.
      var byTier = {};
      var tierOrder = [];
      for (var ri2 = 0; ri2 < restAb.length; ri2++) {
        var ab2 = restAb[ri2];
        var tier = ab2.tier || 'Other';
        if (!byTier[tier]) { byTier[tier] = []; tierOrder.push(tier); }
        byTier[tier].push(ab2);
      }
      // Stable canonical tier order when present
      var canonical = ['Superstar', 'X-Factor', 'Ultimate', 'Other'];
      tierOrder.sort(function (a, b) {
        var ia = canonical.indexOf(a); var ib = canonical.indexOf(b);
        return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
      });

      html += '<details class="card-details-collapsible card-abilities-more">';
      html += '<summary><span>More Abilities</span><span class="card-details-count">' + restAb.length + '</span></summary>';
      html += '<div class="card-details-body">';
      for (var ti = 0; ti < tierOrder.length; ti++) {
        var tname = tierOrder[ti];
        html += '<div class="card-abilities-tier-group">';
        html += '<div class="card-abilities-tier-label card-ability-tier card-ability-tier-' + esc(tname.toLowerCase().replace(/\s+/g, '-')) + '">' + esc(tname) + '</div>';
        html += '<div class="card-abilities">';
        for (var ri3 = 0; ri3 < byTier[tname].length; ri3++) html += renderAbilityTile(byTier[tname][ri3]);
        html += '</div></div>';
      }
      html += '</div></details>';
    }
  }

  // Chemistry section — split team vs non-team chems. All NFL team chems share
  // the same tier structure, so we render the team-chem tier table ONCE.
  if (data.chems && data.chems.length) {
    var teamChems = data.chems.filter(function (ch) { return ch.isTeamChem; });
    var otherChems = data.chems.filter(function (ch) { return !ch.isTeamChem; });

    // Wildcard cards ("All 32 Teams" — top-tier Ranked, Theme Team Surge, etc.)
    // grant chem to every NFL team. Show the full 32-team grid in that case.
    var showAll32 = !!data.wildTeamChem;
    var renderRow = showAll32 || teamChems.length;
    if (renderRow) {
      html += '<p class="section-header">Team Chemistry' +
              (showAll32 ? ' <span class="section-header-sub">All 32 Teams</span>' : '') +
              '</p>';
      html += '<div class="card-team-chem-logos">';
      if (showAll32) {
        // Iterate every NFL team in canonical order, render its logo
        var shorts = ['ARI','ATL','BAL','BUF','CAR','CHI','CIN','CLE','DAL','DEN',
                      'DET','GB','HOU','IND','JAX','KC','LAC','LAR','LV','MIA',
                      'MIN','NE','NO','NYG','NYJ','PHI','PIT','SEA','SF','TB','TEN','WAS'];
        for (var ti0 = 0; ti0 < shorts.length; ti0++) {
          html += '<img class="card-team-chem-logo" src="https://a.espncdn.com/i/teamlogos/nfl/500/' +
                  esc(shorts[ti0].toLowerCase()) + '.png" alt="' + esc(shorts[ti0]) +
                  '" title="' + esc(shorts[ti0]) + '" onerror="this.style.display=\'none\'">';
        }
      } else {
        for (var ti1 = 0; ti1 < teamChems.length; ti1++) {
          var tch = teamChems[ti1];
          if (!tch.teamShort) continue;
          html += '<img class="card-team-chem-logo" src="https://a.espncdn.com/i/teamlogos/nfl/500/' +
                  esc(tch.teamShort.toLowerCase()) + '.png" alt="' + esc(tch.title) +
                  '" title="' + esc(tch.title) + '" onerror="this.style.display=\'none\'">';
        }
      }
      html += '</div>';
      // Shared tier breakdown — all 32 NFL team chems use identical thresholds + boosts.
      // For wildcard cards with no specific team chems in synergyList, teamChems[0] is
      // undefined, so guard before accessing.
      var sharedTiers = teamChems[0] ? (teamChems[0].tiers || []) : [];
      if (sharedTiers.length) {
        html += '<div class="card-chem-shared-tiers">';
        html += '<div class="card-chem-shared-header">Tier breakdown (same for all team chems)</div>';
        html += '<div class="card-chem-tiers-list">';
        for (var st = 0; st < sharedTiers.length; st++) {
          var s = sharedTiers[st];
          html += '<div class="card-chem-tier">';
          html += '<span class="card-chem-tier-num">Tier ' + (st + 1) + '</span>';
          html += '<span class="card-chem-tier-threshold">' + s.threshold + ' players</span>';
          html += '<span class="card-chem-tier-boosts">' + (s.boosts && s.boosts.length ? s.boosts.map(esc).join(', ') : '—') + '</span>';
          html += '</div>';
        }
        html += '</div></div>';
      }
    }

    // Non-team chems (archetype / program / etc.) — full tier list per chem since these DO differ
    if (otherChems.length) {
      html += '<p class="section-header">Other Chemistry</p>';
      html += '<div class="card-chems">';
      for (var oi = 0; oi < otherChems.length; oi++) {
        var och = otherChems[oi];
        var ocountBadge = och.count > 1 ? '<span class="card-chem-count">×' + och.count + '</span>' : '';
        html += '<div class="card-chem">';
        html += '<div class="card-chem-header">' +
                '<span class="card-chem-title">' + esc(och.title) + '</span>' + ocountBadge + '</div>';
        if (och.flavorText) {
          html += '<div class="card-chem-flavor">' + esc(och.flavorText) + '</div>';
        }
        if (och.tiers && och.tiers.length) {
          html += '<div class="card-chem-tiers-list">';
          for (var oti = 0; oti < och.tiers.length; oti++) {
            var ot = och.tiers[oti];
            html += '<div class="card-chem-tier">';
            html += '<span class="card-chem-tier-num">Tier ' + (oti + 1) + '</span>';
            html += '<span class="card-chem-tier-threshold">' + ot.threshold + ' players</span>';
            html += '<span class="card-chem-tier-boosts">' + (ot.boosts && ot.boosts.length ? ot.boosts.map(esc).join(', ') : '—') + '</span>';
            html += '</div>';
          }
          html += '</div>';
        }
        html += '</div>';
      }
      html += '</div>';
    }
  }

  // Player traits (X-factor / superstar / passive abilities)
  if (data.traits && data.traits.length) {
    html += '<p class="section-header">Player Traits</p>';
    html += '<div class="card-traits">';
    for (var ti = 0; ti < data.traits.length; ti++) {
      html += '<span class="card-trait">' + esc(data.traits[ti]) + '</span>';
    }
    html += '</div>';
  }

  // Compatible positions — backend decodes IDs to names, sorted by OVR desc
  if (data.positionOvrRatings && data.positionOvrRatings.length > 1) {
    html += '<p class="section-header">Compatible Positions</p>';
    html += '<div class="card-positions">';
    for (var pi = 0; pi < data.positionOvrRatings.length; pi++) {
      var pos = data.positionOvrRatings[pi];
      html += '<span class="card-position-pill"><strong>' + esc(pos.position) + '</strong> ' + pos.ovr + ' OVR</span>';
    }
    html += '</div>';
  }

  // (Attributes moved up — rendered near the top of the modal now.)

  // Other program versions
  if (data.otherVersions && data.otherVersions.length > 0) {
    html += '<p class="section-header">Other Versions (' + data.otherVersions.length + ')</p>';
    html += '<div class="card-versions">';
    for (var i = 0; i < data.otherVersions.length; i++) {
      var v = data.otherVersions[i];
      var vSafeName = esc(data.player).replace(/'/g, "\\'");
      var vSafeProg = esc(v.program).replace(/'/g, "\\'");
      var vImg = v.imageUrl ? '<img src="' + esc(proxyImg(v.imageUrl)) + '" alt="" onerror="this.style.display=\'none\'">' : '';
      var vIsBnd = isBndCard(v);
      html += '<div class="card-version" onclick="closeCardDetail();setTimeout(function(){showCardDetail(\'' + vSafeName + '\',' + v.ovr + ',\'' + vSafeProg + '\')},100)">';
      html += '<div class="card-version-img">' + vImg + '</div>';
      html += '<div class="card-version-info">';
      html += '<span class="card-version-ovr">' + v.ovr + '</span> ';
      html += '<span class="card-version-prog">' + esc(v.program) + '</span>' + (vIsBnd ? '<span class="card-version-bnd">BND</span>' : '');
      html += '</div>';
      html += '<div class="card-version-price' + (vIsBnd ? ' card-version-price-bnd' : '') + '">' + (vIsBnd ? 'BND' : fmtCoins(v.lastSeenPrice)) + '</div>';
      html += '</div>';
    }
    html += '</div>';
  }

  if (data.cachedOnly && !isBnd) {
    html += '<div class="card-cached-notice">Live auctions unavailable — showing cached data</div>';
  }

  html += '<button class="card-back-btn" onclick="closeCardDetail()">Close</button>';
  return html;
}

function statBox(label, value) {
  return '<div class="stat"><div class="stat-label">' + label + '</div><div class="stat-value" style="font-size:18px">' + value + '</div></div>';
}

function formatTime(seconds) {
  if (seconds <= 0) return 'Ended';
  if (seconds < 60) return seconds + 's';
  if (seconds < 3600) return Math.floor(seconds / 60) + 'm';
  var h = Math.floor(seconds / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  return m > 0 ? h + 'h ' + m + 'm' : h + 'h';
}

function formatAttrName(key) {
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, function(s) { return s.toUpperCase(); }).trim();
}

var STAT_ABBRS = {
  speed:'SPD', acceleration:'ACC', agility:'AGI', strength:'STR', stamina:'STA',
  jumping:'JMP', awareness:'AWR', changeOfDirection:'COD', carrying:'CAR',
  breakTackle:'BTK', trucking:'TRK', catching:'CTH', catchInTraffic:'CIT',
  spectacularCatch:'SPC', release:'RLS', shortRouteRun:'SRR', mediumRouteRun:'MRR',
  deepRouteRun:'DRR', passBlock:'PBK', runBlock:'RBK', throwPower:'THP',
  throwAccuracy:'THA', throwOnTheRun:'TOR', throwAccuracyShort:'TAS',
  throwAccuracyMedium:'TAM', throwAccuracyDeep:'TAD', tackle:'TAK',
  hitPower:'HTP', pursuit:'PUR', playRecognition:'PRC', manCoverage:'MCV',
  zoneCoverage:'ZCV', press:'PRS', finesseMoves:'FMV', powerMoves:'PMV',
  blockShedding:'BSH', kickPower:'KPW', kickAccuracy:'KAC',
  jukeMove:'JKM', spinMove:'SPM', stiffArm:'SFA', ballCarrierVision:'BCV',
  passBlockFinesse:'PBF', passBlockPower:'PBP', runBlockFinesse:'RBF',
  runBlockPower:'RBP', impactBlocking:'IBL', leadBlock:'LBK', breakSack:'BSK',
  throwUnderPressure:'TUP', playAction:'PAC', kickReturn:'KR', toughness:'TGH', injury:'INJ'
};
function statAbbr(key) { return STAT_ABBRS[key] || key.substring(0,3).toUpperCase(); }

function drawPriceChart(points, soldHistory) {
  var canvas = document.getElementById('priceChart');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var W = canvas.width, H = canvas.height;
  var pad = { top: 20, right: 60, bottom: 30, left: 10 };

  var allPrices = points.map(function(p) { return p.price; });
  var soldPrices = soldHistory.map(function(s) { return s.price; });
  var allVals = allPrices.concat(soldPrices);
  if (!allVals.length) return;

  var minP = Math.min.apply(null, allVals) * 0.95;
  var maxP = Math.max.apply(null, allVals) * 1.05;
  if (maxP === minP) { maxP += 1000; minP -= 1000; }

  var allTimes = points.map(function(p) { return new Date(p.timestamp).getTime(); });
  var soldTimes = soldHistory.map(function(s) { return new Date(s.soldAt).getTime(); });
  var allT = allTimes.concat(soldTimes);
  var minT = Math.min.apply(null, allT);
  var maxT = Math.max.apply(null, allT);
  if (maxT === minT) maxT += 3600000;

  var cW = W - pad.left - pad.right;
  var cH = H - pad.top - pad.bottom;

  function xPos(t) { return pad.left + ((t - minT) / (maxT - minT)) * cW; }
  function yPos(p) { return pad.top + (1 - (p - minP) / (maxP - minP)) * cH; }

  ctx.fillStyle = '#0c0c0c';
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = '#1a1a1a';
  ctx.lineWidth = 1;
  for (var i = 0; i <= 4; i++) {
    var y = pad.top + (cH / 4) * i;
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(W - pad.right, y); ctx.stroke();
    var val = maxP - ((maxP - minP) / 4) * i;
    ctx.fillStyle = '#555'; ctx.font = '10px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText(Math.round(val).toLocaleString(), W - pad.right + 4, y + 3);
  }

  if (allPrices.length >= 3) {
    var sorted = allPrices.slice().sort(function(a, b) { return a - b; });
    var mid = Math.floor(sorted.length / 2);
    var median = sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
    var mY = yPos(median);
    ctx.strokeStyle = '#444'; ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(pad.left, mY); ctx.lineTo(W - pad.right, mY); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#666'; ctx.fillText('Med', W - pad.right + 4, mY - 4);
  }

  if (points.length > 1) {
    ctx.strokeStyle = 'rgba(0, 255, 0, 0.4)'; ctx.lineWidth = 1.5;
    ctx.beginPath();
    for (var i = 0; i < points.length; i++) {
      var x = xPos(new Date(points[i].timestamp).getTime());
      var y = yPos(points[i].price);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  ctx.fillStyle = '#00ff00';
  for (var i = 0; i < points.length; i++) {
    var x = xPos(new Date(points[i].timestamp).getTime());
    var y = yPos(points[i].price);
    ctx.beginPath(); ctx.arc(x, y, 2, 0, Math.PI * 2); ctx.fill();
  }

  ctx.fillStyle = '#ff8800';
  for (var i = 0; i < soldHistory.length; i++) {
    var x = xPos(new Date(soldHistory[i].soldAt).getTime());
    var y = yPos(soldHistory[i].price);
    ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI * 2); ctx.fill();
  }

  ctx.fillStyle = '#555'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
  for (var i = 0; i <= 4; i++) {
    var t = minT + ((maxT - minT) / 4) * i;
    var d = new Date(t);
    ctx.fillText(d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes(), xPos(t), H - 8);
  }

  ctx.fillStyle = '#00ff00'; ctx.fillRect(pad.left, H - 14, 8, 8);
  ctx.fillStyle = '#666'; ctx.font = '10px sans-serif'; ctx.textAlign = 'left';
  ctx.fillText('Listed', pad.left + 12, H - 7);
  ctx.fillStyle = '#ff8800';
  ctx.beginPath(); ctx.arc(pad.left + 64, H - 10, 4, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#666'; ctx.fillText('Sold', pad.left + 72, H - 7);
}

// Initial load — guarded so this script can be included on /build (no #cardsGrid)
if (document.getElementById('cardsGrid')) loadCards(0);
