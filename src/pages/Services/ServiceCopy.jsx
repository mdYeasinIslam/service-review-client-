import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
// const service = {
//   _id: "1",
//   name: "hasan",
//   img: "https://i.ibb.co.com/RTKxC5DT/Sundarban-Day-Trip-1-Day-Jungle-Safari-scaled.webp",
//   price: 4,
// };
const ServiceCopy = ({ service }) => {
  const { _id, name, img, price } = service;

  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const cardRef = useRef(null);

  const theme = "light";

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    }
  };

  const rotateY = isHovered ? (mousePosition.x - 0.5) * 20 : 0;
  const rotateX = isHovered ? (0.5 - mousePosition.y) * 20 : 0;


  return (
    <div
      className="relative w-full h-[10rem] md:h-[14rem] xl:h-[300px] perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      ref={cardRef}
    >
      <motion.div
        className="relative w-full h-full overflow-hidden  rounded-lg shadow-xl cursor-pointer"
        // style={{ backgroundImage: `url(${img})` ,filter:'brightness(90%)',objectFit:'cover',objectPosition:'center'}}
        animate={{
          rotateY: rotateY,
          rotateX: rotateX,
          boxShadow: isHovered
            ? theme === "dark"
              ? "0px 10px 25px rgba(0, 0, 0, 0.2), 0 0 30px rgba(100, 100, 255, 0.4)"
              : "0px 10px 25px rgb(152, 0, 255, 0.15), 0 0 30px rgb(152, 0, 255, 0.15)"
            : "0px 5px 15px rgba(0, 0, 0, 0.1)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
      >
        <PhotoProvider>
          <PhotoView src={img}>
            <img
              src={img}
              alt={name}
              className="w-full h-full absolute brightness-50   rounded-xl "
            />
          </PhotoView>
        </PhotoProvider>
        <div className="absolute flex flex-col justify-center text-white h-full p-4 gap-2 z-10">
          <h3 className="text-xl md:text-2xl 2xl:text-3xl font-bold ">
            {name}
          </h3>
          <p className="text-sm ">4 Day&lsquo;s By BDT.{price}</p>
          <Link to={`/services/${_id}`}>
            <button
              // className="text-white bg-slate-900 rounded md:rounded-lg text-xs md:text-base font-semibold capitalize py-1 px-3 md:py-2 md:px-4 "
              className="btn-custom"
            >
              Details
            </button>
          </Link>
        </div>
        {/* {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            style={{
              background: `radial-gradient(circle at ${spotlightX} ${spotlightY}, ${theme === "dark" ? "rgba(255, 255, 255, 1)" : "rgb(152, 0, 255, 3)"} 0%, transparent 70%)`,
            }}
          />
        )} */}

        {isHovered && (
          <motion.div
            className="absolute inset-0 border-2 border-[rgb(152,0,255,0.6)] dark:border-blue-400 rounded-lg pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              boxShadow: "0 0 15px rgba(66, 153, 225, 0.5)",
            }}
          />
        )}
      </motion.div>
    </div>
  );
};

export default ServiceCopy;
