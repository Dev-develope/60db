
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VoiceChangerHero from "./VoiceChangerHero";
import VoiceChangerFeatures from "./VoiceChangerFeatures";
import VoiceChangerSteps from "./VoiceChangerSteps";
import VoiceChangerUseCases from "./VoiceChangerUseCases";
import VoiceChangerFAQ from "./VoiceChangerFAQ";

const VoiceChangerPage = () => {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Header />
            <main className="pt-16">
                <VoiceChangerHero />
                <VoiceChangerFeatures />
                <VoiceChangerSteps />
                <VoiceChangerUseCases />
                <VoiceChangerFAQ />
            </main>
            <Footer />
        </div>
    );
};

export default VoiceChangerPage;
