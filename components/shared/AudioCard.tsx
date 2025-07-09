"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";
// import LikeProfile from "../../LikeProfile/LikeProfile";
import image from "@/public/assets/image";

const AudioCard: React.FC = () => {
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);

  return (
    <div className="relative w-full max-w-md rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      {/* Overlay Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image.creatorbackground10}
          alt="background"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-5 grid-rows-[repeat(6,_4rem)] gap-4 p-4 bg-white/80 backdrop-blur-md rounded-3xl">
        {/* Like + Time */}
        <div className="col-span-5 row-span-1 flex justify-between items-center">
          <div
            onClick={() => setLike(!like)}
            className="bg-gray-200 text-gray-800 flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-300"
          >
            {like ? (
              <AiFillHeart className="text-red-500 text-2xl" />
            ) : (
              <AiOutlineHeart className="text-gray-600 text-2xl" />
            )}
            <span className="text-sm font-semibold">24</span>
          </div>

          <div className="bg-black text-white px-6 py-2 skew-x-12 rounded-bl-xl">
            <div className="-skew-x-12 text-center">
              <small className="block font-medium text-xs">
                Remaining time
              </small>
              <h5 className="text-lg font-semibold">3h : 15m : 20s</h5>
            </div>
          </div>
        </div>

        {/* Music Player */}
        <div className="col-span-5 row-start-4 row-end-5 flex items-center gap-6 px-8 z-10">
          <Image
            src={image.musiceWave}
            alt="music wave"
            width={200}
            height={40}
            className="h-10 object-contain"
          />
          <div
            onClick={() => setPlay(!play)}
            className="bg-gray-800 text-white rounded-full p-4 cursor-pointer hover:bg-gray-700"
          >
            {play ? (
              <TbPlayerPause className="text-2xl" />
            ) : (
              <TbPlayerPlay className="text-2xl" />
            )}
          </div>
        </div>

        {/* Details */}
        <div className="col-span-5 row-start-5 row-end-7 flex justify-between items-center bg-white rounded-t-2xl px-4 py-4 shadow-inner">
          <div>
            <h4 className="text-md font-semibold mb-1">NFT music #1123</h4>
            <div className="border border-gray-300 rounded px-3 py-1 text-sm inline-flex gap-2 items-center">
              <small className="bg-gray-800 text-white px-2 py-1 rounded">
                Price
              </small>
              <p className="font-bold">$3,221.33</p>
            </div>
          </div>
          <div className="text-right">
            {/* <LikeProfile /> */}
            <small className="text-xs mt-2 block">24 in stock</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioCard;
