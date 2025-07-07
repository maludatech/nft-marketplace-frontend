"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import image from "@/public/assets/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";

export const Notification = () => {
  const { theme } = useTheme();

  const shadow =
    theme === "dark"
      ? "0 10px 30px rgba(255,255,255,0.1)"
      : "0 10px 30px rgba(0,0,0,0.08)";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center relative gap-1 px-4 py-2 rounded-md hover:bg-accent cursor-pointer">
        <Bell size={22} className="text-muted-foreground cursor-pointer" />
        <span className="absolute top-1 left-8 h-2 w-2 bg-primary rounded-full" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-72 space-y-2 p-4 rounded-md border bg-background z-50"
        style={{ boxShadow: shadow }}
      >
        <DropdownMenuLabel className="text-muted-foreground">
          Recent Activity
        </DropdownMenuLabel>

        <div className="flex items-start gap-3">
          <Image
            src={image.user1}
            alt="profile"
            width={45}
            height={45}
            className="rounded-full object-cover"
          />
          <div className="space-y-1">
            <h4 className="text-sm font-medium text-foreground">Maludatech</h4>
            <p className="text-sm text-muted-foreground">Address</p>
            <small className="text-xs text-muted-foreground">
              3 minutes ago
            </small>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
