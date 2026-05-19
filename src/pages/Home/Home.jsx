import Banner from "./Banner/Banner";
import CustomServices from "./Display-services/CustomServices";
import AdditionalPacks from "./ExtraPackage/AdditionalPacks";
import "./Home.css";
import TouristServices from "./TouristService/TouristServices";
const Home = () => {
  return (
    <div className=" bg-white">
      <Banner />
      {/* Tourist Services */}
      <TouristServices />
      {/* Customize Services */}
      <div className="w-full bg-base-300 ">
        <CustomServices />
      </div>
      {/* Additional packages */}
      <div className="md:w-[95%] mx-auto rounded-2xl my-20">
        <AdditionalPacks />
      </div>
    </div>
  );
};

export default Home;
