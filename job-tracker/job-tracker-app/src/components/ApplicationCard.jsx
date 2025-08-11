import React from "react";
import { EmojiProvider, Emoji } from "react-apple-emojis";
import emojiData from "react-apple-emojis/src/data.json";
import AnimatedNumber from "./AnimatedNumber";

function ApplicationCard() {
  return (
    <div className="w-full sm:aspect-square md:aspect-auto bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl p-5 sm:p-4 md:p-5 flex flex-col items-start sm:justify-between text-[#193948] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] transition-transform will-change-transform hover:-translate-y-0.5">
      <p className="text-[.8rem] leading-none">
        <EmojiProvider data={emojiData}>
          <Emoji
            name="page facing up"
            className="inline-block w-3 mr-1.5 mb-1"
          />
        </EmojiProvider>
        JOBS APPLIED
      </p>
      <p className="font-bold leading-none text-[3rem] sm:text-5xl md:text-[4rem]">
        <AnimatedNumber value={205} />
      </p>
    </div>
  );
}

export default ApplicationCard;
