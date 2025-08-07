import React, { useContext } from "react";
import { PlayerContext } from "../contents/PlayerContents";

const SongItem = ({ image, name, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);
  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[180px] p-2 p-x-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img
        className="rounded-lg w-full h-[175px] object-cover shadow-2xl/50"
        src={image}
        alt=""
      />
      <h1 className="font-bold mt-2 mb-1 hover:underline">{name}</h1>
      <p className="text-slate-200 text-sm opacity-75 hover:underline">
        {desc}
      </p>
    </div>
  );
};

export default SongItem;
