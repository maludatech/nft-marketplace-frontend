"use client";

import Image from "next/image";
import { MdVerified } from "react-icons/md";
import image from "@/public/assets/image";
import { Card } from "../ui/card";
import React from "react";

export const DaysComponent: React.FC = () => {
  return (
    <Card className="w-full flex flex-col gap-0 transition-all duration-300 hover:scale-[1.02] cursor-pointer py-0">
      {/* Cover Image */}
      <div className="w-full">
        <Image
          src={image.creatorbackground1}
          alt="Collection Cover"
          width={500}
          height={300}
          className="w-full h-48 object-cover rounded-t-xl"
        />
      </div>

      {/* Grid Thumbnails */}
      <div className="grid grid-cols-3 gap-1">
        {[...Array(3)].map((_, i) => (
          <Image
            key={i}
            src={image.creatorbackground2}
            alt="Thumbnail"
            width={200}
            height={200}
            className="w-full h-24 object-cover"
          />
        ))}
      </div>

      {/* Info Section */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold">Amazing Collection</h2>

        <div className="flex justify-between items-center">
          {/* Creator Info */}
          <div className="flex items-center gap-2">
            <Image
              src={image.user1}
              alt="Creator"
              width={30}
              height={30}
              className="rounded-full w-8 h-8 object-cover"
            />
            <div className="flex items-center gap-1 text-sm">
              <span className="text-gray-700 dark:text-gray-300">
                Maludatech
              </span>
              <MdVerified className="text-blue-500 text-lg" />
            </div>
          </div>

          {/* Price */}
          <div className="border px-3 py-1 rounded-md text-sm font-semibold">
            1.255 ETH
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DaysComponent;
