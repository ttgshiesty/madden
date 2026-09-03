/**
 * Shared binder client used by /binder, /cards, and /build.
 *
 * Single source of truth for ownership state. For logged-in users the server
 * owns the data; localStorage is kept as a synchronous read-cache so the
 * existing UI code (which reads localStorage directly) keeps working without
 * an async refactor. For anonymous users localStorage is still the truth.
 *
 * Exposes:
 *   window.binderClient.ready   — Promise resolved when bootstrap finishes
 *   window.binderClient.add(id) — fire-and-forget add (writes localStorage + server)
 *   window.binderClient.remove(id) — same, but remove
 *   window.binderClient.isAuthed() — boolean once ready
 *
 * Existing code can still read localStorage['mut_owned_cards_v1'] for
 * synchronous "is this card owned?" checks.
 */
(function () {
  if (window.binderClient) return;
  var KEY = 'mut_owned_cards_v1';
  var authed = false;

  function readLocal() {
    try { return JSON.parse(localStorage.getItem(KEY) || '{}'); }
    catch (e) { return {}; }
  }
  function writeLocal(obj) {
    try { localStorage.setItem(KEY, JSON.stringify(obj)); } catch (e) {}
  }
  function localIds() {
    var obj = readLocal();
    return Object.keys(obj).filter(function (k) { return obj[k] === true; }).map(Number);
  }

  async function bootstrap() {
    try {
      var meR = await fetch('/api/me');
      if (meR.status !== 200) return; // anon — stay on localStorage
      var me = await meR.json();
      if (!me.authenticated) return;
      authed = true;

      // First-time migration: push localStorage cards to server if any exist.
      // Idempotent — server uses INSERT OR IGNORE so re-sync is harmless.
      var local = localIds();
      if (local.length) {
        await fetch('/api/binder/sync', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ids: local }),
        });
      }
      // Pull server state and overwrite localStorage so sync reads see truth.
      var itemsR = await fetch('/api/binder/items');
      if (itemsR.ok) {
        var data = await itemsR.json();
        var obj = {};
        (data.ids || []).forEach(function (id) { obj[id] = true; });
        writeLocal(obj);
      }
    } catch (e) { /* fall back to localStorage as-is */ }
  }

  function add(id) {
    var obj = readLocal();
    obj[id] = true;
    writeLocal(obj);
    if (authed) {
      fetch('/api/binder/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cardId: Number(id) }),
      }).catch(function () { /* localStorage already updated; tolerable lag */ });
    }
  }
  function remove(id) {
    var obj = readLocal();
    delete obj[id];
    writeLocal(obj);
    if (authed) {
      fetch('/api/binder/remove', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cardId: Number(id) }),
      }).catch(function () { /* see above */ });
    }
  }

  window.binderClient = {
    ready: bootstrap(),
    add: add,
    remove: remove,
    isAuthed: function () { return authed; },
  };
})();
