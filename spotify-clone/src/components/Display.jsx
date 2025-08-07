import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { artistData } from "../assets/assets";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isArtist = location.pathname.includes("artist");
  const artistId = isArtist ? location.pathname.slice(-1) : "";
  const bgColor = artistData[Number(artistId)]?.bgColor || "#121212";

  useEffect(() => {
    if (isArtist) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = `linear-gradient(#242424, #121212)`;
    }
  });
  return (
    <div
      ref={displayRef}
      className="w-full m-2 px-6 pt-4 rounded-lg bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default Display;
