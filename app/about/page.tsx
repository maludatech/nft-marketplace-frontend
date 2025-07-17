import { Metadata } from "next";
import About from "./about";

export const metadata: Metadata = {
  title: "About us",
};

export default function CollectionPage() {
  return <About />;
}
