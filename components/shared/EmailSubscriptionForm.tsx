import Image from "next/image";
import { Send } from "lucide-react";
import image from "@/public/assets/image";
import { title } from "process";
import { Input } from "../ui/input";
import React from "react";

const subscribeItems = [
  {
    id: 1,
    title: "Get more discount",
  },
  {
    id: 2,
    title: "Get premium magazines",
  },
];

export const EmailSubscriptionForm: React.FC = () => {
  return (
    <section className="w-full min-h-1/2 pt-36 px-6 md:px-12">
      <div className="body-container w-full flex flex-col md:flex-row gap-16">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h1 className="text-3xl font-bold">Never miss a drop!</h1>
          <p className="text-muted-foreground">
            Subscribe to our super-exclusive drop list and be the first to know
            about upcoming drops
          </p>
          <div className="flex flex-col gap-2 pt-6">
            {subscribeItems.map((item) => (
              <div
                className="flex items-center gap-4 p-3 bg-accent/30 rounded-xl shadow-sm border border-accent"
                key={item.id}
              >
                <span className="text-sm font-medium bg-primary text-white rounded-full w-8 h-8 grid place-items-center">
                  0{item.id}
                </span>
                <h2 className="text-base font-semibold text-foreground">
                  {item.title}
                </h2>
              </div>
            ))}
          </div>
          <div className="flex w-full mt-6 items-center gap-2 rounded-lg border p-2 shadow-sm focus-within:ring-2 focus-within:ring-primary transition">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border-none focus:outline-none focus:ring-0 focus-visible:ring-0 bg-transparent"
            />
            <Send className="cursor-pointer text-primary hover:scale-110 transition-transform duration-200" />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <Image
            src={image.update}
            alt="Subscribe png"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};
