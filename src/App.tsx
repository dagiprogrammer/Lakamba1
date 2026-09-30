import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExecutiveSpotlight } from './components/ExecutiveSpotlight';
import { SectorsExplorer } from './components/SectorsExplorer';
import { HeritageTimeline } from './components/HeritageTimeline';
import { ExpansionSection } from './components/ExpansionSection';
import { PartnershipPortal } from './components/PartnershipPortal';
import { FactsheetModal } from './components/FactsheetModal';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'am'>('en');
  const [isFactsheetOpen, setIsFactsheetOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedSectorForInquiry, setSelectedSectorForInquiry] = useState<string | undefined>(undefined);

  const handleOpenInquiryWithSector = (sectorName: string) => {
    setSelectedSectorForInquiry(sectorName);
    setIsInquiryModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col font-sans selection:bg-[#D4AF37] selection:text-stone-950 ${language === 'am' ? 'font-ethiopic' : ''}`}>
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
        onOpenFactsheet={() => setIsFactsheetOpen(true)}
        onOpenInquiry={() => {
          setSelectedSectorForInquiry(undefined);
          setIsInquiryModalOpen(true);
        }}
      />

      {/* Main Content Body */}
      <main className="flex-1 pb-12 md:pb-0">
        {/* Unique Architectural Hero Section (No AI Images) */}
        <HeroSection
          language={language}
          onExploreSectors={() => scrollToSection('sectors')}
          onExploreLeadership={() => scrollToSection('leadership')}
          onOpenInquiry={() => setIsInquiryModalOpen(true)}
        />

        {/* Executive Management Spotlight: Milkiyas Kahsay & Kahsay Abraha Lineage */}
        <ExecutiveSpotlight
          language={language}
          onOpenInquiry={() => setIsInquiryModalOpen(true)}
        />

        {/* 6 Core Business Sectors with Precision Vector Blueprint Schematics */}
        <SectorsExplorer
          language={language}
          onSelectSectorForInquiry={handleOpenInquiryWithSector}
        />

        {/* Enterprise Heritage Timeline: 1962 E.C. to Present */}
        <HeritageTimeline
          language={language}
          onOpenFactsheet={() => setIsFactsheetOpen(true)}
        />

        {/* Expansion Focus: Diversification and International Growth */}
        <ExpansionSection
          language={language}
          onOpenInquiry={() => setIsInquiryModalOpen(true)}
        />

        {/* Formal Executive Inquiry Desk with Official AU Address & Phones */}
        <PartnershipPortal
          language={language}
        />
      </main>

      {/* Corporate Footer */}
      <Footer
        language={language}
        onOpenFactsheet={() => setIsFactsheetOpen(true)}
        onOpenInquiry={() => setIsInquiryModalOpen(true)}
      />

      {/* Mobile Sticky Action Bar for 1-Tap Calling and Inquiries */}
      <MobileQuickBar
        language={language}
        onOpenInquiry={() => {
          setSelectedSectorForInquiry(undefined);
          setIsInquiryModalOpen(true);
        }}
      />

      {/* Corporate Factsheet Modal */}
      {isFactsheetOpen && (
        <FactsheetModal
          language={language}
          onClose={() => setIsFactsheetOpen(false)}
        />
      )}

      {/* Interactive Modal Inquiry Portal */}
      {isInquiryModalOpen && (
        <PartnershipPortal
          language={language}
          initialSector={selectedSectorForInquiry}
          isOpenModal={true}
          onCloseModal={() => {
            setIsInquiryModalOpen(false);
            setSelectedSectorForInquiry(undefined);
          }}
        />
      )}
    </div>
  );
}
