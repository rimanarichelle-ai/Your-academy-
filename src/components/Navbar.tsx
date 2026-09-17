import React, { useState, useEffect } from 'react';
import { ACADEMY_INFO, CAMPAIGN_MOTTO } from '../data/academyData';
import { Phone, MapPin, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { TopLanguageTicker } from './TopLanguageTicker';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenRegister: (program?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const { t, isRtl, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#hero' },
    { name: t.nav.languages, href: '#languages' },
    { name: t.nav.academic, href: '#academic' },
    { name: t.nav.specialOffer, href: '#special-offer' },
    { name: t.nav.features, href: '#features' },
    { name: t.nav.testimonials, href: '#testimonials' },
    { name: t.nav.contact, href: '#contact' },
    { name: t.nav.faq, href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-sm">
      {/* Top Moving Language Bar Ticker */}
      <TopLanguageTicker />

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/95 text-zinc-900 border-zinc-200 shadow-lg dark:bg-[#0B0F17]/95 dark:text-white dark:border-amber-500/20 py-3 backdrop-blur-md'
            : 'bg-white/85 text-zinc-900 border-zinc-200/80 dark:bg-[#0B0F17]/80 dark:text-white dark:border-white/10 py-4 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#hero"
            className="flex items-center gap-3 group text-right"
            id="nav-logo"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white p-1 flex items-center justify-center shadow-md border border-amber-400/40 group-hover:scale-105 transition-transform overflow-hidden shrink-0">
              <img
                src="/assets/your-academy-logo.png"
                alt="Your Academy"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl text-zinc-950 dark:text-white tracking-tight font-sora">
                  YOUR ACADEMY
                </span>
                <span className="hidden sm:inline-block bg-amber-500/20 text-amber-800 dark:text-amber-400 text-[10px] px-2 py-0.5 rounded-md font-bold border border-amber-500/30">
                  {language === 'ar' ? 'خميس مليانة' : 'Khemis Miliana'}
                </span>
              </div>
              <span className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                {language === 'ar' ? ACADEMY_INFO.academyNameAr : t.common.academySubtitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-700 hover:text-amber-600 dark:text-zinc-300 dark:hover:text-amber-400 px-3 py-2 text-sm font-semibold rounded-lg hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Controls & CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Language Switcher */}
            <LanguageSwitcher variant="navbar" />

            {/* Theme Toggle Button */}
            <ThemeToggle variant="icon" />

            {/* Direct Phone Call */}
            <a
              href={`tel:${ACADEMY_INFO.phones[0]}`}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 hover:border-amber-400/50 text-zinc-800 dark:text-zinc-200 hover:text-amber-600 dark:hover:text-amber-400 text-xs font-bold transition-all shadow-sm"
              id="header-phone-btn"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span dir="ltr">{ACADEMY_INFO.phones[0]}</span>
            </a>

            {/* Register CTA Button */}
            <button
              onClick={() => onOpenRegister()}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center gap-1.5"
              id="header-register-btn"
            >
              <span>{t.common.registerNow}</span>
              {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Header Controls */}
          <div className="flex md:hidden items-center gap-1.5 sm:gap-2">
            {/* Mobile language toggle */}
            <LanguageSwitcher variant="navbar" />

            {/* Mobile quick theme toggle */}
            <ThemeToggle variant="icon" />

            <button
              onClick={() => onOpenRegister()}
              className="px-2.5 py-1.5 rounded-lg bg-amber-500 text-black font-bold text-xs shadow-sm whitespace-nowrap"
              id="mobile-register-quick"
            >
              {t.common.registerNow}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 hover:text-black dark:hover:text-white"
              aria-label={isRtl ? "القائمة الرئيسية" : "Main Menu"}
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0B0F17] px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl">
            <div className="flex items-center gap-3 p-2.5 bg-zinc-100 dark:bg-zinc-900/70 rounded-xl border border-zinc-200 dark:border-zinc-800/80 mb-2">
              <div className="w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center shrink-0 shadow-sm border border-amber-400/30 overflow-hidden">
                <img
                  src="/assets/your-academy-logo.png"
                  alt="Your Academy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-start">
                <span className="font-extrabold text-sm text-zinc-950 dark:text-white font-sora tracking-tight">YOUR ACADEMY</span>
                <span className="text-xs text-amber-600 dark:text-amber-400 font-bold">{t.common.academySubtitle}</span>
              </div>
            </div>

            {/* Language Switcher inside Mobile Drawer */}
            <LanguageSwitcher variant="mobile" />

            {/* Accessibility: Theme Switcher inside Mobile Drawer */}
            <div className="py-1">
              <ThemeToggle variant="menu" />
            </div>

            {/* Navigation Links */}
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 text-base font-semibold text-zinc-800 dark:text-zinc-200 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-zinc-100 dark:hover:bg-zinc-900/60 rounded-xl transition-colors text-start"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Drawer CTAs */}
            <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm text-center shadow-md flex items-center justify-center gap-2"
                id="mobile-drawer-register"
              >
                <span>{t.common.registerNow}</span>
                {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
              <a
                href={`tel:${ACADEMY_INFO.phones[0]}`}
                className="w-full py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-amber-700 dark:text-amber-400 font-bold text-sm text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{t.common.callNow}: {ACADEMY_INFO.phones[0]}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

