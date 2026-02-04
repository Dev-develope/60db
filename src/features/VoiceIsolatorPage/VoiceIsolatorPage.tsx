import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VIHero from "./VIHero";
import VIFeatures from "./VIFeatures";
import VIUseCases from "./VIUseCases";
import VIHowItWorks from "./VIHowItWorks";
import VIFAQ from "./VIFAQ";
import RealisticVoiceCTA from "../ProductionPage/RealisticVoiceCTA";

const VoiceIsolatorPage = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden w-full font-sans">
            <Header />
            <main>
                <VIHero />
                <VIFeatures />
                <VIUseCases />
                <VIHowItWorks />
                <VIFAQ />
                <RealisticVoiceCTA />
            </main>
            <Footer />
        </div>
    );
};

export default VoiceIsolatorPage;
