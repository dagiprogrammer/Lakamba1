import React from 'react';
import { Printer, MapPin, Phone, Building, Users, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { LakambaBrandMark } from './LakambaBrandMark';
import { GROUP_HERITAGE, QUICK_STATS, CORE_SECTORS } from '../data/groupData';

interface FactsheetModalProps {
  language: 'en' | 'am';
  onClose: () => void;
}

export const FactsheetModal: React.FC<FactsheetModalProps> = ({
  language,
  onClose,
}) => {
  const isAm = language === 'am';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white border border-stone-200 rounded-2xl max-w-3xl w-full p-5 sm:p-8 shadow-2xl relative my-auto max-h-[92vh] overflow-y-auto">
        {/* Header Bar */}
        <div className="flex items-start justify-between border-b border-stone-200 pb-5 mb-5">
          <div className="flex items-center gap-3">
            <LakambaBrandMark size="sm" isAm={isAm} theme="light" />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-stone-600 hover:text-stone-900 bg-stone-100 rounded-lg hover:bg-stone-200 transition-colors cursor-pointer"
              title="Print Factsheet"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-stone-900 bg-stone-100 rounded-lg hover:bg-stone-200 transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Factsheet Body */}
        <div className="space-y-5 text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
          {/* Executive Summary */}
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200 space-y-1.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#936B18]">
              {isAm ? 'የኢንተርፕራይዙ መነሻና አመራር' : 'Enterprise Overview & Leadership'}
            </h4>
            <p className="text-xs text-stone-700 leading-relaxed">
              <strong className="text-stone-900">Lakamba Group (ለኻምባ ግሩፕ)</strong> is an Ethiopian multi-sector investment and business enterprise initially established in <strong className="text-stone-900">1962 E.C. (1970 G.C.)</strong> by visionary founder <strong className="text-stone-900">Kahsay Abraha</strong>. The conglomerate is actively steered by next-generation executive leadership under <strong className="text-stone-900">Milkiyas Kahsay</strong>, overseeing core holdings across construction, mining, agriculture, industry, hospitality, and transport & logistics with a strategic focus on diversification and international growth.
            </p>
          </div>

          {/* Key Facts Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3 rounded-lg bg-[#FAF8F5] border border-stone-200">
              <span className="text-[10px] text-stone-500 uppercase block font-mono">Founding Year</span>
              <span className="font-serif-brand text-base font-bold text-stone-900">1962 E.C.</span>
              <span className="text-[10px] text-stone-600 block">Kahsay Abraha</span>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF8F5] border border-stone-200">
              <span className="text-[10px] text-stone-500 uppercase block font-mono">Executive Leadership</span>
              <span className="font-serif-brand text-base font-bold text-stone-900">Milkiyas Kahsay</span>
              <span className="text-[10px] text-stone-600 block">Next-Gen Management</span>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF8F5] border border-stone-200">
              <span className="text-[10px] text-stone-500 uppercase block font-mono">Workforce Ecosystem</span>
              <span className="font-serif-brand text-base font-bold text-stone-900">3,800+</span>
              <span className="text-[10px] text-stone-600 block">Direct & Outgrowers</span>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF8F5] border border-stone-200">
              <span className="text-[10px] text-stone-500 uppercase block font-mono">Core Divisions</span>
              <span className="font-serif-brand text-base font-bold text-stone-900">6 Sectors</span>
              <span className="text-[10px] text-stone-600 block">Integrated Value Chain</span>
            </div>
          </div>

          {/* 6 Sectors Summary */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-2.5">
              {isAm ? 'ስድስቱ የስራ ዘርፎችና አቅሞች' : 'Core Business Sectors & Deliverables'}
            </h4>
            <div className="space-y-2">
              {CORE_SECTORS.map((s, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-[#FAF8F5] border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[#936B18] font-bold">{idx + 1}.</span>
                    <div>
                      <span className="font-semibold text-stone-900">{isAm ? s.nameAm : s.name}</span>
                      <span className="text-stone-500 hidden sm:inline"> — {s.category}</span>
                    </div>
                  </div>
                  <div className="text-stone-900 font-mono font-bold text-[11px]">
                    {s.metrics[0].value} {isAm ? s.metrics[0].labelAm : s.metrics[0].label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Coordinates */}
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200 space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#936B18]">
              {isAm ? 'ይፋዊ አድራሻና ስልክ' : 'Official Contact Coordinates'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#936B18] shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-500 block">{isAm ? 'አድራሻ:' : 'Address:'}</span>
                  <span className="text-stone-900 font-medium">African Union area (AU around), Addis Ababa, Ethiopia</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#936B18] shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-500 block">{isAm ? 'ስልክ:' : 'Phone Lines:'}</span>
                  <span className="text-stone-900 font-mono font-semibold">+251 942 101 090 / +251 948 887 756</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#152A4A] hover:bg-[#0E1D33] rounded-md transition-colors cursor-pointer"
          >
            {isAm ? 'ዝጋ' : 'Close Factsheet'}
          </button>
        </div>
      </div>
    </div>
  );
};
