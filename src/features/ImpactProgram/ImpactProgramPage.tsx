import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImpactProgramHero from "./ImpactProgramHero";
import ImpactWhoCanJoin from "./ImpactWhoCanJoin";
import ImpactThreePillars from "./ImpactThreePillars";
import ImpactStories from "./ImpactStories";
import ImpactPartners from "./ImpactPartners";
import ImpactTutorials from "./ImpactTutorials";
import ImpactFAQ from "./ImpactFAQ";
import ImpactJoinCTA from "./ImpactJoinCTA";

const ImpactProgramPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        <ImpactProgramHero />
        <ImpactWhoCanJoin />
        <ImpactThreePillars />
        <ImpactStories />
        <ImpactPartners />
        <ImpactTutorials />
        <ImpactFAQ />
        <ImpactJoinCTA />
      </main>
      <Footer />
    </>
  );
};

export default ImpactProgramPage;
