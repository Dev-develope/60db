import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductionCarousel from "./ProductionCarousel";
import ProductionCrafted from "./ProductionCrafted";
import ProductionTestimonials from "./ProductionTestimonials";
import ProducerNetwork from "./ProducerNetwork";
import RealisticVoiceCTA from "./RealisticVoiceCTA";
import FAQSection from "../ProductsPage/FAQSection";

const ProductionPage = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden w-full font-sans">
            <Header />
            <main>
                {/* Simple Production Hero
                <section className="pt-32 pb-8 bg-background">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="text-center max-w-4xl mx-auto">
                            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                                Production Showcase
                            </h1>
                            <p className="text-foreground/60 text-lg md:text-xl leading-relaxed font-medium">
                                Explore how creators and developers leverage 60db to produce studio-quality audiobooks,
                                multi-lingual dubs, and cinematic narrations at scale.
                            </p>
                        </div>
                    </div>
                </section> */}

                <ProductionCrafted />
                <ProductionCarousel />
                <ProductionTestimonials />
                <ProducerNetwork />
                <FAQSection />
                <RealisticVoiceCTA />
            </main>
            <Footer />
        </div>
    );
};

export default ProductionPage;
