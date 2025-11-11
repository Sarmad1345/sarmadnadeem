const ServiceCard = ({
  number,
  title,
  description,
  icon,
  secondaryIcon,
  secondaryIconText,
  isInView,
  delay,
}) => {
  return (
    <div
      className={`relative bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-xl border border-indigo-500/30 p-8 md:p-10 rounded-xl shadow-lg shadow-indigo-500/20 flex flex-col items-center text-center transition-all duration-700 hover:border-indigo-400/50 ${
        isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
      style={{ transitionDelay: delay || "0s" }}
    >
      <span className="absolute top-6 right-6 text-4xl font-bold text-yellow-400">
        {number}
      </span>
      <div className="relative w-24 h-24 mb-6 mt-8 mx-auto">
        <div className="absolute inset-0 flex items-center justify-center">
          {icon}
        </div>
        {secondaryIcon && (
          <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 flex items-center justify-center z-10">
            {secondaryIcon}
          </div>
        )}
        {secondaryIconText && (
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-purple-400 z-10 pointer-events-none">
            {secondaryIconText}
          </span>
        )}
      </div>
      <h3 className="text-2xl md:text-1xl font-bold text-white mb-4">{title}</h3>
      <p className="text-lg md:text-lg text-white/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;

