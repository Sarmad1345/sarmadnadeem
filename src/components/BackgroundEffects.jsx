import { useEffect, useRef } from 'react';

const BackgroundEffects = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particleCount = 30;
    particlesRef.current = [];

    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#6366f1';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-60"
      />
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(5)].map((_, i) => {
          const randomLeft = Math.random() * 100;
          const randomTop = Math.random() * 100;
          const randomDuration = 15 + Math.random() * 10;
          const randomDelay = Math.random() * 5;
          return (
            <div
              key={i}
              className="absolute text-xs font-mono text-indigo-400/20 animate-floatCode"
              style={{
                left: `${randomLeft}%`,
                top: `${randomTop}%`,
                animationDuration: `${randomDuration}s`,
                animationDelay: `${randomDelay}s`,
              }}
            >
              {['const', 'function', 'export', 'import', 'return', 'async', 'await', 'try'][i % 8]}(
            </div>
          );
        })}
      </div>
      {/* Light beams */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute w-px h-full opacity-20 left-[20%] animate-pulseBeam bg-linear-to-b from-transparent via-indigo-500 to-transparent shadow-[0_0_20px_#6366f1]"
        />
        <div
          className="absolute w-px h-full opacity-20 right-[25%] animate-pulseBeam bg-linear-to-b from-transparent via-purple-500 to-transparent shadow-[0_0_20px_#8b5cf6] [animation-duration:4s] [animation-delay:1s]"
        />
      </div>
    </>
  );
};

export default BackgroundEffects;

