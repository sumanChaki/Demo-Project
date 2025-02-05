import React from 'react';
import { Outlet } from "react-router-dom";
import Header from './Components/Common/Header';
import Footer from './Components/Footer';


function Layout() {
  return (
    <div>
      <Header />
      <div className="main-wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout