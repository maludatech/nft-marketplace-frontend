import { Skeleton } from "@/components/ui/skeleton";

const HomePageSkeleton = () => {
  return (
    <div className="space-y-12 px-4 md:px-8 py-10">
      {/* Hero Section */}
      <div className="space-y-4 text-center">
        <Skeleton className="h-10 w-1/2 mx-auto" />
        <Skeleton className="h-6 w-3/4 mx-auto" />
        <Skeleton className="h-[400px] w-full rounded-xl" />
      </div>

      {/* Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-32 w-full rounded-lg" />
        ))}
      </div>

      {/* NFT Slider */}
      <div className="space-y-4">
        <Skeleton className="h-6 w-1/3" />
        <div className="flex gap-4 overflow-x-auto">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="min-w-[200px] h-[300px] rounded-xl" />
          ))}
        </div>
      </div>

      {/* FollowerTab */}
      <div className="space-y-4">
        <Skeleton className="h-6 w-1/3" />
        <div className="flex gap-6 overflow-x-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-[250px] w-[180px] rounded-xl" />
          ))}
        </div>
      </div>

      {/* Top Collection */}
      <div className="space-y-4">
        <Skeleton className="h-6 w-1/3" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-[200px] rounded-xl" />
          ))}
        </div>
      </div>

      {/* Filter & NFTCard */}
      <div className="space-y-4">
        <Skeleton className="h-10 w-1/2" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-[320px] rounded-xl" />
          ))}
        </div>
      </div>

      {/* Email Subscription Form */}
      <div className="space-y-4 text-center">
        <Skeleton className="h-8 w-1/3 mx-auto" />
        <Skeleton className="h-6 w-2/3 mx-auto" />
        <Skeleton className="h-12 w-full sm:w-1/2 mx-auto rounded-full" />
      </div>

      {/* Category */}
      <div className="space-y-4">
        <Skeleton className="h-6 w-1/3" />
        <div className="flex flex-wrap gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-24 rounded-md" />
          ))}
        </div>
      </div>

      {/* Brand */}
      <div className="flex justify-center gap-8 flex-wrap">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-24" />
        ))}
      </div>
    </div>
  );
};

export default HomePageSkeleton;
