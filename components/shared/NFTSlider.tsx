"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Autoplay from "embla-carousel-autoplay";
import { MdVerified } from "react-icons/md";
import { Timer, Heart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import image from "@/public/assets/image";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

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

// Normalize overflowed time (e.g. 81 minutes => 1h 21m)
function convertToSeconds(t: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) {
  const totalMinutes = t.hours * 60 + t.minutes;
  const totalHours = Math.floor(totalMinutes / 60) + t.days * 24;
  const minutes = totalMinutes % 60;

  const totalSeconds =
    Math.floor(totalHours / 24) * 86400 +
    (totalHours % 24) * 3600 +
    minutes * 60 +
    t.seconds;

  return totalSeconds;
}

function convertFromSeconds(total: number) {
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return { days, hours, minutes, seconds };
}

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

  const [timeLeft, setTimeLeft] = useState(
    slides.map((s) => convertToSeconds(s.time))
  );
  const [likes, setLikes] = useState(slides.map((s) => s.like));
  const [liked, setLiked] = useState(slides.map(() => false));

  const toggleLike = (index: number) => {
    setLiked((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });

    setLikes((prev) => {
      const updated = [...prev];
      updated[index] = liked[index] ? prev[index] - 1 : prev[index] + 1;
      return updated;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev.map((t) => (t > 0 ? t - 1 : 0)));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
            {slides.map((s, idx) => {
              const countdown = convertFromSeconds(Number(timeLeft[idx]) || 0);
              return (
                <CarouselItem key={s.id} className="w-[300px]">
                  <div className="flex flex-col-reverse lg:flex-row w-full h-full min-h-[600px]">
                    <div
                      className="w-full flex flex-col h-full bg-accent/20 rounded-b-2xl border-b border-x lg:border-l lg:border-y lg:rounded-l-2xl lg:rounded-r-none gap-4 lg:w-1/2 p-10"
                      style={{ boxShadow: shadow }}
                    >
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
                            alt="collection"
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

                      <div className="w-full relative mt-10">
                        <p className="absolute -top-3 left-5 bg-background px-2 text-sm text-muted-foreground z-20">
                          Current Bid
                        </p>
                        <div className="w-full flex flex-col gap-2 lg:flex-row border-2 border-primary rounded-md p-6 lg:items-center">
                          <p className="text-primary text-4xl font-semibold">
                            {s.price}
                          </p>
                          <span className="text-sm text-muted-foreground">
                            (≈ $3,221.22)
                          </span>
                        </div>
                      </div>

                      <div className="w-full flex flex-col gap-2">
                        <div className="flex flex-row gap-1 items-center text-muted-foreground text-[16px]">
                          <Timer />
                          <p>Auction ending in:</p>
                        </div>
                        <div className="grid place-items-start w-full grid-cols-4 pt-4">
                          <div className="flex flex-col gap-2 text-center">
                            <h2 className="text-4xl font-semibold">
                              {countdown.days}
                            </h2>
                            <span className="text-muted-foreground text-lg">
                              Days
                            </span>
                          </div>
                          <div className="flex flex-col gap-2 text-center">
                            <h2 className="text-4xl font-semibold">
                              {countdown.hours}
                            </h2>
                            <span className="text-muted-foreground text-lg">
                              hours
                            </span>
                          </div>
                          <div className="flex flex-col gap-2 text-center">
                            <h2 className="text-4xl font-semibold">
                              {countdown.minutes}
                            </h2>
                            <span className="text-muted-foreground text-lg">
                              mins
                            </span>
                          </div>
                          <div className="flex flex-col gap-2 text-center">
                            <h2 className="text-4xl font-semibold">
                              {countdown.seconds}
                            </h2>
                            <span className="text-muted-foreground/50 text-lg">
                              secs
                            </span>
                          </div>
                        </div>
                      </div>

                      <Separator className="h-4" />

                      <div className="flex flex-col sm:flex-row w-full sm:items-center gap-6 pt-4">
                        <Button className="rounded-full w-full sm:w-1/2 py-6 px-3 text-lg cursor-pointer">
                          Place a bid
                        </Button>
                        <Button
                          variant={"outline"}
                          className="rounded-full w-full sm:w-1/2 py-6 px-3 text-lg cursor-pointer"
                        >
                          View Item
                        </Button>
                      </div>
                    </div>

                    <div
                      className="w-full relative h-full rounded-2xl flex items-center justify-center rounded-t-2xl lg:rounded-r-2xl lg:rounded-l-none bg-accent/20 border-accent/20 border-8 lg:w-1/2"
                      style={{ boxShadow: shadow }}
                    >
                      <button
                        className="absolute top-4 right-4 z-20 cursor-pointer flex items-center gap-1 justify-center bg-background/50 hover:bg-background p-2 rounded-full"
                        onClick={() => toggleLike(idx)}
                      >
                        <Heart
                          className={`w-7 h-7 ${
                            liked[idx]
                              ? "fill-red-500 text-red-500"
                              : "text-muted-foreground"
                          }`}
                        />
                        <span className="text-xs text-muted-foreground">
                          {likes[idx]}
                        </span>
                      </button>

                      <Image
                        src={s.nftImage}
                        alt={s.title}
                        width={800}
                        height={800}
                        className="object-cover rounded-2xl h-full"
                      />
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-0 -translate-y-1/2 bg-background/50 hover:bg-background p-2 rounded-full cursor-pointer" />
          <CarouselNext className="absolute top-1/2 right-0 -translate-y-1/2 bg-background/50 hover:bg-background p-2 rounded-full cursor-pointer" />
        </Carousel>
      </div>
    </section>
  );
};
