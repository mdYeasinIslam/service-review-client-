import { useEffect, useState } from "react";
import { useAxiosPublic } from "../../../hooks/useAxiosPublic";
import DisplayServiceCopy from "./DisplayServiceCopy";

const CustomServices = () => {
  const [services, setServices] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    // fetch(`https://adventa-server.vercel.app/custom-service`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //     setServices(data);
    //   });
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await axiosPublic.get("/custom-service");
    if (res.data) {
      setServices(res.data);
    }
  };
  return (
    <div className="container mx-auto py-10">
      <div className="font-bold text-center  ">
        <h3 className="text-2xl md:text-3xl pb-3">Customize Your Packages </h3>
        {/* <p className="text-2xl">Adventures</p> */}
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-5 md:mt-20">
        {services.map((service) => (
          <DisplayServiceCopy key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default CustomServices;
