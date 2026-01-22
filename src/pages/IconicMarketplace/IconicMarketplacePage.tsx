import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IconicMarketplaceHero from "./IconicMarketplaceHero";
import LegendaryVoices from "./LegendaryVoices";
import IconicMarketplaceIntro from "./IconicMarketplaceIntro";
import FeaturedVoices from "./FeaturedVoices";
import IconicFeatures from "./IconicFeatures";
import BrowseAllVoices from "./BrowseAllVoices";
import CollaborateSection from "./CollaborateSection";
import IconicMarketplaceFAQ from "./IconicMarketplaceFAQ";

export default function IconicMarketplacePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <IconicMarketplaceHero />
        <LegendaryVoices />
        <IconicMarketplaceIntro />
        <FeaturedVoices />
        <IconicFeatures />
        <BrowseAllVoices />
        <CollaborateSection />
        <IconicMarketplaceFAQ />
      </main>
      <Footer />
    </>
  );
}
