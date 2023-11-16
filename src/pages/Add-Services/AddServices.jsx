import React, { useContext, useState } from "react";
import { AuthProvider } from "../../Context/UserContext";
import { Link } from "react-router-dom";
import img from "../../assets/image/custom-service/travel-world.jpg";
const AddServices = () => {
  const { navControl } = useContext(AuthProvider);
  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value
    const serviceImg = form.serviceImg.value;
    const servicePrice = form.price.value;
    const details = form.details.value
    const serviceInfo = {serviceName,serviceImg,servicePrice,details}
    // console.log(serviceInfo)
    fetch(`http://localhost:3000/custom-service`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(serviceInfo)
    }).then(res=>res.json())
    .then(data =>{
        console.log(data)
        form.reset()
    })
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
        <div className="flex mt-5 items-center">
          <form onSubmit={formHandler} className="card-body w-1/2">
            <div className="form-control">
                <label >Service-Name : </label>
              <input
                type="text"
                name="serviceName"
                placeholder="Service-Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
            <label >Service-Image (Optional) : </label>

              <input
                type="text"
                name="serviceImg"
                placeholder="serviceImg URL (optional)"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
            <label >Service-Price : </label>

              <input
                type="number"
                name="price"
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
            <label >Service-Details : </label>

              <input
                type="text"
                name="details"
                placeholder="Something about your service"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <figure className="w-1/2">
            <img src={img} alt="" className="w-3/4 mx-auto" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
