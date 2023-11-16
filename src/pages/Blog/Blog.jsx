import React, { useContext, useState } from "react";
import { AuthProvider } from "../../Context/UserContext";

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

      <div className="relative">
        <button onClick={() => setOpen(!open)} className="btn ">
          open modal
        </button>
        <div>
          <h3>
            hello Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
            nostrum, sint reprehenderit tenetur ipsa neque quia nesciunt fugit
            vitae praesentium.
          </h3>
          <h3>
            hello Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
            nostrum, sint reprehenderit tenetur ipsa neque quia nesciunt fugit
            vitae praesentium.
          </h3>
          <h3>
            hello Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
            nostrum, sint reprehenderit tenetur ipsa neque quia nesciunt fugit
            vitae praesentium.
          </h3>
          <h3>
            hello Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
            nostrum, sint reprehenderit tenetur ipsa neque quia nesciunt fugit
            vitae praesentium.
          </h3>
          <h3>
            hello Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
            nostrum, sint reprehenderit tenetur ipsa neque quia nesciunt fugit
            vitae praesentium.
          </h3>
          <h3>
            hello Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
            nostrum, sint reprehenderit tenetur ipsa neque quia nesciunt fugit
            vitae praesentium.
          </h3>
          <h3>
            hello Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
            nostrum, sint reprehenderit tenetur ipsa neque quia nesciunt fugit
            vitae praesentium.
          </h3>
        </div>
        <div
          className={` w-1/2 h-52  bg-base-300 absolute ${
            open ? "hidden" : "block top-0 right-[25%]"
          }`}
        >
          <h2>Review</h2>
          <input type="text" name="" id="" className="w-full my-1 py-1 rounded" />
          <input type="text" name="" id="" className="w-full my-1 py-1 rounded " />
          </div>{" "}
      </div>
    </div>
  );
};

export default Blog;
