import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SFXHero from "./SFXHero";
import SFXCategories from "./SFXCategories";
import SFXTrendingGrid from "./SFXTrendingGrid";
import SFXFeatures from "./SFXFeatures";
import SFXSoundboard from "./SFXSoundboard";
import SFXFAQ from "./SFXFAQ";
import RealisticVoiceCTA from "../ProductionPage/RealisticVoiceCTA";

const SoundEffectsPage = () => {
    return (
        <div className="min-h-screen bg-[#FDFCF6] overflow-x-hidden w-full font-sans">
            <Header />
            <main>
                <SFXHero />
                <SFXCategories />
                <SFXTrendingGrid />
                <SFXFeatures />
                <SFXSoundboard />
                <SFXFAQ />
                <RealisticVoiceCTA />
            </main>
            <Footer />
        </div>
    );
};

export default SoundEffectsPage;
