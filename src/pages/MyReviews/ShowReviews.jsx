import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";

const ShowReviews = ({ rev,setReRender,reRender }) => {
  const [edit, setEdit] = useState(false);
  const { _id,customerEmail, customerName, placeName, reviewBody, reviewTitle } =
    rev;
  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.reviewTitle.value;
    const body = form.reviewBody.value;
    const review = {title,body}
    fetch(`http://localhost:3000/review/${_id}`,{
        method:"PUT",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(review)
    })
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        const status = data.status
        if(status){
            setReRender(!reRender)
        }
    })
  };
  return (
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        <th className="md:w-4">1</th>
        <td className=" md:w-1/5 font-bold">{placeName}</td>
        <td>
          <form onSubmit={formHandler}>
            <p className="font-semibold">
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
            
          <input onClick={()=>setEdit(false)} type={`${edit?"submit":"hidden"}`} value="Submit"  className="border-2 border-black mt-1 rounded-lg font-semibold btn-sm "/>
           
          </form>
        </td>
        <td className="md:w-1/6">
          <button className="btn" onClick={() => setEdit(!edit)}>
            <CiEdit />
          </button>
          <button>
            <AiTwotoneDelete />
          </button>
        </td>
      </tr>
      {/* <dialog id="my_modal_4" className="modal ">
        <div className="modal-box w-11/12 max-w-5xl bg-[#213547] text-black">
          <form method="dialog">
           
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-white">Edit your review :</h3>
          <div>
            <input
              type="text"
              name=""
              placeholder={reviewBody}
              className="border border-black w-full py-2 rounded-xl bg-base-300 "
            />
          </div>
          <div className="modal-action">
            <form method="dialog">
             
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog> */}
    </tbody>
  );
};

export default ShowReviews;
