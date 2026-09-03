/**
 * Price Service for MUT Dashboard
 * Integrates mut.gg price API with EA Blaze auction data
 */

import { Platform, PlatformLabel, formatPrice, formatPercentChange, getPriceChangeColor } from './mutgg-price-api.js';

// Price data cache
let priceCache = new Map();
let lastCacheUpdate = 0;
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

/**
 * Fetch prices from mut.gg API
 */
export async function fetchMutGGPrices(platform = Platform.XBOX_SERIES_X) {
  try {
    const { getOverallPrices, getPriceDashboard, getTrainingPrices } = await import('./mutgg-price-api.js');
    
    const [overallPrices, dashboard, training] = await Promise.all([
      getOverallPrices(),
      getPriceDashboard(platform),
      getTrainingPrices(platform),
    ]);

    return {
      overallPrices,
      dashboard,
      training,
      platform,
      lastUpdated: Date.now(),
    };
  } catch (error) {
    console.error('Failed to fetch mut.gg prices:', error);
    return null;
  }
}

/**
 * Get cached price data
 */
export function getCachedPrices() {
  const now = Date.now();
  if (now - lastCacheUpdate < CACHE_TTL_MS && priceCache.size > 0) {
    return priceCache;
  }
  return null;
}

/**
 * Set cached price data
 */
export function setCachedPrices(data) {
  priceCache = new Map(Object.entries(data));
  lastCacheUpdate = Date.now();
}

/**
 * Merge mut.gg player data with EA Blaze auction prices
 */
export function mergePlayerWithPrices(player, prices) {
  if (!player || !prices) return player;

  const externalId = player.externalId;
  if (!externalId) return player;

  // Find matching price data
  const priceData = prices.find(p => p.externalId === externalId);
  if (!priceData) return player;

  return {
    ...player,
    prices: {
      xbsxPrice: priceData.xbsxPrice,
      xbsxPriceDisplay: priceData.xbsxPriceDisplay,
      xbsxPercentChange: priceData.xbsxPercentChange,
      xbsxPercentChangeDisplay: priceData.xbsxPercentChangeDisplay,
      ps5Price: priceData.ps5Price,
      ps5PriceDisplay: priceData.ps5PriceDisplay,
      pcPrice: priceData.pcPrice,
      pcPriceDisplay: priceData.pcPriceDisplay,
    },
    priceDisplay: formatPrice(priceData.xbsxPrice),
    percentChange: priceData.xbsxPercentChange,
    percentChangeDisplay: formatPercentChange(priceData.xbsxPercentChange),
    priceChangeColor: getPriceChangeColor(priceData.xbsxPercentChange),
  };
}

/**
 * Format auction data for dashboard display
 */
export function formatAuctionForDisplay(auction, playerData = null) {
  const base = {
    id: auction.id || `ea_${auction.auctionId}`,
    auctionId: auction.auctionId,
    playerName: auction.playerName,
    position: auction.position,
    program: auction.program,
    ovr: auction.ovr,
    buyNowPrice: auction.buyNowPrice,
    currentBid: auction.currentBid,
    goingPrice: auction.goingPrice,
    netResale: auction.netResale,
    profit: auction.profit,
    roi: auction.roi,
    discount: auction.discount,
    imageUrl: auction.imageUrl,
    status: auction.status,
    platform: auction.platform || 'xbox',
  };

  if (playerData) {
    return {
      ...base,
      ...mergePlayerWithPrices(playerData, []),
    };
  }

  return base;
}

/**
 * Calculate deal score for sorting
 */
export function calculateDealScore(auction) {
  const { profit, roi, discount, goingPrice, buyNowPrice } = auction;
  
  if (!goingPrice || !buyNowPrice) return 0;
  
  // Weighted score: profit * 0.4 + roi * 0.3 + discount * 100 * 0.3
  const profitScore = Math.max(0, profit) * 0.4;
  const roiScore = Math.max(0, roi) * 0.3;
  const discountScore = discount * 100 * 0.3;
  
  return profitScore + roiScore + discountScore;
}

export { Platform, PlatformLabel, formatPrice, formatPercentChange, getPriceChangeColor };
