"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaTelegramPlane,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Gem } from "lucide-react";
import { useThemeColor } from "@/stores/useThemeColor";

interface SocialIcon {
  platform: string;
  src: string;
  link: string;
}

export const Footer = () => {
  const { themeColor } = useThemeColor();

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
    <div className="w-full bottom-0 fixed border-t px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5">
        <div className="flex flex-col gap-4 justify-center">
          <Link href={"/"} className="group flex items-center gap-1">
            <Gem
              size={42}
              strokeWidth={1.75}
              className="text-primary group-hover:animate-sparkle transition-all duration-300"
            />
            <h1 className="text-lg">Ciscryp</h1>
          </Link>
          <p className="text-sm text-muted-foreground">
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
          <div className="pt-4 flex flex-col gap-4">
            {socialIcons.map((icon, index) => (
              <Link
                href={icon.link}
                key={index}
                className="flex items-center gap-2 group"
              >
                <span className="text-[18px] text-primary group-hover:scale-110 transition-transform">
                  {icon.icon}
                </span>
                <p className="first-letter:uppercase font-light text-sm text-muted-foreground">
                  {icon.platform}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
