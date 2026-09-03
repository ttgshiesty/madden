import { B as h, a as e } from "./protobuf.js";
const m = "auction";
function g() {
  return {
    auctionId: "",
    cardId: "",
    market: "",
    updateSeq: 0,
    price: 0,
    currentBid: 0,
    startingBid: 0,
    buyoutPrice: 0,
    secondsRemaining: 0,
    postingTime: 0,
    pipelineLagSeconds: 0,
    numberOfBids: 0,
    observedAt: "",
    programId: "",
    payloadJson: "",
    windowSize: 0,
    q3Price: undefined,
    estimatedProfit: undefined,
    percentBelowQ3: undefined,
    playerName: "",
    overallRating: 0,
    programName: "",
    positionId: "",
    lastPolledAt: "",
    observedRecentAt: "",
    velocity: undefined,
    mutggQ3: undefined,
    mutggRec: undefined,
    mutggLastSoldPrice: undefined,
    mutggLastSoldAt: undefined,
    mutggL10Q3: undefined,
    mutggVol24h: undefined,
    mutggVol1h: undefined,
    mutggFreshlyFetched: undefined,
    profit5: undefined,
    profit10: undefined,
    profit15: undefined,
    profit20: undefined,
    profit25: undefined,
    q35: undefined,
    q310: undefined,
    q315: undefined,
    q320: undefined,
    q325: undefined,
    percentBelow5: undefined,
    percentBelow10: undefined,
    percentBelow15: undefined,
    percentBelow20: undefined,
    percentBelow25: undefined,
    archetypeTitle: undefined,
    salePricesJson: undefined
  };
}
const l = {
  encode(i, t = new h()) {
    if (i.auctionId !== "") {
      t.uint32(10).string(i.auctionId);
    }
    if (i.cardId !== "") {
      t.uint32(18).string(i.cardId);
    }
    if (i.market !== "") {
      t.uint32(26).string(i.market);
    }
    if (i.updateSeq !== 0) {
      t.uint32(32).int64(i.updateSeq);
    }
    if (i.price !== 0) {
      t.uint32(40).int32(i.price);
    }
    if (i.currentBid !== 0) {
      t.uint32(48).int32(i.currentBid);
    }
    if (i.startingBid !== 0) {
      t.uint32(56).int32(i.startingBid);
    }
    if (i.buyoutPrice !== 0) {
      t.uint32(64).int32(i.buyoutPrice);
    }
    if (i.secondsRemaining !== 0) {
      t.uint32(72).int32(i.secondsRemaining);
    }
    if (i.postingTime !== 0) {
      t.uint32(80).int64(i.postingTime);
    }
    if (i.pipelineLagSeconds !== 0) {
      t.uint32(93).float(i.pipelineLagSeconds);
    }
    if (i.numberOfBids !== 0) {
      t.uint32(96).int32(i.numberOfBids);
    }
    if (i.observedAt !== "") {
      t.uint32(106).string(i.observedAt);
    }
    if (i.programId !== "") {
      t.uint32(114).string(i.programId);
    }
    if (i.payloadJson !== "") {
      t.uint32(122).string(i.payloadJson);
    }
    if (i.windowSize !== 0) {
      t.uint32(128).int32(i.windowSize);
    }
    if (i.q3Price !== undefined) {
      t.uint32(136).uint32(i.q3Price);
    }
    if (i.estimatedProfit !== undefined) {
      t.uint32(144).sint32(i.estimatedProfit);
    }
    if (i.percentBelowQ3 !== undefined) {
      t.uint32(157).float(i.percentBelowQ3);
    }
    if (i.playerName !== "") {
      t.uint32(162).string(i.playerName);
    }
    if (i.overallRating !== 0) {
      t.uint32(168).int32(i.overallRating);
    }
    if (i.programName !== "") {
      t.uint32(178).string(i.programName);
    }
    if (i.positionId !== "") {
      t.uint32(186).string(i.positionId);
    }
    if (i.lastPolledAt !== "") {
      t.uint32(194).string(i.lastPolledAt);
    }
    if (i.observedRecentAt !== "") {
      t.uint32(202).string(i.observedRecentAt);
    }
    if (i.velocity !== undefined) {
      c.encode(i.velocity, t.uint32(210).fork()).join();
    }
    if (i.mutggQ3 !== undefined) {
      t.uint32(224).uint32(i.mutggQ3);
    }
    if (i.mutggRec !== undefined) {
      t.uint32(234).string(i.mutggRec);
    }
    if (i.mutggLastSoldPrice !== undefined) {
      t.uint32(240).int32(i.mutggLastSoldPrice);
    }
    if (i.mutggLastSoldAt !== undefined) {
      t.uint32(250).string(i.mutggLastSoldAt);
    }
    if (i.mutggL10Q3 !== undefined) {
      t.uint32(256).int32(i.mutggL10Q3);
    }
    if (i.mutggVol24h !== undefined) {
      t.uint32(269).float(i.mutggVol24h);
    }
    if (i.mutggVol1h !== undefined) {
      t.uint32(272).int32(i.mutggVol1h);
    }
    if (i.mutggFreshlyFetched !== undefined) {
      t.uint32(280).bool(i.mutggFreshlyFetched);
    }
    if (i.profit5 !== undefined) {
      t.uint32(288).sint32(i.profit5);
    }
    if (i.profit10 !== undefined) {
      t.uint32(296).sint32(i.profit10);
    }
    if (i.profit15 !== undefined) {
      t.uint32(304).sint32(i.profit15);
    }
    if (i.profit20 !== undefined) {
      t.uint32(312).sint32(i.profit20);
    }
    if (i.profit25 !== undefined) {
      t.uint32(320).sint32(i.profit25);
    }
    if (i.q35 !== undefined) {
      t.uint32(328).uint32(i.q35);
    }
    if (i.q310 !== undefined) {
      t.uint32(336).uint32(i.q310);
    }
    if (i.q315 !== undefined) {
      t.uint32(344).uint32(i.q315);
    }
    if (i.q320 !== undefined) {
      t.uint32(352).uint32(i.q320);
    }
    if (i.q325 !== undefined) {
      t.uint32(360).uint32(i.q325);
    }
    if (i.percentBelow5 !== undefined) {
      t.uint32(373).float(i.percentBelow5);
    }
    if (i.percentBelow10 !== undefined) {
      t.uint32(381).float(i.percentBelow10);
    }
    if (i.percentBelow15 !== undefined) {
      t.uint32(389).float(i.percentBelow15);
    }
    if (i.percentBelow20 !== undefined) {
      t.uint32(397).float(i.percentBelow20);
    }
    if (i.percentBelow25 !== undefined) {
      t.uint32(405).float(i.percentBelow25);
    }
    if (i.archetypeTitle !== undefined) {
      t.uint32(410).string(i.archetypeTitle);
    }
    if (i.salePricesJson !== undefined) {
      t.uint32(418).string(i.salePricesJson);
    }
    return t;
  },
  decode(i, t) {
    const o = i instanceof e ? i : new e(i);
    const a = t === undefined ? o.len : o.pos + t;
    const r = g();
    while (o.pos < a) {
      const n = o.uint32();
      switch (n >>> 3) {
        case 1:
          {
            if (n !== 10) {
              break;
            }
            r.auctionId = o.string();
            continue;
          }
        case 2:
          {
            if (n !== 18) {
              break;
            }
            r.cardId = o.string();
            continue;
          }
        case 3:
          {
            if (n !== 26) {
              break;
            }
            r.market = o.string();
            continue;
          }
        case 4:
          {
            if (n !== 32) {
              break;
            }
            r.updateSeq = v(o.int64());
            continue;
          }
        case 5:
          {
            if (n !== 40) {
              break;
            }
            r.price = o.int32();
            continue;
          }
        case 6:
          {
            if (n !== 48) {
              break;
            }
            r.currentBid = o.int32();
            continue;
          }
        case 7:
          {
            if (n !== 56) {
              break;
            }
            r.startingBid = o.int32();
            continue;
          }
        case 8:
          {
            if (n !== 64) {
              break;
            }
            r.buyoutPrice = o.int32();
            continue;
          }
        case 9:
          {
            if (n !== 72) {
              break;
            }
            r.secondsRemaining = o.int32();
            continue;
          }
        case 10:
          {
            if (n !== 80) {
              break;
            }
            r.postingTime = v(o.int64());
            continue;
          }
        case 11:
          {
            if (n !== 93) {
              break;
            }
            r.pipelineLagSeconds = o.float();
            continue;
          }
        case 12:
          {
            if (n !== 96) {
              break;
            }
            r.numberOfBids = o.int32();
            continue;
          }
        case 13:
          {
            if (n !== 106) {
              break;
            }
            r.observedAt = o.string();
            continue;
          }
        case 14:
          {
            if (n !== 114) {
              break;
            }
            r.programId = o.string();
            continue;
          }
        case 15:
          {
            if (n !== 122) {
              break;
            }
            r.payloadJson = o.string();
            continue;
          }
        case 16:
          {
            if (n !== 128) {
              break;
            }
            r.windowSize = o.int32();
            continue;
          }
        case 17:
          {
            if (n !== 136) {
              break;
            }
            r.q3Price = o.uint32();
            continue;
          }
        case 18:
          {
            if (n !== 144) {
              break;
            }
            r.estimatedProfit = o.sint32();
            continue;
          }
        case 19:
          {
            if (n !== 157) {
              break;
            }
            r.percentBelowQ3 = o.float();
            continue;
          }
        case 20:
          {
            if (n !== 162) {
              break;
            }
            r.playerName = o.string();
            continue;
          }
        case 21:
          {
            if (n !== 168) {
              break;
            }
            r.overallRating = o.int32();
            continue;
          }
        case 22:
          {
            if (n !== 178) {
              break;
            }
            r.programName = o.string();
            continue;
          }
        case 23:
          {
            if (n !== 186) {
              break;
            }
            r.positionId = o.string();
            continue;
          }
        case 24:
          {
            if (n !== 194) {
              break;
            }
            r.lastPolledAt = o.string();
            continue;
          }
        case 25:
          {
            if (n !== 202) {
              break;
            }
            r.observedRecentAt = o.string();
            continue;
          }
        case 26:
          {
            if (n !== 210) {
              break;
            }
            r.velocity = c.decode(o, o.uint32());
            continue;
          }
        case 28:
          {
            if (n !== 224) {
              break;
            }
            r.mutggQ3 = o.uint32();
            continue;
          }
        case 29:
          {
            if (n !== 234) {
              break;
            }
            r.mutggRec = o.string();
            continue;
          }
        case 30:
          {
            if (n !== 240) {
              break;
            }
            r.mutggLastSoldPrice = o.int32();
            continue;
          }
        case 31:
          {
            if (n !== 250) {
              break;
            }
            r.mutggLastSoldAt = o.string();
            continue;
          }
        case 32:
          {
            if (n !== 256) {
              break;
            }
            r.mutggL10Q3 = o.int32();
            continue;
          }
        case 33:
          {
            if (n !== 269) {
              break;
            }
            r.mutggVol24h = o.float();
            continue;
          }
        case 34:
          {
            if (n !== 272) {
              break;
            }
            r.mutggVol1h = o.int32();
            continue;
          }
        case 35:
          {
            if (n !== 280) {
              break;
            }
            r.mutggFreshlyFetched = o.bool();
            continue;
          }
        case 36:
          {
            if (n !== 288) {
              break;
            }
            r.profit5 = o.sint32();
            continue;
          }
        case 37:
          {
            if (n !== 296) {
              break;
            }
            r.profit10 = o.sint32();
            continue;
          }
        case 38:
          {
            if (n !== 304) {
              break;
            }
            r.profit15 = o.sint32();
            continue;
          }
        case 39:
          {
            if (n !== 312) {
              break;
            }
            r.profit20 = o.sint32();
            continue;
          }
        case 40:
          {
            if (n !== 320) {
              break;
            }
            r.profit25 = o.sint32();
            continue;
          }
        case 41:
          {
            if (n !== 328) {
              break;
            }
            r.q35 = o.uint32();
            continue;
          }
        case 42:
          {
            if (n !== 336) {
              break;
            }
            r.q310 = o.uint32();
            continue;
          }
        case 43:
          {
            if (n !== 344) {
              break;
            }
            r.q315 = o.uint32();
            continue;
          }
        case 44:
          {
            if (n !== 352) {
              break;
            }
            r.q320 = o.uint32();
            continue;
          }
        case 45:
          {
            if (n !== 360) {
              break;
            }
            r.q325 = o.uint32();
            continue;
          }
        case 46:
          {
            if (n !== 373) {
              break;
            }
            r.percentBelow5 = o.float();
            continue;
          }
        case 47:
          {
            if (n !== 381) {
              break;
            }
            r.percentBelow10 = o.float();
            continue;
          }
        case 48:
          {
            if (n !== 389) {
              break;
            }
            r.percentBelow15 = o.float();
            continue;
          }
        case 49:
          {
            if (n !== 397) {
              break;
            }
            r.percentBelow20 = o.float();
            continue;
          }
        case 50:
          {
            if (n !== 405) {
              break;
            }
            r.percentBelow25 = o.float();
            continue;
          }
        case 51:
          {
            if (n !== 410) {
              break;
            }
            r.archetypeTitle = o.string();
            continue;
          }
        case 52:
          {
            if (n !== 418) {
              break;
            }
            r.salePricesJson = o.string();
            continue;
          }
      }
      if ((n & 7) === 4 || n === 0) {
        break;
      }
      o.skip(n & 7);
    }
    return r;
  },
  fromJSON(i) {
    return {
      auctionId: d(i.auctionId) ? globalThis.String(i.auctionId) : "",
      cardId: d(i.cardId) ? globalThis.String(i.cardId) : "",
      market: d(i.market) ? globalThis.String(i.market) : "",
      updateSeq: d(i.updateSeq) ? globalThis.Number(i.updateSeq) : 0,
      price: d(i.price) ? globalThis.Number(i.price) : 0,
      currentBid: d(i.currentBid) ? globalThis.Number(i.currentBid) : 0,
      startingBid: d(i.startingBid) ? globalThis.Number(i.startingBid) : 0,
      buyoutPrice: d(i.buyoutPrice) ? globalThis.Number(i.buyoutPrice) : 0,
      secondsRemaining: d(i.secondsRemaining) ? globalThis.Number(i.secondsRemaining) : 0,
      postingTime: d(i.postingTime) ? globalThis.Number(i.postingTime) : 0,
      pipelineLagSeconds: d(i.pipelineLagSeconds) ? globalThis.Number(i.pipelineLagSeconds) : 0,
      numberOfBids: d(i.numberOfBids) ? globalThis.Number(i.numberOfBids) : 0,
      observedAt: d(i.observedAt) ? globalThis.String(i.observedAt) : "",
      programId: d(i.programId) ? globalThis.String(i.programId) : "",
      payloadJson: d(i.payloadJson) ? globalThis.String(i.payloadJson) : "",
      windowSize: d(i.windowSize) ? globalThis.Number(i.windowSize) : 0,
      q3Price: d(i.q3Price) ? globalThis.Number(i.q3Price) : undefined,
      estimatedProfit: d(i.estimatedProfit) ? globalThis.Number(i.estimatedProfit) : undefined,
      percentBelowQ3: d(i.percentBelowQ3) ? globalThis.Number(i.percentBelowQ3) : undefined,
      playerName: d(i.playerName) ? globalThis.String(i.playerName) : "",
      overallRating: d(i.overallRating) ? globalThis.Number(i.overallRating) : 0,
      programName: d(i.programName) ? globalThis.String(i.programName) : "",
      positionId: d(i.positionId) ? globalThis.String(i.positionId) : "",
      lastPolledAt: d(i.lastPolledAt) ? globalThis.String(i.lastPolledAt) : "",
      observedRecentAt: d(i.observedRecentAt) ? globalThis.String(i.observedRecentAt) : "",
      velocity: d(i.velocity) ? c.fromJSON(i.velocity) : undefined,
      mutggQ3: d(i.mutggQ3) ? globalThis.Number(i.mutggQ3) : undefined,
      mutggRec: d(i.mutggRec) ? globalThis.String(i.mutggRec) : undefined,
      mutggLastSoldPrice: d(i.mutggLastSoldPrice) ? globalThis.Number(i.mutggLastSoldPrice) : undefined,
      mutggLastSoldAt: d(i.mutggLastSoldAt) ? globalThis.String(i.mutggLastSoldAt) : undefined,
      mutggL10Q3: d(i.mutggL10Q3) ? globalThis.Number(i.mutggL10Q3) : undefined,
      mutggVol24h: d(i.mutggVol24h) ? globalThis.Number(i.mutggVol24h) : undefined,
      mutggVol1h: d(i.mutggVol1h) ? globalThis.Number(i.mutggVol1h) : undefined,
      mutggFreshlyFetched: d(i.mutggFreshlyFetched) ? globalThis.Boolean(i.mutggFreshlyFetched) : undefined,
      profit5: d(i.profit5) ? globalThis.Number(i.profit5) : undefined,
      profit10: d(i.profit10) ? globalThis.Number(i.profit10) : undefined,
      profit15: d(i.profit15) ? globalThis.Number(i.profit15) : undefined,
      profit20: d(i.profit20) ? globalThis.Number(i.profit20) : undefined,
      profit25: d(i.profit25) ? globalThis.Number(i.profit25) : undefined,
      q35: d(i.q35) ? globalThis.Number(i.q35) : undefined,
      q310: d(i.q310) ? globalThis.Number(i.q310) : undefined,
      q315: d(i.q315) ? globalThis.Number(i.q315) : undefined,
      q320: d(i.q320) ? globalThis.Number(i.q320) : undefined,
      q325: d(i.q325) ? globalThis.Number(i.q325) : undefined,
      percentBelow5: d(i.percentBelow5) ? globalThis.Number(i.percentBelow5) : undefined,
      percentBelow10: d(i.percentBelow10) ? globalThis.Number(i.percentBelow10) : undefined,
      percentBelow15: d(i.percentBelow15) ? globalThis.Number(i.percentBelow15) : undefined,
      percentBelow20: d(i.percentBelow20) ? globalThis.Number(i.percentBelow20) : undefined,
      percentBelow25: d(i.percentBelow25) ? globalThis.Number(i.percentBelow25) : undefined,
      archetypeTitle: d(i.archetypeTitle) ? globalThis.String(i.archetypeTitle) : undefined,
      salePricesJson: d(i.salePricesJson) ? globalThis.String(i.salePricesJson) : undefined
    };
  },
  toJSON(i) {
    const t = {};
    if (i.auctionId !== "") {
      t.auctionId = i.auctionId;
    }
    if (i.cardId !== "") {
      t.cardId = i.cardId;
    }
    if (i.market !== "") {
      t.market = i.market;
    }
    if (i.updateSeq !== 0) {
      t.updateSeq = Math.round(i.updateSeq);
    }
    if (i.price !== 0) {
      t.price = Math.round(i.price);
    }
    if (i.currentBid !== 0) {
      t.currentBid = Math.round(i.currentBid);
    }
    if (i.startingBid !== 0) {
      t.startingBid = Math.round(i.startingBid);
    }
    if (i.buyoutPrice !== 0) {
      t.buyoutPrice = Math.round(i.buyoutPrice);
    }
    if (i.secondsRemaining !== 0) {
      t.secondsRemaining = Math.round(i.secondsRemaining);
    }
    if (i.postingTime !== 0) {
      t.postingTime = Math.round(i.postingTime);
    }
    if (i.pipelineLagSeconds !== 0) {
      t.pipelineLagSeconds = i.pipelineLagSeconds;
    }
    if (i.numberOfBids !== 0) {
      t.numberOfBids = Math.round(i.numberOfBids);
    }
    if (i.observedAt !== "") {
      t.observedAt = i.observedAt;
    }
    if (i.programId !== "") {
      t.programId = i.programId;
    }
    if (i.payloadJson !== "") {
      t.payloadJson = i.payloadJson;
    }
    if (i.windowSize !== 0) {
      t.windowSize = Math.round(i.windowSize);
    }
    if (i.q3Price !== undefined) {
      t.q3Price = Math.round(i.q3Price);
    }
    if (i.estimatedProfit !== undefined) {
      t.estimatedProfit = Math.round(i.estimatedProfit);
    }
    if (i.percentBelowQ3 !== undefined) {
      t.percentBelowQ3 = i.percentBelowQ3;
    }
    if (i.playerName !== "") {
      t.playerName = i.playerName;
    }
    if (i.overallRating !== 0) {
      t.overallRating = Math.round(i.overallRating);
    }
    if (i.programName !== "") {
      t.programName = i.programName;
    }
    if (i.positionId !== "") {
      t.positionId = i.positionId;
    }
    if (i.lastPolledAt !== "") {
      t.lastPolledAt = i.lastPolledAt;
    }
    if (i.observedRecentAt !== "") {
      t.observedRecentAt = i.observedRecentAt;
    }
    if (i.velocity !== undefined) {
      t.velocity = c.toJSON(i.velocity);
    }
    if (i.mutggQ3 !== undefined) {
      t.mutggQ3 = Math.round(i.mutggQ3);
    }
    if (i.mutggRec !== undefined) {
      t.mutggRec = i.mutggRec;
    }
    if (i.mutggLastSoldPrice !== undefined) {
      t.mutggLastSoldPrice = Math.round(i.mutggLastSoldPrice);
    }
    if (i.mutggLastSoldAt !== undefined) {
      t.mutggLastSoldAt = i.mutggLastSoldAt;
    }
    if (i.mutggL10Q3 !== undefined) {
      t.mutggL10Q3 = Math.round(i.mutggL10Q3);
    }
    if (i.mutggVol24h !== undefined) {
      t.mutggVol24h = i.mutggVol24h;
    }
    if (i.mutggVol1h !== undefined) {
      t.mutggVol1h = Math.round(i.mutggVol1h);
    }
    if (i.mutggFreshlyFetched !== undefined) {
      t.mutggFreshlyFetched = i.mutggFreshlyFetched;
    }
    if (i.profit5 !== undefined) {
      t.profit5 = Math.round(i.profit5);
    }
    if (i.profit10 !== undefined) {
      t.profit10 = Math.round(i.profit10);
    }
    if (i.profit15 !== undefined) {
      t.profit15 = Math.round(i.profit15);
    }
    if (i.profit20 !== undefined) {
      t.profit20 = Math.round(i.profit20);
    }
    if (i.profit25 !== undefined) {
      t.profit25 = Math.round(i.profit25);
    }
    if (i.q35 !== undefined) {
      t.q35 = Math.round(i.q35);
    }
    if (i.q310 !== undefined) {
      t.q310 = Math.round(i.q310);
    }
    if (i.q315 !== undefined) {
      t.q315 = Math.round(i.q315);
    }
    if (i.q320 !== undefined) {
      t.q320 = Math.round(i.q320);
    }
    if (i.q325 !== undefined) {
      t.q325 = Math.round(i.q325);
    }
    if (i.percentBelow5 !== undefined) {
      t.percentBelow5 = i.percentBelow5;
    }
    if (i.percentBelow10 !== undefined) {
      t.percentBelow10 = i.percentBelow10;
    }
    if (i.percentBelow15 !== undefined) {
      t.percentBelow15 = i.percentBelow15;
    }
    if (i.percentBelow20 !== undefined) {
      t.percentBelow20 = i.percentBelow20;
    }
    if (i.percentBelow25 !== undefined) {
      t.percentBelow25 = i.percentBelow25;
    }
    if (i.archetypeTitle !== undefined) {
      t.archetypeTitle = i.archetypeTitle;
    }
    if (i.salePricesJson !== undefined) {
      t.salePricesJson = i.salePricesJson;
    }
    return t;
  },
  create(i) {
    return l.fromPartial(i ?? {});
  },
  fromPartial(i) {
    const t = g();
    t.auctionId = i.auctionId ?? "";
    t.cardId = i.cardId ?? "";
    t.market = i.market ?? "";
    t.updateSeq = i.updateSeq ?? 0;
    t.price = i.price ?? 0;
    t.currentBid = i.currentBid ?? 0;
    t.startingBid = i.startingBid ?? 0;
    t.buyoutPrice = i.buyoutPrice ?? 0;
    t.secondsRemaining = i.secondsRemaining ?? 0;
    t.postingTime = i.postingTime ?? 0;
    t.pipelineLagSeconds = i.pipelineLagSeconds ?? 0;
    t.numberOfBids = i.numberOfBids ?? 0;
    t.observedAt = i.observedAt ?? "";
    t.programId = i.programId ?? "";
    t.payloadJson = i.payloadJson ?? "";
    t.windowSize = i.windowSize ?? 0;
    t.q3Price = i.q3Price ?? undefined;
    t.estimatedProfit = i.estimatedProfit ?? undefined;
    t.percentBelowQ3 = i.percentBelowQ3 ?? undefined;
    t.playerName = i.playerName ?? "";
    t.overallRating = i.overallRating ?? 0;
    t.programName = i.programName ?? "";
    t.positionId = i.positionId ?? "";
    t.lastPolledAt = i.lastPolledAt ?? "";
    t.observedRecentAt = i.observedRecentAt ?? "";
    t.velocity = i.velocity !== undefined && i.velocity !== null ? c.fromPartial(i.velocity) : undefined;
    t.mutggQ3 = i.mutggQ3 ?? undefined;
    t.mutggRec = i.mutggRec ?? undefined;
    t.mutggLastSoldPrice = i.mutggLastSoldPrice ?? undefined;
    t.mutggLastSoldAt = i.mutggLastSoldAt ?? undefined;
    t.mutggL10Q3 = i.mutggL10Q3 ?? undefined;
    t.mutggVol24h = i.mutggVol24h ?? undefined;
    t.mutggVol1h = i.mutggVol1h ?? undefined;
    t.mutggFreshlyFetched = i.mutggFreshlyFetched ?? undefined;
    t.profit5 = i.profit5 ?? undefined;
    t.profit10 = i.profit10 ?? undefined;
    t.profit15 = i.profit15 ?? undefined;
    t.profit20 = i.profit20 ?? undefined;
    t.profit25 = i.profit25 ?? undefined;
    t.q35 = i.q35 ?? undefined;
    t.q310 = i.q310 ?? undefined;
    t.q315 = i.q315 ?? undefined;
    t.q320 = i.q320 ?? undefined;
    t.q325 = i.q325 ?? undefined;
    t.percentBelow5 = i.percentBelow5 ?? undefined;
    t.percentBelow10 = i.percentBelow10 ?? undefined;
    t.percentBelow15 = i.percentBelow15 ?? undefined;
    t.percentBelow20 = i.percentBelow20 ?? undefined;
    t.percentBelow25 = i.percentBelow25 ?? undefined;
    t.archetypeTitle = i.archetypeTitle ?? undefined;
    t.salePricesJson = i.salePricesJson ?? undefined;
    return t;
  }
};
function S() {
  return {
    deals: []
  };
}
const u = {
  encode(i, t = new h()) {
    for (const o of i.deals) {
      l.encode(o, t.uint32(10).fork()).join();
    }
    return t;
  },
  decode(i, t) {
    const o = i instanceof e ? i : new e(i);
    const a = t === undefined ? o.len : o.pos + t;
    const r = S();
    while (o.pos < a) {
      const n = o.uint32();
      switch (n >>> 3) {
        case 1:
          {
            if (n !== 10) {
              break;
            }
            r.deals.push(l.decode(o, o.uint32()));
            continue;
          }
      }
      if ((n & 7) === 4 || n === 0) {
        break;
      }
      o.skip(n & 7);
    }
    return r;
  },
  fromJSON(i) {
    return {
      deals: globalThis.Array.isArray(i?.deals) ? i.deals.map(t => l.fromJSON(t)) : []
    };
  },
  toJSON(i) {
    const t = {};
    if (i.deals?.length) {
      t.deals = i.deals.map(o => l.toJSON(o));
    }
    return t;
  },
  create(i) {
    return u.fromPartial(i ?? {});
  },
  fromPartial(i) {
    const t = S();
    t.deals = i.deals?.map(o => l.fromPartial(o)) || [];
    return t;
  }
};
function B() {
  return {
    deals: []
  };
}
const f = {
  encode(i, t = new h()) {
    for (const o of i.deals) {
      l.encode(o, t.uint32(10).fork()).join();
    }
    return t;
  },
  decode(i, t) {
    const o = i instanceof e ? i : new e(i);
    const a = t === undefined ? o.len : o.pos + t;
    const r = B();
    while (o.pos < a) {
      const n = o.uint32();
      switch (n >>> 3) {
        case 1:
          {
            if (n !== 10) {
              break;
            }
            r.deals.push(l.decode(o, o.uint32()));
            continue;
          }
      }
      if ((n & 7) === 4 || n === 0) {
        break;
      }
      o.skip(n & 7);
    }
    return r;
  },
  fromJSON(i) {
    return {
      deals: globalThis.Array.isArray(i?.deals) ? i.deals.map(t => l.fromJSON(t)) : []
    };
  },
  toJSON(i) {
    const t = {};
    if (i.deals?.length) {
      t.deals = i.deals.map(o => l.toJSON(o));
    }
    return t;
  },
  create(i) {
    return f.fromPartial(i ?? {});
  },
  fromPartial(i) {
    const t = B();
    t.deals = i.deals?.map(o => l.fromPartial(o)) || [];
    return t;
  }
};
function s() {
  return {
    timestamp: 0
  };
}
const p = {
  encode(i, t = new h()) {
    if (i.timestamp !== 0) {
      t.uint32(8).int64(i.timestamp);
    }
    return t;
  },
  decode(i, t) {
    const o = i instanceof e ? i : new e(i);
    const a = t === undefined ? o.len : o.pos + t;
    const r = s();
    while (o.pos < a) {
      const n = o.uint32();
      switch (n >>> 3) {
        case 1:
          {
            if (n !== 8) {
              break;
            }
            r.timestamp = v(o.int64());
            continue;
          }
      }
      if ((n & 7) === 4 || n === 0) {
        break;
      }
      o.skip(n & 7);
    }
    return r;
  },
  fromJSON(i) {
    return {
      timestamp: d(i.timestamp) ? globalThis.Number(i.timestamp) : 0
    };
  },
  toJSON(i) {
    const t = {};
    if (i.timestamp !== 0) {
      t.timestamp = Math.round(i.timestamp);
    }
    return t;
  },
  create(i) {
    return p.fromPartial(i ?? {});
  },
  fromPartial(i) {
    const t = s();
    t.timestamp = i.timestamp ?? 0;
    return t;
  }
};
function T() {
  return {
    heartbeat: undefined,
    snapshot: undefined,
    batchUpdate: undefined,
    generationId: 0,
    updateSeq: 0
  };
}
const q = {
  encode(i, t = new h()) {
    if (i.heartbeat !== undefined) {
      p.encode(i.heartbeat, t.uint32(10).fork()).join();
    }
    if (i.snapshot !== undefined) {
      u.encode(i.snapshot, t.uint32(18).fork()).join();
    }
    if (i.batchUpdate !== undefined) {
      f.encode(i.batchUpdate, t.uint32(26).fork()).join();
    }
    if (i.generationId !== 0) {
      t.uint32(32).int64(i.generationId);
    }
    if (i.updateSeq !== 0) {
      t.uint32(40).int64(i.updateSeq);
    }
    return t;
  },
  decode(i, t) {
    const o = i instanceof e ? i : new e(i);
    const a = t === undefined ? o.len : o.pos + t;
    const r = T();
    while (o.pos < a) {
      const n = o.uint32();
      switch (n >>> 3) {
        case 1:
          {
            if (n !== 10) {
              break;
            }
            r.heartbeat = p.decode(o, o.uint32());
            continue;
          }
        case 2:
          {
            if (n !== 18) {
              break;
            }
            r.snapshot = u.decode(o, o.uint32());
            continue;
          }
        case 3:
          {
            if (n !== 26) {
              break;
            }
            r.batchUpdate = f.decode(o, o.uint32());
            continue;
          }
        case 4:
          {
            if (n !== 32) {
              break;
            }
            r.generationId = v(o.int64());
            continue;
          }
        case 5:
          {
            if (n !== 40) {
              break;
            }
            r.updateSeq = v(o.int64());
            continue;
          }
      }
      if ((n & 7) === 4 || n === 0) {
        break;
      }
      o.skip(n & 7);
    }
    return r;
  },
  fromJSON(i) {
    return {
      heartbeat: d(i.heartbeat) ? p.fromJSON(i.heartbeat) : undefined,
      snapshot: d(i.snapshot) ? u.fromJSON(i.snapshot) : undefined,
      batchUpdate: d(i.batchUpdate) ? f.fromJSON(i.batchUpdate) : undefined,
      generationId: d(i.generationId) ? globalThis.Number(i.generationId) : 0,
      updateSeq: d(i.updateSeq) ? globalThis.Number(i.updateSeq) : 0
    };
  },
  toJSON(i) {
    const t = {};
    if (i.heartbeat !== undefined) {
      t.heartbeat = p.toJSON(i.heartbeat);
    }
    if (i.snapshot !== undefined) {
      t.snapshot = u.toJSON(i.snapshot);
    }
    if (i.batchUpdate !== undefined) {
      t.batchUpdate = f.toJSON(i.batchUpdate);
    }
    if (i.generationId !== 0) {
      t.generationId = Math.round(i.generationId);
    }
    if (i.updateSeq !== 0) {
      t.updateSeq = Math.round(i.updateSeq);
    }
    return t;
  },
  create(i) {
    return q.fromPartial(i ?? {});
  },
  fromPartial(i) {
    const t = T();
    t.heartbeat = i.heartbeat !== undefined && i.heartbeat !== null ? p.fromPartial(i.heartbeat) : undefined;
    t.snapshot = i.snapshot !== undefined && i.snapshot !== null ? u.fromPartial(i.snapshot) : undefined;
    t.batchUpdate = i.batchUpdate !== undefined && i.batchUpdate !== null ? f.fromPartial(i.batchUpdate) : undefined;
    t.generationId = i.generationId ?? 0;
    t.updateSeq = i.updateSeq ?? 0;
    return t;
  }
};
function N() {
  return {
    vol1h: 0,
    vol24h: 0,
    hoursTo25: 0,
    hoursTo50: 0
  };
}
const c = {
  encode(i, t = new h()) {
    if (i.vol1h !== 0) {
      t.uint32(8).int32(i.vol1h);
    }
    if (i.vol24h !== 0) {
      t.uint32(16).int32(i.vol24h);
    }
    if (i.hoursTo25 !== 0) {
      t.uint32(29).float(i.hoursTo25);
    }
    if (i.hoursTo50 !== 0) {
      t.uint32(37).float(i.hoursTo50);
    }
    return t;
  },
  decode(i, t) {
    const o = i instanceof e ? i : new e(i);
    const a = t === undefined ? o.len : o.pos + t;
    const r = N();
    while (o.pos < a) {
      const n = o.uint32();
      switch (n >>> 3) {
        case 1:
          {
            if (n !== 8) {
              break;
            }
            r.vol1h = o.int32();
            continue;
          }
        case 2:
          {
            if (n !== 16) {
              break;
            }
            r.vol24h = o.int32();
            continue;
          }
        case 3:
          {
            if (n !== 29) {
              break;
            }
            r.hoursTo25 = o.float();
            continue;
          }
        case 4:
          {
            if (n !== 37) {
              break;
            }
            r.hoursTo50 = o.float();
            continue;
          }
      }
      if ((n & 7) === 4 || n === 0) {
        break;
      }
      o.skip(n & 7);
    }
    return r;
  },
  fromJSON(i) {
    return {
      vol1h: d(i.vol1h) ? globalThis.Number(i.vol1h) : 0,
      vol24h: d(i.vol24h) ? globalThis.Number(i.vol24h) : 0,
      hoursTo25: d(i.hoursTo25) ? globalThis.Number(i.hoursTo25) : 0,
      hoursTo50: d(i.hoursTo50) ? globalThis.Number(i.hoursTo50) : 0
    };
  },
  toJSON(i) {
    const t = {};
    if (i.vol1h !== 0) {
      t.vol1h = Math.round(i.vol1h);
    }
    if (i.vol24h !== 0) {
      t.vol24h = Math.round(i.vol24h);
    }
    if (i.hoursTo25 !== 0) {
      t.hoursTo25 = i.hoursTo25;
    }
    if (i.hoursTo50 !== 0) {
      t.hoursTo50 = i.hoursTo50;
    }
    return t;
  },
  create(i) {
    return c.fromPartial(i ?? {});
  },
  fromPartial(i) {
    const t = N();
    t.vol1h = i.vol1h ?? 0;
    t.vol24h = i.vol24h ?? 0;
    t.hoursTo25 = i.hoursTo25 ?? 0;
    t.hoursTo50 = i.hoursTo50 ?? 0;
    return t;
  }
};
function v(i) {
  const t = globalThis.Number(i.toString());
  if (t > globalThis.Number.MAX_SAFE_INTEGER) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (t < globalThis.Number.MIN_SAFE_INTEGER) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return t;
}
function d(i) {
  return i != null;
}
export { l as AuctionItem, f as BatchUpdate, p as Heartbeat, u as Snapshot, q as StreamMessage, c as Velocity, m as protobufPackage };