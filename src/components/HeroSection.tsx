import React from 'react';
import { ArrowRight, ChevronRight, Phone, MapPin, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { QUICK_STATS, GROUP_HERITAGE } from '../data/groupData';

interface HeroSectionProps {
  language: 'en' | 'am';
  onExploreSectors: () => void;
  onExploreLeadership: () => void;
  onOpenInquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onExploreSectors,
  onExploreLeadership,
  onOpenInquiry,
}) => {
  const isAm = language === 'am';

  return (
    <section className="relative bg-[#FAF8F5] border-b border-stone-200 py-16 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle Archival Tagline */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#936B18] tracking-widest uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-[#936B18]" />
          <span>{isAm ? 'የኢትዮጵያ ሁለንተናዊ የኢንቨስትመንትና የቢዝነስ ግሩፕ' : 'ETHIOPIAN MULTI-SECTOR INVESTMENT ENTERPRISE'}</span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="font-mono text-stone-600">{isAm ? 'ከ1962 ዓ.ም. ጀምሮ' : 'ROOTS DATING TO 1962 E.C.'}</span>
        </div>

        {/* Primary Editorial Headline */}
        <div className="max-w-4xl mb-8">
          <h1 className="font-serif-brand text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.15] text-balance">
            {isAm ? (
              <>
                የኢትዮጵያ ኢንዱስትሪና የንግድ ምሰሶ፤ <br />
                <span className="text-[#936B18]">ከ1962 ዓ.ም. እስከ ቀጣይ ትውልድ</span>
              </>
            ) : (
              <>
                Building the Industrial Foundations of <br />
                <span className="text-[#936B18]">Ethiopian Enterprise & Growth</span>
              </>
            )}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-600 leading-relaxed mt-6 max-w-3xl text-pretty font-light">
            {isAm ? (
              <>
                በ1962 ዓ.ም. በአቶ ካሕሳይ አብርሃ የተመሰረተው ለኻምባ ግሩፕ (ለኻምባ ግሩፕ)፤ ዛሬ በሚልኪያስ ካሕሳይ ቀጣይ-ትውልድ ዋና ስራ አስፈፃሚ አመራር ስር በኮንስትራክሽን፣ በማዕድን፣ በግብርና፣ በኢንዱስትሪ፣ በሆስፒታሊቲ እና በትራንስፖርትና ሎጂስቲክስ ዘርፎች ቀጣናዊና ዓለም አቀፍ ዕድገትን እያሳካ ይገኛል።
              </>
            ) : (
              <>
                Established by Kahsay Abraha in 1962 E.C. and propelled by next-generation executive leadership under Milkiyas Kahsay, Lakamba Group drives national operations across construction, mining, agriculture, industry, hospitality, and freight logistics with a disciplined mandate for diversification and international growth.
              </>
            )}
          </p>
        </div>

        {/* Real Contact Coordinates Callout Box */}
        <div className="p-5 sm:p-6 rounded-xl bg-white border border-stone-200/90 shadow-xs max-w-3xl mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-[#936B18] font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{isAm ? 'ዋና መስሪያ ቤት' : 'Corporate Headquarters'}</span>
            </div>
            <p className="text-sm text-stone-900 font-semibold">
              {isAm ? GROUP_HERITAGE.headquartersAm : GROUP_HERITAGE.headquarters}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <a
              href="tel:+251942101090"
              className="px-3.5 py-2 bg-[#F6F4EF] hover:bg-stone-200 text-stone-900 border border-stone-300 rounded-md text-xs font-mono font-semibold transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#936B18]" />
              <span>+251 942 101 090</span>
            </a>
            <a
              href="tel:+251948887756"
              className="px-3.5 py-2 bg-[#F6F4EF] hover:bg-stone-200 text-stone-900 border border-stone-300 rounded-md text-xs font-mono font-semibold transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#936B18]" />
              <span>+251 948 887 756</span>
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-16">
          <button
            onClick={onExploreSectors}
            className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#152A4A] hover:bg-[#0E1D33] rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <span>{isAm ? 'ስድስቱን የስራ ዘርፎች ይመልከቱ' : 'Explore the 6 Core Sectors'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreLeadership}
            className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-semibold text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <span>{isAm ? 'የስራ አስፈፃሚ አመራር (ሚልኪያስ ካሕሳይ)' : 'Executive Leadership Vision'}</span>
            <ChevronRight className="w-4 h-4 text-[#936B18]" />
          </button>
        </div>

        {/* Unboxed Quantitative Metrics Row */}
        <div className="pt-8 border-t border-stone-300 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {QUICK_STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-serif-brand text-2xl sm:text-3xl font-bold text-stone-900 tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#936B18] mt-1">
                {isAm ? stat.labelAm : stat.label}
              </span>
              <span className="text-[11px] text-stone-500 font-normal mt-0.5">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
