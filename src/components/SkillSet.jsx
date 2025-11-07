import { useEffect, useRef, useState } from 'react';
import { useAnimationStore } from '../store';

const SkillSet = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const { setSectionVisibility, markSectionAnimated } = useAnimationStore();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setSectionVisibility('skillSet', true);
          markSectionAnimated('skillSet');
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

  const skills = [
    {
      id: 1,
      title: 'Flutter UI',
      details: 'Responsive Design, Pixel-Perfect UI, Multiple Theme Support',
      progress: 80
    },
    {
      id: 2,
      title: 'API Integration',
      details: 'REST/RESTful, WebSocket, Multipart Form Data, API Testing',
      progress: 80
    },
    {
      id: 3,
      title: 'State Management',
      details: 'Riverpod, Provider, GetX',
      progress: 70
    },
    {
      id: 4,
      title: 'Firebase Integration',
      details: 'Firestore, Messaging, Functions, Storage, Authentication',
      progress: 70
    },
    {
      id: 5,
      title: 'Database Management',
      details: 'Scalable Database Solutions (Optimization, Data Structuring etc)',
      progress: 70
    },
    {
      id: 6,
      title: 'Version Control',
      details: 'Proficient in Git & GitHub (Version Control, Branching, Merging etc)',
      progress: 80
    }
  ];

  return (
    <section id="skills" className="relative z-10 bg-black/90 backdrop-blur-xl py-16 md:py-20 lg:py-24 overflow-x-hidden overflow-y-visible border-t border-indigo-500/20 border-b border-indigo-500/20 w-full max-w-full">
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.15)_0%,transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative w-full">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`text-center mb-12 md:mb-16 transition-all duration-600 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: isInView ? '0.1s' : '0s' }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              MY SKILL SET
            </h2>
            <div className="flex flex-col items-center gap-1 mb-6">
              <div className="w-16 h-1 bg-yellow-400 rounded-full"></div>
              <div className="w-24 h-0.5 bg-indigo-400 rounded-full"></div>
            </div>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Expertise & Proficiency: Flutter Development and UI/UX Design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {skills.map((skill, index) => (
              <div
                key={skill.id}
                className={`transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isInView ? `${0.3 + index * 0.1}s` : '0s' }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-base md:text-lg text-white/70 mb-4 leading-relaxed">
                  {skill.details}
                </p>
                <div className="relative w-full h-3 bg-gray-700/50 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-linear-to-r from-yellow-400 to-yellow-300 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isInView ? `${skill.progress}%` : '0%',
                      transitionDelay: isInView ? `${0.5 + index * 0.1}s` : '0s'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSet;

