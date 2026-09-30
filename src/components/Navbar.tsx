import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowUpRight, Phone, MapPin } from 'lucide-react';
import { LakambaBrandMark } from './LakambaBrandMark';
import { GROUP_HERITAGE } from '../data/groupData';

interface NavbarProps {
  language: 'en' | 'am';
  setLanguage: (lang: 'en' | 'am') => void;
  onOpenFactsheet: () => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  setLanguage,
  onOpenFactsheet,
  onOpenInquiry,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAm = language === 'am';

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#heritage', label: isAm ? 'ታሪካችን' : 'Enterprise Heritage' },
    { href: '#sectors', label: isAm ? 'ስድስቱ ዘርፎች' : 'Core Sectors' },
    { href: '#leadership', label: isAm ? 'አመራር' : 'Leadership' },
    { href: '#expansion', label: isAm ? 'ዕድገትና ማስፋፊያ' : 'Expansion' },
    { href: '#contact', label: isAm ? 'አድራሻ' : 'Contact & Desk' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200 transition-colors">
      {/* Top Corporate Institutional Ribbon (Desktop & Tablet) */}
      <div className="hidden md:block bg-[#F2EFE9] border-b border-stone-200/80 py-1.5 text-xs text-stone-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#936B18] shrink-0" />
            <span className="font-medium text-stone-800 truncate">
              {isAm ? 'አድራሻ: በአፍሪካ ህብረት አካባቢ (AU ዙሪያ)፣ አዲስ አበባ፣ ኢትዮጵያ' : 'Headquarters: African Union area (AU around), Addis Ababa, Ethiopia'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-stone-800 font-mono text-xs shrink-0">
            <a href="tel:+251942101090" className="hover:text-[#936B18] transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#936B18]" />
              <span>+251 942 101 090</span>
            </a>
            <span aria-hidden="true" className="text-stone-300">/</span>
            <a href="tel:+251948887756" className="hover:text-[#936B18] transition-colors">
              +251 948 887 756
            </a>
          </div>
        </div>
      </div>

      {/* Main Masthead Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Zone 1: Authentic Brand Mark (Adaptive sizing for mobile) */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 hover:opacity-95 transition-opacity shrink-0">
          <div className="sm:hidden">
            <LakambaBrandMark size="sm" isAm={isAm} theme="light" />
          </div>
          <div className="hidden sm:block">
            <LakambaBrandMark size="md" isAm={isAm} theme="light" />
          </div>
        </a>

        {/* Zone 2: Clean Editorial Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#936B18] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#936B18] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenFactsheet}
            className="text-xs uppercase font-mono tracking-wider text-stone-500 hover:text-[#936B18] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>{isAm ? 'መግለጫ' : 'Factsheet'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </nav>

        {/* Zone 3: Primary Actions (Touch-friendly on mobile) */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(isAm ? 'en' : 'am')}
            className="flex items-center gap-1 px-2 py-1.5 sm:px-3 sm:py-1.5 text-xs font-semibold text-stone-800 bg-white border border-stone-300 rounded-md hover:border-[#936B18] hover:text-[#936B18] transition-colors cursor-pointer shadow-2xs min-h-[36px]"
            title="Toggle Language"
            aria-label="Toggle English or Amharic"
          >
            <Globe className="w-3.5 h-3.5 text-[#936B18] shrink-0" />
            <span>{isAm ? 'EN' : 'አማርኛ'}</span>
          </button>

          {/* Primary Action Button (Shown on tablets and desktop; on small mobile, accessible via quickbar and drawer) */}
          <button
            onClick={onOpenInquiry}
            className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#152A4A] hover:bg-[#0E1D33] rounded-md transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap active:scale-95 min-h-[36px]"
          >
            {isAm ? 'አጋር ይሁኑ' : 'Partner With Us'}
          </button>

          {/* Mobile Menu Hamburger Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-stone-900 rounded-md hover:bg-stone-200/80 active:bg-stone-300 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Full Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-[#FAF8F5] z-50 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200 border-t border-stone-200">
          <div className="max-w-md mx-auto px-4 py-5 space-y-4">
            {/* Quick Contact & Address Card in Mobile Drawer */}
            <div className="p-4 bg-white border border-stone-200 rounded-xl shadow-xs space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#936B18] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-semibold text-[#936B18] uppercase tracking-wider">
                    {isAm ? 'ዋና መስሪያ ቤት' : 'Headquarters'}
                  </div>
                  <div className="text-xs text-stone-800 font-medium mt-0.5">
                    {isAm ? GROUP_HERITAGE.headquartersAm : GROUP_HERITAGE.headquarters}
                  </div>
                </div>
              </div>

              {/* Direct Tap-to-Call Buttons */}
              <div className="pt-2 border-t border-stone-100 grid grid-cols-2 gap-2">
                <a
                  href="tel:+251942101090"
                  className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-[#FAF8F5] hover:bg-stone-100 text-stone-900 text-xs font-mono font-bold border border-stone-300"
                >
                  <Phone className="w-3.5 h-3.5 text-[#936B18]" />
                  <span>0942 101 090</span>
                </a>
                <a
                  href="tel:+251948887756"
                  className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-[#FAF8F5] hover:bg-stone-100 text-stone-900 text-xs font-mono font-bold border border-stone-300"
                >
                  <Phone className="w-3.5 h-3.5 text-[#936B18]" />
                  <span>0948 887 756</span>
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-3 text-base font-semibold text-stone-800 hover:text-[#936B18] hover:bg-white rounded-lg transition-colors border-b border-stone-200/50"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-stone-400" />
                </a>
              ))}
            </nav>

            {/* Drawer Actions */}
            <div className="pt-3 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFactsheet();
                }}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors cursor-pointer"
              >
                <span>{isAm ? 'ይፋዊ የኮርፖሬት መግለጫ (Factsheet)' : 'Download Group Factsheet'}</span>
                <ArrowUpRight className="w-4 h-4 text-[#936B18]" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3.5 px-4 text-sm font-bold text-white bg-[#152A4A] hover:bg-[#0E1D33] active:bg-[#081220] rounded-lg transition-colors shadow-md cursor-pointer text-center"
              >
                {isAm ? 'የቢዝነስ ጥያቄ ያስገቡ' : 'Submit Investment Inquiry'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
