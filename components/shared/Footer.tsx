"use client";

import Image from "next/image";
import image from "@/public/assets/image";
import { useTheme } from "next-themes";
import { APP_NAME } from "@/lib/constants";

interface SocialIcon {
  platform: string;
  src: string;
  link: string;
}

export const Footer = () => {
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
  return (
    <div className="w-full bottom-0 fixed border-t px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5">
        <div className="">
          <Image
            src={theme === "dark" ? image.logoLight : image.logo}
            alt={`${APP_NAME} logo`}
            width={130}
            height={130}
          />
        </div>
      </div>
    </div>
  );
};
