"use client";

import { useMemo } from "react";
import Image from "next/image";
import image from "@/public/assets/image";
import { BsCircleFill } from "react-icons/bs";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "../ui/card";

const categoryItems = [
  {
    category: "Arts",
    backgroundImage: image.creatorbackground1,
    amountOfNFTs: 1255,
    theme: "oklch(0.65 0.2 300)",
  },
  {
    category: "Entertainment",
    backgroundImage: image.creatorbackground2,
    amountOfNFTs: 1200,
    theme: "oklch(0.95 0.2 100)",
  },
  {
    category: "Music",
    backgroundImage: image.creatorbackground3,
    amountOfNFTs: 2300,
    theme: "oklch(0.705 0.212 242)",
  },
  {
    category: "News",
    backgroundImage: image.creatorbackground4,
    amountOfNFTs: 800,
    theme: "oklch(0.65 0.22 27)",
  },
  {
    category: "Science",
    backgroundImage: image.creatorbackground9,
    amountOfNFTs: 3200,
    theme: "oklch(0.75 0.2 142)",
  },
  {
    category: "Sports",
    backgroundImage: image.creatorbackground6,
    amountOfNFTs: 15,
    theme: "oklch(0.72 0.23 20)",
  },
];

export const Category: React.FC = () => {
  const autoplay = useMemo(
    () => Autoplay({ delay: 3000, stopOnInteraction: true }),
    []
  );

  return (
    <section className="w-full pt-36 px-6 md:px-12">
      <div className="body-container flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Browse by category</h2>
        <p className="text-lg text-muted-foreground">
          Explore the NFTs in the most featured categories.
        </p>

        <Carousel
          plugins={[autoplay]}
          onMouseEnter={autoplay.stop}
          onMouseLeave={autoplay.reset}
          className="w-full mt-10"
        >
          <CarouselContent className="gap-6">
            {categoryItems.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <Card className="rounded-md overflow-hidden cursor-pointer py-0">
                  <div className="relative h-[180px] w-full">
                    <Image
                      src={item.backgroundImage}
                      alt={item.category}
                      fill
                      className="object-cover rounded-t-md"
                    />
                  </div>
                  <div className="flex items-center gap-2 p-4">
                    <BsCircleFill
                      size={20}
                      style={{ color: item.theme }}
                      className="shrink-0"
                    />
                    <div className="flex flex-col">
                      <h4 className="text-[16px] font-semibold">
                        {item.category}
                      </h4>
                      <span className="text-sm text-muted-foreground">
                        {item.amountOfNFTs} items
                      </span>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 cursor-pointer" />
          <CarouselNext className="right-0 cursor-pointer" />
        </Carousel>
      </div>
    </section>
  );
};
