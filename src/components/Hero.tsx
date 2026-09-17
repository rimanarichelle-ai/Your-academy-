import React from 'react';
import { ACADEMY_INFO, CAMPAIGN_MOTTO } from '../data/academyData';
import {
  Sparkles,
  Phone,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  BookOpen,
  Users
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenRegister: (program?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister }) => {
  const { t, isRtl, language } = useLanguage();

  return (
    <section id="hero" className="relative pt-36 pb-16 sm:pt-40 lg:pt-44 lg:pb-24 overflow-hidden">
      {/* Background Subtle Geometric Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-yellow-500/5 rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Main Copy (Right Side in RTL, Left in LTR) */}
          <div className="lg:col-span-7 space-y-6 text-start">
            
            {/* Promotional Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500 text-black font-extrabold text-xs tracking-wide shadow-md uppercase font-sora">
                <Sparkles className="w-3.5 h-3.5 fill-black" />
                {CAMPAIGN_MOTTO.backToSchool}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-amber-400/40 text-amber-800 dark:text-amber-300 font-bold text-xs shadow-sm font-sora">
                <Calendar className="w-3.5 h-3.5 text-amber-500" />
                {CAMPAIGN_MOTTO.year}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-medium shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                {t.common.locationName}
              </span>
            </div>

            {/* Brand Slogan */}
            <div className={`inline-block ${isRtl ? 'border-r-4 pr-3' : 'border-l-4 pl-3'} border-amber-500 py-0.5`}>
              <p className="text-amber-700 dark:text-amber-400 text-sm md:text-base font-bold tracking-wide">
                {t.common.slogan}
              </p>
            </div>

            {/* Big Bold Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-zinc-950 dark:text-white leading-tight tracking-tight">
                {isRtl ? 'أكاديمية ' : ''}<span className="text-amber-600 dark:text-amber-400">YOUR ACADEMY</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-800 dark:text-zinc-100 mt-2">
                  {t.hero.mainTitleSuffix}
                </span>
              </h1>
            </div>

            {/* Authentic Subtitle & Promise */}
            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>

            {/* Special Highlight Badge: 9000 DZD */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 dark:bg-gradient-to-r dark:from-amber-500/20 dark:via-amber-400/10 dark:to-transparent border border-amber-400/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
              <div className="space-y-1 text-start">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-amber-400 text-black text-xs font-black">
                    {language === 'ar' ? 'عرض الموسم' : 'Season Offer'}
                  </span>
                  <h2 className="text-lg font-extrabold text-amber-800 dark:text-amber-300">
                    {t.hero.offerBannerTitle}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                  {t.hero.offerBannerSubtitle}
                </p>
              </div>
              <button
                onClick={() => onOpenRegister(t.hero.offerBannerTitle)}
                className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-black shadow transition-all shrink-0 self-start sm:self-center whitespace-nowrap"
                id="hero-special-offer-btn"
              >
                {t.hero.offerBookBtn}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => onOpenRegister()}
                className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black text-base font-black shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all flex items-center justify-center gap-2 group"
                id="hero-register-btn"
              >
                <span>{t.common.registerNow}</span>
                {isRtl ? (
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
              </button>

              <a
                href="#languages"
                className="px-6 py-4 rounded-2xl bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-300 dark:bg-zinc-900/90 dark:hover:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700 hover:border-amber-400/50 text-base font-bold text-center transition-all shadow-sm"
                id="hero-explore-btn"
              >
                {t.common.explorePrograms}
              </a>

              <a
                href={`tel:${ACADEMY_INFO.phones[0]}`}
                className="px-5 py-4 rounded-2xl bg-white hover:bg-zinc-100 text-amber-700 border border-amber-300 dark:bg-zinc-900/60 dark:hover:bg-zinc-800/80 dark:text-amber-400 dark:border-amber-400/30 text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                id="hero-call-btn"
              >
                <Phone className="w-4 h-4" />
                <span dir="ltr">{ACADEMY_INFO.phones[0]}</span>
              </a>
            </div>

            {/* Key Assurance Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-zinc-800 dark:text-zinc-300">
              <div className="flex items-center gap-2 bg-white dark:bg-zinc-900/50 p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800/70 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{t.common.individualFollowUp}</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-zinc-900/50 p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800/70 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{t.common.modernMethods}</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-zinc-900/50 p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800/70 col-span-2 sm:col-span-1 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{t.common.skilledTeachers}</span>
              </div>
            </div>

          </div>

          {/* Branded Visual Showcase (Left Side in RTL, Right in LTR) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Poster Box */}
              <div className="relative rounded-3xl bg-white dark:bg-gradient-to-b dark:from-zinc-900 dark:to-[#0F141F] p-6 border-2 border-amber-400/40 dark:border-amber-400/30 shadow-2xl overflow-hidden text-start">
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-amber-400/10 rounded-full blur-xl" />
                
                {/* Top Poster Header */}
                <div className="flex items-center justify-between pb-5 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-white p-0.5 flex items-center justify-center border border-amber-400/40 shadow-sm overflow-hidden shrink-0">
                      <img
                        src="/assets/your-academy-logo.png"
                        alt="Your Academy"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm text-zinc-950 dark:text-white font-sora">YOUR ACADEMY</h3>
                      <p className="text-[11px] text-amber-700 dark:text-amber-400 font-bold">{t.common.locationName}</p>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 text-[11px] font-bold border border-amber-400/30 font-sora">
                    2025 / 2026
                  </div>
                </div>

                {/* Official Logo Display */}
                <div className="mt-5 mb-2 flex flex-col items-center justify-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white p-2 flex items-center justify-center shadow-xl border-2 border-amber-400/40 shadow-amber-500/10 hover:scale-105 transition-transform">
                    <img
                      src="/assets/your-academy-logo.png"
                      alt="Your Academy"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Branded Mottos Box */}
                <div className="my-6 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 text-center space-y-3">
                  <div className="inline-block px-3 py-1 rounded-md bg-amber-500 text-black text-[11px] font-black tracking-wider uppercase font-sora">
                    {CAMPAIGN_MOTTO.backToSchool}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white leading-snug">
                    {t.common.slogan}
                  </h4>
                  <div className="pt-1 flex flex-col gap-1 text-xs font-bold text-amber-700 dark:text-amber-400 font-sora tracking-wide">
                    <span>{CAMPAIGN_MOTTO.tagline1}</span>
                    <span className="text-zinc-600 dark:text-zinc-400">{CAMPAIGN_MOTTO.tagline2}</span>
                  </div>
                </div>

                {/* Offer Feature Highlights */}
                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-500 shrink-0" />
                      <span className="text-zinc-900 dark:text-zinc-200 font-bold">{language === 'ar' ? 'العرض الترويجي:' : 'Promo Offer:'}</span>
                    </div>
                    <span className="text-amber-700 dark:text-amber-400 font-black text-sm">{language === 'ar' ? '9000 دج للمستوى' : '9,000 DZD / level'}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-amber-500 shrink-0" />
                      <span className="text-zinc-900 dark:text-zinc-200 font-bold">{language === 'ar' ? 'اللغات المتاحة:' : 'Languages:'}</span>
                    </div>
                    <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                      {language === 'ar' ? 'الإنجليزية، الفرنسية، الإسبانية، الألمانية' : 'English, French, Spanish, German'}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-amber-500 shrink-0" />
                      <span className="text-zinc-900 dark:text-zinc-200 font-bold">{language === 'ar' ? 'الدعم المدرسي:' : 'Academic Support:'}</span>
                    </div>
                    <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                      {language === 'ar' ? 'حصص خاصة بالأقسام النهائية (BAC / BEM)' : 'Final Classes (BAC & BEM) Focus'}
                    </span>
                  </div>
                </div>

                {/* Campaign Start Countdown Note */}
                <div className="mt-5 pt-4 border-t border-zinc-200 dark:border-zinc-800/90 text-center">
                  <p className="text-xs font-bold text-zinc-800 dark:text-zinc-300">
                    <span className="text-amber-600 dark:text-amber-400 font-black">{language === 'ar' ? 'موعد الانطلاق:' : 'Program Launch:'}</span> {t.common.startDate}
                  </p>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    {t.hero.limitedSeatsNote}
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Location & Contacts */}
              <div className={`absolute -bottom-5 ${isRtl ? '-right-4 sm:-right-6 text-right' : '-left-4 sm:-left-6 text-left'} bg-white/95 dark:bg-zinc-900/95 border border-amber-400/40 p-3 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-3`}>
                <div className="w-9 h-9 rounded-xl bg-amber-400/20 text-amber-500 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">{t.hero.inquiryLine}</p>
                  <p className="text-xs font-black text-zinc-950 dark:text-white" dir="ltr">{ACADEMY_INFO.phones[0]}</p>
                </div>
              </div>

              {/* Floating Badge 2: Certificate */}
              <div className={`absolute -top-4 ${isRtl ? '-left-4 sm:-left-6' : '-right-4 sm:-right-6'} bg-white/95 dark:bg-zinc-900/95 border border-amber-400/40 px-3.5 py-2 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2`}>
                <Award className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100">
                  {t.common.britishCert}
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

