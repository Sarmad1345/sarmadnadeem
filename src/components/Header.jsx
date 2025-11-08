import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

const Header = () => {
  return (
    <header
      id="home"
      className="relative min-h-screen w-full max-w-full overflow-x-hidden"
    >
      <div className="absolute inset-0 z-0 will-change-transform overflow-hidden">
        <div className="absolute inset-0 opacity-30 animate-gradientShift bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.3)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.3)_0%,transparent_50%)]" />
      </div>

      <Navbar />
      <HeroSection />
    </header>
  );
};

export default Header;
