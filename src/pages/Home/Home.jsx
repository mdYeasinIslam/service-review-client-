import React from "react";
import Banner from "./Banner/Banner";
import SingleServicePage from "../Services/SingleServicePage";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="">
        <div className="text-center font-bold font-[cursive] mt-20 mb-10">
          <h1 className="">Enjoy Holiday Tours</h1>
          <p className="">Pick The One Your Prefer</p>
        </div>
        <SingleServicePage />
      </div>
    </div>
  );
};

export default Home;
