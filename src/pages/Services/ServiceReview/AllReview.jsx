import React, { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../../Context/UserContext";

const AllReview = ({ rev }) => {
  const { user } = useContext(AuthProvider);
  const {
    customerName,
    customerEmail,
    placeId,
    reviewTitle,
    reviewBody,
    date,
    time,
  } = rev;
  //   console.log(rev);
  return (
    <div>
      <hr className="border-3 border-black my-2" />
      <div className="flex items-center">
        <div className="my-3">
          <img
            src={user?.photoURL}
            alt="Reviewer image"
            className="w-14 btn-circle h-14 border-2 border-[#234245]"
          />
        </div>
        <div className="pl-2">
          <h3 className="font-bold">{customerName}</h3>
          <p>
            On {date} -- {time}
          </p>
        </div>
      </div>
      <div>
        <p>
          {" "}
          <span className="font-semibold">Title : </span>
          {reviewTitle}
        </p>
        <p>
          {" "}
          <span className="font-semibold">Body : </span>
          {reviewBody}
        </p>
      </div>
      <hr className="border-3 my-2 border-black" />
    </div>
  );
};

export default AllReview;
