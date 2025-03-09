import React, { useContext } from "react";
import { AuthProvider } from "../../Context/UserContext";
import img from "../../assets/image/custom-service/travel-world.jpg";
import { toast } from "react-toastify";
import ImageUpload from "../SharedPage/ImageUpload/ImageUpload";
import { useAxiosPublic } from "../../hooks/useAxiosPublic";

const AddServices = () => {
  const { navControl, imgUrl } = useContext(AuthProvider);
  const axiosPublic =useAxiosPublic()
  const formHandler = async(e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    const serviceImg = form.serviceImg.value;
    const servicePrice = form.price.value;
    const details = form.details.value;
    const serviceInfo = {
      serviceName,
      serviceImg: imgUrl,
      servicePrice,
      details,
    };
    const res = await axiosPublic.post('/custom-service', { serviceInfo })
    console.log(res)
    if (res.data?.acknowledged) {
      toast("Service is added successfully");
      form.reset();
    }
      
    // fetch(`https://service-review-server-pink.vercel.app/custom-service`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(serviceInfo),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //     toast("Service is added successfully");
    //     form.reset();
    //   });
  };
  
  return (
    <div className="font-[cursive]">
      <div className={`relative w-full h-[16rem] md:h-[20rem] bgImage mb-6 `}>
        <div
          className={`absolute font-[cursive]  top-28 w-full ${
            navControl ? "transition-style1  " : "transition-style2 z-[1]"
          } font-semibold text-center text-white`}
        >
          <span className="text-2xl md:text-5xl block mb-2 font-[800]">
            Customize your Service
          </span>
          <span className="text-xl md:text-2xl ">Add More Services.... </span>
        </div>
      </div>
      <div className="py-16">
        <div>
          <h1 className="text-3xl text-center font-semibold ">
            Insert Your Service Details
          </h1>
          <p className="text-center "> It should be related with tourism</p>
        </div>
        <div className="md:flex md:flex-row-reverse mt-5 items-center">
          <figure className="md:w-1/2">
            <img src={img} alt="" className="w-3/4 mx-auto" />
          </figure>
          <form onSubmit={formHandler} className="card-body md:w-1/2">
            <div className="form-control">
              <label>Service-Name : </label>
              <input
                type="text"
                name="serviceName"
                placeholder="Service-Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label>Service-Image (Optional) : </label>
              <input
                type="text"
                name="serviceImg"
                placeholder={imgUrl}
                className="input input-bordered"
              />
              <ImageUpload />
            </div>

            <div className="form-control">
              <label>Service-Price : </label>

              <input
                type="number"
                name="price"
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label>Service-Details : </label>

              <input
                type="text"
                name="details"
                placeholder="Something about your service"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add-To-Db</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
