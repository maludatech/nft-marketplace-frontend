import { HeroSection } from "@/components/shared/HeroSection";
import { NFTSlider } from "@/components/shared/NFTSlider";
import { Services } from "@/components/shared/Services";
import { EmailSubscriptionForm } from "@/components/shared/EmailSubscriptionForm";
import { Category } from "@/components/shared/Category";
import Filter from "@/components/shared/Filter";
import NFTCard from "@/components/shared/NFTCard";
import { Collection } from "@/components/shared/Collection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <NFTSlider />
      <Collection />
      <Filter />
      <NFTCard />
      <EmailSubscriptionForm />
      <Category />
    </>
  );
}
