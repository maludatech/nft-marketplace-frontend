import Link from "next/link";
import { useTheme } from "next-themes";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface links {
  name: string;
  link: string;
}

export const HelpCenter = () => {
  const { theme } = useTheme();

  const shadow =
    theme === "dark"
      ? "0 10px 30px rgba(255,255,255,0.1)"
      : "0 10px 30px rgba(0,0,0,0.08)";

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
    <ScrollArea
      className="w-56 h-64 rounded-md border p-4 bg-background z-100"
      style={{ boxShadow: shadow }}
    >
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
