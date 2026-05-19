import { Link } from "react-router-dom";
import { useAxiosPublic } from "../../../hooks/useAxiosPublic";
const DisplayServiceCopy = ({ service }) => {
  const { serviceName, serviceImg, servicePrice, _id, details } = service;
  const axiosPublic = useAxiosPublic();
  const findService = async () => {
    // fetch(`https://service-review-server-pink.vercel.app/custom-service/${_id}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //   });
    await axiosPublic.get(`/custom-service/${_id}`);
  };
  return (
    <div className="relative w-full h-[20rem] mx-auto bg-base-100 shadow-xl image-full transition-transform transform  duration-500 ease-in-out ">
      <figure className="h-full">
        <img
          src={serviceImg}
          alt="serviceImg"
          className="w-full h-full object-cover brightness-50 rounded-md"
        />
      </figure>
      <div className="absolute top-10 p-5 grid justify-between h-full">
        <h2 className="card-title text-2xl capitalize">{serviceName}</h2>
        <p className="font-bold">Price : {servicePrice}BDT.</p>
        <p>{details?.slice(0, 100)}.......</p>
        <Link to={`/home/${_id}`} onClick={findService}>
          <button className="btn-custom">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default DisplayServiceCopy;
