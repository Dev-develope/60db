import React from 'react';
import VoiceDesignHero from './VoiceDesignHero';
import VoiceDesignIntroduction from './VoiceDesignIntroduction';
import VoiceDesignFeatures from './VoiceDesignFeatures';
import VoiceDesignTools from './VoiceDesignTools';
import VoiceDesignFAQ from './VoiceDesignFAQ';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const VoiceDesignPage = () => {
    return (<>
        <Header />
        <div className="min-h-screen bg-background">
            <VoiceDesignHero />
            <VoiceDesignIntroduction />
            <VoiceDesignFeatures />
            <VoiceDesignTools />
            <VoiceDesignFAQ />
        </div>
        <Footer />
    </>
    );
};

export default VoiceDesignPage;
