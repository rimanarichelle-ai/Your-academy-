import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpecialOfferBanner } from './components/SpecialOfferBanner';
import { LanguagePrograms } from './components/LanguagePrograms';
import { AcademicSupport } from './components/AcademicSupport';
import { PillarsSection } from './components/PillarsSection';
import { Testimonials } from './components/Testimonials';
import { AcademyLocationAndContact } from './components/AcademyLocationAndContact';
import { FaqSection } from './components/FaqSection';
import { CommunityNewsletter } from './components/CommunityNewsletter';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { MobileStickyBar } from './components/MobileStickyBar';

function AcademyApp() {
  const { isRtl } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string | undefined>(undefined);

  const handleOpenRegister = (programName?: string) => {
    setSelectedProgram(programName);
    setIsModalOpen(true);
  };

  const handleCloseRegister = () => {
    setIsModalOpen(false);
    setSelectedProgram(undefined);
  };

  return (
    <div
      className={`min-h-screen bg-[#F8FAFC] text-zinc-900 dark:bg-[#0B0F17] dark:text-white flex flex-col ${
        isRtl ? 'font-cairo' : 'font-plus-jakarta'
      } selection:bg-amber-400 selection:text-black antialiased transition-colors duration-200`}
    >
      {/* Website Entry / Splash Screen */}
      <SplashScreen />

      {/* Navigation Header */}
      <Navbar onOpenRegister={handleOpenRegister} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenRegister={handleOpenRegister} />
        <SpecialOfferBanner onOpenRegister={handleOpenRegister} />
        <LanguagePrograms onOpenRegister={handleOpenRegister} />
        <AcademicSupport onOpenRegister={handleOpenRegister} />
        <PillarsSection />
        <Testimonials onOpenRegister={handleOpenRegister} />
        <AcademyLocationAndContact onOpenRegister={() => handleOpenRegister()} />
        <FaqSection />
        
        {/* Join Our Academic Community Newsletter Component */}
        <CommunityNewsletter onOpenRegister={handleOpenRegister} />
      </main>

      {/* Footer */}
      <Footer onOpenRegister={() => handleOpenRegister()} />

      {/* Mobile Bottom Sticky Bar for rapid contact & registration */}
      <MobileStickyBar onOpenRegister={() => handleOpenRegister()} />

      {/* Registration & Pre-enrollment Dialog */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={handleCloseRegister}
        preselectedProgram={selectedProgram}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AcademyApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}

