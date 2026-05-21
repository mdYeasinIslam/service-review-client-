import { useContext } from "react";
import {
    FaGlobeAmericas
} from "react-icons/fa";
import { AuthProvider } from "../../Context/UserContext";
import StatsSection from "./StatsSection";

const AboutPage = () => {
  const { navControl } = useContext(AuthProvider);
return (
    <div className="min-h-screen bg-black/50">
        {/* Header */}
        <div className="relative w-full h-[16rem] md:h-[20rem] bgImage">
            <div
                className={`absolute top-28 w-full font-semibold text-center text-white ${
                    navControl ? "transition-style1" : "transition-style2"
                }`}
            >
                <span className="text-4xl md:text-6xl block">About Us</span>
                <span className="text-xl md:text-2xl">Enjoy Our Services</span>
            </div>
        </div>

        <div className="container mx-auto py-10">
            {/* Mission Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-10 md:mb-20">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                    <p className="text-white/80 leading-relaxed mb-4">
                        At Adventa, we believe travel is more than just visiting places—it&apos;s about creating unforgettable memories and connecting with the world. Our mission is to make travel accessible, affordable, and extraordinary for everyone.
                    </p>
                    <p className="text-white/80 leading-relaxed">
                        We curate unique experiences, from hidden gems to iconic destinations, ensuring every journey is perfectly tailored to your dreams.
                    </p>
                </div>
                <div className="bg-black h-64 rounded-lg flex items-center justify-center">
                    <FaGlobeAmericas className="text-white text-6xl" />
                </div>
            </div>

            {/* Stats Section */}
            <StatsSection/>

            {/* Core Values */}
            <div>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    Our Core Values
                </h2>
                <div className="grid md:grid-cols-3 gap-4 md:gap-8">
                    {[
                        { title: "Safety First", desc: "Your safety and security are our top priorities on every journey." },
                        { title: "Authentic Experiences", desc: "We connect you with real cultures and genuine local experiences." },
                        { title: "Sustainability", desc: "Travel responsibly while preserving destinations for future generations." },
                    ].map(({ title, desc }, idx) => (
                        <div key={idx} className="bg-black p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                            <p className="text-gray-200">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);
};

export default AboutPage;
