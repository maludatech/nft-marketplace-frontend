"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Bell, Search } from "lucide-react";
import { CgMenuRight } from "react-icons/cg";
import { Discover } from "./Discover";
import { HelpCenter } from "./HelpCenter";
import { Notification } from "./Notification";
import { Profile } from "./Profile";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import image from "@/public/assets/image";
import { APP_NAME } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import ThemeToggle from "../ThemeToggle";
import { Separator } from "@/components/ui/separator";

interface SocialIcon {
  platform: string;
  src: string;
  link: string;
}

export const Main = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);

  const { theme } = useTheme();

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
    } else if (menu === "Help Center") {
      setHelp((prev) => !prev);
      setDiscover(false);
      setProfile(false);
    } else if (menu === "Profile") {
      setProfile((prev) => !prev);
      setDiscover(false);
      setHelp(false);
    }
  };

  const openNotification = () => {
    setNotification((prev) => !prev);
    setDiscover(false);
    setHelp(false);
    setProfile(false);
  };

  return (
    <div className="flex w-full h-20 fixed border-b shadow-lg px-10 py-6 z-50">
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
              className="rounded-md text-lg text-muted-foreground cursor-pointer p-2 hover:bg-accent"
            >
              Discover
            </h1>
            {discover && (
              <div className="absolute p-4 shadow-xl top-15 border rounded-md bg-background z-100 min-w-[16rem]">
                <Discover />
              </div>
            )}
          </div>
          <div className="flex flex-row justify-center items-center relative">
            <h1
              onClick={() => openMenu("Help Center")}
              className="whitespace-nowrap rounded-md text-lg text-muted-foreground cursor-pointer p-2 hover:bg-accent"
            >
              Help Center
            </h1>
            {help && (
              <div className="absolute p-4 shadow-xl top-15 border rounded-md bg-background z-100 w-64">
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
                onClick={openNotification}
              />
              <span className="absolute top-1 left-6 h-2 w-2 bg-primary rounded-full" />
              {notification && <Notification />}
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
                <div className="absolute p-4 shadow-xl top-15 border w-full rounded-md bg-background z-100">
                  <Profile />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Right */}
        <div className="xl:hidden flex items-center gap-3">
          <div className="relative p-2 hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer">
            <Bell
              size={22}
              className="text-muted-foreground"
              onClick={openNotification}
            />
            <span className="absolute top-1 left-6 h-2 w-2 bg-primary rounded-full" />
            {notification && <Notification />}
          </div>
          <Image
            src={image.user1}
            alt="Profile"
            width={35}
            height={35}
            onClick={() => openMenu("Profile")}
            className="rounded-full object-cover cursor-pointer"
          />
          <Sheet>
            <SheetTrigger asChild>
              <CgMenuRight className="text-muted-foreground text-6xl cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="right" className="w-100">
              <SheetTitle className="sr-only"></SheetTitle>
              <div className="flex flex-col gap-6 pt-8">
                <Link href="/" className="px-6">
                  <Image
                    src={theme === "dark" ? image.logoLight : image.logo}
                    alt={`${APP_NAME} logo`}
                    width={130}
                    height={130}
                  />
                </Link>
                <div className="text-muted-foreground pt-6 px-6">
                  Discover the most outstanding articles on all topics of life.
                  Write your stories and share them
                </div>
                <div className="flex items-center justify-between gap-2 px-6">
                  <div className="flex items-center gap-2">
                    {socialIcons.map((icon: SocialIcon, index: number) => (
                      <Link href={icon.link}>
                        <Image
                          src={icon.src}
                          alt={icon.platform}
                          key={index}
                          width={30}
                          height={30}
                        />
                      </Link>
                    ))}
                  </div>
                  <ThemeToggle />
                </div>
                <div className="w-full items-center p-2 relative px-6">
                  <Input
                    type="text"
                    placeholder="Type and Press Enter to Search"
                    className="w-full rounded-md border border-gray-300 text-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-4"
                  />
                  <Search className="cursor-pointer text-lg absolute top-3 right-8 text-muted-foreground" />
                </div>
                <Separator className="w-full" />
                <div className="flex relative px-6">
                  <Button
                    variant="ghost"
                    onClick={() => openMenu("Discover")}
                    className="rounded-md text-lg text-muted-foreground cursor-pointer"
                  >
                    Discover
                  </Button>
                  {discover && (
                    <div className="absolute p-4 shadow-xl top-15 border rounded-md bg-background z-100">
                      <Discover />
                    </div>
                  )}
                </div>
                <div className="flex relative px-6">
                  <Button
                    variant="ghost"
                    onClick={() => openMenu("Help Center")}
                    className="rounded-md text-lg text-muted-foreground cursor-pointer"
                  >
                    Help Center
                  </Button>
                  {help && (
                    <div className="absolute p-4 shadow-xl top-15 border rounded-md bg-background z-100">
                      <HelpCenter />
                    </div>
                  )}
                </div>
                <Separator className="w-full" />
                <Button className="cursor-pointer rounded-md mx-6">
                  Create
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};
