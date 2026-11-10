import React, { useState, useEffect } from 'react';
import { BracketLink } from './BracketLink.tsx';
import { useToast } from './MicroToast.tsx';
import { useCurtain } from './PixelCurtainTransition.tsx';

interface ChannelItem {
  id: string;
  label: string;
  actionType: 'mail' | 'navigate' | 'external' | 'info';
  target?: string;
}

const CHANNELS: ChannelItem[] = [
  { id: 'github', label: 'github', actionType: 'external', target: 'https://github.com/hamdan-fareed' },
  { id: 'youtube', label: 'youtube', actionType: 'external', target: 'https://www.youtube.com/@hamdanfareed' },
  { id: 'docs', label: 'docs', actionType: 'info' }, // links to nothing
  { id: 'books', label: 'books', actionType: 'external', target: 'https://many.bio/Hamdan' },
  { id: 'mail', label: 'mail', actionType: 'mail', target: 'hamdanfareedibniqbal@gmail.com' },
];

const CIPHER_GLYPHS = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-+=<>?';

/**
 * 3. The Vertically Cascading Navigation Ripple
 * - Channel links mapped with optical center at item number 2 ([ docs ])
 * - Ripple begins at center and ripples outward in dual directions simultaneously
 * - Stagger wave triggers high-speed cipher decryption across each link
 */
export const NavCascadeRipple: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { copyEmailAndToast } = useToast();
  const { navigateScreen } = useCurtain();
  const [activeRippleKey, setActiveRippleKey] = useState(0);
  const [displayLabels, setDisplayLabels] = useState<string[]>(CHANNELS.map((c) => c.label));

  const triggerCascadeRipple = () => {
    setActiveRippleKey((prev) => prev + 1);

    const centerIndex = Math.floor(CHANNELS.length / 2); // Optical center (item 2: [ docs ])

    // Reset all labels to scrambled state
    CHANNELS.forEach((channel, idx) => {
      const offset = Math.abs(idx - centerIndex);
      const delay = offset * 90; // Dual directional stagger: 90ms per step outward

      setTimeout(() => {
        // Scramble this item briefly
        let count = 0;
        const interval = setInterval(() => {
          count++;
          if (count > 5) {
            clearInterval(interval);
            setDisplayLabels((prev) => {
              const updated = [...prev];
              updated[idx] = channel.label;
              return updated;
            });
          } else {
            setDisplayLabels((prev) => {
              const updated = [...prev];
              const scrambled = channel.label
                .split('')
                .map(() => CIPHER_GLYPHS[Math.floor(Math.random() * CIPHER_GLYPHS.length)])
                .join('');
              updated[idx] = scrambled;
              return updated;
            });
          }
        }, 38);
      }, delay);
    });
  };

  useEffect(() => {
    triggerCascadeRipple();
  }, []);

  const handleChannelClick = (channel: ChannelItem) => {
    if (channel.actionType === 'mail') {
      copyEmailAndToast(channel.target);
    } else if (channel.actionType === 'navigate' && channel.target) {
      navigateScreen(channel.target);
    } else if (channel.actionType === 'external' && channel.target) {
      window.open(channel.target, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <nav
      aria-label="Channel directory"
      className={`flex flex-wrap items-center gap-1.5 sm:gap-2 ${className}`}
    >
      {CHANNELS.map((item, idx) => {
        const offset = Math.abs(idx - Math.floor(CHANNELS.length / 2));
        return (
          <div
            key={item.id}
            style={{
              transitionDelay: `${offset * 75}ms`,
            }}
            className="animate-in fade-in duration-300"
          >
            <BracketLink
              label={displayLabels[idx]}
              onClick={item.actionType === 'info' ? undefined : () => handleChannelClick(item)}
            />
          </div>
        );
      })}
    </nav>
  );
};
