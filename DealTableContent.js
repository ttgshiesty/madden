import { c as F, w as Q, A as Re, a as fe, o as ze, t as g, i as r, b as c, L as ee, S as T, h as I, m as Y, _, H as rt, r as it, aq as nt, s as st, af as ce, Y as lt, ar as ot, k as at, T as Fe, ah as dt, d as ut, as as ct, at as mt } from "./icons.js";
import { c as ht, b as gt, f as xe, a as te, g as He } from "./sampleDeals.js";
import { a as ft, b as xt, o as vt, T as pt, l as ye, h as bt, B as wt, j as yt, k as $t, m as _t } from "./index.js";
import { c as St, p as $e } from "./LayoutSystem.js";
import { u as Ct } from "./binderStore.js";
import "./analytics.js";
import "./binderService.js";
const qe = "mutdashboard-bought-cards-v2";
const Nt = () => {
  const [t, S] = St({
    bought: []
  });
  if (typeof localStorage !== "undefined") {
    const f = localStorage.getItem(qe);
    if (f) {
      try {
        const p = JSON.parse(f);
        S("bought", p);
      } catch (p) {
        console.error("[BoughtStore] Failed to load from localStorage:", p);
      }
    }
  }
  const $ = () => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(qe, JSON.stringify(t.bought));
    }
  };
  return {
    get bought() {
      return t.bought;
    },
    addBought: f => {
      S($e(p => {
        const P = p.bought.findIndex(v => v.auctionId === f.id);
        const C = {
          auctionId: f.id,
          cardId: f.id,
          playerName: f.playerName,
          overall: f.ovr,
          boughtAt: new Date().toISOString(),
          buyoutPrice: f.buyNow,
          program: f.program,
          position: f.position
        };
        if (P >= 0) {
          p.bought[P] = C;
        } else {
          p.bought.push(C);
        }
      }));
      $();
    },
    addBoughtCard: f => {
      S($e(p => {
        const P = p.bought.findIndex(C => C.auctionId === f.auctionId);
        if (P >= 0) {
          p.bought[P] = f;
        } else {
          p.bought.push(f);
        }
      }));
      $();
    },
    removeBought: f => {
      S($e(p => {
        p.bought = p.bought.filter(P => P.auctionId !== f);
      }));
      $();
    },
    isBought: f => t.bought.some(p => p.auctionId === f),
    getBoughtCard: f => t.bought.find(p => p.auctionId === f),
    clearAll: () => {
      S("bought", []);
      $();
    }
  };
};
const Bt = Nt();
const It = () => Bt;
var ue = g("<div>");
var Mt = g("<span>");
var je = g("<span class=\"inline-flex items-center ml-1 text-slate-500 hover:text-emerald-400 transition-colors cursor-help\">");
var Wt = g("<div class=min-w-0><div class=\"font-medium text-slate-200 truncate\"></div><div class=\"text-xs sm:text-[10px] text-slate-600 flex items-center gap-1\"><span class=text-slate-700> • </span><span> OVR</span><span class=text-slate-700> • </span><span class=text-sky-500/70>");
var Pt = g("<div class=\"fixed w-48 p-2 rounded-lg bg-slate-800/95 backdrop-blur-sm border border-slate-700/50 shadow-xl z-[9999]\"style=transform:translateY(-100%)><div class=\"flex items-center justify-between mb-2\"><span class=\"text-xs font-bold text-slate-300 uppercase tracking-wide\">Recent Sales</span><span class=\"text-[11px] text-slate-400\"> records</span></div><div class=\"space-y-1 max-h-32 overflow-y-auto\"style=scrollbar-width:thin>");
var kt = g("<div class=\"flex items-center gap-2.5 sm:gap-2 min-w-0 cursor-pointer\">");
var Et = g("<div class=min-w-0><div class=\"flex items-center gap-1 min-w-0\"><span class=\"font-medium text-slate-200 truncate\"></span><span></span></div><div class=\"text-[10px] text-slate-600 flex items-center gap-1\"><span class=truncate></span><span class=text-slate-700> • </span><span> OVR</span><span class=text-slate-700> • </span><span class=text-sky-500/70>");
var Ot = g("<div><span class=font-mono></span><span class=text-slate-500>");
var Tt = g("<div>+");
var Lt = g("<div><button>");
var At = g("<div><div class=\"flex items-start justify-between gap-2\"><div class=min-w-0><div class=\"flex items-center gap-1.5 min-w-0\"><span class=\"font-semibold text-slate-100 truncate\"></span><span></span><span class=\"shrink-0 text-[10px] font-semibold text-slate-300\"></span></div><div class=\"mt-0.5 text-[10px] text-slate-500 truncate\"> • </div></div><div class=text-right><div class=\"text-[10px] text-slate-500\">Profit</div><div class=\"text-sm font-bold text-emerald-400\">+</div></div></div><div class=\"mt-2 grid grid-cols-3 gap-2 text-[11px]\"><div class=\"rounded-lg bg-slate-800/70 px-2 py-1.5\"><div class=text-slate-500>Buy</div><div class=\"font-mono text-slate-200\"></div></div><div class=\"rounded-lg bg-slate-800/70 px-2 py-1.5\"><div class=text-slate-500>Q3</div><div class=\"font-mono text-slate-300\"></div></div><div class=\"rounded-lg bg-slate-800/70 px-2 py-1.5 text-right\"><div class=text-slate-500>Exp</div><div class=text-slate-300></div></div></div><div class=\"mt-2.5 flex items-center gap-2\"><button class=\"flex-1 min-h-[2.25rem] rounded-lg border border-slate-600 bg-slate-800 text-xs font-semibold text-slate-200\">Watchlist</button><button>");
var Dt = g("<div class=\"absolute top-full right-0 mt-1 w-40 p-1.5 rounded-lg bg-slate-800/98 backdrop-blur-md border border-slate-700/80 shadow-2xl z-50\"><div class=\"px-2 py-1 mb-1 text-[9px] font-bold text-slate-500 uppercase tracking-tighter\">Toggle Columns</div><div class=\"space-y-0.5 max-h-48 overflow-y-auto\">");
var Rt = g("<div class=\"absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-1 z-40\"><div class=\"flex items-center gap-1 opacity-60 hover:opacity-100 transition-opacity\"><div></div><span class=\"text-[8px] text-slate-600\"></span></div><button title=\"Column Settings\">");
var zt = g("<div class=\"grid py-2 sm:py-1 px-3 sm:px-2 text-[11px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-700/50 sticky top-0 bg-slate-900/95 backdrop-blur-sm z-20 group/header\"style=gap:8px>");
var Ft = g("<div class=\"flex items-center justify-end border-b border-slate-700/50 bg-slate-900/95 px-3 py-2\"><select class=\"h-8 rounded-lg bg-slate-800 border border-slate-700 px-2 text-[11px] font-semibold text-slate-200 outline-none focus:border-emerald-400\"title=\"Sort table\">");
var qt = g("<div class=\"h-full min-h-0 flex flex-col overflow-hidden\"><div class=\"flex-1 min-h-0 overflow-x-auto overscroll-x-contain\"style=\"-webkit-overflow-scrolling:touch;touch-action:pan-x pan-y\"><div class=\"h-full min-h-0 flex flex-col\"><div class=\"flex-1 min-h-0 overflow-y-auto overscroll-y-contain\"style=-webkit-overflow-scrolling:touch;touch-action:pan-y>");
var jt = g("<div class=\"flex items-center justify-between gap-2 min-w-0\"><span class=truncate></span><select class=\"h-6 max-w-[120px] flex-shrink-0 rounded bg-slate-800/80 border border-slate-700/50 px-2 text-[9px] font-semibold uppercase tracking-wide text-slate-300 outline-none focus:border-emerald-400\"title=\"Sort table\">");
var Ut = g("<div class=\"relative group/col flex items-center min-w-0\"><div>");
var Jt = g("<span class=truncate>");
var Yt = g("<span class=\"ml-1 text-[9px] text-slate-600\">(<!>)");
var Ue = g("<option>");
var Vt = g("<div class=\"absolute -right-3 top-0 bottom-0 w-6 cursor-col-resize z-30 flex items-center justify-center group/handle\"title=\"Drag to resize\"><div>");
var Xt = g("<div class=\"absolute -left-3 top-0 bottom-0 w-6 cursor-col-resize z-30 flex items-center justify-center group/handle\"title=\"Drag to resize\"><div>");
var Ht = g("<button><span class=\"flex items-center gap-2\">");
var Gt = g("<div class=w-3>");
var Qt = g("<span>Connecting to deals stream...");
var Kt = g("<span class=text-rose-400>");
var Zt = g("<button class=\"mt-2 px-3 py-1 rounded bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs\">Retry");
var er = g("<span>No deals yet");
var tr = g("<span>No deals match filters");
var rr = g("<div class=\"flex flex-col items-center justify-center h-full text-slate-500 text-sm\">");
const Je = 250;
const Ye = 50;
const Ve = [{
  value: "default",
  label: "SORT TABLE"
}, {
  value: "posted_desc",
  label: "Newest posted"
}, {
  value: "posted_asc",
  label: "Oldest posted"
}, {
  value: "profit_desc",
  label: "Highest profit"
}, {
  value: "buy_now_asc",
  label: "Lowest buy now"
}, {
  value: "buy_now_desc",
  label: "Highest buy now"
}, {
  value: "ovr_desc",
  label: "Highest OVR"
}, {
  value: "ovr_asc",
  label: "Lowest OVR"
}, {
  value: "expires_asc",
  label: "Ending soon"
}, {
  value: "player_asc",
  label: "Player A-Z"
}];
const Xe = t => t.endsWith("h") ? parseInt(t, 10) * 3600 : t.endsWith("m") ? parseInt(t, 10) * 60 : t.endsWith("s") ? parseInt(t, 10) : Number.POSITIVE_INFINITY;
const ir = t => {
  if (!t) {
    return [];
  }
  try {
    const S = JSON.parse(t);
    if (Array.isArray(S)) {
      return S.slice(0, 10);
    }
  } catch (S) {
    console.warn("Failed to parse salePricesJson:", S);
  }
  return [];
};
const nr = t => {
  const [S, $] = F(false);
  const [X, V] = F({
    x: 0,
    y: 0
  });
  let D = null;
  const H = () => He(t.deal.position);
  const q = () => ir(t.deal.salePricesJson);
  const re = () => t.columns.filter(C => C.visible);
  const f = C => {
    if (D) {
      clearTimeout(D);
      D = null;
    }
    const v = C.currentTarget.getBoundingClientRect();
    const d = v.left + v.width / 2 - 96;
    const m = Math.max(8, d);
    V({
      x: m,
      y: v.top - 4
    });
    $(true);
  };
  const p = () => {
    if (D) {
      clearTimeout(D);
      D = null;
    }
  };
  const P = () => {
    D = setTimeout(() => {
      $(false);
    }, 150);
  };
  return (() => {
    var C = ue();
    r(C, c(ee, {
      get each() {
        return re();
      },
      children: v => {
        const k = v.align === "center" ? "text-center" : v.align === "right" ? "text-right" : "text-left";
        if (v.id === "player") {
          return (() => {
            var d = kt();
            d.$$click = () => t.onClick?.();
            r(d, c(T, {
              get when() {
                return !t.isMobile;
              },
              get fallback() {
                return (() => {
                  var m = Et();
                  var L = m.firstChild;
                  var A = L.firstChild;
                  var E = A.nextSibling;
                  var j = L.nextSibling;
                  var b = j.firstChild;
                  var M = b.nextSibling;
                  var O = M.nextSibling;
                  var N = O.firstChild;
                  var R = O.nextSibling;
                  var G = R.nextSibling;
                  r(A, () => t.deal.playerName);
                  r(E, () => t.deal.position);
                  r(b, () => t.deal.program);
                  r(O, () => t.deal.ovr, N);
                  r(G, () => xe(t.deal.timestamp));
                  r(j, c(T, {
                    get when() {
                      return q().length > 0;
                    },
                    get children() {
                      var W = je();
                      W.$$click = K => K.stopPropagation();
                      W.addEventListener("mouseleave", P);
                      W.addEventListener("mouseenter", f);
                      r(W, c(Fe, {
                        class: "w-3 h-3"
                      }));
                      return W;
                    }
                  }), null);
                  I(() => _(E, `shrink-0 text-[9px] font-semibold uppercase tracking-wide ${H().text}`));
                  return m;
                })();
              },
              get children() {
                return [(() => {
                  var m = Mt();
                  r(m, () => t.deal.position);
                  I(() => _(m, `px-2.5 sm:px-2 py-1 sm:py-0.5 rounded text-[11px] sm:text-[10px] font-bold ${H().bg} ${H().text}`));
                  return m;
                })(), (() => {
                  var m = Wt();
                  var L = m.firstChild;
                  var A = L.nextSibling;
                  var E = A.firstChild;
                  var j = E.nextSibling;
                  var b = j.firstChild;
                  var M = j.nextSibling;
                  var O = M.nextSibling;
                  r(L, () => t.deal.playerName);
                  r(A, () => t.deal.program, E);
                  r(j, () => t.deal.ovr, b);
                  r(O, () => xe(t.deal.timestamp));
                  r(A, c(T, {
                    get when() {
                      return q().length > 0;
                    },
                    get children() {
                      var N = je();
                      N.$$click = R => R.stopPropagation();
                      N.addEventListener("mouseleave", P);
                      N.addEventListener("mouseenter", f);
                      r(N, c(Fe, {
                        class: "w-3 h-3"
                      }));
                      return N;
                    }
                  }), null);
                  return m;
                })()];
              }
            }), null);
            r(d, c(T, {
              get when() {
                return Y(() => !!S())() && q().length > 0;
              },
              get children() {
                var m = Pt();
                var L = m.firstChild;
                var A = L.firstChild;
                var E = A.nextSibling;
                var j = E.firstChild;
                var b = L.nextSibling;
                m.addEventListener("mouseleave", P);
                m.addEventListener("mouseenter", p);
                r(E, () => q().length, j);
                r(b, c(ee, {
                  get each() {
                    return q();
                  },
                  children: (M, O) => (() => {
                    var N = Ot();
                    var R = N.firstChild;
                    var G = R.nextSibling;
                    r(R, () => te(M.price));
                    r(G, () => xe(M.sold_at));
                    I(() => _(N, `flex justify-between items-center text-xs py-0.5 ${O() === 0 ? "text-emerald-300 font-semibold" : "text-slate-300"}`));
                    return N;
                  })()
                }));
                I(M => {
                  var O = `${X().x}px`;
                  var N = `${X().y}px`;
                  if (O !== M.e) {
                    ce(m, "left", M.e = O);
                  }
                  if (N !== M.t) {
                    ce(m, "top", M.t = N);
                  }
                  return M;
                }, {
                  e: undefined,
                  t: undefined
                });
                return m;
              }
            }), null);
            return d;
          })();
        }
        if (v.id === "ovr") {
          return (() => {
            var d = ue();
            _(d, `${k} text-slate-200 font-mono font-semibold text-[15px] sm:text-[17px]`);
            r(d, () => t.deal.ovr);
            return d;
          })();
        }
        if (v.id === "buyNow") {
          return (() => {
            var d = ue();
            _(d, `${k} text-slate-300 font-mono font-medium text-[13px] sm:text-[16px]`);
            r(d, () => te(t.deal.buyNow));
            return d;
          })();
        }
        if (v.id === "q3") {
          return (() => {
            var d = ue();
            _(d, `${k} text-slate-400 font-mono font-medium text-[13px] sm:text-[16px]`);
            r(d, () => te(t.deal.q3 || 0));
            return d;
          })();
        }
        if (v.id === "profit") {
          const d = t.deal.profit >= 30000 ? "text-emerald-300 [text-shadow:0_0_10px_rgba(16,185,129,0.4)]" : "text-emerald-400";
          return (() => {
            var m = Tt();
            m.firstChild;
            _(m, `${k} ${d} font-mono font-bold text-[14px] sm:text-[18px]`);
            r(m, () => te(t.deal.profit), null);
            return m;
          })();
        }
        if (v.id === "expires") {
          return (() => {
            var d = ue();
            _(d, `${k} text-slate-600 text-[10px]`);
            r(d, () => t.deal.expires || "—");
            return d;
          })();
        } else if (v.id === "buy") {
          return (() => {
            var d = Lt();
            var m = d.firstChild;
            _(d, k);
            m.$$click = L => {
              L.stopPropagation();
              if (t.isBought) {
                t.onSell?.();
              } else {
                t.onBuy?.();
              }
            };
            r(m, () => t.isBought ? "SELL" : "BUY");
            I(() => _(m, `min-h-[2.25rem] sm:min-h-0 min-w-[3.25rem] sm:min-w-0 px-3 py-2 sm:px-2 sm:py-1 rounded text-xs sm:text-[10px] leading-none font-bold border whitespace-nowrap touch-manipulation transition-colors ${t.isBought ? "bg-rose-500/20 text-rose-400 border-rose-500/30" : "bg-emerald-500/20 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/30"}`));
            return d;
          })();
        } else {
          return null;
        }
      }
    }));
    I(v => {
      var k = `
        grid gap-2 py-3.5 sm:py-2.5 px-3 sm:px-2 text-sm items-center min-h-[52px] sm:min-h-0 relative
        border-b border-slate-800/50 hover:bg-slate-800/30 transition-all
        ${t.isNew ? "animate-pulse bg-emerald-500/5" : ""}
        ${S() ? "z-[9999]" : ""}
      `;
      var d = t.gridTemplateColumns;
      if (k !== v.e) {
        _(C, v.e = k);
      }
      if (d !== v.t) {
        ce(C, "grid-template-columns", v.t = d);
      }
      return v;
    }, {
      e: undefined,
      t: undefined
    });
    return C;
  })();
};
const sr = t => {
  const S = () => He(t.deal.position);
  return (() => {
    var $ = At();
    var X = $.firstChild;
    var V = X.firstChild;
    var D = V.firstChild;
    var H = D.firstChild;
    var q = H.nextSibling;
    var re = q.nextSibling;
    var f = D.nextSibling;
    var p = f.firstChild;
    var P = V.nextSibling;
    var C = P.firstChild;
    var v = C.nextSibling;
    v.firstChild;
    var k = X.nextSibling;
    var d = k.firstChild;
    var m = d.firstChild;
    var L = m.nextSibling;
    var A = d.nextSibling;
    var E = A.firstChild;
    var j = E.nextSibling;
    var b = A.nextSibling;
    var M = b.firstChild;
    var O = M.nextSibling;
    var N = k.nextSibling;
    var R = N.firstChild;
    var G = R.nextSibling;
    r(H, () => t.deal.playerName);
    r(q, () => t.deal.position);
    r(re, () => t.deal.ovr);
    r(f, () => t.deal.program, p);
    r(f, () => xe(t.deal.timestamp), null);
    r(v, () => te(t.deal.profit), null);
    r(L, () => te(t.deal.buyNow));
    r(j, () => te(t.deal.q3 || 0));
    r(O, () => t.deal.expires || "—");
    at(R, "click", t.onAddToWatchlist, true);
    G.$$click = () => t.isBought ? t.onSell?.() : t.onBuy?.();
    r(G, () => t.isBought ? "SELL" : "BUY NOW");
    I(W => {
      var K = `mx-2 my-1.5 rounded-xl border border-slate-700/60 bg-slate-900/70 p-3 ${t.isNew ? "ring-1 ring-emerald-500/40" : ""}`;
      var se = `shrink-0 text-[9px] font-semibold uppercase tracking-wide ${S().text}`;
      var le = `flex-1 min-h-[2.25rem] rounded-lg border text-xs font-bold ${t.isBought ? "border-rose-500/40 bg-rose-500/20 text-rose-300" : "border-emerald-500/40 bg-emerald-500/20 text-emerald-300"}`;
      if (K !== W.e) {
        _($, W.e = K);
      }
      if (se !== W.t) {
        _(q, W.t = se);
      }
      if (le !== W.a) {
        _(G, W.a = le);
      }
      return W;
    }, {
      e: undefined,
      t: undefined,
      a: undefined
    });
    return $;
  })();
};
const hr = t => {
  const S = t.useMockData === true;
  const $ = t.isStudioMode === true;
  const X = ct();
  const V = It();
  const D = Ct();
  const H = t.minProfit ?? 500;
  const q = t.minOvr ?? 60;
  const re = t.maxOvr ?? 99;
  const f = t.minBuyNow;
  const p = t.maxBuyNow;
  const P = t.profitMetric ?? 15;
  const C = $ ? null : S ? ht({
    initialCount: 12,
    intervalMs: 1800,
    market: t.platform ?? "xbox"
  }) : gt({
    market: t.platform ?? "xbox",
    windowSize: P,
    minProfit: H,
    minOverall: q,
    maxOverall: re,
    minBuyNow: f,
    maxBuyNow: p,
    maxDeals: Je,
    snapshotLimit: Je
  });
  const [v, k] = F(null);
  const [d, m] = F($ ? "connecting" : "disconnected");
  const [L, A] = F(null);
  let E = false;
  const j = {
    deals: () => [],
    status: d,
    error: L,
    messageCount: () => 0,
    lastUpdate: () => null,
    clearDeals: () => {},
    connect: () => {},
    disconnect: () => {},
    updateFilters: () => {},
    wsUrl: "studio://loading"
  };
  const b = Q(() => $ ? v() ?? j : C);
  const [M, O] = F(new Set());
  const [N, R] = F(new Set());
  const [G, W] = F(false);
  const [K, se] = F("default");
  const le = ft();
  const _e = xt();
  Re(() => {
    E = true;
  });
  const Se = async e => {
    if (confirm(`Buy ${e.playerName} for ${e.buyNow.toLocaleString()} coins?`)) {
      try {
        if ($) {
          if (!le()) {
            _e();
            return;
          }
          const i = await ye();
          if ((await i.mockBuyCard(e.id, e.buyNow)).ok) {
            i.useStudioBinderStore().addCard({
              cardId: e.cardId || e.id,
              playerName: e.playerName,
              position: e.position,
              program: e.program,
              ovr: e.ovr,
              buyNow: e.buyNow,
              q3: e.q3
            });
            i.useStudioPurchasesStore().addPurchase({
              auctionId: e.id,
              cardId: e.cardId || e.id,
              playerName: e.playerName,
              position: e.position,
              ovr: e.ovr,
              program: e.program,
              price: e.buyNow
            });
            R(s => {
              const x = new Set(s);
              x.add(e.id);
              return x;
            });
            V.addBought(e);
            alert(`Successfully bought ${e.playerName}! Check your binder.`);
          }
          return;
        }
        const n = await bt(e.id, e.buyNow);
        if (n.ok) {
          R(l => {
            const a = new Set(l);
            a.add(e.id);
            return a;
          });
          V.addBought(e);
          D.loadWalletOnly();
          const i = Date.now();
          t.onAddToWatchlist?.({
            id: `wl-${i}`,
            auctionId: e.id,
            cardId: e.cardId,
            addedAt: i,
            purchasedAt: i,
            playerName: e.playerName,
            position: e.position,
            program: e.program,
            ovr: e.ovr,
            buyNow: e.buyNow,
            profit: e.profit,
            q3Price: e.q3,
            profitMetric: t.profitMetric ?? 15,
            sourcePanelId: t.panelId,
            isPurchased: true,
            salePricesJson: e.salePricesJson
          });
          t.onBuy?.(e);
          alert(`Successfully bought ${e.playerName}!`);
        } else {
          if (n.error === "EA_SESSION_EXPIRED") {
            alert("Your EA session has expired. Please re-link your EA account.");
            return;
          }
          if (n.error === wt.authenticationRequired) {
            alert("Please sign in again, then retry your purchase.");
            return;
          }
          if (yt(n.error)) {
            W(true);
            return;
          }
          alert($t(n.error));
        }
      } catch (n) {
        console.error("[DealTable] Buy failed:", n);
        alert(_t);
      }
    }
  };
  const Ge = Q(() => new Set(V.bought.map(e => e.auctionId)));
  const Qe = Q(() => {
    const e = new Set(Ge());
    for (const n of N()) {
      e.add(n);
    }
    return e;
  });
  const Ce = e => Qe().has(e);
  const Ne = e => {
    t.onAddToWatchlist?.({
      id: `wl-${Date.now()}`,
      auctionId: e.id,
      cardId: e.cardId,
      addedAt: Date.now(),
      playerName: e.playerName,
      position: e.position,
      program: e.program,
      ovr: e.ovr,
      buyNow: e.buyNow,
      profit: e.profit,
      q3Price: e.q3,
      profitMetric: t.profitMetric ?? 15,
      sourcePanelId: t.panelId,
      isPurchased: false,
      salePricesJson: e.salePricesJson
    });
  };
  const Be = async e => {
    if ($) {
      if (!le()) {
        _e();
        return;
      }
      const n = prompt(`[STUDIO] Sell ${e.playerName}
Enter buyout price:`, String(e.buyNow));
      if (!n) {
        return;
      }
      const i = parseInt(n) || e.buyNow;
      const l = e.cardId || e.id;
      const a = await ye();
      await a.mockSellCard(String(l), 0, i);
      a.useStudioAuctionsStore().addListing({
        cardId: l,
        playerName: e.playerName,
        position: e.position,
        ovr: e.ovr,
        program: e.program,
        startPrice: Math.floor(i * 0.9),
        buyoutPrice: i
      });
      a.useStudioBinderStore().removeCard(String(l));
      alert(`Listed ${e.playerName} for ${i.toLocaleString()}`);
    }
    R(n => {
      const i = new Set(n);
      i.delete(e.id);
      return i;
    });
    V.removeBought(e.id);
  };
  const [oe, ae] = F([{
    id: "player",
    label: "Player",
    width: 200,
    visible: true,
    align: "left",
    minWidth: 100
  }, {
    id: "ovr",
    label: "OVR",
    width: 40,
    visible: true,
    align: "center",
    minWidth: 25
  }, {
    id: "buyNow",
    label: "Buy Now",
    width: 64,
    visible: true,
    align: "right",
    minWidth: 45
  }, {
    id: "q3",
    label: "Q3",
    width: 64,
    visible: true,
    align: "right",
    minWidth: 45
  }, {
    id: "profit",
    label: "Profit",
    width: 56,
    visible: true,
    align: "right",
    minWidth: 40
  }, {
    id: "expires",
    label: "Exp",
    width: 48,
    visible: true,
    align: "right",
    minWidth: 30
  }, {
    id: "buy",
    label: "Action",
    width: 56,
    visible: true,
    align: "right",
    minWidth: 40
  }]);
  const [Ie, Ke] = F(false);
  const [ve, Me] = F(null);
  const [J, Ze] = F(false);
  let ie;
  const Z = Q(() => {
    const e = oe().filter(i => i.visible);
    if (!J()) {
      return e;
    }
    const n = new Set(["player", "buyNow", "profit", "buy"]);
    return e.filter(i => n.has(i.id));
  });
  const We = Q(() => J() ? Z().map(e => e.id === "player" ? "minmax(0, 1fr)" : e.id === "buy" ? "84px" : "72px").join(" ") : Z().map(e => e.id === "player" ? "minmax(180px, 1fr)" : `${e.width}px`).join(" "));
  const me = Q(() => Z().filter(e => e.id !== "player").reduce((e, n) => e + n.width, 0));
  const et = Q(() => {
    if (J()) {
      return "0px";
    }
    const e = 180;
    const n = me();
    const i = Math.max(Z().length - 1, 0) * 8;
    return `${e + n + i + 24}px`;
  });
  fe(() => {
    if (typeof window === "undefined") {
      return;
    }
    const e = window.matchMedia("(max-width: 768px)");
    const n = () => Ze(e.matches);
    n();
    e.addEventListener("change", n);
    Re(() => e.removeEventListener("change", n));
  });
  ze(() => {
    if (!ie) {
      return;
    }
    new ResizeObserver(n => {
      const i = n[0];
      if (!i || J()) {
        return;
      }
      const s = i.contentRect.width - 100 - 40;
      const x = me();
      if (x > s && s > 0) {
        const w = s / x;
        ae(B => B.map(u => {
          if (u.id === "player") {
            return u;
          }
          const h = Math.max(u.minWidth || 25, Math.floor(u.width * w));
          return {
            ...u,
            width: h
          };
        }));
      }
    }).observe(ie);
  });
  let Pe = 0;
  let he = 0;
  let ge = 0;
  let ne = null;
  let ke = "right";
  const Ee = (e, n, i) => {
    i.preventDefault();
    i.stopPropagation();
    Me(e);
    ke = n;
    Pe = i.clientX;
    he = oe().find(l => l.id === e)?.width ?? 0;
    if (n === "right") {
      const l = Z();
      const a = l.findIndex(o => o.id === e);
      if (a >= 0 && a < l.length - 1) {
        const o = l[a + 1];
        ne = o.id;
        ge = o.width;
      } else {
        ne = null;
        ge = 0;
      }
    } else {
      ne = null;
      ge = 0;
    }
    document.addEventListener("pointermove", Oe);
    document.addEventListener("pointerup", Te);
  };
  const Oe = e => {
    const n = ve();
    if (!n) {
      return;
    }
    const i = e.clientX - Pe;
    const l = oe().find(o => o.id === n);
    if (!l) {
      return;
    }
    const a = l.minWidth || 40;
    if (ke === "left") {
      const o = ie?.clientWidth ?? window.innerWidth - 100;
      const s = me() - l.width;
      const B = o - s - 100 - 32;
      const u = Math.max(a, Math.min(B, he - i));
      ae(h => h.map(y => y.id === n ? {
        ...y,
        width: u
      } : y));
    } else if (ne) {
      const s = oe().find(B => B.id === ne)?.minWidth || 40;
      let x = he + i;
      let w = ge - i;
      if (x < a) {
        const B = a - x;
        x = a;
        w = w + B;
      }
      if (w < s) {
        const B = s - w;
        w = s;
        x = x - B;
      }
      ae(B => B.map(u => u.id === n ? {
        ...u,
        width: x
      } : u.id === ne ? {
        ...u,
        width: w
      } : u));
    } else {
      const o = ie?.clientWidth ?? window.innerWidth - 100;
      const s = me() - l.width;
      const B = o - s - 100 - 32;
      const u = Math.max(a, Math.min(B, he + i));
      ae(h => h.map(y => y.id === n ? {
        ...y,
        width: u
      } : y));
    }
  };
  const Te = () => {
    Me(null);
    document.removeEventListener("pointermove", Oe);
    document.removeEventListener("pointerup", Te);
  };
  const tt = e => {
    ae(n => n.map(i => i.id === e ? {
      ...i,
      visible: !i.visible
    } : i));
  };
  ze(() => {
    if ($) {
      (async () => {
        try {
          const e = await ye();
          if (E) {
            return;
          }
          const n = () => e.createStudioDealsStore({
            maxDeals: 50,
            addInterval: 4000
          });
          const i = X ? mt(X, n) : n();
          if (i && !E) {
            A(null);
            k(i);
          }
        } catch (e) {
          if (E) {
            return;
          }
          m("error");
          A(e instanceof Error ? e.message : "Failed to load studio deals");
        }
      })();
      return;
    }
    C?.connect?.();
  });
  let Le = true;
  fe(() => {
    const e = b();
    const n = t.minProfit;
    const i = t.minOvr;
    const l = t.maxOvr;
    const a = t.minBuyNow;
    const o = t.maxBuyNow;
    const s = t.profitMetric;
    const x = t.programs;
    if (Le) {
      Le = false;
      return;
    }
    e.updateFilters?.({
      minProfit: n ?? 500,
      minOverall: i ?? 60,
      maxOverall: l ?? 99,
      minBuyNow: a ?? null,
      maxBuyNow: o ?? null,
      windowSize: s ?? 15,
      promoFilter: x && x.length > 0 ? x[0] : undefined
    });
  });
  fe(() => {
    const e = b().deals();
    if (!$ && !S) {
      vt(e.map(n => n.program));
    }
    if (e.length > 0) {
      const n = e[0]?.id;
      if (n) {
        O(new Set([n]));
        setTimeout(() => O(new Set()), 1000);
      }
    }
  });
  fe(() => {
    if (!t.onStatusChange) {
      return;
    }
    const e = b();
    t.onStatusChange(e.status(), e.messageCount());
  });
  const pe = () => !$ && !S;
  const be = Q(() => {
    const e = b().deals();
    const n = t.minProfit ?? 0;
    const i = t.minOvr ?? 0;
    const l = t.maxOvr ?? 99;
    const a = t.minBuyNow;
    const o = t.maxBuyNow;
    if (!n && !i && l === 99 && !a && !o) {
      return e;
    } else {
      return e.filter(s => !(s.profit < n) && !(s.ovr < i) && !(s.ovr > l) && (!a || !(s.buyNow < a)) && (!o || !(s.buyNow > o)));
    }
  });
  const Ae = Q(() => {
    const e = K();
    if (e === "default") {
      return be().slice(0, Ye);
    }
    const n = [...be()];
    const i = (l, a) => a.timestamp - l.timestamp;
    n.sort((l, a) => {
      switch (e) {
        case "posted_desc":
          return i(l, a);
        case "posted_asc":
          return l.timestamp - a.timestamp;
        case "profit_desc":
          return a.profit - l.profit || i(l, a);
        case "buy_now_asc":
          return l.buyNow - a.buyNow || i(l, a);
        case "buy_now_desc":
          return a.buyNow - l.buyNow || i(l, a);
        case "ovr_desc":
          return a.ovr - l.ovr || i(l, a);
        case "ovr_asc":
          return l.ovr - a.ovr || i(l, a);
        case "expires_asc":
          return Xe(l.expires) - Xe(a.expires) || i(l, a);
        case "player_asc":
          return l.playerName.localeCompare(a.playerName) || i(l, a);
        default:
          return i(l, a);
      }
    });
    return n.slice(0, Ye);
  });
  return (() => {
    var e = qt();
    var n = e.firstChild;
    var i = n.firstChild;
    var l = i.firstChild;
    var a = ie;
    if (typeof a == "function") {
      dt(a, e);
    } else {
      ie = e;
    }
    r(i, c(T, {
      get when() {
        return !J();
      },
      get children() {
        var o = zt();
        r(o, c(ee, {
          get each() {
            return Z();
          },
          children: (s, x) => (() => {
            var w = Ut();
            var B = w.firstChild;
            r(B, c(T, {
              get when() {
                return s.id === "player";
              },
              get fallback() {
                return [(() => {
                  var u = Jt();
                  r(u, () => s.label);
                  return u;
                })(), Y(() => Y(() => s.id === "q3" && !!t.profitMetric)() && (() => {
                  var u = Yt();
                  var h = u.firstChild;
                  var y = h.nextSibling;
                  y.nextSibling;
                  r(u, () => t.profitMetric, y);
                  return u;
                })())];
              },
              get children() {
                var u = jt();
                var h = u.firstChild;
                var y = h.nextSibling;
                r(h, () => s.label);
                y.$$input = z => se(z.currentTarget.value);
                r(y, c(ee, {
                  each: Ve,
                  children: z => (() => {
                    var U = Ue();
                    r(U, () => z.label);
                    I(() => U.value = z.value);
                    return U;
                  })()
                }));
                I(() => y.value = K());
                return u;
              }
            }));
            r(w, (() => {
              var u = Y(() => x() < Z().length - 1 && s.id !== "player" && !J());
              return () => u() && (() => {
                var h = Vt();
                var y = h.firstChild;
                h.$$pointerdown = z => Ee(s.id, "right", z);
                I(() => _(y, `
                                        w-0.5 h-2/3 transition-all rounded-full
                                        ${ve() === s.id ? "bg-emerald-400 w-1" : "bg-slate-500 group-hover/handle:bg-emerald-400 group-hover/handle:w-1"}
                                    `));
                return h;
              })();
            })(), null);
            r(w, (() => {
              var u = Y(() => s.id !== "player" && x() === 1 && !J());
              return () => u() && (() => {
                var h = Xt();
                var y = h.firstChild;
                h.$$pointerdown = z => Ee(s.id, "left", z);
                I(() => _(y, `
                                        w-0.5 h-2/3 transition-all rounded-full
                                        ${ve() === s.id ? "bg-emerald-400 w-1" : "bg-slate-500 group-hover/handle:bg-emerald-400 group-hover/handle:w-1"}
                                    `));
                return h;
              })();
            })(), null);
            I(() => _(B, `flex-1 min-w-0 ${s.align === "center" ? "text-center" : s.align === "right" ? "text-right" : "text-left"}`));
            return w;
          })()
        }), null);
        r(o, c(T, {
          get when() {
            return !J();
          },
          get children() {
            var s = Rt();
            var x = s.firstChild;
            var w = x.firstChild;
            var B = w.nextSibling;
            var u = x.nextSibling;
            r(B, () => b().messageCount());
            u.$$click = () => Ke(h => !h);
            r(u, c(rt, {
              class: "w-3 h-3"
            }));
            r(s, c(T, {
              get when() {
                return Ie();
              },
              get children() {
                var h = Dt();
                var y = h.firstChild;
                var z = y.nextSibling;
                r(z, c(ee, {
                  get each() {
                    return oe();
                  },
                  children: U => (() => {
                    var de = Ht();
                    var De = de.firstChild;
                    de.$$click = () => tt(U.id);
                    r(De, (() => {
                      var we = Y(() => !!U.visible);
                      return () => we() ? c(it, {
                        class: "w-3 h-3 text-emerald-400"
                      }) : Gt();
                    })(), null);
                    r(De, () => U.label, null);
                    r(de, (() => {
                      var we = Y(() => !U.visible);
                      return () => we() && c(nt, {
                        class: "w-2.5 h-2.5 opacity-50"
                      });
                    })(), null);
                    I(() => _(de, `w-full flex items-center justify-between px-2 py-1.5 rounded transition-all text-[11px] ${U.visible ? "text-slate-200 hover:bg-slate-700/50" : "text-slate-600 hover:bg-slate-700/30"}`));
                    return de;
                  })()
                }));
                return h;
              }
            }), null);
            I(h => {
              var y = `w-1.5 h-1.5 rounded-full ${b().status() === "connected" ? "bg-emerald-400 animate-pulse" : "bg-slate-500"}`;
              var z = b().status();
              var U = `p-1 rounded bg-slate-800/80 border border-slate-700/50 text-slate-500 hover:text-slate-300 transition-colors opacity-0 group-hover/header:opacity-100 ${Ie() ? "text-emerald-400 bg-emerald-500/10 opacity-100" : ""}`;
              if (y !== h.e) {
                _(w, h.e = y);
              }
              if (z !== h.t) {
                st(w, "title", h.t = z);
              }
              if (U !== h.a) {
                _(u, h.a = U);
              }
              return h;
            }, {
              e: undefined,
              t: undefined,
              a: undefined
            });
            return s;
          }
        }), null);
        I(s => ce(o, "grid-template-columns", We()));
        return o;
      }
    }), l);
    r(i, c(T, {
      get when() {
        return J();
      },
      get children() {
        var o = Ft();
        var s = o.firstChild;
        s.$$input = x => se(x.currentTarget.value);
        r(s, c(ee, {
          each: Ve,
          children: x => (() => {
            var w = Ue();
            r(w, () => x.label);
            I(() => w.value = x.value);
            return w;
          })()
        }));
        I(() => s.value = K());
        return o;
      }
    }), l);
    r(l, c(T, {
      get when() {
        return Ae().length > 0;
      },
      get fallback() {
        return (() => {
          var o = rr();
          r(o, c(T, {
            get when() {
              return Y(() => !!pe())() && b().status() === "connecting";
            },
            get children() {
              return [c(lt, {
                class: "w-6 h-6 mb-2 animate-spin"
              }), Qt()];
            }
          }), null);
          r(o, c(T, {
            get when() {
              return Y(() => !!pe())() && b().status() === "error";
            },
            get children() {
              return [c(ot, {
                class: "w-6 h-6 mb-2 text-rose-400"
              }), (() => {
                var s = Kt();
                r(s, () => b().error() || "Connection failed");
                return s;
              })(), (() => {
                var s = Zt();
                s.$$click = () => b().connect?.();
                return s;
              })()];
            }
          }), null);
          r(o, c(T, {
            get when() {
              return Y(() => !pe() || b().status() === "disconnected")() && b().deals().length === 0;
            },
            get children() {
              return er();
            }
          }), null);
          r(o, c(T, {
            get when() {
              return Y(() => b().deals().length > 0)() && be().length === 0;
            },
            get children() {
              return tr();
            }
          }), null);
          return o;
        })();
      },
      get children() {
        return c(ee, {
          get each() {
            return Ae();
          },
          children: o => c(T, {
            get when() {
              return J();
            },
            get fallback() {
              return c(nr, {
                deal: o,
                get columns() {
                  return Z();
                },
                get gridTemplateColumns() {
                  return We();
                },
                get isMobile() {
                  return J();
                },
                get isNew() {
                  return M().has(o.id);
                },
                get isBought() {
                  return Ce(o.id);
                },
                get isAdminMode() {
                  return t.isAdminMode;
                },
                onClick: () => Ne(o),
                onBuy: () => Se(o),
                onSell: () => Be(o)
              });
            },
            get children() {
              return c(sr, {
                deal: o,
                get isNew() {
                  return M().has(o.id);
                },
                get isBought() {
                  return Ce(o.id);
                },
                get isAdminMode() {
                  return t.isAdminMode;
                },
                onAddToWatchlist: () => Ne(o),
                onBuy: () => Se(o),
                onSell: () => Be(o)
              });
            }
          })
        });
      }
    }));
    r(e, c(pt, {
      get isOpen() {
        return G();
      },
      onClose: () => W(false)
    }), null);
    I(o => ce(i, "min-width", et()));
    return e;
  })();
};
ut(["click", "input", "pointerdown"]);
export { Ve as DEAL_SORT_OPTIONS, hr as DealTableContent };