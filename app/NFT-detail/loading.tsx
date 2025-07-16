"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Upload,
  MoreVertical,
  Verified,
  Flag,
  Copy,
  ChevronDown,
  ChevronUp,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import clsx from "clsx";
import image from "@/public/assets/image";

interface Follower {
  background: StaticImageData;
  user: StaticImageData;
}

const tabs = ["Collectiables", "Created", "Liked", "Following", "Followers"];
const sortOptions = [
  "Created By Admin",
  "Most Appreciated",
  "Most Discussed",
  "Most Viewed",
];

const NFTSkeleton = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {Array.from({ length: 4 }).map((_, i) => (
      <div key={i} className="space-y-2">
        <Skeleton className="w-full h-40 rounded-xl" />
        <Skeleton className="w-1/2 h-4" />
        <Skeleton className="w-1/3 h-4" />
      </div>
    ))}
  </div>
);

const AuthorProfile = () => {
  const [activeTab, setActiveTab] = useState("Collectiables");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
  const [shareOpen, setShareOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const nftImages: string[] = [
    image.nft_image_1,
    image.nft_image_2,
    image.nft_image_3,
  ] as unknown as string[];

  const followers: Follower[] = [
    { background: image.creatorbackground1, user: image.user1 },
    { background: image.creatorbackground2, user: image.user2 },
    { background: image.creatorbackground3, user: image.user3 },
  ];

  const copyAddress = () => {
    navigator.clipboard.writeText("0x829BD824B03D092293333..A830");
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-start md:gap-6">
        <Image
          src={image.nft_image_1}
          alt="Profile"
          width={200}
          height={200}
          className="rounded-xl"
        />

        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            Dony Herrera <Verified className="text-blue-500 w-5 h-5" />
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm font-mono text-muted-foreground truncate">
              0x829BD824B03D092293333..A830
            </span>
            <Copy onClick={copyAddress} className="w-4 h-4 cursor-pointer" />
          </div>
          <p className="text-muted-foreground">
            Punk #4786 / OG Cryptopunk Collector, hoarder of NFTs.
          </p>
          <div className="flex gap-3 text-muted-foreground">
            <Facebook className="w-5 h-5 cursor-pointer" />
            <Instagram className="w-5 h-5 cursor-pointer" />
            <Linkedin className="w-5 h-5 cursor-pointer" />
            <Youtube className="w-5 h-5 cursor-pointer" />
          </div>
        </div>

        <div className="flex gap-2 mt-4 md:mt-0 items-center">
          <Button>Follow</Button>
          <Upload
            onClick={() => setShareOpen(!shareOpen)}
            className="cursor-pointer"
          />
          <MoreVertical
            onClick={() => setReportOpen(!reportOpen)}
            className="cursor-pointer"
          />
        </div>
      </div>

      {shareOpen && (
        <div className="bg-muted p-4 rounded-md flex gap-4">
          <Facebook /> Facebook
          <Instagram /> Instagram
          <Linkedin /> LinkedIn
          <Youtube /> YouTube
        </div>
      )}

      {reportOpen && (
        <div className="bg-destructive/10 p-2 rounded flex items-center gap-2 text-destructive">
          <Flag /> Report abuse
        </div>
      )}

      <div className="flex flex-wrap gap-3 items-center justify-between">
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={clsx(
                "px-4 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 ease-in-out hover:scale-105",
                activeTab === tab
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {tab}
            </Button>
          ))}
        </div>

        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1 px-3 py-1 border rounded"
          >
            {selectedSort} {dropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg z-10 w-52">
              {sortOptions.map((option) => (
                <div
                  key={option}
                  className="flex justify-between items-center px-4 py-2 hover:bg-muted cursor-pointer"
                  onClick={() => {
                    setSelectedSort(option);
                    setDropdownOpen(false);
                  }}
                >
                  <span>{option}</span>
                  {selectedSort === option && <Check className="w-4 h-4" />}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      {loading ? (
        <NFTSkeleton />
      ) : activeTab === "Collectiables" ? (
        <NFTSkeleton />
      ) : activeTab === "Created" ? (
        <NFTSkeleton />
      ) : activeTab === "Liked" ? (
        <NFTSkeleton />
      ) : activeTab === "Following" || activeTab === "Followers" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {followers.map((f, i) => (
            <div key={i} className="relative w-full">
              <Image
                src={f.background}
                alt="background"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <Image
                src={f.user}
                alt="user"
                width={60}
                height={60}
                className="absolute bottom-2 left-2 rounded-full border-2 border-white"
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default AuthorProfile;
