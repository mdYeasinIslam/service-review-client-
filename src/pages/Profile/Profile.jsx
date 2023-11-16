import React, { useContext } from "react";
import { AuthProvider } from "../../Context/UserContext";

const Profile = () => {
    const {navControl} = useContext(AuthProvider)
  return (
    <div>
      <div className={`relative w-full h-[16rem] md:h-[20rem] bgImage `}>
        <div
          className={`absolute font-[cursive]  top-28 w-full ${
            navControl ? "transition-style1  " : "transition-style2 "
          } font-semibold text-center text-white`}
        >
          <span className="text-4xl md:text-6xl block">Profile Info</span>
          <span className="text-xl md:text-2xl">About Me</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
