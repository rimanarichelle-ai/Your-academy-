import React, { useState } from 'react';
import { ACADEMY_INFO } from '../data/academyData';
import {
  Languages,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Award,
  Phone,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CircularProgressBar } from './CircularProgressBar';

interface LanguageProgramsProps {
  onOpenRegister: (program?: string) => void;
}

export const LanguagePrograms: React.FC<LanguageProgramsProps> = ({ onOpenRegister }) => {
  const { t, isRtl, language } = useLanguage();
  const [selectedLangId, setSelectedLangId] = useState<string>('lang-en');

  const activeLang = t.languages.programs.find((p) => p.id === selectedLangId) || t.languages.programs[0];

  return (
    <section id="languages" className="py-20 bg-zinc-50 dark:bg-zinc-950 relative border-t border-zinc-200 dark:border-zinc-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-800 dark:text-amber-400 text-xs font-bold">
            <Languages className="w-3.5 h-3.5" />
            <span>{t.languages.sectionBadge}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 dark:text-white tracking-tight">
            {t.languages.title} <span className="text-amber-600 dark:text-amber-400">{t.languages.titleHighlight}</span>
          </h2>
          
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {t.languages.subtitle}
          </p>
        </div>

        {/* Language Tabs / Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {t.languages.programs.map((prog) => {
            const isSelected = prog.id === selectedLangId;
            return (
              <button
                key={prog.id}
                onClick={() => setSelectedLangId(prog.id)}
                className={`px-5 py-3 rounded-2xl font-extrabold text-sm transition-all flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20 scale-105'
                    : 'bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:border-amber-400/40 hover:text-black dark:hover:text-white shadow-sm'
                }`}
                id={`tab-${prog.id}`}
              >
                <span>{prog.title}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-bold font-sora ${isSelected ? 'bg-black text-amber-300' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'}`}>
                  {prog.subTitleEn}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Language Detailed Showcase Card */}
        <div className="bg-white dark:bg-[#0e121b] border-2 border-amber-400/30 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Main Content Area */}
            <div className="lg:col-span-7 space-y-6 text-start">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-black font-black text-xs">
                  {activeLang.badge}
                </span>
                <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold text-xs">
                  {t.languages.targetAudienceLabel}: {activeLang.targetAudience}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white">
                  {activeLang.title} <span className="text-amber-600 dark:text-amber-400 font-sora text-xl">({activeLang.subTitleEn})</span>
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-base mt-2 leading-relaxed">
                  {activeLang.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-black text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                  {t.languages.highlightsTitle}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-800 dark:text-zinc-200">
                  {activeLang.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-zinc-50 dark:bg-zinc-900/60 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 dark:text-amber-400 mt-0.5 shrink-0" />
                      <span className="font-medium text-xs sm:text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certification note */}
              {activeLang.certification && (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-3 text-amber-800 dark:text-amber-300 text-xs sm:text-sm font-bold">
                  <Award className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0" />
                  <span>{activeLang.certification}</span>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenRegister(activeLang.title)}
                  className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-black text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  id={`register-btn-${activeLang.id}`}
                >
                  <span>{t.languages.registerInProgram} {activeLang.title}</span>
                  {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>

                <a
                  href={`tel:${ACADEMY_INFO.phones[0]}`}
                  className="px-5 py-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:text-amber-600 dark:hover:text-amber-400 text-sm font-bold text-center flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  <span>{t.languages.inquirePhone}</span>
                </a>
              </div>
            </div>

            {/* Right Card / Offer Snapshot */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 p-6 space-y-5 shadow-sm text-start">
                <div className="text-center pb-4 border-b border-zinc-200 dark:border-zinc-800">
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{t.languages.currentCostLabel}</span>
                  <p className="text-3xl sm:text-4xl font-black text-amber-600 dark:text-amber-400 mt-1">
                    {language === 'ar' ? '9000 دج' : '9,000 DZD'}
                  </p>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 block mt-1">
                    {activeLang.priceTag}
                  </span>
                </div>

                <div className="space-y-3 text-xs text-zinc-700 dark:text-zinc-300">
                  <div className="flex items-center justify-between py-1.5 border-b border-zinc-200 dark:border-zinc-800/60">
                    <span className="text-zinc-500 dark:text-zinc-400">{t.languages.programLaunch}:</span>
                    <span className="font-bold text-zinc-900 dark:text-white">{t.common.startDate}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-zinc-200 dark:border-zinc-800/60">
                    <span className="text-zinc-500 dark:text-zinc-400">{t.languages.studySeason}:</span>
                    <span className="font-bold text-zinc-900 dark:text-white font-sora">2025 / 2026</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-zinc-200 dark:border-zinc-800/60">
                    <span className="text-zinc-500 dark:text-zinc-400">{t.languages.followUpType}:</span>
                    <span className="font-bold text-amber-700 dark:text-amber-300">{t.common.individualFollowUp}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-zinc-200 dark:border-zinc-800/60">
                    <span className="text-zinc-500 dark:text-zinc-400">{t.languages.teachingMethod}:</span>
                    <span className="font-bold text-zinc-900 dark:text-white">{t.common.modernMethods}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-zinc-500 dark:text-zinc-400">{t.languages.academyLocation}:</span>
                    <span className="font-bold text-zinc-900 dark:text-white">{t.common.locationName}</span>
                  </div>
                </div>

                <div className="p-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-center">
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                    {t.common.slogan} • {t.hero.limitedSeatsNote}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Skill Levels Covered by Curriculum (Animated Circular Progress Bars) */}
          <div className="mt-8 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <h4 className="text-base sm:text-lg font-black text-zinc-950 dark:text-white">
                    {t.languages.skillLevelsTitle}
                  </h4>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-900 dark:text-amber-300 font-sora font-black text-xs">
                    {activeLang.cefrLevels}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  {t.languages.skillLevelsSubtitle}
                </p>
              </div>

              {/* Overall coverage badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-xs font-bold text-amber-900 dark:text-amber-300 shrink-0 self-start sm:self-auto">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>{t.languages.overallCurriculumCoverage}:</span>
                <span className="font-sora font-black text-amber-600 dark:text-amber-400 text-sm">
                  {activeLang.overallCoveragePercent}%
                </span>
              </div>
            </div>

            {/* 4 Animated Circular Progress Bars Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {activeLang.skillCompetencies.map((skill, idx) => (
                <CircularProgressBar
                  key={skill.id}
                  percent={skill.percent}
                  levelBadge={skill.levelBadge}
                  label={skill.name}
                  description={skill.description}
                  animateKey={activeLang.id}
                  delay={idx * 0.1}
                  size={92}
                  strokeWidth={7.5}
                />
              ))}
            </div>
          </div>

        </div>

        {/* 4 Language Grid Quick Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {t.languages.programs.map((prog) => (
            <div
              key={prog.id}
              onClick={() => setSelectedLangId(prog.id)}
              className={`p-5 rounded-2xl cursor-pointer transition-all border text-start flex flex-col justify-between ${
                prog.id === selectedLangId
                  ? 'bg-amber-50/70 dark:bg-zinc-900 border-amber-500 shadow-md ring-2 ring-amber-500/20'
                  : 'bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 hover:border-amber-400/50 shadow-sm'
              }`}
              id={`quick-card-${prog.id}`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-amber-800 dark:text-amber-400 bg-amber-400/15 px-2.5 py-0.5 rounded-md font-sora">
                    {prog.subTitleEn}
                  </span>
                  <span className="text-xs font-black text-zinc-800 dark:text-zinc-200">
                    {language === 'ar' ? '9000 دج' : '9,000 DZD'}
                  </span>
                </div>
                <h4 className="text-lg font-black text-zinc-950 dark:text-white">
                  {prog.title}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2">
                  {prog.description}
                </p>

                {/* Animated Circular Progress Bar in quick card */}
                <div className="my-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                  <CircularProgressBar
                    percent={prog.overallCoveragePercent}
                    levelBadge={prog.cefrLevels}
                    label={isRtl ? 'تغطية المنهاج' : 'Curriculum Depth'}
                    description={isRtl ? `مستويات ${prog.cefrLevels}` : `${prog.cefrLevels} Levels`}
                    compact={true}
                    size={52}
                    strokeWidth={5}
                    animateKey={prog.id}
                    delay={0.15}
                  />
                </div>
              </div>

              <div className="pt-3 mt-1 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400">
                <span>{t.languages.viewDetails}</span>
                {isRtl ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

