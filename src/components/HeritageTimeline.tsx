import React, { useState } from 'react';
import { Calendar, User, ArrowRight, ShieldCheck } from 'lucide-react';
import { TIMELINE_MILESTONES, GROUP_HERITAGE } from '../data/groupData';

interface HeritageTimelineProps {
  language: 'en' | 'am';
  onOpenFactsheet: () => void;
}

export const HeritageTimeline: React.FC<HeritageTimelineProps> = ({
  language,
  onOpenFactsheet,
}) => {
  const isAm = language === 'am';
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);

  return (
    <section id="heritage" className="py-16 sm:py-24 bg-[#F5F2EB] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#936B18] uppercase tracking-widest mb-3">
            <span>{isAm ? 'የኢንተርፕራይዙ ታሪክ' : 'ENTERPRISE HERITAGE & ORIGINS'}</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>{isAm ? 'ከ1962 ዓ.ም. ጀምሮ' : 'ROOTS SINCE 1962 E.C.'}</span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight text-balance">
            {isAm ? 'ከ1962 ዓ.ም. ጀምሮ ስድስት አስርት ዓመታት ያስቆጠረ ቅርስ' : 'Six Decades of Nation-Building & Enterprise'}
          </h2>
          <p className="text-stone-600 text-xs sm:text-base mt-4 leading-relaxed font-light">
            {isAm
              ? 'በ1962 ዓ.ም. በአቶ ካሕሳይ አብርሃ የተጀመረው የጭነት ትራንስፖርትና የንግድ ስራ፣ ዛሬ በሚልኪያስ ካሕሳይ ቀጣይ-ትውልድ አመራር ስር ዘመናዊና የተሟላ የብዙ ዘርፍ ግሩፕ ሆኖ አድጓል።'
              : 'Pioneered by founder Kahsay Abraha in 1962 E.C. through freight logistics and regional trade, advancing today under next-generation executive leadership by Milkiyas Kahsay into an integrated multi-sector force.'}
          </p>
        </div>

        {/* Milestone Steps Bar (Mobile Scrollable) */}
        <div className="relative mb-8 sm:mb-12">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {TIMELINE_MILESTONES.map((m, idx) => {
              const isActive = activeMilestoneIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveMilestoneIndex(idx)}
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl transition-all cursor-pointer shrink-0 min-h-[44px] ${
                    isActive
                      ? 'bg-white border-2 border-[#936B18] text-stone-900 shadow-xs'
                      : 'bg-white/80 border border-stone-300 text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                      isActive ? 'bg-[#936B18] text-white' : 'bg-stone-200 text-stone-700'
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <div className="text-left">
                    <span className="font-serif-brand text-xs sm:text-sm font-bold block leading-none">
                      {m.yearEc}
                    </span>
                    <span className="text-[10px] text-stone-500 font-mono">
                      {m.yearGc}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Milestone Card */}
        {(() => {
          const current = TIMELINE_MILESTONES[activeMilestoneIndex];
          return (
            <div className="p-6 sm:p-10 rounded-2xl bg-white border border-stone-200/90 shadow-xs relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-stone-200">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#936B18] font-semibold mb-2 font-mono">
                    <span>{current.yearEc}</span>
                    <span aria-hidden="true" className="text-stone-300">/</span>
                    <span className="text-stone-500">{current.yearGc}</span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span className="text-stone-700 font-sans font-medium">{current.pillar}</span>
                  </div>
                  <h3 className="font-serif-brand text-xl sm:text-3xl font-bold text-stone-900">
                    {isAm ? current.titleAm : current.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs text-stone-800 bg-[#FAF8F5] px-3.5 py-2 rounded-lg border border-stone-200 shrink-0 self-start sm:self-auto font-medium">
                  <User className="w-3.5 h-3.5 text-[#936B18]" />
                  <span className="text-stone-500">{isAm ? 'አመራር: ' : 'Leadership: '}</span>
                  <span className="font-bold text-stone-900">{current.leader}</span>
                </div>
              </div>

              <p className="text-stone-700 text-xs sm:text-base leading-relaxed max-w-4xl mb-6 font-light">
                {isAm ? current.descriptionAm : current.description}
              </p>

              {/* Historical Context Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-stone-200 text-xs text-stone-600">
                <div className="flex flex-wrap items-center gap-3">
                  <span>
                    <strong className="text-stone-900">{isAm ? 'መስራች: ' : 'Founder: '}</strong>
                    {isAm ? GROUP_HERITAGE.founderAm : GROUP_HERITAGE.founder} (1962 ዓ.ም.)
                  </span>
                  <span aria-hidden="true" className="hidden sm:inline text-stone-300">·</span>
                  <span>
                    <strong className="text-stone-900">{isAm ? 'ቀጣይ ትውልድ መሪ: ' : 'Next-Gen Leader: '}</strong>
                    {isAm ? GROUP_HERITAGE.nextGenLeaderAm : GROUP_HERITAGE.nextGenLeader}
                  </span>
                </div>

                <button
                  onClick={onOpenFactsheet}
                  className="text-[#936B18] hover:text-[#725211] font-semibold flex items-center gap-1 cursor-pointer transition-colors self-start sm:self-auto"
                >
                  <span>{isAm ? 'ሙሉ የኩባንያውን መግለጫ አንብብ' : 'View Group Factsheet'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
