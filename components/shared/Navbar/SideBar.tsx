"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ChevronDown, Gem, Search } from "lucide-react";
import { CgMenuRight } from "react-icons/cg";
import {
  FaFacebookF,
  FaTwitter,
  FaTelegramPlane,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
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
import ThemeColorSwitcher from "../ThemeColorPicker";
import image from "@/public/assets/image";
import { APP_NAME } from "@/lib/constants";
import { Discover } from "./Discover";
import { HelpCenter } from "./HelpCenter";

export const MobileSidebar = () => {
  const { theme } = useTheme();

  const socialIcons = [
    {
      platform: "facebook",
      icon: <FaFacebookF className="text-primary text-[18px]" />,
      link: "https://facebook.com/maludatech",
    },
    {
      platform: "twitter",
      icon: <FaTwitter className="text-primary text-[18px]" />,
      link: "https://x.com/maludatechdev",
    },
    {
      platform: "telegram",
      icon: <FaTelegramPlane className="text-primary text-[18px]" />,
      link: "https://t.me/maludatechdev",
    },
    {
      platform: "linkedin",
      icon: <FaLinkedinIn className="text-primary text-[18px]" />,
      link: "https://linkedin.com/maludatech",
    },
    {
      platform: "instagram",
      icon: <FaInstagram className="text-primary text-[18px]" />,
      link: "https://instagram.com/ugotech.eth",
    },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <CgMenuRight className="text-muted-foreground text-4xl cursor-pointer" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[90vw] max-w-xs h-screen overflow-y-auto pb-8"
      >
        <SheetTitle className="sr-only"></SheetTitle>
        <div className="flex flex-col gap-6 pt-8">
          <Link href={"/"} className="flex items-center gap-1 pl-6">
            <Gem
              size={42}
              strokeWidth={1.75}
              className="text-primary group-hover:animate-sparkle transition-all duration-300"
            />
            <h1 className="text-lg">Ciscryp</h1>
          </Link>
          <div className="text-muted-foreground text-sm pt-2 px-6">
            Explore the best NFT stories and content - then create and share
            your own.
          </div>

          <div className="flex flex-col gap-4 px-6">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                {socialIcons.map((icon, index) => (
                  <Link
                    href={icon.link}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    {icon.icon}
                  </Link>
                ))}
              </div>
              <ThemeToggle />
            </div>
            <ThemeColorSwitcher />
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
          <Discover />
          <HelpCenter />
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
