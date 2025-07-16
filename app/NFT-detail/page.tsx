import { Metadata } from "next";
import NFTDetail from "./nft-details";

export const metadata: Metadata = {
  title: "NFT detail",
};

export default function CollectionPage() {
  return <NFTDetail />;
}
