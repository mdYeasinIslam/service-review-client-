import { Link } from "react-router-dom";
import { useAxiosPublic } from "../../../hooks/useAxiosPublic";
const DisplayServiceCopy = ({ service }) => {
  const { serviceName, serviceImg, _id, details } = service;
  const axiosPublic = useAxiosPublic();
  const findService = async () => {
    // fetch(`https://adventa-server.vercel.app/custom-service/${_id}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //   });
    await axiosPublic.get(`/custom-service/${_id}`);
  };
  return (
    <div className="relative w-full h-[20rem] mx-auto bg-base-100 shadow-xl image-full transition-all transform  duration-500 ease-in-out border-2 border-transparent hover:border-[rgb(152,0,255,0.6)] rounded-md">
      <figure className="h-full">
        <img
          src={serviceImg}
          alt="serviceImg"
          className="w-full h-full object-cover brightness-50 rounded-md"
        />
      </figure>
      <div className="h-full absolute top-0 p-5 flex flex-col justify-end gap-5 ">
        <h2 className="card-title text-2xl md:text-3xl capitalize">
          {serviceName}
        </h2>
        {/* <p className="font-bold">Price : {servicePrice}BDT.</p> */}
        <p>{details?.slice(0, 100)}.......</p>
        <Link to={`/custom-package/${_id}`} onClick={findService}>
          <button className="btn-custom w-full">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default DisplayServiceCopy;
