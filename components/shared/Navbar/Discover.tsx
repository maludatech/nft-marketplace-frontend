import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface discoverItems {
  name: string;
  link: string;
}

export const Discover = () => {
  const discover: discoverItems[] = [
    { name: "Collection", link: "collection" },
    { name: "Search", link: "search" },
    { name: "Author Profile", link: "author-profile" },
    { name: "NFT Details", link: "NFT-details" },
    { name: "Account Settings", link: "account-settings" },
    { name: "Connect Wallet", link: "connect-wallet" },
    { name: "Blog", link: "blog" },
  ];

  return (
    <ScrollArea className="w-56 h-64 rounded-md border p-4 shadow-xl border rounded-md bg-background z-100">
      <div className="p-2 space-y-2">
        {discover.map((item, index) => (
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
