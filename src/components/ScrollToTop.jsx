import { useState, useEffect } from "react";
import { throttle } from "../utils/debounce";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      // Get the about section element
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        // Show button when user has scrolled to or past the about section
        // Check if the top of about section is visible or above the viewport
        const aboutSectionTop = aboutSection.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of viewport
        
        setIsVisible(scrollPosition >= aboutSectionTop);
      } else {
        // Fallback: show after scrolling 800px (approximately after home section)
        setIsVisible(window.scrollY > 800);
      }
    }, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // Update hash to home
    window.history.pushState(null, "", "#");
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[99] transition-all duration-300 ease-in-out ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-2 bg-linear-to-r from-indigo-600 to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition duration-300 animate-pulse"></div>
        
        {/* Button */}
        <div className="relative w-12 h-12 md:w-14 md:h-14 bg-linear-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/70 transition-all duration-300 group-hover:scale-110 active:scale-95">
          {/* Arrow icon */}
          <svg
            className="w-6 h-6 md:w-7 md:h-7 text-white transform -translate-y-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default ScrollToTop;

