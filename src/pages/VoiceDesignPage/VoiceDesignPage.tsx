import React from 'react';
import VoiceDesignHero from './VoiceDesignHero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const VoiceDesignPage = () => {
    return (<>
        <Header />
        <div className="bg-black min-h-screen">
            <VoiceDesignHero />
        </div>
        <Footer />
    </>
    );
};

export default VoiceDesignPage;
