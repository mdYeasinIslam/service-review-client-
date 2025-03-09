import React from "react";
import "./Service.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, name, img, price, details, gridColumn } = service;
  console.log(typeof service.gridColumn);
  // ${gridColumn/2  ==1? 'md:col-span-2':'col-span-1 '}
  return (
    <div
      className={`card serviceCard h-[20rem] md:h-full w-full  shadow-xl mx-auto transition-transform transform  hover:scale-95 duration-500 ease-in-out`}
    >
      <PhotoProvider>
        <PhotoView src={img}>
          <img
            src={img}
            alt={name}
            className="  w-full h-full absolute brightness-50   rounded-xl "
          />
        </PhotoView>
      </PhotoProvider>
      <div className="card-body body-card text-white grid content-end ">
        <h2 className="text-2xl font-bold">{name}</h2>
        <h4 className="font-semibold">
          <span className="text-xl">4</span> Day's By BDT.{price}{" "}
        </h4>
        <p className="details ">{details.slice(0, 80)}.....</p>
        <div className="z-10 w-full ">
          <Link to={`/services/${_id}`}>
            <button className="btn w-full bg-[#333333] text-white ">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
