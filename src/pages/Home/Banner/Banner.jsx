import React from "react";
import img1 from "../../../assets/image/Banner/banner1.jpeg";
import img2 from "../../../assets/image/Banner/banner-2.jpg";
import img3 from "../../../assets/image/Banner/banner3.avif";
import BannerItem from "./BannerItem";

const Banner = () => {
    
    const sliderImg = [
        {
            image : img1,
            prev :3,
            id:1,
            next :2
        },
        {
            image : img2,
            prev :1,
            id:2,
            next :3
        },
        {
            image : img3,
            prev :2,
            id:3,
            next :1
        },
    ]
  return (
    <div className="carousel w-full banner-shadow  
     ">
     {
        sliderImg.map(slider => <BannerItem key={slider.id} slider ={slider} />)
     }
    </div>
  );
};

export default Banner;
