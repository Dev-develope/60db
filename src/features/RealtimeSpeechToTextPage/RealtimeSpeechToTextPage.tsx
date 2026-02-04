import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RealtimeHero from './RealtimeHero';
import RealtimeFeatures from './RealtimeFeatures';
import RealtimeCapabilities from './RealtimeCapabilities';
import LogoCarousel from '@/components/LogoCarousel';
import FAQSection from '../ProductsPage/FAQSection';

const RealtimeSpeechToTextPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <RealtimeHero />
            <LogoCarousel />
            <RealtimeFeatures />
            <RealtimeCapabilities />
            <FAQSection />
            <Footer />
        </div>
    );
};

export default RealtimeSpeechToTextPage;
