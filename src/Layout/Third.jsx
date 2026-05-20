import { Outlet } from "react-router-dom";

const Third = () => {
  return (
    <div>
      {/* <div className="absolute z-[1] w-full text-white">
        <NavbarCopy />
      </div> */}
      <Outlet />
    </div>
  );
};

export default Third;
