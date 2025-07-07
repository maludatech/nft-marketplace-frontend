import Image from "next/image";
import { useTheme } from "next-themes";
import image from "@/public/assets/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const Notification = () => {
  const { theme } = useTheme();

  const shadow =
    theme === "dark"
      ? "0 10px 30px rgba(255,255,255,0.1)"
      : "0 10px 30px rgba(0,0,0,0.08)";

  return (
    <ScrollArea
      className="w-56 h-64 p-4 border rounded-md bg-background z-100"
      style={{ boxShadow: shadow }}
    >
      <div className="p-2 space-y-2">
        <p className="text-xl font-semibold mb-8"></p>
        <div className="rounded-md">
          <Image
            src={image.user1}
            alt="profile"
            width={50}
            height={50}
            className="object-cover rounded-full"
          />
        </div>
        <div className="">
          <h4>Maludatech</h4>
          <p>Address </p>
          <small>3 minutes ago</small>
          <span className=""></span>
        </div>
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};
