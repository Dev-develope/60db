import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CreativePlatformSection from "@/components/CreativePlatformSection";
import TextToSpeechDemo from "./TextToSpeechDemo";
import ElevenLabsProductPage from "./ElevenLabsProductPage";
import EnterpriseSecuritySection from "./EnterpriseSecuritySection";
import FAQSection from "./FAQSection";
import LatestUpdatesSection from "./LatestUpdatesSection";
import AudioRealisticCTA from "./AudioRealisticCTA";

const ProductPage = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden w-full">
            <Header />
            <main className="pt-20">
                <CreativePlatformSection />
                <TextToSpeechDemo />
                <ElevenLabsProductPage />
                <EnterpriseSecuritySection />
                <LatestUpdatesSection />
                <FAQSection />
                <AudioRealisticCTA />
            </main>
            <Footer />
        </div>
    );
};

export default ProductPage;
