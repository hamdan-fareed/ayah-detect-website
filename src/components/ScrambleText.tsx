import React, { useState, useEffect, useCallback, useRef } from 'react';

const CIPHER_GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?~/';

interface ScrambleTextProps {
  text: string;
  duration?: number; // default 580ms for title, 620ms for subtitle
  interval?: number; // 42ms clock
  triggerOnMount?: boolean;
  className?: string;
  onClick?: () => void;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
}

/**
 * Center-Staggered Text Decryption Scramble
 * Resolves each word from its geometric center outward:
 * Distance D = |i - (L - 1) / 2|
 * Center letters resolve first, outer letters tumble through random 62-glyph matrix.
 */
export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  duration = 580,
  interval = 42,
  triggerOnMount = true,
  className = '',
  onClick,
  as: Component = 'span',
}) => {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsScrambling(true);

    const startTime = Date.now();
    const words = text.split(' ');

    // Precalculate per-character timing based on center-outward distance in each word
    interface CharSpec {
      char: string;
      wordIndex: number;
      charIndexInWord: number;
      normalizedDistance: number; // 0 (center) to 1 (outermost)
      resolveTime: number;
    }

    const charSpecs: CharSpec[] = [];
    words.forEach((word, wIdx) => {
      const len = word.length;
      const center = (len - 1) / 2;
      const maxDist = Math.max(center, 1);

      for (let i = 0; i < len; i++) {
        const dist = Math.abs(i - center);
        const normDist = len > 1 ? dist / maxDist : 0;
        // Central letters lock first (e.g. at 25% of duration), outer letters lock up to 100% of duration
        const resolveTime = duration * (0.35 + 0.65 * normDist);
        charSpecs.push({
          char: word[i],
          wordIndex: wIdx,
          charIndexInWord: i,
          normalizedDistance: normDist,
          resolveTime,
        });
      }
    });

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;

      if (elapsed >= duration + 42) {
        setDisplayText(text);
        setIsScrambling(false);
        if (timerRef.current) clearInterval(timerRef.current);
        return;
      }

      // Build scrambled string preserving word spaces
      let specIdx = 0;
      const scrambledWords = words.map((word) => {
        let reconstructedWord = '';
        for (let i = 0; i < word.length; i++) {
          const spec = charSpecs[specIdx++];
          if (!spec) {
            reconstructedWord += word[i];
            continue;
          }

          // If current char is punctuation, space, or already resolved
          if (elapsed >= spec.resolveTime || /\s/.test(spec.char)) {
            reconstructedWord += spec.char;
          } else {
            // Pick random glyph from 62-glyph cryptographic matrix
            const randGlyph = CIPHER_GLYPHS[Math.floor(Math.random() * CIPHER_GLYPHS.length)];
            reconstructedWord += randGlyph;
          }
        }
        return reconstructedWord;
      });

      setDisplayText(scrambledWords.join(' '));
    }, interval);
  }, [text, duration, interval]);

  useEffect(() => {
    if (triggerOnMount) {
      scramble();
    } else {
      setDisplayText(text);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [text, triggerOnMount, scramble]);

  const handleClick = () => {
    scramble();
    if (onClick) onClick();
  };

  return (
    <Component
      onClick={onClick ? handleClick : undefined}
      className={`select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {displayText}
    </Component>
  );
};
