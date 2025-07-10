"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

type Props = {
  i: number;
  el: any;
};

const FollowerTabCard: React.FC<Props> = ({ i, el }) => {
  const [following, setFollowing] = useState(false);

  const toggleFollow = () => setFollowing((prev) => !prev);

  return (
    <Card className="flex flex-col gap-2 p-4 rounded-xl shadow-md w-full">
      {/* Rank */}
      <div className="text-sm font-semibold text-gray-500 dark:text-gray-300">
        #{i + 1} <span className="ml-1">🥇</span>
      </div>

      {/* Card Content */}
      <div className="relative w-full flex flex-col items-center rounded-lg overflow-hidden">
        {/* Background image */}
        <div className="w-full h-[150px] relative rounded-lg overflow-hidden">
          <Image
            src={el?.background || "/default-bg.jpg"}
            alt="background"
            fill
            className="object-cover"
          />
        </div>

        {/* Profile image */}
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-4 border-card -mt-8 z-10">
          <Image
            src={el?.avatar || "/default-avatar.png"}
            alt="profile"
            width={60}
            height={60}
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="text-center mt-4 flex flex-col items-center gap-1">
          <h4 className="text-lg font-semibold flex items-center gap-1">
            {el?.name || "Giada Mann"}
            <MdVerified className="text-blue-500" />
          </h4>
          <p className="text-sm">
            <span className="font-bold">{el?.eth || "12.321"} </span>
            ETH
          </p>
        </div>

        {/* Follow button */}
        <Button
          onClick={toggleFollow}
          variant={following ? "secondary" : "default"}
          className="mt-3 px-4 py-1 text-sm rounded-full cursor-pointer"
        >
          {following ? (
            <>
              <TiTick className="w-4 h-4" /> Following
            </>
          ) : (
            "Follow"
          )}
        </Button>
      </div>
    </Card>
  );
};

export default FollowerTabCard;
