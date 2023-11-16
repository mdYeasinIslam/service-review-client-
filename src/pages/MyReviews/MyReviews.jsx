import React, { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../Context/UserContext";
import ShowReviews from "./ShowReviews";

const MyReviews = () => {
  const { navControl, user } = useContext(AuthProvider);
  const [reviews, setReviews] = useState([]);
  const [reRender, setReRender] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:3000/review`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const filter = data.filter(
          (userReview) => userReview.customerEmail == user?.email
        );
        // console.log(filter)
        setReviews(filter);
      });
  }, [reRender]);
  //   console.log(reRender);
  return (
    <div>
      <div className={`relative w-full h-[16rem] md:h-[20rem] bgImage`}>
        <div
          className={`absolute font-[cursive]  top-28 w-full ${
            navControl ? "transition-style1  " : "transition-style2 "
          } font-semibold text-center text-white`}
        >
          <span className="text-2xl md:text-5xl block mb-2 font-[800]">
            All of my Reviews
          </span>
          <span className="text-xl md:text-2xl ">Let's check all review</span>
        </div>
      </div>
      <div className="overflow-x-auto bg-base-300 py-10  ">
        <table className="table border-2 border-black md:w-[80%] mx-auto">
          {/* head */}
          <thead className="border-2 border-dotted border-black">
            <tr>
              {/* <th></th> */}
              <th>Tourist Area</th>
              <th>Review </th>
              <th>Edit / Delete</th>
            </tr>
          </thead>
          {/* tbody */}
          {reviews[1] ? (
            <>
              {reviews.map((rev) => (
                <ShowReviews
                  key={rev._id}
                  rev={rev}
                  setReRender={setReRender}
                  reRender={reRender}
                />
              ))}
            </>
          ) : (
            <>
            <span className="loading loading-spinner w-8 h-8 text-success"></span>
            </>
          )}
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
