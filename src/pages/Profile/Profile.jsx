import React, { useContext } from "react";
import { AuthProvider } from "../../Context/UserContext";

const Profile = () => {
  const { navControl, user } = useContext(AuthProvider);
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
      <div className="hero bg-base-200 py-10 ">
        <div className="hero-content flex-col border-2 border-dotted border-black py-10">
          <img src={user?.photoURL} className="rounded-lg shadow-2xl h-full w-full" />
          <div>
            <h1 className="text-5xl font-bold">{user?.displayName}</h1>
            <p className="py-6"><span className="font-semibold">Email</span>: {user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
