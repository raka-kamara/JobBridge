import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Shared/Footer';
import Navbar from '../components/Shared/Navbar';

const Main = () => {
    const location = useLocation();
    const excludeHF = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div>
           { excludeHF || <Navbar/>}
            <div className='min-h-[calc(100vh-180px)] '>
                <Outlet/>
            </div>
            { excludeHF || <Footer/>}
        </div>
    );
};

export default Main;