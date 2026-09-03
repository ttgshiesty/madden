/**
 * /snipes — freemium snipe feed. Talks to /api/snipes/session/* and /api/me.
 * See docs/snipe-access-flow.md for the user-flow spec.
 */
(function () {
  var card = document.getElementById('s2Card');
  var currentState = null;
  var heartbeatTimer = null;
  var displayTimer = null;
  var teaserTimer = null;
  var feedTimer = null;
  var feedFilters = { active: true, sold: false, expired: false };
  var FEED_MIN_PROFIT = 1000;
  var PROFIT_PRESETS = [1000, 3000, 5000, 10000, 25000, 50000];
  var feedQuery = defaultFeedQuery();
  var feedQueryLoaded = false;
  var snipeConfigLoaded = false;
  var lastSnipes = [];          // cached for detail lookup on click
  var programsSeen = [];        // last-seen universe of programs for the pill row

  var FEED_QUERY_KEY = 's2-feedQuery';
  var FEED_OPEN_KEY = 's2-filtersOpen';
  var POSITION_GROUPS = [
    { label: 'OFF', positions: ['QB', 'HB', 'FB', 'WR', 'TE', 'LT', 'LG', 'C', 'RG', 'RT'] },
    { label: 'DEF', positions: ['LE', 'RE', 'DT', 'LOLB', 'MLB', 'ROLB', 'CB', 'FS', 'SS'] },
    { label: 'ST', positions: ['K', 'P'] },
  ];

  function defaultFeedQuery() {
    return { minOvr: 0, minProfit: FEED_MIN_PROFIT, sort: 'newest', platforms: [], positions: [], programs: [] };
  }

  function normalizeMinProfit(value) {
    var parsed = parseInt(value, 10);
    return isFinite(parsed) ? Math.max(FEED_MIN_PROFIT, parsed) : FEED_MIN_PROFIT;
  }

  // ─── Custom dropdown widget ─────────────────────────────────────────────────
  // Replaces native <select> so the popup stays inside our visual box and
  // matches the dark/green theme instead of the OS chrome.
  function mountDropdown(id, opts, currentValue, onChange) {
    var root = document.getElementById(id);
    if (!root) return null;
    function valLabel(v) {
      var hit = opts.filter(function (o) { return String(o.value) === String(v); })[0];
      return hit ? hit.label : '';
    }
    root.innerHTML =
      '<button class="s2-dd-btn" type="button">' +
        '<span class="s2-dd-label">' + esc(valLabel(currentValue)) + '</span>' +
        '<span class="s2-dd-chev">&#9660;</span>' +
      '</button>' +
      '<div class="s2-dd-menu">' +
        opts.map(function (o) {
          var sel = String(o.value) === String(currentValue) ? ' s2-dd-selected' : '';
          return '<button type="button" class="s2-dd-opt' + sel + '" data-val="' + esc(o.value) + '">' + esc(o.label) + '</button>';
        }).join('') +
      '</div>';
    var labelEl = root.querySelector('.s2-dd-label');
    var btnEl = root.querySelector('.s2-dd-btn');
    var menuEl = root.querySelector('.s2-dd-menu');
    function close() { root.classList.remove('s2-dd-open'); }
    function setValue(v) {
      labelEl.textContent = valLabel(v);
      menuEl.querySelectorAll('.s2-dd-opt').forEach(function (b) {
        b.classList.toggle('s2-dd-selected', b.getAttribute('data-val') === String(v));
      });
    }
    btnEl.addEventListener('click', function (e) {
      e.stopPropagation();
      // Close any other open dropdowns first.
      document.querySelectorAll('.s2-dd-open').forEach(function (d) { if (d !== root) d.classList.remove('s2-dd-open'); });
      root.classList.toggle('s2-dd-open');
    });
    menuEl.addEventListener('click', function (e) {
      var t = e.target;
      if (!t || !t.hasAttribute || !t.hasAttribute('data-val')) return;
      var v = t.getAttribute('data-val');
      setValue(v);
      close();
      onChange(v);
    });
    return { setValue: setValue };
  }
  // Click anywhere else closes all dropdowns.
  document.addEventListener('click', function () {
    document.querySelectorAll('.s2-dd-open').forEach(function (d) { d.classList.remove('s2-dd-open'); });
  });

  function saveFeedQuery() {
    try { localStorage.setItem(FEED_QUERY_KEY, JSON.stringify(feedQuery)); } catch (_) { }
  }
  function loadFeedQuery() {
    if (feedQueryLoaded) return;
    feedQueryLoaded = true;
    try {
      var raw = localStorage.getItem(FEED_QUERY_KEY);
      if (!raw) return;
      var parsed = JSON.parse(raw);
      feedQuery = Object.assign(defaultFeedQuery(), parsed);
      feedQuery.minProfit = normalizeMinProfit(feedQuery.minProfit);
      // Strip the legacy minScore key out of persisted state — Min Score is gone.
      if ('minScore' in feedQuery) delete feedQuery.minScore;
      if (!Array.isArray(feedQuery.platforms)) feedQuery.platforms = [];
      feedQuery.platforms = feedQuery.platforms
        .filter(function (p) { return p === 'ps5' || p === 'xbox' || p === 'pc'; })
        .slice(0, 1);
      if (!Array.isArray(feedQuery.positions)) feedQuery.positions = [];
      if (!Array.isArray(feedQuery.programs)) feedQuery.programs = [];
    } catch (_) {
      // Corrupted or schema-mismatched — wipe and keep defaults.
      try { localStorage.removeItem(FEED_QUERY_KEY); } catch (__) { }
    }
  }

  async function loadSnipeConfig() {
    if (snipeConfigLoaded) return;
    loadFeedQuery();
    snipeConfigLoaded = true;
    try {
      var r = await fetch('/api/snipes/session/config');
      if (!r.ok) return;
      var cfg = await r.json();
      if (cfg && (cfg.platform === 'ps5' || cfg.platform === 'xbox' || cfg.platform === 'pc')) {
        feedQuery.platforms = [cfg.platform];
      } else if (cfg && cfg.platform === null) {
        feedQuery.platforms = [];
      }
      saveFeedQuery();
    } catch (_) { /* localStorage fallback stays active */ }
  }

  function saveSnipePlatformConfig() {
    var platform = feedQuery.platforms.length === 1 ? feedQuery.platforms[0] : null;
    fetch('/api/snipes/session/config', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ platform: platform }),
    }).catch(function () { /* localStorage already captured the value */ });
  }
  var authIdentified = false;     // de-dupe s2_auth_completed + identify
  var depletionCaptured = false;  // de-dupe s2_budget_depleted within a session
  var paywallSeenCaptured = false;  // de-dupe s2_paywall_seen
  // Founding membership Stripe price ID (matches public/snipes.js). When 5b's
  // Stripe checkout completes, the webhook → upgradeUserToFounding bumps this
  // user's daily_cap_sec server-side.
  var FOUNDING_PRICE_ID = 'price_1TXJ15CJLN6ZW7znOcMY8v6p';

  function cap(name, props) {
    if (typeof window.posthog === "undefined") return;
    try { window.posthog.capture(name, props || {}); } catch (e) { /* silent */ }
  }
  // Client-side smoothed countdown. Ticks down each second while running and
  // is reconciled to the server's authoritative value on every heartbeat.
  var localRemainingSec = 0;

  function fmtSec(s) {
    s = Math.max(0, Math.floor(s));
    var m = Math.floor(s / 60);
    var r = s % 60;
    return m + ':' + (r < 10 ? '0' : '') + r;
  }

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) {
    return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c];
  }); }

  function proxiedImageUrl(url) {
    return window.proxyImg ? window.proxyImg(url) : url;
  }

  function fmtCoins(n) {
    if (!n || n < 1000) return String(n || 0);
    if (n < 1_000_000) return (n / 1000).toFixed(n < 10_000 ? 1 : 0) + 'k';
    return (n / 1_000_000).toFixed(1) + 'M';
  }
  function fmtCoinsFull(n) { return (n || 0).toLocaleString(); }

  function renderAnon() {
    stopHeartbeat();
    stopDisplayTicker();
    card.innerHTML =
      '<h1>MUT Alpha Snipes</h1>' +
      '<div class="s2-teaser" id="s2Teaser">' +
        '<div class="s2-teaser-tile"><div class="s2-teaser-num" id="teaserLive">—</div><div class="s2-teaser-label">Live now</div></div>' +
        '<div class="s2-teaser-tile"><div class="s2-teaser-num" id="teaserHour">—</div><div class="s2-teaser-label">Past hour</div></div>' +
        '<div class="s2-teaser-tile"><div class="s2-teaser-num" id="teaserProfit">—</div><div class="s2-teaser-label">Median profit</div></div>' +
      '</div>' +
      '<p>5 minutes of live snipes per day, free. Pause anytime, your time banks for later. Continue with Google to unlock.</p>' +
      '<a href="/auth/google" class="s2-btn-google">' +
        '<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
          '<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>' +
          '<path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>' +
          '<path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>' +
          '<path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>' +
        '</svg>' +
        'Continue with Google' +
      '</a>' +
      '<div class="s2-footer"><a href="/">Back to shiesty-mut</a></div>';
    startTeaser();
  }

  async function refreshTeaser() {
    try {
      var r = await fetch('/api/snipes/teaser');
      if (!r.ok) return;
      var t = await r.json();
      // S0 anon teaser tiles
      var live = document.getElementById('teaserLive');
      var hour = document.getElementById('teaserHour');
      var profit = document.getElementById('teaserProfit');
      if (live) live.textContent = t.live;
      if (hour) hour.textContent = t.lastHour;
      if (profit) profit.textContent = '~' + fmtCoins(t.medianProfit);
      // Authenticated header stats above the live feed
      var liveA = document.getElementById('s2StatLive');
      var hourA = document.getElementById('s2StatHour');
      var profitA = document.getElementById('s2StatProfit');
      if (liveA) liveA.textContent = t.live;
      if (hourA) hourA.textContent = t.lastHour;
      if (profitA) profitA.textContent = '~' + fmtCoins(t.medianProfit);
    } catch (_) { /* network blip, next tick will retry */ }
  }

  function startTeaser() {
    refreshTeaser();
    if (teaserTimer) return;
    teaserTimer = setInterval(refreshTeaser, 30_000);
  }

  function stopTeaser() {
    if (teaserTimer) { clearInterval(teaserTimer); teaserTimer = null; }
  }

  // ─── Live snipe feed (gated by session.state === running) ──────────────────
  // Profit thresholds for the BUY / MUST BUY badge — replaces the previous
  // shadow-score-based badge. Profit is what the user actually understands.
  function badgeForProfit(profit) {
    if (profit >= 200000) return '<div class="s2-snipe-badge s2-badge-mustbuy">MUST BUY</div>';
    if (profit >= 50000) return '<div class="s2-snipe-badge s2-badge-buy">BUY</div>';
    return '';
  }

  function renderSnipe(s) {
    var img = s.imageUrl
      ? '<img class="s2-snipe-img" src="' + esc(proxiedImageUrl(s.imageUrl)) + '" loading="lazy" alt="">'
      : '<div class="s2-snipe-img"></div>';
    var statusClass = s.status === 'sold' ? ' s2-snipe-sold'
      : s.status === 'expired' ? ' s2-snipe-expired' : '';
    var statusTag = s.status === 'sold' ? '<span class="s2-snipe-status s2-status-sold">SOLD</span>'
      : s.status === 'expired' ? '<span class="s2-snipe-status s2-status-expired">EXPIRED</span>' : '';
    // Compact history strips: sold stays recent-first; listings are cheapest-first.
    function strip(arr, mode) {
      if (!arr || !arr.length) return '<span class="s2-snipe-hist-none">—</span>';
      var values = arr.filter(function (p) { return isFinite(Number(p)) && Number(p) > 0; }).map(Number);
      if (!values.length) return '<span class="s2-snipe-hist-none">—</span>';
      if (mode === 'cheapest') values = values.sort(function (a, b) { return a - b; }).slice(0, 5);
      else values = values.slice(0, 5);
      return values.map(function (p) { return fmtCoins(p); }).join(' &middot; ');
    }
    function platLabel(platform) {
      return platform === 'xbox' ? 'Xbox' : platform === 'ps5' ? 'PS5' : platform === 'pc' ? 'PC' : '';
    }
    function marketRows(platform, label) {
      var by = s.marketByPlatform || {};
      var m = by[platform] || {};
      return '<div class="s2-snipe-hist-row"><span class="s2-snipe-hist-lbl">' + label + ' SOLD</span>' + strip(m.recentSoldPrices) + '</div>' +
        '<div class="s2-snipe-hist-row"><span class="s2-snipe-hist-lbl">' + label + ' LIST</span>' + strip(m.recentListedPrices, 'cheapest') + '</div>';
    }
    var platformBadge = s.platform
      ? '<span class="s2-snipe-platform">' + esc(platLabel(s.platform)) + '</span>'
      : '';
    var rowPlatform = s.platform === 'xbox' ? 'xbox' : s.platform === 'ps5' ? 'ps5' : s.platform === 'pc' ? 'pc' : '';
    var rowPlatformLabel = rowPlatform === 'xbox' ? 'XB' : rowPlatform === 'ps5' ? 'PS5' : rowPlatform === 'pc' ? 'PC' : '';
    var marketHtml = rowPlatform && s.marketByPlatform
      ? marketRows(rowPlatform, rowPlatformLabel)
      : '<div class="s2-snipe-hist-row"><span class="s2-snipe-hist-lbl">SOLD</span>' + strip(s.recentSoldPrices) + '</div>' +
        '<div class="s2-snipe-hist-row"><span class="s2-snipe-hist-lbl">LIST</span>' + strip(s.recentListedPrices, 'cheapest') + '</div>';
    return '<div class="s2-snipe' + statusClass + '">' + img +
      '<div class="s2-snipe-info">' +
        '<div class="s2-snipe-name">' + esc(s.playerName) + '<span class="s2-snipe-ovr">' + s.ovr + ' OVR</span>' + statusTag + '</div>' +
        '<div class="s2-snipe-meta">' + esc(s.position) + ' &middot; ' + esc(s.program) + platformBadge + '</div>' +
        '<div class="s2-snipe-prices">' +
          '<span class="s2-snipe-list">' + fmtCoins(s.listPrice) + '</span>' +
          '<span class="s2-snipe-vs">vs</span>' +
          '<span class="s2-snipe-median">' + fmtCoins(s.median) + '</span>' +
        '</div>' +
        '<div class="s2-snipe-hist">' + marketHtml + '</div>' +
      '</div>' +
      '<div class="s2-snipe-right">' +
        '<div class="s2-snipe-profit">+' + fmtCoins(s.estimatedProfit) + '</div>' +
        badgeForProfit(s.estimatedProfit) +
      '</div>' +
    '</div>';
  }

  function showFeedPlaceholder(message) {
    var grid = document.getElementById('s2Grid');
    var list = document.getElementById('s2FeedList');
    if (!grid || !list) return;
    grid.hidden = false;
    list.innerHTML = '<div class="s2-feed-placeholder">' + esc(message) + '</div>';
  }

  function hideFeed() {
    var grid = document.getElementById('s2Grid');
    if (grid) grid.hidden = true;
  }

  function currentStatusParam() {
    var selected = Object.keys(feedFilters).filter(function (k) { return feedFilters[k]; });
    return selected.length ? selected.join(',') : 'active';
  }

  function setFeedPlatforms(platform, persist) {
    if (!platform) feedQuery.platforms = [];
    else feedQuery.platforms = [platform];
    saveFeedQuery();
    updateActiveSummary();
    renderPlatformPills();
    if (persist) saveSnipePlatformConfig();
  }

  function renderFilterPills() {
    function consolePill(value, label) {
      var on = value ? feedQuery.platforms.length === 1 && feedQuery.platforms[0] === value : !feedQuery.platforms.length;
      return '<button class="s2-filter-pill ' + (on ? 's2-filter-on' : '') + '" data-console="' + value + '">' + label + '</button>';
    }
    var consoleHtml = '<div class="s2-filters s2-filter-console">' +
      consolePill('', 'ALL') + consolePill('ps5', 'PS5') + consolePill('xbox', 'XBOX') + consolePill('pc', 'PC') +
      '</div>';
    var statusHtml = '<div class="s2-filters s2-filter-status">' +
      ['active', 'sold', 'expired'].map(function (s) {
        return '<button class="s2-filter-pill ' + (feedFilters[s] ? 's2-filter-on' : '') + '" data-filter="' + s + '">' + s.toUpperCase() + '</button>';
      }).join('') +
      '</div>';
    return '<div class="s2-feed-controls">' + consoleHtml + statusHtml + '</div>';
  }

  function wireFilterPills() {
    var consolePills = document.querySelectorAll('.s2-filter-pill[data-console]');
    for (var c = 0; c < consolePills.length; c++) {
      consolePills[c].addEventListener('click', function () {
        var platform = this.getAttribute('data-console');
        var current = feedQuery.platforms.length === 1 ? feedQuery.platforms[0] : '';
        if (platform === current) return;
        setFeedPlatforms(platform, true);
        refreshFeed();
      });
    }
    var pills = document.querySelectorAll('.s2-filter-pill');
    for (var i = 0; i < pills.length; i++) {
      pills[i].addEventListener('click', function () {
        if (!this.hasAttribute('data-filter')) return;
        var key = this.getAttribute('data-filter');
        if (feedFilters[key]) return; // already selected — radio-style no-op
        feedFilters = { active: false, sold: false, expired: false };
        feedFilters[key] = true;
        refreshFeed();
      });
    }
  }

  async function refreshFeed() {
    var qs = 'status=' + encodeURIComponent(currentStatusParam())
      + '&min_ovr=' + feedQuery.minOvr
      + '&min_profit=' + feedQuery.minProfit
      + '&sort=' + encodeURIComponent(feedQuery.sort)
      + (feedQuery.platforms.length ? '&platform=' + encodeURIComponent(feedQuery.platforms.join(',')) : '')
      + (feedQuery.positions.length ? '&position=' + encodeURIComponent(feedQuery.positions.join(',')) : '')
      + (feedQuery.programs.length ? '&program=' + encodeURIComponent(feedQuery.programs.join(',')) : '');
    var r = await fetch('/api/snipes/feed?' + qs);
    if (r.status === 401 || r.status === 402 || r.status === 403) {
      showFeedPlaceholder('Press START to see live snipes.');
      return;
    }
    if (!r.ok) return;
    var data = await r.json();
    var list = document.getElementById('s2FeedList');
    var grid = document.getElementById('s2Grid');
    if (!list || !grid) return;
    grid.hidden = false;
    var head = renderFilterPills();
    if (!data.snipes || !data.snipes.length) {
      list.innerHTML = head + '<div class="s2-feed-placeholder">No snipes matching this filter right now.</div>';
      wireFilterPills();
      return;
    }
    // Detect new arrivals — count snipe IDs in the new payload that weren't in
    // the previous one. Skip the very first load (every snipe is "new" then).
    var oldIds = {};
    for (var oi = 0; oi < lastSnipes.length; oi++) oldIds[lastSnipes[oi].id] = 1;
    var added = 0;
    for (var ai = 0; ai < data.snipes.length; ai++) if (!oldIds[data.snipes[ai].id]) added++;
    if (lastSnipes.length > 0 && added > 0) showPop('+' + added + ' new');
    lastSnipes = data.snipes;
    if (Array.isArray(data.programs) && data.programs.length) {
      programsSeen = data.programs;
      renderProgramPills();
    }
    list.innerHTML = head + data.snipes.map(function (s, i) {
      // Stamp the index so click delegation can resolve to the snipe object.
      return renderSnipe(s).replace('<div class="s2-snipe', '<div data-idx="' + i + '" class="s2-snipe');
    }).join('');
    wireFilterPills();
  }

  function startFeed() {
    initFilters().then(function () {
      refreshFeed();
      loadHeatmapOnce();
      if (feedTimer) return;
      feedTimer = setInterval(refreshFeed, 5_000);
    });
  }

  // ─── Depletion paywall ─────────────────────────────────────────────────────
  // Lands when remainingSec === 0. The highest-converting moment in the funnel:
  // user just experienced 5 min of value, got cut off, sitting on the page
  // wanting more. Real Stripe upgrade button via redirect-mode Checkout.
  function fmtResetCountdown(iso) {
    // Local-time hh:mm of the next UTC midnight. Anchors the "wait" cost.
    try { return new Date(iso).toLocaleString([], { hour: '2-digit', minute: '2-digit' }); }
    catch (_) { return iso; }
  }

  async function renderDepletionCta(state) {
    var feed = document.getElementById('s2Feed');
    var list = document.getElementById('s2FeedList');
    if (!feed || !list) return;
    feed.hidden = false;
    list.innerHTML =
      '<div class="s2-paywall">' +
        '<div class="s2-paywall-eyebrow">All caught up for today</div>' +
        '<div class="s2-paywall-headline">Want unlimited minutes?</div>' +
        '<div class="s2-paywall-spots" id="s2PaywallSpots">Founding membership · $10/mo</div>' +
        '<button class="s2-paywall-btn" id="s2UpgradeBtn">Upgrade — $10/mo</button>' +
        '<div class="s2-paywall-reset">Free tier resets at ~' + esc(fmtResetCountdown(state.resetsAtUtc)) + ' your local time</div>' +
      '</div>';
    document.getElementById('s2UpgradeBtn').addEventListener('click', onUpgradeClick);

    // Fill in real spots count (one teaser fetch — cheap)
    try {
      var r = await fetch('/api/snipes/teaser');
      if (r.ok) {
        var t = await r.json();
        var spotsEl = document.getElementById('s2PaywallSpots');
        if (spotsEl && typeof t.foundingSpotsLeft === 'number') {
          spotsEl.textContent = t.foundingSpotsLeft + ' of 25 founding spots left · $10/mo';
        }
      }
    } catch (_) { /* badge stays generic */ }

    if (!paywallSeenCaptured) {
      paywallSeenCaptured = true;
      cap("s2_paywall_seen", { cap_sec: state.capSec });
    }
  }

  // ─── Stripe Embedded Checkout modal ────────────────────────────────────────
  var stripeCheckout = null;        // current embedded checkout handle
  var stripeJsLoading = null;       // de-dupes the Stripe.js loader Promise

  function loadStripeJs() {
    if (window.Stripe) return Promise.resolve();
    if (stripeJsLoading) return stripeJsLoading;
    stripeJsLoading = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = 'https://js.stripe.com/v3/';
      s.async = true;
      s.onload = resolve;
      s.onerror = function () { reject(new Error('Stripe.js failed to load')); };
      document.head.appendChild(s);
    });
    return stripeJsLoading;
  }

  function showModal() {
    var bd = document.getElementById('s2ModalBackdrop');
    if (!bd) return;
    bd.classList.add('s2-visible');
    document.body.style.overflow = 'hidden';
  }

  function hideModal() {
    var bd = document.getElementById('s2ModalBackdrop');
    if (!bd) return;
    bd.classList.remove('s2-visible');
    document.body.style.overflow = '';
    if (stripeCheckout) { try { stripeCheckout.destroy(); } catch (_) { } stripeCheckout = null; }
    var mount = document.getElementById('s2CheckoutMount');
    if (mount) mount.innerHTML = '<div class="s2-modal-loading">Loading checkout&hellip;</div>';
  }

  // Floating "+N new" pop — fires when refreshFeed lands new snipe IDs.
  // Positioned over the live feed title, fades out after a beat.
  var popTimer = null;
  function showPop(text) {
    var el = document.getElementById('s2Pop');
    if (!el) return;
    el.textContent = text;
    // Anchor near the feed-title top center
    var feedEl = document.getElementById('s2Feed');
    if (feedEl) {
      var r = feedEl.getBoundingClientRect();
      el.style.left = (r.left + r.width / 2 - el.offsetWidth / 2) + 'px';
      el.style.top = (r.top - 4) + 'px';
    }
    el.classList.add('s2-pop-show');
    clearTimeout(popTimer);
    popTimer = setTimeout(function () { el.classList.remove('s2-pop-show'); }, 1800);
  }

  function showSuccessToast() {
    var t = document.getElementById('s2Toast');
    if (!t) return;
    t.classList.add('s2-visible');
    setTimeout(function () { t.classList.remove('s2-visible'); }, 4000);
  }

  async function onUpgradeClick(source) {
    var trackingSource = typeof source === 'string' ? source : 'depletion_cta';
    cap("s2_upgrade_clicked", { source: trackingSource });
    // Pause the scanner before checkout — protects their remaining budget
    // while they type card details. If they cancel, they manually RESUME;
    // if they pay, the upgrade makes budget irrelevant anyway.
    if (currentState && currentState.state === 'running' && currentState.sessionId) {
      fetch('/api/snipes/session/pause', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: currentState.sessionId }),
      }).catch(function () { /* sweep will auto-pause */ });
      stopHeartbeat();
      stopDisplayTicker();
      stopFeed();
    }
    showModal();
    try {
      var [configRes, checkoutRes] = await Promise.all([
        fetch('/api/checkout/config').then(function (r) { return r.ok ? r.json() : Promise.reject('config'); }),
        fetch('/api/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ priceId: FOUNDING_PRICE_ID, source: 'snipes_paid' }),
        }).then(function (r) { return r.ok ? r.json() : Promise.reject('checkout'); }),
      ]);
      await loadStripeJs();
      var stripe = window.Stripe(configRes.publishableKey);
      var sessionId = checkoutRes.sessionId;
      stripeCheckout = await stripe.initEmbeddedCheckout({
        clientSecret: checkoutRes.clientSecret,
        onComplete: function () {
          // Stripe shows its own confirmation inside the iframe briefly. We
          // trigger the server-side upgrade by hitting /api/checkout/status,
          // then close the modal and re-render to show the bumped budget.
          cap("s2_payment_completed", { session_id: sessionId });
          fetch('/api/checkout/status?session_id=' + encodeURIComponent(sessionId))
            .finally(function () {
              setTimeout(function () {
                hideModal();
                showSuccessToast();
                render(); // refresh state — budget now reflects founding cap
              }, 1200);
            });
        },
      });
      var mount = document.getElementById('s2CheckoutMount');
      if (mount) mount.innerHTML = '';
      stripeCheckout.mount('#s2CheckoutMount');
    } catch (e) {
      var mount = document.getElementById('s2CheckoutMount');
      if (mount) mount.innerHTML = '<div class="s2-modal-error">Could not load checkout. Refresh and try again.</div>';
    }
  }

  function stopFeed() {
    if (feedTimer) { clearInterval(feedTimer); feedTimer = null; }
  }

  // ─── "Best Times to Snipe" sidebar ──────────────────────────────────────────
  // Tabs (Hour/Day) + days dropdown + min-score input. Heatmap buckets don't
  // change in real time; we refetch on control change, not on a timer.
  var hmState = { view: 'hour', days: 30 };
  var hmInited = false;

  async function reloadHeatmap() {
    var p = 'days=' + hmState.days;
    try {
      var r = await fetch('/api/snipe-heatmap?' + p);
      if (!r.ok) return;
      var data = await r.json();
      renderHeatmap(hmState.view === 'day' ? data.byDay || [] : data.byHour || []);
    } catch (_) { /* leave previous state */ }
  }

  function fmtHourLabel(h) {
    if (h === 0) return '12a'; if (h < 12) return h + 'a';
    if (h === 12) return '12p'; return (h - 12) + 'p';
  }

  // Rotate the 24-hour array so the chart starts at 8 AM ET — afternoon /
  // evening peaks then land in the visual middle of the graph instead of
  // the right edge. Day view (7 buckets) is left as Sun→Sat.
  var HOUR_START = 8;
  function rotateHours(buckets) {
    if (buckets.length !== 24) return buckets;
    return buckets.slice(HOUR_START).concat(buckets.slice(0, HOUR_START));
  }

  function renderHeatmap(buckets) {
    var barsEl = document.getElementById('s2HmBars');
    var labelsEl = document.getElementById('s2HmLabels');
    var peakEl = document.getElementById('s2HmPeak');
    if (!barsEl || !labelsEl) return;
    if (!buckets.length) {
      barsEl.innerHTML = '<div class="s2-hm-empty">Not enough data yet.</div>';
      labelsEl.innerHTML = '';
      if (peakEl) peakEl.textContent = '';
      return;
    }
    if (hmState.view === 'hour') buckets = rotateHours(buckets);
    var maxCount = 0, peakIdx = 0;
    for (var i = 0; i < buckets.length; i++) {
      if (buckets[i].count > maxCount) { maxCount = buckets[i].count; peakIdx = i; }
    }
    var peakLabel = hmState.view === 'day' ? 'Best day: ' + buckets[peakIdx].label : 'Peak: ' + buckets[peakIdx].label + ' ET';
    if (peakEl) peakEl.textContent = maxCount > 0 ? peakLabel + ' (' + buckets[peakIdx].count.toLocaleString() + ')' : '';
    var nowEt = (new Date().getUTCHours() - 4 + 24) % 24;
    var nowDay = new Date(Date.now() - 4 * 3600 * 1000).getUTCDay();
    var isDay = hmState.view === 'day';
    var barsHtml = '', labelsHtml = '';
    for (var j = 0; j < buckets.length; j++) {
      var b = buckets[j];
      var pct = maxCount > 0 ? Math.max(2, Math.round((b.count / maxCount) * 100)) : 0;
      var isCurrent = isDay ? b.bucket === nowDay : b.bucket === nowEt;
      var current = isCurrent ? ' s2-hm-current' : '';
      // Day view has 7 wide bars — always show count above. Hour view: tooltip.
      var count = isDay
        ? '<span class="s2-hm-bar-count">' + b.count.toLocaleString() + '</span>'
        : '';
      // Stash data on the element so the delegated hover handler can read it
      // without redoing the lookup. JSON-encode for safety (label contains spaces).
      var bd = encodeURIComponent(JSON.stringify({
        label: b.label, count: b.count, avgScore: b.avgScore || 0,
        soldRate: b.soldRate || 0, view: isDay ? 'day' : 'hour',
      }));
      barsHtml += '<div class="s2-hm-bar' + current + '" style="height:' + pct + '%" data-bar="' + bd + '">' + count + '</div>';
      // Hour labels every 4h, day labels always.
      if (isDay) labelsHtml += '<span>' + esc(b.label) + '</span>';
      else labelsHtml += '<span>' + (b.bucket % 4 === 0 ? fmtHourLabel(b.bucket) : '') + '</span>';
    }
    barsEl.innerHTML = barsHtml;
    labelsEl.innerHTML = labelsHtml;
  }

  function showHmTip(bar, evt) {
    var tip = document.getElementById('s2HmTip');
    if (!tip) return;
    var raw = bar.getAttribute('data-bar');
    if (!raw) return;
    try {
      var d = JSON.parse(decodeURIComponent(raw));
      tip.innerHTML =
        '<div class="s2-hm-tip-label">' + esc(d.label) + (d.view === 'hour' ? ' ET' : '') + '</div>' +
        '<div class="s2-hm-tip-row"><span class="s2-hm-tip-key">Snipes</span><span class="s2-hm-tip-val">' + d.count.toLocaleString() + '</span></div>' +
        '<div class="s2-hm-tip-row"><span class="s2-hm-tip-key">Avg score</span><span class="s2-hm-tip-val">' + d.avgScore + '</span></div>' +
        '<div class="s2-hm-tip-row"><span class="s2-hm-tip-key">Sold rate</span><span class="s2-hm-tip-val">' + d.soldRate + '%</span></div>';
      tip.classList.add('s2-visible');
      moveHmTip(evt);
    } catch (_) { /* malformed data attr */ }
  }
  function moveHmTip(evt) {
    var tip = document.getElementById('s2HmTip');
    if (!tip || !tip.classList.contains('s2-visible')) return;
    var pad = 14;
    var w = tip.offsetWidth, h = tip.offsetHeight;
    var x = evt.clientX + pad, y = evt.clientY + pad;
    // Flip to the other side if it would clip the viewport
    if (x + w > window.innerWidth) x = evt.clientX - w - pad;
    if (y + h > window.innerHeight) y = evt.clientY - h - pad;
    tip.style.left = x + 'px';
    tip.style.top = y + 'px';
  }
  function hideHmTip() {
    var tip = document.getElementById('s2HmTip');
    if (tip) tip.classList.remove('s2-visible');
  }

  function initHeatmapControls() {
    if (hmInited) return;
    hmInited = true;
    // Delegated tooltip handlers on the bars container — survives re-renders.
    var barsEl = document.getElementById('s2HmBars');
    if (barsEl) {
      barsEl.addEventListener('mouseover', function (e) {
        if (e.target && e.target.classList && e.target.classList.contains('s2-hm-bar')) showHmTip(e.target, e);
      });
      barsEl.addEventListener('mousemove', function (e) {
        if (e.target && e.target.classList && e.target.classList.contains('s2-hm-bar')) moveHmTip(e);
      });
      barsEl.addEventListener('mouseleave', hideHmTip);
    }
    document.querySelectorAll('.s2-hm-tab').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.s2-hm-tab').forEach(function (b) { b.classList.remove('s2-hm-active'); });
        btn.classList.add('s2-hm-active');
        hmState.view = btn.getAttribute('data-view');
        if (hmState.view === 'day' && hmState.days < 7) {
          hmState.days = 7;
          if (window._s2HmDaysDD) window._s2HmDaysDD.setValue('7');
        }
        reloadHeatmap();
      });
    });
    var daysDD = mountDropdown('s2HmDays', [
      { value: '1', label: '1 day' }, { value: '3', label: '3 days' },
      { value: '7', label: '7 days' }, { value: '14', label: '14 days' },
      { value: '30', label: '30 days' }, { value: '60', label: '60 days' },
      { value: '90', label: '90 days' },
    ], hmState.days, function (v) { hmState.days = parseInt(v, 10) || 30; reloadHeatmap(); });
    // Expose so the tab handler can bump from <7 days on Day view
    window._s2HmDaysDD = daysDD;
  }

  function loadHeatmapOnce() {
    initHeatmapControls();
    reloadHeatmap();
  }

  function renderPositionPills() {
    var el = document.getElementById('s2FPosPills');
    if (!el) return;
    var html = '';
    POSITION_GROUPS.forEach(function (g) {
      html += '<span class="s2-f-pgroup">' + g.label + '</span>';
      g.positions.forEach(function (p) {
        var on = feedQuery.positions.indexOf(p) >= 0 ? ' s2-on' : '';
        html += '<button class="s2-f-p' + on + '" data-pos="' + p + '">' + p + '</button>';
      });
    });
    el.innerHTML = html;
  }

  function renderPlatformPills() {
    var el = document.getElementById('s2FPlatformPills');
    if (!el) return;
    var allOn = !feedQuery.platforms.length;
    el.innerHTML =
      '<button class="s2-f-p' + (allOn ? ' s2-on' : '') + '" data-platform="">ALL</button>' +
      ['ps5', 'xbox', 'pc'].map(function (p) {
        var label = p === 'xbox' ? 'Xbox' : p === 'pc' ? 'PC' : 'PS5';
        var on = feedQuery.platforms.indexOf(p) >= 0 ? ' s2-on' : '';
        return '<button class="s2-f-p' + on + '" data-platform="' + p + '">' + label + '</button>';
      }).join('');
  }

  function renderProgramPills() {
    var el = document.getElementById('s2FProgPills');
    if (!el) return;
    if (!programsSeen.length) { el.innerHTML = '<span style="color:#555;font-size:11px">No programs yet</span>'; return; }
    el.innerHTML = programsSeen.map(function (p) {
      var on = feedQuery.programs.indexOf(p) >= 0 ? ' s2-on' : '';
      return '<button class="s2-f-p' + on + '" data-prog="' + esc(p) + '">' + esc(p) + '</button>';
    }).join('');
  }

  function renderProfitPills() {
    var el = document.getElementById('s2FProfitPills');
    if (!el) return;
    el.innerHTML = PROFIT_PRESETS.map(function (profit) {
      var on = feedQuery.minProfit === profit ? ' s2-on' : '';
      return '<button class="s2-f-p' + on + '" data-profit="' + profit + '">' + fmtCoins(profit) + '+</button>';
    }).join('');
  }

  function updateActiveSummary() {
    var el = document.getElementById('s2FActive');
    if (!el) return;
    var bits = [];
    if (feedQuery.minOvr) bits.push('ovr≥' + feedQuery.minOvr);
    if (feedQuery.minProfit) bits.push('profit≥' + fmtCoins(feedQuery.minProfit));
    if (feedQuery.platforms.length) bits.push(feedQuery.platforms.map(function (p) { return p === 'xbox' ? 'Xbox' : p === 'pc' ? 'PC' : 'PS5'; }).join('/'));
    if (feedQuery.positions.length) bits.push(feedQuery.positions.length + ' pos');
    if (feedQuery.programs.length) bits.push(feedQuery.programs.length + ' prog');
    if (feedQuery.sort !== 'newest') bits.push(feedQuery.sort);
    el.textContent = bits.length ? '· ' + bits.join(' · ') : '';
  }

  var filtersInited = false;
  async function initFilters() {
    if (filtersInited) return;
    filtersInited = true;
    loadFeedQuery();
    await loadSnipeConfig();
    // Hydrate the UI from persisted state.
    var debounce = null;
    function bump() {
      clearTimeout(debounce);
      debounce = setTimeout(function () {
        saveFeedQuery();
        renderProfitPills();
        updateActiveSummary();
        refreshFeed();
      }, 250);
    }
    function commit() {
      saveFeedQuery();
      renderProfitPills();
      updateActiveSummary();
      refreshFeed();
    }
    var els = {
      profit: document.getElementById('s2FProfit'),
      reset: document.getElementById('s2FReset'),
      head: document.getElementById('s2FHead'),
      panel: document.getElementById('s2LeftCol'),
      profitPills: document.getElementById('s2FProfitPills'),
      platformPills: document.getElementById('s2FPlatformPills'),
      posPills: document.getElementById('s2FPosPills'),
      progPills: document.getElementById('s2FProgPills'),
    };
    if (els.profit) els.profit.value = feedQuery.minProfit || '';
    var ovrDD = mountDropdown('s2FOvr', [
      { value: '0', label: 'All' }, { value: '80', label: '80+' },
      { value: '85', label: '85+' }, { value: '90', label: '90+' },
      { value: '94', label: '94+' }, { value: '96', label: '96+' },
      { value: '98', label: '98+' },
    ], feedQuery.minOvr, function (v) { feedQuery.minOvr = parseInt(v, 10) || 0; commit(); });
    var sortDD = mountDropdown('s2FSort', [
      { value: 'newest', label: 'Newest' },
      { value: 'profit', label: 'Profit (high)' },
      { value: 'price', label: 'Price (low)' },
    ], feedQuery.sort, function (v) { feedQuery.sort = v; commit(); });
    renderProfitPills();
    renderPlatformPills();
    renderPositionPills();
    updateActiveSummary();

    // Restore open/closed state.
    try {
      if (localStorage.getItem(FEED_OPEN_KEY) === '1') els.panel.classList.remove('s2-f-collapsed');
    } catch (_) { /* localStorage blocked */ }
    if (els.head) els.head.addEventListener('click', function () {
      els.panel.classList.toggle('s2-f-collapsed');
      try { localStorage.setItem(FEED_OPEN_KEY, els.panel.classList.contains('s2-f-collapsed') ? '0' : '1'); } catch (_) { }
    });

    if (els.profit) {
      els.profit.addEventListener('input', function () { feedQuery.minProfit = normalizeMinProfit(els.profit.value); bump(); });
      els.profit.addEventListener('blur', function () { els.profit.value = feedQuery.minProfit; renderProfitPills(); });
    }
    if (els.profitPills) els.profitPills.addEventListener('click', function (e) {
      var t = e.target;
      if (!t || !t.hasAttribute || !t.hasAttribute('data-profit')) return;
      feedQuery.minProfit = normalizeMinProfit(t.getAttribute('data-profit'));
      if (els.profit) els.profit.value = feedQuery.minProfit;
      commit();
    });
    if (els.platformPills) els.platformPills.addEventListener('click', function (e) {
      var t = e.target;
      if (!t || !t.hasAttribute || !t.hasAttribute('data-platform')) return;
      var platform = t.getAttribute('data-platform');
      setFeedPlatforms(platform, true);
      refreshFeed();
    });
    if (els.posPills) els.posPills.addEventListener('click', function (e) {
      var t = e.target;
      if (!t || !t.hasAttribute || !t.hasAttribute('data-pos')) return;
      var pos = t.getAttribute('data-pos');
      var idx = feedQuery.positions.indexOf(pos);
      if (idx >= 0) feedQuery.positions.splice(idx, 1); else feedQuery.positions.push(pos);
      t.classList.toggle('s2-on');
      commit();
    });
    if (els.progPills) els.progPills.addEventListener('click', function (e) {
      var t = e.target;
      if (!t || !t.hasAttribute || !t.hasAttribute('data-prog')) return;
      var prog = t.getAttribute('data-prog');
      var idx = feedQuery.programs.indexOf(prog);
      if (idx >= 0) feedQuery.programs.splice(idx, 1); else feedQuery.programs.push(prog);
      t.classList.toggle('s2-on');
      commit();
    });
    if (els.reset) els.reset.addEventListener('click', function () {
      feedQuery = defaultFeedQuery();
      if (els.profit) els.profit.value = feedQuery.minProfit;
      if (ovrDD) ovrDD.setValue('0');
      if (sortDD) sortDD.setValue('newest');
      saveSnipePlatformConfig();
      renderProfitPills();
      renderPlatformPills();
      renderPositionPills();
      renderProgramPills();
      commit();
    });
  }

  // ─── Market-detail modal ────────────────────────────────────────────────────
  // Accepts either an ISO string (listing.timestamp) or a Unix-seconds number
  // (sale.soldAt). The two endpoints use different shapes for legacy reasons.
  function fmtAgo(t) {
    if (!t) return '—';
    var ms;
    if (typeof t === 'number') ms = t < 1e12 ? t * 1000 : t;
    else ms = new Date(t).getTime();
    if (!isFinite(ms)) return '—';
    var sec = Math.max(0, Math.floor((Date.now() - ms) / 1000));
    if (sec < 60) return sec + 's ago';
    if (sec < 3600) return Math.floor(sec / 60) + 'm ago';
    if (sec < 86400) return Math.floor(sec / 3600) + 'h ago';
    return Math.floor(sec / 86400) + 'd ago';
  }

  function showDetailModal() {
    var bd = document.getElementById('s2DetailBackdrop');
    if (!bd) return;
    bd.classList.add('s2-visible');
    document.body.style.overflow = 'hidden';
  }
  function hideDetailModal() {
    var bd = document.getElementById('s2DetailBackdrop');
    if (!bd) return;
    bd.classList.remove('s2-visible');
    document.body.style.overflow = '';
    var c = document.getElementById('s2DetailContent');
    if (c) c.innerHTML = '<div class="s2-modal-loading">Loading market data&hellip;</div>';
  }

  async function openDetailFor(snipe) {
    showDetailModal();
    cap('s2_card_clicked', { player: snipe.playerName, ovr: snipe.ovr });
    try {
      var url = '/api/snipe-detail?player=' + encodeURIComponent(snipe.playerName)
        + '&ovr=' + snipe.ovr
        + (snipe.program ? '&program=' + encodeURIComponent(snipe.program) : '');
      var r = await fetch(url);
      if (!r.ok) throw new Error('detail fetch failed');
      var d = await r.json();
      renderDetail(snipe, d);
    } catch (_) {
      var c = document.getElementById('s2DetailContent');
      if (c) c.innerHTML = '<div class="s2-modal-error">Could not load market data.</div>';
    }
  }

  function renderDetail(snipe, d) {
    var c = document.getElementById('s2DetailContent');
    if (!c) return;
    var img = snipe.imageUrl
      ? '<img class="s2-d-img" src="' + esc(proxiedImageUrl(snipe.imageUrl)) + '" alt="">'
      : '<div class="s2-d-img"></div>';
    var q = d.quartiles || {};
    var v = d.velocity || {};
    var statsGrid =
      '<div class="s2-d-grid">' +
        '<div class="s2-d-stat"><div class="s2-d-stat-num">' + fmtCoinsFull(q.q2 || 0) + '</div><div class="s2-d-stat-label">Median 24h</div></div>' +
        '<div class="s2-d-stat"><div class="s2-d-stat-num">' + fmtCoinsFull(q.q1 || 0) + '</div><div class="s2-d-stat-label">25th %ile</div></div>' +
        '<div class="s2-d-stat"><div class="s2-d-stat-num">' + fmtCoinsFull(q.q3 || 0) + '</div><div class="s2-d-stat-label">75th %ile</div></div>' +
        '<div class="s2-d-stat"><div class="s2-d-stat-num">' + (v.perHour ? v.perHour.toFixed(1) : '—') + '</div><div class="s2-d-stat-label">Sales/hr</div></div>' +
      '</div>';
    function rowsFor(arr, emptyText, timeKey) {
      return arr && arr.length
        ? arr.map(function (x) {
            return '<div class="s2-d-row"><span class="s2-d-row-price">' + fmtCoinsFull(x.price) + '</span><span class="s2-d-row-time">' + fmtAgo(x[timeKey] || x.timestamp || x.seenAt) + '</span></div>';
          }).join('')
        : '<div class="s2-d-empty">' + emptyText + '</div>';
    }
    function platformDetail(platform, label) {
      var by = d.marketByPlatform || {};
      var m = by[platform] || {};
      var sales = (m.sales || []).slice(0, 20);
      var listings = (m.listings || []).slice(0, 10);
      return '<div class="s2-d-section"><div class="s2-d-section-title">' + label + ' Recent sales (48h)</div><div class="s2-d-list">' +
        rowsFor(sales, 'No recent ' + label + ' sales tracked.', 'soldAt') +
        '</div></div>' +
        '<div class="s2-d-section"><div class="s2-d-section-title">' + label + ' Listing history</div><div class="s2-d-list">' +
        rowsFor(listings, 'No ' + label + ' listing history tracked.', 'timestamp') +
        '</div></div>';
    }
    var marketSections = d.marketByPlatform
      ? platformDetail('ps5', 'PS5') + platformDetail('xbox', 'Xbox') + platformDetail('pc', 'PC')
      : '<div class="s2-d-section"><div class="s2-d-section-title">Recent sales (48h)</div><div class="s2-d-list">' +
        rowsFor((d.sales || []).slice(0, 20), 'No recent sales tracked.', 'soldAt') +
        '</div></div>' +
        '<div class="s2-d-section"><div class="s2-d-section-title">Listing history</div><div class="s2-d-list">' +
        rowsFor((d.listings || []).slice(0, 10), 'No listing history tracked.', 'timestamp') +
        '</div></div>';
    c.innerHTML =
      '<div class="s2-d-head">' + img +
        '<div><div class="s2-d-title">' + esc(snipe.playerName) + ' <span class="s2-snipe-ovr">' + snipe.ovr + ' OVR</span></div>' +
        '<div class="s2-d-sub">' + esc(snipe.position) + ' &middot; ' + esc(snipe.program) + '</div></div>' +
      '</div>' +
      statsGrid +
      '<div class="s2-d-section"><button class="s2-btn" id="s2DSetAlert" type="button" style="width:100%">&#128276; Set price alert</button></div>' +
      marketSections;
    // Wire the alert button — opens the shared alert modal pre-filled with this card's context.
    var alertBtn = document.getElementById('s2DSetAlert');
    if (alertBtn) alertBtn.addEventListener('click', function () {
      if (window.openAlertModal) window.openAlertModal({
        playerName: snipe.playerName, ovr: snipe.ovr, program: snipe.program,
      });
    });
  }

  function renderAuth(state) {
    var isUnlimited = state.capSec >= 3600;
    var stateClass = 's2-state-' + state.state;
    var stateLabel = state.state === 'running' ? 'RUNNING'
      : state.state === 'paused' ? 'PAUSED' : 'READY';

    var actions = '';
    if (state.remainingSec <= 0) {
      actions = '<div class="s2-actions"><button class="s2-btn" disabled>OUT OF BUDGET</button></div>'
        + '<p style="margin-top:14px;font-size:12px;color:#888">Resets at ' + esc(state.resetsAtUtc) + '</p>';
    } else if (state.state === 'running') {
      // Founding members: no PAUSE button — they auto-resume on next render
      // anyway, so a "click PAUSE, nothing changes" UX is just confusing.
      actions = isUnlimited
        ? ''
        : '<div class="s2-actions"><button class="s2-btn" id="btnPause">PAUSE</button></div>';
    } else {
      actions = '<div class="s2-actions"><button class="s2-btn" id="btnStart">'
        + (state.state === 'paused' ? 'RESUME' : 'START') + '</button></div>';
    }

    // Nudge users approaching their cap (and paused users with banked time)
    // toward the same upgrade modal — second-best conversion moment in the funnel.
    // Founding/paid users (capSec > 1 hour) don't need this. Skip out-of-budget
    // too — depletion CTA handles that one.
    var showNudge = (state.state === 'running' || state.state === 'paused')
      && state.remainingSec > 0 && state.capSec < 3600;
    var urgent = state.remainingSec <= 60;
    var nudge = showNudge
      ? '<a href="#" class="s2-nudge ' + (urgent ? 's2-nudge-urgent' : '') + '" id="s2NudgeBtn">Upgrade for unlimited &rarr;</a>'
      : '';

    var tierPill = isUnlimited
      ? '<span class="s2-tier-pill s2-tier-founding">FOUNDING</span>'
      : '<span class="s2-tier-pill s2-tier-free">FREE</span>';

    var budgetVal = isUnlimited
      ? '<div class="s2-card-bar-budget s2-budget-unlimited">UNLIMITED</div>'
      : '<div class="s2-card-bar-budget">' + fmtSec(state.remainingSec) + '</div>';

    var budgetBlock =
      '<div>' +
        '<div class="s2-card-label">Budget</div>' +
        budgetVal +
      '</div>';

    var stateBlock =
      '<div>' +
        '<div class="s2-card-label">Status</div>' +
        '<span class="s2-state-badge ' + stateClass + '">' + stateLabel + '</span>' +
      '</div>';

    var tierBlock =
      '<div>' +
        '<div class="s2-card-label">Tier</div>' +
        tierPill +
      '</div>';

    var footerLinks = (isUnlimited ? '<a href="#" id="btnPortal">Manage subscription</a> &middot; ' : '')
      + '<a href="#" id="btnLogout">Log out</a>';

    // Horizontal bar: state · budget · tier · [spacer] · action button · upgrade nudge · footer
    card.innerHTML =
      '<div class="s2-card-bar">' +
        stateBlock +
        budgetBlock +
        tierBlock +
        '<div class="s2-card-bar-spacer"></div>' +
        actions +
        (nudge || '') +
        '<div class="s2-card-bar-footer">' + footerLinks + '</div>' +
      '</div>';

    var btnStart = document.getElementById('btnStart');
    var btnPause = document.getElementById('btnPause');
    var btnLogout = document.getElementById('btnLogout');
    var btnPortal = document.getElementById('btnPortal');
    var nudgeBtn = document.getElementById('s2NudgeBtn');
    if (btnStart) btnStart.addEventListener('click', onStart);
    if (btnPause) btnPause.addEventListener('click', onPause);
    if (btnLogout) btnLogout.addEventListener('click', onLogout);
    if (btnPortal) btnPortal.addEventListener('click', onPortalClick);
    if (nudgeBtn) nudgeBtn.addEventListener('click', function (e) { e.preventDefault(); onUpgradeClick('running_nudge'); });
  }

  async function fetchState() {
    var r = await fetch('/api/snipes/session/state');
    if (r.status === 401) return null;
    var data = await r.json();
    // First auth observation this page load — identify in PostHog so the
    // anon → identified bridge happens, and capture the funnel event once.
    if (!authIdentified) {
      authIdentified = true;
      // Pull email via /api/me. Fire-and-forget; failure here just means we
      // skip identification but the funnel event still fires.
      fetch('/api/me').then(function (rr) { return rr.ok ? rr.json() : null; })
        .then(function (me) {
          if (me && me.user && me.user.email && typeof window.posthog !== "undefined") {
            try { window.posthog.identify(me.user.email, { email: me.user.email, tier: me.user.tier }); } catch (e) { }
          }
          cap("s2_auth_completed", { tier: (me && me.user && me.user.tier) || null });
        }).catch(function () { cap("s2_auth_completed", {}); });
    }
    return data;
  }

  async function render() {
    currentState = await fetchState();
    if (!currentState) { renderAnon(); stopDisplayTicker(); stopFeed(); hideFeed(); return; }
    // Teaser stats stay live for authenticated users too — they want to see
    // "X live now · Y in past hour" updating regardless of scanner state.
    startTeaser();
    // Founding members auto-start from any non-running state. The "explicit
    // START" rule exists to protect free users from burning budget — irrelevant
    // for unlimited. Means visibility-pause and refresh-while-paused both
    // resume seamlessly. PAUSE button is also hidden for them (see renderAuth).
    if (currentState.state !== 'running' && currentState.capSec >= 3600) {
      return onStart().catch(function () { renderAuth(currentState); });
    }
    renderAuth(currentState);
    // Make filters + heatmap available in idle/paused states too — not just
    // while scanning. Both functions are idempotent (own inited flags) so
    // calling here on every render is fine.
    var grid = document.getElementById('s2Grid');
    if (grid) grid.hidden = false;
    await initFilters();
    loadHeatmapOnce();
    localRemainingSec = currentState.remainingSec;
    if (currentState.state === 'running') {
      startHeartbeat(); startDisplayTicker(); startFeed();
    } else {
      stopHeartbeat(); stopDisplayTicker(); stopFeed();
      if (currentState.remainingSec <= 0) {
        renderDepletionCta(currentState);
      } else {
        showFeedPlaceholder(currentState.state === 'paused'
          ? 'Paused. Press RESUME to see live snipes.'
          : 'Press START to see live snipes.');
      }
    }
  }

  async function onStart() {
    var r = await fetch('/api/snipes/session/start', { method: 'POST' });
    if (r.status === 402) { alert('No budget left today. Comes back at UTC midnight.'); await render(); return; }
    if (r.status === 409) { alert('Already running in another tab.'); await render(); return; }
    currentState = await r.json();
    renderAuth(currentState);
    localRemainingSec = currentState.remainingSec;
    startHeartbeat();
    startDisplayTicker();
    startFeed();
    cap("s2_scanner_started", { remaining_sec: currentState.remainingSec, cap_sec: currentState.capSec });
  }

  async function onPause() {
    await fetch('/api/snipes/session/pause', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId: currentState.sessionId }),
    });
    cap("s2_scanner_paused", { reason: "user", remaining_sec: currentState.remainingSec });
    await render();
  }

  async function onLogout(e) {
    e.preventDefault();
    await fetch('/auth/logout', { method: 'POST' });
    await render();
  }

  async function onPortalClick(e) {
    e.preventDefault();
    cap("s2_portal_clicked", {});
    try {
      var r = await fetch('/api/billing/portal', { method: 'POST' });
      if (!r.ok) { alert('Could not open billing portal. Try again in a moment.'); return; }
      var data = await r.json();
      if (data && data.url) window.location.href = data.url;
    } catch (_) { alert('Could not open billing portal. Try again in a moment.'); }
  }

  function startHeartbeat() {
    if (heartbeatTimer) return;
    heartbeatTimer = setInterval(async function () {
      var r = await fetch('/api/snipes/session/heartbeat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: currentState.sessionId }),
      });
      if (r.status === 410) { await render(); return; } // server pre-empted us
      var nextState = await r.json();
      var stateChanged = nextState.state !== currentState.state;
      currentState = nextState;
      // Reconcile the client-side counter to server truth (no jump if they
      // already agreed; small correction if the client drifted).
      localRemainingSec = nextState.remainingSec;
      if (stateChanged) {
        renderAuth(currentState);
        if (currentState.state !== 'running') {
          // Server auto-paused mid-heartbeat — almost always budget depletion.
          var depleted = currentState.remainingSec <= 0;
          cap("s2_scanner_paused", { reason: depleted ? "depleted" : "server", remaining_sec: currentState.remainingSec });
          if (depleted && !depletionCaptured) {
            depletionCaptured = true;
            cap("s2_budget_depleted", { cap_sec: currentState.capSec });
          }
          stopHeartbeat(); stopDisplayTicker(); stopFeed();
          if (depleted) renderDepletionCta(currentState);
          else showFeedPlaceholder('Paused. Press RESUME to see live snipes.');
        }
      } else {
        updateBudgetText();
      }
    }, 5000);
  }

  function stopHeartbeat() {
    if (heartbeatTimer) { clearInterval(heartbeatTimer); heartbeatTimer = null; }
  }

  // Refresh only the budget number — used by the 1s display ticker so the
  // whole card doesn't re-render every second (avoids button flicker).
  // Founding members ("UNLIMITED") are exempt: their display text never ticks.
  function updateBudgetText() {
    if (currentState && currentState.capSec >= 3600) return;
    var el = card.querySelector('.s2-card-bar-budget') || card.querySelector('.s2-budget');
    if (el) el.textContent = fmtSec(localRemainingSec);
  }

  function startDisplayTicker() {
    if (displayTimer) return;
    displayTimer = setInterval(async function () {
      localRemainingSec = Math.max(0, localRemainingSec - 1);
      updateBudgetText();
      // Immediate depletion — when the displayed countdown hits zero, fire a
      // heartbeat right away instead of waiting up to 5s for the next one.
      // The server bills the unbilled time, flips to paused, and we surface
      // the paywall instantly.
      if (localRemainingSec === 0 && currentState && currentState.sessionId && currentState.state === 'running') {
        stopDisplayTicker();
        try {
          var r = await fetch('/api/snipes/session/heartbeat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sessionId: currentState.sessionId }),
          });
          if (r.ok) {
            currentState = await r.json();
            if (currentState.remainingSec <= 0) {
              stopHeartbeat(); stopFeed();
              if (!depletionCaptured) {
                depletionCaptured = true;
                cap("s2_budget_depleted", { cap_sec: currentState.capSec });
              }
              renderAuth(currentState);
              renderDepletionCta(currentState);
            }
          }
        } catch (_) { /* next 5s heartbeat will catch up */ }
      }
    }, 1000);
  }

  function stopDisplayTicker() {
    if (displayTimer) { clearInterval(displayTimer); displayTimer = null; }
  }

  // ─── Auto-pause when tab loses visibility (SP8) ────────────────────────────
  // Per docs/snipe-access-flow.md: pause on hide; do NOT auto-resume on return
  // (user must click RESUME). The server sweep is the backstop if this misses.
  function sendBackgroundPause() {
    if (!currentState || currentState.state !== 'running' || !currentState.sessionId) return;
    // keepalive lets the request continue even if the page is being torn down.
    fetch('/api/snipes/session/pause', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId: currentState.sessionId }),
      keepalive: true,
    }).catch(function () { /* sweep will handle it */ });
    cap("s2_scanner_paused", { reason: "visibility", remaining_sec: currentState.remainingSec });
    stopHeartbeat();
    stopDisplayTicker();
    stopFeed();
  }

  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') sendBackgroundPause();
    else if (document.visibilityState === 'visible') render();
  });

  // Tab close / browser nav / mobile background — visibilitychange usually
  // fires first, but pagehide is the guaranteed signal for full unload.
  window.addEventListener('pagehide', sendBackgroundPause);

  // Modal close handlers — X button, backdrop click, ESC key (both modals).
  document.addEventListener('click', function (e) {
    if (e.target && e.target.id === 's2ModalClose') hideModal();
    if (e.target && e.target.id === 's2ModalBackdrop') hideModal();
    if (e.target && e.target.id === 's2DetailClose') hideDetailModal();
    if (e.target && e.target.id === 's2DetailBackdrop') hideDetailModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var checkout = document.getElementById('s2ModalBackdrop');
    var detail = document.getElementById('s2DetailBackdrop');
    if (detail && detail.classList.contains('s2-visible')) hideDetailModal();
    else if (checkout && checkout.classList.contains('s2-visible')) hideModal();
  });

  // Snipe card click → market detail modal. Delegation so it works through
  // re-renders. Walks up to the .s2-snipe with data-idx.
  document.addEventListener('click', function (e) {
    var t = e.target;
    while (t && t !== document.body) {
      if (t.classList && t.classList.contains('s2-snipe') && t.hasAttribute('data-idx')) {
        var idx = parseInt(t.getAttribute('data-idx'), 10);
        var snipe = lastSnipes[idx];
        if (snipe) openDetailFor(snipe);
        return;
      }
      t = t.parentNode;
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
