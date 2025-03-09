import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Secondary from "../Layout/Secondary";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Third from "../Layout/Third";
import Blog from "../pages/Blog/Blog";
import PrivateRoot from "./PrivateRoot";
import ServiceDetails from "../pages/Services/ServiceDetails";
import AddServices from "../pages/Add-Services/AddServices";
import Details from "../pages/Home/Display-services/Details";
import Profile from "../pages/Profile/Profile";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import CheckOut from "../pages/CheckOutBox/CheckOut";
import MyReviews from "../pages/MyReviews/MyReviews";
const Root = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/home/:id",
          element: <Details />,
          loader: ({ params }) =>
            fetch(
              `https://service-review-server-pink.vercel.app/custom-service/${params.id}`
            ),
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/services/:id",
          element: <ServiceDetails />,
          loader: ({ params }) =>
            fetch(
              `https://service-review-server-pink.vercel.app/services/${params.id}`
            ),
        },
        {
          path: "/blog",
          element: (
            <PrivateRoot>
              {" "}
              <Blog />
            </PrivateRoot>
          ),
        },
        {
          path: "/my-reviews",
          element: (
            <PrivateRoot>
              <MyReviews/>
            </PrivateRoot>
          ),
        },
        {
          path: "/add-service",
          element: (
            <PrivateRoot>
              <AddServices />
            </PrivateRoot>
          ),
        },
        {
          path: "/profile",
          element: (
            <PrivateRoot>
              <Profile />
            </PrivateRoot>
          ),
        },
        {
          path: "/services/shopping-cart/:id",
          element: (
            <PrivateRoot>
              <ShoppingCart />
            </PrivateRoot>
          ),
        },
      ],
    },
    {
      path: "/",
      element: <Secondary />,
      children: [
        {
          path: "/services/check-out/:id",
          element: (
            <PrivateRoot>
              <CheckOut />
            </PrivateRoot>
          ),
          loader: ({ params }) =>
            fetch(
              `https://service-review-server-pink.vercel.app/services/${params.id}`
            ),
        },
      ],
    },
    {
      path: "/",
      element: <Third />,
      children: [
        {
          path: "/signIn",
          element: <SignIn />,
        },
        {
          path: "/signUp",
          element: <SignUp />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Root;
