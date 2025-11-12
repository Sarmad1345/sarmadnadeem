import { useEffect, useRef } from "react";
import { throttle } from "../utils/debounce";
import { useUIStore, useNavigationStore } from "../store";

const Navbar = () => {
  const { scrolled, setScrolled } = useUIStore();
  const { navItems, setActiveSection } = useNavigationStore();
  const isManualNavRef = useRef(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrolled(window.scrollY > 50);
    }, 100);
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrolled]);

  // Handle initial hash on page load and browser back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      // Skip if this was triggered by our manual navigation
      if (isManualNavRef.current) {
        isManualNavRef.current = false;
        return;
      }

      const hash = window.location.hash.slice(1); // Remove the '#' symbol
      if (hash) {
        const sectionId = hash === "home" ? "home" : hash;
        setActiveSection(sectionId);
        
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const navbarHeight = 80;
            const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: Math.max(0, elementTop - navbarHeight),
              behavior: "smooth",
            });
          }
        }, 100);
      } else {
        // No hash means we're at home
        setActiveSection("home");
      }
    };

    // Handle initial load
    handleHashChange();

    // Handle browser back/forward navigation
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [setActiveSection]);

  const handleNavClick = (itemId) => {
    setActiveSection(itemId);
    const sectionId = itemId === "home" ? "home" : itemId;

    // Mark as manual navigation to prevent hashchange handler from interfering
    isManualNavRef.current = true;

    // Update URL hash - this will trigger hashchange event
    if (sectionId === "home") {
      // For home, remove hash
      window.location.hash = "";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Update hash - this triggers hashchange, but we've marked it as manual
      window.location.hash = sectionId;
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 80;
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: Math.max(0, elementTop - navbarHeight),
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 w-full max-w-full overflow-x-hidden ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-indigo-500/30 shadow-lg shadow-indigo-500/20"
          : "bg-black/60 backdrop-blur-lg border-b border-indigo-500/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-4 md:py-5 flex items-center justify-between gap-4 w-full">
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
          >
            <div className="absolute -inset-0.5 bg-linear-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-linear-to-r from-indigo-600 to-purple-600 px-5 lg:px-6 py-2 lg:py-2.5 rounded-lg text-black font-semibold text-sm lg:text-base hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 whitespace-nowrap">
              Contact Me
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

