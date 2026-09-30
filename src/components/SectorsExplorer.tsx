import React, { useState } from 'react';
import { Hammer, Mountain, Sprout, Factory, Hotel, Truck, ChevronRight, CheckCircle2, Layers, ArrowUpRight } from 'lucide-react';
import { CORE_SECTORS, SectorInfo } from '../data/groupData';

interface SectorsExplorerProps {
  language: 'en' | 'am';
  onSelectSectorForInquiry: (sectorName: string) => void;
}

export const SectorsExplorer: React.FC<SectorsExplorerProps> = ({
  language,
  onSelectSectorForInquiry,
}) => {
  const isAm = language === 'am';
  const [selectedSectorId, setSelectedSectorId] = useState<string>('construction');
  const [modalSector, setModalSector] = useState<SectorInfo | null>(null);

  const activeSector = CORE_SECTORS.find((s) => s.id === selectedSectorId) || CORE_SECTORS[0];

  const getSectorIcon = (id: string) => {
    switch (id) {
      case 'construction':
        return <Hammer className="w-4 h-4" />;
      case 'mining':
        return <Mountain className="w-4 h-4" />;
      case 'agriculture':
        return <Sprout className="w-4 h-4" />;
      case 'industry':
        return <Factory className="w-4 h-4" />;
      case 'hospitality':
        return <Hotel className="w-4 h-4" />;
      case 'logistics':
        return <Truck className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  const getSectorNumber = (id: string) => {
    const idx = CORE_SECTORS.findIndex((s) => s.id === id);
    return `0${idx + 1}`;
  };

  return (
    <section id="sectors" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#936B18] uppercase tracking-widest mb-3">
              <span>{isAm ? 'ዋና ዋና የንግድ መስኮች' : 'CORE BUSINESS FOCUS'}</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>{isAm ? '6 የተቀናጁ ዘርፎች' : '6 INTEGRATED SECTORS'}</span>
            </div>
            <h2 className="font-serif-brand text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight text-balance">
              {isAm ? 'ስድስቱ የለኻምባ ግሩፕ የኢንቨስትመንት ምሰሶዎች' : 'Multi-Sector Industrial Architecture'}
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-3 leading-relaxed font-light">
              {isAm
                ? 'በኢትዮጵያ ኢኮኖሚ ውስጥ ቁልፍ የሆኑ ዘርፎችን በማቀናጀት ከከባድ ኮንስትራክሽን እስከ ማዕድን፣ ከግብርና ምርቶች እስከ አለም አቀፍ ጭነት ሎጂስቲክስ ድረስ በጋራ ይሰራሉ።'
                : 'Synergistic enterprise integration spanning heavy civil construction, dimensional stone mining, commercial agriculture, domestic manufacturing, premium hospitality, and intermodal transport logistics.'}
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-stone-600 border border-stone-300 bg-white px-3.5 py-2 rounded-lg font-mono">
            <span className="text-[#936B18] font-bold">06</span>
            <span>{isAm ? 'የተሟሉ የስራ ዘርፎች' : 'Operating Holdings'}</span>
          </div>
        </div>

        {/* Mobile-Friendly Horizontal Swipeable Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {CORE_SECTORS.map((sector) => {
            const isActive = sector.id === selectedSectorId;
            return (
              <button
                key={sector.id}
                onClick={() => setSelectedSectorId(sector.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer shrink-0 min-h-[42px] ${
                  isActive
                    ? 'bg-[#152A4A] text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:text-stone-900 border border-stone-300 hover:bg-stone-50'
                }`}
              >
                {getSectorIcon(sector.id)}
                <span>{isAm ? sector.nameAm : sector.name}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Sector Spotlight Card (Refined Editorial Layout) */}
        <div className="rounded-2xl border border-stone-200 bg-white shadow-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Editorial Masthead & Large Numbering */}
          <div className="lg:col-span-4 bg-[#F5F2EB] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-200">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#936B18] tracking-widest uppercase">
                  {activeSector.category}
                </span>
                <span className="font-serif-brand text-4xl sm:text-5xl font-bold text-stone-300">
                  {getSectorNumber(activeSector.id)}
                </span>
              </div>

              <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
                {isAm ? activeSector.nameAm : activeSector.name}
              </h3>

              <p className="text-xs text-stone-600 font-medium italic mb-6">
                "{isAm ? activeSector.taglineAm : activeSector.tagline}"
              </p>
            </div>

            {/* Holdings Pill List */}
            <div className="pt-4 border-t border-stone-300">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 block mb-2">
                {isAm ? 'ዋና ዋና ንዑስ ድርጅቶች' : 'Operating Holdings'}
              </span>
              <ul className="space-y-1.5 text-xs text-stone-800">
                {activeSector.keyHoldings.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#936B18] shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Narrative, Capabilities & Metrics */}
          <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#936B18] uppercase tracking-wider mb-2">
                <span>{isAm ? 'የዘርፉ ማጠቃለያ' : 'OPERATIONAL SUMMARY'}</span>
                <span aria-hidden="true">·</span>
                <span>{activeSector.operationalFocus}</span>
              </div>

              <p className="text-stone-700 text-sm leading-relaxed mb-6 font-light">
                {isAm ? activeSector.descriptionAm : activeSector.description}
              </p>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#FAF8F5] border border-stone-200 mb-6">
                {activeSector.metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-serif-brand text-lg sm:text-2xl font-bold text-stone-900 tabular-nums">
                      {metric.value}
                    </span>
                    <span className="text-[10px] sm:text-xs text-stone-600 mt-0.5 line-clamp-1 font-medium">
                      {isAm ? metric.labelAm : metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Capabilities Grid */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-800 block mb-2.5">
                  {isAm ? 'ዋና ዋና አቅሞችና ስፔሻላይዜሽን' : 'Core Capabilities & Deliverables'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                  {activeSector.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#936B18] shrink-0" />
                      <span className="truncate">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions for this sector */}
            <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
              <button
                onClick={() => setModalSector(activeSector)}
                className="px-4 py-2 text-xs font-semibold text-stone-800 bg-[#FAF8F5] hover:bg-stone-200 border border-stone-300 rounded-md transition-colors cursor-pointer text-center"
              >
                {isAm ? 'ሙሉ ዝርዝር' : 'Full Specifications'}
              </button>
              <button
                onClick={() => onSelectSectorForInquiry(activeSector.name)}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#152A4A] hover:bg-[#0E1D33] rounded-md transition-colors cursor-pointer text-center"
              >
                {isAm ? 'አጋርነት ጀምር' : 'Inquire for this Sector'}
              </button>
            </div>
          </div>
        </div>

        {/* 6-Sector Overview Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CORE_SECTORS.map((sector) => {
            const isSelected = sector.id === selectedSectorId;
            return (
              <div
                key={sector.id}
                onClick={() => setSelectedSectorId(sector.id)}
                className={`p-5 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#936B18] shadow-sm'
                    : 'bg-white/80 border-stone-200 hover:border-stone-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-[#FAF8F5] border border-stone-200 text-[#936B18]">
                      {getSectorIcon(sector.id)}
                    </div>
                    <span className="text-[11px] font-medium text-stone-500">{sector.category}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#936B18] translate-x-1' : 'text-stone-400'}`} />
                </div>
                <h4 className="font-serif-brand text-base font-bold text-stone-900 mb-1">
                  {isAm ? sector.nameAm : sector.name}
                </h4>
                <p className="text-xs text-stone-600 line-clamp-2 font-light">
                  {isAm ? sector.descriptionAm : sector.description}
                </p>
                <div className="mt-3 pt-2.5 border-t border-stone-200 flex items-center justify-between text-[11px] text-[#936B18] font-semibold font-mono">
                  <span>{sector.metrics[0].value}</span>
                  <span className="text-stone-500 font-sans font-normal">{isAm ? sector.metrics[0].labelAm : sector.metrics[0].label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sector Specification Modal */}
      {modalSector && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="bg-white border border-stone-200 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs font-semibold text-[#936B18] uppercase tracking-widest font-mono">
                  {modalSector.category}
                </span>
                <h3 className="font-serif-brand text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                  {isAm ? modalSector.nameAm : modalSector.name}
                </h3>
              </div>
              <button
                onClick={() => setModalSector(null)}
                className="p-1.5 text-stone-400 hover:text-stone-900 rounded-lg hover:bg-stone-100 cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-6 font-light">
              {isAm ? modalSector.descriptionAm : modalSector.description}
            </p>

            {/* Holdings */}
            <div className="mb-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-800 mb-2">
                {isAm ? 'ዋና ዋና ንዑስ ድርጅቶች' : 'Operational Holdings'}
              </h4>
              <div className="space-y-1.5">
                {modalSector.keyHoldings.map((h, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200 text-xs text-stone-800 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#936B18] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities */}
            <div className="mb-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-800 mb-2">
                {isAm ? 'አቅሞችና ቴክኒካል ስራዎች' : 'Verified Capabilities'}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                {modalSector.capabilities.map((c, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#936B18] shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#FAF8F5] border border-stone-200 mb-6">
              {modalSector.metrics.map((m, i) => (
                <div key={i}>
                  <div className="font-serif-brand text-base sm:text-lg font-bold text-stone-900">{m.value}</div>
                  <div className="text-[10px] text-stone-500">{isAm ? m.labelAm : m.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-stone-200">
              <button
                onClick={() => setModalSector(null)}
                className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 cursor-pointer"
              >
                {isAm ? 'ዝጋ' : 'Close'}
              </button>
              <button
                onClick={() => {
                  const sName = modalSector.name;
                  setModalSector(null);
                  onSelectSectorForInquiry(sName);
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#152A4A] hover:bg-[#0E1D33] rounded-md cursor-pointer"
              >
                {isAm ? 'የዘርፉን አጋርነት ጠይቅ' : 'Inquire on Sector'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
