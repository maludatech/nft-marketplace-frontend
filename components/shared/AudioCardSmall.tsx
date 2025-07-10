"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";
import image from "@/public/assets/image";
import LikeProfile from "./LikeProfile";

const AudioCardSmall: React.FC = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="w-full">
      <div
        className="grid grid-cols-[2fr_5fr_1fr] items-center gap-5 bg-gray-100 dark:bg-gray-800 p-4 rounded-xl h-32 cursor-pointer transition-shadow hover:shadow-md"
        onClick={() => setPlay((prev) => !prev)}
      >
        {/* Image */}
        <Image
          src={image.creatorbackground1}
          alt="music"
          width={100}
          height={100}
          className="rounded-md object-cover h-full w-full"
        />

        {/* Info */}
        <div className="flex flex-col justify-center gap-2">
          <h4 className="text-base font-semibold text-gray-800 dark:text-white">
            NFT music #1142
          </h4>
          <div className="flex items-center gap-4">
            <LikeProfile />
            <div className="border border-gray-400 text-sm font-semibold px-2 py-1 rounded w-fit">
              <small className="bg-gray-900 text-white px-2 py-0.5 rounded text-xs mr-2">
                Price
              </small>
              <span>1.00 ETH</span>
            </div>
          </div>
        </div>

        {/* Play Button */}
        <div className="text-2xl bg-gray-900 text-white p-3 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
          {play ? <TbPlayerPause /> : <TbPlayerPlay />}
        </div>
      </div>
    </div>
  );
};

export default AudioCardSmall;
