import { Metadata } from "next";
import LoginAndSignUp from "@/components/shared/LoginAndSignUp";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function CollectionPage() {
  return <LoginAndSignUp />;
}
