import { c as a, w as N } from "./icons.js";
import { f as p, a as F, w as T } from "./binder-service.js";
import { p as l } from "./index.js";
const u = {
  tier97Plus: 0,
  tier94to96: 0,
  tier90to93: 0,
  elite: 0
};
const f = 120;
const x = () => {
  const [c, i] = a([]);
  const [n, d] = a("idle");
  const [B, m] = a(null);
  const [E, h] = a(0);
  const [I, w] = a({
    coins: 0,
    training: 0
  });
  const [R, _] = a(false);
  const [W, y] = a(null);
  const [b, g] = a(u);
  const L = N(() => new Map(c().map(e => [e.cardId, e])));
  const M = e => ({
    id: e.cardId,
    cardId: e.cardId,
    playerName: e.playerName,
    position: e.position,
    overallRating: e.overallRating,
    programName: e.program,
    headshotUrl: "",
    currentMarketPrice: e.q3 || e.marketValue || 0,
    quicksellValue: Math.floor(e.overallRating * 50),
    isDraggable: true,
    q3: e.q3,
    vol_24h: e.vol_24h,
    avg: e.avg,
    count: e.count,
    salePricesJson: e.salePricesJson
  });
  const S = e => {
    const o = {
      ...u
    };
    for (const r of e) {
      const t = r.overallRating;
      if (t >= 97) {
        o.tier97Plus++;
      }
      if (t >= 94 && t < 97) {
        o.tier94to96++;
      }
      if (t >= 90 && t < 94) {
        o.tier90to93++;
      }
      if (t >= 95) {
        o.elite++;
      }
    }
    return o;
  };
  const P = async e => {
    const o = [];
    for (let r = 0; r < e.length; r += f) {
      const t = e.slice(r, r + f);
      for (const s of t) {
        o.push(M(s));
      }
      if (r + f < e.length) {
        await T();
      }
    }
    return o;
  };
  const v = async (e = "xbox", o = 15) => {
    if (n() === "loading") {
      console.log("[BinderStore] Already loading, skipping duplicate call");
      return;
    }
    l("binder_load_start", {
      market: e,
      window: o
    });
    d("loading");
    m(null);
    h(0);
    try {
      const r = await F({
        onProgress: s => h(s),
        market: e,
        window: o
      });
      w(r.wallet);
      console.log("[BinderStore] Wallet:", r.wallet);
      l("binder_load_data_received", {
        cards: r.cards.length,
        coins: r.wallet.coins
      });
      const t = await P(r.cards);
      t.sort((s, k) => k.overallRating - s.overallRating);
      i(t);
      g(S(t));
      d("loaded");
      console.log(`[BinderStore] Loaded ${t.length} cards`);
      l("binder_load_complete", {
        cards: t.length
      });
    } catch (r) {
      const t = r instanceof Error ? r.message : "Failed to load binder";
      m(t);
      d("error");
      console.error("[BinderStore] Load failed:", r);
      l("binder_load_error", {
        message: r instanceof Error ? r.message : "unknown"
      });
    }
  };
  return {
    cards: c,
    status: n,
    error: B,
    loadProgress: E,
    wallet: I,
    walletLoading: R,
    walletError: W,
    tierCounts: b,
    loadBinder: v,
    refresh: async (e, o) => {
      i([]);
      g(u);
      await v(e, o);
    },
    loadWalletOnly: async () => {
      _(true);
      y(null);
      try {
        const e = await p();
        w(e);
        console.log("[BinderStore] Wallet loaded:", e);
      } catch (e) {
        const o = e instanceof Error ? e.message : "Failed to load wallet";
        y(o);
        console.error("[BinderStore] Wallet load failed:", e);
      } finally {
        _(false);
      }
    },
    removeCard: e => {
      i(o => {
        const r = o.filter(t => t.cardId !== e);
        g(S(r));
        return r;
      });
    },
    getCard: e => L().get(e),
    get isEmpty() {
      return c().length === 0;
    },
    get isLoading() {
      return n() === "loading";
    },
    get isLoaded() {
      return n() === "loaded";
    },
    get hasError() {
      return n() === "error";
    }
  };
};
const q = x();
const H = () => q;
export { H as u };