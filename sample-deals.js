const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["assets/auction-B5b5Ai26.js", "assets/protobuf.js"]) => i.map(i => d[i]);
import { _ as Z } from "./index.js";
import { c as _, A as $ } from "./icons.js";
const W = (t, e) => {
  const m = new Map();
  for (const i of t) {
    if (!m.has(i.id)) {
      m.set(i.id, i);
    }
  }
  return Array.from(m.values()).slice(0, e);
};
const K = {
  QB: {
    bg: "bg-amber-500/20",
    text: "text-amber-400"
  },
  HB: {
    bg: "bg-orange-500/20",
    text: "text-orange-400"
  },
  FB: {
    bg: "bg-orange-500/20",
    text: "text-orange-400"
  },
  WR: {
    bg: "bg-emerald-500/20",
    text: "text-emerald-400"
  },
  TE: {
    bg: "bg-sky-500/20",
    text: "text-sky-400"
  },
  LT: {
    bg: "bg-indigo-500/20",
    text: "text-indigo-400"
  },
  LG: {
    bg: "bg-indigo-500/20",
    text: "text-indigo-400"
  },
  C: {
    bg: "bg-indigo-500/20",
    text: "text-indigo-400"
  },
  RG: {
    bg: "bg-indigo-500/20",
    text: "text-indigo-400"
  },
  RT: {
    bg: "bg-indigo-500/20",
    text: "text-indigo-400"
  },
  LE: {
    bg: "bg-rose-500/20",
    text: "text-rose-400"
  },
  RE: {
    bg: "bg-rose-500/20",
    text: "text-rose-400"
  },
  DT: {
    bg: "bg-rose-500/20",
    text: "text-rose-400"
  },
  LOLB: {
    bg: "bg-purple-500/20",
    text: "text-purple-400"
  },
  MLB: {
    bg: "bg-purple-500/20",
    text: "text-purple-400"
  },
  ROLB: {
    bg: "bg-purple-500/20",
    text: "text-purple-400"
  },
  CB: {
    bg: "bg-cyan-500/20",
    text: "text-cyan-400"
  },
  FS: {
    bg: "bg-teal-500/20",
    text: "text-teal-400"
  },
  SS: {
    bg: "bg-teal-500/20",
    text: "text-teal-400"
  },
  K: {
    bg: "bg-lime-500/20",
    text: "text-lime-400"
  },
  P: {
    bg: "bg-lime-500/20",
    text: "text-lime-400"
  }
};
const U = t => K[t] ?? {
  bg: "bg-slate-500/20",
  text: "text-slate-400"
};
const F = t => t >= 1000000 ? `${(t / 1000000).toFixed(1)}M` : t >= 1000 ? `${(t / 1000).toFixed(t >= 10000 ? 0 : 1)}K` : t.toLocaleString();
const J = t => {
  const e = typeof t == "string" ? new Date(t).getTime() : t;
  if (Number.isNaN(e)) {
    return "just now";
  }
  const m = Math.floor((Date.now() - e) / 1000);
  if (m < 0) {
    return "just now";
  }
  if (m < 60) {
    return `${m}s ago`;
  }
  const i = Math.floor(m / 60);
  if (i < 60) {
    return `${i}m ago`;
  }
  const s = Math.floor(i / 60);
  if (s < 24) {
    return `${s}h ago`;
  } else {
    return `${Math.floor(s / 24)}d ago`;
  }
};
function Q(t) {
  const e = "wss://api.mutdashboard.com/ws/deals/v2";
  let i = "wss://api.mutdashboard.com/ws/deals/v2";
  if (e.startsWith("ws://") || e.startsWith("wss://")) {
    i = e;
  } else if (e.startsWith("/")) {
    if (typeof window !== "undefined") {
      i = `${window.location.protocol === "https:" ? "wss:" : "ws:"}//${window.location.host}${e}`;
    } else {
      i = `ws://localhost:4242${e}`;
    }
  }
  const s = new URL(i);
  s.searchParams.set("market", t);
  return s.toString();
}
const Y = {
  market: "xbox",
  windowSize: 25,
  minProfit: 1000,
  minOverall: 60,
  minBuyNow: undefined,
  maxBuyNow: undefined
};
const j = "mutdashboard_deals_ws_debug";
const q = () => {
  if (typeof window === "undefined") {
    return false;
  }
  const t = new URLSearchParams(window.location.search);
  if (t.get("deals_ws_debug") === "1" || t.get("ws_debug") === "1") {
    return true;
  }
  try {
    return window.localStorage.getItem(j) === "1";
  } catch {
    return false;
  }
};
const x = (...t) => {
  if (q()) {
    console.log("[DealsWS]", ...t);
  }
};
const O = (...t) => {
  if (q()) {
    console.warn("[DealsWS]", ...t);
  }
};
const se = t => {
  const e = {
    ...Y,
    ...t,
    maxOverall: t?.maxOverall ?? 99
  };
  const m = t?.maxDeals ?? 100;
  const i = t?.snapshotLimit ?? m;
  const [s, d] = _([]);
  const [N, u] = _("disconnected");
  const [I, h] = _(null);
  const [D, T] = _(0);
  const [S, M] = _(null);
  let l = null;
  let p = null;
  let g = 0;
  const v = 10;
  const n = 1000;
  let w = null;
  const P = () => {
    const o = Q(e.market);
    const a = new URL(o);
    a.searchParams.set("window_size", e.windowSize.toString());
    a.searchParams.set("min_estimated_profit", e.minProfit.toString());
    a.searchParams.set("min_overall", e.minOverall.toString());
    a.searchParams.set("limit", i.toString());
    if (e.maxOverall < 99) {
      a.searchParams.set("max_overall", e.maxOverall.toString());
    }
    if (e.minBuyNow !== undefined && e.minBuyNow > 0) {
      a.searchParams.set("min_buy_price", e.minBuyNow.toString());
    }
    if (e.maxBuyNow !== undefined && e.maxBuyNow > 0) {
      a.searchParams.set("max_buy_price", e.maxBuyNow.toString());
    }
    return a.toString();
  };
  const C = async o => {
    try {
      w ||= (await Z(() => import("./auction-B5b5Ai26.js"), __vite__mapDeps([0, 1]))).StreamMessage;
      let a;
      if (o.data instanceof Blob) {
        const r = await o.data.arrayBuffer();
        a = new Uint8Array(r);
      } else if (o.data instanceof ArrayBuffer) {
        a = new Uint8Array(o.data);
      } else if (typeof o.data == "string") {
        x("Text message ignored:", o.data.slice(0, 120));
        return;
      } else {
        O("Unexpected message type:", typeof o.data);
        return;
      }
      const f = w.decode(a);
      T(r => r + 1);
      M(new Date());
      const E = r => {
        const y = r.secondsRemaining;
        let R = "";
        if (y != null && y > 0) {
          if (y < 60) {
            R = `${y}s`;
          } else if (y < 3600) {
            R = `${Math.floor(y / 60)}m`;
          } else {
            R = `${Math.floor(y / 3600)}h`;
          }
        }
        let B = Date.now();
        if (r.postingTime && r.postingTime > 0) {
          B = r.postingTime * 1000;
        } else {
          const b = r.observedRecentAt || r.observedAt;
          if (b) {
            try {
              if (typeof b == "string") {
                const H = !b.endsWith("Z") && !b.includes("+") && b.includes("T") ? `${b}Z` : b;
                B = new Date(H).getTime();
              } else {
                B = new Date(b).getTime();
              }
            } catch (L) {
              O("Date parse error", b, L);
            }
          }
        }
        if (Number.isNaN(B) || B <= 0) {
          B = Date.now();
        }
        return {
          id: r.auctionId || r.cardId || `deal-${Date.now()}-${Math.random()}`,
          cardId: r.cardId,
          playerName: r.playerName || "Unknown",
          position: r.positionId || r.archetypeTitle || "??",
          program: r.programName || "Core",
          ovr: r.overallRating || 0,
          buyNow: r.buyoutPrice || 0,
          profit: r.estimatedProfit || 0,
          q3: r.q3Price ?? r.mutggQ3 ?? 0,
          expires: R,
          timestamp: B,
          salePricesJson: r.salePricesJson
        };
      };
      if (f.snapshot) {
        const r = f.snapshot.deals.map(E);
        d(W(r, m));
        x("Snapshot received:", r.length, "deals");
      } else if (f.batchUpdate) {
        const r = f.batchUpdate.deals;
        if (r.length > 0) {
          const y = r.map(E);
          d(R => W([...y, ...R], m));
        }
      } else if (f.heartbeat) {
        x("Heartbeat:", f.heartbeat.timestamp);
      }
    } catch (a) {
      console.error("[DealsWS] Failed to parse message:", a);
    }
  };
  const k = () => {
    if (l?.readyState === WebSocket.OPEN || l?.readyState === WebSocket.CONNECTING) {
      return;
    }
    const o = P();
    x("Connecting to:", o);
    u("connecting");
    h(null);
    try {
      l = new WebSocket(o);
      l.onopen = () => {
        x("Connected!");
        u("connected");
        h(null);
        g = 0;
      };
      l.onmessage = C;
      l.onerror = a => {
        console.error("[DealsWS] WebSocket error:", a);
        h("Connection error");
        u("error");
      };
      l.onclose = a => {
        x("Connection closed:", a.code, a.reason);
        u("disconnected");
        l = null;
        if (a.code === 4401) {
          h("Not authenticated. Sign in on app.mutdashboard.com or use the local desktop app.");
          u("error");
          return;
        }
        if (a.code === 4403) {
          h("Access denied by backend entitlement checks.");
          u("error");
          return;
        }
        if (g < v) {
          const f = n * Math.pow(2, g);
          x(`Reconnecting in ${f}ms (attempt ${g + 1})`);
          p = setTimeout(() => {
            g++;
            k();
          }, f);
        } else {
          h("Max reconnection attempts reached");
          u("error");
        }
      };
    } catch (a) {
      console.error("[DealsWS] Failed to create WebSocket:", a);
      h(a instanceof Error ? a.message : "Failed to connect");
      u("error");
    }
  };
  const A = () => {
    if (p) {
      clearTimeout(p);
      p = null;
    }
    g = v;
    if (l) {
      l.close(1000, "User requested disconnect");
      l = null;
    }
    u("disconnected");
  };
  const G = () => d([]);
  const z = o => {
    if (o.windowSize !== undefined) {
      e.windowSize = o.windowSize;
    }
    if (o.minProfit !== undefined) {
      e.minProfit = o.minProfit;
    }
    if (o.minOverall !== undefined) {
      e.minOverall = o.minOverall;
    }
    if (o.maxOverall !== undefined) {
      e.maxOverall = o.maxOverall;
    }
    if (o.minBuyNow !== undefined) {
      e.minBuyNow = o.minBuyNow ?? undefined;
    }
    if (o.maxBuyNow !== undefined) {
      e.maxBuyNow = o.maxBuyNow ?? undefined;
    }
    if (l?.readyState === WebSocket.OPEN) {
      const a = {
        type: "update_filters",
        filters: {
          window_size: o.windowSize,
          min_estimated_profit: o.minProfit,
          min_overall: o.minOverall,
          max_overall: o.maxOverall,
          min_buy_price: o.minBuyNow === undefined ? undefined : o.minBuyNow ?? null,
          max_buy_price: o.maxBuyNow === undefined ? undefined : o.maxBuyNow ?? null,
          promo_filter: o.promoFilter
        }
      };
      l.send(JSON.stringify(a));
      x("Sent filter update:", a);
    } else {
      O("Cannot update filters - not connected");
    }
  };
  $(() => {
    A();
  });
  return {
    deals: s,
    status: N,
    error: I,
    messageCount: D,
    lastUpdate: S,
    connect: k,
    disconnect: A,
    clearDeals: G,
    updateFilters: z,
    formatPrice: F,
    formatTimeAgo: J,
    getPositionColors: U,
    wsUrl: P()
  };
};
const V = [{
  name: "Patrick Mahomes",
  position: "QB",
  archetype: "Field General",
  ovr: 99,
  programId: 1001
}, {
  name: "Josh Allen",
  position: "QB",
  archetype: "Improviser",
  ovr: 98,
  programId: 1002
}, {
  name: "Lamar Jackson",
  position: "QB",
  archetype: "Scrambler",
  ovr: 97,
  programId: 1001
}, {
  name: "Travis Kelce",
  position: "TE",
  archetype: "Possession",
  ovr: 98,
  programId: 1003
}, {
  name: "George Kittle",
  position: "TE",
  archetype: "Blocking",
  ovr: 95,
  programId: 1002
}, {
  name: "Justin Jefferson",
  position: "WR",
  archetype: "Route Runner",
  ovr: 96,
  programId: 1004
}, {
  name: "Tyreek Hill",
  position: "WR",
  archetype: "Deep Threat",
  ovr: 97,
  programId: 1001
}, {
  name: "Ja'Marr Chase",
  position: "WR",
  archetype: "Physical",
  ovr: 95,
  programId: 1003
}, {
  name: "Davante Adams",
  position: "WR",
  archetype: "Route Runner",
  ovr: 94,
  programId: 1002
}, {
  name: "Amon-Ra St. Brown",
  position: "WR",
  archetype: "Slot",
  ovr: 93,
  programId: 1004
}, {
  name: "Christian McCaffrey",
  position: "HB",
  archetype: "Elusive",
  ovr: 98,
  programId: 1001
}, {
  name: "Derrick Henry",
  position: "HB",
  archetype: "Power",
  ovr: 96,
  programId: 1003
}, {
  name: "Saquon Barkley",
  position: "HB",
  archetype: "Elusive",
  ovr: 95,
  programId: 1002
}, {
  name: "Chris Jones",
  position: "DT",
  archetype: "Run Stopper",
  ovr: 97,
  programId: 1004
}, {
  name: "Aaron Donald",
  position: "DT",
  archetype: "Pass Rusher",
  ovr: 99,
  programId: 1001
}, {
  name: "Micah Parsons",
  position: "LOLB",
  archetype: "Speed Rusher",
  ovr: 98,
  programId: 1003
}, {
  name: "T.J. Watt",
  position: "ROLB",
  archetype: "Power Rusher",
  ovr: 97,
  programId: 1002
}, {
  name: "Nick Bosa",
  position: "RE",
  archetype: "Speed Rusher",
  ovr: 96,
  programId: 1001
}, {
  name: "Maxx Crosby",
  position: "LE",
  archetype: "Power Rusher",
  ovr: 95,
  programId: 1004
}, {
  name: "Jalen Ramsey",
  position: "CB",
  archetype: "Man to Man",
  ovr: 96,
  programId: 1002
}, {
  name: "Sauce Gardner",
  position: "CB",
  archetype: "Zone",
  ovr: 97,
  programId: 1003
}, {
  name: "Patrick Surtain II",
  position: "CB",
  archetype: "Man to Man",
  ovr: 95,
  programId: 1001
}, {
  name: "Derwin James",
  position: "FS",
  archetype: "Hybrid",
  ovr: 96,
  programId: 1004
}, {
  name: "Minkah Fitzpatrick",
  position: "SS",
  archetype: "Zone",
  ovr: 95,
  programId: 1002
}, {
  name: "Tyron Smith",
  position: "LT",
  archetype: "Pass Protector",
  ovr: 94,
  programId: 1003
}, {
  name: "Lane Johnson",
  position: "RT",
  archetype: "Power",
  ovr: 95,
  programId: 1001
}, {
  name: "Zack Martin",
  position: "RG",
  archetype: "Power",
  ovr: 96,
  programId: 1002
}, {
  name: "Creed Humphrey",
  position: "C",
  archetype: "Pass Protector",
  ovr: 94,
  programId: 1004
}];
const X = {
  1001: "Ultimate Blitz",
  1002: "Gauntlet",
  1003: "Most Feared",
  1004: "Zero Chill"
};
const ee = t => t[Math.floor(Math.random() * t.length)];
const c = (t, e) => Math.floor(Math.random() * (e - t + 1)) + t;
let te = 1000000;
let oe = 500000;
const re = (t = "xbox") => {
  const e = ee(V);
  const i = new Date().toISOString();
  const s = e.ovr >= 97 ? c(80000, 500000) : e.ovr >= 94 ? c(20000, 150000) : c(5000, 50000);
  const d = Math.floor(s * (1 + c(15, 50) / 100));
  const N = Math.floor(d * 0.9 - s);
  const u = (d - s) / d * 100;
  const I = `${++te}`;
  const h = `${++oe}`;
  const D = c(60, 86400);
  const T = Date.now() - c(60000, 3600000);
  const S = {};
  const M = {};
  const l = {};
  for (const p of [5, 10, 15, 20, 25]) {
    const g = Math.floor(d * (1 + (p - 25) * 0.01));
    const v = Math.floor(g * 0.9 - s);
    const n = (g - s) / g * 100;
    S[`profit_${p}`] = v;
    M[`q3_${p}`] = g;
    l[`percent_below_${p}`] = n;
  }
  return {
    auction_id: I,
    card_id: h,
    market: t,
    update_seq: c(1, 100),
    price: s,
    current_bid: s,
    starting_bid: Math.floor(s * 0.8),
    buyout_price: s,
    seconds_remaining: D,
    posting_time: T,
    pipeline_lag_seconds: c(0, 5),
    number_of_bids: c(0, 10),
    observed_at: i,
    program_id: e.programId.toString(),
    window_size: 25,
    q3_price: d,
    estimated_profit: N,
    percent_below_q3: u,
    player_name: e.name,
    overall_rating: e.ovr,
    program_name: X[e.programId],
    position_id: e.position,
    archetype_title: e.archetype,
    last_polled_at: null,
    observed_recent_at: i,
    velocity: {
      vol_1h: c(0, 50),
      vol_24h: c(10, 500),
      hours_to_25: c(1, 48),
      hours_to_50: c(2, 96)
    },
    mutgg_q3: d + c(-5000, 5000),
    mutgg_rec: c(0, 1) > 0.5 ? "buy" : "sell",
    mutgg_last_sold_price: d - c(0, 10000),
    mutgg_last_sold_at: new Date(Date.now() - c(60000, 3600000)).toISOString(),
    mutgg_l10_q3: d - c(0, 5000),
    mutgg_vol_24h: c(10, 500),
    ...S,
    ...M,
    ...l
  };
};
const ie = t => {
  const {
    initialCount: e = 12,
    maxDeals: m = 50,
    intervalMs: i = 1500
  } = t ?? {};
  const s = t?.market === "ps5" ? "playstation" : "xbox";
  const d = () => {
    const n = re(s);
    return N(n);
  };
  const N = n => {
    const w = n.seconds_remaining;
    let P = "";
    if (w != null && w > 0) {
      if (w < 60) {
        P = `${w}s`;
      } else if (w < 3600) {
        P = `${Math.floor(w / 60)}m`;
      } else {
        P = `${Math.floor(w / 3600)}h`;
      }
    }
    const C = n.observed_recent_at || n.observed_at;
    const k = C ? new Date(C).getTime() : Date.now();
    return {
      id: n.auction_id || n.card_id || `deal-${Date.now()}-${Math.random()}`,
      cardId: n.card_id,
      playerName: n.player_name || "Unknown",
      position: n.archetype_title || n.position_id || "??",
      program: n.program_name || "Core",
      ovr: n.overall_rating || 0,
      buyNow: n.buyout_price || 0,
      profit: n.estimated_profit || 0,
      expires: P,
      timestamp: k
    };
  };
  const [u, I] = _(Array.from({
    length: e
  }, d));
  const [h, D] = _(true);
  const [T, S] = _("connected");
  const [M, l] = _(e);
  let p = null;
  const g = () => {
    if (!p) {
      D(true);
      S("connected");
      p = setInterval(() => {
        I(n => [d(), ...n].slice(0, m));
        l(n => n + 1);
      }, i);
    }
  };
  const v = () => {
    if (p) {
      clearInterval(p);
      p = null;
    }
    D(false);
    S("disconnected");
  };
  g();
  $(v);
  return {
    deals: u,
    status: T,
    error: () => null,
    messageCount: M,
    lastUpdate: () => new Date(),
    isStreaming: h,
    connect: g,
    disconnect: v,
    startStreaming: g,
    stopStreaming: v,
    clearDeals: () => I([]),
    formatPrice: F,
    formatTimeAgo: J,
    getPositionColors: U,
    wsUrl: "mock://local/deals"
  };
};
export { F as a, se as b, ie as c, J as f, U as g };