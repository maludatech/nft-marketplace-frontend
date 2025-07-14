import { Metadata } from "next";
import { Collection } from "./collection";

export const metadata: Metadata = {
  title: "Collection",
};

export default function CollectionPage() {
  return <Collection />;
}
