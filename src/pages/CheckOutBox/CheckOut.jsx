import React, { useContext, useEffect, useState } from "react";
import baseImg from "../../assets/logo7 (1).png";
import { useLoaderData, Link } from "react-router-dom";
import { toast } from "react-toastify";
import TouristInfo from "./TouristInfo";
import { AuthProvider } from "../../Context/UserContext";
import { useAxiosPublic } from "../../hooks/useAxiosPublic";

const CheckOut = () => {
  const servicedata = useLoaderData();
  const { user } = useContext(AuthProvider);
  const [touristDetails, setTouristDetails] = useState([]);
  const [paymentDiv, setPaymentDiv] = useState(false);
  const [infoSubmitted, setInfoSubmitted] = useState(false);
  const { name, price, img, _id } = servicedata;
  const axiosPublic =useAxiosPublic()
  // console.log(servicedata)
  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const state = form.state.value;
    const city = form.city.value;
    const address = form.address.value;
    const number = form.contact.value;
    const email = form.email.value;
    const touristInfo = {
      placeId: _id,
      name,
      state,
      city,
      address,
      email,
      number,
    };
    // console.log(touristInfo);
    fetch(`https://service-review-server-pink.vercel.app/tourist-Info`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(touristInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.status) {
          toast(data.message);
          setInfoSubmitted(data.status);
        } else {
          toast(data.message);
          setInfoSubmitted(data.status);
        }
        form.reset();
      });
  };
  useEffect(() => {
    // fetch("https://service-review-server-pink.vercel.app/tourist-Info")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const filter = data.filter((d) => d.placeId == _id);
    //     // console.log(filter);
    //     setTouristDetails(filter);
    //   });
    fetchData()
  }, [infoSubmitted]);
   const fetchData = async() => {
    const res = await axiosPublic.get('/tourist-Info')
    console.log(res.data)
    if (res.data) {
      setServices(res.data)
    }
  }
  // console.log(infoSubmitted);
  const deleteInfo = (id) => {
    fetch(`https://service-review-server-pink.vercel.app/tourist-Info/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setInfoSubmitted(!infoSubmitted);
        toast(data.message);
      });
  };
  return (
    <div>
      <figure className="w-full bg-[#213547] md:text-center">
        <img src={baseImg} alt="" className="h-28 mx-auto" />
      </figure>

      {/* <hr className="my-5 border-2 bg-[#213547] " /> */}

      <div className="md:grid grid-cols-2 py-10 space-x-3">
        <div className="md:grid justify-end border-y-2 border-r-2 rounded-xl border-gray-300 ">
          <div className="w-[95%] mx-auto lg:w-full ">
            {infoSubmitted ? (
              <div className="relative top-20 font-bold text-xl">
                <p>
                  Your Information is submitted for this package. <br />
                  Please wait untill we called...
                </p>
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
                      className="w-full border-2 rounded-xl bg-base-100  p-3 "
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
                      className="border-2 rounded-xl bg-base-100  p-3  w-[49%] "
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
                      type="number"
                      name="contact"
                      id=""
                      placeholder="Your mobile number"
                      className="border-2 rounded-xl bg-base-100 w-full block p-3 "
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="email"
                      id=""
                      defaultValue={user?.email}
                      className="border-2 rounded-xl bg-base-100 w-full block p-3 "
                      readOnly
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
                <form className="w-[95%] mx-auto lg:w-full ">
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
        <div className="w-[96%] mx-auto md:w-full border-y-2 border-r-2 border-gray-300 rounded-xl bg-base-300 py-8">
          <div className="card w-[90%]  md:w-96 mx-auto bg-base-100 shadow-xl image-full">
            <figure className="w-full">
              <img src={img} alt={name} className="" />
            </figure>
            <div className="relative z-20 mx-auto space-y-2 text-white top-10  lg:top-1/2">
              <h2 className="text-2xl text-center font-semibold">{name}</h2>
              <p> Cost: BDT.{price}</p>
              <p>Duration : 4 days</p>
            </div>
          </div>
          <div className=" border-2 border-black w-3/4  my-10 lg:w-1/2 px-2 py-5 mx-auto ">
            <p className="text-xl font-bold  ">
              Total Cost : BDT. {price} for 4 days <br />
            </p>
          </div>
          {touristDetails.length > 0 && (
            <div className="w-[90%] lg:w-1/2 mx-auto font-semibold text-xl border-2 border-dotted border-black p-4 rounded-xl">
              {touristDetails.map((tDetails) => (
                <TouristInfo key={tDetails._id} tDetails={tDetails} />
              ))}

              <div
                onClick={() => deleteInfo(_id)}
                className="w-1/2 mx-auto mt-10 "
              >
                <button className="btn hover:bg-[#213547] hover:text-white">
                  {" "}
                  Delete Your Info
                </button>
              </div>
            </div>
          )}

          <div className="w-1/2 mx-auto my-10 text-center ">
            <Link to="/services">
              <button className="btn hover:bg-[#213547] hover:text-white">
                Purchase another one
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
