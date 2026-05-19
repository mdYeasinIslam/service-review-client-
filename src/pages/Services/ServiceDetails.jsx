import { useContext, useState } from "react";
import { PiStarThin } from "react-icons/pi";
import { RxStarFilled } from "react-icons/rx";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import { AuthProvider } from "../../Context/UserContext";
import Description from "./Description/Description";
import Review from "./ServiceReview/Review";

const ServiceDetails = () => {
  const { navControl } = useContext(AuthProvider);
  const service = useLoaderData();
  const [selector, setSelector] = useState(false);
  const [adult, setAdult] = useState(false);
  const { _id, img, name, price, rating, details } = service;
  console.log(service)
  return (
    <section className="pb-10 bg-base-300">
      <div className="container mx-auto">
        {/* Header */}
        <div className={`relative w-full h-[16rem] md:h-[20rem] bgImage mb-10`}>
          <div
            className={`absolute font-[cursive] top-28 w-full ${
              navControl ? "transition-style1" : "transition-style2 z-[1]"
            } font-semibold text-center text-white`}
          >
            <span className="text-2xl md:text-5xl block mb-2 font-[800]">
              {name}
            </span>
            <span className="text-xl md:text-2xl">Enjoy Our Service</span>
          </div>
        </div>

        {/* Service Details */}
        <div className="grid md:grid-cols-2 w-[95%] mx-auto gap-5">
          {/* Image */}
          <PhotoProvider>
            <PhotoView src={img}>
              <img
                src={img}
                alt={name}
                className="w-full md:h-[25rem] lg:h-[30rem] rounded-xl"
              />
            </PhotoView>
          </PhotoProvider>

          {/* Info */}
          <div className="pl-5 space-y-6">
            <div>
              <h1 className="text-white font-[800] text-4xl">{name}</h1>
              <p className="text-2xl mt-5">BDT. {price}</p>
              <div className="flex text-orange-500 space-x-2 mt-3">
                {[...Array(5)].map((_, n) => (
                  <span key={n}>
                    {rating > n ? <RxStarFilled /> : <PiStarThin />}
                  </span>
                ))}
              </div>
              <p className="my-6 text-gray-300">{details}</p>
            </div>

            <div>
              <h2 className="font-bold text-3xl mb-2">Duration</h2>
              <span className="border-2 border-base-300 bg-gray-800 text-white font-semibold p-2 rounded-md">
                4 Days
              </span>
            </div>

            <div>
              <h2 className="font-bold text-3xl mb-2">Age Verification</h2>
              <p className="border-2 border-base-100 pl-2 mb-3">
                Only 18+ allowed
              </p>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  id="age-confirm"
                  checked={adult}
                  onChange={() => setAdult(!adult)}
                  className="w-4 h-4"
                />
                <span>I confirm I am 18 or older</span>
              </label>
            </div>

            <div>
              <h2 className="font-bold text-3xl mb-2">Availability</h2>
              <p className="bg-base-300 p-2">
                Need {rating} people for a complete group. Only {rating} person
                can join!
              </p>
            </div>

            <div className="border-t pt-4">
              <p className="text-xl font-bold">
                Sub-Total:{" "}
                <span className="bg-base-300 ml-2 px-2">৳{price}</span>
              </p>
            </div>

            {!adult && (
              <p className="text-red-500 font-semibold">
                Please confirm your age to proceed
              </p>
            )}

            {adult ? (
              <Link to={`/services/check-out/${_id}`}>
                <button className="w-full px-4 py-2 border border-gray-200 hover:bg-[#213547] hover:text-white transition-all">
                  Confirm Your Adventure
                </button>
              </Link>
            ) : (
              <button
                disabled
                className="w-full px-4 py-2 border border-gray-200 opacity-50 cursor-not-allowed"
              >
                Confirm Your Adventure
              </button>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="py-10 md:py-32">
          <div className="flex gap-4 border-b-3 border-black bg-base-300">
            {[
              { label: "Description", value: false },
              { label: "Review", value: true },
            ].map((tab) => (
              <p
                key={tab.label}
                onClick={() => setSelector(tab.value)}
                className={`flex-1 py-3 font-semibold text-xl md:text-3xl transition-colors text-center  cursor-pointer border rounded-md ${
                  selector === tab.value
                    ? "text-blue-400 bg-[#12181F]   border-blue-400 "
                    : "bg-[#12181F] border-gray-500"
                }`}
              >
                {tab.label}
              </p>
            ))}
          </div>
        </div>

        {/* Content */}
        {selector ? (
          <Review service={service} />
        ) : (
          <Description service={service} />
        )}
      </div>
    </section>
  );
};

export default ServiceDetails;
