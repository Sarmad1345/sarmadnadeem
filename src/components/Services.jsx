import { useEffect, useRef, useState } from 'react';

const Services = () => {
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
    <section className="relative z-10 bg-black py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`text-center mb-12 md:mb-16 transition-all duration-600 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: isInView ? '0.1s' : '0s' }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              SERVICES FIT <span className="relative inline-block">YOUR NEEDS
                <span className="absolute left-0 bottom-0 h-1 w-full bg-yellow-400 rounded-full transform scale-x-75 origin-left"></span>
              </span> PERFECTLY
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Discover a range of services designed to meet your unique needs. From app development
              and maintenance to scalability, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div
              className={`relative bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-xl border border-indigo-500/30 p-8 md:p-10 rounded-xl shadow-lg shadow-indigo-500/20 flex flex-col items-center text-center transition-all duration-700 hover:border-indigo-400/50 ${
                isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: isInView ? '0.3s' : '0s' }}
            >
              <span className="absolute top-6 right-6 text-4xl font-bold text-yellow-400">01.</span>
              <div className="relative w-24 h-24 flex items-center justify-center mb-6 mt-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16 text-indigo-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0h-3.375m0 0a3 3 0 01-.879-.294 3 3 0 00-3.375 0c-.879.294-1.75.294-2.621 0a3 3 0 00-3.375 0 3 3 0 01-.879.294m12 0V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-purple-400 absolute bottom-4 right-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5-10.5L1.5 12l5.25 5.25m7.5-10.5h-3"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Flutter Development
              </h3>
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                Transforming your ideas into seamless mobile experiences through innovative app development with Flutter
              </p>
            </div>

            <div
              className={`relative bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-xl border border-indigo-500/30 p-8 md:p-10 rounded-xl shadow-lg shadow-indigo-500/20 flex flex-col items-center text-center transition-all duration-700 hover:border-indigo-400/50 ${
                isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: isInView ? '0.5s' : '0s' }}
            >
              <span className="absolute top-6 right-6 text-4xl font-bold text-yellow-400">02.</span>
              <div className="relative w-24 h-24 flex items-center justify-center mb-6 mt-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16 text-indigo-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75A2.25 2.25 0 0015.75 1.5H13.5m-3 0V3.75m3-2.25V3.75M3.75 6.75h16.5M3.75 10.5h16.5m-16.5 3.75h16.5M3.75 18h16.5"
                  />
                </svg>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-purple-400">
                  UI UX
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Flutter UI Development from Figma Design
              </h3>
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                Transform your Figma design into a responsive and functional Flutter UI. Clean architecture, optimized performance, and design fidelity guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
