import { useEffect, useRef, useState } from 'react';
import { useAnimationStore } from '../store';

const WorkShowcase = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const { setSectionVisibility, markSectionAnimated } = useAnimationStore();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setSectionVisibility('workShowcase', true);
          markSectionAnimated('workShowcase');
        }
      },
      { threshold: 0.2, once: true }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [setSectionVisibility, markSectionAnimated]);

  const highlightText = (text, keywords, colorClass) => {
    const words = text.split(' ');
    return words.map((word, index) => {
      const cleanWord = word.replace(/[.,!]/g, '');
      return keywords.includes(cleanWord) ? (
        <span key={index} className={colorClass}>{word} </span>
      ) : (
        <span key={index}>{word} </span>
      );
    });
  };

  return (
    <section id="portfolios" className="relative z-10 bg-gray-50 py-16 md:py-20 lg:py-24 overflow-x-hidden overflow-y-visible w-full max-w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 w-full">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: isInView ? '0.1s' : '0s' }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-4 relative inline-block">
              MY WORK SHOWCASE
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-1 bg-orange-500 rounded-full"></span>
            </h2>
            <p className="text-lg text-gray-700 mt-6">
              Check out my projects, from experiments to finished creations, there's something for everyone!
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
            {/* Marquee Fantasy Card */}
            <div
              className={`bg-white rounded-xl shadow-lg p-6 flex-1 max-w-full lg:max-w-[48%] transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: isInView ? '0.3s' : '0s' }}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-2 text-center">Marquee Fantasy</h3>
              <p className="text-sm text-gray-600 mb-6 text-center">(Live on Apple & Play Store)</p>

              <div className="bg-yellow-400 border-2 border-black rounded-lg p-4 relative overflow-hidden">
                {/* Left side dots */}
                <div className="absolute left-0 top-0 bottom-0 w-2 flex flex-col items-center justify-center gap-2 z-10">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  ))}
                </div>
                {/* Right side dots */}
                <div className="absolute right-0 top-0 bottom-0 w-2 flex flex-col items-center justify-center gap-2 z-10">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  ))}
                </div>

                <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                  {/* Left Column - Screenshots & Description */}
                  <div className="flex flex-col items-center md:items-start md:w-1/2 lg:w-2/3 p-2">
                    <div className="grid grid-cols-3 gap-2 mb-4 w-full">
                      {[1, 2, 3].map((num) => (
                        <div
                          key={num}
                          className="w-full aspect-[9/16] bg-gray-800 rounded-md shadow-sm flex items-center justify-center"
                        >
                          <span className="text-white text-xs">SS {num}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-800 text-left mb-4 text-sm sm:text-base">
                      {highlightText(
                        "Create leagues, compete, and earn live with real box office numbers! Built with a powerful frontend, game features, and cloud integration. Enjoy a smooth and dynamic experience with both Light and Dark Modes!",
                        ["box", "office", "numbers!", "frontend,", "game", "features,", "cloud", "integration.", "Light", "Dark", "Modes!"],
                        "text-orange-600 font-semibold"
                      )}
                    </p>
                    <div className="flex flex-col items-center w-full">
                      <div className="w-24 h-24 bg-blue-900 border-2 border-black rounded flex items-center justify-center mb-2">
                        <span className="text-yellow-400 text-4xl font-bold">M</span>
                      </div>
                      <p className="text-3xl font-bold text-blue-900 mb-4">MARQUEE</p>
                      <div className="flex gap-4 text-3xl">
                        <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">F</span>
                        </div>
                        <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs">▶</span>
                        </div>
                        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">🍎</span>
                        </div>
                        <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                          <span className="text-white text-xs">🤖</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Screenshots */}
                  <div className="grid grid-cols-2 gap-2 md:w-1/2 lg:w-1/3 p-2">
                    {[4, 5, 6, 7, 8, 9].map((num) => (
                      <div
                        key={num}
                        className="w-full aspect-[9/16] bg-gray-800 rounded-md shadow-sm flex items-center justify-center"
                      >
                        <span className="text-white text-xs">SS {num}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-700 mt-6 text-left">
                I worked as an employee (Freelancer) on the Marquee App, contributing to major complex parts like game functionality, cloud functions, trade functionality and movie...
              </p>
            </div>

            {/* Math Solver Card */}
            <div
              className={`bg-white rounded-xl shadow-lg p-6 flex-1 max-w-full lg:max-w-[48%] transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: isInView ? '0.5s' : '0s' }}
            >
              <div className="flex items-center justify-center mb-2">
                <div className="w-8 h-8 bg-blue-600 rounded mr-2 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">2+2=4</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Math solver - AI homework helper</h3>
              </div>
              <p className="text-sm text-gray-600 mb-6 text-center">(Live on Play Store)</p>

              <div className="bg-yellow-400 border-2 border-black rounded-lg p-4 relative overflow-hidden">
                {/* Left side dots */}
                <div className="absolute left-0 top-0 bottom-0 w-2 flex flex-col items-center justify-center gap-2 z-10">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  ))}
                </div>
                {/* Right side dots */}
                <div className="absolute right-0 top-0 bottom-0 w-2 flex flex-col items-center justify-center gap-2 z-10">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  ))}
                </div>

                <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                  {/* Left Column - AI Features & Screenshots */}
                  <div className="flex flex-col items-center md:items-start md:w-1/2 lg:w-2/5 p-2">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-gray-700 rounded mr-2 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <span className="text-gray-800 font-semibold">ARTIFICIAL</span>
                    </div>
                    <p className="text-xl font-bold text-blue-900 mb-2">AI CHAT BOT APP</p>
                    <ul className="text-gray-800 text-left space-y-1 mb-4 w-full">
                      {['Scan Your Problem', 'Business Content', 'Social Media Content', 'Study & Learning', 'Custom APP'].map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm sm:text-base">
                          <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="grid grid-cols-2 gap-2 w-full">
                      {[1, 2, 3, 4].map((num) => (
                        <div
                          key={num}
                          className="w-full aspect-[9/16] bg-gray-800 rounded-md shadow-sm flex items-center justify-center"
                        >
                          <span className="text-white text-xs">SS {num}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Screenshots */}
                  <div className="grid grid-cols-2 gap-2 md:w-1/2 lg:w-3/5 p-2">
                    {[5, 6, 7, 8].map((num) => (
                      <div
                        key={num}
                        className="w-full aspect-[9/16] bg-gray-800 rounded-md shadow-sm flex items-center justify-center"
                      >
                        <span className="text-white text-xs">SS {num}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-700 mt-6 text-left">
                I worked as a freelancer on Math Solver AI app. I built the frontend and backend from scratch, and added AI features. This app helps students solve math problems by scanning...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;

