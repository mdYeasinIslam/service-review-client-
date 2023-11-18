import React from "react";
import img from "../../../assets/image/packs3.avif";
import img1 from "../../../assets/image/packs2.webp";
import img2 from "../../../assets/image/camp.avif";
import img3 from "../../../assets/image/bike-travel.jpg";
const AdditionalPacks = () => {
  return (
    <div className="text-white lg:grid grid-cols-2  rounded-xl ">
      <div className="md:p-12 p-2 bg-lime-950 h-full md:rounded-l-xl">
        <h3 className="text-xl mt-5 font-semibold font-[cursive]">
          Just Relax And Enjoy
        </h3>
        <p className="text-5xl my-10 font-bold font-serif ">Packs Includes !</p>
        <div className="border-2 w-full  rounded-xl">
          <div>
            <div className="md:flex w-[90%] py-4 my-2  mx-auto items-center  rounded overflow-hidden shadow-lg transition-transform transform hover:bg-lime-800 hover:scale-105 duration-500 ease-in-out">
              <figure className="w-full md:w-52  h-full">
                <img
                  className="md:w-[90%] h-[10rem] md:h-[7rem] lg:h-[5rem] mx-auto rounded-xl  object-cover"
                  src={img1}
                  alt="Card"
                />
              </figure>
              <div className=" py-4 pl-2">
                <div className="font-bold text-xl mb-2">Free Food Provide</div>
                <p className="text-white text-base">
                  Etiam erat velit scelerisque in dictum. nisl nunc mi. Netus et
                  malesuada fames ac turpis egestas.
                </p>
              </div>
            </div>
            <div className="md:flex w-[90%] py-4 my-2  mx-auto items-center  rounded overflow-hidden shadow-lg transition-transform transform hover:bg-lime-800 hover:scale-105 duration-500 ease-in-out">
              <figure className="w-full md:w-56 h-full">
                <img
                  className="md:w-[90%] h-[10rem] md:h-[7rem] lg:h-[5rem] mx-auto rounded-xl  object-cover"
                  src={img3}
                  alt="Card"
                />
              </figure>
              <div className=" py-4 pl-2">
                <div className="font-bold text-xl mb-2">
                  Cab or Bike Travels
                </div>
                <p className="text-white text-base">
                  Bibendum neque egestas congue quisque egestas diam in arcu.
                  Urna cursus eget nunc scelerisque viver.
                </p>
              </div>
            </div>
            <div className="md:flex w-[90%] py-4 my-2  mx-auto items-center  rounded overflow-hidden shadow-lg transition-transform transform hover:bg-lime-800 hover:scale-105 duration-500 ease-in-out">
              <figure className="w-full md:w-60  h-full">
                <img
                  className="md:w-[90%] h-[10rem] md:h-[6rem] lg:h-[5rem] mx-auto rounded-xl  object-cover"
                  src={img2}
                  alt="Card"
                />
              </figure>
              <div className=" py-4 pl-2">
                <div className="font-bold text-xl mb-2">Camp Stay</div>
                <p className="text-white text-base">
                  Blandit libero volutpat sed cras ornare arcu. Est placerat in
                  egestas erat imperdiet sed. Ut faucibus pulvinar elemen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="  md:rounded-r-xl">
        <figure className="w-full h-full">
          <img src={img} alt="" className="w-full md:rounded-r-xl h-full brightness-50" />
        </figure>
      </div>
    </div>
  );
};

export default AdditionalPacks;
