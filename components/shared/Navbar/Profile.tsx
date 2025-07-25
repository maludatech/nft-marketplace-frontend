"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  User,
  Image as Gallery,
  UserPen,
  BadgeQuestionMark,
  LogOut,
} from "lucide-react";
import image from "@/public/assets/image";
import { Separator } from "@/components/ui/separator";

const settingsItems = [
  {
    icon: <BadgeQuestionMark size={18} />,
    title: "Help Center",
    link: "/help",
  },
  {
    icon: <LogOut size={18} />,
    title: "Disconnect",
    link: "/disconnect",
  },
];

export const Profile: React.FC = () => {
  const { theme } = useTheme();

  const shadow =
    theme === "dark"
      ? "0 10px 30px rgba(255,255,255,0.1)"
      : "0 10px 30px rgba(0,0,0,0.08)";

  const profileItems = [
    {
      icon: <User size={18} />,
      title: "My Profile",
      link: "/my-profile",
    },
    {
      icon: <Gallery size={18} />,
      title: "My Items",
      link: "/nft-details",
    },
    {
      icon: <UserPen size={18} />,
      title: "Edit Profile",
      link: "/edit-profile",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer p-2 rounded-md hover:bg-accent transition-colors">
        <User size={28} className="text-muted-foreground" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-64 p-4 space-y-3 rounded-md border bg-background z-50"
        style={{ boxShadow: shadow }}
      >
        <DropdownMenuLabel className="flex items-center gap-3">
          <Image
            src={image.user1}
            alt="user profile"
            width={42}
            height={42}
            className="rounded-full object-cover"
          />
          <div>
            <h1 className="text-sm font-semibold text-foreground">
              MaludaTech
            </h1>
            <small className="text-xs text-muted-foreground">
              0xb281t7xo16vbs0....
            </small>
          </div>
        </DropdownMenuLabel>

        <Separator />

        <div className="flex flex-col gap-1">
          {profileItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="flex items-center gap-2 p-2 rounded-md text-muted-foreground hover:bg-accent text-sm transition-colors"
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </div>

        <Separator />

        <div className="flex flex-col gap-1">
          {settingsItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="flex items-center gap-2 p-2 rounded-md text-muted-foreground hover:bg-accent text-sm transition-colors"
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
