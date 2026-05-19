// import img1 from "../../../assets/image/Banner/banner1.jpeg";
// import img2 from "../../../assets/image/Banner/banner-2.jpg";
// import img3 from "../../../assets/image/Banner/banner3.avif";
import BannerItem from "./BannerItem";

const Banner = () => {
    
    const sliderImg = [
      {
        image:
          "https://i.ibb.co.com/bMYfQjqV/premium-photo-1675039871449-62f86fb78a70.avif",
        prev: 3,
        id: 1,
        next: 2,
      },
      {
        image:
          "https://i.ibb.co.com/5hwm6GhY/pexels-musaddek-sayek-2152825668-33684437.jpg",
        prev: 1,
        id: 2,
        next: 3,
      },
      {
        image:
          "https://i.ibb.co.com/RTKxC5DT/Sundarban-Day-Trip-1-Day-Jungle-Safari-scaled.webp",
        prev: 2,
        id: 3,
        next: 1,
      },
    ];
  return (
    <div className="carousel w-full  
     ">
     {
        sliderImg.map(slider => <BannerItem key={slider.id} slider ={slider} />)
     }
    </div>
  );
};

export default Banner;
