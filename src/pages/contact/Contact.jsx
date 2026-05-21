import { useContext } from "react";
import { AuthProvider } from "../../Context/UserContext";
import { toast } from "react-toastify";

const Contact = () => {
  const { navControl } = useContext(AuthProvider);
    const handleSendMessage = (e) => {
      e.preventDefault()
        toast.success("message send successfully");
        e.target.reset()
  };
  return (
    <div className="bg-black/50 min-h-screen pb-5">
      <div className={`relative w-full h-[16rem] md:h-[20rem] bgImage mb-5 `}>
        <div
          className={`absolute top-1/4 w-full ${
            navControl ? "transition-style1  " : "transition-style2 "
          } font-semibold text-center text-white`}
        >
          <span className="text-4xl md:text-6xl block">Contact Us</span>
          <span className="text-xl md:text-2xl">
            Get in touch with Adventa for your next adventure
          </span>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-white text-2xl font-semibold mb-6">
              Get in Touch
            </h2>

            <div className="mb-6">
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-300">info@adventa.com</p>
            </div>

            <div className="mb-6">
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-gray-300">
                123 Travel Lane, Adventure City, AC 12345
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-4" onSubmit={handleSendMessage}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-black/70 text-white placeholder-gray-400 rounded border border-gray-600 focus:outline-none focus:border-gray-400"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-black/70 text-white placeholder-gray-400 rounded border border-gray-600 focus:outline-none focus:border-gray-400"
                required
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 bg-black/70 text-white placeholder-gray-400 rounded border border-gray-600 focus:outline-none focus:border-gray-400"
                required
              ></textarea>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
