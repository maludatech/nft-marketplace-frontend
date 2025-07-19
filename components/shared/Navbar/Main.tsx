"use client";

import React from "react";
import Link from "next/link";
import { Search, Gem } from "lucide-react";
import { Discover } from "./Discover";
import { HelpCenter } from "./HelpCenter";
import { Notification } from "./Notification";
import { Profile } from "./Profile";
import { MobileSidebar } from "./SideBar";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "../ThemeToggle";
import { ThemeColorSwitcher } from "../ThemeColorPicker";
import { WalletConnectButton } from "../WalletConnectButton";

export const Main: React.FC = () => {
  return (
    <div className="flex w-full h-20 fixed border-b p-6 z-50 bg-background shadow-xl">
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
            <WalletConnectButton />
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
