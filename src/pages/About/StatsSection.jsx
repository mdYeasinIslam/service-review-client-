import { FaAward, FaGlobeAmericas, FaMapMarkerAlt, FaUsers } from "react-icons/fa";

const StatsSection = () => {
  return (
    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-10 md:mb-20">
      {[
        { icon: FaMapMarkerAlt, label: "Destinations", value: "50+" },
        { icon: FaUsers, label: "Happy Travelers", value: "10K+" },
        { icon: FaAward, label: "Years Experience", value: "15+" },
        { icon: FaGlobeAmericas, label: "Satisfaction Rate", value: "100%" },
      ].map(({ icon: Icon, label, value }, idx) => (
        <div
          key={idx}
          className="bg-black p-6 rounded-lg shadow-md text-center"
        >
          <Icon className="text-blue-600 text-3xl mx-auto mb-3" />
          <h3 className="text-2xl font-bold text-white">{value}</h3>
          <p className="text-gray-300">{label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
