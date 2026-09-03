/**
 * BinderView — Rich Interactive Binder Panel with Quick-Sell & Auction Lister Modal
 */

(function (global) {
  class BinderView {
    constructor(containerId, store) {
      this.container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
      this.store = store || new global.BinderStore();
      this.searchQuery = '';
      this.selectedTier = 'all';

      this.init();
    }

    init() {
      this.store.subscribe(() => this.render());
      this.render();
    }

    setFilter(tier) {
      this.selectedTier = tier;
      this.render();
    }

    setSearch(query) {
      this.searchQuery = (query || '').toLowerCase().trim();
      this.render();
    }

    getFilteredCards() {
      return this.store.cards.filter(c => {
        const ovr = c.overallRating || c.ovr || 0;
        if (this.selectedTier === '97' && ovr < 97) return false;
        if (this.selectedTier === '94-96' && (ovr < 94 || ovr >= 97)) return false;
        if (this.selectedTier === '90-93' && (ovr < 90 || ovr >= 94)) return false;

        if (this.searchQuery) {
          const name = (c.playerName || c.name || '').toLowerCase();
          const pos = (c.position || '').toLowerCase();
          const prog = (c.program || '').toLowerCase();
          if (!name.includes(this.searchQuery) && !pos.includes(this.searchQuery) && !prog.includes(this.searchQuery)) {
            return false;
          }
        }
        return true;
      });
    }

    render() {
      if (!this.container) return;

      const filtered = this.getFilteredCards();
      const tiers = this.store.tierCounts;

      this.container.innerHTML = `
        <div class="flex flex-col h-full bg-[#0b0f17] text-slate-200">
          <!-- Top Binder Bar -->
          <div class="h-14 border-b border-slate-800/80 px-4 flex items-center justify-between bg-slate-900/60 shrink-0">
            <div class="flex items-center gap-3">
              <h2 class="font-bold text-sm text-white">My Binder</h2>
              <span class="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 font-mono font-bold border border-indigo-500/20">
                ${this.store.cards.length} items
              </span>
            </div>

            <!-- Tier Chips -->
            <div class="flex items-center gap-1.5 text-xs">
              <button class="tier-btn px-2.5 py-1 rounded font-semibold ${this.selectedTier === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}" data-tier="all">
                All (${this.store.cards.length})
              </button>
              <button class="tier-btn px-2.5 py-1 rounded font-semibold ${this.selectedTier === '97' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}" data-tier="97">
                97+ (${tiers.tier97Plus})
              </button>
              <button class="tier-btn px-2.5 py-1 rounded font-semibold ${this.selectedTier === '94-96' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}" data-tier="94-96">
                94-96 (${tiers.tier94to96})
              </button>
              <button class="tier-btn px-2.5 py-1 rounded font-semibold ${this.selectedTier === '90-93' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}" data-tier="90-93">
                90-93 (${tiers.tier90to93})
              </button>
            </div>
          </div>

          <!-- Cards Grid -->
          <div class="flex-1 overflow-y-auto p-4">
            ${filtered.length === 0 ? `
              <div class="flex flex-col items-center justify-center py-20 text-slate-500">
                <p class="text-sm font-semibold">No cards found in your binder</p>
                <p class="text-xs text-slate-600 mt-1">Link your EA account or add cards from the live search</p>
              </div>
            ` : `
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                ${filtered.map(card => `
                  <div class="rounded-xl bg-slate-900 border border-slate-800 p-2.5 flex flex-col justify-between hover:border-indigo-500/50 transition-all group">
                    <div class="flex items-start justify-between">
                      <span class="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-slate-300">
                        ${card.position}
                      </span>
                      <span class="font-mono font-black text-xs px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                        ${card.overallRating}
                      </span>
                    </div>

                    <div class="my-2">
                      <div class="font-bold text-xs text-white truncate">${card.playerName}</div>
                      <div class="text-[10px] text-slate-500 truncate">${card.program} • ${card.team}</div>
                    </div>

                    <div class="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                      <span class="text-slate-400">Value:</span>
                      <span class="font-bold text-emerald-400">${Number(card.currentMarketPrice || 0).toLocaleString()}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            `}
          </div>
        </div>
      `;

      this.container.querySelectorAll('.tier-btn').forEach(btn => {
        btn.addEventListener('click', () => this.setFilter(btn.dataset.tier));
      });
    }
  }

  global.BinderView = BinderView;
})(typeof window !== 'undefined' ? window : globalThis);
