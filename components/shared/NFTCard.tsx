"use client";

import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";
import image from "@/public/assets/image";
import { Card } from "../ui/card";

type RemainingTime = {
  hours: number;
  mins: number;
  secs: number;
};

type NFTItem = {
  image: any;
  NFTTag: string;
  price: string;
  inStock: number;
  remainingTime: RemainingTime;
  likes: number;
  liked?: boolean;
};

const initialNFTs: NFTItem[] = [
  {
    image: image.nft_image_1,
    NFTTag: "CloneF#1791",
    price: "1.000 ETH",
    inStock: 19,
    remainingTime: { hours: 3, mins: 20, secs: 12 },
    likes: 96,
  },
  {
    image: image.nft_image_2,
    NFTTag: "CloneF#3421",
    price: "1.234 ETH",
    inStock: 12,
    remainingTime: { hours: 5, mins: 42, secs: 19 },
    likes: 87,
  },
  {
    image: image.nft_image_3,
    NFTTag: "CloneF#7894",
    price: "0.567 ETH",
    inStock: 25,
    remainingTime: { hours: 12, mins: 33, secs: 50 },
    likes: 210,
  },
  {
    image: image.nft_image_4,
    NFTTag: "CloneF#1289",
    price: "1.890 ETH",
    inStock: 8,
    remainingTime: { hours: 1, mins: 15, secs: 7 },
    likes: 45,
  },
  {
    image: image.nft_image_5,
    NFTTag: "CloneF#4567",
    price: "0.789 ETH",
    inStock: 19,
    remainingTime: { hours: 20, mins: 5, secs: 30 },
    likes: 132,
  },
  {
    image: image.nft_image_6,
    NFTTag: "CloneF#9012",
    price: "1.123 ETH",
    inStock: 14,
    remainingTime: { hours: 8, mins: 50, secs: 12 },
    likes: 276,
  },
  {
    image: image.nft_image_7,
    NFTTag: "CloneF#2345",
    price: "0.456 ETH",
    inStock: 22,
    remainingTime: { hours: 15, mins: 25, secs: 45 },
    likes: 98,
  },
  {
    image: image.nft_image_8,
    NFTTag: "CloneF#6789",
    price: "1.678 ETH",
    inStock: 7,
    remainingTime: { hours: 3, mins: 10, secs: 22 },
    likes: 154,
  },
  {
    image: image.nft_image_9,
    NFTTag: "CloneF#5432",
    price: "0.912 ETH",
    inStock: 16,
    remainingTime: { hours: 18, mins: 40, secs: 35 },
    likes: 33,
  },
];

const NFTCard: React.FC = () => {
  const [items, setItems] = useState<NFTItem[]>(
    initialNFTs.map((item) => ({ ...item, liked: false }))
  );

  const toggleLike = (index: number) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              liked: !item.liked,
              likes: item.liked ? item.likes - 1 : item.likes + 1,
            }
          : item
      )
    );
  };

  return (
    <div className="w-full pt-16 px-6 md:px-12">
      <div className="body-container w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {items.map((item, index) => (
          <Card
            key={index}
            className="relative p-4 rounded-xl cursor-pointer transition duration-300 hover:shadow-xl overflow-hidden hover:scale-105"
          >
            {/* NFT Image */}
            <Image
              src={item.image}
              alt="NFT"
              width={600}
              height={600}
              className="rounded-xl transition-transform duration-300"
            />

            {/* Like Button */}
            <div
              onClick={() => toggleLike(index)}
              className="absolute top-5 left-5 z-20 cursor-pointer flex items-center gap-1 justify-center bg-background/50 hover:bg-background p-2 rounded-full"
            >
              {item.liked ? (
                <AiFillHeart className="text-red-500" />
              ) : (
                <AiOutlineHeart />
              )}
              {item.likes}
            </div>

            {/* Countdown */}
            <div className="absolute top-4 right-2 bg-card skew-x-12 rounded-bl-xl px-6 py-1 text-center">
              <div className="-skew-x-12">
                <small className="text-sm">Remaining time</small>
                <p className="text-base font-bold">
                  {item.remainingTime.hours}h : {item.remainingTime.mins}m :{" "}
                  {item.remainingTime.secs}s
                </p>
              </div>
            </div>

            {/* Bottom Card Details */}
            <div className="absolute bottom-0 -left-2 w-full flex items-end justify-between px-4 pb-4">
              <div className="relative">
                <div className="bg-card skew-x-12 rounded-tr-xl">
                  <div className="-skew-x-12 px-6 py-2">
                    <h4 className="text-lg font-semibold">{item.NFTTag}</h4>
                    <div className="flex justify-between items-center gap-4 pt-1">
                      <div className="border border-primary rounded px-2 py-1">
                        <small className="bg-primary text-white rounded px-1 text-xs">
                          Current Bid
                        </small>
                        <p className="font-semibold text-sm">{item.price}</p>
                      </div>
                      <small className="text-sm text-muted-foreground">
                        {item.inStock} in stock
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category Icon */}
              <div className="text-muted-foreground text-xl mr-2 mb-2">
                <BsImages />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NFTCard;
