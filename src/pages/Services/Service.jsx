import React from "react";
import "./Service.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, name, img, price, details,gridColumn } = service;
  // console.log(service)
   
  return (
    <div className={`card serviceCard md:h-[28rem] w-full  shadow-xl mx-auto col-span-${gridColumn}`}>
      <PhotoProvider>
        <PhotoView src={img}>
          <img
            src={img}
            alt={name}
            className="  w-full h-full absolute brightness-90   rounded-3xl "
          />
        </PhotoView>
      </PhotoProvider>
      <div className="card-body body-card text-white grid content-end ">
        <h2 className="text-2xl font-bold">{name}</h2>
        <h4 className="font-semibold"><span className="text-xl">4</span> Day's By BDT.{price} </h4>
        <p className="details ">{details.slice(0, 80)}.....</p>
        <div className="z-10 w-full">
          <Link  to={`/services/${_id}`}><button className="btn w-full ">Get Now</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Service;
