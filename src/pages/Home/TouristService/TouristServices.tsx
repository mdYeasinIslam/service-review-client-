import { Link } from "react-router-dom";
import Service from "../../Services/Service";
import { useEffect, useState } from "react";
import { useAxiosPublic } from "../../../hooks/useAxiosPublic";

const TouristServices = () => {
  const [services, setServices] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    // fetch("https://service-review-server-pink.vercel.app/services?name=hasan")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //     setServices(data);
    //   });
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await axiosPublic.get("/services?name=hasan");
    console.log(res.data);
    if (res.data) {
      setServices(res.data);
    }
  };
  return (
    <section>
      <div className="container mx-auto md:py-20">
        <div className="w-full text-center text-black font-bold">
          <h3 className="text-4xl md:text-5xl">Enjoy Holiday Tours</h3>
          <p className="mt-2">Pick The One Your Prefer</p>
        </div>
        <div>
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-3  mt-10">
            {services.map((service, idx) => (
              <Service key={idx} service={service} />
            ))}
          </div>
        </div>
        <div className="text-center py-10">
          <Link to="/services">
            <button className="border border-black text-black bg-transparent  hover:bg-[#213547] hover:text-white transition-all duration-300">
              See more...
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TouristServices;
