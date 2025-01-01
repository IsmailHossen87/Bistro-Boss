import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const MainLayOut = () => {
    const location = useLocation()
    const noheaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div className='container mx-auto'>
           {noheaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noheaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayOut;