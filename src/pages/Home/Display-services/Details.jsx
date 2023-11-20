import React, { useContext } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { AuthProvider } from "../../../Context/UserContext";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { PiStarThin } from "react-icons/pi";
import { RxStarFilled } from "react-icons/rx";
import { toast } from "react-toastify";
const Details = () => {
  const serviceDetails = useLoaderData();
  const { navControl } = useContext(AuthProvider);
  // console.log(serviceDetails)
  const { details, serviceName, _id, servicePrice, serviceImg } =
    serviceDetails;

  const deleteService = () => {
    fetch(
      `https://service-review-server-pink.vercel.app/custom-service/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast(data.message);
      });
  };
  return (
    <div className="pb-10 bg-base-300">
      <div className={`relative w-full h-[16rem] md:h-[20rem] bgImage mb-10`}>
        <div
          className={`absolute font-[cursive]  top-28 w-full ${
            navControl ? "transition-style1  " : "transition-style2 z-[1]"
          } font-semibold text-center text-white`}
        >
          <span className="text-2xl md:text-5xl block mb-2 font-[800]">
            {serviceName}
          </span>
          <span className="text-xl md:text-2xl ">Enjoy Our Service</span>
        </div>
      </div>
      {/* service details */}
      <div className="grid md:grid-cols-2 w-[95%] mx-auto ">
        <PhotoProvider className="w-full">
          <PhotoView src={serviceImg}>
            <img
              src={serviceImg}
              alt=""
              className="w-full md:h-[25rem] lg:h-[30rem] rounded-xl "
            />
          </PhotoView>
        </PhotoProvider>

        <div className="pl-5">
          <div>
            <h1 className="font-[800] text-4xl">{serviceName}</h1>
            <p className="text-2xl mt-5 mb-10">BDT. {servicePrice}</p>
            <p className="flex text-orange-500  space-x-2">
              {[...Array(5).keys()].map((n) => (
                <span key={n}>{4 > n ? <RxStarFilled /> : <PiStarThin />}</span>
              ))}
            </p>
            <p className="my-6">{details}</p>
          </div>
          <div className="my-2">
            <h1 className="text-2xl font-bold">Sub-Total</h1>
            <p className="text-xl bg-base-300 ">BDT.{servicePrice}</p>
          </div>
          <Link to="/home">
            <div onClick={deleteService} className=" mt-3">
              <button className="w-full hover:bg-[#c03e3e] hover:text-white hover:transition-all">
                Delete this Service
              </button>
            </div>
          </Link>
        </div>
      </div>
      {/* ----------------------------------------- */}
      {/* review section */}
      {/* <div className="space-y-2 my-10">
          <hr className="border-3 border-black " />
          <div className="flex justify-around text-xl md:text-3xl font-semibold text-center  bg-base-300 my-0 p-0 ">
            <button
              onClick={() => setSelector(false)}
              className={`font-[cursive] ${selector==false && 'underline text-blue-400 '}`}
            >
              Description
            </button>
            <button
              onClick={() => setSelector(true)}
              className={`font-[cursive] ${selector==true && 'underline text-blue-400 '}`}
            >
              Review
            </button>
          </div>
          <hr className="border-3 border-black" />
        </div>
        <div>{selector ? <Review key={_id} service={service} /> : <Description key={service._id} service={service}/>}</div> */}
    </div>
  );
};

export default Details;
