"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Bell, Search } from "lucide-react";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { Discover } from "./Discover";
import { HelpCenter } from "./HelpCenter";
import { Notification } from "./Notification";
import { Profile } from "./Profile";
import { SideBar } from "../SideBar";
import { Button } from "@/components/ui/button";
import image from "@/public/assets/image";
import { APP_NAME } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export const Main = () => {
  const [discover, setDiscover] = useState<boolean>(false);
  const [help, setHelp] = useState<boolean>(false);
  const [notification, setNotification] = useState<boolean>(false);
  const [profile, setProfile] = useState<boolean>(false);
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);

  const openMenu = (menu: string) => {
    setDiscover(menu === "Discover");
    setHelp(menu === "Help Center");
    setProfile(menu === "Profile");
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  return (
    <div className="flex w-full h-20 fixed shadow-lg px-12 py-6 z-50">
      <div className="flex justify-between w-full items-center body-container gap-4">
        {/* Left Container */}
        <div className="flex w-full items-center gap-2">
          <Link href={"/"}>
            <Image
              src={image.logo}
              alt={`${APP_NAME} logo`}
              width={130}
              height={130}
            />
          </Link>
          <div className="w-1/2 hidden sm:flex flex-row items-center p-2 relative">
            <Input
              type="text"
              placeholder="Search NFT"
              className="w-full rounded-xl border border-gray-300 text-sm transition-all duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <Search
              onClick={() => {}}
              className="cursor-pointer text-lg absolute right-4 text-muted-foreground"
            />
          </div>
        </div>

        {/* Right Container */}
        <div className="xl:flex  hidden items-center gap-4">
          <div className="flex flex-col justify-center items-center relative">
            <Button
              variant={"ghost"}
              onClick={() => openMenu("Discover")}
              className="rounded-xl text-lg cursor-pointer text-muted-foreground"
            >
              Discover
            </Button>
            {discover && (
              <div className="absolute px-4 py-2 shadow-xl text-lg top-16 border w-full">
                <Discover />
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center items-center relative">
            <Button
              variant={"ghost"}
              onClick={() => openMenu("Help Center")}
              className="rounded-xl text-lg cursor-pointer text-muted-foreground"
            >
              Help Center
            </Button>
            {help && (
              <div className="absolute px-4 py-2 shadow-xl text-lg top-16 border w-full">
                <HelpCenter />
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center items-center relative cursor-pointer">
            <div className="relative p-2 hover:bg-accent hover:text-accent-foreground rounded-xl">
              <Bell
                size={22}
                className="text-muted-foreground transition-colors d"
              />

              <span className="absolute top-1 left-6 h-2 w-2 bg-primary rounded-full" />
            </div>
            {notification && <Notification />}
          </div>
          <div className="flex flex-col justify-center items-center relative">
            <Button
              variant={"default"}
              onClick={() => openMenu("Help Center")}
              className="rounded-xl text-lg cursor-pointer text-background"
            >
              Create
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
