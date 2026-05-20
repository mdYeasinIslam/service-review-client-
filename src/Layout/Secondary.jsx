import { Outlet } from 'react-router-dom';

const Secondary = () => {
    return (
        <div>
          {/* <div className='bg-[#213547] w-full text-white'>
          <Navbar/>
          </div> */} 
            <Outlet/>
       
        </div>
    );
};

export default Secondary;