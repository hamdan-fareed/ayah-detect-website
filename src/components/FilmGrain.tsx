import React from 'react';

/**
 * 5. The Living Micro-Turbulence Film Grain Overlay
 * - Procedural film-grain layer powered by SVG fractal turbulence filter (baseFrequency 0.8, 3 octaves)
 * - Infinite 4-step jitter keyframe cycle (0.35s): (0,0), (-5%, -10%), (-15%, 5%), (7%, -8%)
 * - Calibrated 4% opacity with 32px bleed boundary
 */
export const FilmGrain: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none"
    >
      {/* SVG filter definition */}
      <svg className="hidden">
        <filter id="grain-turbulence">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.8 0"
          />
        </filter>
      </svg>

      {/* Jittering layer with 32px bleed boundary */}
      <div
        className="animate-grain-jitter absolute -inset-8 w-[calc(100%+64px)] h-[calc(100%+64px)] opacity-4"
        style={{
          filter: 'url(#grain-turbulence)',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply',
        }}
      />
    </div>
  );
};
