import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="border-t border-neutral-800 bg-neutral-950 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <span className="text-4xl mb-4 block">✈️</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Your Next Adventure is One Click Away
        </h2>
        <p className="text-neutral-400 max-w-xl mx-auto mb-8 leading-relaxed">
          We&lsquo;ve helped over 120,000 travellers find their perfect
          destination. Let us do the same for you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link to={'/services'}>
            <button className="bg-amber-500 hover:bg-amber-400 transition-colors text-black font-semibold px-8 py-3.5 rounded-xl text-sm">
              Browse All Destinations
            </button>
          </Link>
          <a href="https://wa.me/01764078605" target="_blank" rel="noopener noreferrer">
            <button className="border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white font-medium px-8 py-3.5 rounded-xl text-sm transition-all">
              Talk to a Travel Expert
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
