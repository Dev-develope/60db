import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SafetyHero from "./SafetyHero";
import SafetyMission from "./SafetyMission";
import SafetyPrinciples from "./SafetyPrinciples";
import SafeguardsSection from "./SafeguardsSection";
import SafetyFAQ from "./SafetyFAQ";

const SafetyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        <SafetyHero />
        <SafetyMission />
        <SafetyPrinciples />
        <SafeguardsSection />
        <SafetyFAQ />
      </main>
      <Footer />
    </>
  );
};

export default SafetyPage;
