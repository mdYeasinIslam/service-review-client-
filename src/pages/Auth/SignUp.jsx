import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../Context/UserContext";
import { toast } from "react-toastify";
import ImageUpload from "../SharedPage/ImageUpload/ImageUpload";
const SignUp = () => {
  const { signUp, navControl, updateUser, imgUrl } = useContext(AuthProvider);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    // const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const profile = { displayName: name, photoURL: imgUrl };
    // console.log(profile);
    signUpAuth(email, password, form, profile);
  };
  const signUpAuth = (email, password, form, profile) => {
    signUp(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user)
        updateProfile(profile);
        form.reset();
        toast("Your account is created");
        navigate("/home");
      })
      .catch((e) => {
        // console.error(e);
        setError(e.message);
      });
  };
  const updateProfile = (profile) => {
    updateUser(profile)
      .then(() => {
        // console.log('profile updated successfully')
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  return (
    <div>
      <div className={`relative w-full h-[16rem] md:h-[20rem] bgImage `}>
        <div
          className={`absolute font-[cursive]  top-28 w-full ${navControl?'transition-style1  ':'transition-style2 z-[1]'} font-semibold text-center text-white`}
        >
          <span className="text-4xl md:text-6xl block font-bold mb-3">
            Account
          </span>
          <span className="text-xl md:text-2xl ">
            Please Create an Account
          </span>
        </div>
      </div>
      <div className="hero pt-10 bg-base-200 pb-12">
        <div className="card flex-shrink-0 w-full mx-auto md:w-[70%] lg:w-[50%]  shadow-2xl bg-base-100">
          <h3 className="text-2xl text-center font-bold mt-3">
            Create your Account
          </h3>
          <form onSubmit={formHandler} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Full Name:</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                name="photoURL"
                placeholder={imgUrl}
                className="input input-bordered mb-2" 
                readOnly
              />
              <ImageUpload />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <p>{error}</p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign-Up</button>
            </div>
            <p>
              Already have an account ?? <Link to="/signIn">Please Log-In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
