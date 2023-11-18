import React, { useContext, useEffect, useState } from "react";
import { PiStarThin } from "react-icons/pi";
import { RxStarFilled } from "react-icons/rx";
import "./Review.css";
import { AuthProvider } from "../../../Context/UserContext";
import AllReview from "./AllReview";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Review = ({ service }) => {
  const { _id, rating, name } = service;
  const [reviews, setReviews] = useState([]);
  const [count, setCount] = useState(0);
  const { user, photoURL } = useContext(AuthProvider);
  const [review, setReview] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const customerName = form.name.value;
    // const customerEmail = form.email.value;
    const reviewTitle = form.reviewTitle.value;
    const reviewBody = form.reviewBody.value;
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time = today.toLocaleString("en-US", { timeStyle: "short" });
    const review = {
      placeId: _id,
      customerName,
      customerEmail: user.email,
      reviewTitle,
      reviewBody,
      reviewerImage: photoURL,
      placeName: name,
      date,
      time,
    };
    // console.log(review);
    fetch(`http://localhost:3000/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.result.acknowledged) {
          setCount(count + 1);
        }
        toast(data.message)
      
        form.reset();
      })
      .catch((e) => console.error(e));
  };
  useEffect(() => {
    fetch(`http://localhost:3000/review/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReviews(data);
      });
  }, [count]);
  // console.log(reviews);
  return (
    <div className="font-[cursive]">
      
      <div className="w-[93%] mx-auto">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Customer Review </h3>
          <p className="flex text-orange-500  space-x-2">
            {[...Array(5).keys()].map((n) => (
              <span key={n}>
                {rating > n ? <RxStarFilled /> : <PiStarThin />}
              </span>
            ))}
          </p>
        </div>
        <div className="my-3 flex justify-end openReview">
          <button
            onClick={() => setReview(!review)}
            className="md:w-[20%] bg-[#396b6f] text-white uppercase hover:bg-[#213547]"
          >
            Write A Review
          </button>
        </div>
        <div className={`my-5 review-section   ${review ? "block" : "hidden"}`}>
          <p className="text-xl font-semibold pb-1 ">Write a review</p>
          {user?.email ? (
            <form onSubmit={formHandler} className="space-y-3">
              <div className="">
                <label className="text-xl ">Name :</label> <br />
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter your name"
                  className="w-full border-2 border-black py-2 rounded bg-base-300"
                  required
                />
              </div>
              {/* <div className="">
                <label className="text-xl ">Email :</label> <br />
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder={user?.email}
                  className="w-full border-2 border-black py-2 rounded bg-base-300"
                  required
                />
              </div> */}

              <div className="">
                <label className="text-xl ">Review Title :</label> <br />
                <input
                  type="text"
                  name="reviewTitle"
                  id=""
                  placeholder="Title of Review"
                  className="w-full border-2 border-black py-2 rounded bg-base-300"
                  required
                />
              </div>
              <div className="">
                <label className="text-xl ">Body Of Review (1500):</label>{" "}
                <br />
                <input
                  type="text"
                  name="reviewBody"
                  id=""
                  placeholder="Write your opinion with 1500 characters"
                  className="w-full input-lg border-2 border-black py-2 rounded bg-base-300"
                  required
                />
              </div>
              <div className="flex items-center">
                <p className="font-semibold">Ratings - </p>
                <p className="flex text-orange-500  space-x-2">
                  {[...Array(5).keys()].map((n) => (
                    <span
                      key={n}
                      type="submit"
                      className="bg-base-300  m-0 p-0 border-none "
                    >
                      {" "}
                      <PiStarThin className="w-6 h-6" />
                    </span>
                  ))}
                </p>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="md:w-[20%] btn bg-[#234245]  text-white hover:bg-[#213547] hover:text-white"
                >
                  {" "}
                  Submit your Review
                </button>
              </div>
            </form>
          ) : (
            <>
              <p className="text-red-600 font-bold">
                You Don't have any account.
                <Link to="/signIn" className="underline">
                  Please Log-in first
                </Link>
              </p>
            </>
          )}
        </div>

        <div>
          <h3 className="text-2xl font-bold">Customer Review</h3>
          <div>
            {reviews.map((rev) => (
              <AllReview key={rev._id} rev={rev} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
