"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import image from "@/public/assets/image";
import { Gem } from "lucide-react";
import Link from "next/link";

export const Brand = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <Link
            href={"/"}
            className="group flex items-center gap-2 rounded-xl px-2 py-1"
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

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Earn free crypto with Ciscrypt
          </h1>

          <p className="text-muted-foreground">
            A creative agency that leads and inspires.
          </p>

          <div className="flex gap-4">
            <Button onClick={() => {}} className="cursor-pointer">
              Create
            </Button>
            <Button
              variant="outline"
              className="cursor-pointer"
              onClick={() => {}}
            >
              Discover
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            src={image.earn}
            alt="earn crypto"
            width={800}
            height={600}
            className="w-full max-w-xl mx-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};
