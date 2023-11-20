import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Service from "../Services/Service";
import { Link } from "react-router-dom";
import CustomServices from "./Display-services/CustomServices";
import "./Home.css";
import AdditionalPacks from "./ExtraPackage/AdditionalPacks";
const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/services?name=hasan")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <div>
      <Banner />
      {/* Tourist Services */}
      <div className="md:py-20 service-section bg-base-300">
        <div className="w-full text-center font-bold font-[cursive] pt-16 md:py-28 ">
          <h3 className="text-4xl md:text-5xl">Enjoy Holiday Tours</h3>
          <p className="mt-6">Pick The One Your Prefer</p>
        </div>
        <div>
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[96%] mx-auto mt-10">
            {services.map((service) => (
              <Service key={service._id} service={service} />
            ))}
          </div>
        </div>
        <div className="text-center py-10 transition-style2">
          <Link to="/services">
            <button className="btn btn-success  bg-[#49749a] text-white hover:bg-[#213547] hover:text-white">
              See more...
            </button>
          </Link>
        </div>
      </div>
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
