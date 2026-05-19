import { useContext } from "react";
import { AuthProvider } from "../../Context/UserContext";
import "./Blog.css";
import { toast } from "react-toastify";
import FAQSection from "./FAQ";
const Blog = () => {
  const { navControl } = useContext(AuthProvider);
  const handleSubscribeFn = () => {
    toast.success("Subscribe completed Successfully");
  };
  return (
    <div className="">
      <div className={`relative w-full h-[16rem] md:h-[20rem] bgImage mb-10`}>
        <div
          className={`absolute font-[cursive]  top-28 w-full ${
            navControl ? "transition-style1  " : "transition-style2 "
          } font-semibold text-center text-white`}
        >
          <span className="text-2xl md:text-5xl block mb-2 font-[800]">
            Blog
          </span>
          <span className="text-xl md:text-2xl ">Enjoy Our Service</span>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Newsletter */}
          <div className="bg-neutral-950 border border-amber-800/40 rounded-2xl p-6">
            <div className="text-2xl mb-3">📬</div>
            <h3 className="text-white font-semibold text-base mb-1">
              Get Travel Stories Weekly
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              No spam. Just one well-written story from somewhere in the world,
              every Friday.
            </p>

            <form action="" onSubmit={handleSubscribeFn}>
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="w-full bg-neutral-900 border border-neutral-700 text-white text-sm placeholder-neutral-500 rounded-lg px-4 py-2.5 mb-3 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 transition-colors text-black font-semibold text-sm py-2.5 rounded-lg"
              >
                Subscribe Free
              </button>
            </form>
          </div>
          {/* Promo Banner */}
          <div className="bg-amber-500/5 border border-amber-700/40 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">🗺️</div>
            <h3 className="text-white font-semibold text-sm mb-2">
              Ready to Go?
            </h3>
            <p className="text-neutral-400 text-xs leading-relaxed mb-4">
              Let us plan your next adventure — personalised itineraries from
              our travel experts.
            </p>
            <button className="w-full bg-amber-500 hover:bg-amber-400 transition-colors text-black font-semibold text-xs py-2.5 rounded-lg">
              Start Planning →
            </button>
          </div>
        </div>
        {/* faq */}
        <FAQSection />
      </div>
    </div>
  );
};

export default Blog;
