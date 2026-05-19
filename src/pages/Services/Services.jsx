import { useContext, useEffect, useState } from "react";
import Loader from "../../base-component/Loader";
import { AuthProvider } from "../../Context/UserContext";
import { useAxiosPublic } from "../../hooks/useAxiosPublic";
import "./Service.css";
import ServiceCopy from "./ServiceCopy";
const Services = () => {
  const { navControl } = useContext(AuthProvider);
  // console.log(navControl)
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    // fetch("https://service-review-server-pink.vercel.app/services")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //     setServices(data);
    //   });
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    const res = await axiosPublic.get("/services");
    if (res.data) {
      setServices(res.data);
      setLoading(false);
    }
  };
  return (
    <div className="pb-10  bg-[#ffece7] ">
      <div className={`relative w-full h-[16rem] md:h-[20rem] bgImage `}>
        <div
          className={`absolute font-[cursive] top-28 w-full ${
            navControl ? "transition-style1  " : "transition-style2 "
          } font-semibold text-center text-white`}
        >
          <span className="text-4xl md:text-6xl block">Service Collection</span>
          <span className="text-xl md:text-2xl">Enjoy Our Services</span>
        </div>
      </div>
      {loading && <Loader />}
      {services.length > 0 ? (
        <div>
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[96%] mx-auto mt-10">
            {services.map((service) => (
              <ServiceCopy key={service._id} service={service} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-black text-2xl text-center my-10 font-semibold">
          No data available
        </div>
      )}
    </div>
  );
};

export default Services;
