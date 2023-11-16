import React, { useContext, useState } from "react";
import { AuthProvider } from "../../Context/UserContext";
import img1 from '../../assets/image/TouristArea/Bandarban.jpg'
import img2 from '../../assets/image/TouristArea/kuakata.jpg'
const Blog = () => {
  const { navControl } = useContext(AuthProvider);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className={`relative w-full h-[16rem] md:h-[20rem] bgImage mb-10`}>
        <div
          className={`absolute font-[cursive]  top-28 w-full ${
            navControl ? "transition-style1  " : "transition-style2 "
          } font-semibold text-center text-white`}
        >
          <span className="text-2xl md:text-5xl block mb-2 font-[800]">
            Blog
          </span>
          <span className="text-xl md:text-2xl ">Enjoy Our Service</span>
        </div>
      </div>
      {/* The button to open modal */}

     
    </div>
  );
};

export default Blog;
