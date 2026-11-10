import React from 'react';

interface BracketLinkProps {
  label: string;
  onClick?: () => void;
  active?: boolean;
  className?: string;
  prefix?: React.ReactNode;
  variant?: 'subtle' | 'primary' | 'badge';
  href?: string;
}

/**
 * 6. Micro-Typographic Contrast & Bracket Dynamics
 * - Brackets encapsulated: [ label ]
 * - At rest: brackets in subdued slate gray (#50615B), label in dark petroleum teal (#1D544C / #003c35)
 * - On hover: brackets snap to bold graphite tone, label darkens to pitch black (#000000)
 * - Entire bracket enclosure scales up by 4% (1.04x) within 100ms
 */
export const BracketLink: React.FC<BracketLinkProps> = ({
  label,
  onClick,
  active = false,
  className = '',
  prefix,
  variant = 'subtle',
  href,
}) => {
  const content = (
    <span
      className={`group inline-flex items-center gap-1.5 font-mono-tech text-xs tracking-[0.08em] select-none transition-transform duration-100 ease-out hover:scale-[1.04] active:scale-[0.98] ${
        variant === 'primary'
          ? 'bg-[#1D544C] text-[#fbfbf8] px-3.5 py-2 hover:bg-[#163F39]'
          : variant === 'badge'
          ? 'bg-[#1D544C]/10 text-[#1D544C] px-2.5 py-1'
          : 'px-2 py-1'
      } ${className}`}
    >
      {prefix && <span className="opacity-80 shrink-0">{prefix}</span>}
      {variant !== 'primary' ? (
        <span className="flex items-center gap-1">
          <span className="text-[#50615B] font-mono-tech transition-colors duration-100 group-hover:text-[#121413]">
            [
          </span>
          <span
            className={`transition-colors duration-100 ${
              active
                ? 'text-[#000000] font-medium'
                : 'text-[#1D544C] group-hover:text-[#000000]'
            }`}
          >
            {label}
          </span>
          <span className="text-[#50615B] font-mono-tech transition-colors duration-100 group-hover:text-[#121413]">
            ]
          </span>
        </span>
      ) : (
        <span className="flex items-center gap-1">
          <span className="opacity-70">[</span>
          <span className="font-medium text-[#fbfbf8]">{label}</span>
          <span className="opacity-70">]</span>
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className="inline-block cursor-pointer focus:outline-none"
      >
        {content}
      </a>
    );
  }

  if (!onClick) {
    return <span className="inline-block select-none cursor-default">{content}</span>;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-block cursor-pointer focus:outline-none bg-transparent border-none p-0 text-left"
    >
      {content}
    </button>
  );
};
