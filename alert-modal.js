/**
 * Shared price-alert modal. Drop this script into any page where users
 * see cards (/snipes, /cards, home page, etc.) and call:
 *
 *   window.openAlertModal({ playerName, ovr, program });
 *
 * The modal handles its own DOM, CSS, validation, API call, and the
 * "Discord not linked" gate. Posts to /api/alerts on submit.
 */
(function () {
  if (window.__alertModalLoaded) return;
  window.__alertModalLoaded = true;

  // ─── Styles ────────────────────────────────────────────────────────────────
  var css = '' +
    '.amx-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.78);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:3000;opacity:0;pointer-events:none;transition:opacity 200ms ease}' +
    '.amx-backdrop.amx-visible{opacity:1;pointer-events:auto}' +
    '.amx-modal{background:#0c0f0c;border:1px solid #1a3a1a;border-radius:12px;padding:24px;width:min(420px,92vw);position:relative;transform:scale(.96);transition:transform 200ms cubic-bezier(.16,1,.3,1);box-shadow:0 16px 48px rgba(0,0,0,.6)}' +
    '.amx-backdrop.amx-visible .amx-modal{transform:scale(1)}' +
    '.amx-close{position:absolute;top:10px;right:12px;background:none;border:none;color:#888;font-size:22px;cursor:pointer;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center}' +
    '.amx-close:hover{color:#fff;background:rgba(255,255,255,.08)}' +
    '.amx-title{color:#fff;font-size:18px;font-weight:700;margin:0 0 4px}' +
    '.amx-sub{color:#888;font-size:12px;margin-bottom:18px}' +
    '.amx-row{margin-bottom:14px}' +
    '.amx-label{display:block;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;font-weight:700}' +
    '.amx-input{width:100%;background:#0a0d0a;border:1px solid #222;color:#fff;padding:9px 12px;border-radius:6px;font-size:14px;box-sizing:border-box}' +
    '.amx-input:focus{outline:none;border-color:#00ff00}' +
    '.amx-btn{width:100%;padding:11px;background:#003300;border:1px solid #00ff00;color:#00ff00;border-radius:8px;font-weight:700;font-size:14px;cursor:pointer;letter-spacing:.5px}' +
    '.amx-btn:hover{background:#004400}' +
    '.amx-btn[disabled]{opacity:.4;cursor:wait}' +
    '.amx-err{color:#ff6b6b;font-size:12px;margin-top:8px;text-align:center;min-height:16px}' +
    '.amx-link-discord{display:flex;flex-direction:column;align-items:center;gap:14px;padding:8px 0 4px;text-align:center}' +
    '.amx-link-discord p{color:#aaa;font-size:13px;line-height:1.55;margin:0}' +
    '.amx-discord-btn{display:inline-flex;align-items:center;gap:10px;padding:10px 22px;background:#5865F2;border:none;color:#fff;border-radius:8px;font-weight:600;font-size:13px;cursor:pointer;text-decoration:none}' +
    '.amx-discord-btn:hover{background:#4752C4}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // ─── DOM ───────────────────────────────────────────────────────────────────
  var backdrop = document.createElement('div');
  backdrop.className = 'amx-backdrop';
  backdrop.innerHTML =
    '<div class="amx-modal" role="dialog" aria-modal="true">' +
      '<button class="amx-close" type="button" aria-label="Close">&times;</button>' +
      '<div id="amx-body"></div>' +
    '</div>';
  document.body.appendChild(backdrop);

  var current = null;  // current player context

  function close() {
    backdrop.classList.remove('amx-visible');
    document.body.style.overflow = '';
  }
  backdrop.addEventListener('click', function (e) {
    if (e.target === backdrop || e.target.classList.contains('amx-close')) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && backdrop.classList.contains('amx-visible')) close();
  });

  function showForm() {
    document.getElementById('amx-body').innerHTML =
      '<div class="amx-title">Set price alert</div>' +
      '<div class="amx-sub">' + (current.playerName || '') + (current.ovr ? ' &middot; ' + current.ovr + ' OVR' : '') + (current.program ? ' &middot; ' + current.program : '') + '</div>' +
      '<div class="amx-row">' +
        '<label class="amx-label" for="amx-price">Notify me when price drops below</label>' +
        '<input id="amx-price" class="amx-input" type="number" min="0" step="1000" placeholder="e.g. 500000">' +
      '</div>' +
      '<button class="amx-btn" id="amx-submit" type="button">Create alert</button>' +
      '<div class="amx-err" id="amx-err"></div>';
    var priceEl = document.getElementById('amx-price');
    priceEl.focus();
    document.getElementById('amx-submit').addEventListener('click', submit);
    priceEl.addEventListener('keydown', function (e) { if (e.key === 'Enter') submit(); });
  }

  function showLinkDiscord() {
    document.getElementById('amx-body').innerHTML =
      '<div class="amx-title">Link Discord first</div>' +
      '<div class="amx-link-discord">' +
        '<p>Alerts are delivered via Discord DM from MUT. Link your Discord once and you\'re done.</p>' +
        '<a class="amx-discord-btn" href="/auth/discord">Link Discord</a>' +
      '</div>';
  }

  async function submit() {
    var priceEl = document.getElementById('amx-price');
    var errEl = document.getElementById('amx-err');
    var btn = document.getElementById('amx-submit');
    var targetPrice = parseInt(priceEl.value, 10);
    if (!targetPrice || targetPrice <= 0) { errEl.textContent = 'Enter a target price'; return; }
    btn.disabled = true; btn.textContent = 'Creating…'; errEl.textContent = '';
    try {
      var r = await fetch('/api/alerts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          playerName: current.playerName,
          targetPrice: targetPrice,
          minOVR: current.ovr || undefined,
          program: current.program || undefined,
        }),
      });
      if (r.status === 412) { showLinkDiscord(); return; }
      if (r.status === 401) { errEl.textContent = 'Sign in first.'; btn.disabled = false; btn.textContent = 'Create alert'; return; }
      var data = await r.json();
      if (!r.ok) {
        // Cap hit is the high-intent upgrade signal — track it separately so
        // we can A/B test the modal copy that follows.
        if (data.capReached) {
          try { if (window.posthog) window.posthog.capture('alert_cap_hit', { tier: data.tier || null, max: data.max || null }); } catch (_) {}
        }
        errEl.textContent = data.error || 'Could not create alert.'; btn.disabled = false; btn.textContent = 'Create alert'; return;
      }
      try { if (window.posthog) window.posthog.capture('alert_created', { player: current.playerName || null, target_price: targetPrice }); } catch (_) {}
      document.getElementById('amx-body').innerHTML =
        '<div class="amx-title">Alert set</div>' +
        '<div class="amx-sub">MUT will DM you when ' + (current.playerName || 'this player') + ' lists below ' + targetPrice.toLocaleString() + '. Alerts expire in 8 hours.</div>' +
        '<button class="amx-btn" type="button" onclick="document.querySelector(\'.amx-backdrop\').classList.remove(\'amx-visible\');document.body.style.overflow=\'\'">Done</button>';
    } catch (e) {
      errEl.textContent = 'Network error. Try again.';
      btn.disabled = false; btn.textContent = 'Create alert';
    }
  }

  function relTime(iso) {
    var ms = new Date(iso).getTime() - Date.now();
    if (ms <= 0) return 'expired';
    var min = Math.floor(ms / 60000);
    if (min < 60) return 'in ' + min + 'm';
    return 'in ' + Math.floor(min / 60) + 'h ' + (min % 60) + 'm';
  }

  function showCapReached(have, max, tier) {
    var isFree = tier !== 'founding';
    document.getElementById('amx-body').innerHTML =
      '<div class="amx-title">You\'re at the alert cap</div>' +
      '<div class="amx-sub">' + have + ' of ' + max + ' active alerts.</div>' +
      '<a class="amx-btn" href="/alerts" style="display:block;text-align:center;text-decoration:none;margin-bottom:8px">Manage my alerts</a>' +
      (isFree
        ? '<a class="amx-btn" href="/pricing" style="display:block;text-align:center;text-decoration:none;background:#332a00;border-color:#d4b97a;color:#d4b97a">Upgrade for 5 alerts</a>'
        : '');
  }

  function showExistingAlert(alert) {
    document.getElementById('amx-body').innerHTML =
      '<div class="amx-title">You have an active alert</div>' +
      '<div class="amx-sub">' + (alert.playerName || '') + ' &middot; ' + (alert.minOVR || 0) + '+ OVR &middot; target ' + (alert.targetPrice || 0).toLocaleString() + '</div>' +
      '<div style="text-align:center;color:#888;font-size:11px;margin-bottom:14px">Expires ' + relTime(alert.expiresAt) + '</div>' +
      '<button class="amx-btn" id="amx-cancel" style="background:#332a00;border-color:#d4b97a;color:#d4b97a" type="button">Cancel this alert</button>' +
      '<div class="amx-err" id="amx-err"></div>';
    document.getElementById('amx-cancel').addEventListener('click', async function () {
      var btn = document.getElementById('amx-cancel');
      var errEl = document.getElementById('amx-err');
      btn.disabled = true; btn.textContent = 'Cancelling…'; errEl.textContent = '';
      try {
        var r = await fetch('/api/alerts/' + alert.id, { method: 'DELETE' });
        if (!r.ok) { errEl.textContent = 'Could not cancel. Try again.'; btn.disabled = false; btn.textContent = 'Cancel this alert'; return; }
        // After successful cancel, flip into the create-form so the user can
        // immediately set a new one for the card they originally clicked.
        showForm();
      } catch (e) {
        errEl.textContent = 'Network error. Try again.';
        btn.disabled = false; btn.textContent = 'Cancel this alert';
      }
    });
  }

  window.openAlertModal = function (ctx) {
    current = ctx || {};
    backdrop.classList.add('amx-visible');
    document.body.style.overflow = 'hidden';
    // Anonymous → sign-in gate. Logged in but no Discord linked → link gate.
    // Logged in + Discord linked + already has an active alert → show it
    // with Cancel button (since cap is 1, you can't set another otherwise).
    // Otherwise → show the create form.
    fetch('/api/me').then(async function (r) {
      if (r.status === 401) {
        document.getElementById('amx-body').innerHTML =
          '<div class="amx-title">Sign in first</div>' +
          '<div class="amx-link-discord">' +
            '<p>Sign in with Google to create alerts. Then link Discord so MUT can DM you.</p>' +
            '<a class="amx-discord-btn" style="background:#fff;color:#1f1f1f" href="/auth/google">Continue with Google</a>' +
          '</div>';
        return;
      }
      // Probe /api/alerts — handles the discord-not-linked 412 AND tells us
      // the user's tier-aware cap. Three terminal states:
      //   1. Discord not linked → link gate
      //   2. At cap → show "you're at the cap" with /alerts + upgrade CTA
      //   3. Under cap → create form
      try {
        var ar = await fetch('/api/alerts');
        if (ar.status === 412) { showLinkDiscord(); return; }
        if (ar.ok) {
          var data = await ar.json();
          var existing = (data && data.alerts) || [];
          var max = (data && data.maxAlerts) || 1;
          if (existing.length >= max) {
            // Free-tier (cap=1) keeps the legacy inline-cancel UX since you
            // only ever have one to manage. Paid tiers see a list pointer.
            if (existing.length === 1) { showExistingAlert(existing[0]); }
            else { showCapReached(existing.length, max, data.tier); }
            return;
          }
        }
      } catch (_) { /* fall through to form */ }
      showForm();
    }).catch(showForm);
  };
})();
