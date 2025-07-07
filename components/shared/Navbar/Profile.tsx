import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  User,
  Image as Gallery,
  UserPen,
  BadgeQuestionMark,
  LogOut,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import image from "@/public/assets/image";

export const Profile = () => {
  const { theme } = useTheme();

  const shadow =
    theme === "dark"
      ? "0 10px 30px rgba(255,255,255,0.1)"
      : "0 10px 30px rgba(0,0,0,0.08)";
  const profileItems = [
    {
      icon: <User size={20} className="text-gray-500" />,
      title: "My Profile",
      link: "/my-profile",
    },
    {
      icon: <Gallery size={20} className="text-gray-500" />,
      title: "My Items",
      link: "/nft-details",
    },
    {
      icon: <UserPen size={20} className="text-gray-500" />,
      title: "Edit Profile",
      link: "/edit-profile",
    },
  ];

  const settingsItems = [
    {
      icon: <BadgeQuestionMark size={20} className="text-gray-500" />,
      title: "Help Center",
      link: "/help",
    },
    {
      icon: <LogOut size={20} className="text-gray-500" />,
      title: "Disconnect",
      link: "/disconnect",
    },
  ];

  return (
    <ScrollArea
      className="w-56 h-64 rounded-md border p-4 bg-background z-[100]"
      style={{ boxShadow: shadow }}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-3 items-center">
          <Image
            src={image.user1}
            alt="user profile"
            width={50}
            height={50}
            className="object-cover rounded-full"
          />
          <div>
            <h1 className="text-lg font-bold">MaludaTech</h1>
            <small className="text-xs text-muted-foreground">
              0xb281t7xo16vbs0....
            </small>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-2">
          {profileItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="flex items-center gap-2 text-muted-foreground hover:bg-accent p-2 rounded-md transition-colors"
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
        <Separator />
        <div className="flex flex-col gap-2">
          {settingsItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="flex items-center gap-2 text-muted-foreground hover:bg-accent p-2 rounded-md transition-colors"
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
        <div></div>
      </div>
    </ScrollArea>
  );
};
