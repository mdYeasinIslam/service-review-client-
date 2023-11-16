import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
const DisplaySevices = ({serv}) => {
    const {serviceName,serviceImg,servicePrice,_id,details}= serv

    const findService = () =>{
       fetch(`http://localhost:3000/custom-service/${_id}`)
       .then(res => res.json())
       .then(data => {
        console.log(data)
       })
    }
    return (
        <div className="card w-[90%] mx-auto bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src={serviceImg}
            alt="Shoes"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-2xl">{serviceName}</h2>
        <p className='font-bold'>Price : {servicePrice}BDT.</p>
          <p>{details.slice(0,100)}.......</p>
          <div className="card-actions justify-end">
            <Link to={`/home/${_id}`} onClick={findService}><button className="btn btn-sm hover:bg-gray-600 hover:text-white">Details...</button></Link>
          </div>
        </div>
      </div>
    );
};

export default DisplaySevices;