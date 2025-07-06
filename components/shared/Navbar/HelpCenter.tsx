import Link from "next/link";

interface links {
  name: string;
  link: string;
}

export const HelpCenter = () => {
  const discover: links[] = [
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
    <div className="flex flex-col gap-3 w-full">
      {discover.map((item: links, index: number) => (
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
