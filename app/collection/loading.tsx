import { Skeleton } from "@/components/ui/skeleton";

const CollectionSkeleton = () => {
  return (
    <div className="w-full">
      {/* Banner */}
      <div className="w-full">
        <Skeleton className="hidden md:block w-full h-[300px]" />
        <Skeleton className="block md:hidden w-full h-[200px]" />
      </div>

      <div className="body-container">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-start gap-6 p-6">
          {/* Left: Image + Social */}
          <div>
            <Skeleton className="w-[300px] h-[300px] rounded-xl" />
            <div className="flex gap-4 mt-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-6 w-6 rounded-full" />
              ))}
            </div>
          </div>

          {/* Right: Title + Desc + Cards */}
          <div className="flex-1 space-y-4">
            <Skeleton className="h-8 w-2/3" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-3/4" />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-card p-4 rounded-xl flex flex-col items-center gap-3 text-center"
                >
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-5 w-20" />
                  <Skeleton className="h-4 w-16" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* NFT Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="relative bg-background border rounded-xl overflow-hidden shadow-sm"
            >
              {/* Icons */}
              <div className="absolute top-4 left-4 z-10">
                <Skeleton className="h-8 w-8 rounded-full" />
              </div>
              <div className="absolute top-4 right-4 z-10">
                <Skeleton className="h-8 w-16 rounded-full" />
              </div>

              {/* NFT Image */}
              <Skeleton className="w-full h-[250px]" />

              {/* Card Content */}
              <div className="px-4 py-4 space-y-2">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-10" />
                </div>

                <div className="flex flex-row gap-2 items-center justify-between text-sm">
                  <Skeleton className="h-8 w-1/2" />
                  <Skeleton className="h-4 w-1/3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionSkeleton;
