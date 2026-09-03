import { c as E, o as ie, t as r, i as t, m as q, h as U, s as j, b as l, C as X, l as ue, S as c, x as he, D as me, E as De, F as ge, G as Ue, H as Oe, p as We, I as He, d as J, J as ze, K as oe, q as Be, L as ae, w as N, M as Re, N as Ne, O as fe, P as je, Q as Fe, R as Ge, T as Ke, U as Ve, V as qe, W as Xe, X as Je, Y as Qe, Z as Ye, _ as xe, $ as Ze, a0 as et, a1 as tt } from "./icons.js";
import { u as lt, a as rt, b as at, t as pe, w as re, c as nt, g as st, p as it, d as ot } from "./index.js";
import { u as dt } from "./binderStore.js";
import "./analytics.js";
import "./binderService.js";
const ne = "mutd_device_id";
function be() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID == "function") {
    return crypto.randomUUID();
  } else {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
      const a = Math.random() * 16 | 0;
      return (e === "x" ? a : a & 3 | 8).toString(16);
    });
  }
}
function we(e) {
  try {
    const i = window.location.hostname.endsWith("mutdashboard.com");
    const m = i ? "; Domain=.mutdashboard.com" : "";
    const b = i || window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${ne}=${e}; Path=/${m}; Max-Age=31536000; SameSite=Lax${b}`;
  } catch {}
}
function Ce() {
  if (typeof window === "undefined") {
    return "";
  }
  try {
    let e = window.localStorage.getItem(ne);
    if (!e) {
      e = be();
      window.localStorage.setItem(ne, e);
    }
    we(e);
    return e;
  } catch {
    const e = be();
    we(e);
    return e;
  }
}
const ct = "https://app.mutdashboard.com";
const ut = new Set(["app.mutdashboard.com", "mutdashboard.com", "www.mutdashboard.com"]);
function Le(e) {
  const a = e.replace(/^\[(.*)\]$/, "$1").toLowerCase();
  return a === "localhost" || a === "127.0.0.1" || a === "::1";
}
function ht() {
  try {
    return Le(new URL(window.location.href).hostname);
  } catch {
    return false;
  }
}
const _e = "https://mutdashboard.com/#account";
const mt = "https://mutdashboard.com/#faq";
function gt() {
  return "https://api.mutdashboard.com";
}
function Ee(e) {
  const a = gt().replace(/\/$/, "");
  const i = e.startsWith("/") ? e : `/${e}`;
  return `${a}${i}`;
}
function se() {
  try {
    const e = new URL(window.location.href);
    if (ut.has(e.host) || Le(e.hostname)) {
      return `${e.origin}${e.pathname}${e.search}${e.hash}`;
    }
  } catch {}
  return ct;
}
function ft(e, a) {
  const i = a?.next ?? se();
  const m = "1";
  const b = new URLSearchParams({
    next: i,
    popup: m
  });
  const k = Ce();
  if (k) {
    b.set("device_id", k);
  }
  return Ee(`/auth/${e}?${b.toString()}`);
}
function xt(e, a = "auth_popup") {
  try {
    const b = window.screenLeft ?? window.screenX ?? 0;
    const k = window.screenTop ?? window.screenY ?? 0;
    const f = window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;
    const y = window.innerHeight ?? document.documentElement.clientHeight ?? screen.height;
    const S = Math.max(0, (f - 520) / 2 + b);
    const L = `scrollbars=yes,width=520,height=640,top=${Math.max(0, (y - 640) / 2 + k)},left=${S}`;
    const C = window.open(e, a, L);
    if (!C || C.closed) {
      window.location.assign(e);
      return;
    }
    C.focus();
  } catch {
    window.location.assign(e);
  }
}
var pt = r("<div class=relative><button class=\"flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-white/10 transition-all duration-200\">");
var bt = r("<img class=\"h-8 w-8 rounded-lg object-cover ring-2 ring-slate-700/50\">");
var wt = r("<div class=\"flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 text-sm font-medium text-white ring-2 ring-slate-700/50\">");
var _t = r("<div class=\"fixed inset-0 z-10\">");
var $e = r("<button class=\"flex w-full items-center gap-2 px-4 py-2.5 text-sm text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 hover:text-emerald-300 transition-all duration-200 border-b border-white/5\">Link EA Account");
var ve = r("<div class=\"px-3 py-3 border-b border-white/5 bg-amber-500/10 relative\"><button title=Dismiss class=\"absolute top-1 right-1 p-1 rounded-md text-amber-500/70 hover:bg-amber-500/20 hover:text-amber-300 transition-colors\"></button><div class=\"flex items-start gap-2 pr-4\"><p class=\"text-xs text-amber-200/90 leading-relaxed\"><strong>Note:</strong> If you are not a premium paid founder, you will need to download the desktop application in order to sync your account.");
var $t = r("<button class=\"flex w-full items-center gap-2 px-4 py-2.5 text-sm text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 hover:text-amber-300 transition-all duration-200 border-b border-white/5\">Unlink EA Account");
var vt = r("<div class=\"absolute right-0 top-full z-20 mt-2 w-64 rounded-xl border border-slate-700/50 bg-[#1a1a24]/90 backdrop-blur-xl shadow-2xl shadow-black/50\"><div class=\"border-b border-slate-700/30 px-4 py-3 bg-white/[0.02]\"><p class=\"text-sm font-medium text-slate-100\"></p></div><div class=py-1><button class=\"flex w-full items-center gap-2 px-4 py-2.5 text-sm text-amber-300 hover:bg-amber-500/10 hover:text-amber-200 transition-all duration-200 border-b border-white/5\">Join Android Beta</button><button class=\"flex w-full items-center gap-2 px-4 py-2.5 text-sm text-sky-300 hover:bg-sky-500/10 hover:text-sky-200 transition-all duration-200 border-b border-white/5\">Join iPhone Beta</button><button class=\"flex w-full items-center gap-2 px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-all duration-200\">Profile</button><button class=\"flex w-full items-center gap-2 px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-all duration-200\">Settings</button><div class=\"my-1 border-t border-slate-700/30\"></div><button class=\"flex w-full items-center gap-2 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-200\">Logout");
var kt = r("<p class=\"text-xs text-slate-400 mt-0.5\">");
var yt = r("<a download target=_blank rel=\"noopener noreferrer\"class=\"flex w-full items-center gap-2 px-4 py-2.5 text-sm text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 transition-all duration-200\">");
const St = "phc_ELdoLRQ2KfDI6teJuoCICC9Gf0btcmc6TjIsrKgryzW";
const Ct = "https://us.i.posthog.com";
function Lt(e) {
  const a = typeof e.userId == "number" && e.userId > 0 ? `user_${e.userId}` : e.email || `download_${Date.now()}`;
  const i = {
    api_key: St,
    event: "desktop_app_download_clicked",
    distinct_id: a,
    properties: {
      ...re(),
      source: "user_menu",
      platform: e.platform,
      os: e.platform === "windows" ? "Windows" : e.platform === "macos" ? "macOS" : re().os,
      os_name: e.platform === "windows" ? "Windows" : e.platform === "macos" ? "macOS" : re().os_name,
      label: e.label,
      url: e.url,
      has_user: !!e.email
    }
  };
  nt("desktop_app_download_clicked", {
    source: "user_menu",
    platform: e.platform,
    os: e.platform === "windows" ? "Windows" : e.platform === "macos" ? "macOS" : undefined,
    label: e.label
  });
  fetch(`${Ct}/capture/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(i),
    keepalive: true
  }).catch(() => {});
}
function Et(e) {
  const [a, i] = E(false);
  const [m, b] = E(null);
  const [k, f] = E(true);
  const y = lt();
  const S = rt();
  const A = at();
  ie(async () => {
    b(await st());
  });
  const L = () => e.user?.name || "User";
  const C = () => L().split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
  return (() => {
    var w = pt();
    var $ = w.firstChild;
    $.$$click = () => i(!a());
    t($, (() => {
      var v = q(() => !!e.user?.avatarUrl);
      return () => v() ? (() => {
        var h = bt();
        U(g => {
          var H = e.user.avatarUrl;
          var P = L();
          if (H !== g.e) {
            j(h, "src", g.e = H);
          }
          if (P !== g.t) {
            j(h, "alt", g.t = P);
          }
          return g;
        }, {
          e: undefined,
          t: undefined
        });
        return h;
      })() : (() => {
        var h = wt();
        t(h, C);
        return h;
      })();
    })(), null);
    t($, l(X, {
      class: "h-4 w-4 text-slate-400"
    }), null);
    t(w, (() => {
      var v = q(() => !!a());
      return () => v() && [(() => {
        var h = _t();
        h.$$click = () => i(false);
        return h;
      })(), (() => {
        var h = vt();
        var g = h.firstChild;
        var H = g.firstChild;
        var P = g.nextSibling;
        var I = P.firstChild;
        var F = I.firstChild;
        var x = I.nextSibling;
        var T = x.firstChild;
        var M = x.nextSibling;
        var D = M.firstChild;
        var p = M.nextSibling;
        var n = p.firstChild;
        var z = p.nextSibling;
        var O = z.nextSibling;
        var W = O.firstChild;
        t(H, L);
        t(g, (() => {
          var s = q(() => !!e.user?.email);
          return () => s() && (() => {
            var d = kt();
            t(d, () => e.user.email);
            return d;
          })();
        })(), null);
        t(P, l(c, {
          when: !y,
          get children() {
            return [(() => {
              var s = $e();
              var d = s.firstChild;
              s.$$click = () => {
                e.onLinkEaAccount?.();
                i(false);
              };
              t(s, l(ue, {
                class: "h-4 w-4"
              }), d);
              return s;
            })(), l(c, {
              get when() {
                return k();
              },
              get children() {
                var s = ve();
                var d = s.firstChild;
                var R = d.nextSibling;
                var G = R.firstChild;
                d.$$click = K => {
                  K.stopPropagation();
                  f(false);
                };
                t(d, l(he, {
                  class: "w-3.5 h-3.5"
                }));
                t(R, l(me, {
                  class: "w-4 h-4 text-amber-500 shrink-0 mt-0.5"
                }), G);
                return s;
              }
            })];
          }
        }), I);
        t(P, l(c, {
          get when() {
            return y && !S();
          },
          get children() {
            return [(() => {
              var s = $e();
              var d = s.firstChild;
              s.$$click = () => {
                A();
                i(false);
              };
              t(s, l(ue, {
                class: "h-4 w-4"
              }), d);
              return s;
            })(), l(c, {
              get when() {
                return k();
              },
              get children() {
                var s = ve();
                var d = s.firstChild;
                var R = d.nextSibling;
                var G = R.firstChild;
                d.$$click = K => {
                  K.stopPropagation();
                  f(false);
                };
                t(d, l(he, {
                  class: "w-3.5 h-3.5"
                }));
                t(R, l(me, {
                  class: "w-4 h-4 text-amber-500 shrink-0 mt-0.5"
                }), G);
                return s;
              }
            })];
          }
        }), I);
        t(P, l(c, {
          get when() {
            return q(() => !!e.eaLinked)() && e.onUnlinkEaAccount;
          },
          get children() {
            var s = $t();
            var d = s.firstChild;
            s.$$click = () => {
              e.onUnlinkEaAccount?.();
              i(false);
            };
            t(s, l(De, {
              class: "h-4 w-4"
            }), d);
            return s;
          }
        }), I);
        I.$$click = () => {
          pe("android_beta_dashboard_cta_clicked", {
            source_surface: "dashboard_user_menu"
          });
          window.open("https://mutdashboard.com/android-beta?source_surface=dashboard_user_menu", "_blank", "noopener,noreferrer");
          i(false);
        };
        t(I, l(ge, {
          class: "h-4 w-4"
        }), F);
        x.$$click = () => {
          pe("ios_beta_dashboard_cta_clicked", {
            source_surface: "dashboard_user_menu"
          });
          window.open("https://mutdashboard.com/ios-beta?source_surface=dashboard_user_menu", "_blank", "noopener,noreferrer");
          i(false);
        };
        t(x, l(ge, {
          class: "h-4 w-4"
        }), T);
        M.$$click = () => {
          window.location.href = _e;
        };
        t(M, l(Ue, {
          class: "h-4 w-4"
        }), D);
        p.$$click = () => {
          window.location.href = _e;
        };
        t(p, l(Oe, {
          class: "h-4 w-4"
        }), n);
        t(P, l(c, {
          get when() {
            return m();
          },
          children: s => (() => {
            var d = yt();
            d.$$click = () => {
              Lt({
                userId: e.user?.id,
                email: e.user?.email,
                platform: s().platform,
                label: s().label,
                url: s().url
              });
              i(false);
            };
            t(d, l(We, {
              class: "h-4 w-4"
            }), null);
            t(d, () => s().label, null);
            U(() => j(d, "href", s().url));
            return d;
          })()
        }), z);
        O.$$click = () => {
          e.onLogout?.();
          i(false);
        };
        t(O, l(He, {
          class: "h-4 w-4"
        }), W);
        return h;
      })()];
    })(), null);
    return w;
  })();
}
J(["click"]);
var At = r("<button type=button class=\"flex items-center text-sm text-slate-400 hover:text-slate-200 transition-colors\">Back to sign-in options");
var It = r("<div class=\"rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-300\">");
var ke = r("<span>");
var Tt = r("<div class=\"w-72 space-y-4\"><div class=text-center><h2 class=\"text-base font-semibold text-slate-100\"></h2><p class=\"text-xs text-slate-400 mt-1\"></p></div><form class=space-y-3><div class=space-y-1.5><label for=sign-in-email class=\"text-xs font-medium text-slate-300\">Email</label><input id=sign-in-email type=email placeholder=you@example.com required class=\"w-full rounded-lg border border-slate-600 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50\"></div><div class=space-y-1.5><label for=sign-in-password class=\"text-xs font-medium text-slate-300\">Password</label><input id=sign-in-password type=password placeholder=•••••••• required minlength=8 class=\"w-full rounded-lg border border-slate-600 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50\"></div><button type=submit class=\"w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2\"></button></form><div class=\"text-center text-xs\"><button type=button class=\"text-emerald-400 hover:text-emerald-300 transition-colors\">");
function Mt(e) {
  const [a, i] = E(true);
  const [m, b] = E(false);
  const [k, f] = E(null);
  const [y, S] = E("");
  const [A, L] = E("");
  const C = async w => {
    w.preventDefault();
    b(true);
    f(null);
    const $ = a() ? "/auth/login" : "/auth/signup";
    try {
      const v = new FormData();
      v.append("email", y());
      v.append("password", A());
      v.append("next", se());
      const h = await fetch(Ee($), {
        method: "POST",
        body: v,
        credentials: "include",
        headers: {
          "X-Device-Id": Ce()
        }
      });
      const g = await h.json();
      if (h.ok && g.success) {
        window.location.href = ht() ? se() : g.redirect_url || "https://app.mutdashboard.com";
        return;
      }
      f(g.detail || "Sign in failed. Please try again.");
    } catch {
      f("Network error. Please check your connection and try again.");
    } finally {
      b(false);
    }
  };
  return (() => {
    var w = Tt();
    var $ = w.firstChild;
    var v = $.firstChild;
    var h = v.nextSibling;
    var g = $.nextSibling;
    var H = g.firstChild;
    var P = H.firstChild;
    var I = P.nextSibling;
    var F = H.nextSibling;
    var x = F.firstChild;
    var T = x.nextSibling;
    var M = F.nextSibling;
    var D = g.nextSibling;
    var p = D.firstChild;
    t(w, l(c, {
      get when() {
        return e.onBack;
      },
      get children() {
        var n = At();
        var z = n.firstChild;
        n.$$click = () => e.onBack?.();
        t(n, l(ze, {
          class: "h-4 w-4 mr-1"
        }), z);
        return n;
      }
    }), $);
    t($, l(oe, {
      class: "h-8 w-8 mx-auto text-emerald-400 mb-2"
    }), v);
    t(v, () => a() ? "Sign in with Email" : "Create Account");
    t(h, () => a() ? "Enter your email and password" : "Create a new account with email");
    g.addEventListener("submit", C);
    I.$$input = n => S(n.currentTarget.value);
    T.$$input = n => L(n.currentTarget.value);
    t(g, l(c, {
      get when() {
        return k();
      },
      get children() {
        var n = It();
        t(n, k);
        return n;
      }
    }), M);
    t(M, l(c, {
      get when() {
        return m();
      },
      get fallback() {
        return (() => {
          var n = ke();
          t(n, () => a() ? "Sign In" : "Create Account");
          return n;
        })();
      },
      get children() {
        return [l(Be, {
          class: "h-4 w-4 animate-spin"
        }), (() => {
          var n = ke();
          t(n, () => a() ? "Signing in..." : "Creating account...");
          return n;
        })()];
      }
    }));
    p.$$click = () => {
      i(!a());
      f(null);
    };
    t(p, () => a() ? "Don't have an account? Sign up" : "Already have an account? Sign in");
    U(n => {
      var z = m();
      var O = m();
      var W = m();
      if (z !== n.e) {
        I.disabled = n.e = z;
      }
      if (O !== n.t) {
        T.disabled = n.t = O;
      }
      if (W !== n.a) {
        M.disabled = n.a = W;
      }
      return n;
    }, {
      e: undefined,
      t: undefined,
      a: undefined
    });
    U(() => I.value = y());
    U(() => T.value = A());
    return w;
  })();
}
J(["click", "input"]);
var Pt = r("<svg width=18 height=18 viewBox=\"0 0 24 24\"fill=none aria-hidden=true><path d=\"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z\"fill=#4285F4></path><path d=\"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z\"fill=#34A853></path><path d=\"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z\"fill=#FBBC05></path><path d=\"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z\"fill=#EA4335>");
var Dt = r("<svg width=18 height=18 viewBox=\"0 0 24 24\"fill=none aria-hidden=true><path d=\"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.082.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9460 2.4189-2.1568 2.4189Z\"fill=#5865F2>");
var Ut = r("<svg width=18 height=18 viewBox=\"0 0 24 24\"fill=none aria-hidden=true><path d=\"M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24L11.143 19.714h4.286L22 13.143V0zm14.571 12.571l-2.857 2.857H13.43l-2.572 2.571v-2.571H6.571V1.714h14.286v10.857z\"fill=#9146FF>");
var Ot = r("<svg width=18 height=18 viewBox=\"0 0 24 24\"fill=none aria-hidden=true><path d=\"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z\"fill=#E2E8F0>");
var Wt = r("<div class=\"fixed inset-0 z-10\">");
var Ht = r("<p class=\"px-1 pb-2 text-xs text-slate-400\">Sign in with:");
var zt = r("<div class=space-y-1>");
var Bt = r("<div class=\"absolute top-full right-0 mt-2 z-20 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-xl shadow-black/30 p-3\"role=menu>");
var Rt = r("<div class=relative><button type=button class=\"inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs sm:text-sm font-medium text-emerald-300 hover:bg-emerald-500/20 transition-colors\"title=\"Sign in to MUT Dashboard\"aria-haspopup=menu>Sign In");
var Nt = r("<button type=button class=\"w-full min-w-[14rem] flex items-center gap-3 px-3 py-2.5 text-sm text-left text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors\"role=menuitem><span class=\"flex h-5 w-5 items-center justify-center flex-shrink-0\"></span>Continue with ");
const jt = () => Pt();
const Ft = () => Dt();
const Gt = () => Ut();
const Kt = () => Ot();
const Vt = [{
  id: "email",
  label: "Email",
  isEmail: true,
  icon: () => l(oe, {
    class: "h-4 w-4 text-slate-300"
  })
}, {
  id: "google",
  label: "Google",
  provider: "google",
  icon: jt
}, {
  id: "discord",
  label: "Discord",
  provider: "discord",
  icon: Ft
}, {
  id: "twitch",
  label: "Twitch",
  provider: "twitch",
  icon: Gt
}, {
  id: "x",
  label: "X",
  provider: "x",
  icon: Kt
}];
function qt() {
  const [e, a] = E(false);
  const [i, m] = E(false);
  const b = () => {
    a(false);
    m(false);
  };
  const k = f => {
    if (f.isEmail) {
      m(true);
      return;
    }
    if (f.provider) {
      b();
      xt(ft(f.provider, {}));
    }
  };
  return (() => {
    var f = Rt();
    var y = f.firstChild;
    y.firstChild;
    y.$$click = () => a(!e());
    t(y, l(X, {
      get class() {
        return `h-3 w-3 transition-transform ${e() ? "rotate-180" : ""}`;
      }
    }), null);
    t(f, l(c, {
      get when() {
        return e();
      },
      get children() {
        return [(() => {
          var S = Wt();
          S.$$click = b;
          return S;
        })(), (() => {
          var S = Bt();
          t(S, l(c, {
            get when() {
              return !i();
            },
            get fallback() {
              return l(Mt, {
                onBack: () => m(false)
              });
            },
            get children() {
              return [Ht(), (() => {
                var A = zt();
                t(A, l(ae, {
                  each: Vt,
                  children: L => (() => {
                    var C = Nt();
                    var w = C.firstChild;
                    w.nextSibling;
                    C.$$click = () => k(L);
                    t(w, l(L.icon, {}));
                    t(C, () => L.label, null);
                    return C;
                  })()
                }));
                return A;
              })()];
            }
          }));
          return S;
        })()];
      }
    }), null);
    U(() => j(y, "aria-expanded", e()));
    return f;
  })();
}
J(["click"]);
var Xt = r("<div class=\"absolute top-full mt-2 left-0 md:left-auto md:right-0 w-48 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-xl shadow-black/30 py-2 z-50\">");
var Jt = r("<span class=\"text-sm font-bold text-white\">");
var Qt = r("<div class=\"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20\"><div class=text-right><p class=\"text-[9px] uppercase tracking-wider text-purple-500/80\">Training</p><span class=\"text-sm font-bold text-purple-400\">");
var Yt = r("<div class=\"absolute top-full mt-2 right-0 w-48 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-xl shadow-black/30 py-2 z-50\">");
var Zt = r("<div class=\"absolute top-full mt-2 right-0 w-max min-w-[14rem] bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-xl shadow-black/30 py-2 z-50\"><a target=_blank rel=\"noopener noreferrer\"class=\"w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors whitespace-nowrap\">FAQ</a><a href=mailto:support@mutdashboard.com class=\"w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors whitespace-nowrap\">support@mutdashboard.com</a><a href=https://x.com/mutdashboard target=_blank rel=\"noopener noreferrer\"class=\"w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors whitespace-nowrap\">@mutdashboard on X");
var el = r("<header class=\"flex h-14 items-center justify-between border-b border-slate-700/30 bg-[#121218]/70 backdrop-blur-xl px-2 sm:px-4 relative z-50\"><div class=\"absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none\"></div><div class=\"flex items-center gap-2 sm:gap-4 min-w-0 relative z-10\"><div class=\"flex items-center gap-2 min-w-0\"><div class=\"w-8 h-8 flex-shrink-0 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center\"></div><span class=\"hidden sm:inline text-lg font-bold text-white truncate\"></span></div><div class=\"hidden md:block h-6 w-px bg-slate-700/50 dark:bg-slate-700/50\"></div><div class=\"hidden lg:flex items-center gap-2\"><select class=\"rounded-lg border border-slate-600 bg-slate-800 dark:bg-slate-800 px-3 py-1.5 text-sm text-slate-200 hover:bg-slate-700 transition-colors focus:ring-2 focus:ring-emerald-500/50 focus:outline-none [&amp;>option]:bg-slate-800 [&amp;>option]:text-slate-200\"style=color-scheme:dark><option value=default class=\"bg-slate-800 text-slate-200\">Default Workspace</option></select></div><div class=relative><button class=\"flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 px-2.5 sm:px-4 py-2 text-sm font-medium text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:from-emerald-500 hover:to-emerald-400 transition-all duration-200\"title=\"Add Panel\"><span class=\"hidden md:inline\">Add Panel</span></button></div><div class=\"hidden md:flex items-center gap-3\"><div class=\"flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20\"><img src=/coin.png alt=Coins class=\"w-4 h-4\"><div class=text-right><p class=\"text-[9px] uppercase tracking-wider text-emerald-500/80\">Coins</p></div></div><button title=\"Refresh wallet\"></button></div></div><div class=\"ml-auto flex items-center gap-1 sm:gap-3 flex-shrink-0 relative z-10\"><div class=\"hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20\"><div class=\"w-2 h-2 rounded-full bg-emerald-500 animate-pulse\"></div><span class=\"text-xs font-medium text-emerald-400\">Connected</span></div><div class=relative><button class=\"flex items-center gap-2 rounded-lg px-3 py-2 text-slate-400 hover:text-slate-200 hover:bg-white/10 transition-all duration-200\"title=\"Change theme\"><span class=\"hidden sm:inline text-lg\"></span></button></div><div class=\"relative hidden md:block\"><button class=\"flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-400 hover:text-slate-200 hover:bg-white/10 focus:outline-none focus:ring-0 outline-none transition-all duration-200\">Help</button></div><button class=\"p-1.5 rounded-lg hover:bg-white/10 text-slate-500 hover:text-slate-300 transition-colors\"title=\"Collapse header\">");
var tl = r("<span class=\"text-xs font-bold text-emerald-400\">");
var ll = r("<div class=\"flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20\"><img src=/coin.png alt=Coins class=\"w-3 h-3\">");
var rl = r("<span class=\"text-xs font-bold text-purple-400\">");
var al = r("<div class=\"flex items-center gap-1.5 px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20\">");
var nl = r("<div class=\"w-2 h-2 rounded-full bg-red-500\">");
var sl = r("<div class=\"flex h-6 items-center justify-between border-b border-slate-700/30 bg-[#121218]/70 backdrop-blur-xl px-3 relative z-50\"><button class=\"flex items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors\"title=\"Expand header\"></button><div class=\"flex items-center gap-2\"><div class=\"w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]\"title=Connected></div></div><button class=\"flex items-center justify-center w-5 h-5 rounded bg-emerald-600/80 hover:bg-emerald-500 text-white text-xs font-bold transition-colors\"title=\"Add Panel\">");
var ye = r("<span class=\"text-[10px] text-slate-400\">...");
var il = r("<option class=\"bg-slate-800 text-slate-200\">");
var ol = r("<button class=\"w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors\">");
var dl = r("<span class=\"text-xs text-slate-400\">Loading...");
var cl = r("<span class=\"text-xs text-red-400\">Error");
var ul = r("<button><span class=text-lg>");
const hl = [{
  type: "DEAL_TABLE",
  label: "Deal Table",
  icon: je
}, {
  type: "BINDER",
  label: "Binder",
  icon: Fe
}, {
  type: "LIVE_AUCTION_SEARCH",
  label: "Live Auction Search",
  icon: Ge
}, {
  type: "MARKET_GRAPH",
  label: "Market Graph",
  icon: Ke
}, {
  type: "SET_BUILDER",
  label: "Set Builder",
  icon: Ve
}, {
  type: "LINEUP_BUILDER",
  label: "Lineup Builder",
  icon: qe
}, {
  type: "TEAM_VIEW",
  label: "My Team",
  icon: Xe
}, {
  type: "WATCHLIST",
  label: "Watchlist",
  icon: Je
}];
const Se = [{
  id: "theme-dark",
  label: "Default Dark",
  emoji: "🌙"
}, {
  id: "theme-intense-green",
  label: "Intense Green",
  emoji: "🔥"
}, {
  id: "theme-paper-green",
  label: "Paper Green",
  emoji: "📄"
}, {
  id: "theme-ocean-blue",
  label: "Ocean Blue",
  emoji: "🌊"
}, {
  id: "theme-midnight",
  label: "Midnight",
  emoji: "🌌"
}, {
  id: "theme-light",
  label: "Light Mode",
  emoji: "☀️"
}];
function ml(e) {
  const a = dt();
  const [i, m] = E(false);
  const [b, k] = E(false);
  const [f, y] = E(false);
  const [S, A] = E(false);
  const L = N(() => a.wallet());
  const C = N(() => L().coins);
  const w = N(() => L().training);
  const $ = N(() => a.walletLoading());
  const v = N(() => a.walletError());
  const h = N(() => !!v());
  const g = N(() => w() > 0);
  ie(async () => {
    if (!e.isStudioMode) {
      await a.loadWalletOnly();
    }
  });
  const H = async () => {
    if (!e.isStudioMode) {
      await a.loadWalletOnly();
    }
  };
  const P = x => {
    e.onChangeTheme?.(x);
    y(false);
  };
  const I = x => {
    e.onAddPanel?.(x);
    k(false);
  };
  const F = () => Se.find(T => T.id === e.currentTheme)?.emoji || "🎨";
  return l(c, {
    get when() {
      return !i();
    },
    get fallback() {
      return (() => {
        var x = sl();
        var T = x.firstChild;
        var M = T.nextSibling;
        var D = M.nextSibling;
        T.$$click = () => m(false);
        t(T, l(X, {
          class: "w-3.5 h-3.5"
        }));
        t(x, l(c, {
          get when() {
            return !h();
          },
          get children() {
            var p = ll();
            p.firstChild;
            t(p, l(c, {
              get when() {
                return !$();
              },
              get fallback() {
                return ye();
              },
              get children() {
                var n = tl();
                t(n, () => C().toLocaleString());
                return n;
              }
            }), null);
            return p;
          }
        }), D);
        t(x, l(c, {
          get when() {
            return q(() => !h())() && g();
          },
          get children() {
            var p = al();
            t(p, l(c, {
              get when() {
                return !$();
              },
              get fallback() {
                return ye();
              },
              get children() {
                var n = rl();
                t(n, () => w().toLocaleString());
                return n;
              }
            }));
            return p;
          }
        }), D);
        t(x, l(c, {
          get when() {
            return h();
          },
          get children() {
            var p = nl();
            U(() => j(p, "title", v() || "Error loading wallet"));
            return p;
          }
        }), D);
        D.$$click = () => e.onAddPanel?.("DEAL_TABLE");
        t(D, l(fe, {
          class: "w-3 h-3"
        }));
        return x;
      })();
    },
    get children() {
      var x = el();
      var T = x.firstChild;
      var M = T.nextSibling;
      var D = M.firstChild;
      var p = D.firstChild;
      var n = p.nextSibling;
      var z = D.nextSibling;
      var O = z.nextSibling;
      var W = O.firstChild;
      W.firstChild;
      var s = O.nextSibling;
      var d = s.firstChild;
      var R = d.firstChild;
      var G = s.nextSibling;
      var K = G.firstChild;
      var Ae = K.firstChild;
      var de = Ae.nextSibling;
      de.firstChild;
      var V = K.nextSibling;
      var ce = M.nextSibling;
      var Ie = ce.firstChild;
      var Q = Ie.nextSibling;
      var Y = Q.firstChild;
      var Te = Y.firstChild;
      var Z = Q.nextSibling;
      var ee = Z.firstChild;
      ee.firstChild;
      var te = Z.nextSibling;
      t(p, l(Re, {
        class: "h-5 w-5 text-white"
      }));
      t(n, () => e.logo || "MUT Dashboard");
      t(O, l(Ne, {
        class: "h-4 w-4 text-slate-400"
      }), W);
      W.addEventListener("change", o => e.onSelectWorkspace?.(o.currentTarget.value));
      t(W, () => e.workspacePresets?.map(o => (() => {
        var u = il();
        t(u, () => o.name);
        U(() => u.value = o.id);
        return u;
      })()), null);
      d.$$click = () => k(!b());
      t(d, l(fe, {
        class: "h-4 w-4"
      }), R);
      t(d, l(X, {
        get class() {
          return `h-3 w-3 transition-transform ${b() ? "rotate-180" : ""}`;
        }
      }), null);
      t(s, l(c, {
        get when() {
          return b();
        },
        get children() {
          var o = Xt();
          t(o, l(ae, {
            each: hl,
            children: u => (() => {
              var _ = ol();
              _.$$click = () => I(u.type);
              t(_, l(u.icon, {
                class: "h-4 w-4 text-slate-400"
              }), null);
              t(_, () => u.label, null);
              return _;
            })()
          }));
          return o;
        }
      }), null);
      t(de, l(c, {
        get when() {
          return !$();
        },
        get fallback() {
          return dl();
        },
        get children() {
          return l(c, {
            get when() {
              return !h();
            },
            get fallback() {
              return (() => {
                var o = cl();
                U(() => j(o, "title", v() || "Error"));
                return o;
              })();
            },
            get children() {
              var o = Jt();
              t(o, () => C().toLocaleString());
              return o;
            }
          });
        }
      }), null);
      t(G, l(c, {
        get when() {
          return g();
        },
        get children() {
          var o = Qt();
          var u = o.firstChild;
          var _ = u.firstChild;
          var B = _.nextSibling;
          t(B, () => w().toLocaleString());
          return o;
        }
      }), V);
      V.$$click = H;
      t(V, l(Qe, {
        class: "h-4 w-4"
      }));
      Y.$$click = () => y(!f());
      t(Te, F);
      t(Y, l(Ye, {
        class: "h-4 w-4"
      }), null);
      t(Q, l(c, {
        get when() {
          return f();
        },
        get children() {
          var o = Yt();
          t(o, l(ae, {
            each: Se,
            children: u => (() => {
              var _ = ul();
              var B = _.firstChild;
              _.$$click = () => P(u.id);
              t(B, () => u.emoji);
              t(_, () => u.label, null);
              U(() => xe(_, `
                        w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left
                        transition-colors
                        ${e.currentTheme === u.id ? "bg-emerald-500/20 text-emerald-400" : "text-slate-300 hover:text-white hover:bg-slate-700/50"}
                      `));
              return _;
            })()
          }));
          return o;
        }
      }), null);
      ee.$$click = () => A(!S());
      t(ee, l(X, {
        get class() {
          return `w-3 h-3 transition-transform ${S() ? "rotate-180" : ""}`;
        }
      }), null);
      t(Z, l(c, {
        get when() {
          return S();
        },
        get children() {
          var o = Zt();
          var u = o.firstChild;
          var _ = u.firstChild;
          var B = u.nextSibling;
          var Me = B.firstChild;
          var le = B.nextSibling;
          var Pe = le.firstChild;
          u.$$click = () => A(false);
          j(u, "href", mt);
          t(u, l(Ze, {
            class: "h-4 w-4 text-slate-400 flex-shrink-0"
          }), _);
          B.$$click = () => A(false);
          t(B, l(oe, {
            class: "h-4 w-4 text-slate-400 flex-shrink-0"
          }), Me);
          le.$$click = () => A(false);
          t(le, l(et, {
            class: "h-4 w-4 text-slate-400 flex-shrink-0"
          }), Pe);
          return o;
        }
      }), null);
      t(ce, l(c, {
        get when() {
          return e.user;
        },
        get fallback() {
          return l(qt, {});
        },
        get children() {
          return l(Et, {
            get user() {
              return e.user;
            },
            get onLinkEaAccount() {
              return e.onLinkEaAccount;
            },
            get eaLinked() {
              return e.eaLinked;
            },
            get onUnlinkEaAccount() {
              return e.onUnlinkEaAccount;
            },
            get onLogout() {
              return e.onLogout;
            }
          });
        }
      }), te);
      te.$$click = () => m(true);
      t(te, l(tt, {
        class: "w-4 h-4"
      }));
      U(o => {
        var u = `
                p-2 rounded-lg
                text-slate-400 hover:text-emerald-400
                hover:bg-white/5
                transition-all duration-200
                ${$() ? "animate-spin" : ""}
              `;
        var _ = $();
        if (u !== o.e) {
          xe(V, o.e = u);
        }
        if (_ !== o.t) {
          V.disabled = o.t = _;
        }
        return o;
      }, {
        e: undefined,
        t: undefined
      });
      U(() => W.value = e.currentWorkspace || "Default Workspace");
      return x;
    }
  });
}
J(["click"]);
var gl = r("<div class=\"flex h-[100dvh] flex-col bg-transparent font-outfit relative overflow-hidden\"><div class=\"relative z-[2] flex flex-col h-full\"><main class=\"flex-1 overflow-hidden\">");
function _l(e) {
  ie(() => {
    it("app_shell_mount", {
      workspace: e.currentWorkspace ?? "unknown",
      isStudioMode: e.isStudioMode ?? false
    });
    ot("app_shell_mount");
  });
  return (() => {
    var a = gl();
    var i = a.firstChild;
    var m = i.firstChild;
    t(i, l(ml, {
      get logo() {
        return e.currentWorkspace;
      },
      get currentWorkspace() {
        return e.currentWorkspace;
      },
      get workspacePresets() {
        return e.workspacePresets;
      },
      get user() {
        return e.user;
      },
      get currentTheme() {
        return e.currentTheme;
      },
      get onAddPanel() {
        return e.onAddPanel;
      },
      get onSelectWorkspace() {
        return e.onSelectWorkspace;
      },
      get onSaveWorkspace() {
        return e.onSaveWorkspace;
      },
      get onChangeTheme() {
        return e.onChangeTheme;
      },
      get onLinkEaAccount() {
        return e.onLinkEaAccount;
      },
      get eaLinked() {
        return e.eaLinked;
      },
      get onUnlinkEaAccount() {
        return e.onUnlinkEaAccount;
      },
      get onLogout() {
        return e.onLogout;
      },
      get isStudioMode() {
        return e.isStudioMode;
      }
    }), m);
    t(m, () => e.children);
    return a;
  })();
}
export { _l as AppShell };