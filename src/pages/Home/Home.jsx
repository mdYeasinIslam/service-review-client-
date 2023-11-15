import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Service from "../Services/Service";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <div>
      <Banner />
      <div className="">
        <div className="text-center font-bold font-[cursive] mt-20 mb-10">
          <h1 className="">Enjoy Holiday Tours</h1>
          <p className="">Pick The One Your Prefer</p>
        </div>
        <div>
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[96%] mx-auto mt-10">
            {services.slice(0, 3).map((service) => (
              <Service key={service._id} service={service} />
            ))}
          </div>
        </div>
      </div>
      <div className="text-center py-10 transition-style2">
        <button className="btn btn-success hover:bg-[#213547] hover:text-white">See more..-</button>
      </div>
    </div>
  );
};

export default Home;
