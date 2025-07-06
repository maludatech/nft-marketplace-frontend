"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ChevronDown, Search } from "lucide-react";
import { CgMenuRight } from "react-icons/cg";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import ThemeToggle from "../ThemeToggle";
import image from "@/public/assets/image";
import { APP_NAME } from "@/lib/constants";
import { Discover } from "./Discover";
import { HelpCenter } from "./HelpCenter";

interface MobileSidebarProps {
  discover: boolean;
  help: boolean;
  openMenu: (menu: string) => void;
  socialIcons: {
    platform: string;
    src: string;
    link: string;
  }[];
}

export const MobileSidebar = ({
  discover,
  help,
  openMenu,
  socialIcons,
}: MobileSidebarProps) => {
  const { theme } = useTheme();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <CgMenuRight className="text-muted-foreground text-6xl cursor-pointer" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[90vw] max-w-xs h-screen overflow-y-auto pb-8"
      >
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
          <div className="text-muted-foreground text-sm pt-2 px-6">
            Explore the best NFT stories and content - then create and share
            your own.
          </div>
          <div className="flex items-center justify-between gap-2 px-6">
            <div className="flex items-center gap-2">
              {socialIcons.map((icon, index) => (
                <Link href={icon.link} key={index}>
                  <Image
                    src={icon.src}
                    alt={icon.platform}
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
              placeholder="Search NFT"
              className="w-full rounded-md border border-gray-300 text-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-4"
            />
            <Search className="cursor-pointer text-lg absolute top-3 right-8 text-muted-foreground z-10" />
          </div>
          <Separator className="w-full" />
          <div className="flex relative px-6">
            <Button
              variant="ghost"
              onClick={() => openMenu("Discover")}
              className="flex items-center gap-1 rounded-md text-[16px] text-muted-foreground cursor-pointer"
            >
              Discover
              <ChevronDown size={20} />
            </Button>
            {discover && (
              <div className="absolute top-15">
                <Discover />
              </div>
            )}
          </div>
          <div className="flex relative px-6">
            <Button
              variant="ghost"
              onClick={() => openMenu("Help Center")}
              className="flex items-center gap-1 rounded-md text-[16px] text-muted-foreground cursor-pointer"
            >
              Help Center
              <ChevronDown size={20} />
            </Button>
            {help && (
              <div className="absolute top-15">
                <HelpCenter />
              </div>
            )}
          </div>
          <Separator className="w-full" />
          <div className="flex flex-col gap-4">
            <Button className="cursor-pointer rounded-md mx-6">Create</Button>
            <Button className="cursor-pointer rounded-md mx-6">
              Connect Wallet
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
