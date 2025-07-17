"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SubscriptionSkeleton = () => {
  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-3">
          <Skeleton className="mx-auto h-8 w-48" />
          <Skeleton className="mx-auto h-4 w-72" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 border border-muted rounded-2xl p-6"
            >
              <div className="flex items-center justify-between">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-4 w-16 rounded-full" />
              </div>

              <Skeleton className="h-8 w-20" />

              <div className="space-y-2 mt-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-2/3" />
              </div>

              <Skeleton className="mt-6 h-10 w-full rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSkeleton;
