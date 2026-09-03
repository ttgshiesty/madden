import {
  r as i,
  j as n,
  R as o,
  g as c,
  m as _Component2,
  l as m,
  C as p,
  L as h,
  q as x,
  v as u,
  w as j,
  x as f,
  y as g,
  z as v,
  A as y,
} from "./vendor-BuhhrSk5.js";
import {
  D as N,
  m as b,
  g as S,
  P as _Component,
  a as T,
  b as _Component3,
  c as C,
  S as D,
  L as A,
} from "./apps-uajInkOc.js";
import { h as I } from "./index-ZHbHVCeA.js";
import { P, g as E } from "./PlaceholderGraph-e7lsJ9nq.js";
import { I as O } from "./InfoCircleSvg-B4lrFVAE.js";
import { g as F, a as L } from "./utils-tHKtZJoQ.js";
import { T as M } from "./TrainingIcon-CjChLgVD.js";
import { T as R } from "./TrainingPriceRatio-q6Ksxo8M.js";
import { P as _ } from "./PeopleSvg-Cvq-Z0Ng.js";
import { P as _Component4 } from "./PlatformPicker-D0qmF16c.js";
import { S as G, a as _Component5 } from "./SubNavItem-DOA-3DFT.js";
import { u as H } from "./useShowAds-3ZFQq255.js";
import "./PlatformConfig.js";
var K = ((e) => {
  e.INT = "INT";
  e.FLOAT = "FLOAT";
  return e;
})(K || {});
function V(e, s) {
  if (e.dataType === K.FLOAT) {
    return parseFloat(s);
  } else {
    return parseInt(s);
  }
}
function $(e, s, a = true) {
  if (e.dataType === K.FLOAT) {
    return s.toFixed(2);
  } else if (a) {
    return I(s);
  } else {
    return s.toLocaleString();
  }
}
function B(e) {
  return e.hexColor ?? "#f29f0d";
}
function J(e, s) {
  if (s.type === "SET_STATE") {
    return r(r({}, e), s.payload);
  } else {
    return e;
  }
}
const Q = ({
  headingElement: e = "h3",
  heading: s = "Join the Discussion on Discord",
  width: a = "100%",
  height: l = 350,
}) => (
  <o.Fragment>
    {s ? o.createElement(e, null, s) : null}
    <iframe
      src="https://discordapp.com/widget?id=821482197898625044&theme=dark"
      loading="lazy"
      title="MUT.GG Discord Server"
      style={{
        width: a,
      }}
      height={l}
      frameBorder="0"
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    />
  </o.Fragment>
);
const U = ({ players: e, platform: s }) =>
  e.length === 0 ? (
    <div className="message">No Data Available</div>
  ) : (
    <div className="row g-2">
      {e.map((e) => (
        <div className="col-12" key={e.externalId}>
          <_Component
            player={e}
            platform={s}
            priceDisplay={L(e, s)}
            percentChangeDisplay={F(e, s)}
          />
        </div>
      ))}
    </div>
  );
const W = ({ entries: e, platform: s }) =>
  e.length === 0 ? (
    <div className="message">No Data Available</div>
  ) : (
    <div className="row g-2">
      {e.map((e) => (
        <div className="col-12" key={e.playerItem.externalId}>
          <_Component
            player={e.playerItem}
            platform={s}
            priceDisplay={L(e.playerItem, s)}
            percentChangeDisplay={F(e.playerItem, s)}
            metaContent={
              <div
                className="fs-5"
                style={{
                  minHeight: "1.5rem",
                }}
              >
                Daily Sales: {e.dailySalesDisplay}
              </div>
            }
            enableProgram={false}
            enablePosition={false}
          />
        </div>
      ))}
    </div>
  );
const Z = ({ data: e, platform: s, className: a }) =>
  e.length === 0 ? (
    <div className="message">No Data Available</div>
  ) : (
    <div className="data-table__container">
      <table className={c(["data-table", "data-table--small", a])}>
        <thead>
          <tr>
            <th className="w-0px" />
            <th className="text-start">OVR</th>
            <th className=" text-end">Training Ratio</th>
            <th className=" text-end">Quicksell</th>
            <th className="text-end">Target Price</th>
          </tr>
        </thead>
        <tbody>
          {e.map((e, a) => (
            <tr key={e.overall}>
              <td className="ps-0">
                <a
                  data-tip={true}
                  data-for={`ovr${e.overall}`}
                  className="d-block lh-1 text-white button button--size-sm"
                  style={{
                    marginLeft: 1,
                  }}
                  href={T({
                    cheapestTraining: true,
                    overallGte: e.overall,
                    overallLte: e.overall,
                    market: s,
                  })}
                >
                  <_ size="sm" />
                </a>
                <_Component2
                  type="dark"
                  id={`ovr${e.overall}`}
                  className="tooltip--standard fw-700"
                  effect="solid"
                >
                  Cheapest Players
                </_Component2>
              </td>
              <td className="fw-700">{e.overall}</td>
              <td className=" text-end fw-700">
                <R
                  ratio={e.trainingRatioDisplay}
                  className="justify-content-end"
                />
              </td>
              <td className="text-end">
                <span className="d-flex align-items-center justify-content-end">
                  <span className="me-2">
                    {e.quicksellAmount.toLocaleString()}
                  </span>
                  <M size="xs" />
                </span>
              </td>
              <td className="text-end">
                <div className="d-flex align-items-center justify-content-end">
                  <span>{e.priceDisplay}</span>
                  <_Component3 size="xs" className="ms-1" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
p.register(h, x, u, j, f, g, v, y);
const X = ({ dataIndexes: e, activeIndex: s, activeIndexKey: a }) => {
  const l = i.useRef(null);
  const [t, r] = i.useState(null);
  const o = i.useMemo(() => e[s], [e, s]);
  const c = i.useMemo(() => {
    return (o == null ? undefined : o.history[a]) ?? [];
  }, [o, a]);
  const d = i.useMemo(
    () =>
      c.map((e) => {
        s = o;
        return {
          x: (a = e).timestamp,
          y: V(s, a.price),
        };
        var s;
        var a;
      }),
    [o, c],
  );
  const h = i.useMemo(() => {
    let e = {
      unit: "day",
      tooltipFormat: "DD",
    };
    if (a === "day") {
      e = {
        unit: "hour",
        tooltipFormat: "ff",
      };
    }
    return {
      scales: {
        x: {
          time: e,
        },
      },
    };
  }, [a]);
  function x(e, s) {
    const t = s.map((e) => e.y);
    const r = Array.from(t).sort((e, s) => e - s);
    const i = (r == null ? undefined : r[0]) ?? 0;
    const n = (r == null ? undefined : r[r.length - 1]) ?? 0;
    const o = ((n - i) / 0.8) * 0.1;
    let c = o + n;
    let d = Math.max(i - o, 0);
    if (d === c) {
      const e = E(d);
      d = Math.max(d - e, 0);
      c += e;
    }
    return {
      min: d,
      max: c,
      ticks: {
        callback: (s, a, l) =>
          (function (e, s, a, l) {
            if (typeof s == "string") {
              return s;
            }
            if (a === 0 || a === l.length - 1) {
              return "";
            }
            return $(e, s);
          })(e, s, a, l),
      },
    };
  }
  function u() {
    var e;
    const a =
      ((e = l.current) == null ? undefined : e.getContext("2d")) ?? null;
    const t = B(o);
    if (l.current && a) {
      const e = m.merge(
        {
          type: "line",
          data: {
            datasets: [
              {
                label: "Price",
                data: d,
                fill: {
                  target: "origin",
                  above: "rgba(23, 25, 34, 0.6)",
                },
              },
            ],
          },
          options: {
            maintainAspectRatio: false,
            borderColor: t,
            elements: {
              point: {
                borderColor: t,
                backgroundColor: t,
                radius: 0,
                hitRadius: 15,
                hoverRadius: 5,
              },
              line: {
                tension: 0.2,
                borderWidth: 2,
              },
            },
            layout: {
              padding: 0,
            },
            scales: {
              x: {
                type: "time",
                grid: {
                  color: "#292d3e",
                  tickColor: "transparent",
                  borderColor: "#292d3e",
                },
                ticks: {
                  color: "#878c9c",
                  font: {
                    weight: "700",
                    size: 11,
                  },
                  autoSkip: true,
                  maxRotation: 0,
                  autoSkipPadding: 20,
                },
              },
              y: {
                grid: {
                  color: "#292d3e",
                  tickColor: "transparent",
                  borderColor: "#292d3e",
                },
                ticks: {
                  color: "#878c9c",
                  font: {
                    weight: "700",
                    size: 11,
                  },
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                yAlign: "bottom",
                padding: 10,
                displayColors: false,
                intersect: false,
              },
            },
          },
        },
        {
          options: h,
        },
        {
          data: {
            datasets: [
              {
                data: (i = d),
              },
            ],
          },
          options: {
            scales: {
              y: x(o, i),
            },
          },
        },
      );
      r(new p(l.current, e));
    }
    var i;
  }
  i.useEffect(() => {
    if (d.length) {
      u();
    }
    return () => {
      if (t) {
        t.destroy();
      }
    };
  }, [l]);
  i.useEffect(() => {
    if (d.length) {
      (function (e, s) {
        if (!t) {
          return;
        }
        const a = B(e);
        t.config.data.datasets = [
          {
            data: s,
            fill: {
              target: "origin",
              above: "rgba(23, 25, 34, 0.6)",
            },
          },
        ];
        t.config.options = m.merge(
          t.config.options,
          {
            borderColor: a,
            elements: {
              point: {
                borderColor: a,
                backgroundColor: a,
              },
            },
            scales: {
              y: x(e, s),
            },
          },
          h,
        );
        t.update();
      })(o, d);
    }
  }, [e, d, o]);
  const j = d.length > 0;
  return (
    <div className="prices-hub-chart">
      <canvas className={j ? "d-block" : "d-none"} ref={l} height={250} />
      <P className={j ? "d-none" : "d-flex"}>
        Check back later to see price history
      </P>
    </div>
  );
};
const Y = ({}) => {
  const t = H();
  const r = i.useContext(C);
  const { loadingStatus: o, response: c } = (function (e) {
    const [{ response: s, loadingStatus: a, error: l }, t] = i.useReducer(J, {
      response: null,
      error: null,
      loadingStatus: N.NOT_INITIALIZED,
    });
    i.useEffect(() => {
      t({
        type: "SET_STATE",
        payload: {
          loadingStatus: N.LOADING,
        },
      });
      const s = S(e);
      b(s)
        .then((e) => {
          t({
            type: "SET_STATE",
            payload: {
              response: e.data,
              loadingStatus: N.DONE,
            },
          });
        })
        .catch((e) => {
          t({
            type: "SET_STATE",
            payload: {
              loadingStatus: N.DONE,
              error: e,
            },
          });
        });
    }, [t, e]);
    return {
      response: s,
      error: l,
      loadingStatus: a,
    };
  })(r.platform);
  const [m, p] = i.useState(0);
  const [h, x] = i.useState("day");
  const u = i.useMemo(() => {
    return (c == null ? undefined : c.indexes) ?? [];
  }, [c]);
  const j = i.useMemo(() => {
    return u[m] ?? null;
  }, [u, m]);
  const f = i.useMemo(() => {
    if (j === null || j.currentPrice === null) {
      return null;
    }
    const e = V(j, j.currentPrice);
    return $(j, e, false);
  }, [j]);
  const g = o !== N.DONE;
  const v = i.useMemo(
    () => (
      <n.Fragment>
        <div className="d-md-flex">
          <div className="flex-1 align-self-end">
            <_Component4
              activePlatform={r.platform}
              onSelectPlatform={(e) => r.setPlatform(e)}
            />
            <div className="minh-40px d-flex align-items-center">
              <h2 className="m-0">
                {g ? (
                  <D width={100} />
                ) : (
                  j !== null && (
                    <n.Fragment>
                      <span className="fw-400">{j.name}</span>
                      {j.description !== null && (
                        <n.Fragment>
                          <span
                            className="mt-2 ms-2 align-middle d-inline-block"
                            data-tip={true}
                            data-for="active-market-tooltip"
                          >
                            <O />
                          </span>
                          <_Component2
                            type="dark"
                            id="active-market-tooltip"
                            className="tooltip--standard"
                            effect="solid"
                          >
                            {j.description}
                          </_Component2>
                        </n.Fragment>
                      )}
                      {f && (
                        <span
                          className="ms-2"
                          style={{
                            color: B(j),
                          }}
                        >
                          {f}
                        </span>
                      )}
                    </n.Fragment>
                  )
                )}
              </h2>
            </div>
          </div>
          <div className="minh-80px">
            {g ? (
              <n.Fragment>
                <div className="d-flex align-items-center h-40px">
                  <D width={150} />
                </div>
                <div className="d-flex align-items-center h-40px">
                  <D width={150} />
                </div>
              </n.Fragment>
            ) : (
              <n.Fragment>
                <G listClassName="justify-content-md-end">
                  {u.map((e, s) => (
                    <_Component5
                      isActive={s === m}
                      onClick={() => p(s)}
                      key={s}
                    >
                      {e.name}
                    </_Component5>
                  ))}
                </G>
                <G listClassName="justify-content-md-end">
                  <_Component5 isActive={h === "day"} onClick={() => x("day")}>
                    24 Hrs
                  </_Component5>
                  <_Component5
                    isActive={h === "week"}
                    onClick={() => x("week")}
                  >
                    7 Days
                  </_Component5>
                  <_Component5
                    isActive={h === "month"}
                    onClick={() => x("month")}
                  >
                    30 Days
                  </_Component5>
                  <_Component5 isActive={h === "all"} onClick={() => x("all")}>
                    ALL
                  </_Component5>
                </G>
              </n.Fragment>
            )}
          </div>
        </div>
        {g ? (
          <A height="250px" />
        ) : (
          <X dataIndexes={u} activeIndex={m} activeIndexKey={h} />
        )}
      </n.Fragment>
    ),
    [r, f, g, u, j, m, h, x, p],
  );
  return (
    <div className="prices-hub">
      <div className="l-sidebar">
        <div className="l-sidebar__main">{v}</div>
        <div className="l-sidebar__sidebar d-flex align-items-end justify-content-center">
          {t === null || t === false ? (
            <Q height={320} heading={null} />
          ) : (
            <div className="z-01" />
          )}
        </div>
      </div>
      <div className="row g-4 mt-3">
        <div className="col-12 col-xxl-4">
          <h2>Cheapest Training by OVR</h2>
          {g ? (
            <A height="20rem" />
          ) : (
            <Z
              className="w-100"
              data={(c == null ? undefined : c.trainingGuide) ?? []}
              platform={r.platform}
            />
          )}
        </div>
        <div className="col-12 col-md-6 col-xxl-4">
          <h2>Daily Top Gainers</h2>
          {g ? (
            <A height="10rem" />
          ) : (
            <U
              players={
                (c == null ? undefined : c.marketMovers.gains.slice(0, 5)) ?? []
              }
              platform={r.platform}
            />
          )}
          <h2 className="mt-5 mb-4">Daily Top Decliners</h2>
          {g ? (
            <A height="10rem" />
          ) : (
            <U
              players={
                (c == null ? undefined : c.marketMovers.losses.slice(0, 5)) ??
                []
              }
              platform={r.platform}
            />
          )}
        </div>
        <div className="col-12 col-md-6 col-xxl-4">
          <h2>Daily Top Sellers</h2>
          {g ? (
            <A height="20rem" />
          ) : (
            <W
              entries={
                (c == null ? undefined : c.volume.topDailySales.slice(0, 11)) ??
                []
              }
              platform={r.platform}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export { Y as default };
var e = Object.defineProperty;
var s = Object.getOwnPropertySymbols;
var a = Object.prototype.hasOwnProperty;
var l = Object.prototype.propertyIsEnumerable;
var t = (s, a, l) =>
  a in s
    ? e(s, a, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: l,
      })
    : (s[a] = l);
var r = (e, r) => {
  for (var i in (r ||= {})) {
    if (a.call(r, i)) {
      t(e, i, r[i]);
    }
  }
  if (s) {
    for (var i of s(r)) {
      if (l.call(r, i)) {
        t(e, i, r[i]);
      }
    }
  }
  return e;
};
