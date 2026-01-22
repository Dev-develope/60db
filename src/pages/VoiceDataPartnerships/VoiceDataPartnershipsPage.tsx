import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VoiceDataHero from "./VoiceDataHero";
import VoiceDataProcess from "./VoiceDataProcess";
import VoiceDataWantSection from "./VoiceDataWantSection";
import VoiceDataCTA from "./VoiceDataCTA";
import VoiceDataFAQ from "./VoiceDataFAQ";

const VoiceDataPartnershipsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        <VoiceDataHero />
        <VoiceDataProcess />
        <VoiceDataWantSection />
        <VoiceDataCTA />
        <VoiceDataFAQ />
      </main>
      <Footer />
    </>
  );
};

export default VoiceDataPartnershipsPage;
