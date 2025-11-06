import { useState, useEffect, useRef } from 'react';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative z-10 bg-black/80 backdrop-blur-xl border-t border-indigo-500/20 border-b border-indigo-500/20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-16 md:py-20 lg:py-24">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 transition-all duration-1000 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`flex flex-col items-center lg:items-start transition-all duration-800 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: isInView ? '0.2s' : '0s' }}
          >
            <div
              className={`text-center lg:text-left mb-8 transition-all duration-600 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isInView ? '0.3s' : '0s' }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                GET IN TOUCH
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto lg:mx-0 mb-6"></div>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Looking to Grow Your Business through App Development? Let's Chat for Tips!
              </p>
            </div>

            <div className="space-y-8 w-full">
              <div
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-600 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isInView ? '0.4s' : '0s' }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-indigo-400 font-semibold text-base md:text-lg mb-1">Call Me (WhatsApp)</p>
                  <a href="https://wa.me/923490043739" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition text-base md:text-lg">
                    03490043739
                  </a>
                </div>
              </div>

              <div
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-600 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isInView ? '0.5s' : '0s' }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-indigo-400 font-semibold text-base md:text-lg mb-1">Mail Me:</p>
                  <a href="mailto:sarmadnadeem3445@gmail.com" className="text-white/80 hover:text-white transition text-base md:text-lg">
                    sarmadnadeem3445@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-800 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: isInView ? '0.6s' : '0s' }}
          >
            <h3
              className={`text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 transition-all duration-600 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isInView ? '0.7s' : '0s' }}
            >
              Ready to Share Your Thoughts? Let's Start!
            </h3>
            <p
              className={`text-white/70 text-base md:text-lg leading-relaxed mb-8 transition-all duration-600 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isInView ? '0.8s' : '0s' }}
            >
              Got an innovative idea for app development, UI/UX design or web app development? Share your thoughts and let's collaborate to turn your vision into reality.
            </p>

            <form
              onSubmit={handleSubmit}
              className={`space-y-6 transition-all duration-600 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isInView ? '0.9s' : '0s' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-indigo-500/30 text-white placeholder-white/40 focus:outline-none focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-500/20 transition"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-indigo-500/30 text-white placeholder-white/40 focus:outline-none focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-500/20 transition"
                  />
                </div>
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="6"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-indigo-500/30 text-white placeholder-white/40 focus:outline-none focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-500/20 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="relative group w-full transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <div className="absolute -inset-0.5 bg-linear-to-r from-yellow-400 to-yellow-300 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-linear-to-r from-yellow-400 to-yellow-300 px-8 py-4 rounded-lg text-black font-semibold text-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 text-center">
                  Send
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

