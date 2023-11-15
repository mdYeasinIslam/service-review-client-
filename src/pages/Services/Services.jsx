import React, { useContext } from "react";
import './Service.css'
import SingleServicePage from "./SingleServicePage";
import { AuthProvider } from "../../Context/UserContext";
const Services = () => {
const {navControl} = useContext(AuthProvider)
// console.log(navControl)
  return (
    <div className="pb-10  bg-[#ffece7] ">
      <div className={`relative w-full h-[16rem] md:h-[20rem] bgImage `}>
        <div className={`absolute font-[cursive]  top-28 w-full ${navControl?'transition-style1  ':'transition-style2 z-[1]'} font-semibold text-center text-white`}>
          <span className="text-4xl md:text-6xl block"> Service Collection</span>
          <span className="text-xl md:text-2xl">Enjoy Our Services</span>
        </div> 
      
      </div>
      <SingleServicePage/>
      
    </div>
  );
};

export default Services;
