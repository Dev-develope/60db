import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PlaybackSection from "@/components/PlaybackSection";
import FeatureGrid from "@/components/FeatureGrid";
import UseCasesSection from "@/components/UseCasesSection";
import SocialProofSection from "@/components/SocialProofSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PlaybackSection />
        <FeatureGrid />
        <UseCasesSection />
        <SocialProofSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
