import { HeroSection } from "@/components/shared/HeroSection";
import { NFTSlider } from "@/components/shared/NFTSlider";
import { Services } from "@/components/shared/Services";
import { EmailSubscriptionForm } from "@/components/shared/EmailSubscriptionForm";
import { Category } from "@/components/shared/Category";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <NFTSlider />
      <EmailSubscriptionForm />
      <Category />
    </>
  );
}
