import React from 'react';

/**
 * 9. The Browser Tab Monogram & Geometric Vector Architecture
 * Concentric acoustic radar, frequency lines, compass tick marks, and central "آية" calligraphic emblem.
 */
export const CodexEmblem: React.FC<{ size?: number; className?: string }> = ({
  size = 280,
  className = '',
}) => {
  return (
    <div
      className={`relative flex items-center justify-center p-6 bg-[#f3f3ee] border border-[#dadad8] select-none ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <svg
        viewBox="0 0 240 240"
        className="w-full h-full text-[#1D544C]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer subtle boundary */}
        <circle
          cx="120"
          cy="120"
          r="108"
          stroke="#50615B"
          strokeWidth="0.75"
          strokeDasharray="2 4"
          className="opacity-40"
        />

        {/* Secondary ring with crosshair ticks */}
        <circle
          cx="120"
          cy="120"
          r="96"
          stroke="#1D544C"
          strokeWidth="1.25"
          className="opacity-70"
        />

        {/* Compass & acoustic degree ticks */}
        {Array.from({ length: 48 }).map((_, i) => {
          const angle = (i * 360) / 48;
          const isMajor = i % 6 === 0;
          const r1 = 96;
          const r2 = isMajor ? 86 : 91;
          const rad = (angle * Math.PI) / 180;
          const x1 = 120 + r1 * Math.cos(rad);
          const y1 = 120 + r1 * Math.sin(rad);
          const x2 = 120 + r2 * Math.cos(rad);
          const y2 = 120 + r2 * Math.sin(rad);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#50615B"
              strokeWidth={isMajor ? '1.25' : '0.6'}
              className={isMajor ? 'opacity-80' : 'opacity-40'}
            />
          );
        })}

        {/* Middle hairline ring */}
        <circle
          cx="120"
          cy="120"
          r="74"
          stroke="#1D544C"
          strokeWidth="0.8"
          strokeDasharray="4 2"
          className="opacity-60"
        />

        {/* Inner acoustic boundary */}
        <circle
          cx="120"
          cy="120"
          r="54"
          stroke="#50615B"
          strokeWidth="0.8"
          className="opacity-50"
        />

        {/* Vertical and Horizontal crosshair axes */}
        <line
          x1="120"
          y1="12"
          x2="120"
          y2="228"
          stroke="#50615B"
          strokeWidth="0.5"
          strokeDasharray="3 3"
          className="opacity-30"
        />
        <line
          x1="12"
          y1="120"
          x2="228"
          y2="120"
          stroke="#50615B"
          strokeWidth="0.5"
          strokeDasharray="3 3"
          className="opacity-30"
        />

        {/* Frequency waveform bars on left */}
        <g className="opacity-80">
          <line x1="42" y1="120" x2="42" y2="120" stroke="#1D544C" strokeWidth="1.5" />
          <line x1="48" y1="116" x2="48" y2="124" stroke="#1D544C" strokeWidth="1.5" />
          <line x1="54" y1="112" x2="54" y2="128" stroke="#1D544C" strokeWidth="1.5" />
          <line x1="60" y1="106" x2="60" y2="134" stroke="#1D544C" strokeWidth="1.5" />
          <line x1="66" y1="114" x2="66" y2="126" stroke="#1D544C" strokeWidth="1.5" />
        </g>

        {/* Frequency waveform bars on right */}
        <g className="opacity-80">
          <line x1="174" y1="114" x2="174" y2="126" stroke="#1D544C" strokeWidth="1.5" />
          <line x1="180" y1="106" x2="180" y2="134" stroke="#1D544C" strokeWidth="1.5" />
          <line x1="186" y1="112" x2="186" y2="128" stroke="#1D544C" strokeWidth="1.5" />
          <line x1="192" y1="116" x2="192" y2="124" stroke="#1D544C" strokeWidth="1.5" />
          <line x1="198" y1="120" x2="198" y2="120" stroke="#1D544C" strokeWidth="1.5" />
        </g>

        {/* Central Arabic Calligraphy: "آية" */}
        <g transform="translate(120, 134)">
          <text
            textAnchor="middle"
            fontFamily="'Amiri', 'Noto Naskh Arabic', serif"
            fontSize="52"
            fontWeight="bold"
            fill="#003c35"
            className="tracking-normal select-none"
          >
            آية
          </text>
        </g>

        {/* Micro coordinate markers */}
        <text
          x="120"
          y="26"
          textAnchor="middle"
          fontFamily="'Space Mono', monospace"
          fontSize="6"
          fill="#50615B"
          letterSpacing="0.1em"
          className="opacity-70"
        >
          44.1 kHz
        </text>
        <text
          x="120"
          y="222"
          textAnchor="middle"
          fontFamily="'Space Mono', monospace"
          fontSize="6"
          fill="#50615B"
          letterSpacing="0.1em"
          className="opacity-70"
        >
          CODEX SPEC 07
        </text>
      </svg>
    </div>
  );
};
