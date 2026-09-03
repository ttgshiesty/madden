import {r as l, j as e} from "./vendor-BuhhrSk5.js";
import {c as r, aL as a, J as n, D as s, S as t, aM as i} from "./apps-ByK-zRMX.js";
import {u as o} from "./useApiOverallPrices-BhO0oUBm.js";
const u = ({allExternalIds: u, externalId: c, shouldApiUpdate: p, itemType: d="playeritem", showChanges: m=!1, cachedXb1Price: f=null, cachedXbsxPrice: h=null, cachedPs4Price: v=null, cachedPs5Price: P=null, cachedPcPrice: x=null}) => {
    const {response: j, loadingStatus: I} = o(u, p, void 0, d)
      , O = l.useContext(r)
      , X = l.useMemo(( () => {
        var l, e, r;
        if (p) {
            const a = null != (l = null == j ? void 0 : j.find((l => l.externalId === c))) ? l : null;
            return null != (r = null == (e = null == a ? void 0 : a.priceDisplay) ? void 0 : e[O.platform]) ? r : null
        }
        return a(O.platform, {
            [n.XBOX_ONE]: f,
            [n.XBOX_SERIES_X]: h,
            [n.PLAYSTATION_4]: v,
            [n.PLAYSTATION_5]: P,
            [n.PC]: x
        })
    }
    ), [j, c, O.platform, p, f, h, v, P, x])
      , _ = l.useMemo(( () => {
        var l, e, r;
        if (p && m) {
            const a = null != (l = null == j ? void 0 : j.find((l => l.externalId === c))) ? l : null;
            return null != (r = null == (e = null == a ? void 0 : a.percentChange) ? void 0 : e[O.platform]) ? r : null
        }
        return null
    }
    ), [j, c, O.platform, p, m]);
    return e.jsx(e.Fragment, {
        children: I !== s.DONE ? e.jsx("div", {
            className: "player-list-item-price__placeholder",
            children: e.jsx(t, {
                width: 50
            })
        }) : e.jsx(i, {
            priceDisplay: X,
            platform: O.platform,
            percentChangeDisplay: _
        })
    })
}
;
export {u as default};
