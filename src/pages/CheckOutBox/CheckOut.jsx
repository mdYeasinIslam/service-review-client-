import React, { useEffect, useState } from "react";
import baseImg from "../../assets/logo7 (1).png";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const CheckOut = () => {
  const servicedata = useLoaderData();
  const [touristDetails,setTouristDetails]  = useState([])
  const [paymentDiv, setPaymentDiv] = useState(false);
  const [infoSubmitted, setInfoSubmitted] = useState(false);
  const { name, price, rating, img, details,_id } = servicedata;
  // console.log(servicedata)
  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const state = form.state.value;
    const city = form.city.value;
    const address = form.address.value;
    const contact = form.contact.value;
    const touristInfo = { placeId:_id,name, state, city, address, contact };
    // console.log(touristInfo);
    fetch(`http://localhost:3000/tourist-Info`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(touristInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status) {
          toast(data.message);
          setInfoSubmitted(!infoSubmitted);
        }
        form.reset();
      });
  };
  useEffect(() =>{
    fetch('http://localhost:3000/tourist-Info')
    .then(res => res.json())
    .then(data => {
      const filter = data.filter(d=> d.placeId == _id)
      console.log(filter)
      setTouristDetails(filter)
    })
  },[infoSubmitted])
  return (
    <div>
      <figure className="w-full bg-[#213547] text-center">
        <img src={baseImg} alt="" className="h-28 mx-auto" />
      </figure>

      {/* <hr className="my-5 border-2 bg-[#213547] " /> */}

      <div className="grid grid-cols-2 py-10">
        <div className=" border-y-2 border-r-2 border-gray-300">
          <div className=" ml-20 mr-3 ">
            {infoSubmitted ? (
              <div>
                <p>Your Information is submitted for this package..</p>
              </div>
            ) : (
              <form onSubmit={formHandler}>
                <h2 className="text-2xl my-2 font-semibold">Wanderer Info</h2>
                <p className="font-semibold">
                  Confirm your tour by giving information
                </p>
                <br />
                <div className="space-y-4 ">
                  <div>
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="Your Full Name"
                      className="w-full border-2 rounded-xl bg-base-100 block p-3 "
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="state"
                      id=""
                      placeholder="State"
                      className="border-2 rounded-xl bg-base-100 inline p-3 w-[49%] mr-[2%] "
                      required
                    />
                    <input
                      type="text"
                      name="city"
                      id=""
                      placeholder="City"
                      className="border-2 rounded-xl bg-base-100 inline p-3  w-[49%] "
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="address"
                      id=""
                      placeholder="Your Address"
                      className="border-2 rounded-xl bg-base-100 w-full block p-3 "
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="contact"
                      id=""
                      placeholder="Your mobile number or email"
                      className="border-2 rounded-xl bg-base-100 w-full block p-3 "
                      required
                    />
                  </div>

                  <div className="mt-5">
                    <button className="bg-[#7194b3] w-full text-white hover:bg-[#213547] ">
                      Confirm Your Info
                    </button>
                  </div>
                  <p>
                    <input
                      type="checkbox"
                      className="mr-3"
                      onClick={() => setPaymentDiv(!paymentDiv)}
                    />
                    Online payment
                  </p>
                </div>
              </form>
            )}
          </div>
          {paymentDiv == true && (
            <>
              <div className="my-10">
                <form className="ml-20 mr-3 ">
                  <h2 className="text-2xl  font-semibold">Payment </h2>
                  <p className="mb-2">
                    All transactions are secure and encrypted.
                  </p>
                  <p className="border rounded border-black w-full bg-base-300  p-3">
                    Credit card
                  </p>
                  <div className="space-y-4 px-6 py-2 bg-base-300 ">
                    <div>
                      <input
                        type="number"
                        name=""
                        id=""
                        placeholder="Card Number"
                        className="w-full border-2 rounded-xl bg-base-100 block p-3 "
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        name=""
                        id=""
                        placeholder="Expiration date (MM / YY)"
                        className="border-2 rounded-xl bg-base-100 inline p-3 w-[49%] mr-[2%] "
                      />
                      <input
                        type="number"
                        name=""
                        id=""
                        placeholder="Security code"
                        className="border-2 rounded-xl bg-base-100 inline p-3  w-[49%] "
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Name on card"
                        className="border-2 rounded-xl bg-base-100 w-full block p-3 "
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <button className="bg-[#7194b3] w-full text-white hover:bg-[#213547] ">
                      Pay Now
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
        <div className="  border-y-2 border-r-2 border-gray-300 bg-base-300">
          <div className="card w-96 mt-[10%] mx-auto bg-base-100 shadow-xl image-full">
            <figure>
              <img src={img} alt="Shoes" className="w-full" />
            </figure>
            <div className="relative z-20 mx-auto space-y-2 text-white top-1/2">
              <h2 className="text-2xl text-center font-semibold">{name}</h2>
              <p> Cost: BDT.{price}</p>
              <p>Duration : 4 days</p>
            </div>
          </div>
          <div className=" border-2 border-black  my-10 w-1/2 mx-auto ">
            <p className="text-xl font-bold  ">
              Total Cost : BDT. {price} for 4 days <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
