"use client";

import React from "react";
import AudioCard from "./AudioCard";
import AudioCardSmall from "./AudioCardSmall";

export const AudioLive: React.FC = () => {
  return (
    <div className="w-full mt-36">
      <div className="w-[90%] md:w-[80%] mx-auto py-8 md:py-32 grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-8">
        {/* Left section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AudioCard />
          <AudioCard />
        </div>

        {/* Right section */}
        <div className="grid gap-6 pt-2">
          <AudioCardSmall />
          <AudioCardSmall />
          <AudioCardSmall />
        </div>
      </div>
    </div>
  );
};
