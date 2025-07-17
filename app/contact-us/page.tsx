import { Metadata } from "next";
import ContactUs from "./contact";

export const metadata: Metadata = {
  title: "Contact us",
};

export default function CollectionPage() {
  return <ContactUs />;
}
