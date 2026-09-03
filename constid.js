fa = [
    {
      name: "Quarterback",
      naturalPositionId: 1,
      depthPositionKey: be.QB,
      eligibility: [1],
      stats: ["SPD", "THP", "SAC", "MAC", "DAC", "TUP", "RUN", "PAC"],
    },
    {
      name: "Half Back",
      naturalPositionId: 2,
      depthPositionKey: be.HB,
      eligibility: [2, 3],
      stats: ["SPD", "ACC", "AGI", "CAR", "CTH", "COD", "TRK", "BTK"],
    },
    {
      name: "Full Back",
      naturalPositionId: 3,
      depthPositionKey: be.FB,
      eligibility: [2, 3, 5],
      stats: ["SPD", "STR", "CAR", "TRK", "CTH", "RBK", "LBK", "IBL"],
    },
    {
      name: "Wide Receiver",
      naturalPositionId: 4,
      depthPositionKey: be.WR,
      eligibility: [2, 4, 5],
      stats: ["SPD", "JMP", "CTH", "CIT", "SPC", "SRR", "MRR", "DRR"],
    },
    {
      name: "Tight End",
      naturalPositionId: 5,
      depthPositionKey: be.TE,
      eligibility: [3, 5, 6, 10],
      stats: ["SPD", "STR", "CTH", "CIT", "SPC", "SRR", "MRR", "RBK"],
    },
    {
      name: "Left Tackle",
      naturalPositionId: 6,
      depthPositionKey: be.LT,
      eligibility: [6, 7, 8, 9, 10],
      stats: ["STR", "AWR", "PBK", "PBP", "PBF", "RBK", "RBP", "RBF"],
    },
    {
      name: "Left Guard",
      naturalPositionId: 7,
      depthPositionKey: be.LG,
      eligibility: [6, 7, 8, 9, 10],
      stats: ["STR", "AWR", "PBK", "PBP", "PBF", "RBK", "RBP", "RBF"],
    },
    {
      name: "Center",
      naturalPositionId: 8,
      depthPositionKey: be.C,
      eligibility: [6, 7, 8, 9, 10],
      stats: ["STR", "AWR", "PBK", "PBP", "PBF", "RBK", "RBP", "RBF"],
    },
    {
      name: "Right Guard",
      naturalPositionId: 9,
      depthPositionKey: be.RG,
      eligibility: [6, 7, 8, 9, 10],
      stats: ["STR", "AWR", "PBK", "PBP", "PBF", "RBK", "RBP", "RBF"],
    },
    {
      name: "Right Tackle",
      naturalPositionId: 10,
      depthPositionKey: be.RT,
      eligibility: [6, 7, 8, 9, 10],
      stats: ["STR", "AWR", "PBK", "PBP", "PBF", "RBK", "RBP", "RBF"],
    },
    {
      name: "Left End",
      naturalPositionId: 11,
      depthPositionKey: be.LE,
      eligibility: [11, 12, 13, 14, 16],
      stats: ["SPD", "ACC", "STR", "TAK", "PRC", "BSH", "PMV", "FMV"],
    },
    {
      name: "Right End",
      naturalPositionId: 12,
      depthPositionKey: be.RE,
      eligibility: [11, 12, 13, 14, 16],
      stats: ["SPD", "ACC", "STR", "TAK", "PRC", "BSH", "PMV", "FMV"],
    },
    {
      name: "Defensive Tackle",
      naturalPositionId: 13,
      depthPositionKey: be.DT,
      eligibility: [11, 12, 13],
      stats: ["SPD", "ACC", "STR", "TAK", "PRC", "BSH", "PMV", "FMV"],
    },
    {
      name: "Left Outside Linebacker",
      naturalPositionId: 14,
      depthPositionKey: be.LOLB,
      eligibility: [11, 12, 14, 15, 16],
      stats: ["SPD", "ACC", "PUR", "TAK", "PRC", "BSH", "PMV", "FMV"],
    },
    {
      name: "Middle Linebacker",
      naturalPositionId: 15,
      depthPositionKey: be.MLB,
      eligibility: [14, 15, 16],
      stats: ["SPD", "ACC", "PUR", "TAK", "PRC", "BSH", "POW", "ZCV"],
    },
    {
      name: "Right Outside Linebacker",
      naturalPositionId: 16,
      depthPositionKey: be.ROLB,
      eligibility: [11, 12, 14, 15, 16],
      stats: ["SPD", "ACC", "PUR", "TAK", "PRC", "BSH", "PMV", "FMV"],
    },
    {
      name: "Cornerback",
      naturalPositionId: 17,
      depthPositionKey: be.CB,
      eligibility: [17, 18, 19],
      stats: ["SPD", "ACC", "AGI", "JMP", "PRC", "MCV", "ZCV", "PRS"],
    },
    {
      name: "Free Safety",
      naturalPositionId: 18,
      depthPositionKey: be.FS,
      eligibility: [17, 18, 19],
      stats: ["SPD", "ACC", "TAK", "PRC", "PUR", "MCV", "ZCV", "POW"],
    },
    {
      name: "Strong Safety",
      naturalPositionId: 19,
      depthPositionKey: be.SS,
      eligibility: [17, 18, 19],
      stats: ["SPD", "ACC", "TAK", "PRC", "PUR", "MCV", "ZCV", "POW"],
    },
    {
      name: "Kicker",
      naturalPositionId: 20,
      depthPositionKey: be.K,
      eligibility: [20, 21],
      stats: ["SPD", "ACC", "KPW", "KAC", "AWR", "THP", "SAC", "RUN"],
    },
    {
      name: "Punter",
      naturalPositionId: 21,
      depthPositionKey: be.P,
      eligibility: [20, 21],
      stats: ["SPD", "ACC", "KPW", "KAC", "AWR", "THP", "SAC", "RUN"],
    },
    {
      name: "Kickoff Specialist",
      naturalPositionId: null,
      depthPositionKey: be.KOS,
      eligibility: [20, 21],
      stats: ["KPW", "KAC"],
    },
    {
      name: "Long Snapper",
      naturalPositionId: null,
      depthPositionKey: be.LS,
      eligibility: [5, 6, 7, 8, 9, 10],
      stats: ["AWR", "STR", "PBK", "PBP", "PBF", "RBK", "RBP", "RBF"],
    },
    {
      name: "Kick Returner",
      naturalPositionId: null,
      depthPositionKey: be.KR,
      eligibility: [2, 3, 4, 17, 18, 19],
      stats: ["SPD", "ACC", "AGI", "COD", "RET", "BTK", "CAR", "JKM"],
    },
    {
      name: "Punt Returner",
      naturalPositionId: null,
      depthPositionKey: be.PR,
      eligibility: [2, 3, 4, 17, 18, 19],
      stats: ["SPD", "ACC", "AGI", "COD", "RET", "BTK", "CAR", "JKM"],
    },
    {
      name: "3rd Down Running Back",
      naturalPositionId: null,
      depthPositionKey: be.THREEDRB,
      eligibility: [2, 3],
      stats: ["SPD", "STR", "ACC", "AGI", "COD", "CAR", "CTH", "SRR"],
    },
    {
      name: "Power Back",
      naturalPositionId: null,
      depthPositionKey: be.PWHB,
      eligibility: [2, 3],
      stats: ["SPD", "STR", "ACC", "AGI", "COD", "CAR", "BTK", "TRK"],
    },
    {
      name: "Slot Wide Receiver",
      naturalPositionId: null,
      depthPositionKey: be.SLWR,
      eligibility: [2, 4, 5],
      stats: ["SPD", "JMP", "CTH", "CIT", "SRR", "MRR", "DRR", "SPC"],
    },
    {
      name: "Sub Linebacker",
      naturalPositionId: null,
      depthPositionKey: be.SUBLB,
      eligibility: [14, 15, 16, 19],
      stats: ["SPD", "ACC", "COD", "PUR", "TAK", "POW", "MCV", "ZCV"],
    },
    {
      name: "Rush Left End",
      naturalPositionId: null,
      depthPositionKey: be.RLE,
      eligibility: [11, 12, 13, 14, 16],
      stats: ["SPD", "STR", "FMV", "PMV", "TAK", "PUR", "BSH", "PRC"],
    },
    {
      name: "Rush Defensive Tackle",
      naturalPositionId: null,
      depthPositionKey: be.RDT,
      eligibility: [11, 12, 13],
      stats: ["SPD", "STR", "FMV", "PMV", "TAK", "PUR", "BSH", "PRC"],
    },
    {
      name: "Rush Right End",
      naturalPositionId: null,
      depthPositionKey: be.RRE,
      eligibility: [11, 12, 13, 14, 16],
      stats: ["SPD", "STR", "FMV", "PMV", "TAK", "PUR", "BSH", "PRC"],
    },
    {
      name: "Slot Cornerback",
      naturalPositionId: null,
      depthPositionKey: be.SLCB,
      eligibility: [17],
      stats: ["SPD", "ACC", "AGI", "JMP", "MCV", "ZCV", "PRS", "PRC"],
    },
  ],
  ba = m.keyBy(fa, (e) => e.depthPositionKey),
  va = fa
    .filter((e) => null !== e.naturalPositionId)
    .reduce(
      (e, t) => (
        null !== t.naturalPositionId && (e[t.naturalPositionId] = t),
        e
      ),
      {},
    ),
  ga = (e) => e.coreData.stats,
  Ca = (e) => e.coreData.teams,
  Ia = (e) => e.coreData.programs,
  Ra = (e) => e.coreData.abilities,
  Ta = v([Ca], (e) => m.keyBy(e, (e) => e.id)),
  Sa = v([Ra], (e) => m.keyBy(e, (e) => e.id));
(v([ga], (e) => {
  let t = {};
  return (
    e.forEach((e) => {
      t[e.field] = e.abbreviation;
    }),
    t
  );
}),
  v([ga], (e) => m.keyBy(e, (e) => e.field)));
const Aa = v([ga], (e) => m.keyBy(e, (e) => e.abbreviation)),
  xa = v([(e) => e.coreData.featuredRatings], (e) => {
    const t = {};
    return (
      e.forEach((e) => {
        null !== e.basePosition &&
          (t.hasOwnProperty(e.basePosition.id) || (t[e.basePosition.id] = []),
          t[e.basePosition.id].push(e));
      }),
      t
    );
  });
function Ea(e) {
  var t;
  return null != (t = ba[e]) ? t : null;
}
function Ba(e) {
  var t;
  return null != (t = va[e]) ? t : null;
}
function _a(e) {
  var t, a, r, l;
  const i = m.keyBy(e.upgradeTierDisplays, (e) => e.tierNumber),
    n = m.keyBy(e.upgradeTiers, (e) => e.tierNumber),
    s = m.orderBy(e.upgradeTiers, (e) => e.tierNumber);
  let o = e.fullImage,
    d = {},
    u = {};
  ((d[0] = o),
    (u[0] = La(e, 0, n)),
    s.forEach((t) => {
      (i[t.tierNumber] && (o = i[t.tierNumber].image),
        (d[t.tierNumber] = o),
        (u[t.tierNumber] = La(e, t.tierNumber, n)));
    }));
  let c = [...e.availableChemistry],
    p = null,
    y = "",
    h = ["NFC", "AFC"],
    P = m.orderBy(e.stockChemistry, (e) => e.sortOrder),
    f = P.find((e) => h.includes(e.name));
  if (f) y = f.name;
  else {
    const e = P.filter((e) => e.baseChemTeamId);
    e.length && (p = e[e.length - 1]);
  }
  P.forEach((e) => {
    c.some((t) => t.externalId === e.externalId) || c.push(e);
  });
  const b = P.length > 1,
    v = !b,
    g = !b;
  return {
    def: e,
    derived: {
      orderedUpgradeTiers: s,
      tierFullImageLookup: d,
      tierLookup: n,
      tierStatLookup: u,
      positionDisplayStats:
        null !=
        (l =
          null ==
          (r = Ba(
            null != (a = null == (t = e.position) ? void 0 : t.id) ? a : -1,
          ))
            ? void 0
            : r.stats)
          ? l
          : null,
      allTeamChemistry: c,
      canChangeChemistry: v,
      canChangeChemistryMultiplier: g,
      usesAllStockChemistry: b,
      orderedStockChemistry: P,
      specialTeamChemistryAbbreviation: y,
      defaultTeamChemistry: p,
    },
  };
}