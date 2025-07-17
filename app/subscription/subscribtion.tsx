"use client";

import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Subscription = () => {
  const subscriptionArray = [
    {
      plan: "STARTER",
      price: "$5/mo",
      popular: "",
      service: ["Automated Reporting", "Faster Processing", "Customizations"],
    },
    {
      plan: "BASIC",
      price: "$15/mo",
      popular: "POPULAR",
      service: [
        "Everything in Starter",
        "100 Builds",
        "Progress Reports",
        "Premium Support",
      ],
    },
    {
      plan: "PLUS",
      price: "$25/mo",
      popular: "",
      service: [
        "Everything in Basic",
        "Unlimited Builds",
        "Advanced Analytics",
        "Company Evaluations",
      ],
    },
  ];

  return (
    <section className="w-full pt-32 pb-12 px-6 md:px-12 w-full">
      <div className="max-w-5xl mx-auto px-4 flex flex-col gap-8 justify-center">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">💎Subscription</h1>
          <p className="text-muted-foreground">
            Pricing to fit the needs of any company size.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subscriptionArray.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 border border-muted rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold">{item.plan}</span>
                {item.popular && (
                  <small className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                    {item.popular}
                  </small>
                )}
              </div>

              <p className="text-3xl font-bold">{item.price}</p>

              <div className="flex flex-col gap-2 mt-4">
                {item.service.map((serviceItem, j) => (
                  <p
                    key={j}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-green-500" />
                    {serviceItem}
                  </p>
                ))}
              </div>

              <Button className="mt-6 w-full cursor-pointer">Submit</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscription;
