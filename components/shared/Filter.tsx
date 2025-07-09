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
} from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { Separator } from "../ui/separator";

const filterButtons = ["All NFTs", "Arts", "Music", "Sports", "Jewels"];

const initialFilterItems = [
  {
    name: "0.01 - 10 ETH",
    icon: <FaWallet />,
    active: true,
  },
  {
    name: "Images",
    icon: <FaImages />,
    active: false,
  },
  {
    name: "Videos",
    icon: <FaVideo />,
    active: false,
  },
  {
    name: "Musics",
    icon: <FaMusic />,
    active: false,
  },
  {
    name: "Verified",
    icon: <MdVerified />,
    active: true,
  },
];

const Filter: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All NFTs");
  const [filter, setFilter] = useState<boolean>(true);
  const [filterItems, setFilterItems] = useState(initialFilterItems);

  const toggleFilterItem = (index: number) => {
    setFilterItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, active: !item.active } : item
      )
    );
  };

  return (
    <div className="w-full">
      <div className="body-container w-full pt-36 px-6 md:px-12 flex flex-col gap-4">
        {/* Filter Buttons */}
        <div className="w-full flex justify-between items-center flex-col md:flex-row gap-6">
          <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-8">
            {filterButtons.map((button) => (
              <h1
                key={button}
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
              onClick={() => setFilter((prev) => !prev)}
              className="flex items-center gap-4 px-6 py-3 rounded-full bg-primary text-white cursor-pointer"
            >
              <FaFilter />
              <span>Filter</span>
              {filter ? <FaAngleDown /> : <FaAngleUp />}
            </div>
          </div>
        </div>

        {/* Filter Options */}
        {filter && (
          <div className="flex flex-col gap-4 w-full">
            <Separator className="mt-6" />
            <div className="w-full justify-center flex flex-wrap gap-4">
              {filterItems.map((item, index) => (
                <div
                  key={index}
                  className="p-4"
                  onClick={() => toggleFilterItem(index)}
                >
                  <div
                    className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer border transition-all ${
                      item.active
                        ? "border-primary text-primary"
                        : "text-foreground border-foreground"
                    }`}
                  >
                    <span
                      className={`${
                        item.name == "Verified" && "text-blue-500"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                    {item.active ? <AiFillCloseCircle /> : <TiTick />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
