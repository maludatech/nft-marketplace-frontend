"use client";

import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";

interface DiscoverItem {
  name: string;
  link: string;
}

const discover: DiscoverItem[] = [
  { name: "Collection", link: "collection" },
  { name: "Search", link: "search" },
  { name: "Author Profile", link: "author-profile" },
  { name: "NFT Detail", link: "nft-detail" },
  { name: "Account Settings", link: "account-settings" },
  { name: "create", link: "upload-nft" },
  { name: "Blog", link: "blog" },
];

export const Discover: React.FC = () => {
  const { theme } = useTheme();

  const shadow =
    theme === "dark"
      ? "0 10px 30px rgba(255,255,255,0.1)"
      : "0 10px 30px rgba(0,0,0,0.08)";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 rounded-md hover:bg-accent cursor-pointer">
        <span className="text-[16px] whitespace-nowrap text-muted-foreground">
          Discover
        </span>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-56 space-y-1 p-2 rounded-md border bg-background z-50"
        style={{ boxShadow: shadow }}
      >
        <DropdownMenuLabel className="text-muted-foreground">
          Explore More
        </DropdownMenuLabel>

        {discover.map((item, index) => (
          <Link
            key={index}
            href={`/${item.link}`}
            className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
