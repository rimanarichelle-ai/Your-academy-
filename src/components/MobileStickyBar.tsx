import React from 'react';
import { ACADEMY_INFO } from '../data/academyData';
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface MobileStickyBarProps {
  onOpenRegister: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenRegister }) => {
  const { t, isRtl } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 dark:bg-[#0B0F17]/95 backdrop-blur-lg border-t border-amber-500/30 p-2.5 px-4 shadow-2xl transition-colors">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* Primary Call Button */}
        <a
          href={`tel:${ACADEMY_INFO.phones[0]}`}
          className="flex-1 py-3 px-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-amber-700 dark:text-amber-400 font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
          id="mobile-sticky-call-1"
        >
          <Phone className="w-4 h-4" />
          <span>{t.mobileBar.callPrimary}</span>
        </a>

        {/* Secondary Call (Alternative phone) */}
        <a
          href={`tel:${ACADEMY_INFO.phones[1]}`}
          className="py-3 px-3 rounded-xl bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold text-xs flex items-center justify-center gap-1 active:scale-95 transition-all"
          id="mobile-sticky-call-2"
          title={t.mobileBar.callSecondary}
        >
          <Phone className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
          <span dir="ltr">0670</span>
        </a>

        {/* Big CTA Register Button */}
        <button
          onClick={onOpenRegister}
          className="flex-[1.4] py-3 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs flex items-center justify-center gap-1 shadow-md shadow-amber-500/25 active:scale-95 transition-transform"
          id="mobile-sticky-register"
        >
          <span>{t.mobileBar.registerNow}</span>
          {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>

      </div>
    </div>
  );
};

