/**
 * Binder page — renders every card the user has marked owned (★) on the team
 * builder. State source: localStorage['mut_owned_cards_v1'].
 *
 * Ownership is keyed on cardId, so different OVR/program variants of the same
 * player are tracked independently (Brian Branch Redux 99 vs Core 88 etc.).
 */

var OWNED_CARDS_KEY = 'mut_owned_cards_v1';

function loadOwnedIds() {
  try {
    var raw = localStorage.getItem(OWNED_CARDS_KEY);
    var obj = raw ? JSON.parse(raw) : {};
    return Object.keys(obj).filter(function (id) { return obj[id] === true; }).map(Number);
  } catch (e) { return []; }
}

function setOwned(cardId, value) {
  // Server-aware path: binderClient mirrors localStorage + writes to the API
  // when the user is signed in. Pre-bootstrap or anon, it's pure localStorage.
  if (window.binderClient) {
    if (value) window.binderClient.add(cardId);
    else window.binderClient.remove(cardId);
    return;
  }
  // Fallback if binderClient hasn't loaded yet for some reason.
  try {
    var raw = localStorage.getItem(OWNED_CARDS_KEY);
    var obj = raw ? JSON.parse(raw) : {};
    if (value) obj[cardId] = true;
    else delete obj[cardId];
    localStorage.setItem(OWNED_CARDS_KEY, JSON.stringify(obj));
  } catch (e) {}
}

function esc(s) { var d = document.createElement('div'); d.textContent = String(s == null ? '' : s); return d.innerHTML; }
function fmtCoins(n) { return n == null ? '—' : n.toLocaleString('en-US'); }

function renderEmptyState() {
  document.getElementById('binderList').innerHTML =
    '<div class="binder-empty">' +
      '<p class="binder-empty-headline">Your binder is empty.</p>' +
      '<p class="binder-empty-sub">Mark cards as owned by clicking the ★ on any tile in the <a href="/build">Team Builder</a>.</p>' +
    '</div>';
  document.getElementById('binderCount').textContent = '0';
  document.getElementById('binderValue').textContent = '0';
}

function rowHtml(c) {
  var teamLogo = c.team
    ? '<img class="binder-team-logo" src="https://a.espncdn.com/i/teamlogos/nfl/500/' + c.team.toLowerCase() + '.png" alt="" onerror="this.style.display=\'none\'">'
    : '<span class="binder-team-logo-blank"></span>';
  var art = c.imageUrl
    ? '<img class="binder-art" src="' + esc(proxyImg(c.imageUrl)) + '" alt="" loading="lazy" onerror="this.style.display=\'none\'">'
    : '<div class="binder-art binder-art-empty"></div>';
  var ovrTier = c.ovr >= 99 ? 'gold' : (c.ovr >= 96 ? 'silver' : (c.ovr >= 94 ? 'bronze' : 'neutral'));
  var priceCell = c.price != null
    ? '<span class="binder-price">' + fmtCoins(c.price) + '</span>'
    : '<span class="binder-price-na">no price data</span>';
  return '<div class="binder-row" data-card-id="' + c.cardId + '" data-player="' + esc(c.playerName) + '" data-ovr="' + c.ovr + '" data-program="' + esc(c.program || '') + '">' +
    art +
    '<div class="binder-row-info">' +
      '<div class="binder-row-name">' + esc(c.playerName) + '</div>' +
      '<div class="binder-row-meta">' +
        '<span class="binder-ovr binder-ovr-' + ovrTier + '">' + c.ovr + '</span>' +
        '<span class="binder-pos">' + esc(c.position) + '</span>' +
        teamLogo +
        '<span class="binder-program">' + esc(c.program || '') + '</span>' +
      '</div>' +
    '</div>' +
    '<div class="binder-row-price">' + priceCell + '</div>' +
    '<button class="binder-star" data-card-id="' + c.cardId + '" type="button" aria-label="Remove from binder" data-tip="Remove from binder">★</button>' +
    '</div>';
}

function renderBinder(cards, totalValue) {
  document.getElementById('binderCount').textContent = cards.length;
  document.getElementById('binderValue').textContent = fmtCoins(totalValue);
  if (!cards.length) { renderEmptyState(); return; }
  var list = document.getElementById('binderList');
  list.innerHTML = cards.map(rowHtml).join('');
  // Row click → card detail
  var rows = list.querySelectorAll('.binder-row');
  for (var i = 0; i < rows.length; i++) {
    rows[i].addEventListener('click', function (e) {
      if (e.target.classList.contains('binder-star')) return;
      var player = this.getAttribute('data-player');
      var ovr = parseInt(this.getAttribute('data-ovr'), 10);
      var program = this.getAttribute('data-program');
      if (typeof showCardDetail === 'function') {
        showCardDetail(player, ovr, program);
      }
    });
  }
  // ★ click → remove from binder
  var stars = list.querySelectorAll('.binder-star');
  for (var j = 0; j < stars.length; j++) {
    stars[j].addEventListener('click', function (e) {
      e.stopPropagation();
      var id = parseInt(this.getAttribute('data-card-id'), 10);
      setOwned(id, false);
      loadBinder();
    });
  }
}

async function loadBinder() {
  var ids = loadOwnedIds();
  if (!ids.length) { renderEmptyState(); return; }
  try {
    var res = await fetch('/api/binder?ids=' + ids.join(','));
    if (!res.ok) throw new Error('http ' + res.status);
    var data = await res.json();
    renderBinder(data.cards || [], data.totalValue || 0);
  } catch (e) {
    document.getElementById('binderList').innerHTML =
      '<div class="binder-empty"><p>Failed to load your binder. Refresh to try again.</p></div>';
  }
}

// ─── Search-to-add: find any card and add it to the binder ────────────────
var addSearchDebounce = null;

function isAlreadyOwned(cardId) {
  var ids = loadOwnedIds();
  for (var i = 0; i < ids.length; i++) if (ids[i] === cardId) return true;
  return false;
}

function runAddSearch(query) {
  var dropdown = document.getElementById('binderAddDropdown');
  query = (query || '').trim();
  if (!query) { dropdown.hidden = true; return; }
  fetch('/api/teambuilder/search?q=' + encodeURIComponent(query) + '&limit=12')
    .then(function (r) { return r.json(); })
    .then(function (d) { renderAddDropdown(d.cards || []); })
    .catch(function () {
      dropdown.innerHTML = '<div class="gs-empty">Search failed</div>';
      dropdown.hidden = false;
    });
}

function renderAddDropdown(cards) {
  var dropdown = document.getElementById('binderAddDropdown');
  if (!cards.length) {
    dropdown.innerHTML = '<div class="gs-empty">No matching players</div>';
    dropdown.hidden = false;
    return;
  }
  dropdown.innerHTML = cards.map(function (c) {
    var owned = isAlreadyOwned(c.cardId);
    var teamLogo = c.team
      ? '<img src="https://a.espncdn.com/i/teamlogos/nfl/500/' + c.team.toLowerCase() + '.png" alt="" onerror="this.style.display=\'none\'">'
      : '<span class="gs-logo-blank"></span>';
    return '<div class="gs-row binder-add-row' + (owned ? ' is-owned' : '') + '" data-card-id="' + c.cardId + '">' +
      '<span class="gs-ovr">' + c.ovr + '</span>' + teamLogo +
      '<span class="gs-name">' + esc(c.playerName) + '</span>' +
      '<span class="gs-pos">' + esc(c.position) + '</span>' +
      (owned
        ? '<span class="binder-add-owned-tag">In binder</span>'
        : '<span class="gs-price">' + fmtCoins(c.price) + '</span>') +
      '</div>';
  }).join('');
  dropdown.hidden = false;
  var rows = dropdown.querySelectorAll('.binder-add-row');
  for (var i = 0; i < rows.length; i++) {
    if (rows[i].classList.contains('is-owned')) continue;
    rows[i].addEventListener('click', function () {
      var id = parseInt(this.getAttribute('data-card-id'), 10);
      setOwned(id, true);
      document.getElementById('binderAddInput').value = '';
      dropdown.hidden = true;
      loadBinder();
    });
  }
}

(function wireAddSearch() {
  var input = document.getElementById('binderAddInput');
  if (!input) return;
  input.addEventListener('input', function () {
    clearTimeout(addSearchDebounce);
    addSearchDebounce = setTimeout(function () { runAddSearch(input.value); }, 180);
  });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { document.getElementById('binderAddDropdown').hidden = true; }
  });
  document.addEventListener('click', function (e) {
    var wrap = document.querySelector('.binder-search-wrap');
    if (wrap && !wrap.contains(e.target)) {
      document.getElementById('binderAddDropdown').hidden = true;
    }
  });
})();

// Detect EA auth code from extension redirect
(function checkExtensionCode() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  if (code) {
    console.log('[Binder] Detected EA Auth Code from extension:', code);
    fetch('/api/binder/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code })
    }).then(r => r.json()).then(data => {
      console.log('[Binder] EA Auth Code synced successfully:', data);
      window.history.replaceState({}, document.title, window.location.pathname);
      if (typeof loadBinder === 'function') loadBinder();
    }).catch(err => {
      console.warn('[Binder] Extension code sync failed:', err);
    });
  }
})();

// Wait for binderClient to bootstrap (auth check + server sync) so the
// first render reflects server state, not stale localStorage.
if (window.binderClient && window.binderClient.ready) {
  window.binderClient.ready.then(loadBinder);
} else {
  loadBinder();
}
