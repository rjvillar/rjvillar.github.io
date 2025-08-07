import React from "react";
import { useNavigate } from "react-router-dom";

const ArtistItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/artist/${id}`)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img
        className="rounded-full w-[180px] h-[155px] object-cover shadow-2xl/50"
        src={image}
        alt=""
      />
      <p className="font-bold mt-2 mb-1 hover:underline">{name}</p>
      <p className="text-sm text-slate-200 opacity-75">{desc}</p>
    </div>
  );
};

export default ArtistItem;
