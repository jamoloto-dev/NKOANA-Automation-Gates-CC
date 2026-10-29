import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageSquare, Mail, Copy, Check, PhoneCall, RefreshCw } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES } from '../data/companyData';

interface QuoteRequestSystemProps {
  preselectedService?: string;
  onClearPreselectedService?: () => void;
}

export const QuoteRequestSystem: React.FC<QuoteRequestSystemProps> = ({
  preselectedService,
  onClearPreselectedService,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceRequired, setServiceRequired] = useState(preselectedService || 'Automated Gate Systems');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [contactMethod, setContactMethod] = useState<'Phone' | 'WhatsApp' | 'Email'>('WhatsApp');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    timestamp: string;
    fullName: string;
    phone: string;
    email: string;
    serviceRequired: string;
    location: string;
    description: string;
    contactMethod: string;
  } | null>(null);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setServiceRequired(preselectedService);
    }
  }, [preselectedService]);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!phone.trim()) {
      errs.phone = 'Please provide a contact phone number.';
    } else if (phone.trim().replace(/\D/g, '').length < 9) {
      errs.phone = 'Please enter a valid phone number (at least 9 digits).';
    }

    if (email.trim() && !/^\S+@\S+\.\S+$/.test(email.trim())) {
      errs.email = 'Please provide a valid email address or leave blank.';
    }

    if (!serviceRequired) {
      errs.serviceRequired = 'Please choose a required service.';
    }

    if (!location.trim()) {
      errs.location = 'Please indicate your property location or town (e.g. Mmotong, Polokwane).';
    }

    if (!description.trim() || description.trim().length < 10) {
      errs.description = 'Please provide a brief description of your project requirements (min 10 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceId = `NQ-${new Date().getFullYear()}-${randomSuffix}`;
    const timestamp = new Date().toLocaleString('en-ZA', { dateStyle: 'medium', timeStyle: 'short' });

    setSubmittedData({
      referenceId,
      timestamp,
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      serviceRequired,
      location: location.trim(),
      description: description.trim(),
      contactMethod,
    });
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setLocation('');
    setDescription('');
    setContactMethod('WhatsApp');
    setErrors({});
    if (onClearPreselectedService) {
      onClearPreselectedService();
    }
  };

  const formattedEnquiryText = submittedData
    ? `*NKOANA AUTOMATION GATES — QUOTATION ENQUIRY*
Ref: ${submittedData.referenceId}
Date: ${submittedData.timestamp}

*Customer Details:*
• Name: ${submittedData.fullName}
• Phone: ${submittedData.phone}
${submittedData.email ? `• Email: ${submittedData.email}\n` : ''}• Preferred Contact: ${submittedData.contactMethod}

*Project Details:*
• Service: ${submittedData.serviceRequired}
• Location: ${submittedData.location}
• Description: ${submittedData.description}`
    : '';

  const copyToClipboard = () => {
    if (formattedEnquiryText) {
      navigator.clipboard.writeText(formattedEnquiryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const whatsappUrl = submittedData
    ? `https://wa.me/${COMPANY_DETAILS.verifiedWhatsAppNumber.replace('+', '')}?text=${encodeURIComponent(formattedEnquiryText)}`
    : '';

  const mailtoUrl = submittedData
    ? `mailto:${COMPANY_DETAILS.email}?subject=${encodeURIComponent(`Quotation Enquiry: ${submittedData.serviceRequired} [Ref: ${submittedData.referenceId}]`)}&body=${encodeURIComponent(formattedEnquiryText)}`
    : '';

  return (
    <section id="quote-request" className="py-20 bg-[#F5F0E5] border-b border-[#06251D]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-[#C9A23F] font-bold mb-2">
            Formal Quotations & Project Inquiries
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#06251D] tracking-tight">
            Request a Security Quotation
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#171B19]/75">
            Submit your site requirements below. Our workshop team in Mmotong will review the scope and provide a formal, transparent estimate.
          </p>
        </div>

        {/* Card Frame */}
        <div className="bg-white rounded-xs border border-[#06251D]/15 shadow-md overflow-hidden">
          
          {/* Card Top Banner */}
          <div className="bg-[#06251D] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#C9A23F]/30">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C9A23F] rounded-full" />
              <span className="text-xs font-semibold tracking-wide uppercase text-white/90">
                Direct Workshop Quotation Desk
              </span>
            </div>
            <div className="text-xs text-[#C9A23F] font-mono">
              Tel: {COMPANY_DETAILS.primaryPhone}
            </div>
          </div>

          {!submittedData ? (
            /* Quotation Form */
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-[#06251D] uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="e.g. Mokgadi Moloto"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-xs border ${
                      errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-[#06251D]/20 focus:border-[#C9A23F]'
                    } focus:outline-none transition-colors`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-[#06251D] uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="e.g. 076 123 4567"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-xs border ${
                      errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-[#06251D]/20 focus:border-[#C9A23F]'
                    } focus:outline-none transition-colors font-mono`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email Address (Optional) */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-[#06251D] uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-xs text-[#171B19]/50 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="e.g. name@example.com"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-xs border ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-[#06251D]/20 focus:border-[#C9A23F]'
                    } focus:outline-none transition-colors`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Service Required */}
                <div>
                  <label htmlFor="serviceRequired" className="block text-xs font-bold text-[#06251D] uppercase tracking-wider mb-1.5">
                    Service Required <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="serviceRequired"
                    value={serviceRequired}
                    onChange={(e) => setServiceRequired(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white rounded-xs border border-[#06251D]/20 focus:border-[#C9A23F] focus:outline-none transition-colors font-medium text-[#06251D]"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Complete Security Package (Gate + Fence + Intercom)">
                      Complete Security Package (Gate + Fence + Intercom)
                    </option>
                    <option value="Emergency Gate Motor Repair / Servicing">
                      Emergency Gate Motor Repair / Servicing
                    </option>
                    <option value="Other Custom Metalwork / Security">
                      Other Custom Metalwork / Security
                    </option>
                  </select>
                </div>
              </div>

              {/* Property / Project Location */}
              <div>
                <label htmlFor="location" className="block text-xs font-bold text-[#06251D] uppercase tracking-wider mb-1.5">
                  Property or Project Location <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                    if (errors.location) setErrors({ ...errors, location: '' });
                  }}
                  placeholder="e.g. Mmotong Section 2, Polokwane North, Seshego Zone 3"
                  className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-xs border ${
                    errors.location ? 'border-red-500 focus:ring-red-500' : 'border-[#06251D]/20 focus:border-[#C9A23F]'
                  } focus:outline-none transition-colors`}
                />
                {errors.location && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.location}
                  </p>
                )}
                <span className="block mt-1 text-[11px] text-[#171B19]/60">
                  We schedule physical site measurements throughout Mmotong and surrounding Limpopo areas.
                </span>
              </div>

              {/* Project Description */}
              <div>
                <label htmlFor="description" className="block text-xs font-bold text-[#06251D] uppercase tracking-wider mb-1.5">
                  Project Description & Dimensions <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="description"
                  rows={4}
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                    if (errors.description) setErrors({ ...errors, description: '' });
                  }}
                  placeholder="Describe your gate width, wall length, current setup (manual vs motor), loadshedding battery needs, or repair issue..."
                  className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-xs border ${
                    errors.description ? 'border-red-500 focus:ring-red-500' : 'border-[#06251D]/20 focus:border-[#C9A23F]'
                  } focus:outline-none transition-colors leading-relaxed`}
                />
                {errors.description && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.description}
                  </p>
                )}
              </div>

              {/* Preferred Contact Method */}
              <div>
                <span className="block text-xs font-bold text-[#06251D] uppercase tracking-wider mb-2">
                  Preferred Contact Method
                </span>
                <div className="grid grid-cols-3 gap-3">
                  {(['WhatsApp', 'Phone', 'Email'] as const).map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setContactMethod(method)}
                      className={`py-2 px-3 text-xs font-medium rounded-xs border flex items-center justify-center gap-1.5 transition-colors ${
                        contactMethod === method
                          ? 'bg-[#06251D] text-[#C9A23F] border-[#06251D] font-semibold shadow-xs'
                          : 'bg-white text-[#171B19]/70 border-[#06251D]/20 hover:bg-[#F5F0E5]'
                      }`}
                    >
                      {method === 'WhatsApp' && <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />}
                      {method === 'Phone' && <PhoneCall className="w-3.5 h-3.5 text-[#C9A23F]" />}
                      {method === 'Email' && <Mail className="w-3.5 h-3.5 text-[#C9A23F]" />}
                      <span>{method}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-semibold uppercase tracking-wider text-[#06251D] bg-[#C9A23F] hover:bg-[#d9b24f] active:bg-[#b89132] transition-colors rounded-xs shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#06251D]" />
                  <span>Generate Quotation Enquiry</span>
                </button>
                <p className="text-center text-[11px] text-[#171B19]/60 mt-2">
                  No automated spam. Your details are strictly used to prepare your security quotation.
                </p>
              </div>

            </form>
          ) : (
            /* Review & Dispatch System (Enquiry Generated) */
            <div className="p-6 sm:p-8 space-y-6">
              
              <div className="p-4 bg-[#0A362B]/10 border border-[#0A362B]/20 rounded-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0A362B] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-base text-[#06251D]">
                    Quotation Enquiry Prepared Successfully
                  </h3>
                  <p className="text-xs text-[#171B19]/80 mt-1">
                    Enquiry Reference <strong className="font-mono text-[#06251D]">{submittedData.referenceId}</strong> recorded on {submittedData.timestamp}.
                  </p>
                </div>
              </div>

              {/* Formatted Preview Box */}
              <div className="bg-[#171B19] text-white p-5 rounded-xs font-mono text-xs space-y-2 border border-white/10 relative overflow-hidden">
                <div className="flex items-center justify-between text-white/50 border-b border-white/10 pb-2 mb-3">
                  <span className="text-[#C9A23F] font-bold">TRANSMISSION SUMMARY</span>
                  <span>{submittedData.referenceId}</span>
                </div>
                <div className="text-[#C9A23F]">Client: <span className="text-white">{submittedData.fullName}</span></div>
                <div className="text-[#C9A23F]">Phone: <span className="text-white">{submittedData.phone}</span></div>
                {submittedData.email && (
                  <div className="text-[#C9A23F]">Email: <span className="text-white">{submittedData.email}</span></div>
                )}
                <div className="text-[#C9A23F]">Service: <span className="text-white">{submittedData.serviceRequired}</span></div>
                <div className="text-[#C9A23F]">Location: <span className="text-white">{submittedData.location}</span></div>
                <div className="text-[#C9A23F]">Preferred Channel: <span className="text-white">{submittedData.contactMethod}</span></div>
                <div className="pt-2 text-white/80 border-t border-white/10">
                  <span className="text-[#C9A23F]">Scope:</span> {submittedData.description}
                </div>
              </div>

              {/* Immediate Dispatch Options */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-[#06251D] uppercase tracking-wider">
                  Deliver Directly to Workshop Team:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* WhatsApp Direct */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs rounded-xs shadow-sm transition-colors text-center"
                  >
                    <MessageSquare className="w-4 h-4 text-white" />
                    <span>Send via WhatsApp (076 655 0546)</span>
                  </a>

                  {/* Mailto Direct */}
                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center justify-center gap-2.5 px-4 py-3 bg-[#06251D] hover:bg-[#0a362b] text-[#C9A23F] font-semibold text-xs rounded-xs border border-[#C9A23F]/40 shadow-sm transition-colors text-center"
                  >
                    <Mail className="w-4 h-4 text-[#C9A23F]" />
                    <span>Send via Email Client</span>
                  </a>
                </div>

                {/* Copy to clipboard */}
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="w-full py-2.5 px-3 bg-white border border-[#06251D]/20 hover:bg-[#F5F0E5] text-[#06251D] text-xs font-medium rounded-xs flex items-center justify-center gap-2 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-green-700 font-semibold">Enquiry Text Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#C9A23F]" />
                      <span>Copy Formatted Enquiry Text</span>
                    </>
                  )}
                </button>
              </div>

              {/* Backend Integration Transparency Statement */}
              <div className="p-4 bg-[#F5F0E5] border border-[#06251D]/10 rounded-xs text-xs text-[#171B19]/75 space-y-1">
                <div className="font-semibold text-[#06251D] flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-[#C9A23F]" />
                  <span>Backend Integration Status</span>
                </div>
                <p>
                  This frontend preview formats and structures your enquiry immediately for WhatsApp or email client dispatch. To automate silent background delivery directly to <span className="font-mono text-[#06251D]">nkoanagates@gmail.com</span>, a production transactional email API (e.g. Resend or SendGrid) can be plugged in seamlessly.
                </p>
              </div>

              {/* Reset Button */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#06251D] hover:text-[#C9A23F] transition-colors py-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Submit Another Enquiry</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
