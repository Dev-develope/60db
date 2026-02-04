import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioHero from "./StudioHero";
import StudioExperience from "./StudioExperience";
import StudioFeatures from "./StudioFeatures";
import StudioFeatureGrid from "./StudioFeatureGrid";
import StudioCreatorShowcase from "./StudioCreatorShowcase";
import StudioAPISection from "./StudioAPISection";
import AudioRealisticCTA from "../ProductsPage/AudioRealisticCTA";
import FAQSection from "../ProductsPage/FAQSection";

const StudioPage = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden w-full">
            <Header />
            <main className="pt-20">
                <StudioHero />
                <StudioExperience />
                <StudioFeatures />
                <StudioFeatureGrid />
                <StudioCreatorShowcase />
                <StudioAPISection />
                {/* Reusing some existing sections for a complete page Feel */}
                <FAQSection />
                <AudioRealisticCTA />
            </main>
            <Footer />
        </div>
    );
};

export default StudioPage;
