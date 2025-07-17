import { Skeleton } from "@/components/ui/skeleton";

const LoginSkeleton = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md bg-card p-6 rounded-2xl shadow-lg space-y-6 animate-pulse">
        {/* Social Buttons */}
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-lg border border-border bg-muted"
            >
              <Skeleton className="w-5 h-5 rounded-full" />
              <Skeleton className="h-4 w-40" />
            </div>
          ))}
        </div>

        {/* OR Divider */}
        <div className="text-center text-xs text-muted-foreground">OR</div>

        {/* Email Input */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-16" />
            </div>
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        </div>

        {/* Button */}
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </div>
  );
};

export default LoginSkeleton;
