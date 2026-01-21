
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VoiceCloningHero from "./VoiceCloningHero";
import VoiceCloningIntro from "./VoiceCloningIntro";
import VoiceCloningComparison from "./VoiceCloningComparison";
import VoiceCloningUseCases from "./VoiceCloningUseCases";
import VoiceCloningModeSelection from "./VoiceCloningModeSelection";
import VoiceCloningTestimonials from "./VoiceCloningTestimonials";
import VoiceCloningTechnology from "./VoiceCloningTechnology";
import FAQSection from "../ProductsPage/FAQSection";

const VoiceCloningPage = () => {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Header />
            <main className="pt-0"> {/* PT-0 because Hero has padding */}
                <VoiceCloningHero />
                <VoiceCloningIntro />
                <VoiceCloningComparison />
                <VoiceCloningUseCases />
                <VoiceCloningTestimonials />
                <VoiceCloningTechnology />
                <VoiceCloningModeSelection />
                <FAQSection />
            </main>
            <Footer />
        </div>
    );
};

export default VoiceCloningPage;
