import SocialIcons from "./SocialIcons";

const Footer = () => {

  return (
    <footer className="relative z-10 border-t border-indigo-500/20 bg-black/75 backdrop-blur-2xl mb-0 w-full max-w-full overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[820px] h-[820px] rounded-full blur-[120px] opacity-25 bg-linear-to-r from-indigo-600/50 to-purple-600/50 max-w-[90vw]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-10 md:pt-12 lg:pt-14 pb-0 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-6 w-1 bg-yellow-400 rounded-sm" />
              <h3 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
                GET IN TOUCH
              </h3>
            </div>
            <div className="mt-8 md:mt-10 space-y-6 md:space-y-7">
              <div className="space-y-2 md:space-y-2.5">
                <p className="text-white/60 text-sm md:text-base font-medium">
                  Email Address
                </p>
                <a
                  href="mailto:sarmadnadeem3445@gmail.com"
                  className="text-white text-base md:text-lg font-semibold hover:text-yellow-300 transition block"
                >
                  sarmadnadeem3445@gmail.com
                </a>
              </div>
              <div className="space-y-2 md:space-y-2.5">
                <p className="text-white/60 text-sm md:text-base font-medium">
                  Phone Number
                </p>
                <a
                  href="tel:03490043739"
                  className="text-white text-base md:text-lg font-semibold hover:text-yellow-300 transition block"
                >
                  03490043739
                </a>
              </div>
              <div className="space-y-2 md:space-y-2.5">
                <p className="text-white/60 text-sm md:text-base font-medium">
                  Location
                </p>
                <p className="text-white text-base md:text-lg font-semibold">
                  Okara, Punjab, Pakistan
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="h-6 w-1 bg-yellow-400 rounded-sm" />
              <h3 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
                ABOUT ME
              </h3>
            </div>
            <div className="mt-8 md:mt-10 text-white/80 text-base leading-7 md:text-lg md:leading-8 space-y-5 md:space-y-6">
              <p>
                I'm a passionate Flutter developer ready to assist you in
                growing and expanding your business through app development.
                With expertise in Flutter, I create high-quality, user-friendly
                applications tailored to your needs.
              </p>
              <p>
                Beyond Flutter, I excel in UI/UX design, specializing in
                immersive and visually appealing interfaces that exceed client
                expectations. My focus is always on enhancing user experience
                and engagement.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-12 lg:mt-14 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="mt-5 md:mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-indigo-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-black/50 backdrop-blur-sm border border-indigo-500/30 rounded-xl px-5 py-2.5">
              <span className="text-2xl md:text-3xl font-semibold tracking-wide bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                MSN
              </span>
            </div>
          </div>
          <div className="ml-auto">
            <SocialIcons 
              className=""
              iconSize="w-6 h-6 md:w-7 md:h-7"
              variant="default"
              boxed={true}
            />
          </div>
        </div>
        <div className="mt-4 md:mt-5 pb-4 md:pb-5 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-xs md:text-sm">
          <p>
            © {new Date().getFullYear()} Muhammad Sarmad Nadeem. All rights
            reserved.
          </p>
          <div className="flex items-center gap-3 md:gap-4">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <span className="opacity-30">•</span>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </div>
      <a
        href="#home"
        className="fixed z-20 bottom-6 right-6 md:bottom-8 md:right-8 group"
      >
        <span className="absolute -inset-2 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 opacity-30 blur group-hover:opacity-50 transition"></span>
        <span className="relative inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full border border-indigo-500/40 bg-black/60 text-white hover:text-yellow-300 shadow-lg shadow-indigo-500/20">
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </span>
      </a>
    </footer>
  );
};

export default Footer;
