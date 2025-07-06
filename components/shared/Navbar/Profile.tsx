import Image from "next/image";
import image from "@/public/assets/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const Profile = () => {
  return (
    <ScrollArea className="w-56 h-64 rounded-md border p-4 shadow-xl border rounded-md bg-background z-100">
      <div className="p-2 space-y-2">
        <div className="">
          <h4>Profile</h4>
        </div>
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};
