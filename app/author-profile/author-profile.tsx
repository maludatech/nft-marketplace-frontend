"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Verified,
  Flag,
  Copy,
  ChevronDown,
  ChevronUp,
  Check,
  MoreVertical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import clsx from "clsx";
import image from "@/public/assets/image";

interface Follower {
  background: StaticImageData;
  user: StaticImageData;
}

const tabs = ["Collectibles", "Created", "Liked", "Following", "Followers"];
const sortOptions = [
  "Created By Admin",
  "Most Appreciated",
  "Most Discussed",
  "Most Viewed",
];

const NFTGrid = ({ items }: { items: StaticImageData[] }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {items.map((img, i) => (
      <Image
        key={i}
        src={img}
        alt={`NFT ${i}`}
        width={200}
        height={200}
        className="rounded-xl"
      />
    ))}
  </div>
);

const FollowerCard = ({ el }: { el: Follower }) => (
  <div className="relative w-full">
    <Image
      src={el.background}
      alt="Follower background"
      width={300}
      height={200}
      className="rounded-lg"
    />
    <Image
      src={el.user}
      alt="Follower avatar"
      width={60}
      height={60}
      className="absolute bottom-2 left-2 rounded-full border-2 border-white"
    />
  </div>
);

const AuthorProfile = () => {
  const [activeTab, setActiveTab] = useState("Collectibles");
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
  const [reportOpen, setReportOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const nftImages: StaticImageData[] = [
    image.nft_image_4,
    image.nft_image_5,
    image.nft_image_6,
  ];

  const followers: Follower[] = [
    { background: image.creatorbackground1, user: image.user1 },
    { background: image.creatorbackground2, user: image.user2 },
    { background: image.creatorbackground3, user: image.user3 },
  ];

  const copyAddress = () => {
    navigator.clipboard.writeText("0x829BD824B03D092293333..A830");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="pt-32 pb-12 px-6 md:px-12 w-full">
      <div className="body-container flex flex-col gap-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-6">
          <Image
            src={image.nft_image_1}
            alt="Profile"
            width={200}
            height={200}
            className="rounded-xl"
          />

          <div className="flex flex-1 flex-col gap-2.5">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              Dony Herrera <Verified className="text-blue-500 w-5 h-5" />
            </h2>

            <div className="flex items-center gap-2">
              <span className="text-sm font-mono text-muted-foreground truncate">
                0x829BD824B03D092293333..A830
              </span>
              <Copy onClick={copyAddress} className="w-4 h-4 cursor-pointer" />
              {copied && (
                <span className="text-xs text-green-500">Copied!</span>
              )}
            </div>

            <p className="text-muted-foreground">
              Punk #4786 / OG Cryptopunk Collector, hoarder of NFTs. Contributor
              @ether_cards.
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
            <MoreVertical
              onClick={() => setReportOpen(!reportOpen)}
              className="cursor-pointer"
            />
          </div>
        </div>

        {reportOpen && (
          <div className="bg-destructive/10 p-2 rounded flex items-center gap-2 text-destructive cursor-pointer">
            <Flag /> Report abuse
          </div>
        )}

        <div className="flex flex-wrap gap-3 items-center justify-between">
          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                variant={activeTab === tab ? "default" : "outline"}
                className="rounded-full text-sm"
              >
                {tab}
              </Button>
            ))}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-1">
                {selectedSort}
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              {sortOptions.map((option) => (
                <DropdownMenuItem
                  key={option}
                  className="flex justify-between items-center"
                  onClick={() => setSelectedSort(option)}
                >
                  <span>{option}</span>
                  {selectedSort === option && <Check className="w-4 h-4" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {activeTab === "Collectibles" && <NFTGrid items={nftImages} />}
        {activeTab === "Created" && <NFTGrid items={nftImages.slice(0, 2)} />}
        {activeTab === "Liked" && <NFTGrid items={nftImages.slice(1)} />}
        {activeTab === "Following" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {followers.map((f, i) => (
              <FollowerCard key={i} el={f} />
            ))}
          </div>
        )}
        {activeTab === "Followers" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[...followers].reverse().map((f, i) => (
              <FollowerCard key={i} el={f} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AuthorProfile;
