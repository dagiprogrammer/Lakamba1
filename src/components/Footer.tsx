import React from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { LakambaBrandMark } from './LakambaBrandMark';
import { GROUP_HERITAGE } from '../data/groupData';

interface FooterProps {
  language: 'en' | 'am';
  onOpenFactsheet: () => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onOpenFactsheet,
  onOpenInquiry,
}) => {
  const isAm = language === 'am';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#101927] text-stone-300 text-xs pb-16 md:pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Brand & Origin (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <LakambaBrandMark size="md" isAm={isAm} theme="dark" />
            <p className="text-stone-300 text-xs leading-relaxed max-w-sm font-light">
              {isAm
                ? 'ለኻምባ ግሩፕ (ለኻምባ ግሩፕ) በ1962 ዓ.ም. በአቶ ካሕሳይ አብርሃ የተመሰረተና ዛሬ በሚልኪያስ ካሕሳይ ቀጣይ-ትውልድ ስራ አስፈፃሚ አመራር ስር በኮንስትራክሽን፣ ማዕድን፣ ግብርና፣ ኢንዱስትሪ፣ ሆስፒታሊቲ እና ትራንስፖርትና ሎጂስቲክስ ላይ የተሰማራ የኢትዮጵያ ኢንቨስትመንት ግሩፕ ነው።'
                : 'Lakamba Group is an Ethiopian multi-sector investment and business enterprise initially established in 1962 E.C. by Kahsay Abraha. Steered today by next-generation executive leadership under Milkiyas Kahsay across construction, mining, agriculture, industry, hospitality, and transport & logistics.'}
            </p>
            <div className="text-[11px] text-stone-400 font-mono">
              <span>{isAm ? 'የተመሰረተበት: 1962 ዓ.ም. (1970 G.C.)' : 'Enterprise Roots: Est. 1962 E.C. / 1970 G.C.'}</span>
            </div>
          </div>

          {/* Col 2: Official Contact Information (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif-brand text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              {isAm ? 'የዋና መስሪያ ቤት አድራሻ' : 'Corporate Headquarters & Contacts'}
            </h4>
            
            <div className="space-y-3 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Lakamba Group</span>
                  <span>{isAm ? 'በአፍሪካ ህብረት አካባቢ (AU ዙሪያ)' : 'African Union area (AU around)'}</span>
                  <span className="block text-stone-400">Addis Ababa, Ethiopia</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-stone-800">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="font-mono text-xs space-y-1">
                  <a href="tel:+251942101090" className="hover:text-[#D4AF37] transition-colors block text-stone-200">
                    +251 942 101 090
                  </a>
                  <a href="tel:+251948887756" className="hover:text-[#D4AF37] transition-colors block text-stone-200">
                    +251 948 887 756
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-stone-800">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="font-mono text-xs">
                  <a href="mailto:info@lakambagroup.com" className="hover:text-[#D4AF37] transition-colors block text-stone-200">
                    info@lakambagroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Direct Actions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-brand text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              {isAm ? 'ሰነዶችና አጋርነት' : 'Enterprise Links'}
            </h4>
            <div className="space-y-2">
              <button
                onClick={onOpenFactsheet}
                className="w-full text-left p-2.5 rounded-lg bg-[#19263B] border border-stone-700 text-xs text-stone-200 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors cursor-pointer"
              >
                {isAm ? 'የግሩፑ ይፋዊ መግለጫ (Factsheet)' : 'Download Group Factsheet'}
              </button>
              <button
                onClick={onOpenInquiry}
                className="w-full text-left p-2.5 rounded-lg bg-[#D4AF37] text-slate-950 font-bold text-xs hover:bg-[#e4be45] transition-colors cursor-pointer"
              >
                {isAm ? 'የቢዝነስ አጋርነት ጠይቅ' : 'Submit Investment Inquiry'}
              </button>
            </div>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="mt-10 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-400">
          <div>
            © {new Date().getFullYear()} Lakamba Group (ለኻምባ ግሩፕ) · African Union Area, Addis Ababa, Ethiopia.
          </div>

          <div className="flex items-center gap-4">
            <span>Next-Gen Leadership: Milkiyas Kahsay</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              <span>{isAm ? 'ወደ ላይ' : 'Top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
