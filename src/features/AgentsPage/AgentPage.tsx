import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgentHeroPage from "./AgentHeroPage";
import VoiceAgentsSection from "./VoiceAgentsSection";
import FeaturesSection from "./FeaturesSection";
import WorkflowsSection from "./WorkflowsSection";
import CustomizationSection from "./CustomizationSection";
import FAQBlogSection from "./FAQBlogSection";

const AgentPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Header />
            <AgentHeroPage />
            <VoiceAgentsSection />
            <FeaturesSection />
            <WorkflowsSection />
            <CustomizationSection />
            <FAQBlogSection />
            <Footer />
        </div>
    );
};

export default AgentPage;
