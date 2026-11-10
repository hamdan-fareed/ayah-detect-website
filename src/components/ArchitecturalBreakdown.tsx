import React from 'react';

interface SpecCard {
  id: string;
  tag: string;
  title: string;
  description: string;
}

const SPEC_CARDS: SpecCard[] = [
  {
    id: '01',
    tag: '[ 01 // INSTANT AYAH DETECTION ]',
    title: 'Live Recitation Recognition',
    description:
      'Point your device toward any Quranic recitation—whether in congregational prayer at the masjid, a recorded lecture, or audio stream—and pinpoint the exact Surah and verse range in seconds.',
  },
  {
    id: '02',
    tag: '[ 02 // COMPREHENSIVE COVERAGE ]',
    title: '114 Surahs · 6,236 Ayahs',
    description:
      'Indexed coverage for the entire Mushaf with multi-qari variability modeling. Robust against differing maqamat, pacing, vocal registers, and masjid resonance.',
  },
  {
    id: '03',
    tag: '[ 03 // ONE-TAP CLIPBOARD EXPORT ]',
    title: 'Clean Markdown & Plaintext',
    description:
      'Export the detected verses with formatted Arabic, verified English text, and academic Surah-Ayah citations straight to your clipboard with a single tap for study notes.',
  },
  {
    id: '04',
    tag: '[ 04 // LOCAL ARCHIVAL HISTORY ]',
    title: 'Private Study Ledger',
    description:
      'Maintains an unshared, on-device chronological ledger of recitations detected throughout your days and prayers. Review past verses, inspect timestamps, or purge anytime.',
  },
];

export const ArchitecturalBreakdown: React.FC = () => {
  return (
    <section className="mt-20 sm:mt-28">
      {/* Section Header */}
      <div className="border-b border-[#dadad8] pb-3 mb-6">
        <span className="font-mono-tech text-xs tracking-wider text-[#50615B]">
          [ SPECIFICATION ]
        </span>
      </div>

      <h2 className="font-serif-book text-3xl sm:text-4xl text-[#121413] font-normal tracking-tight mb-3 select-none">
        Architectural &amp; Functional Breakdown
      </h2>
      <p className="text-sm sm:text-base text-[#50615B] leading-relaxed max-w-3xl mb-10">
        Every design decision in Detect the Ayah privileges tranquility, privacy, and liturgical reverence over telemetry and engagement mechanics.
      </p>

      {/* 4 Grid Cards in Balanced 2x2 layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SPEC_CARDS.map((card) => (
          <div
            key={card.id}
            className="p-6 sm:p-7 bg-[#f4f4f1] border border-[#dadad8] flex flex-col justify-between transition-colors duration-150 hover:border-[#1D544C]/40 hover:bg-[#eeeeec]"
          >
            <div>
              <span className="font-mono-tech text-xs tracking-wider text-[#50615B] block mb-2">
                {card.tag}
              </span>
              <h3 className="font-serif-book text-xl text-[#121413] font-medium mb-3">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#50615B] leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 05 Wide Card */}
      <div className="mt-6 p-6 sm:p-8 bg-[#f4f4f1] border border-[#dadad8] transition-colors duration-150 hover:border-[#1D544C]/40 hover:bg-[#eeeeec]">
        <span className="font-mono-tech text-xs tracking-wider text-[#50615B] block mb-2">
          [ 05 // DUAL MODE APP (DAY &amp; OBSIDIAN NIGHT) ]
        </span>
        <h3 className="font-serif-book text-xl sm:text-2xl text-[#121413] font-medium mb-2">
          Architected for Sunlit Desks &amp; Candlelit Rows
        </h3>
        <p className="text-xs sm:text-sm text-[#50615B] leading-relaxed max-w-4xl">
          A serene linen-paper daylight aesthetic for focused morning study, and an absolute pitch-black obsidian night theme calibrated so as not to blind neighbors during Taraweeh or Tahajjud prayers.
        </p>
      </div>
    </section>
  );
};
