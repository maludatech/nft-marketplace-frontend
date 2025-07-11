"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Search, Gem } from "lucide-react";
import { Discover } from "./Discover";
import { HelpCenter } from "./HelpCenter";
import { Notification } from "./Notification";
import { Profile } from "./Profile";
import { MobileSidebar } from "./SideBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "../ThemeToggle";
import { ThemeColorSwitcher } from "../ThemeColorPicker";

export const Main: React.FC = () => {
  const { theme } = useTheme();

  const shadow =
    theme === "dark"
      ? "0 10px 30px rgba(255,255,255,0.1)"
      : "0 10px 30px rgba(0,0,0,0.08)";

  return (
    <div
      className="flex w-full h-20 fixed border-b p-6 z-50 bg-background"
      style={{ boxShadow: shadow }}
    >
      <div className="flex justify-between w-full items-center body-container gap-4">
        {/* Left */}
        <div className="flex w-full items-center gap-2">
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-xl px-2 py-1"
          >
            <Gem
              size={36}
              strokeWidth={1.75}
              className="text-primary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
            <span className="text-xl font-semibold tracking-wide text-foreground">
              Ciscryp
            </span>
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
          <Discover />
          <HelpCenter />
          <div className="flex items-center gap-3 w-full">
            <ThemeColorSwitcher />
            <ThemeToggle />
            <Notification />
            <Button
              variant="default"
              className="rounded-md text-lg text-background cursor-pointer ml-2"
            >
              Create
            </Button>
            <Profile />
          </div>
        </div>

        {/* Mobile Right */}
        <div className="xl:hidden flex items-center gap-1">
          <Notification />
          <Profile />
          <MobileSidebar />
        </div>
      </div>
    </div>
  );
};
