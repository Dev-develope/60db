import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TTSHero from "./TTSHero";
import TTSInteractiveDemo from "./TTSInteractiveDemo";
import TTSAdvancedControls from "./TTSAdvancedControls";
import TTSIndustryShowcase from "./TTSIndustryShowcase";
import TTSGlobalVoice from "./TTSGlobalVoice";
import TTSTestimonials from "./TTSTestimonials";
import TTSFAQ from "./TTSFAQ";
import RealisticVoiceCTA from "../ProductionPage/RealisticVoiceCTA";

const TextToSpeechPage = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden w-full font-sans">
            <Header />
            <main>
                <TTSHero />
                <TTSInteractiveDemo />
                <TTSAdvancedControls />
                <TTSIndustryShowcase />
                <TTSGlobalVoice />
                <TTSTestimonials />
                <TTSFAQ />
                {/* <RealisticVoiceCTA /> */}
            </main>
            <Footer />
        </div>
    );
};

export default TextToSpeechPage;
