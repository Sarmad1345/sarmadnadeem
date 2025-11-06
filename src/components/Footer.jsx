const Footer = () => {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/Sarmad1345",
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12a10 10 0 006.838 9.488c.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.704-2.782.604-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.465-1.11-1.465-.907-.62.069-.607.069-.607 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.111-4.555-4.945 0-1.092.39-1.985 1.029-2.685-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.593 1.028 2.685 0 3.842-2.337 4.689-4.565 4.938.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.481A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-sarmad-nadeem-057749352",
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M4.983 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9h4v12H3zM9 9h3.839v1.64h.055c.534-1.012 1.84-2.08 3.787-2.08 4.05 0 4.795 2.664 4.795 6.128V21H17v-5.2c0-1.24-.022-2.834-1.727-2.834-1.729 0-1.993 1.352-1.993 2.746V21H9z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/sarmadflutterdev123",
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1DQd1incL5/",
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative z-10 border-t border-indigo-500/20 bg-black/75 backdrop-blur-2xl mb-0">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[820px] h-[820px] rounded-full blur-[120px] opacity-25 bg-linear-to-r from-indigo-600/50 to-purple-600/50"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-10 md:pt-12 lg:pt-14 pb-0 relative">
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
                <p className="text-white/60 text-sm md:text-base font-medium">Email Address</p>
                <a
                  href="mailto:sarmadnadeem3445@gmail.com"
                  className="text-white text-base md:text-lg font-semibold hover:text-yellow-300 transition block"
                >
                  sarmadnadeem3445@gmail.com
                </a>
              </div>
              <div className="space-y-2 md:space-y-2.5">
                <p className="text-white/60 text-sm md:text-base font-medium">Phone Number</p>
                <a
                  href="tel:03490043739"
                  className="text-white text-base md:text-lg font-semibold hover:text-yellow-300 transition block"
                >
                  03490043739
                </a>
              </div>
              <div className="space-y-2 md:space-y-2.5">
                <p className="text-white/60 text-sm md:text-base font-medium">Location</p>
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
          <div className="flex items-center gap-2.5 md:gap-3.5 ml-auto">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="relative group"
              >
                <span className="absolute -inset-2 rounded-lg bg-linear-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-30 blur transition" />
                <span className="relative inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg border border-indigo-500/30 bg-black/40 text-white/80 hover:text-white hover:shadow-lg hover:shadow-indigo-500/30 transition">
                  {s.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-4 md:mt-5 pb-4 md:pb-5 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-xs md:text-sm">
          <p>© {new Date().getFullYear()} Muhammad Sarmad Nadeem. All rights reserved.</p>
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
