import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../base-component/Loader";
import { useAxiosPublic } from "../../../hooks/useAxiosPublic";
import ServiceCopy from "../../Services/ServiceCopy";

const TouristServices = () => {
  const [services, setServices] = useState([]);
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetch("https://adventa-server.vercel.app/services?name=hasan")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //     setServices(data);
    //   });
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    const res = await axiosPublic.get("/services?size=4");
    if (res.data) {
      setServices(res.data);
      setLoading(false);
    }
  };
  return (
    <section className="">
      <div className="container mx-auto py-8 md:pt-20">
        <div className="w-full text-center font-bold">
          <h3 className="text-3xl md:text-5xl">Enjoy Holiday Tours</h3>
          <p className="mt-1 md:mt-2 text-slate-400">
            Pick The One Your Prefer
          </p>
        </div>
        {loading && <Loader />}
        {/* <ServiceCopy/> */}
        {services?.length > 0 ? (
          <>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-6 md:mt-10">
              {services.map((service, idx) => (
                <ServiceCopy key={idx} service={service} />
              ))}
            </div>
            <div className="text-center py-10">
              <Link to="/services">
                <button className="btn-custom hover:bg-[var(--primary-button-500)] hover:text-white">
                  See more...
                </button>
              </Link>
            </div>
          </>
        ) : (
          <div className=" text-2xl text-center my-10 font-semibold">
            No data available
          </div>
        )}
      </div>
    </section>
  );
};

export default TouristServices;
