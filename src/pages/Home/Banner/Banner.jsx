import React from "react";
import img1 from "../../../assets/image/banner/banner.jpg";
import img2 from "../../../assets/image/banner/banner-2.jpg";
import img3 from "../../../assets/image/banner/banner-3.jpg";
import img4 from "../../../assets/image/banner/banner-4.jpg";
import BannerItem from "./BannerItem";

const Banner = () => {
    const sliderImg = [
        {
            image : img1,
            prev :4,
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
            next :4
        },
        {
            image : img4,
            prev :3,
            id:4,
            next :1
        },
    ]
  return (
    <div className="carousel w-full ">
     {
        sliderImg.map(slider => <BannerItem key={slider.id} slider ={slider} img1 = {img1}/>)
     }
    </div>
  );
};

export default Banner;
