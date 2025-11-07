import BackgroundEffects from "./BackgroundEffects";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

const Header = () => {
  return (
    <header
      id="home"
      className="relative min-h-screen w-full max-w-full overflow-x-hidden"
    >
      <BackgroundEffects />
      <div className="absolute inset-0 z-0 will-change-transform overflow-hidden">
        <div className="absolute inset-0 opacity-30 animate-gradientShift bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.3)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.3)_0%,transparent_50%)]" />
      </div>

      <Navbar />
      <HeroSection />
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-indigo-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-indigo-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
