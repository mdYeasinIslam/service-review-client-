import React from "react";
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
import Myreviews from "../pages/MyReviews/Myreviews";
import MyReviews from "../pages/MyReviews/Myreviews";
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
      ],
    },
    {
      path: "/",
      element: <Secondary />,
      children: [
        {
          path: "/services",
          element: <Services />,
        },
        {
          path:'/services/:id',
          element:<ServiceDetails/>,
          loader:({params})=> fetch(`http://localhost:3000/services/${params.id}`)
        },
        {
          path: "/blog",
          element:<PrivateRoot> <Blog /></PrivateRoot>
        },
        {
          path:'/my-reviews',
          element:<PrivateRoot><MyReviews/></PrivateRoot>
        }
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
