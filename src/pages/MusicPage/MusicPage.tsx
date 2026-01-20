import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MusicHero from "./MusicHero";
import MusicDemo from "./MusicDemo";
import MusicFeatures from "./MusicFeatures";
import MusicShowcase from "./MusicShowcase";
import MusicAPI from "./MusicAPI";
import MusicFAQ from "./MusicFAQ";
import RealisticVoiceCTA from "../ProductionPage/RealisticVoiceCTA";

const MusicPage = () => {
    return (
        <div className="min-h-screen bg-[#FDFCF6] overflow-x-hidden w-full font-sans">
            <Header />
            <main>
                <MusicHero />
                <MusicDemo />
                <MusicShowcase />
                <MusicFeatures />
                <MusicAPI />
                <MusicFAQ />
                <RealisticVoiceCTA />
            </main>
            <Footer />
        </div>
    );
};

export default MusicPage;
