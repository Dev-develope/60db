import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageVideoHero from "./ImageVideoHero";
import ImageVideoShowcase from "./ImageVideoShowcase";
import ModelShowcase from "./ModelShowcase";
import LipSyncShowcase from "./LipSyncShowcase";
import ImageVideoFAQ from "./ImageVideoFAQ";
import RealisticVoiceCTA from "../ProductionPage/RealisticVoiceCTA";

const ImageVideoPage = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden w-full font-sans">
            <Header />
            <main>
                <ImageVideoHero />
                <ImageVideoShowcase />
                <ModelShowcase />
                <LipSyncShowcase />
                <ImageVideoFAQ />
                <RealisticVoiceCTA />
            </main>
            <Footer />
        </div>
    );
};

export default ImageVideoPage;
