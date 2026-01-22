import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudentsHero from "./StudentsHero";
import StudentShowcase from "./StudentShowcase";
import CreatorsSection from "./CreatorsSection";
import VoiceLibrarySection from "./VoiceLibrarySection";
import CustomMusicSection from "./CustomMusicSection";
import SoundEffectsSection from "./SoundEffectsSection";
import DevelopersSection from "./DevelopersSection";
import ElevenReaderSection from "./ElevenReaderSection";
import StudentSpotlight from "./StudentSpotlight";
import CampusProgram from "./CampusProgram";
import StudentsFAQ from "./StudentsFAQ";


export default function StudentsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <StudentsHero />
        <StudentShowcase />
        <CreatorsSection />
        <VoiceLibrarySection />
        <CustomMusicSection />
        <SoundEffectsSection />
        <DevelopersSection />
        <ElevenReaderSection />
        <StudentSpotlight />
        <CampusProgram />
        <StudentsFAQ />
      </main>
      <Footer />
    </>
  );
}
