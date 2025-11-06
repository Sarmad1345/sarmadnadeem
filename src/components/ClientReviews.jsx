import { useEffect, useRef, useState } from 'react';

const ClientReviews = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

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

  const reviews = [
    {
      id: 1,
      name: 'Maquidu',
      rating: 5,
      text: "I am beyond impressed by Muhammad Sarmad Nadeem. His attention to detail, professionalism, and ability to bring my vision to life exceeded all expectations. I only give him a vague concept and he did a great job. Wow 🤩 recommend!!!"
    },
    {
      id: 2,
      name: 'rebeccacharl658',
      rating: 5,
      text: "Amazing services. Muhammad Sarmad Nadeem delivered an exceptional flutter app according to my thoughts & ideas. He understood my needs of design did it perfectly. I will use his services again. I would recommend his services for flutter app development. Great work!!!!"
    },
    {
      id: 3,
      name: 'Natalie Kong',
      rating: 5,
      text: "Working with Muhammad Sarmad Nadeem was an amazing experience! He understood our requirements perfectly and built a smooth, fast, and beautiful Flutter app for our business. Communication was easy, and he delivered everything on time. Highly recommended for anyone looking for a reliable Flutter developer"
    }
  ];

  return (
    <section className="relative z-10 bg-black/90 backdrop-blur-xl py-16 md:py-20 lg:py-24 overflow-hidden border-t border-indigo-500/20 border-b border-indigo-500/20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.15)_0%,transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative">
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              CLIENT <span className="relative inline-block">REVIEWS
                <span className="absolute left-0 bottom-0 h-1 w-full bg-yellow-400 rounded-full transform scale-x-75 origin-left"></span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Read what my satisfied clients have to say about their experiences with me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`relative bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-xl border border-indigo-500/30 p-6 md:p-8 rounded-xl shadow-lg shadow-indigo-500/20 transition-all duration-700 hover:border-indigo-400/50 hover:shadow-xl hover:shadow-indigo-500/30 ${
                  isInView ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8'
                }`}
                style={{ transitionDelay: isInView ? `${0.3 + index * 0.2}s` : '0s' }}
              >
                <span className="absolute top-6 right-6 text-4xl font-bold text-yellow-400">
                  {String(review.id).padStart(2, '0')}.
                </span>
                
                <div className="mt-8 mb-6">
                  <h3 className="text-lg md:text-xl font-semibold text-white text-center mb-3">
                    {review.name}
                  </h3>
                  
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;

