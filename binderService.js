import { s as x, r as M, E as p, q as S, p as w, v as P } from "./index.js";
const m = "Unable to update your coin balance. Please try again. If it continues, contact support@mutdashboard.com or @mutdashboard on X.";
const E = "Your EA connection needs to be refreshed. Please re-link your EA account and try again.";
function y() {
  return new Promise(r => {
    if (typeof requestAnimationFrame == "function") {
      requestAnimationFrame(() => r());
      return;
    }
    setTimeout(r, 0);
  });
}
function k() {
  return y().then(() => y());
}
function g() {
  return "https://api.mutdashboard.com";
}
async function B(r, o, n) {
  const e = Array.from(new Set(r.map(t => String(t.cardId ?? "").trim()).filter(t => !!t)));
  if (e.length === 0) {
    return new Map();
  }
  const i = new URLSearchParams();
  for (const t of e) {
    i.append("card_ids", t);
  }
  i.set("market", o);
  i.set("window", String(n));
  try {
    const t = await fetch(`${g()}/sales/enrichment/bulk?${i.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (!t.ok) {
      console.warn("[BinderService] Extension binder enrichment failed:", t.status);
      return new Map();
    }
    const c = await t.json();
    const d = new Map();
    for (const a of c.items ?? []) {
      if (a.card_id) {
        d.set(a.card_id, a);
      }
    }
    return d;
  } catch (t) {
    console.warn("[BinderService] Extension binder enrichment error:", t);
    return new Map();
  }
}
function $(r, o) {
  return r.map(n => {
    const e = o.get(n.cardId);
    if (e) {
      return {
        ...n,
        q3: e.q3 ?? n.q3,
        marketValue: e.marketValue ?? n.marketValue,
        vol_24h: e.vol_24h ?? n.vol_24h,
        avg: e.avg ?? n.avg,
        count: e.count ?? n.count,
        salePricesJson: e.salePricesJson ?? n.salePricesJson
      };
    } else {
      return n;
    }
  });
}
async function T() {
  if (x()) {
    try {
      const e = await M();
      p.actionResult("getWallet", "success", {
        coins: e.coins,
        training: e.training
      });
      return e;
    } catch (e) {
      console.error("[BinderService] Extension wallet fetch error:", e);
      p.actionResult("getWallet", "error", {
        error: e instanceof Error ? e.message.slice(0, 200) : "Unknown extension wallet error"
      });
      return {
        coins: 0,
        training: 0
      };
    }
  }
  const r = g();
  const o = S();
  const n = `${r}${o ? "/user/wallet" : "/api/wallet"}`;
  try {
    const e = await fetch(n, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (!e.ok) {
      console.warn("[BinderService] Wallet fetch failed:", e.status);
      const t = await e.json().catch(() => ({}));
      const c = JSON.stringify(t).toLowerCase();
      throw c.includes("re-link") || c.includes("link your ea account") ? new Error(E) : new Error(m);
    }
    const i = await e.json();
    if (o) {
      return i?.data ?? {
        coins: 0,
        training: 0
      };
    } else {
      return i;
    }
  } catch (e) {
    console.error("[BinderService] Wallet fetch error:", e);
    throw e instanceof Error && [E, m].includes(e.message) ? e : new Error(m);
  }
}
async function _(r = 0, o = 50, n = "xbox", e = 15) {
  if (x()) {
    try {
      const s = await P(r, o);
      const f = await B(s.items, n, e);
      const h = $(s.items, f);
      p.actionResult("getBinderPage", "success", {
        page: r,
        limit: o,
        item_count: h.length,
        has_more: s.hasMore,
        market: n,
        window: e
      });
      return {
        items: h,
        offset: s.offset,
        hasMore: s.hasMore,
        wallet: r === 0 ? await T() : undefined,
        fetchedAt: new Date().toISOString()
      };
    } catch (s) {
      p.actionResult("getBinderPage", "error", {
        page: r,
        limit: o,
        market: n,
        window: e,
        error: s instanceof Error ? s.message.slice(0, 200) : "Unknown extension binder error"
      });
      throw s;
    }
  }
  const i = g();
  const t = S();
  const c = t ? `page=${r}&page_size=${o}&market=${n}&window=${e}` : `page=${r}&limit=${o}&market=${n}&window=${e}`;
  const d = `${i}${t ? "/user/binder" : "/api/binder"}?${c}`;
  const a = await fetch(d, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include"
  });
  if (!a.ok) {
    if (t) {
      throw new Error("Unable to load your binder. Please try again. If it continues, contact support@mutdashboard.com or @mutdashboard on X.");
    }
    const s = await a.text();
    throw new Error(`Binder fetch failed (HTTP ${a.status}): ${s.slice(0, 200)}`);
  }
  const u = await a.json();
  if (t) {
    return {
      items: u.items ?? [],
      offset: u.offset ?? r * o,
      hasMore: u.hasMore ?? false,
      wallet: u.wallet,
      fetchedAt: new Date().toISOString()
    };
  } else {
    return u;
  }
}
const b = 3;
async function v(r) {
  const {
    onProgress: o,
    limit: n = 50,
    market: e = "xbox",
    window: i = 15
  } = r ?? {};
  const t = [];
  let c = {
    coins: 0,
    training: 0
  };
  const d = typeof performance !== "undefined" ? performance.now() : 0;
  const a = await _(0, n, e, i);
  if (typeof performance !== "undefined") {
    w("binder_api_first_page_ms", {
      ms: Math.round((performance.now() - d) * 100) / 100,
      itemCount: a.items.length
    });
  }
  t.push(...a.items);
  if (a.wallet) {
    c = a.wallet;
  }
  o?.(t.length);
  if (!a.hasMore || a.items.length < n) {
    if (typeof performance !== "undefined") {
      w("binder_api_fetch_complete", {
        totalMs: Math.round((performance.now() - d) * 100) / 100,
        totalCards: t.length,
        pages: 1
      });
    }
    return {
      cards: t,
      wallet: c
    };
  }
  let u = 1;
  let s = 1;
  while (true) {
    const f = [];
    for (let l = 0; l < b; l++) {
      f.push(u + l);
    }
    const h = await Promise.all(f.map(l => _(l, n, e, i)));
    for (const l of h) {
      s++;
      t.push(...l.items);
      o?.(t.length);
      if (!l.hasMore || l.items.length < n) {
        if (typeof performance !== "undefined") {
          w("binder_api_fetch_complete", {
            totalMs: Math.round((performance.now() - d) * 100) / 100,
            totalCards: t.length,
            pages: s
          });
        }
        return {
          cards: t,
          wallet: c
        };
      }
    }
    u += b;
  }
}
export { v as a, k as b, T as f, y as w };