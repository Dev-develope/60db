import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "./AboutHero";
import AboutMission from "./AboutMission";
import AboutInvestors from "./AboutInvestors";
import AboutJoinUs from "./AboutJoinUs";
import AboutLatestUpdates from "./AboutLatestUpdates";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        <AboutHero />
        <AboutInvestors />
        <AboutMission />
        <AboutJoinUs />
        <AboutLatestUpdates />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
