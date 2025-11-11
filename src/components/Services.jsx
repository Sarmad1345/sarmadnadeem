import { useEffect, useRef, useState } from "react";
import { useAnimationStore } from "../store";
import ServiceCard from "../shared/components/ServiceCard";

const Services = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const { setSectionVisibility, markSectionAnimated } = useAnimationStore();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setSectionVisibility("services", true);
          markSectionAnimated("services");
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
      id="services"
      className="relative z-10 bg-black py-10 md:py-20 lg:py-10 overflow-x-hidden w-full"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div
          ref={ref}
          className={`text-center mb-12 md:mb-16 transition-all duration-600 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isInView ? "0.1s" : "0s" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            SERVICES FIT YOUR NEEDS PERFECTLY
          </h2>
          <div className="relative flex justify-center md:mb-6">
            <span className="h-1 w-32 bg-yellow-400 rounded-full transform scale-x-70"></span>
          </div>
          <p className="text-lg md:text-2xl text-white/70 max-w-xl mx-auto">
            Discover a range of services designed to meet your unique needs.
            From app development and maintenance to scalability, we've got you
            covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <ServiceCard
            number="01."
            title="Flutter Development"
            description="Turning your ideas into seamless, high-performance mobile apps with innovative Flutter development."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16 text-indigo-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0h-3.375m0 0a3 3 0 01-.879-.294 3 3 0 00-3.375 0c-.879.294-1.75.294-2.621 0a3 3 0 00-3.375 0 3 3 0 01-.879.294m12 0V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25"
                />
              </svg>
            }
            secondaryIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8 text-purple-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5-10.5L1.5 12l5.25 5.25m7.5-10.5h-3"
                />
              </svg>
            }
            isInView={isInView}
            delay="0.3s"
          />

          <ServiceCard
            number="02."
            title="Flutter UI Development from Figma Designs"
            description="Transform your Figma design into a pixel-perfect, responsive Flutter UI with clean architecture, smooth performance, and accurate design built for speed and scalability."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16 text-indigo-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75A2.25 2.25 0 0015.75 1.5H13.5m-3 0V3.75m3-2.25V3.75M3.75 6.75h16.5M3.75 10.5h16.5m-16.5 3.75h16.5M3.75 18h16.5"
                />
              </svg>
            }
            secondaryIconText="UI UX"
            isInView={isInView}
            delay="0.5s"
          />

          <ServiceCard
            number="03."
            title="Web Development"
            description="Buildingw modern, responsive, and high-performance web applications using cutting-edge technologies. From frontend to backend, I deliver scalable solutions that drive business growth."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16 text-indigo-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.944 11.944 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            }
            secondaryIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8 text-purple-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                />
              </svg>
            }
            isInView={isInView}
            delay="0.7s"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
