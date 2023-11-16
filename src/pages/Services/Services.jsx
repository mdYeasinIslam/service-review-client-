import React, { useContext, useEffect, useState } from "react";
import "./Service.css";
import { AuthProvider } from "../../Context/UserContext";
import Service from "./Service";
const Services = () => {
  const { navControl } = useContext(AuthProvider);
  // console.log(navControl)
  const { user } = useContext(AuthProvider);
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
    <div className="pb-10  bg-[#ffece7] ">
      <div className={`relative w-full h-[16rem] md:h-[20rem] bgImage `}>
        <div
          className={`absolute font-[cursive]  top-28 w-full ${
            navControl ? "transition-style1  " : "transition-style2 "
          } font-semibold text-center text-white`}
        >
          <span className="text-4xl md:text-6xl block">Service Collection</span>
          <span className="text-xl md:text-2xl">Enjoy Our Services</span>
        </div>
      </div>
      {services[1] ? (
        <div>
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[96%] mx-auto mt-10">
            {services.map((service) => (
              <Service key={service._id} service={service} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center py-3 ">
          <span className="loading loading-spinner text-success w-8 h-8"></span>
        </p>
      )}
    </div>
  );
};

export default Services;
