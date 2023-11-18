import React, { useEffect, useState } from "react";
import DisplaySevices from "./DisplaySevices";

const CustomServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/custom-service`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <div className=" py-20">
      <div className="font-bold font-[cursive] text-center  ">
        <h3 className="text-2xl pb-3">Customize Your Packages </h3>
        <p className="text-4xl font-serif">Adventures</p>
      </div>
      <div className="grid md:grid-cols-3 gap-y-4 mt-20">
        {services.map((serv) => (
          <DisplaySevices key={serv._id} serv={serv} />
        ))}
      </div>
    </div>
  );
};

export default CustomServices;
