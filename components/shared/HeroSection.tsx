import Image from "next/image";
import image from "@/public/assets/image";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="w-full h-screen">
      <div className="body-container pt-40 pb-12 px-12 flex flex-col sm:flex-row gap-14 sm:gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            Discover, collect, and sell NFTs 🖼️
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl">
            Discover the most outstanding NTFs in all topics of life. Creative
            your NTFs and sell them
          </p>
          <Button className="rounded-full flex items-center gap-2 text-[16px] cursor-pointer p-6.5 w-fit text-white">
            Start your search <Search />
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Image
            src={image.hero}
            alt="hero"
            width={600}
            height={600}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
