import React from 'react';
import { useCurtain } from './PixelCurtainTransition.tsx';
import { ArrowLeft, KeyRound, Terminal, Cpu, Shield, BookOpen, Layers } from 'lucide-react';

interface SecondaryPlateViewProps {
  screenId: string;
}

export const SecondaryPlateView: React.FC<SecondaryPlateViewProps> = ({ screenId }) => {
  const { navigateScreen } = useCurtain();

  const handleReturn = () => {
    navigateScreen('home');
  };

  const getScreenDetails = () => {
    switch (screenId) {
      case 'specs':
        return {
          tag: '// SPECIFICATION CODEX // ARCH_07',
          title: 'System Architecture & Neural Acoustic Weights',
          summary: 'In-depth specification of the on-device acoustic fingerprinting pipeline, spectrogram downsampling, and sub-frame vector quantization.',
        };

      default:
        return {
          tag: '// CANONICAL SPECIFICATION // SPEC_07',
          title: 'Archival Plate & Technical Specs',
          summary: 'Detailed examination plate captured directly from the on-device runtime codex.',
        };
    }
  };

  const info = getScreenDetails();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 animate-in fade-in duration-200">
      {/* Return Action & Escape HUD */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#dadad8] mb-10 gap-4">
        <button
          type="button"
          onClick={handleReturn}
          className="inline-flex items-center gap-2 font-mono-tech text-xs tracking-wider text-[#1D544C] hover:text-[#121413] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>[ RETURN TO SHOWCASE DIRECTORY ]</span>
        </button>

        <div className="inline-flex items-center gap-2 font-mono-tech text-[11px] text-[#50615B] bg-[#eeeeec] px-3 py-1.5 border border-[#dadad8]">
          <span className="w-2 h-2 rounded-full bg-[#1D544C]" />
          <span>PRESS [ ESC ] KEYBOARD SHORTCUT TO FLIP RADIAL CURTAIN</span>
        </div>
      </div>

      {/* Plate Header */}
      <div className="mb-10">
        <span className="font-mono-tech text-xs tracking-wider text-[#50615B] block mb-2">
          {info.tag}
        </span>
        <h1 className="font-serif-book text-3xl sm:text-4xl text-[#121413] font-normal tracking-tight mb-4">
          {info.title}
        </h1>
        <p className="text-sm sm:text-base text-[#50615B] leading-relaxed max-w-2xl">
          {info.summary}
        </p>
      </div>

      {/* Technical Schematic Box */}
      <div className="p-6 bg-[#f4f4f1] border border-[#dadad8] mb-8 font-mono-tech text-xs">
        <div className="flex items-center justify-between border-b border-[#dadad8] pb-3 mb-4 text-[#50615B]">
          <span>PIPELINE SCHEMATIC // ON-DEVICE BUFFER</span>
          <span>LATENCY &lt; 280MS</span>
        </div>
        <pre className="text-[11px] leading-relaxed overflow-x-auto text-[#121413] py-2">
{`┌───────────────────────┐      ┌─────────────────────────┐      ┌───────────────────────┐
│  Hardware Mic Sensor  │ ───► │ Circular Ring Buffer    │ ───► │ Mel Spectrogram Core  │
│  44.1 kHz / 16-bit    │      │ 2.5s Window (Zero Disk) │      │ 64 Filterbanks        │
└───────────────────────┘      └─────────────────────────┘      └───────────────────────┘
                                                                            │
┌───────────────────────┐      ┌─────────────────────────┐                  ▼
│ Hafs 'An 'Asim Codex  │ ◄─── │ Sub-Frame Quantizer     │ ◄─── ┌───────────────────────┐
│ 114 Surahs / 6,236 Ay │      │ Cosine Match >= 94.2%   │      │ Compact Neural Model  │
└───────────────────────┘      └─────────────────────────┘      │ 100% On-Device Weights│
                                                                └───────────────────────┘`}
        </pre>
      </div>

      {/* Detailed Spec Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 bg-white border border-[#dadad8]">
          <div className="flex items-center gap-2 text-[#1D544C] mb-3">
            <Cpu className="w-4 h-4" />
            <h2 className="font-mono-tech text-xs font-bold uppercase tracking-wider">
              01 // Acoustic Quantization
            </h2>
          </div>
          <p className="text-xs text-[#50615B] leading-relaxed">
            Raw audio streams are transformed directly on device using discrete Fourier analysis over 25ms Hanning windows with 10ms strides. No intermediate raw audio is stored on persistent flash storage.
          </p>
        </div>

        <div className="p-6 bg-white border border-[#dadad8]">
          <div className="flex items-center gap-2 text-[#1D544C] mb-3">
            <Shield className="w-4 h-4" />
            <h2 className="font-mono-tech text-xs font-bold uppercase tracking-wider">
              02 // Zero Egress Guarantee
            </h2>
          </div>
          <p className="text-xs text-[#50615B] leading-relaxed">
            The app lacks network permissions entirely (`NSAllowsArbitraryLoads = false`, zero socket listeners). Tested and certified under airplane mode without cellular or Wi-Fi radio connectivity.
          </p>
        </div>

        <div className="p-6 bg-white border border-[#dadad8]">
          <div className="flex items-center gap-2 text-[#1D544C] mb-3">
            <BookOpen className="w-4 h-4" />
            <h2 className="font-mono-tech text-xs font-bold uppercase tracking-wider">
              03 // Canonical Text Preservation
            </h2>
          </div>
          <p className="text-xs text-[#50615B] leading-relaxed">
            Canonical Uthmani script based on King Fahd Glorious Quran Printing Complex standards. Accompanied by verified, scholarly English translations with zero editorial deviation.
          </p>
        </div>

        <div className="p-6 bg-white border border-[#dadad8]">
          <div className="flex items-center gap-2 text-[#1D544C] mb-3">
            <Layers className="w-4 h-4" />
            <h2 className="font-mono-tech text-xs font-bold uppercase tracking-wider">
              04 // Local SQLite Journal
            </h2>
          </div>
          <p className="text-xs text-[#50615B] leading-relaxed">
            Detected recitations are logged strictly to a local encrypted SQLite database on the device. Users can inspect, export to markdown, or delete the entire history with a single tap.
          </p>
        </div>
      </div>

      {/* Return CTA */}
      <div className="text-center pt-8 border-t border-[#dadad8]">
        <button
          type="button"
          onClick={handleReturn}
          className="bg-[#121413] hover:bg-[#1D544C] text-[#fbfbf8] font-mono-tech text-xs tracking-wider px-6 py-3 transition-colors cursor-pointer"
        >
          [ ← RETURN TO MAIN APPARATUS SHOWCASE ]
        </button>
      </div>
    </div>
  );
};
