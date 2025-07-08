"use client";

import React, { useState } from "react";
import {
  FaFilter,
  FaAngleDown,
  FaAngleUp,
  FaWallet,
  FaMusic,
  FaVideo,
  FaImages,
  FaUserAlt,
} from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { Separator } from "../ui/separator";

const filterButtons = ["All NFTs", "Arts", "Music", "Sports", "Jewels"];

const Filter: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All NFTs");
  const [filter, setFilter] = useState<boolean>(true);
  const [image, setImage] = useState<boolean>(true);
  const [video, setVideo] = useState<boolean>(true);
  const [music, setMusic] = useState<boolean>(true);

  const toggleState = (
    setter: React.Dispatch<React.SetStateAction<boolean>>,
    state: boolean
  ) => setter(!state);

  return (
    <div className="w-full">
      <div className="body-container w-full pt-16 px-6 md:px-12 flex flex-col gap-4">
        <div className="w-full  flex justify-between items-center flex-col md:flex-row gap-6">
          <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-8">
            {filterButtons.map((button, index) => (
              <h1
                key={index}
                className={`rounded-full py-2 px-4 cursor-pointer text-lg transition-all ${
                  activeFilter === button
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:bg-accent"
                }`}
                onClick={() => setActiveFilter(button)}
              >
                {button}
              </h1>
            ))}
          </div>
          <div className="flex justify-center">
            <div
              onClick={() => toggleState(setFilter, filter)}
              className="flex items-center gap-4 px-6 py-3 rounded-full bg-primary text-white cursor-pointer"
            >
              <FaFilter />
              <span>Filter</span>
              {filter ? <FaAngleDown /> : <FaAngleUp />}
            </div>
          </div>
        </div>
        {filter && (
          <div className="flex flex-col gap-4">
            <Separator className="mt-6" />
            <div className="w-4/5 mx-auto flex flex-wrap gap-4">
              <div className="p-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-[var(--icons-color)] text-[var(--main-bg-color)] rounded-full cursor-pointer">
                  <FaWallet /> <span>10 ETH</span> <AiFillCloseCircle />
                </div>
              </div>

              <div className="p-4">
                <div
                  onClick={() => toggleState(setImage, image)}
                  className="flex items-center justify-between gap-2 px-4 py-2 border border-[var(--icons-color)] text-[var(--icons-color)] rounded-full cursor-pointer"
                >
                  <FaImages /> <small>Images</small>{" "}
                  {image ? <AiFillCloseCircle /> : <TiTick />}
                </div>
              </div>

              <div className="p-4">
                <div
                  onClick={() => toggleState(setVideo, video)}
                  className="flex items-center justify-between gap-2 px-4 py-2 border border-[var(--icons-color)] text-[var(--icons-color)] rounded-full cursor-pointer"
                >
                  <FaVideo /> <small>Videos</small>{" "}
                  {video ? <AiFillCloseCircle /> : <TiTick />}
                </div>
              </div>

              <div className="p-4">
                <div
                  onClick={() => toggleState(setMusic, music)}
                  className="flex items-center justify-between gap-2 px-4 py-2 border border-[var(--icons-color)] text-[var(--icons-color)] rounded-full cursor-pointer"
                >
                  <FaMusic /> <small>Musics</small>{" "}
                  {music ? <AiFillCloseCircle /> : <TiTick />}
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-[var(--icons-color)] text-[var(--main-bg-color)] rounded-full cursor-pointer">
                  <FaUserAlt /> <span>Verified</span> <MdVerified />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
