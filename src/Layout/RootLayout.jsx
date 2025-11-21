import React from "react";
import { Outlet } from "react-router";
import Footer from "../Pages/Shared/Foooter/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[#EAECED] w-11/12">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
