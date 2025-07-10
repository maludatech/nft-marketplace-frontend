"use client";

import React from "react";
import Image from "next/image";
import image from "@/public/assets/image";

const LikeProfile: React.FC = () => {
  const imageArray = [image.user1, image.user2, image.user3, image.user4];

  return (
    <div className="flex items-start">
      {imageArray.map((imgSrc, i) => (
        <div
          key={i}
          className="w-6 h-6 border-2 border-gray-400 rounded-full overflow-hidden -ml-1 first:ml-0"
        >
          <Image
            src={imgSrc}
            alt={`user-${i}`}
            width={24}
            height={24}
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      ))}
    </div>
  );
};

export default LikeProfile;
