import { Metadata } from "next";
import ConnectWallet from "./connect-wallet";

export const metadata: Metadata = {
  title: "Connect Wallet",
};

export default function CollectionPage() {
  return <ConnectWallet />;
}
