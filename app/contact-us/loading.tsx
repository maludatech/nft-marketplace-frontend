import { Skeleton } from "@/components/ui/skeleton";

const ContactUsSkeleton = () => {
  return (
    <section className="py-16 px-4 lg:px-20 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <Skeleton className="h-8 w-32 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i}>
                <Skeleton className="h-5 w-32 mb-2" />
                <Skeleton className="h-4 w-full max-w-sm" />
              </div>
            ))}
            <div>
              <Skeleton className="h-5 w-32 mb-3" />
              <div className="flex items-center gap-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Skeleton key={i} className="h-6 w-6 rounded-full" />
                  ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-full" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-full" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-28 w-full" />
            </div>

            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSkeleton;
