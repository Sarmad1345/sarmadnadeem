import { useState, useEffect, useRef } from 'react';
import BackgroundEffects from './BackgroundEffects';
import mineImage from '../assets/mine.png';
import cvPDF from '../assets/sarmad.pdf';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2, once: true }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const navItems = ['Home', 'Experience', 'Skills', 'Process', 'Portfolios', 'Contact'];

  return (
    <header className="relative min-h-screen w-full overflow-x-hidden">
      <BackgroundEffects />
      <div className="absolute inset-0 z-0 will-change-transform">
        <div className="absolute inset-0 opacity-30 animate-gradientShift bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.3)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.3)_0%,transparent_50%)]" />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-indigo-500/30 shadow-lg shadow-indigo-500/20'
            : 'bg-black/60 backdrop-blur-lg border-b border-indigo-500/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-4 md:py-5 flex items-center justify-between gap-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-black/50 backdrop-blur-sm border border-indigo-500/30 rounded-lg px-4 py-2">
              <span className="text-2xl font-bold bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                MSN
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-white/80 hover:text-white transition-colors duration-300 group text-sm lg:text-base font-medium px-1 py-1"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button className="relative group ml-2 lg:ml-4">
              <div className="absolute -inset-0.5 bg-linear-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-linear-to-r from-indigo-600 to-purple-600 px-5 lg:px-6 py-2 lg:py-2.5 rounded-lg text-black font-semibold text-sm lg:text-base hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 whitespace-nowrap">
                Contact Me
              </div>
            </button>
          </div>
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      <div ref={heroRef} className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div
            className={`flex-1 max-w-2xl space-y-5 md:space-y-6 w-full transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div
              className={`space-y-2 transition-all duration-800 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isInView ? '0.2s' : '0s' }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                I'm <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Muhammad Sarmad Nadeem</span>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-gradient bg-200%">
                Expert Flutter Developer
              </h2>
            </div>
            <p
              className={`text-base md:text-lg text-white/80 leading-relaxed max-w-xl mt-4 md:mt-6 transition-all duration-800 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isInView ? '0.4s' : '0s' }}
            >
              I specialize in building high performance Flutter apps with clean architecture, responsive UI, and seamless cross platform functionality. Let's transform your idea into a feature rich mobile app that users love.
            </p>
            <a
              href={cvPDF}
              download="Muhammad_Sarmad_Nadeem_CV.pdf"
              className={`relative group mt-6 md:mt-8 inline-block transition-all duration-800 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isInView ? '0.6s' : '0s' }}
            >
              <div className="absolute -inset-0.5 bg-linear-to-r from-yellow-400 to-yellow-300 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-linear-to-r from-yellow-400 to-yellow-300 px-8 py-4 rounded-lg text-black font-semibold text-base md:text-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 flex items-center gap-2 hover:scale-105">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </div>
            </a>
          </div>
          <div
            className={`flex-1 flex justify-center md:justify-end mt-12 md:mt-0 w-full transition-all duration-1000 ${
              isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{ transitionDelay: isInView ? '0.8s' : '0s' }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-4 shadow-2xl shadow-indigo-500/20 transition-transform duration-300 group-hover:scale-105">
                <div className="w-full max-w-[280px] md:w-72 h-72 md:h-80 rounded-xl overflow-hidden mx-auto">
                  <img 
                    src={mineImage} 
                    alt="Muhammad Sarmad Nadeem" 
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="absolute top-10 -right-10 w-2 h-2 bg-indigo-400 rounded-full blur-sm animate-pulse hidden md:block"></div>
              <div className="absolute bottom-20 -left-10 w-3 h-3 bg-purple-400 rounded-full blur-sm animate-pulse [animation-delay:1s] hidden md:block"></div>
              <div className="absolute top-1/2 -right-20 w-1.5 h-1.5 bg-indigo-300 rounded-full blur-sm animate-pulse [animation-delay:2s] hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-indigo-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-indigo-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;