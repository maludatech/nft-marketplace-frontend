import Link from "next/link";

interface discoverItems {
  name: string;
  link: string;
}

export const Discover = () => {
  const discover: discoverItems[] = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "NFT Details",
      link: "NFT-details",
    },
    {
      name: "Account Settings",
      link: "account-settings",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];

  return (
    <div className="flex flex-col gap-3 w-full">
      {discover.map((item, index) => (
        <Link
          href={`/${item.link}`}
          key={index}
          className="rounded-md text-muted-foreground hover:bg-accent p-2 transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};
