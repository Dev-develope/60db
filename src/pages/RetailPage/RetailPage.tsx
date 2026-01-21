import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RetailHero from "./RetailHero";
import RetailIntro from "./RetailIntro";
import RetailFeatureSection from "./RetailFeatureSection";
import RetailCTA from "./RetailCTA";
import RelatedTopics from "../TelecommunicationsPage/RelatedTopics";
import { ShoppingBag, MessageCircle, ShieldCheck } from "lucide-react";

const RetailPage = () => {
    const revenueFeatures = [
        {
            title: "E-commerce shopping agents that reduce abandonment",
            description: "Embedded shopping concierges proactively answer product questions and guide checkout, reducing cart abandonment by up to 30% and driving higher conversion rates."
        },
        {
            title: "Upsell agents that improve lifetime value",
            description: "Cross-sell agents surface relevant offers based on browsing and purchase history, increasing repeat orders and boosting average order value."
        },
        {
            title: "Scale in-store experts with conversational agents",
            description: "Enable additional in-store expertise through QR code scans. Customers get instant access to knowledgeable agents, ensuring no sales opportunity is lost to staffing limitations."
        }
    ];

    const supportFeatures = [
        {
            title: "Handle inbound with intelligent routing",
            description: "Multimodal by design, ElevenLabs Agents understand spoken or written inputs, retrieve the right answers, and respond naturally in real time. Seamlessly hand off to humans through native contact center and telephony integrations."
        },
        {
            title: "Automate resolutions across your systems",
            description: "Agents follow complex business logic and can take action in your systems, processing refunds, updating orders, or scheduling deliveries in real time to deliver faster resolutions and lower cost per resolution."
        },
        {
            title: "Monitor performance and CX",
            description: "Track agent accuracy, task completion, and overall customer experience through built-in analytics. Retailers using ElevenLabs agents have reported up to 25% CSAT improvement and doubled retention rates."
        }
    ];

    const securityFeatures = [
        {
            title: "Simulations to test adherence to rules, policies and guardrails",
            description: "Our agent platform simulates millions of customer conversations to test agent adherence to rules, policies, and brand guidelines. This ensures you can deploy ElevenLabs Agents with confidence."
        },
        {
            title: "Enterprise-level data protection",
            description: "Data is encrypted in transit and at rest, with support for SOC 2 and GDPR compliance. EU Data Residency and Zero Retention modes are available for stricter data control."
        },
        {
            title: "Permission Management and Enterprise SLA's",
            description: "Designed for scale, our platform supports unlimited user seats with role-based access control. Your dedicated support team and custom Service Level Agreements ensure your operations run smoothly at all times."
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main>
                <RetailHero />
                <RetailIntro />

                <RetailFeatureSection
                    title="Unlock new revenue with context-aware concierges on your site or in-store"
                    icon={ShoppingBag}
                    features={revenueFeatures}
                    bgColor="bg-background"
                    showVisual={true}
                />

                <RetailFeatureSection
                    title="Transform support into faster, more personal experiences"
                    icon={MessageCircle}
                    features={supportFeatures}
                    bgColor="bg-secondary/30"
                    showVisual={true}
                />

                <RetailFeatureSection
                    title="Enterprise-grade security and reliability to reduce brand and compliance risk"
                    icon={ShieldCheck}
                    features={securityFeatures}
                    bgColor="bg-background"
                    showVisual={true}
                />

                <RelatedTopics />
                <RetailCTA />
            </main>

            <Footer />
        </div>
    );
};

export default RetailPage;
