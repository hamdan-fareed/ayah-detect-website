import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';

interface CurtainContextType {
  activeScreen: string;
  navigateScreen: (targetScreen: string) => void;
  isTransitioning: boolean;
}

const CurtainContext = createContext<CurtainContextType | null>(null);

// 4 columns x 8 rows = 32 tiles
const COLS = 4;
const ROWS = 8;
const CENTER_COL = (COLS - 1) / 2; // 1.5
const CENTER_ROW = (ROWS - 1) / 2; // 3.5
// Max distance from center to corners: sqrt(1.5^2 + 3.5^2) = sqrt(2.25 + 12.25) = sqrt(14.5) ≈ 3.808
const MAX_DIST = Math.sqrt(CENTER_COL * CENTER_COL + CENTER_ROW * CENTER_ROW);

export const CurtainProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeScreen, setActiveScreen] = useState<string>('home');
  const [targetScreen, setTargetScreen] = useState<string>('home');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [transitionProgress, setTransitionProgress] = useState<number>(0); // 0 to 1
  const animFrameRef = useRef<number | null>(null);

  const navigateScreen = useCallback((screen: string) => {
    if (isTransitioning || screen === activeScreen) return;
    setTargetScreen(screen);
    setIsTransitioning(true);

    const startTime = performance.now();
    const duration = 720; // 720ms total lifecycle
    let swapped = false;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setTransitionProgress(progress);

      // Blind swap at exactly 360ms (50% progress)
      if (progress >= 0.5 && !swapped) {
        setActiveScreen(screen);
        swapped = true;
      }

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(animate);
      } else {
        setIsTransitioning(false);
        setTransitionProgress(0);
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);
  }, [activeScreen, isTransitioning]);

  // 8. Physical Keyboard Escape Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeScreen !== 'home') {
        e.preventDefault();
        navigateScreen('home');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeScreen, navigateScreen]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <CurtainContext.Provider value={{ activeScreen, navigateScreen, isTransitioning }}>
      <div
        className={`w-full min-h-screen transition-all duration-300 ${
          isTransitioning
            ? 'scale-[0.99] contrast-[1.25]'
            : 'scale-100 contrast-100'
        }`}
      >
        {children}
      </div>

      {/* 32-Tile 3D Curtain Overlay */}
      {isTransitioning && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-50 pointer-events-none perspective-curtain grid grid-cols-4 grid-rows-8 w-screen h-screen overflow-hidden"
          style={{ perspective: '1200px' }}
        >
          {Array.from({ length: 32 }).map((_, idx) => {
            const col = idx % COLS;
            const row = Math.floor(idx / COLS);
            const dist = Math.sqrt(
              Math.pow(col - CENTER_COL, 2) + Math.pow(row - CENTER_ROW, 2)
            );
            const normDist = dist / MAX_DIST; // 0 (center) to 1 (outer)

            // Stagger calculation: 220ms stagger window across the 360ms half-life
            // Radial stagger: center tiles lead
            const staggerDelay = normDist * 0.28; // delayed up to ~28% of normalized time

            let rotX = 90;
            let opacity = 0;

            if (transitionProgress < 0.5) {
              // Phase 1 (0 to 360ms): Wipe In from 90deg down to 0deg (blackout)
              const localProgress = Math.max(0, Math.min(1, (transitionProgress - staggerDelay * 0.5) / 0.35));
              rotX = (1 - localProgress) * 90; // 90 -> 0
              opacity = localProgress > 0 ? 1 : 0;
            } else {
              // Phase 2 (360ms to 720ms): Wipe Out from 0deg down to -90deg (peeling away)
              const localProgress = Math.max(0, Math.min(1, (transitionProgress - 0.5 - staggerDelay * 0.5) / 0.35));
              rotX = -localProgress * 90; // 0 -> -90
              opacity = localProgress < 1 ? 1 : 0;
            }

            return (
              <div
                key={idx}
                className="w-full h-full transform-style-3d bg-[#09090b] border-[0.5px] border-neutral-900/60"
                style={{
                  transform: `rotateX(${rotX}deg)`,
                  opacity: opacity,
                  transformOrigin: 'center center',
                  backfaceVisibility: 'hidden',
                  willChange: 'transform, opacity',
                }}
              />
            );
          })}
        </div>
      )}
    </CurtainContext.Provider>
  );
};

export const useCurtain = () => {
  const ctx = useContext(CurtainContext);
  if (!ctx) {
    throw new Error('useCurtain must be used within CurtainProvider');
  }
  return ctx;
};
