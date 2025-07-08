"use client";

import { useMemo } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Autoplay from "embla-carousel-autoplay";
import { MdVerified } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import image from "@/public/assets/image";

const slides = [
  {
    title: "Hello NFT",
    id: 1,
    creator: "Daulat Hussain",
    collection: "GYm",
    price: "00664 ETH",
    like: 243,
    image: image.user1,
    nftImage: image.nft_image_1,
    time: {
      days: 21,
      hours: 40,
      minutes: 81,
      seconds: 15,
    },
  },
  {
    title: "Buddy NFT",
    id: 2,
    creator: "Shoaib Hussain",
    collection: "Home",
    price: "0000004 ETH",
    like: 243,
    image: image.user2,
    nftImage: image.nft_image_2,
    time: {
      days: 77,
      hours: 11,
      minutes: 21,
      seconds: 45,
    },
  },
  {
    title: "Gym NFT",
    id: 3,
    creator: "Raayan Hussain",
    collection: "GYm",
    price: "0000064 ETH",
    like: 243,
    image: image.user3,
    nftImage: image.nft_image_3,
    time: {
      days: 37,
      hours: 20,
      minutes: 11,
      seconds: 55,
    },
  },
  {
    title: "Home NFT",
    id: 4,
    creator: "Raayan Hussain",
    collection: "GYm",
    price: "4664 ETH",
    like: 243,
    image: image.user4,
    nftImage: image.nft_image_1,
    time: {
      days: 87,
      hours: 29,
      minutes: 10,
      seconds: 15,
    },
  },
];

export const NFTSlider = () => {
  const autoplay = useMemo(
    () => Autoplay({ delay: 4000, stopOnInteraction: true }),
    []
  );

  const { theme } = useTheme();

  const shadow =
    theme === "dark"
      ? "0 10px 30px rgba(255,255,255,0.1)"
      : "0 10px 30px rgba(0,0,0,0.08)";

  return (
    <section className="relative w-full overflow-hidden">
      <div className="body-container pt-36 pb-12 px-6 md:px-12">
        <h2 className="mb-12 text-3xl font-bold">Explore Hot NFTs</h2>
        <Carousel
          plugins={[autoplay]}
          onMouseEnter={autoplay.stop}
          onMouseLeave={autoplay.reset}
          className="relative"
        >
          <CarouselContent className="gap-6">
            {slides.map((s) => (
              <CarouselItem key={s.id} className="w-[300px]">
                <div
                  className="flex flex-col-reverse md:flex-row"
                  style={{ boxShadow: shadow }}
                >
                  <div className="w-full flex flex-col border h-fit bg-accent/20 rounded-2xl gap-4 md:w-1/2 p-10">
                    <h3 className="text-3xl font-semibold">{s.title}</h3>
                    <div className="flex flex-col sm:flex-row w-full sm:items-center gap-6 pt-4">
                      <div className="flex gap-2 items-center">
                        <Image
                          src={s.image}
                          alt="user"
                          width={50}
                          height={50}
                          className="object-cover rounded-full"
                        />
                        <div className="flex flex-col gap-1">
                          <p className="text-sm text-muted-foreground">
                            Creator
                          </p>
                          <div className="flex gap-1 items-center">
                            <h3 className="text-sm font-semibold">
                              {s.creator}
                            </h3>
                            <MdVerified className="text-primary text-lg" />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <Image
                          src={image.collection}
                          alt="user"
                          width={50}
                          height={50}
                          className="object-cover rounded-full"
                        />
                        <div className="flex flex-col gap-1">
                          <p className="text-sm text-muted-foreground">
                            Collection
                          </p>
                          <h3 className="text-sm font-semibold">
                            {s.collection}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full rounded-2xl bg-accent border-accent border-8 md:w-1/2">
                    <Image
                      src={s.nftImage}
                      alt={s.title}
                      width={600}
                      height={600}
                      className="object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-0 -translate-y-1/2 bg-background/50 hover:bg-background p-2 rounded-full cursor-pointer" />
          <CarouselNext className="absolute top-1/2 right-0 -translate-y-1/2 bg-background/50 hover:bg-background p-2 rounded-full cursor-pointer" />
        </Carousel>
      </div>
    </section>
  );
};
