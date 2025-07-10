import { HeroSection } from "@/components/shared/HeroSection";
import { NFTSlider } from "@/components/shared/NFTSlider";
import { Services } from "@/components/shared/Services";
import { EmailSubscriptionForm } from "@/components/shared/EmailSubscriptionForm";
import { Category } from "@/components/shared/Category";
import Filter from "@/components/shared/Filter";
import NFTCard from "@/components/shared/NFTCard";
import { TopCollection } from "@/components/shared/TopCollection";
import FollowerTab from "@/components/shared/FollowerTab";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <NFTSlider />
      <FollowerTab />
      <TopCollection />
      <Filter />
      <NFTCard />
      <EmailSubscriptionForm />
      <Category />
    </>
  );
}
