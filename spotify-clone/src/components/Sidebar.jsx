import React from "react";
import { assets } from "../assets/assets";

export const Sidebar = () => {
  return (
    <div className="w-[30%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-full rounded-lg">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <p className="font-bold">Your Library</p>
          </div>
          <div className="flex items-center">
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded-lg font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1 className="font-bold">Create your first playlist</h1>
          <p className="font-regular">It's easy, we'll help you</p>
          <button className="px-4 py-1.5 bg-white font-semibold text-[15px] text-black rounded-full mt-4">
            Create playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded-lg font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
          <h1 className="font-bold">Let's find some podcasts to follow</h1>
          <p className="font-regular">We'll keep you updated on new episodes</p>
          <button className="px-4 py-1.5 bg-white font-semibold text-[15px] text-black rounded-full mt-4">
            Browse podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
