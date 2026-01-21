import { useEffect } from "react";
import DubbingStudioHero from "./DubbingStudioHero";
import DubbingStudioFeatures from "./DubbingStudioFeatures";
import DubbingStudioCapabilities from "./DubbingStudioCapabilities";
import DubbingStudioCarousel from "./DubbingStudioCarousel";
import DubbingStudioHowItWorks from "./DubbingStudioHowItWorks";
import DubbingStudioShowcase from "./DubbingStudioShowcase";
import FAQSection from "../ProductsPage/FAQSection";

const DubbingStudioPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <DubbingStudioHero />
            <DubbingStudioShowcase />
            <DubbingStudioFeatures />
            <DubbingStudioCapabilities />
            <DubbingStudioCarousel />
            <DubbingStudioHowItWorks />
            <FAQSection />
        </main>
    );
};

export default DubbingStudioPage;
