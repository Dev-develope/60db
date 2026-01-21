import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import STTHero from "./STTHero";
import STTInteractiveDemo from "./STTInteractiveDemo";
import STTRealtimeDetail from "./STTRealtimeDetail";
import STTStandardDetail from "./STTStandardDetail";
import STTFeatureGrid from "./STTFeatureGrid";
import STTDeveloperWorkflow from "./STTDeveloperWorkflow";
import STTFAQ from "./STTFAQ";
import RealisticVoiceCTA from "../ProductionPage/RealisticVoiceCTA";

const SpeechToTextPage = () => {
    return (
        <div className="min-h-screen bg-[#FCFAF3] overflow-x-hidden w-full font-sans">
            <Header />
            <main>
                <STTHero />
                <STTInteractiveDemo />
                <STTRealtimeDetail />
                <STTStandardDetail />
                <STTFeatureGrid />
                <STTDeveloperWorkflow />
                <STTFAQ />
                <RealisticVoiceCTA />
            </main>
            <Footer />
        </div>
    );
};

export default SpeechToTextPage;
