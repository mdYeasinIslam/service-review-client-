import React from 'react';
import Navbar from '../pages/SharedPage/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/SharedPage/Footer/Footer';

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