import { useEffect, useRef, useState } from "react";
import cvPDF from "../assets/sarmad.pdf";
import { useAnimationStore } from "../store";

const AboutMe = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const { setSectionVisibility, markSectionAnimated } = useAnimationStore();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setSectionVisibility("aboutMe", true);
          markSectionAnimated("aboutMe");
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
  }, [setSectionVisibility, markSectionAnimated]);

  return (
    <section
      id="about"
      className="relative z-10 bg-black/90 backdrop-blur-xl py-16 md:py-20 lg:py-10 overflow-x-hidden overflow-y-visible border-t border-indigo-500/20 border-b border-indigo-500/20 w-full max-w-full"
    >
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.15)_0%,transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative w-full">
        <div
          ref={ref}
          className={`max-w-4xl transition-all duration-1000 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`space-y-6 md:space-y-8 transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isInView ? "0.2s" : "0s" }}
          >
            <div
              className={`space-y-3 transition-all duration-600 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isInView ? "0.3s" : "0s" }}
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight">
                ABOUT ME
              </h3>
            </div>

            <p
              className={`text-base md:text-lg text-white/80 font-medium leading-relaxed transition-all duration-600 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isInView ? "0.4s" : "0s" }}
            >
              Meet the Flutter developer turning ideas into seamless,
              high-performing apps.
            </p>

            <p
              className={`text-sm md:text-base text-white/70 leading-relaxed transition-all duration-600 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isInView ? "0.5s" : "0s" }}
            >
              I'm a professional Flutter developer dedicated to helping startups
              and businesses grow through powerful cross-platform mobile app
              development. With years of experience crafting high-performance
              Flutter applications for Android, iOS, and Web,My focus is on
              creating fast, reliable, and beautifully designed apps for
              Android, iOS, and the web—all from a single codebase. Every
              project I take on is guided by clean architecture, responsive
              design, and performance that feels effortless.
            </p>

            <p
              className={`text-sm md:text-base text-white/70 leading-relaxed transition-all duration-600 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isInView ? "0.6s" : "0s" }}
            >
              With a focus on innovation and user experience, I create modern,
              high-performing Flutter applications that help businesses grow.
              I'm passionate about turning ideas into seamless digital
              experiences that deliver real results. Let's collaborate to bring
              your vision to life and take your business to the next level.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-600 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isInView ? "0.7s" : "0s" }}
            >
              <a
                href="#contact"
                className="relative group transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <div className="absolute -inset-0.5 bg-yellow-400 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-yellow-400 px-8 py-4 rounded-lg text-black font-bold text-lg uppercase tracking-wide hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 text-center">
                  Hire Me Now
                </div>
              </a>

              <a
                href={cvPDF}
                download="Muhammad_Sarmad_Nadeem_CV.pdf"
                className="relative group transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <div className="absolute -inset-0.5 bg-linear-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-linear-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg text-white font-bold text-lg uppercase tracking-wide hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 text-center">
                  View Resume
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
