"use client";

import { ReactNode, useState } from "react";
import { Wallet, Wallet2, WalletCards } from "lucide-react";

interface Provider {
  icon: ReactNode;
  name: string;
}

const ConnectWallet = () => {
  const [activeBtn, setActiveBtn] = useState<number>(1);

  const providerArray: Provider[] = [
    {
      icon: <Wallet className="w-8 h-8" />,
      name: "Metamask",
    },
    {
      icon: <Wallet2 className="w-8 h-8" />,
      name: "WalletConnect",
    },
    {
      icon: <WalletCards className="w-8 h-8" />,
      name: "WalletLink",
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      name: "Formatic",
    },
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full bg-card p-6 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Connect your wallet
        </h1>
        <p className="text-muted-foreground mb-6 text-sm">
          Connect with one of our available wallet providers or create a new one
        </p>

        <div className="grid gap-4">
          {providerArray.map((el, i) => (
            <div
              key={i}
              onClick={() => setActiveBtn(i)}
              className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-colors
                ${
                  activeBtn === i
                    ? "border-primary bg-muted"
                    : "border-border hover:bg-muted/50"
                }`}
            >
              <div className="shrink-0 text-primary">{el.icon}</div>
              <p className="text-base font-medium text-foreground">{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
