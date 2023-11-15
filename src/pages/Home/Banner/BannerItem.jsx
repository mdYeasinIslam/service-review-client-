import React from "react";
import './BannerItem.css'
const BannerItem = ({ slider }) => {
  const { id, next, prev, image } = slider;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
      <div className="w-full img-gradient">
 
        <img src={image} className=" w-full h-[100%] md:h-[40rem]" />
      </div>
   
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[70%] md:top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
