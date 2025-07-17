import { Skeleton } from "@/components/ui/skeleton";

const FormSkeleton = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="space-y-6">
        {/* Username */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-24 w-full rounded-md" />
        </div>

        {/* Website */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        </div>

        {/* Socials */}
        {["Facebook", "Twitter", "Instagram"].map((label, idx) => (
          <div key={idx} className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-10 w-10 rounded-md" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
          </div>
        ))}

        {/* Wallet */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-10 w-full rounded-md" />
            <Skeleton className="h-10 w-10 rounded-md" />
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-end pt-4">
          <Skeleton className="h-10 w-40 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default FormSkeleton;
