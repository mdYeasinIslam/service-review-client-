import StatsSection from "../About/StatsSection";
import CTASection from "../Blog/CTASection";
import Banner from "./Banner/Banner";
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
      {/* <div className="w-full border border-gray-600 ">
        <CustomServices />
      </div> */}
      {/* Additional packages */}
      <StatsSection/>
      <div className="md:w-[95%] mx-auto rounded-2xl ">
        <AdditionalPacks />
      </div>
      <CTASection/>
    </div>
  );
};

export default Home;
