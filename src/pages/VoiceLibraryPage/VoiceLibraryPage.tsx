import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VoiceLibraryHero from "./VoiceLibraryHero";
import VoiceLibraryGrid from "./VoiceLibraryGrid";
import VoiceLibraryCategories from "./VoiceLibraryCategories";
import VoiceLibraryCTA from "./VoiceLibraryCTA";
import FAQSection from "../ProductsPage/FAQSection";

const VoiceLibraryPage = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden w-full">
            <Header />
            <main>
                <VoiceLibraryHero />
                <VoiceLibraryGrid />
                <VoiceLibraryCategories />
                <VoiceLibraryCTA />
                <FAQSection />
            </main>
            <Footer />
        </div>
    );
};

export default VoiceLibraryPage;
