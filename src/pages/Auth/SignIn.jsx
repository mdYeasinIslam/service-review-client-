import React, { useContext, useState } from "react";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthProvider } from "../../Context/UserContext";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
const SignIn = () => {
  const { signIn, google,navControl } = useContext(AuthProvider);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";
  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
    signInAuth(email, password, form);
  };
  const signInAuth = (email, password, form) => {
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user)
        form.reset();
        navigate(from, { replace: true });
        toast("You are successfully log-In");
      })
      .catch((e) => {
        console.error(e.message);
        setError(e.message);
      });
  };
  //google auth
  const googleAuth = () => {
    google()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((e) => setError(e.message));
  };
  return (
    <div>
      <div className={`relative w-full h-[16rem] md:h-[20rem] bgImage `}>
        <div className={`absolute font-[cursive]  top-28 w-full ${navControl?'transition-style1  ':'transition-style2 z-[1]'} font-semibold text-center text-white`}>
          <span className="text-4xl md:text-6xl block font-bold mb-3">Account</span>
          <span className="text-xl md:text-2xl ">
            Please Log-In or Create an Account
          </span>
         
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200 ">
 
          <div className="card flex-shrink-0 w-[80%] md:w-[70%] lg:w-[50%]  shadow-2xl bg-base-100">
            <h3 className="text-2xl text-center font-bold mt-4">Log-In Now</h3>
            <form onSubmit={formHandler} className="card-body">
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
                <p className="text-red-700">{error}</p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                Don't have any account ??{" "}
                <Link to="/signUp">Please Create an Account</Link>
              </p>
            </form>
            <button
              onClick={googleAuth}
              className="btn btn-ghost border border-primary"
            >
              Sign-In with <FcGoogle className="w-6 h-6" />
            </button>
          </div>
      </div>
    </div>
  );
};

export default SignIn;
