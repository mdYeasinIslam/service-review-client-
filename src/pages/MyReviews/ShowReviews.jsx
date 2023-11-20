import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const ShowReviews = ({ rev, setReRender, reRender }) => {
  const [edit, setEdit] = useState(false);
  const { _id, placeName, reviewBody, reviewTitle, date, time } = rev;
  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.reviewTitle.value;
    const body = form.reviewBody.value;
    const review = { title, body };
    fetch(`https://service-review-server-pink.vercel.app/review/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        const status = data.status;
        if (status) {
          setReRender(!reRender);
          toast("Review is updated successfylly");
        }
      });
  };
  const deleteOperation = () => {
    fetch(`https://service-review-server-pink.vercel.app/review/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const status = data.status;
        if (status) {
          setReRender(!reRender);
          toast("Review is deleted successfylly");
        }
      });
  };

  return (
    <tbody>
      {/* row 1 */}

      <tr className="bg-base-200">
        {/* <th className="md:w-4">1</th> */}
        <td className=" md:w-1/5 font-bold">
          {placeName} <br />{" "}
          <span>
            {date} ({time})
          </span>
        </td>
        <td className="w-full">
          <form onSubmit={formHandler}>
            <p className="font-semibold ">
              Title :
              <input
                type="text"
                name="reviewTitle"
                defaultValue={reviewTitle}
                readOnly={!edit}
                className={`w-full p-1 rounded-sm bg-base-300 ${
                  edit ? "border-2 border-black" : ""
                }`}
              />
            </p>

            <p className="font-semibold">
              Review :
              <input
                type="text"
                name="reviewBody"
                defaultValue={reviewBody}
                readOnly={!edit}
                className={`w-full p-1 rounded-sm bg-base-300 ${
                  edit ? "border-2 border-black" : ""
                }`}
              />{" "}
            </p>

            <input
              onClick={() => setEdit(false)}
              type={`${edit ? "submit" : "hidden"}`}
              value="Submit"
              className="border-2 border-black mt-1 rounded-lg font-semibold btn-sm "
            />
          </form>
        </td>
        <td className="w-full md:w-1/6">
          <button
            className="btn"
            onClick={() => {
              setEdit(!edit);
            }}
          >
            <CiEdit />
          </button>
          <button onClick={deleteOperation}>
            <AiTwotoneDelete />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default ShowReviews;
