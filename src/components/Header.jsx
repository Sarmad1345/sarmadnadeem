import { useState, useEffect, useRef, useCallback } from "react";
import BackgroundEffects from "./BackgroundEffects";
import mineImage from "../assets/mine.png";
import cvPDF from "../assets/sarmad.pdf";
import { throttle } from "../utils/debounce";
import { useUIStore, useNavigationStore, useAnimationStore } from "../store";

const Header = () => {
  const { scrolled, setScrolled, isMenuOpen, toggleMenu, setMenuOpen } =
    useUIStore();
  const { navItems, setActiveSection, scrollToSection } = useNavigationStore();
  const { setSectionVisibility } = useAnimationStore();
  const [isInView, setIsInView] = useState(false);
  const heroRef = useRef(null);
  const menuRef = useRef(null);

  // Optimized scroll handler with throttle
  const handleScroll = useCallback(
    throttle(() => {
      setScrolled(window.scrollY > 50);
    }, 100),
    [setScrolled]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setSectionVisibility("header", true);
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
  }, [setSectionVisibility]);

  // Close menu when pressing Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isMenuOpen) {
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, setMenuOpen]);

  // Close menu when clicking on a nav item
  const handleNavClick = (itemId) => {
    setActiveSection(itemId);
    setMenuOpen(false);

    // Map navigation IDs to section IDs
    const sectionMap = {
      home: "home",
      about: "about",
      skills: "skills",
      services: "services",
      portfolios: "portfolios",
      contact: "contact",
    };

    const sectionId = sectionMap[itemId] || itemId;

    if (sectionId === "home") {
      // Scroll to top for home
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      // Scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80; // Account for fixed navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  return (
    <header
      id="home"
      className="relative min-h-screen w-full max-w-full overflow-x-hidden"
    >
      <BackgroundEffects />
      <div className="absolute inset-0 z-0 will-change-transform overflow-hidden">
        <div className="absolute inset-0 opacity-30 animate-gradientShift bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.3)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.3)_0%,transparent_50%)]" />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 w-full max-w-full overflow-x-hidden ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-indigo-500/30 shadow-lg shadow-indigo-500/20"
            : "bg-black/60 backdrop-blur-lg border-b border-indigo-500/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-4 md:py-5 flex items-center justify-between gap-4 w-full">
          <div
            className="relative group"
            style={{ overflow: "visible", maxWidth: "100%" }}
          >
            <div
              className="absolute -inset-1 bg-linear-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"
              style={{ maxWidth: "calc(100% + 0.5rem)" }}
            ></div>
            <div className="relative bg-black/50 backdrop-blur-sm border border-indigo-500/30 rounded-lg px-4 py-2">
              <span className="text-2xl font-bold bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                MSN
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className="relative text-white/80 hover:text-white transition-colors duration-300 group text-sm lg:text-base font-medium px-1 py-1"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("contact");
              }}
              className="relative group ml-2 lg:ml-4"
              style={{ overflow: "visible", maxWidth: "100%" }}
            >
              <div
                className="absolute -inset-0.5 bg-linear-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"
                style={{ maxWidth: "calc(100% + 0.25rem)" }}
              ></div>
              <div className="relative bg-linear-to-r from-indigo-600 to-purple-600 px-5 lg:px-6 py-2 lg:py-2.5 rounded-lg text-black font-semibold text-sm lg:text-base hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 whitespace-nowrap">
                Contact Me
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            onClick={toggleMenu}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 relative z-[101]"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] transition-opacity duration-300"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Mobile Menu Panel */}
        <div
          ref={menuRef}
          className={`md:hidden fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out z-[95] ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{
            maxWidth: "100vw",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Menu Button - Top Right */}
          <div className="flex justify-end items-center p-6 pb-4">
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-gray-800 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              <span className="text-base">Close Menu</span>
              <svg
                className="w-6 h-6 font-bold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="px-6 py-4">
            {navItems.map((item, index) => (
              <div key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className="block text-gray-800 hover:text-gray-900 transition-colors duration-200 text-lg font-medium py-4"
                >
                  {item.label}
                </a>
                {index < navItems.length - 1 && (
                  <div className="h-px bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Me Button and Social Icons */}
          <div className="px-6 py-4 mt-4">
            <div className="flex items-center gap-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("contact");
                }}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-base"
              >
                Contact Me
              </button>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Sarmad1345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-900 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12a10 10 0 006.838 9.488c.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.704-2.782.604-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.465-1.11-1.465-.907-.62.069-.607.069-.607 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.111-4.555-4.945 0-1.092.39-1.985 1.029-2.685-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.593 1.028 2.685 0 3.842-2.337 4.689-4.565 4.938.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.481A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/sarmadflutterdev123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-900 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-sarmad-nadeem-057749352"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-900 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.983 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9h4v12H3zM9 9h3.839v1.64h.055c.534-1.012 1.84-2.08 3.787-2.08 4.05 0 4.795 2.664 4.795 6.128V21H17v-5.2c0-1.24-.022-2.834-1.727-2.834-1.729 0-1.993 1.352-1.993 2.746V21H9z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Dark Mode Toggle - Bottom Right */}
          <div className="absolute bottom-6 right-6">
            <button
              onClick={() => {
                const { toggleTheme } = useUIStore.getState();
                toggleTheme();
              }}
              className="w-12 h-12 bg-gray-800 hover:bg-gray-900 text-white rounded-lg flex items-center justify-center transition-colors duration-200 shadow-lg"
              aria-label="Toggle dark mode"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div
        ref={heroRef}
        className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen pt-28 md:pt-32 pb-12 md:pb-16 w-full max-w-full overflow-x-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 w-full max-w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div
            className={`flex-1 max-w-2xl space-y-5 md:space-y-6 w-full transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div
              className={`space-y-2 transition-all duration-800 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isInView ? "0.2s" : "0s" }}
            >
              <h1 className="text-xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                I'm{" "}
                <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Muhammad Sarmad Nadeem
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-gradient bg-200%">
                Expert Flutter Developer
              </h2>
            </div>
            <p
              className={`text-base md:text-1xl text-white/80 leading-relaxed max-w-xl mt-4 md:mt-6 transition-all duration-800 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isInView ? "0.4s" : "0s" }}
            >
              I specialize in building high-performance Flutter applications
              with clean architecture, responsive UI, and seamless
              cross-platform functionality. With a focus on scalability and user
              experience, I deliver apps that perform beautifully on every
              device. Let’s transform your idea into a feature-rich mobile app
              that users love.
            </p>
            <a
              href={cvPDF}
              download="Muhammad_Sarmad_Nadeem_CV.pdf"
              className={`relative group mt-6 md:mt-8 inline-block transition-all duration-800 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isInView ? "0.6s" : "0s",
                maxWidth: "100%",
              }}
            >
              <div
                className="absolute -inset-0.5 bg-linear-to-r from-yellow-400 to-yellow-300 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"
                style={{ maxWidth: "calc(100% + 0.25rem)" }}
              ></div>
              <div className="relative bg-linear-to-r from-yellow-400 to-yellow-300 px-6 md:px-8 py-4 rounded-lg text-black font-semibold text-base md:text-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 flex items-center gap-2 hover:scale-105 max-w-full">
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
          <div
            className={`flex-1 flex justify-center md:justify-end mt-12 md:mt-0 w-full max-w-full transition-all duration-1000 ${
              isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{ transitionDelay: isInView ? "0.8s" : "0s" }}
          >
            <div className="relative group w-full max-w-[280px] md:w-72 mx-auto overflow-visible">
              <div
                className="absolute -inset-2 md:-inset-4 bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500 animate-pulse"
                style={{ maxWidth: "calc(100% + 1rem)" }}
              ></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-4 shadow-2xl shadow-indigo-500/20 transition-transform duration-300 group-hover:scale-105 w-full max-w-full">
                <div className="w-full max-w-[280px] md:w-72 h-72 md:h-80 rounded-xl overflow-hidden mx-auto">
                  <img
                    src={mineImage}
                    alt="Muhammad Sarmad Nadeem"
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <div
                className="absolute top-10 -right-2 md:-right-10 w-2 h-2 bg-indigo-400 rounded-full blur-sm animate-pulse hidden md:block"
                style={{ right: "-0.5rem" }}
              ></div>
              <div
                className="absolute bottom-20 -left-2 md:-left-10 w-3 h-3 bg-purple-400 rounded-full blur-sm animate-pulse [animation-delay:1s] hidden md:block"
                style={{ left: "-0.5rem" }}
              ></div>
              <div
                className="absolute top-1/2 -right-4 md:-right-20 w-1.5 h-1.5 bg-indigo-300 rounded-full blur-sm animate-pulse [animation-delay:2s] hidden md:block"
                style={{ right: "-1rem" }}
              ></div>
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
