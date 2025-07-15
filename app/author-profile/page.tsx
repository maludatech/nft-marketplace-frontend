import { Metadata } from "next";
import AuthorProfile from "./author-profile";

export const metadata: Metadata = {
  title: "Author Profile",
};

export default function CollectionPage() {
  return <AuthorProfile />;
}
