import Image from "next/image";
import image from "@/public/assets/image";
import { Button } from "../ui/button";

export const HeroSection = () => {
  return (
    <div className="w-full h-screen">
      <div className="body-container pt-48 pb-12 px-12 flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-foreground">
            Discover, collect, and sell NFTs 🖼️
          </h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};
