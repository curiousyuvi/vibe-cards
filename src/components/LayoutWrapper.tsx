import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import Navbar from "./Navbar";

const LayoutWrapper = () => {
  return (
    <div className="w-full h-full flex justify-center items-center p-4">
      <div className="w-full max-w-6xl h-full flex flex-col items-center rounded-2xl border border-black/10 overflow-hidden">
        <div className="w-full p-4">
          <Navbar />
        </div>
        <Breadcrumbs />
        {/* <div className="w-full h-screen px-4"> */}
        <div className="w-full h-screen overflow-y-auto p-4">
          <Outlet />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default LayoutWrapper;
