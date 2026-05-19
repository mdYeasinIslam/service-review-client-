import { Link } from "react-router-dom";
import Service from "../../Services/Service";
import { useEffect, useState } from "react";
import { useAxiosPublic } from "../../../hooks/useAxiosPublic";
import Loader from "../../../base-component/Loader";

const TouristServices = () => {
  const [services, setServices] = useState([]);
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    const res = await axiosPublic.get("/services?size=4");
    if (res.data) {
      setServices(res.data);
      setLoading(false);
    }
  };
  return (
    <section>
      <div className="container mx-auto py-8 md:pt-20">
        <div className="w-full text-center text-black font-bold">
          <h3 className="text-3xl md:text-5xl">Enjoy Holiday Tours</h3>
          <p className="mt-1 md:mt-2 text-slate-600">
            Pick The One Your Prefer
          </p>
        </div>
        {loading && <Loader />}

        {services?.length > 0 ? (
          <>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-6 md:mt-10">
              {services.map((service, idx) => (
                <Service key={idx} service={service} />
              ))}
            </div>
            <div className="text-center py-10">
              <Link to="/services">
                <button className="border border-black text-black bg-transparent  hover:bg-[#213547] hover:text-white transition-all duration-300 max-sm:p-1 md:p-2">
                  See more...
                </button>
              </Link>
            </div>
          </>
        ) : (
          <div className="text-black text-2xl text-center my-10 font-semibold">
            No data available
          </div>
        )}
      </div>
    </section>
  );
};

export default TouristServices;
