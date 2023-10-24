import React from 'react';
import Navbar from '../pages/SharedPage/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/SharedPage/Footer/Footer';

const Secondary = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Secondary;