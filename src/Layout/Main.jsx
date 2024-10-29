import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer';
import Navbar from '../components/Shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-[calc(100vh-180px)] '>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;