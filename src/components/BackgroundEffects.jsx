import { memo } from "react";

const BackgroundEffects = memo(() => {
  const generateShiningDots = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 2,
    }));
  };

  const shiningDots = generateShiningDots(50);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden w-full max-w-full">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl animate-float-orb-1"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-float-orb-2"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-400/12 rounded-full blur-3xl animate-float-orb-3"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-400/12 rounded-full blur-3xl animate-float-orb-4"></div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden w-full max-w-full">
        {shiningDots.map((dot) => {
          const animationDuration = Math.random() * 2 + 3;
          return (
            <div
              key={dot.id}
              className="absolute rounded-full bg-indigo-400/40 animate-shine-dot-float"
              style={{
                left: `${dot.left}%`,
                top: `${dot.top}%`,
                width: `${dot.size}px`,
                height: `${dot.size}px`,
                boxShadow: `0 0 ${dot.size * 2}px rgba(99, 102, 241, 0.4), 0 0 ${dot.size * 4}px rgba(99, 102, 241, 0.2)`,
                animationDelay: `${dot.delay}s`,
                animationDuration: `${animationDuration}s`,
              }}
            />
          );
        })}
      </div>

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden w-full max-w-full">
        {[...Array(30)].map((_, i) => {
          const randomLeft = Math.random() * 100;
          const randomTop = Math.random() * 100;
          const randomSize = Math.random() * 3 + 1;
          const randomDuration = Math.random() * 15 + 10;
          const randomDelay = Math.random() * 5;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-purple-400/30 animate-moving-shine"
              style={{
                left: `${randomLeft}%`,
                top: `${randomTop}%`,
                width: `${randomSize}px`,
                height: `${randomSize}px`,
                boxShadow: `0 0 ${randomSize * 2}px rgba(139, 92, 246, 0.3), 0 0 ${randomSize * 4}px rgba(139, 92, 246, 0.15)`,
                animationDuration: `${randomDuration}s`,
                animationDelay: `${randomDelay}s`,
              }}
            />
          );
        })}
      </div>

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden w-full max-w-full">
        <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-indigo-500/20 to-transparent animate-light-ray-1"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-linear-to-b from-transparent via-purple-500/20 to-transparent animate-light-ray-2"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-linear-to-b from-transparent via-indigo-400/15 to-transparent animate-light-ray-3"></div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden w-full max-w-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/8 rounded-full blur-2xl animate-pulse-glow-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/8 rounded-full blur-2xl animate-pulse-glow-2"></div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden w-full max-w-full">
        {[...Array(20)].map((_, i) => {
          const randomLeft = Math.random() * 100;
          const randomTop = Math.random() * 100;
          const randomDelay = Math.random() * 4;
          const randomDuration = Math.random() * 1.5 + 1;
          return (
            <div
              key={i}
              className="absolute animate-sparkle"
              style={{
                left: `${randomLeft}%`,
                top: `${randomTop}%`,
                animationDelay: `${randomDelay}s`,
                animationDuration: `${randomDuration}s`,
              }}
            >
              <div className="w-1 h-1 bg-yellow-300/40 rounded-full shadow-[0_0_4px_rgba(253,224,71,0.3),0_0_8px_rgba(253,224,71,0.15)]"></div>
            </div>
          );
        })}
      </div>
    </>
  );
});

BackgroundEffects.displayName = "BackgroundEffects";

export default BackgroundEffects;
