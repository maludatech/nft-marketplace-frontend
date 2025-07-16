import { Skeleton } from "@/components/ui/skeleton";

const NFTDetailSkeleton = () => {
  return (
    <div className="pt-32 pb-12 px-6 md:px-12 w-full">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-10 w-10 rounded-md" />
        </div>

        {/* Creator Info */}
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-5 w-32" />
          </div>
        </div>

        {/* Auction Card */}
        <div className="p-6 space-y-6 border rounded-xl">
          {/* Auction ending in */}
          <Skeleton className="h-4 w-36" />

          {/* Time blocks */}
          <div className="grid grid-cols-4 gap-4 text-center">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-1">
                <Skeleton className="h-6 w-8 mx-auto" />
                <Skeleton className="h-4 w-10 mx-auto" />
              </div>
            ))}
          </div>

          {/* Bid */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-4 w-20" />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <Skeleton className="h-10 w-32 rounded-md" />
            <Skeleton className="h-10 w-32 rounded-md" />
          </div>

          {/* Tabs */}
          <div className="space-y-4">
            <div className="flex gap-2">
              <Skeleton className="h-8 w-24 rounded-md" />
              <Skeleton className="h-8 w-24 rounded-md" />
              <Skeleton className="h-8 w-24 rounded-md" />
            </div>

            {/* Tab Content */}
            <div className="flex flex-col gap-4 mt-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-40" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetailSkeleton;
