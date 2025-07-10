"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RiUserFollowFill, RiAwardLine } from "react-icons/ri";
import FollowerTabCard from "./FollowerTabCard";
import image from "@/public/assets/image";
import { Button } from "../ui/button";

type TabType = "popular" | "following" | "news";

const creators = [
  {
    name: "Maluda Tech",
    background: image.creatorbackground1,
    avatar: image.user1,
  },
  {
    name: "Juliet Macp",
    background: image.creatorbackground2,
    avatar: image.user2,
  },
  {
    name: "Mike Orr",
    background: image.creatorbackground3,
    avatar: image.user3,
  },
  {
    name: "Giada Mann",
    background: image.creatorbackground4,
    avatar: image.user4,
  },
  {
    name: "Belinda Rer",
    background: image.creatorbackground5,
    avatar: image.user5,
  },
  {
    name: "Karli Costa",
    background: image.creatorbackground6,
    avatar: image.user6,
  },
  {
    name: "Kim Carrey",
    background: image.creatorbackground7,
    avatar: image.user7,
  },
  {
    name: "Natalie Frost",
    background: image.creatorbackground8,
    avatar: image.user8,
  },
  {
    name: "Sara Wiemberland",
    background: image.creatorbackground9,
    avatar: image.user9,
  },
];

const tabs: {
  id: TabType;
  label: string;
  icon: React.ReactNode;
  data: typeof creators;
}[] = [
  {
    id: "popular",
    label: "Popular",
    icon: <RiUserFollowFill />,
    data: creators.slice(0, 6),
  },
  {
    id: "following",
    label: "Following",
    icon: <RiUserFollowFill />,
    data: creators.slice(3, 9),
  },
  {
    id: "news",
    label: "NoteWorthy",
    icon: <RiAwardLine />,
    data: creators.slice(0, 3),
  },
];

const FollowerTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("popular");

  return (
    <div className="w-full pt-36 px-6 md:px-12">
      {/* Title & Tabs */}
      <div className="body-container w-full flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h2 className="text-3xl font-bold text-center pb-4 md:pb-0">
            Top List Creators.
          </h2>
          <div className="flex gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ease-in-out cursor-pointer focus:outline-none hover:scale-105 hover:shadow-md ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tabs
            .find((tab) => tab.id === activeTab)
            ?.data.map((creator, i) => (
              <FollowerTabCard key={i} i={i} el={creator} />
            ))}
        </div>

        {/* Footer Links */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <Link href="#">
            <Button
              variant="default"
              className="px-6 py-6 text-lg rounded-full cursor-pointer"
            >
              Show me more
            </Button>
          </Link>
          <Link href="#">
            <Button
              variant="outline"
              className="px-6 py-6 text-lg rounded-full cursor-pointer"
            >
              Become author
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FollowerTab;
