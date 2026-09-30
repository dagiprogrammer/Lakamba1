import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';

interface MobileQuickBarProps {
  language: 'en' | 'am';
  onOpenInquiry: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  language,
  onOpenInquiry,
}) => {
  const isAm = language === 'am';

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-3 py-2 shadow-lg safe-area-bottom">
      <div className="flex items-center gap-2">
        {/* Quick Call Button 1 */}
        <a
          href="tel:+251942101090"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#FAF8F5] hover:bg-stone-100 active:bg-stone-200 border border-stone-300 rounded-lg text-stone-900 text-xs font-mono font-bold transition-colors"
          aria-label="Call Lakamba Group Primary Line"
        >
          <Phone className="w-3.5 h-3.5 text-[#936B18]" />
          <span className="truncate">0942 101 090</span>
        </a>

        {/* Quick Call Button 2 */}
        <a
          href="tel:+251948887756"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#FAF8F5] hover:bg-stone-100 active:bg-stone-200 border border-stone-300 rounded-lg text-stone-900 text-xs font-mono font-bold transition-colors"
          aria-label="Call Lakamba Group Secondary Line"
        >
          <Phone className="w-3.5 h-3.5 text-[#936B18]" />
          <span className="truncate">0948 887 756</span>
        </a>

        {/* Action Button: Inquire */}
        <button
          onClick={onOpenInquiry}
          className="flex items-center justify-center gap-1 py-2.5 px-3.5 bg-[#152A4A] hover:bg-[#0E1D33] active:bg-[#07111F] rounded-lg text-white text-xs font-semibold transition-all shadow-xs shrink-0 cursor-pointer"
        >
          <span>{isAm ? 'አጋር' : 'Inquire'}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
