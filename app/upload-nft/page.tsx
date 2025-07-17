import { Metadata } from "next";
import UploadNFT from "./upload-nft";

export const metadata: Metadata = {
  title: "Upload NFT",
};

export default function CollectionPage() {
  return <UploadNFT />;
}
