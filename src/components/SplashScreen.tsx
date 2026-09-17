import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface SplashScreenProps {
  onComplete?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    // Dismiss splash screen smoothly after entrance animation
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B0F17] text-white select-none px-4"
          id="website-splash-screen"
        >
          {/* Subtle Ambient Golden Glow in background */}
          <div className="absolute w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

          {/* Logo Card with Official Entry Animation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative flex flex-col items-center gap-5 text-center"
          >
            {/* White rounded container for the logo asset */}
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-white p-3.5 flex items-center justify-center shadow-2xl border-2 border-amber-400/40 shadow-amber-500/15 overflow-hidden">
              <motion.img
                src="/assets/your-academy-logo.png"
                alt="Your Academy"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Academy Typography & Motto */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="space-y-1.5"
            >
              <h1 className="text-2xl sm:text-3xl font-black font-sora tracking-tight text-white">
                YOUR ACADEMY
              </h1>
              <p className="text-sm font-bold text-amber-400 font-cairo">
                {t.common.slogan}
              </p>
              <p className="text-xs text-zinc-400 font-medium">
                {t.common.locationName}
              </p>
            </motion.div>

            {/* Subtle Progress Indicator */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="h-1 bg-amber-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

