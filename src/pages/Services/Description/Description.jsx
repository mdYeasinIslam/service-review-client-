import React from "react";

const Description = ({ service }) => {
  console.log(service);
  const { _id,name, details, price ,accomodation,meal,personalService} = service;
 
  return (
    <div className="w-[90%] mx-auto space-y-5 font-[cursive]">
      <div>
        <h1 className="text-xl font-semibold">Overview : </h1>
        <p>{details}</p>
      </div>
      <div>
        <h1 className="text-xl font-semibold">Meals :</h1>
        <p>{meal}</p>
      </div>
      <div>
        <h1 className="text-xl font-semibold">Accomodation :</h1>
        <p>{accomodation}</p>
      </div>
      <div>
        <h1 className="text-xl font-semibold">Family Room :</h1>
        <p>{personalService}</p>
      </div>
    </div>
  );
};

export default Description;
