/** @format */

import React from "react";
import { Sidebar } from "../Sidebar";
import { Outlet } from "react-router-dom";

export interface RootInterface {}

const Root: React.FC<RootInterface> = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#8b7ffe] to-[#c1e3fd] flex items-center justify-center text-slate-800">
      <div className="h-full max-h-[90%] aspect-video flex gap-2 bg-[#fdf5ee] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-2xl shadow-xl p-2">
        <Sidebar />
        <div className="flex-1">
          <div className="w-full max-w-xl h-full mx-auto  px-2 py-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
