import { Skeleton } from "@/components/ui/skeleton";

const ConnectWalletSkeleton = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full bg-card p-6 rounded-2xl shadow-xl space-y-6">
        <Skeleton className="h-8 w-2/3" /> {/* Title */}
        <Skeleton className="h-4 w-full" /> {/* Subtitle */}
        <div className="grid gap-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-muted/40"
            >
              <Skeleton className="w-8 h-8 rounded-full" /> {/* Icon */}
              <Skeleton className="h-4 w-1/2" /> {/* Text */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletSkeleton;
