import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const NFTTabsSkeleton = () => (
  <div className="flex flex-col gap-4 mt-4">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="flex items-center gap-4">
        <Skeleton className="w-10 h-10 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-[180px]" />
          <Skeleton className="h-2 w-[100px]" />
        </div>
      </div>
    ))}
  </div>
);

const NFTDetailSkeleton = () => (
  <div className="pt-32 pb-12 px-6 md:px-12 w-full">
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-8 w-8 rounded-md" />
      </div>

      {/* Creator Info */}
      <div className="flex items-center gap-4">
        <Skeleton className="w-10 h-10 rounded-full" />
        <div className="space-y-1">
          <Skeleton className="h-2 w-20" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>

      {/* Auction Info */}
      <Card className="p-6 space-y-6">
        <Skeleton className="h-4 w-40" />

        <div className="grid grid-cols-4 gap-4 text-center">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-1">
              <Skeleton className="h-5 w-8 mx-auto" />
              <Skeleton className="h-3 w-10 mx-auto" />
            </div>
          ))}
        </div>

        {/* Bid Info */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-44" />
          <Skeleton className="h-3 w-24" />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Skeleton className="h-10 w-32 rounded-md" />
          <Skeleton className="h-10 w-32 rounded-md" />
        </div>

        {/* Tabs */}
        <Tabs value="history" className="mt-6">
          <TabsList className="w-full justify-start gap-2">
            <TabsTrigger value="history">
              <Skeleton className="h-5 w-20" />
            </TabsTrigger>
            <TabsTrigger value="provenance">
              <Skeleton className="h-5 w-24" />
            </TabsTrigger>
            <TabsTrigger value="owner">
              <Skeleton className="h-5 w-16" />
            </TabsTrigger>
          </TabsList>

          <TabsContent value="history">
            <NFTTabsSkeleton />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  </div>
);

export default NFTDetailSkeleton;
