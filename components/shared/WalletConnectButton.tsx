import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const WalletConnectButton: React.FC = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    className="w-full rounded-lg bg-primary text-white px-4 py-3 text-sm font-semibold hover:opacity-90 transition-all"
                    type="button"
                  >
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    className="w-full rounded-lg bg-destructive text-white px-4 py-3 text-sm font-semibold hover:opacity-90 cursor-pointer transition-all"
                    type="button"
                  >
                    Wrong network
                  </button>
                );
              }

              return (
                <div className="flex flex-col gap-2">
                  <button
                    onClick={openChainModal}
                    className="w-full rounded-lg bg-muted cursor-pointer text-foreground px-4 py-2 text-sm font-medium hover:bg-muted/70 transition"
                    type="button"
                  >
                    {chain.name}
                  </button>

                  <button
                    onClick={openAccountModal}
                    className="w-full rounded-lg bg-primary cursor-pointer text-white px-4 py-3 text-sm font-semibold hover:opacity-90 transition-all"
                    type="button"
                  >
                    {account.displayName}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
