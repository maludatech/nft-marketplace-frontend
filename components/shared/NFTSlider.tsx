"use client";

import { useMemo } from "react";
import Image from "next/image";
import image from "@/public/assets/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const NFTSlider = () => {
  const plugin = useMemo(
    () => Autoplay({ delay: 3000, stopOnInteraction: true }),
    []
  );

  const sliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "Daulat Hussain",
      collection: "GYm",
      price: "0.0664 ETH",
      like: 243,
      image: image.user1,
      nftImage: image.nft_image_1,
    },
    {
      title: "Buddy NFT",
      id: 2,
      name: "Shoaib Hussain",
      collection: "Home",
      price: "0.000004 ETH",
      like: 128,
      image: image.user2,
      nftImage: image.nft_image_2,
    },
    {
      title: "Gym NFT",
      id: 3,
      name: "Raayan Hussain",
      collection: "GYm",
      price: "0.000064 ETH",
      like: 317,
      image: image.user3,
      nftImage: image.nft_image_3,
    },
    {
      title: "Home NFT",
      id: 4,
      name: "Raayan Hussain",
      collection: "GYm",
      price: "4.664 ETH",
      like: 219,
      image: image.user4,
      nftImage: image.nft_image_1,
    },
  ];

  return (
    <section className="w-full min-h-[50vh] py-20">
      <div className="body-container px-6 md:px-12">
        <Carousel
          plugins={[plugin]}
          className="w-full"
          onMouseEnter={plugin.stop}
          onMouseLeave={plugin.reset}
        >
          <CarouselContent>
            {sliderData.map((data) => (
              <CarouselItem key={data.id} className="p-4">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Text Section */}
                  <div className="md:w-1/2 space-y-4">
                    <h2 className="text-3xl font-bold">{data.title}</h2>
                    <p className="text-muted-foreground">
                      Created by{" "}
                      <span className="font-semibold">{data.name}</span>
                    </p>
                    <p className="text-lg">Price: {data.price}</p>
                    <p className="text-sm text-muted-foreground">
                      Collection: {data.collection}
                    </p>
                  </div>

                  {/* Image Section */}
                  <div className="md:w-1/2">
                    <Image
                      src={data.nftImage}
                      alt={data.title}
                      width={500}
                      height={500}
                      className="rounded-lg shadow-lg object-cover w-full h-auto"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-0 md:left-6" />
          <CarouselNext className="right-0 md:right-6" />
        </Carousel>
      </div>
    </section>
  );
};
