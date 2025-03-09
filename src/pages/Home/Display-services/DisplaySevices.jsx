import React from "react";
import { Link } from "react-router-dom";
import { useAxiosPublic } from "../../../hooks/useAxiosPublic";
const DisplaySevices = ({ serv }) => {
  const { serviceName, serviceImg, servicePrice, _id, details } = serv;
  const axiosPublic =useAxiosPublic()
  const findService = async() => {
    // fetch(`https://service-review-server-pink.vercel.app/custom-service/${_id}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //   });
     await axiosPublic.get(`/custom-service/${_id}`)
  
  };
  return (
    <div className="card w-[90%] h-[20rem] mx-auto bg-base-100 shadow-xl image-full transition-transform transform  hover:scale-105 duration-500 ease-in-out">
      <figure>
        <img src={serviceImg} alt="serviceImg" className="w-full " />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-2xl">{serviceName}</h2>
        <p className="font-bold">Price : {servicePrice}BDT.</p>
        <p>{details?.slice(0, 100)}.......</p>
        <div className="card-actions justify-end">
          <Link to={`/home/${_id}`} onClick={findService}>
            <button className="btn btn-sm hover:bg-gray-600 hover:text-white">
              Details...
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DisplaySevices;
