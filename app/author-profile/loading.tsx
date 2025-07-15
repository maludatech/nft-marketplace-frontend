import { Skeleton } from "@/components/ui/skeleton";

const AuthorProfileSkeleton = () => {
  return (
    <div className="space-y-6 p-4 w-full">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Skeleton className="h-40 w-40 rounded-full" />

        <div className="flex-1 space-y-3">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-72" />
          <Skeleton className="h-4 w-64" />

          <div className="flex gap-4 mt-4">
            <Skeleton className="h-10 w-20 rounded-md" />
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-10 w-10 rounded-md" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mt-6">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Skeleton key={idx} className="h-10 w-28 rounded-md" />
        ))}
        <Skeleton className="h-10 w-40 ml-auto rounded-md" />
      </div>

      {/* Grid Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-60 w-full rounded-xl" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorProfileSkeleton;
