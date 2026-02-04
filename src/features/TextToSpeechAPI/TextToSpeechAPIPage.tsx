import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TextToSpeechAPIHero from "./TextToSpeechAPIHero";
import TextToSpeechAPIModels from "./TextToSpeechAPIModels";
import TextToSpeechAPIFeatures from "./TextToSpeechAPIFeatures";
import TextToSpeechAPIProduction from "./TextToSpeechAPIProduction";
import TextToSpeechAPISocialProof from "./TextToSpeechAPISocialProof";
import TextToSpeechAPIFAQ from "./TextToSpeechAPIFAQ";
import TextToSpeechAPIBlog from "./TextToSpeechAPIBlog";

const TextToSpeechAPIPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        <TextToSpeechAPIHero />
        <TextToSpeechAPIModels />
        <TextToSpeechAPIFeatures />
        <TextToSpeechAPIProduction />
        <TextToSpeechAPISocialProof />
        <TextToSpeechAPIFAQ />
        <TextToSpeechAPIBlog />
      </main>
      <Footer />
    </>
  );
};

export default TextToSpeechAPIPage;
