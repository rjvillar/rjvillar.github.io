import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./contents/PlayerContents.jsx";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  return (
    <div className="h-screen bg-black">
      <div className="h-[8%]">
        <Navbar />
      </div>
      <div className="h-[82%] flex">
        <Sidebar />
        <Display />
      </div>
      <div className="h-[10%]">
        <Player />
      </div>
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
