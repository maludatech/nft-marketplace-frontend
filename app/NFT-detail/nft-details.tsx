"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  Timer,
  Verified,
  MoreVertical,
  DollarSign,
  ArrowUpRight,
  Flag,
  Trash2,
  Wallet,
  Percent,
} from "lucide-react";
import image from "@/public/assets/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface NFTTabProps {
  dataTab: StaticImageData[];
  icon?: React.ReactNode;
}

const NFTTabs = ({ dataTab, icon }: NFTTabProps) => (
  <div className="flex flex-col gap-4 mt-4">
    {dataTab.map((img, i) => (
      <div key={i} className="flex items-center gap-4">
        <Image
          src={img}
          alt="profile image"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">
            Offer by $770 by <span className="font-medium">Shoaib Bhai</span>{" "}
            {icon && <span className="inline-block">{icon}</span>}
          </p>
          <small className="text-xs text-muted-foreground">
            Jun 14 - 4:12 PM
          </small>
        </div>
      </div>
    ))}
  </div>
);

const NFTDetail = () => {
  const [tab, setTab] = useState<"history" | "provenance" | "owner">("history");

  const historyArray: StaticImageData[] = [
    image.user1,
    image.user2,
    image.user3,
  ];
  const provenanceArray: StaticImageData[] = [
    image.user4,
    image.user5,
    image.user6,
  ];
  const ownerArray: StaticImageData[] = [image.user6, image.user2];

  return (
    <section className="pt-32 pb-12 px-6 md:px-12 w-full">
      <div className="body-container flex flex-col gap-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">BearX #23453</h1>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuItem className="flex gap-2">
                <DollarSign className="w-4 h-4" />
                Change price
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-2">
                <ArrowUpRight className="w-4 h-4" />
                Transfer
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-2 text-red-500">
                <Flag className="w-4 h-4" />
                Report abuse
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-2 text-red-500">
                <Trash2 className="w-4 h-4" />
                Delete item
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Creator Info */}
        <div className="flex items-center gap-4">
          <Image
            src={image.user2}
            alt="creator"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <small className="text-xs text-muted-foreground">Creator</small>
            <p className="flex items-center gap-1 text-sm">
              Karli Costa <Verified className="text-blue-500 w-4 h-4" />
            </p>
          </div>
        </div>

        {/* Auction Info */}
        <Card className="p-6 space-y-4">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Timer /> Auction ending in:
          </p>

          <div className="grid grid-cols-4 gap-4 text-center">
            {["2 Days", "22 Hours", "45 Mins", "12 Secs"].map((time, index) => (
              <div key={index}>
                <p className="font-bold text-lg">{time.split(" ")[0]}</p>
                <small className="text-xs">{time.split(" ")[1]}</small>
              </div>
            ))}
          </div>

          {/* Current Bid */}
          <div className="text-sm space-y-1">
            <p className="font-medium">Current Bid</p>
            <p>
              1.000 ETH{" "}
              <span className="text-muted-foreground">( ≈ $3,221.22)</span>
            </p>
            <p className="text-muted-foreground">[96 in stock]</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button className="flex items-center gap-2">
              <Wallet className="w-4 h-4" />
              Place a Bid
            </Button>
            <Button variant="secondary" className="flex items-center gap-2">
              <Percent className="w-4 h-4" />
              Make Offer
            </Button>
          </div>

          {/* Tabs */}
          <Tabs
            value={tab}
            onValueChange={(value: any) => setTab(value as any)}
            className="mt-6"
          >
            <TabsList className="w-full justify-start gap-2">
              <TabsTrigger value="history">Bid History</TabsTrigger>
              <TabsTrigger value="provenance">Provenance</TabsTrigger>
              <TabsTrigger value="owner">Owner</TabsTrigger>
            </TabsList>

            <TabsContent value="history">
              <NFTTabs dataTab={historyArray} />
            </TabsContent>
            <TabsContent value="provenance">
              <NFTTabs dataTab={provenanceArray} />
            </TabsContent>
            <TabsContent value="owner">
              <NFTTabs
                dataTab={ownerArray}
                icon={<Verified className="text-blue-500 w-4 h-4" />}
              />
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
};

export default NFTDetail;
