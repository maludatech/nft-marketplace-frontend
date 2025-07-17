import { Metadata } from "next";
import Subscription from "./subscribtion";

export const metadata: Metadata = {
  title: "Subscription",
};

export default function CollectionPage() {
  return <Subscription />;
}
