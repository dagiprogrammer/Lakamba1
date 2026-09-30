import React, { useState } from 'react';
import { Quote, Briefcase, Globe2, Building2, ShieldCheck, ArrowRight, UserCheck } from 'lucide-react';
import { EXECUTIVE_DETAILS, GROUP_HERITAGE } from '../data/groupData';

interface ExecutiveSpotlightProps {
  language: 'en' | 'am';
  onOpenInquiry: () => void;
}

export const ExecutiveSpotlight: React.FC<ExecutiveSpotlightProps> = ({
  language,
  onOpenInquiry,
}) => {
  const isAm = language === 'am';
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section id="leadership" className="py-16 sm:py-24 bg-[#0F1E36] text-white border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-3">
            <span>{isAm ? 'የስራ አስፈፃሚ አመራር' : 'EXECUTIVE STEWARDSHIP & GOVERNANCE'}</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span>{isAm ? 'ቀጣይ ትውልድ ራዕይ' : 'NEXT-GENERATION LEADERSHIP'}</span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            {isAm ? (
              <>
                የቀጣይ-ትውልድ አመራር፤ <br />
                <span className="text-[#D4AF37]">ሚልኪያስ ካሕሳይ</span>
              </>
            ) : (
              <>
                Next-Generation Executive Leadership: <br />
                <span className="text-[#D4AF37]">Milkiyas Kahsay</span>
              </>
            )}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed font-light">
            {isAm
              ? 'በ1962 ዓ.ም. በአቶ ካሕሳይ አብርሃ ከተጣለው ጠንካራ የቤተሰብ ኢንተርፕራይዝ መሰረት በመነሳት፣ ዛሬ በሚልኪያስ ካሕሳይ የሚመራው ዋና ስራ አስፈፃሚ አመራር በስድስቱ የስራ ዘርፎች ላይ ቀጥተኛ ኦፕሬሽን እና ስትራቴጂካዊ ዕድገትን በመምራት ቡድኑን ወደ ዓለም አቀፍ ደረጃ እያሸጋገረው ነው።'
              : 'Milkiyas Kahsay represents the next-generation executive leadership within the Lakamba Group (ለኻምባ ግሩፕ), a family-owned Ethiopian business enterprise initially established by Kahsay Abraha in 1962 E.C. He is actively involved in operational management and strategic growth across core holdings.'}
          </p>
        </div>

        {/* Executive Profile & Governance Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Executive Profile Summary */}
          <div className="lg:col-span-5 rounded-2xl bg-[#091322] border border-slate-800 p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800">
              {/* Executive Monogram Inset */}
              <div className="w-16 h-16 rounded-xl bg-[#14233D] border border-[#D4AF37] flex items-center justify-center font-serif-brand text-2xl font-bold text-[#D4AF37] shrink-0">
                MK
              </div>
              <div>
                <h3 className="font-serif-brand text-xl sm:text-2xl font-bold text-white">
                  {isAm ? EXECUTIVE_DETAILS.nameAm : EXECUTIVE_DETAILS.name}
                </h3>
                <span className="text-xs text-[#D4AF37] font-semibold block mt-0.5">
                  {EXECUTIVE_DETAILS.organization}
                </span>
              </div>
            </div>

            {/* Structured Credentials */}
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="p-3 rounded-lg bg-[#111F36] border border-slate-800">
                <span className="text-slate-400 block text-[11px] uppercase tracking-wider mb-1 font-semibold">
                  {isAm ? 'የአመራር ሚና' : 'Leadership Role'}
                </span>
                <span className="font-medium text-white text-sm">
                  {isAm ? EXECUTIVE_DETAILS.roleAm : EXECUTIVE_DETAILS.role}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-[#111F36] border border-slate-800">
                <span className="text-slate-400 block text-[11px] uppercase tracking-wider mb-1 font-semibold">
                  {isAm ? 'ዋና የስራ ዘርፎች' : 'Business Focus'}
                </span>
                <span className="text-slate-200">
                  {isAm ? EXECUTIVE_DETAILS.businessFocusAm : EXECUTIVE_DETAILS.businessFocus}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-[#111F36] border border-slate-800">
                <span className="text-slate-400 block text-[11px] uppercase tracking-wider mb-1 font-semibold">
                  {isAm ? 'የዕድገትና የማስፋፊያ አቅጣጫ' : 'Expansion Focus'}
                </span>
                <span className="text-[#D4AF37] font-semibold text-sm">
                  {isAm ? EXECUTIVE_DETAILS.expansionFocusAm : EXECUTIVE_DETAILS.expansionFocus}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-[#111F36] border border-slate-800">
                <span className="text-slate-400 block text-[11px] uppercase tracking-wider mb-1 font-semibold">
                  {isAm ? 'የመሰረት ቅርስ' : 'Enterprise Lineage'}
                </span>
                <span className="text-slate-300">
                  {isAm ? EXECUTIVE_DETAILS.lineageAm : EXECUTIVE_DETAILS.lineage}
                </span>
              </div>
            </div>

            {/* Operational Mandate */}
            <div className="mt-6 pt-5 border-t border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {isAm ? EXECUTIVE_DETAILS.operationalMandateAm : EXECUTIVE_DETAILS.operationalMandate}
              </p>
            </div>
          </div>

          {/* Right Column: Statement, Strategic Pillars & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Executive Statement Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#091322] border border-slate-800 relative">
              <Quote className="w-8 h-8 text-[#D4AF37]/50 mb-3" />
              <blockquote className="text-base sm:text-lg text-slate-200 font-serif-brand italic leading-relaxed mb-6 font-light">
                "{isAm ? EXECUTIVE_DETAILS.quoteAm : EXECUTIVE_DETAILS.quote}"
              </blockquote>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-800 gap-2">
                <span className="font-semibold text-white">
                  {isAm ? 'ሚልኪያስ ካሕሳይ · ለኻምባ ግሩፕ' : 'Milkiyas Kahsay · Lakamba Group'}
                </span>
                <span className="text-[#D4AF37]">
                  {isAm ? 'የቀጣይ-ትውልድ ዋና ስራ አመራር' : 'Executive Management'}
                </span>
              </div>
            </div>

            {/* Strategic Pillars Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {isAm ? 'ስትራቴጂካዊ የትኩረት ምሰሶዎች' : 'Strategic Growth Pillars'}
                </h4>
                <span className="text-xs text-slate-500 font-mono">
                  {activePillar + 1} / {EXECUTIVE_DETAILS.strategicPillars.length}
                </span>
              </div>

              {/* Segmented Pillar Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                {EXECUTIVE_DETAILS.strategicPillars.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePillar(idx)}
                    className={`px-3 py-2 text-xs font-semibold rounded-lg text-left transition-all cursor-pointer truncate ${
                      activePillar === idx
                        ? 'bg-[#D4AF37] text-slate-950 font-bold shadow-md'
                        : 'bg-[#091322] text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {isAm ? p.titleAm : p.title}
                  </button>
                ))}
              </div>

              {/* Active Pillar Card */}
              <div className="p-5 sm:p-6 rounded-xl bg-[#091322] border border-slate-800">
                <h5 className="font-serif-brand text-base sm:text-lg font-bold text-[#D4AF37] mb-2">
                  {isAm
                    ? EXECUTIVE_DETAILS.strategicPillars[activePillar].titleAm
                    : EXECUTIVE_DETAILS.strategicPillars[activePillar].title}
                </h5>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {isAm
                    ? EXECUTIVE_DETAILS.strategicPillars[activePillar].descriptionAm
                    : EXECUTIVE_DETAILS.strategicPillars[activePillar].description}
                </p>
              </div>
            </div>

            {/* Direct Contact Prompt */}
            <div className="p-5 rounded-xl bg-[#111F36] border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white">
                  {isAm ? 'ከስራ አስፈፃሚ አመራሩ ጋር በቀጥታ ይገናኙ' : 'Direct Dialogue with Executive Management'}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {isAm
                    ? 'ለዓለም አቀፍ ኢንቨስትመንትና የጋራ ስራዎች ቀጥተኛ መስመር'
                    : 'Institutional joint ventures and cross-border partnership proposals.'}
                </p>
              </div>
              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-slate-950 bg-[#D4AF37] hover:bg-[#e4be45] rounded-md transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>{isAm ? 'ጥያቄ አስገባ' : 'Submit Proposal'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
