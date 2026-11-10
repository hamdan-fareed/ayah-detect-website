/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { FilmGrain } from './components/FilmGrain.tsx';
import { ScrambleText } from './components/ScrambleText.tsx';
import { BracketLink } from './components/BracketLink.tsx';
import { NavCascadeRipple } from './components/NavCascadeRipple.tsx';
import { StorePlates } from './components/StorePlates.tsx';
import { ArchitecturalBreakdown } from './components/ArchitecturalBreakdown.tsx';
import { SecondaryPlateView } from './components/SecondaryPlateView.tsx';
import { CurtainProvider, useCurtain } from './components/PixelCurtainTransition.tsx';
import { ToastProvider, useToast } from './components/MicroToast.tsx';
import { Smartphone, Github, ArrowDown } from 'lucide-react';

const MainShowcase: React.FC = () => {
  const { navigateScreen } = useCurtain();
  const { showToast } = useToast();
  const installSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToInstall = () => {
    installSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    showToast('[ jumped to deployment repository ]');
  };

  const handleJoinAndroidWaitlist = () => {
    window.open('https://forms.gle/CTQjYz33kFyQwsVa7', '_blank', 'noopener,noreferrer');
    showToast('[ opening Android waitlist form ]');
  };

  const handleJoinWaitlist = () => {
    window.open('https://forms.gle/vZU4YDCKdtfBb5WL8', '_blank', 'noopener,noreferrer');
    showToast('[ opening iOS waitlist form ]');
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
      {/* ===================== HERO SECTION ===================== */}
      <section className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 md:gap-12 pt-4">
        {/* Left Column: Metadata, Title, Subtitle, Tags, Action */}
        <div className="flex-1 max-w-2xl">
          {/* Metadata Lead-In */}
          <span className="font-mono-tech text-xs tracking-[0.14em] text-[#50615B] uppercase block mb-3">
            // OFFLINE RECOGNITION APPARATUS
          </span>

          {/* Headline with 8-bit Pixel Character */}
          <div className="inline-block relative mb-4">
            <ScrambleText
              text="Ayah detect."
              duration={580}
              interval={42}
              as="h1"
              className="font-pixel text-4xl sm:text-5xl lg:text-6xl text-[#121413] tracking-tighter leading-none select-none"
            />
          </div>

          {/* Subtitle */}
          <div className="block relative my-3">
            <ScrambleText
              text="A quiet, offline app that recognizes the recitation in the room. 100% on-device model. Zero telemetry. Zero audio leaves your phone."
              duration={620}
              interval={42}
              as="p"
              className="text-base sm:text-lg text-[#50615B] font-normal leading-relaxed select-none"
            />
          </div>

          {/* Chips & Badges Row (Informational badges, no links) */}
          <div className="flex flex-wrap items-center gap-2 my-6">
            <BracketLink label="114 Surahs" />
            <BracketLink label="6,236 Ayahs" />
            <BracketLink label="100% On-Device" variant="badge" />
            <BracketLink label="Zero Cloud Egress" />
            <BracketLink label="Airplane Mode Ready" />
          </div>

          {/* Action Button: Install App */}
          <div className="pt-2">
            <button
              type="button"
              onClick={scrollToInstall}
              className="inline-flex items-center gap-2 bg-[#1D544C] hover:bg-[#163F39] text-[#fbfbf8] font-mono-tech text-xs tracking-wider px-5 py-3 transition-all duration-100 ease-out hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <ArrowDown className="w-4 h-4 shrink-0" />
              <span>[ install app ]</span>
            </button>
          </div>
        </div>

        {/* Right Column: Geometric Codex Emblem Artwork */}
        <div className="w-full md:w-auto flex justify-center md:justify-end shrink-0">
          <div className="relative p-2.5 bg-[#f3f3ee] border border-[#dadad8] select-none shadow-xs">
            <img
              src="./assets/aistudio/image_5c36b8dd.png"
              alt="Ayah Detect — Geometric Codicology Apparatus Emblem"
              className="w-56 h-56 sm:w-64 sm:h-64 object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      {/* ===================== STORE PLATES SHOWCASE ===================== */}
      <StorePlates />

      {/* ===================== ARCHITECTURAL BREAKDOWN ===================== */}
      <ArchitecturalBreakdown />

      {/* ===================== DEPLOYMENT REPOSITORY ===================== */}
      <section ref={installSectionRef} className="mt-20 sm:mt-28 pt-8 border-t border-[#dadad8]">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-mono-tech text-xs tracking-wider text-[#50615B] uppercase block mb-2">
            [ DEPLOYMENT REPOSITORY ]
          </span>
          <h2 className="font-serif-book text-3xl sm:text-4xl text-[#121413] font-normal tracking-tight mb-3 select-none">
            Install the Companion
          </h2>
          <p className="text-xs sm:text-sm text-[#50615B] leading-relaxed">
            No account creation required. No data collected. Works immediately upon installation.
          </p>
        </div>

        {/* Installation Actions Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto">
          {/* 1. Android (Join the Waitlist for Android - Highlighted Green Action) */}
          <a
            href="https://forms.gle/CTQjYz33kFyQwsVa7"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => showToast('[ opening Android waitlist form ]')}
            className="flex items-center gap-2 bg-[#1D544C] hover:bg-[#163F39] text-[#fbfbf8] font-mono-tech text-xs tracking-wider px-5 py-3 transition-all duration-100 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <Smartphone className="w-4 h-4" />
            <span>[ Join the Waitlist for Android ]</span>
          </a>

          {/* 2. iOS (Join the Waitlist for iOS) */}
          <a
            href="https://forms.gle/vZU4YDCKdtfBb5WL8"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => showToast('[ opening iOS waitlist form ]')}
            className="flex items-center gap-2 bg-[#eeeeec] hover:bg-[#e2e3e0] text-[#121413] border border-[#dadad8] font-mono-tech text-xs tracking-wider px-5 py-3 transition-all duration-100 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <Smartphone className="w-4 h-4" />
            <span>[ Join the Waitlist for iOS ]</span>
          </a>

          {/* 3. GitHub Repository */}
          <button
            type="button"
            onClick={() => {
              window.open('https://github.com/hamdan-fareed/ayah-detect-website', '_blank', 'noopener,noreferrer');
              showToast('[ opening open-source repository ]');
            }}
            className="flex items-center gap-2 bg-[#eeeeec] hover:bg-[#e2e3e0] text-[#121413] border border-[#dadad8] font-mono-tech text-xs tracking-wider px-5 py-3 transition-all duration-100 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <Github className="w-4 h-4" />
            <span>[ GitHub Repository ]</span>
          </button>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="mt-24 pt-10 border-t border-[#dadad8] text-xs text-[#50615B]">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-4">
          {/* Left Brand Col */}
          <div className="max-w-md">
            <h3 className="font-mono-tech text-xs font-bold text-[#121413] tracking-wider uppercase">
              Ayah detect.
            </h3>
          </div>

          {/* Right Navigation Cascade Ripple */}
          <div className="shrink-0">
            <NavCascadeRipple />
          </div>
        </div>
      </footer>
    </main>
  );
};

const AppContent: React.FC = () => {
  const { activeScreen } = useCurtain();

  if (activeScreen !== 'home') {
    return <SecondaryPlateView screenId={activeScreen} />;
  }

  return <MainShowcase />;
};

export default function App() {
  return (
    <CurtainProvider>
      <ToastProvider>
        {/* Micro-Turbulence Film Grain Overlay */}
        <FilmGrain />

        {/* Main Content (Swapped seamlessly at 360ms by CurtainProvider) */}
        <AppContent />
      </ToastProvider>
    </CurtainProvider>
  );
}
