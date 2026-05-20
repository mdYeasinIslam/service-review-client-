import { Outlet } from "react-router-dom";
import Footer from "../pages/SharedPage/Footer/Footer";
import NavbarCopy from "../pages/SharedPage/Navbar/NavbarCopy";

const Main = () => {
  return (
    <div>
      {/* <div className="absolute z-[1] w-full  text-white "> */}
        <NavbarCopy/>
      {/* </div> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
