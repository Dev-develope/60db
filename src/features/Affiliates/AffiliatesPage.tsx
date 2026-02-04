import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AffiliatesHero from "./AffiliatesHero";
import AffiliateStories from "./AffiliateStories";
import AffiliateBenefits from "./AffiliateBenefits";
import HowItWorks from "./HowItWorks";
import AffiliatesMediaPack from "./AffiliatesMediaPack";
import AffiliatesFAQ from "./AffiliatesFAQ";


export default function AffiliatesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <AffiliatesHero />
        <AffiliateStories />
        <AffiliateBenefits />
        <HowItWorks />
        <AffiliatesMediaPack />
        <AffiliatesFAQ />
      </main>
      <Footer />
    </>
  );
}
