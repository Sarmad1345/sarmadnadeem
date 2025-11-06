import { useEffect, useRef, useState } from 'react';
import mineImage from '../assets/mine.png';
import cvPDF from '../assets/sarmad.pdf';

const AboutMe = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3, once: true }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className="relative z-10 bg-black/90 backdrop-blur-xl py-16 md:py-20 lg:py-24 overflow-hidden border-t border-indigo-500/20 border-b border-indigo-500/20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.15)_0%,transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`flex justify-center lg:justify-start transition-all duration-800 ${
              isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{ transitionDelay: isInView ? '0.1s' : '0s' }}
          >
            <div className="relative w-full max-w-md">
              <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-sm border border-indigo-500/30 p-3 md:p-4 rounded-lg shadow-2xl shadow-indigo-500/20">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-lg overflow-hidden aspect-[3/4] relative shadow-lg">
                  <img
                    src={mineImage}
                    alt="Muhammad Sarmad Nadeem"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`space-y-6 md:space-y-8 transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: isInView ? '0.2s' : '0s' }}
          >
            <div
              className={`space-y-3 transition-all duration-600 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isInView ? '0.3s' : '0s' }}
            >
              <div className="w-12 h-0.5 bg-yellow-400"></div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">
                ABOUT ME
              </h2>
            </div>

            <p
              className={`text-lg md:text-xl text-white/80 font-medium leading-relaxed transition-all duration-600 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isInView ? '0.4s' : '0s' }}
            >
              Meet the Flutter Developer behind the Screen. Building apps with passion and precision.
            </p>

            <p
              className={`text-base md:text-lg text-white/70 leading-relaxed transition-all duration-600 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isInView ? '0.5s' : '0s' }}
            >
              I'm a passionate Flutter developer dedicated to helping businesses grow through powerful mobile app development. I specialize in building high performance, cross platform Flutter applications for Android, iOS and Web Apps. My focus is on clean architecture, responsive layouts, and seamless performance. I deliver scalable and feature rich apps to match your business needs. I bring expertise in custom Flutter app development to bring your vision to life.
            </p>

            <p
              className={`text-base md:text-lg text-white/70 leading-relaxed transition-all duration-600 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isInView ? '0.6s' : '0s' }}
            >
              I'm driven by challenges and enjoy developing innovative solutions. My goal is to understand your vision and transform it into a digital reality. Let's work together to take your business to new heights in the digital world!
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-600 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isInView ? '0.7s' : '0s' }}
            >
              <a
                href="#contact"
                className="relative group transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <div className="absolute -inset-0.5 bg-yellow-400 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-yellow-400 px-8 py-4 rounded-lg text-black font-bold text-lg uppercase tracking-wide hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 text-center">
                  Hire Me Now
                </div>
              </a>

              <a
                href={cvPDF}
                download="Muhammad_Sarmad_Nadeem_CV.pdf"
                className="relative group transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <div className="absolute -inset-0.5 bg-linear-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-linear-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg text-white font-bold text-lg uppercase tracking-wide hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 text-center">
                  View Resume
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
