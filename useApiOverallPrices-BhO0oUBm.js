var r = Object.defineProperty
  , e = Object.getOwnPropertySymbols
  , t = Object.prototype.hasOwnProperty
  , a = Object.prototype.propertyIsEnumerable
  , o = (e, t, a) => t in e ? r(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: a
}) : e[t] = a
  , n = (r, n) => {
    for (var s in n || (n = {}))
        t.call(n, s) && o(r, s, n[s]);
    if (e)
        for (var s of e(n))
            a.call(n, s) && o(r, s, n[s]);
    return r
}
;
import {r as s} from "./vendor-BuhhrSk5.js";
import {D as l, aN as p, m as u} from "./apps-ByK-zRMX.js";
function i(r, e) {
    return "SET_STATE" === e.type ? n(n({}, r), e.payload) : r
}
function S(r, e=!0, t=null, a="playeritem") {
    const [{response: o, loadingStatus: n, error: S},d] = s.useReducer(i, {
        response: null,
        error: null,
        loadingStatus: l.NOT_INITIALIZED
    });
    return s.useEffect(( () => {
        if (!e)
            return void d({
                type: "SET_STATE",
                payload: {
                    loadingStatus: l.DONE
                }
            });
        if (!r.length)
            return void d({
                type: "SET_STATE",
                payload: {
                    error: Error("Missing external IDs"),
                    loadingStatus: l.DONE
                }
            });
        d({
            type: "SET_STATE",
            payload: {
                loadingStatus: l.LOADING
            }
        });
        const o = p(r, t, a);
        u(o).then((r => {
            d({
                type: "SET_STATE",
                payload: {
                    response: r.data,
                    loadingStatus: l.DONE
                }
            })
        }
        )).catch((r => {
            d({
                type: "SET_STATE",
                payload: {
                    loadingStatus: l.DONE,
                    error: r
                }
            })
        }
        ))
    }
    ), [r, d, e, t, a]),
    {
        response: o,
        error: S,
        loadingStatus: n
    }
}
export {S as u};
