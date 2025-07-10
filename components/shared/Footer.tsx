"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaTelegramPlane,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Gem, Send } from "lucide-react";
import { Input } from "../ui/input";

interface Items {
  name: string;
  link: string;
}

export const Footer = () => {
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

  const discover: Items[] = [
    { name: "Collection", link: "collection" },
    { name: "Search", link: "search" },
    { name: "Author Profile", link: "author-profile" },
    { name: "NFT Details", link: "NFT-details" },
    { name: "Account Settings", link: "account-settings" },
    { name: "Connect Wallet", link: "connect-wallet" },
    { name: "Blog", link: "blog" },
  ];

  const helpCenter: Items[] = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  return (
    <footer className="w-full min-h-1/2 px-6 md:px-12 py-12 border-t z-40">
      <div className="body-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-start gap-12 w-full">
          <div className="flex flex-col gap-4 justify-center">
            <Link
              href="/"
              className="group flex items-center gap-2 rounded-xl px-2 py-1"
              aria-label="Go to home page"
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
            <p className="text-sm text-muted-foreground">
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
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
                  <p className="first-letter:uppercase text-sm text-muted-foreground transition-colors duration-200 group-hover:text-primary">
                    {icon.platform}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg">Discover</h3>
            {discover.map((item, index) => (
              <Link
                href={`/${item.link}`}
                key={index}
                className="first-letter:uppercase text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg">Help Center</h3>
            {helpCenter.map((item, index) => (
              <Link
                href={`/${item.link}`}
                key={index}
                className="first-letter:uppercase text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg">Subscribe</h3>
            <div className="flex w-full items-center gap-2 rounded-lg border p-2 shadow-sm focus-within:ring-2 focus-within:ring-primary transition">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border-none focus:outline-none focus:ring-0 focus-visible:ring-0 bg-transparent"
              />
              <Send className="cursor-pointer text-primary hover:scale-110 transition-transform duration-200" />
            </div>
            <p className="text-xs text-muted-foreground">
              Discover, collect and sell extraordinary NFTs on Ciscryp. Join the
              largest NFT marketplace.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
