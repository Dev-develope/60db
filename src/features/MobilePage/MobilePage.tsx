import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileHero from "./MobileHero";
import MobileAppPreview from "./MobileAppPreview";
import MobileFeatures from "./MobileFeatures";
import MobileCTA from "./MobileCTA";
import FAQSection from "../ProductsPage/FAQSection";
import MobileCTAWave from './MobileCTAWave';

const MobilePage = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden w-full font-sans">
            <Header />
            <main>
                <MobileHero />
                <MobileAppPreview />
                <MobileFeatures />
                <MobileCTA />
                <MobileCTAWave/>
                <FAQSection />
            </main>
            <Footer />
        </div>
    );
};

export default MobilePage;
