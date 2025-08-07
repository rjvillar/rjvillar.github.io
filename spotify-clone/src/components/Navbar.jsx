import React from "react";
import { assets } from "../assets/assets";

function Navbar() {
  return (
    <>
      <div className="w-full flex items-center font-semibold">
        <div className="ml-7 flex items-center mt-2">
          <img className="w-8" src={assets.spotify} alt="" />
        </div>
        <div className="flex items-center gap-2 mt-2 ml-7">
          <div className="bg-[#1f1f1f] rounded-full p-2.5 cursor-pointer">
            <img className="w-7" src={assets.home_icon} alt="" />
          </div>
          {/* Large screens */}
          <div className="hidden lg:flex w-[475px] items-center gap-3 bg-[#1f1f1f] rounded-full p-3 cursor-pointer">
            <img className="w-6 opacity-75" src={assets.search_icon} alt="" />
            <input
              type="text"
              placeholder="What do you want to play?"
              className="bg-transparent text-white font-regular opacity-75 outline-none flex-1 placeholder-white placeholder-opacity-75"
            />
            <div className="w-[1px] h-6 bg-white opacity-60"></div>
            <img className="w-6 opacity-75" src={assets.library_icon} alt="" />
          </div>
          {/* Small and medium screens */}
          <div className="lg:hidden flex items-center gap-4">
            <div className="bg-[#1f1f1f] rounded-full p-2.5 cursor-pointer">
              <img className="w-6 opacity-75" src={assets.search_icon} alt="" />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-2.5 mt-2 ml-auto">
          <p className="text-white font-bold text-[15px] cursor-pointer opacity-75 hover:opacity-100">
            Premium
          </p>
          <p className="text-white font-bold text-[15px] cursor-pointer opacity-75 hover:opacity-100">
            Support
          </p>
          <p className="text-white font-bold text-[15px] cursor-pointer opacity-75 hover:opacity-100">
            Download
          </p>
          <div className="w-[1.5px] h-5 bg-white ml-2 mr-3"></div>
          <div className="flex items-center gap-8 cursor-pointer opacity-75 hover:opacity-100">
            <img
              className="w-3.5 mt-1 -mr-6"
              src={assets.install_icon}
              alt=""
            />
            <p className="text-white text-[13px]">Install App</p>
            <p className="text-white text-[13px] cursor-pointer">Sign up</p>
          </div>
          <button className="bg-white text-black font-bold w-27 p-3 text-center rounded-full">
            Log in
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
