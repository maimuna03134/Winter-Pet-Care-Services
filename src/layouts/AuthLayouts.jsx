import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import MyContainer from '../components/container/MyContainer';
import Footer from '../components/Footer';

const AuthLayouts = () => {
    return (
      <div className="bg-[#ecf2ff]">
        <header>
          <Navbar></Navbar>
        </header>
        <MyContainer>
          <main className='my-10'>
            <Outlet></Outlet>
          </main>
            </MyContainer>
            <Footer></Footer>
      </div>
    );
};

export default AuthLayouts;