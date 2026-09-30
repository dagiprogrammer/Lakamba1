import React, { useState } from 'react';
import { Compass, Globe, Anchor, Route, ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';
import { STRATEGIC_CORRIDORS } from '../data/groupData';

interface ExpansionSectionProps {
  language: 'en' | 'am';
  onOpenInquiry: () => void;
}

export const ExpansionSection: React.FC<ExpansionSectionProps> = ({
  language,
  onOpenInquiry,
}) => {
  const isAm = language === 'am';
  const [selectedCorridorIndex, setSelectedCorridorIndex] = useState(0);

  const active = STRATEGIC_CORRIDORS[selectedCorridorIndex];

  return (
    <section id="expansion" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#936B18] uppercase tracking-widest mb-3">
            <span>{isAm ? 'የዕድገትና ማስፋፊያ አቅጣጫ' : 'STRATEGIC EXPANSION'}</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>{isAm ? 'ብዝሃ-ኢንቨስትመንትና ዓለም አቀፍ ዕድገት' : 'DIVERSIFICATION & INTERNATIONAL GROWTH'}</span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight text-balance">
            {isAm ? (
              <>
                ከኢትዮጵያ ወደ ቀጣናው፤ <br />
                <span className="text-[#936B18]">ዓለም አቀፍ የንግድና የኢንቨስትመንት መስመሮች</span>
              </>
            ) : (
              <>
                Connecting Ethiopian Industrial Capacity to <br />
                <span className="text-[#936B18]">Regional & International Trade Corridors</span>
              </>
            )}
          </h2>
          <p className="text-stone-600 text-xs sm:text-base mt-4 leading-relaxed font-light">
            {isAm
              ? 'የቀጣይ-ትውልድ አመራሩ ዋና ስትራቴጂያዊ ግብ የቢዝነስ ዘርፎችን ማብዛትና የኢትዮጵያን ምርቶችና አገልግሎቶች ከጅቡቲ፣ ከበርበራ፣ ከቀይ ባህር እና ከአፍሪካ አህጉራዊ ነፃ ንግድ ቀጠና (AfCFTA) ጋር ማስተሳሰር ነው።'
              : 'Steered by Milkiyas Kahsay, Lakamba Group focuses on diversification and international growth, bridging domestic manufacturing, mining, and agriculture into pan-African and Middle Eastern trade routes.'}
          </p>
        </div>

        {/* Corridor Exploration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Corridor Selection List */}
          <div className="lg:col-span-5 space-y-2.5">
            {STRATEGIC_CORRIDORS.map((c, idx) => {
              const isSelected = selectedCorridorIndex === idx;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCorridorIndex(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex flex-col min-h-[48px] ${
                    isSelected
                      ? 'bg-white border-2 border-[#936B18] shadow-xs'
                      : 'bg-white/80 border-stone-200 hover:border-stone-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#936B18]">
                      {isAm ? `መስመር 0${idx + 1}` : `Corridor 0${idx + 1}`}
                    </span>
                    <span className="text-[11px] font-medium text-stone-500">
                      {c.status}
                    </span>
                  </div>
                  <h3 className="font-serif-brand text-sm sm:text-base font-bold text-stone-900 mb-1">
                    {isAm ? c.titleAm : c.title}
                  </h3>
                  <p className="text-xs text-stone-500 font-mono truncate">
                    {c.corridor}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Corridor Detail Screen */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-2xl bg-white border border-stone-200/90 shadow-xs relative">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#936B18] mb-2 font-mono uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>{isAm ? 'ንቁ የቀጠና መስመር' : 'Active Strategic Gateway'}</span>
            </div>

            <h3 className="font-serif-brand text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              {isAm ? active.titleAm : active.title}
            </h3>

            {/* Route Path visualizer */}
            <div className="my-5 p-3.5 sm:p-4 rounded-xl bg-[#FAF8F5] border border-stone-200">
              <div className="text-[11px] text-stone-500 mb-1 flex items-center gap-1.5 font-medium">
                <Route className="w-3.5 h-3.5 text-[#936B18]" />
                <span>{isAm ? 'የመተላለፊያ መስመር: ' : 'Trade Artery Pathway: '}</span>
              </div>
              <div className="font-mono text-xs sm:text-sm text-stone-900 font-semibold break-words">
                {active.corridor}
              </div>
            </div>

            {/* Scope & Impact */}
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                  {isAm ? 'የስራው ወሰንና አቅም' : 'Operational Scope'}
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
                  {isAm ? active.scopeAm : active.scope}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                  {isAm ? 'ስትራቴጂካዊ ፋይዳ' : 'Economic Impact & Inflow'}
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
                  {active.strategicImpact}
                </p>
              </div>
            </div>

            {/* Key Growth Pillars */}
            <div className="pt-4 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 mb-6">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#936B18] shrink-0" />
                <span>Cross-Border Joint Ventures</span>
              </div>
              <div className="flex items-center gap-2">
                <Anchor className="w-3.5 h-3.5 text-[#936B18] shrink-0" />
                <span>Bonded Intermodal Terminals</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#936B18] shrink-0" />
                <span>Direct Commodity Off-Take</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#936B18] shrink-0" />
                <span>AfCFTA Preferential Tariffs</span>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-xs text-stone-500 text-center sm:text-left">
                {isAm ? 'ዓለም አቀፍ የንግድ እድሎች' : 'Bilateral Partnership Gateway'}
              </span>
              <button
                onClick={onOpenInquiry}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#152A4A] hover:bg-[#0E1D33] rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>{isAm ? 'የንግድ ጥያቄ አቅርብ' : 'Inquire for Partnership'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
