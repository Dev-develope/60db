import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechnologyHero from "./TechnologyHero";
import TechnologyIntro from "./TechnologyIntro";
import TechnologyFeatureSection from "./TechnologyFeatureSection";
import TechnologyCTA from "./TechnologyCTA";
import RelatedTopics from "../TelecommunicationsPage/RelatedTopics";
import { TrendingUp, Globe, MonitorCheck } from "lucide-react";

const TechnologyPage = () => {
    const growthFeatures = [
        {
            title: "Convert more leads",
            description: "Agents ask the right questions, capture intent, and verify key details. Low-intent leads are filtered out, while high-value prospects move forward without friction."
        },
        {
            title: "Expand accounts with upsell and cross-sell",
            description: "Surface relevant add-ons, higher-tier plans, or adjacent products at the right time in the journey - automating expansion without extra sales effort."
        },
        {
            title: "Boost renewals and recurring revenue",
            description: "AI-driven nudges remind customers about expirations, usage thresholds, or new offers - lifting retention and reducing revenue leakage."
        }
    ];

    const outboundFeatures = [
        {
            title: "Automate business development workflows",
            description: "AI agents prospect, qualify, and schedule meetings at scale - turning cold outreach into warm pipeline without manual effort."
        },
        {
            title: "Run campaigns at scale with built-in compliance",
            description: "Batch outreach thousands of leads with voicemail detection and natural conversations. Agents follow approved scripts, while simulations and audit-ready logs let you test and prove compliance across every campaign"
        },
        {
            title: "Automate operational outreach securely",
            description: "Agents handle repetitive outbound tasks like vendor checks, partner updates, or verifications. Every interaction is logged and encrypted, ensuring efficiency without adding headcount or risk."
        }
    ];

    const supportFeatures = [
        {
            title: "Fast, reliable support you can trust",
            description: "Agents handle billing, account access, and FAQs in seconds - cutting response times and deflecting a significant share of inbound requests. Our compliance certifications, such as SOC2, ISO27001 and PCI DSS, ensure sensitive data is always protected."
        },
        {
            title: "Orchestrate complex workflows with confidence",
            description: "Design structured conversation flows that route to specialized agents and apply business logic. Simulate millions of interactions to test guardrails before launch, ensuring accuracy, compliance, and brand alignment at scale."
        },
        {
            title: "Free human teams for high-value work",
            description: "By automating repetitive tasks, agents give support staff more bandwidth to focus on complex cases that strengthen long-term customer relationships."
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main>
                <TechnologyHero />
                <TechnologyIntro />

                <TechnologyFeatureSection
                    title="Convert more customers, increase spend, and keep them coming back"
                    icon={TrendingUp}
                    features={growthFeatures}
                    bgColor="bg-background"
                    showVisual={true}
                />

                <TechnologyFeatureSection
                    title="Run secure, compliant outbound at scale"
                    icon={Globe}
                    features={outboundFeatures}
                    bgColor="bg-secondary/30"
                    showVisual={true}
                />

                <TechnologyFeatureSection
                    title="Transform support into a competitive advantage"
                    icon={MonitorCheck}
                    features={supportFeatures}
                    bgColor="bg-background"
                    showVisual={true}
                />

                <RelatedTopics />
                <TechnologyCTA />
            </main>

            <Footer />
        </div>
    );
};

export default TechnologyPage;
