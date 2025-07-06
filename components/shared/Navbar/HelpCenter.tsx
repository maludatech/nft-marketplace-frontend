import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface links {
  name: string;
  link: string;
}

export const HelpCenter = () => {
  const helpCenter: links[] = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  return (
    <ScrollArea className="w-56 h-64 rounded-md border p-4 shadow-xl border rounded-md bg-background z-100">
      <div className="p-2 space-y-2">
        {helpCenter.map((item, index) => (
          <Link
            href={`/${item.link}`}
            key={index}
            className="block rounded-md text-muted-foreground hover:bg-accent p-2 transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};
