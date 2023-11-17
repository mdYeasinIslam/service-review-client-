import React, { useContext, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { PiStarThin } from "react-icons/pi";
import { RxStarFilled } from "react-icons/rx";
import Review from "./ServiceReview/Review";
import Description from "./Description/Description";
import { AuthProvider } from "../../Context/UserContext";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceDetails = () => {
  const { navControl } = useContext(AuthProvider);
  const service = useLoaderData();
  const [selector, setSelector] = useState(false);
  const [adult, setAdult] = useState(false);
  const { _id, img, name, price, rating, details } = service;
  return (
    <div className="pb-10 bg-base-300">
      <div className={`relative w-full h-[16rem] md:h-[20rem] bgImage mb-10`}>
        <div
          className={`absolute font-[cursive]  top-28 w-full ${
            navControl ? "transition-style1  " : "transition-style2 z-[1]"
          } font-semibold text-center text-white`}
        >
          <span className="text-2xl md:text-5xl block mb-2 font-[800]">
            {name}
          </span>
          <span className="text-xl md:text-2xl ">Enjoy Our Service</span>
        </div>
      </div>
      {/* service details */}
      <div className="grid md:grid-cols-2 w-[95%] mx-auto ">
        <PhotoProvider className="w-full">
          <PhotoView src={img}>
            <img
              src={img}
              alt=""
              className="w-full md:h-[25rem] lg:h-[30rem] rounded-xl "
            />
          </PhotoView>
        </PhotoProvider>

        <div className="pl-5">
          <div>
            <h1 className="font-[800] text-4xl">{name}</h1>
            <p className="text-2xl mt-5 mb-10">BDT. {price}</p>
            <p className="flex text-orange-500  space-x-2">
              {[...Array(5).keys()].map((n) => (
                <span key={n}>
                  {rating > n ? <RxStarFilled /> : <PiStarThin />}
                </span>
              ))}
            </p>
            <p className="my-6">{details}</p>
          </div>
          <div className="space-y-3">
            <h1 className="font-bold text-3xl">Duration</h1>
            <button className="border-2 border-base-300 bg-gray-800 text-white ">
              4 Days
            </button>
          </div>
          <div className="my-6 space-y-3">
            <h1 className="font-bold text-3xl">Age</h1>
            <button className="border-2 border-base-300 ">Only 18+ </button>
            <br />
            <span htmlFor="age">Are you 18+ :- </span>
            <br />
            <input
              onClick={() => setAdult(!adult)}
              type="checkbox"
              name=""
              id="yes"
              className="age"
            />
            <label htmlFor="yes" className="age">
              Yes
            </label>
            {/* <input
              onClick={() => setAdult(false)}
              type="checkbox"
              name=""
              id="no"
              className="age"
            />
            <label htmlFor="no" className="age">
              No
            </label> */}
            {
              !adult &&  <p className="text-red-500 font-semibold">please select your age range </p>
            }
           
          </div>
          <div>
            <h1 className="text-3xl font-bold">Abailability</h1>
            <p className="bg-base-300 ">
              Need {rating} person for a complete group. Only {rating} person
              can join !!!
            </p>
          </div>
          <div className="my-2">
            <h1 className="text-2xl font-bold">Sub-Total</h1>
            <p className="text-xl bg-base-300 ">BDT.{price}</p>
          </div>
          <div className=" mt-3">
            {
              adult?
                <Link to={`/services/check-out/${_id}`}>
              <button
                className={`w-full hover:bg-[#213547] hover:text-white hover:transition-all`}
              >
                Confirm Your Adverture
              </button>
            </Link>
              :
             
              <button
                className={`w-full hover:bg-[#213547] hover:text-white hover:transition-all btn-disabled`}
              >
                Confirm Your Adverture
              </button>
           
            }
           
          </div>
        </div>
      </div>
      {/* ----------------------------------------- */}
      {/* review section */}
      <div className="space-y-2 my-10">
        <hr className="border-3 border-black " />
        <div className="flex justify-around text-xl md:text-3xl font-semibold text-center  bg-base-300 my-0 p-0 ">
          <button
            onClick={() => setSelector(false)}
            className={`font-[cursive] ${
              selector == false && "underline text-blue-400 "
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setSelector(true)}
            className={`font-[cursive] ${
              selector == true && "underline text-blue-400 "
            }`}
          >
            Review
          </button>
        </div>
        <hr className="border-3 border-black" />
      </div>
      <div>
        {selector ? (
          <Review key={_id} service={service} />
        ) : (
          <Description key={service._id} service={service} />
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
