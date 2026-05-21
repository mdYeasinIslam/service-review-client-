import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthProvider } from "../../Context/UserContext";
const SignIn = () => {
  const { signIn, google } = useContext(AuthProvider);
  const [error, setError] = useState("");
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [isGuestLogin, setIsGuestLogin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInAuth(email, password, form);
  };
  const signInAuth = (email, password, form) => {
    signIn(email, password)
      .then(() => {
        toast("You are successfully log-In");
        if (email?.includes("admin")) {
          navigate("/admin/services");
          form.reset();
          return;
        }
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((e) => {
        // console.error(e.message);
        setError(e.message);
      });
  };
  //google auth
  const googleAuth = () => {
    google()
      .then(() => {
        navigate(from, { replace: true });
        toast("You are logged in successfully");
        // console.log(user);
      })
      .catch((e) => setError(e.message));
  };

  const handleAdminChange = (e) => {
    setIsAdminLogin(e.target.checked);
    if (e.target.checked) setIsGuestLogin(false);
  };

  const handleGuestChange = (e) => {
    setIsGuestLogin(e.target.checked);
    if (e.target.checked) setIsAdminLogin(false);
  };
  return (
    <div className=" bg-black/50 h-screen">
      <div className="container mx-auto h-full flex flex-col lg:flex-row justify-center items-center gap-5">
        <div className="max-md:hidden w-full h-[30rem]">
          <img
            src="https://i.ibb.co.com/0jH2dFR3/document-management-system-concept-online-600nw-2314112797.jpg"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className=" w-full  shadow-2xl bg-base-100 rounded-md px-2 py-6">
          <div className="mt-4">
            <p className="text-2xl text-center">✈️</p>
            <h3 className="text-2xl text-center font-bold ">
              Log In your account
            </h3>
          </div>
          <form onSubmit={formHandler} className="space-y-4 mt-5">
            <div className="form-control">
              <input
                type="email"
                defaultValue={
                  (isAdminLogin && "admin@admin.com") ||
                  (isGuestLogin && "test@test.com") ||
                  ""
                }
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
                defaultValue={
                  (isAdminLogin && "aassdd") || (isGuestLogin && "aassdd") || ""
                }
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
              <Link to="/signUp" className="hover:underline">
                Don&lsquo;t have any account ?? Please Create an Account
              </Link>
            </p>
          </form>
          <div className="form-control flex flex-row items-center gap-1">
            <input
              type="checkbox"
              name="admin"
              checked={isAdminLogin}
              onChange={handleAdminChange}
              className="checkbox checkbox-primary"
            />
            <label className="label cursor-pointer">
              <span className="label-text">Login as Admin</span>
            </label>
          </div>
          <div className="form-control flex flex-row items-center gap-1">
            <input
              type="checkbox"
              name="guest"
              checked={isGuestLogin}
              onChange={handleGuestChange}
              className="checkbox checkbox-primary"
            />
            <label className="label cursor-pointer">
              <span className="label-text">Login as Guest User</span>
            </label>
          </div>

          <button
            onClick={googleAuth}
            className="w-full btn hover:border-white border border-primary mt-5"
          >
            Sign-In with GOOGLE <FcGoogle className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
