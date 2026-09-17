import React, { useState } from 'react';
import { ACADEMY_INFO } from '../data/academyData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  CheckCircle2,
  Copy,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AcademyLocationAndContactProps {
  onOpenRegister: () => void;
}

export const AcademyLocationAndContact: React.FC<AcademyLocationAndContactProps> = ({ onOpenRegister }) => {
  const { t } = useLanguage();
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const handleCopyPhone = (phone: string) => {
    navigator.clipboard?.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#0B0F17] relative border-t border-zinc-200 dark:border-zinc-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-800 dark:text-amber-400 text-xs font-bold">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.contact.sectionBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 dark:text-white tracking-tight">
            {t.contact.title} <span className="text-amber-600 dark:text-amber-400">{t.contact.titleHighlight}</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Grid: Contact Cards & Location Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details & Quick Call Actions */}
          <div className="lg:col-span-6 space-y-6 text-start">
            
            {/* Location Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 space-y-4 shadow-md">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-500 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-zinc-950 dark:text-white">
                    {t.contact.locationCardTitle}
                  </h3>
                  <p className="text-base text-amber-700 dark:text-amber-400 font-bold mt-1">
                    {t.common.locationName}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mt-1">
                    {t.common.locationFull}
                  </p>
                </div>
              </div>

              <div className="p-3 bg-white dark:bg-zinc-950/70 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 text-xs text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
                <Navigation className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />
                <span>{t.contact.locationTransitNote}</span>
              </div>
            </div>

            {/* Direct Phone Numbers List */}
            <div className="p-6 sm:p-7 rounded-3xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 space-y-4 shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-500 dark:text-amber-400 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-black text-zinc-950 dark:text-white">
                    {t.contact.phonesTitle}
                  </h3>
                </div>
                <span className="text-[11px] bg-amber-500/15 text-amber-800 dark:text-amber-300 px-2.5 py-1 rounded-full font-bold">
                  {t.contact.phonesBadge}
                </span>
              </div>

              <div className="space-y-3 pt-1">
                {ACADEMY_INFO.phones.map((phone, idx) => (
                  <div
                    key={phone}
                    className="p-3.5 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between transition-all hover:border-amber-400/50 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="text-base font-black text-zinc-950 dark:text-white tracking-wide font-sora" dir="ltr">
                        {phone}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopyPhone(phone)}
                        className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs transition-colors"
                        title={t.contact.copyPhoneTitle}
                        id={`copy-phone-${phone}`}
                      >
                        {copiedPhone === phone ? (
                          <CheckCircle2 className="w-4 h-4 text-green-500 dark:text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>

                      <a
                        href={`tel:${phone}`}
                        className="px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-black flex items-center gap-1.5 transition-colors"
                        id={`call-link-${phone}`}
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{t.contact.callAction}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Email & Editable Hours Placeholder */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                  <Mail className="w-4 h-4" />
                  <span className="text-xs font-bold">{t.contact.emailLabel}</span>
                </div>
                <a
                  href={`mailto:${ACADEMY_INFO.email}`}
                  className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 break-all block"
                  dir="ltr"
                >
                  {ACADEMY_INFO.email}
                </a>
              </div>

              {/* Editable Hours Placeholder as per rules */}
              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold">{t.contact.hoursLabel}</span>
                </div>
                <p className="text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                  {t.contact.hoursValue}
                </p>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400 italic">
                  {t.contact.hoursNote}
                </p>
              </div>
            </div>

          </div>

          {/* Location Map Simulation & Directions Helper */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 space-y-6 shadow-md text-start">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-zinc-950 dark:text-white">
                    {t.contact.mapTitle}
                  </h3>
                  <p className="text-xs text-amber-700 dark:text-amber-400 font-semibold">
                    {t.common.locationFull}
                  </p>
                </div>
                <div className="p-2.5 rounded-2xl bg-amber-500/15 text-amber-700 dark:text-amber-400">
                  <Navigation className="w-6 h-6" />
                </div>
              </div>

              {/* Graphical Visual Map Card */}
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-[#121824] via-[#1a2233] to-[#0d121c] border border-zinc-300 dark:border-zinc-700/60 flex items-center justify-center p-6 text-center shadow-inner">
                {/* Map Grid Pattern */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Abstract road vectors */}
                <svg className="absolute inset-0 w-full h-full stroke-zinc-700/50 fill-none stroke-[2]" preserveAspectRatio="none">
                  <path d="M 0,150 Q 200,80 400,120 T 800,160" />
                  <path d="M 120,0 Q 180,150 220,300" />
                  <path d="M 320,0 Q 300,150 350,300" strokeDasharray="6 4" />
                </svg>

                {/* Pin in center */}
                <div className="relative z-10 space-y-3 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-2xl shadow-amber-500/50 animate-bounce">
                      <MapPin className="w-8 h-8 fill-black stroke-black" />
                    </div>
                    <div className="w-10 h-3 bg-black/40 rounded-full mx-auto filter blur-sm mt-1" />
                  </div>

                  <div className="bg-black/90 backdrop-blur-md px-4 py-2 rounded-xl border border-amber-400/40 shadow-lg text-center">
                    <p className="text-xs font-black text-amber-400">
                      YOUR ACADEMY
                    </p>
                    <p className="text-[11px] text-zinc-300">
                      {t.common.locationName}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 bg-zinc-950/80 px-2.5 py-1 rounded-lg text-[10px] text-zinc-400 border border-zinc-800">
                  Ain Defla • 44200
                </div>
              </div>

              {/* Directions Instructions */}
              <div className="space-y-3 text-start">
                <h4 className="text-xs font-black text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                  {t.contact.directionsTitle}:
                </h4>
                <ul className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
                  {t.contact.directions.map((d, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instant CTA inside location box */}
              <div className="pt-2">
                <button
                  onClick={onOpenRegister}
                  className="w-full py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-black font-black text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>{t.contact.bookVisitBtn}</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

