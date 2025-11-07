import { useState, useEffect, useRef } from "react";
import mineImage from "../assets/mine.png";
import cvPDF from "../assets/sarmad.pdf";
import SocialIcons from "./SocialIcons";

const HeroSection = () => {
  const [isInView, setIsInView] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const heroRef = useRef(null);
  const texts = useRef(["Expert Flutter Developer", "Flutter Developer"]);

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

  useEffect(() => {
    if (!isInView) return;

    const currentText = texts.current[currentTextIndex];
    let timeoutId;

    if (isTyping) {
      if (displayedText.length < currentText.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        const nextIndex = (currentTextIndex + 1) % texts.current.length;
        setCurrentTextIndex(nextIndex);
        setIsTyping(true);
      }
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [displayedText, isTyping, currentTextIndex, isInView]);

  return (
    <div
      ref={heroRef}
      className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen pt-28 md:pt-32 pb-12 md:pb-16 w-full max-w-full overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 w-full max-w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div
          className={`flex-1 max-w-2xl space-y-5 md:space-y-6 w-full transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className={`space-y-2 transition-all duration-800 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isInView ? "0.2s" : "0s" }}
          >
            <h1 className="text-[62px] md:text-[35px] lg:text-6xl font-bold text-white leading-tight">
              I'm{" "}
              <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Muhammad Sarmad Nadeem
              </span>
            </h1>
            <h2 className="text-[49px] md:text-[35px] lg:text-5xl font-bold bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-gradient bg-200% min-h-[60px] md:min-h-[50px] lg:min-h-[60px]">
              {displayedText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
          <p
            className={`text-base md:text-[16px] text-white/80 leading-relaxed max-w-xl mt-4 md:mt-6 mb-10 transition-all duration-800 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isInView ? "0.4s" : "0s" }}
          >
            I specialize in building high-performance Flutter applications with
            clean architecture, responsive UI, and seamless cross-platform
            functionality. With a focus on scalability and user experience, I
            deliver apps that perform beautifully on every device. Let's
            transform your idea into a feature-rich mobile app that users love.
          </p>
          <div
            className={`mt-6 md:mt-8 flex flex-col md:flex-row md:items-end md:gap-16 lg:gap-20 xl:gap-70 transition-all duration-800 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: isInView ? "0.6s" : "0s",
            }}
          >
            <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-5">
                Find wiht Me
              </h3>
              <div className="flex justify-center md:justify-start m-0 p-0 pb-0">
                <SocialIcons boxed={true} iconSize="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-sm md:text-base text-white/60 mb-5 font-medium m-0">
                Download my curriculum vitae
              </p>
              <div className="flex justify-center md:justify-start m-0 p-0 pb-0">
                <a
                  href={cvPDF}
                  download="Muhammad_Sarmad_Nadeem_CV.pdf"
                  className="relative group inline-block transition-all duration-300 m-0"
                >
                  <div className="absolute -inset-0.5 bg-linear-to-r from-yellow-400 to-yellow-300 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative bg-linear-to-r from-yellow-400 to-yellow-300 px-6 md:px-8 h-9 md:h-10 rounded-lg text-black font-semibold text-base md:text-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 m-0">
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="whitespace-nowrap">Download CV</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex-1 flex justify-center md:justify-end mt-12 md:mt-0 w-full max-w-full transition-all duration-1000 ${
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ transitionDelay: isInView ? "0.8s" : "0s" }}
        >
          <div className="relative group w-full max-w-[280px] md:w-72 mx-auto md:mx-0">
            <div className="absolute -inset-2 md:-inset-4 bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
            <div className="relative bg-black/40 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-4 shadow-2xl shadow-indigo-500/20 transition-transform duration-300 group-hover:scale-105">
              <div className="w-full max-w-[280px] md:w-72 h-72 md:h-80 rounded-xl overflow-hidden mx-auto">
                <img
                  src={mineImage}
                  alt="Muhammad Sarmad Nadeem"
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="absolute top-10 -right-2 md:-right-10 w-2 h-2 bg-indigo-400 rounded-full blur-sm animate-pulse hidden md:block"></div>
            <div className="absolute bottom-20 -left-2 md:-left-10 w-3 h-3 bg-purple-400 rounded-full blur-sm animate-pulse [animation-delay:1s] hidden md:block"></div>
            <div className="absolute top-1/2 -right-4 md:-right-20 w-1.5 h-1.5 bg-indigo-300 rounded-full blur-sm animate-pulse [animation-delay:2s] hidden md:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
