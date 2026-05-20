import Banner from "./Banner/Banner";
import CustomServices from "./Display-services/CustomServices";
import AdditionalPacks from "./ExtraPackage/AdditionalPacks";
import "./Home.css";
import TouristServices from "./TouristService/TouristServices";
const Home = () => {
  return (
    <div
      className="bg-black/50 text-white "
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <Banner />
      {/* Tourist Services */}
      <TouristServices />
      {/* Customize Services */}
      <div className="w-full border border-gray-600 ">
        <CustomServices />
      </div>
      {/* Additional packages */}
      <div className="md:w-[95%] mx-auto rounded-2xl ">
        <AdditionalPacks />
      </div>
    </div>
  );
};

export default Home;
