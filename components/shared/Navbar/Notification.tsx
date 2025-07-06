import Image from "next/image";
import image from "@/public/assets/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const Notification = () => {
  return (
    <ScrollArea className="w-56 h-64 rounded-md border p-4 shadow-xl border rounded-md bg-background z-100">
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
