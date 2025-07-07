"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";

interface LinkItem {
  name: string;
  link: string;
}

export const HelpCenter = () => {
  const { theme } = useTheme();

  const shadow =
    theme === "dark"
      ? "0 10px 30px rgba(255,255,255,0.1)"
      : "0 10px 30px rgba(0,0,0,0.08)";

  const helpCenter: LinkItem[] = [
    { name: "About", link: "about" },
    { name: "Contact Us", link: "contact-us" },
    { name: "Sign Up", link: "sign-up" },
    { name: "Sign In", link: "sign-in" },
    { name: "Subscription", link: "subscription" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 rounded-md hover:bg-accent cursor-pointer">
        <span className="text-[16px] whitespace-nowrap text-muted-foreground">
          Help Center
        </span>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-56 space-y-1 p-2 rounded-md border bg-background z-50"
        style={{ boxShadow: shadow }}
      >
        <DropdownMenuLabel className="text-muted-foreground">
          Need Help?
        </DropdownMenuLabel>

        {helpCenter.map((item, index) => (
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
