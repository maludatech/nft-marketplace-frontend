import Image from "next/image";
import image from "@/public/assets/image";
import { Search } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="w-full min-h-1/2">
      <div className="body-container pt-36 px-12 flex flex-col md:flex-row gap-14 md:gap-8">
        <div className="flex flex-col gap-6 md:gap-8 md:w-1/2 lg:pt-12">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            Discover, collect, and sell NFTs 🖼️
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl">
            Discover the most outstanding NTFs in all topics of life. Creative
            your NTFs and sell them
          </p>
          <button className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-white w-fit cursor-pointer hover:bg-primary/90 transition-colors duration-300">
            Start your search
            <Search className="text-lg" />
          </button>
        </div>
        <div className="flex flex-col gap-4 md:w-1/2">
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
