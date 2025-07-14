"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import { MdTimer } from "react-icons/md";
import image from "@/public/assets/image";
import { Card } from "@/components/ui/card";

export const Collection: React.FC = () => {
  const cardArray = [1, 2, 3, 4];
  const NFTData = [
    image.nft_image_1,
    image.nft_image_2,
    image.nft_image_3,
    image.nft_image_4,
  ];
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(21);

  const likeNFT = () => {
    setLike(!like);
    setLikeInc((prev) => (like ? prev - 1 : prev + 1));
  };

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="w-full">
        <div className="hidden md:block">
          <Image
            src={image.creatorbackground10}
            alt="Banner"
            width={1600}
            height={300}
            className="w-full h-[300px] object-cover"
          />
        </div>
        <div className="block md:hidden">
          <Image
            src={image.creatorbackground10}
            alt="Banner Mobile"
            width={1600}
            height={900}
            className="w-full h-[200px] object-cover"
          />
        </div>
      </div>

      <div className="body-container">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-start gap-6 p-6">
          <div className="relative">
            <Image
              src={image.nft_image_1}
              alt="nft image"
              width={300}
              height={300}
              className="rounded-xl object-cover"
            />
            <div className="flex gap-4 mt-4 text-2xl text-muted-foreground">
              <a href="#">
                <TiSocialFacebook />
              </a>
              <a href="#">
                <TiSocialInstagram />
              </a>
              <a href="#">
                <TiSocialLinkedin />
              </a>
              <a href="#">
                <TiSocialTwitter />
              </a>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold">Awesome NFTs Collection</h1>
            <p className="text-muted-foreground max-w-xl">
              Karafuru is home to 5,555 generative arts where colors reign
              supreme. Leave the drab reality and enter the world of Karafuru by
              Museum of Toys.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {cardArray.map((el, i) => (
                <Card
                  key={i}
                  className="bg-card p-4 rounded-xl flex flex-col gap-4 text-center"
                >
                  <small className="text-muted-foreground text-lg">
                    Floor price
                  </small>
                  <p className="text-lg font-bold">${i + 1}95,4683</p>
                  <span className="text-green-600 font-medium text-sm">
                    +{i + 2}.11%
                  </span>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* NFT Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
          {NFTData.map((el, i) => (
            <Card
              key={i}
              className="relative bg-background rounded-xl overflow-hidden shadow-sm border py-0"
            >
              <div className="absolute top-4 left-4 z-10 bg-background/50 hover:bg-background rounded-full p-2 flex items-center gap-2 text-sm shadow">
                <BsImage className="text-xl text-muted-foreground" />
              </div>
              <div className="absolute top-4 right-4 z-10 bg-background/50 hover:bg-background rounded-full p-2 flex items-center gap-2 text-sm shadow">
                <p
                  onClick={likeNFT}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  {like ? (
                    <AiOutlineHeart className="text-muted-foreground" />
                  ) : (
                    <AiFillHeart className="text-red-500" />
                  )}{" "}
                  {likeInc + 1}
                </p>
              </div>

              <Image
                src={el}
                alt={`NFT ${i}`}
                width={500}
                height={500}
                className="w-full h-[250px] object-cover"
              />

              <div className="px-4 pb-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-medium">Clone #{i + 1}</div>
                  <small className="text-muted-foreground">4{i + 2}</small>
                </div>

                <div className="flex flex-row gap-2 items-center justify-between text-sm">
                  <div className="w-1/2 relative">
                    <p className="absolute -top-3 left-5 bg-background px-2 text-sm text-muted-foreground z-10">
                      Current Bid
                    </p>
                    <div className="border-2 border-primary rounded-md p-2">
                      <p className="text-primary text-sm font-semibold">
                        1{i + 5}.000 ETH
                      </p>
                    </div>
                  </div>
                  <p className="flex w-1/2 items-center gap-1 text-muted-foreground">
                    <MdTimer /> <span>{i + 1} hours left</span>
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
