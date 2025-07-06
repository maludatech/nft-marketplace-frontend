"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Bell, Search, ChevronDown } from "lucide-react";
import { Discover } from "./Discover";
import { HelpCenter } from "./HelpCenter";
import { Notification } from "./Notification";
import { Profile } from "./Profile";
import { MobileSidebar } from "./SideBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import image from "@/public/assets/image";
import { APP_NAME } from "@/lib/constants";
import ThemeToggle from "../ThemeToggle";

interface SocialIcon {
  platform: string;
  src: string;
  link: string;
}

export const Main = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [discover, setDiscover] = useState<boolean>(false);
  const [help, setHelp] = useState<boolean>(false);
  const [notification, setNotification] = useState<boolean>(false);
  const [profile, setProfile] = useState<boolean>(false);

  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevent hydration mismatch

  const socialIcons: SocialIcon[] = [
    {
      platform: "facebook",
      src: image.facebook,
      link: "https://facebook.com/maludatech",
    },
    {
      platform: "twitter",
      src: image.twitter,
      link: "https://x.com/maludatechdev",
    },
    {
      platform: "telegram",
      src: image.telegram,
      link: "https://t.me/maludatechdev",
    },
  ];

  const openMenu = (menu: string) => {
    if (menu === "Discover") {
      setDiscover((prev) => !prev);
      setHelp(false);
      setProfile(false);
      setNotification(false);
    } else if (menu === "Help Center") {
      setHelp((prev) => !prev);
      setDiscover(false);
      setProfile(false);
      setNotification(false);
    } else if (menu === "Profile") {
      setProfile((prev) => !prev);
      setDiscover(false);
      setHelp(false);
      setNotification(false);
    } else if (menu === "Notification") {
      setNotification((prev) => !prev);
      setProfile(false);
      setDiscover(false);
      setHelp(false);
    }
  };

  return (
    <div className="flex w-full h-20 fixed border-b shadow-lg p-6 z-50">
      <div className="flex justify-between w-full items-center body-container gap-4">
        {/* Left */}
        <div className="flex w-full items-center gap-2">
          <Link href="/">
            <Image
              src={theme === "dark" ? image.logoLight : image.logo}
              alt={`${APP_NAME} logo`}
              width={130}
              height={130}
            />
          </Link>
          <div className="w-1/2 hidden sm:flex items-center p-2 relative">
            <Input
              type="text"
              placeholder="Search NFT"
              className="w-full rounded-md border border-gray-300 text-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <Search className="cursor-pointer text-lg absolute right-4 text-muted-foreground" />
          </div>
        </div>

        {/* Desktop Right */}
        <div className="w-full hidden xl:flex items-center gap-2">
          <div className="flex flex-col justify-center items-center relative">
            <h1
              onClick={() => openMenu("Discover")}
              className=" flex items-center gap-1 rounded-md text-lg text-muted-foreground cursor-pointer p-2 hover:bg-accent"
            >
              Discover
              <ChevronDown size={20} />
            </h1>
            {discover && (
              <div className="absolute top-15 left-1/2 -translate-x-1/2 min-w-[250px]">
                <Discover />
              </div>
            )}
          </div>
          <div className="flex flex-row justify-center items-center relative">
            <h1
              onClick={() => openMenu("Help Center")}
              className="whitespace-nowrap flex items-center gap-1 rounded-md text-lg text-muted-foreground cursor-pointer p-2 hover:bg-accent"
            >
              Help Center
              <ChevronDown size={20} />
            </h1>
            {help && (
              <div className="absolute top-15 left-1/2 -translate-x-1/2 min-w-[250px] ">
                <HelpCenter />
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 w-full">
            <ThemeToggle />
            <div className="relative p-2 hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer">
              <Bell
                size={22}
                className="text-muted-foreground cursor-pointer"
                onClick={() => openMenu("Notification")}
              />
              <span className="absolute top-1 left-6 h-2 w-2 bg-primary rounded-full" />
              {notification && (
                <div className="absolute top-15 left-1/2 -translate-x-1/2 min-w-[250px] ">
                  <Notification />
                </div>
              )}
            </div>
            <Button
              variant="default"
              className="rounded-md text-lg text-background cursor-pointer ml-2"
            >
              Create
            </Button>
            <div className="relative px-2">
              <Image
                src={image.user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openMenu("Profile")}
                className="rounded-full object-cover cursor-pointer"
              />
              {profile && (
                <div className="absolute top-15 left-1/2 -translate-x-1/2 min-w-[250px] ">
                  <Profile />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Right */}
        <div className="xl:hidden flex items-center gap-2">
          <div className="relative p-2 hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer">
            <Bell
              size={22}
              className="text-muted-foreground"
              onClick={() => openMenu("Notification")}
            />
            <span className="absolute top-1 left-6 h-2 w-2 bg-primary rounded-full" />
            {notification && (
              <div className="absolute top-14 left-1/2 -translate-x-1/2 w-[250px]">
                <Notification />
              </div>
            )}
          </div>
          <div className="relative p-2 cursor-pointer">
            <Image
              src={image.user1}
              alt="Profile"
              width={60}
              height={60}
              onClick={() => openMenu("Profile")}
              className="rounded-full object-cove"
            />
            {profile && (
              <div className="absolute top-15 left-1/2 -translate-x-1/2 w-[250px]">
                <Profile />
              </div>
            )}
          </div>
          <MobileSidebar
            discover={discover}
            help={help}
            openMenu={openMenu}
            socialIcons={socialIcons}
          />
        </div>
      </div>
    </div>
  );
};
