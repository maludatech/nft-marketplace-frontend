"use client";

import Image from "next/image";
import { MdVerified } from "react-icons/md";
import image from "@/public/assets/image";
import { Card } from "../ui/card";

// Build an array of image keys (you have up to 11)
const backgrounds = [
  image.creatorbackground1,
  image.creatorbackground2,
  image.creatorbackground3,
  image.creatorbackground4,
  image.creatorbackground5,
  image.creatorbackground6,
  image.creatorbackground7,
  image.creatorbackground8,
  image.creatorbackground9,
  image.creatorbackground10,
  image.creatorbackground11,
];

const creators = [
  "Maludatech",
  "Juliet Macp",
  "Mike Orr",
  "Giada Mann",
  "Belinda Rer",
  "Karli Costa",
  "Kim Carrey",
  "Natalie Frost",
  "Sara Wiemberland",
  "Jacob Dean",
  "Zuri Adebayo",
];

const avatars = [
  image.user1,
  image.user2,
  image.user3,
  image.user4,
  image.user5,
  image.user6,
  image.user7,
  image.user8,
  image.user9,
  image.user10,
  image.user11,
];

const DaysComponent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {backgrounds.map((bg, i) => (
        <Card
          key={i}
          className="w-full flex flex-col transition-all duration-300 hover:scale-[1.02] cursor-pointer p-0"
        >
          {/* Cover Image */}
          <div className="w-full">
            <Image
              src={bg}
              alt="Collection Cover"
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-t-xl"
            />
          </div>

          {/* Thumbnails (same image x3) */}
          <div className="grid grid-cols-3 gap-1 px-2 py-2">
            {[0, 1, 2].map((_, idx) => (
              <Image
                key={idx}
                src={bg}
                alt={`Thumbnail ${idx + 1}`}
                width={200}
                height={200}
                className="w-full h-24 object-cover rounded"
              />
            ))}
          </div>

          {/* Info Section */}
          <div className="px-4 pb-4 space-y-2">
            <h2 className="text-lg font-semibold">Amazing Collection</h2>

            <div className="flex justify-between items-center">
              {/* Creator Info */}
              <div className="flex items-center gap-2">
                <Image
                  src={avatars[i % avatars.length]}
                  alt="Creator"
                  width={30}
                  height={30}
                  className="rounded-full w-8 h-8 object-cover"
                />
                <div className="flex items-center gap-1 text-sm">
                  <span className="text-muted-foreground">
                    {creators[i % creators.length]}
                  </span>
                  <MdVerified className="text-blue-500 text-lg" />
                </div>
              </div>

              {/* Price */}
              <div className="border px-3 py-1 rounded-md text-sm font-semibold">
                {1 + i * 0.123} ETH
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default DaysComponent;
