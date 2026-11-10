import React from 'react';

interface PlateData {
  id: string;
  tag: string;
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
}

const PLATES: PlateData[] = [
  {
    id: '01',
    tag: '[ 01 // RECOGNITION ]',
    title: 'Instant Ayah Recognition',
    description: 'Know the exact Surah & Ayah within seconds via acoustic matching.',
    imageSrc: './assets/aistudio/image_f4e4af04.png',
    alt: 'Instant Recitation Recognition — Know the exact Surah and Ayah within seconds via on-device acoustic identification',
  },
  {
    id: '02',
    tag: '[ 02 // PRIVACY ]',
    title: '100% Private & Offline',
    description: 'Zero audio uploaded. No network needed. Strict on-device inference.',
    imageSrc: './assets/aistudio/image_b9fd662f.png',
    alt: '100% Private & Offline — Zero audio uploaded, strict on-device microphone buffer',
  },
  {
    id: '03',
    tag: '[ 03 // EXPORT ]',
    title: 'One-Tap Verse & Ref Copy',
    description: 'Share Arabic scripture & English translation instantly to your clipboard.',
    imageSrc: './assets/aistudio/image_b117e241.png',
    alt: 'One-Tap Verse & Reference Copy — Export scripture and translation directly to clipboard',
  },
];

export const StorePlates: React.FC = () => {
  return (
    <section className="mt-16 sm:mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#dadad8] pb-3 mb-8 gap-2">
        <span className="font-mono-tech text-xs tracking-wider text-[#50615B]">
          [ EXHIBIT 01 // STORE PLATES ]
        </span>
        <span className="font-mono-tech text-xs tracking-wider text-[#50615B]">
          3 vertical folios
        </span>
      </div>

      <h2 className="font-serif-book text-3xl sm:text-4xl text-[#121413] font-normal tracking-tight mb-12 select-none">
        Interface Showcase
      </h2>

      {/* 3 High-Fidelity Vertical Folios Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {PLATES.map((plate) => (
          <div key={plate.id} className="flex flex-col">
            {/* Image Plate Container with Hairline Border */}
            <div className="relative w-full overflow-hidden bg-[#EEEEEC] border border-[#dadad8] shadow-xs">
              <div className="aspect-[9/16] w-full relative overflow-hidden bg-[#1D544C]/10">
                <img
                  src={plate.imageSrc}
                  alt={plate.alt}
                  className="w-full h-full object-cover object-top select-none pointer-events-none"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Folio Caption & Metadata */}
            <div className="mt-4 flex flex-col justify-between flex-1">
              <div>
                <span className="font-mono-tech text-xs text-[#50615B] block mb-1">
                  {plate.tag}
                </span>
                <h3 className="font-serif-book text-xl text-[#121413] font-normal mb-1">
                  {plate.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#50615B] leading-relaxed">
                  {plate.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
