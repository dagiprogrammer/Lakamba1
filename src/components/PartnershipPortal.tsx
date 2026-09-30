import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { GROUP_HERITAGE } from '../data/groupData';

interface PartnershipPortalProps {
  language: 'en' | 'am';
  initialSector?: string;
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const PartnershipPortal: React.FC<PartnershipPortalProps> = ({
  language,
  initialSector,
  isOpenModal,
  onCloseModal,
}) => {
  const isAm = language === 'am';

  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    sector: initialSector || 'Construction',
    proposalType: 'Joint Venture & Equity Partnership',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = isAm ? 'እባክዎ ሙሉ ስምዎን ያስገቡ' : 'Full name is required';
    }
    if (!formData.organization.trim()) {
      errs.organization = isAm ? 'የድርጅት ስም ያስገቡ' : 'Organization name is required';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = isAm ? 'ትክክለኛ ኢሜይል ያስገቡ' : 'Valid corporate email required';
    }
    if (!formData.phone.trim()) {
      errs.phone = isAm ? 'ስልክ ቁጥር ያስገቡ' : 'Phone number is required';
    }
    if (!formData.message.trim() || formData.message.trim().length < 8) {
      errs.message = isAm ? 'እባክዎ አጭር መግለጫ ያስገቡ' : 'Please provide brief details of your inquiry';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = 'LK-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedRef(generatedRef);
    }, 700);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      organization: '',
      email: '',
      phone: '',
      sector: 'Construction',
      proposalType: 'Joint Venture & Equity Partnership',
      message: '',
    });
    setSubmittedRef(null);
  };

  const content = (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      {/* Left Column: Direct Official Contact Coordinates */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#936B18] uppercase tracking-widest mb-3">
            <span>{isAm ? 'ይፋዊ ግንኙነት' : 'DIRECT EXECUTIVE INQUIRIES'}</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>{isAm ? 'አዲስ አበባ' : 'ADDIS ABABA'}</span>
          </div>
          <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight mb-3">
            {isAm ? 'ከለኻምባ ግሩፕ ጋር ይገናኙ' : 'Inquire & Partner with Lakamba Group'}
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
            {isAm
              ? 'ለጋራ የኢንቨስትመንት ፕሮጀክቶች፣ ለውጭ ንግድ አጋርነት፣ ለኮንስትራክሽንና ለጭነት ሎጂስቲክስ ስራዎች ከቀጣይ-ትውልድ አመራር ቢሮ ጋር በቀጥታ ይገናኙ።'
              : 'Direct communication desk for institutional partnerships, heavy infrastructure contracting, commodity off-take, and fleet logistics.'}
          </p>
        </div>

        {/* Corporate Address & Phone Box */}
        <div className="p-5 sm:p-6 rounded-xl bg-white border border-stone-200/90 space-y-4 shadow-xs">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#936B18] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
                {isAm ? 'የዋና መስሪያ ቤት አድራሻ' : 'Headquarters Address'}
              </h4>
              <p className="text-xs sm:text-sm text-stone-900 mt-1 font-semibold">
                Lakamba Group
              </p>
              <p className="text-xs text-stone-600">
                {isAm ? 'በአፍሪካ ህብረት አካባቢ (AU ዙሪያ)፣ አዲስ አበባ፣ ኢትዮጵያ' : 'African Union area (AU around), Addis Ababa, Ethiopia'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 pt-3 border-t border-stone-200">
            <Phone className="w-5 h-5 text-[#936B18] shrink-0 mt-0.5" />
            <div className="w-full">
              <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-1">
                {isAm ? 'የስልክ መስመሮች (ቀጥታ ይደውሉ)' : 'Direct Telephone Lines'}
              </h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-1 font-mono text-xs">
                <a
                  href="tel:+251942101090"
                  className="px-3 py-1.5 rounded bg-[#FAF8F5] hover:bg-stone-200 text-stone-900 font-bold border border-stone-300 transition-colors inline-block"
                >
                  +251 942 101 090
                </a>
                <a
                  href="tel:+251948887756"
                  className="px-3 py-1.5 rounded bg-[#FAF8F5] hover:bg-stone-200 text-stone-900 font-bold border border-stone-300 transition-colors inline-block"
                >
                  +251 948 887 756
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 pt-3 border-t border-stone-200">
            <Mail className="w-5 h-5 text-[#936B18] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
                {isAm ? 'ኢሜይል' : 'Corporate Email'}
              </h4>
              <p className="text-xs text-stone-600 mt-1 font-mono">
                info@lakambagroup.com · executive@lakambagroup.com
              </p>
            </div>
          </div>
        </div>

        {/* Security & Confidentiality */}
        <div className="p-3.5 rounded-lg bg-white border border-stone-200 flex items-center gap-2.5 text-xs text-stone-600">
          <ShieldCheck className="w-4 h-4 text-[#936B18] shrink-0" />
          <span>
            {isAm
              ? 'ሁሉም ጥያቄዎች በሚስጥር ተይዘው በ24 የቢዝነስ ሰዓታት ውስጥ ምላሽ ይሰጥባቸዋል።'
              : 'Institutional confidentiality assured. All corporate proposals reviewed within 24 business hours.'}
          </span>
        </div>
      </div>

      {/* Right Column: Inquiry Form or Submission Success */}
      <div className="lg:col-span-7 bg-white p-5 sm:p-8 rounded-2xl border border-stone-200/90 shadow-xs">
        {submittedRef ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-amber-50 border border-[#936B18]/40 rounded-full flex items-center justify-center mx-auto text-[#936B18]">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase font-mono font-semibold text-[#936B18]">
                {isAm ? 'መልእክትዎ ተመዝግቧል' : 'Inquiry Successfully Received'}
              </span>
              <h3 className="font-serif-brand text-xl font-bold text-stone-900">
                {isAm ? 'እናመሰግናለን' : 'Thank You'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto font-light">
                {isAm
                  ? `የጥያቄዎ መለያ ቁጥር ${submittedRef} ነው። የስራ አስፈፃሚ አመራሩ ቢሮ በቅርቡ ያገኝዎታል።`
                  : `Your reference ID is ${submittedRef}. Executive management will respond promptly.`}
              </p>
            </div>

            <button
              onClick={resetForm}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#152A4A] hover:bg-[#0E1D33] rounded-md transition-colors cursor-pointer"
            >
              {isAm ? 'ሌላ ጥያቄ አስገባ' : 'Submit Another Inquiry'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  {isAm ? 'ሙሉ ስም *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Samuel Bekele"
                  className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border rounded-lg text-xs sm:text-sm text-stone-900 focus:outline-none ${
                    errors.fullName ? 'border-rose-500' : 'border-stone-300 focus:border-[#936B18]'
                  }`}
                />
                {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  {isAm ? 'ድርጅት / ተቋም *' : 'Organization / Enterprise *'}
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="Company name"
                  className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border rounded-lg text-xs sm:text-sm text-stone-900 focus:outline-none ${
                    errors.organization ? 'border-rose-500' : 'border-stone-300 focus:border-[#936B18]'
                  }`}
                />
                {errors.organization && <p className="text-[11px] text-rose-500 mt-1">{errors.organization}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  {isAm ? 'ኢሜይል *' : 'Corporate Email *'}
                </label>
                <input
                  type="email"
                  inputMode="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border rounded-lg text-xs sm:text-sm text-stone-900 focus:outline-none ${
                    errors.email ? 'border-rose-500' : 'border-stone-300 focus:border-[#936B18]'
                  }`}
                />
                {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  {isAm ? 'ስልክ ቁጥር *' : 'Telephone Number *'}
                </label>
                <input
                  type="tel"
                  inputMode="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+251 9... or international"
                  className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border rounded-lg text-xs sm:text-sm text-stone-900 focus:outline-none ${
                    errors.phone ? 'border-rose-500' : 'border-stone-300 focus:border-[#936B18]'
                  }`}
                />
                {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  {isAm ? 'የፍላጎት ዘርፍ' : 'Target Business Sector'}
                </label>
                <select
                  value={formData.sector}
                  onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-stone-300 focus:border-[#936B18] rounded-lg text-xs sm:text-sm text-stone-900 focus:outline-none"
                >
                  <option value="Construction">Construction & Civil Infrastructure</option>
                  <option value="Mining">Mining & Dimension Stone</option>
                  <option value="Agriculture">Agriculture & Agro-Processing</option>
                  <option value="Industry">Industry & Modular Fabrication</option>
                  <option value="Hospitality">Hospitality & Business Suites</option>
                  <option value="Transport & Logistics">Transport & Intermodal Logistics</option>
                  <option value="Conglomerate Investment">Conglomerate Joint Venture</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  {isAm ? 'የአጋርነት አይነት' : 'Inquiry Nature'}
                </label>
                <select
                  value={formData.proposalType}
                  onChange={(e) => setFormData({ ...formData, proposalType: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-stone-300 focus:border-[#936B18] rounded-lg text-xs sm:text-sm text-stone-900 focus:outline-none"
                >
                  <option value="Joint Venture & Equity Partnership">Joint Venture & Equity Partnership</option>
                  <option value="B2B Off-Take & Commodity Procurement">Commodity Procurement / Off-Take</option>
                  <option value="Heavy Fleet & Freight Logistics Tender">Freight Logistics / Fleet Booking</option>
                  <option value="EPC & Civil Works Contracting">Civil Works / EPC Contracting</option>
                  <option value="General Corporate Inquiry">General Corporate Dialogue</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-800 mb-1">
                {isAm ? 'ዝርዝር መልእክት *' : 'Message / Scope Details *'}
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={
                  isAm
                    ? 'ስለ ድርጅትዎ ፍላጎት ወይም የታሰበውን ስራ ባጭሩ ይግለጹ...'
                    : 'Summarize your proposal, volume requirements, or operational timeline...'
                }
                className={`w-full px-3.5 py-2 bg-[#FAF8F5] border rounded-lg text-xs sm:text-sm text-stone-900 focus:outline-none ${
                  errors.message ? 'border-rose-500' : 'border-stone-300 focus:border-[#936B18]'
                }`}
              />
              {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-5 text-xs sm:text-sm font-semibold text-white bg-[#152A4A] hover:bg-[#0E1D33] disabled:opacity-50 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-98 min-h-[44px]"
            >
              {isSubmitting ? (
                <span>{isAm ? 'እየተላከ ነው...' : 'Transmitting to Executive Desk...'}</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{isAm ? 'ጥያቄውን ላክ' : 'Transmit Partnership Inquiry'}</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );

  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
        <div className="bg-white border border-stone-200 rounded-2xl max-w-4xl w-full p-5 sm:p-8 shadow-xl relative my-auto max-h-[95vh] overflow-y-auto">
          <button
            onClick={onCloseModal}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-stone-400 hover:text-stone-900 rounded-lg hover:bg-stone-100 cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
          >
            ✕
          </button>
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {content}
      </div>
    </section>
  );
};
