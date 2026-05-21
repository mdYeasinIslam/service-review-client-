import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";
import Main from "../Layout/Main";
import Secondary from "../Layout/Secondary";
import Third from "../Layout/Third";
import AboutPage from "../pages/About/AboutPage";
import AddServicePanel from "../pages/Admin/components/AddServicePanel";
import Overview from "../pages/Admin/components/Overview";
import ServicesPanel from "../pages/Admin/components/ServicesPanel";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Blog from "../pages/Blog/Blog";
import CheckOut from "../pages/CheckOutBox/CheckOut";
import Contact from "../pages/contact/Contact";
import Details from "../pages/Home/Display-services/Details";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import ServiceDetails from "../pages/Services/ServiceDetails";
import Services from "../pages/Services/Services";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import AdminProtectedRoot from "./AdminProtectedRoot";
import PrivateRoot from "./PrivateRoot";
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
          path: "/custom-package/:id",
          element: (
            <PrivateRoot>
              <Details />
            </PrivateRoot>
          ),
          loader: ({ params }) =>
            fetch(
              `https://adventa-server.vercel.app/custom-service/${params.id}`,
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
            fetch(`https://adventa-server.vercel.app/services/${params.id}`),
        },

        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/custom-packages",
          element: <Services />,
        },
        {
          path: '/contact',
          element:<Contact/>
        },
        // {
        //   path: "/my-reviews",
        //   element: (
        //     <PrivateRoot>
        //       <MyReviews />
        //     </PrivateRoot>
        //   ),
        // },
        {
          path: '/about',
          element:<AboutPage/>
        },
        // {
        //   path: "/add-service",
        //   element: (
        //     <PrivateRoot>
        //       <AddServices />
        //     </PrivateRoot>
        //   ),
        // },
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
            fetch(`https://adventa-server.vercel.app/services/${params.id}`),
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
    {
      path: "/admin",
      element: (
        <PrivateRoot>
          <AdminLayout />
        </PrivateRoot>
      ),
      children: [
        {
          path: "/admin",
          element: (
            <AdminProtectedRoot>
              <Overview />
            </AdminProtectedRoot>
          ),
        },
        {
          path: "/admin/overview",
          element: (
            <AdminProtectedRoot>
              <Overview />
            </AdminProtectedRoot>
          ),
        },
        {
          path: "/admin/services",
          element: (
            <AdminProtectedRoot>
              <ServicesPanel />
            </AdminProtectedRoot>
          ),
        },
        {
          path: "/admin/add-service",
          element: (
            <AdminProtectedRoot>
              <AddServicePanel />
            </AdminProtectedRoot>
          ),
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
