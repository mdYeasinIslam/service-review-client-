import React from "react";
import { CiEdit } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";

const ShowReviews = ({ rev }) => {
  console.log(rev);
  const { customerEmail, customerName, placeName, reviewBody, reviewTitle } =
    rev;
  return (
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        <th className="md:w-4">1</th>
        <td className=" md:w-1/5 font-bold">{placeName}</td>
        <td>
          <p className="font-semibold">Title:{reviewTitle}</p>
          <p>
            {" "}
            <span className="font-semibold">Review</span> : {reviewBody}
          </p>
        </td>
        <td className="md:w-1/6">
          <button> 
            <CiEdit />
          </button>
          <button>
          <AiTwotoneDelete />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default ShowReviews;
