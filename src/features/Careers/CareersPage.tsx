import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CareersHero from "./CareersHero";
import CareersWhoWeAre from "./CareersWhoWeAre";
import CareersPrinciples from "./CareersPrinciples";
import CareersWhatSetsApart from "./CareersWhatSetsApart";
import CareersWhatWeOffer from "./CareersWhatWeOffer";
import CareersJoinUs from "./CareersJoinUs";
import CareersLatestUpdates from "./CareersLatestUpdates";

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        <CareersHero />
        <CareersWhoWeAre />
        <CareersPrinciples />
        <CareersWhatSetsApart />
        <CareersWhatWeOffer />
        <CareersJoinUs />
        <CareersLatestUpdates />
      </main>
      <Footer />
    </>
  );
};

export default CareersPage;
