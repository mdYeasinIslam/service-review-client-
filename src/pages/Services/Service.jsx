import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { _id, name, img, price } = service;
  // ${gridColumn/2  ==1? 'md:col-span-2':'col-span-1 '}
  return (
    <div
      className={`card serviceCard h-full w-full shadow-xl mx-auto transition-transform transform duration-300 `}
    >
      <PhotoProvider>
        <PhotoView src={img}>
          <img
            src={img}
            alt={name}
            className="w-full h-full absolute brightness-50   rounded-xl "
          />
        </PhotoView>
      </PhotoProvider>
      <div className="card-body body-card text-white max-sm:p-5 sm:mt-5">
        <h2 className="text-2xl font-bold">{name}</h2>
        <h4 className="font-semibold">
          <span className="text-xl">4</span> Day&lsquo;s By BDT.{price}
        </h4>
        {/* <p className="details ">{details.slice(0, 80)}.....</p> */}
        <div className="z-10  ">
          <Link to={`/services/${_id}`}>
            <button className="text-white py-1 px-3 md:py-2 md:px-4 rounded md:rounded-lg text-xs md:text-base capitalize">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
