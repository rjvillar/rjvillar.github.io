import React, { useState, useRef } from "react";
import { artistData } from "../assets/assets";
import ArtistItem from "./ArtistItem";
import { songsData } from "../assets/assets";
import SongItem from "./SongItem";
import { assets } from "../assets/assets";

function DisplayHome() {
  const [isHovering, setIsHovering] = useState(false);

  const [canScrollLeftSongs, setCanScrollLeftSongs] = useState(false);
  const [canScrollRightSongs, setCanScrollRightSongs] = useState(true);
  const scrollRefSongs = useRef(null);

  const [canScrollLeftArtists, setCanScrollLeftArtists] = useState(false);
  const [canScrollRightArtists, setCanScrollRightArtists] = useState(true);
  const scrollRefArtists = useRef(null);

  const checkScrollPositionSongs = () => {
    const element = scrollRefSongs.current;
    if (element) {
      setCanScrollLeftSongs(element.scrollLeft > 0);
      setCanScrollRightSongs(
        element.scrollLeft < element.scrollWidth - element.clientWidth - 1
      );
    }
  };

  const checkScrollPositionArtists = () => {
    const element = scrollRefArtists.current;
    if (element) {
      setCanScrollLeftArtists(element.scrollLeft > 0);
      setCanScrollRightArtists(
        element.scrollLeft < element.scrollWidth - element.clientWidth - 1
      );
    }
  };

  const scrollLeftSongs = () => {
    if (scrollRefSongs.current) {
      scrollRefSongs.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
      setTimeout(checkScrollPositionSongs, 300);
    }
  };

  const scrollRightSongs = () => {
    if (scrollRefSongs.current) {
      scrollRefSongs.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
      setTimeout(checkScrollPositionSongs, 300);
    }
  };

  const scrollLeftArtists = () => {
    if (scrollRefArtists.current) {
      scrollRefArtists.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
      setTimeout(checkScrollPositionArtists, 300);
    }
  };

  const scrollRightArtists = () => {
    if (scrollRefArtists.current) {
      scrollRefArtists.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
      setTimeout(checkScrollPositionArtists, 300);
    }
  };

  return (
    <>
      <div className="mb-4">
        <h1 className="mt-1 ml-3 mb-3 font-bold text-2xl">Trending songs</h1>
        <div
          className="relative group"
          onMouseEnter={() => {
            setIsHovering(true);
            checkScrollPositionSongs();
          }}
          onMouseLeave={() => setIsHovering(false)}
        >
          {canScrollLeftSongs && (
            <button
              onClick={scrollLeftSongs}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#121212] hover:bg-[#242424] bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg cursor-pointer"
            >
              <img className="w-4 h-4" src={assets.arrow_left} alt="Previous" />
            </button>
          )}
          {canScrollRightSongs && (
            <button
              onClick={scrollRightSongs}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#121212] hover:bg-[#242424] bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg cursor-pointer"
            >
              <img className="w-4 h-4" src={assets.arrow_right} alt="Next" />
            </button>
          )}

          <div
            ref={scrollRefSongs}
            className="flex overflow-hidden scroll-smooth"
            onScroll={checkScrollPositionSongs}
          >
            {songsData.map((item, index) => (
              <SongItem
                key={index}
                name={item.name}
                desc={item.artist}
                id={item.id}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h1 className="mt-15 ml-3 mb-3 font-bold text-2xl hover:underline cursor-pointer">
          Popular artists
        </h1>
        <div
          className="relative group"
          onMouseEnter={() => {
            setIsHovering(true);
            checkScrollPositionArtists();
          }}
          onMouseLeave={() => setIsHovering(false)}
        >
          {canScrollLeftArtists && (
            <button
              onClick={scrollLeftArtists}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#121212] hover:bg-[#242424] bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg cursor-pointer"
            >
              <img className="w-4 h-4" src={assets.arrow_left} alt="Previous" />
            </button>
          )}
          {canScrollRightArtists && (
            <button
              onClick={scrollRightArtists}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#121212] hover:bg-[#242424] bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg cursor-pointer"
            >
              <img className="w-4 h-4" src={assets.arrow_right} alt="Next" />
            </button>
          )}

          <div
            ref={scrollRefArtists}
            className="flex overflow-hidden scroll-smooth"
            onScroll={checkScrollPositionArtists}
          >
            {artistData.map((item, index) => (
              <ArtistItem
                key={index}
                name={item.name}
                desc={item.type}
                id={item.id}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayHome;
