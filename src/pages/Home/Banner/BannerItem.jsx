import "./BannerItem.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const BannerItem = ({ slider }) => {
  const { id, next, prev, image } = slider;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
      <div className="w-full h-[100%] lg:h-[40rem]">
        <img
          src={image}
          className={`w-full h-full object-cover object-center  brightness-50`}
        />
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[70%] md:top-1/2">
        <a
          href={`#slide${prev}`}
          // className="btn btn-circle"
          className="bg-slate-600 border rounded-full p-1"
        >
          {/* ❮ */}
          <IoIosArrowBack className="w-7 h-7 text-white " />
        </a>
        <a
          href={`#slide${next}`}
          className="bg-slate-600 border rounded-full p-1"
        >
          {/* ❯ */}
          <IoIosArrowForward className="w-7 h-7 text-white " />
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
