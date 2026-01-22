import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OutBondHero from "./OutBondHero";
import OutBondIntro from "./OutBondIntro";
import OutBondTopics from "./OutBondTopics";
import OutBondCTA from "./OutBondCTA";
import { Network, ShoppingCart, Settings } from "lucide-react";

const OutBondPage = () => {
    const scalingFeatures = [
        {
            title: "Customer support agents that speak, read, and see",
            description: "Multimodal by design, agents understand spoken or written inputs, retrieve the right answers, and respond naturally in real time. ElevenLabs Agents interact just like a human would, across voice and chat.",
        },
        {
            title: "Take action with external tool calls",
            description: "Connect your agent to internal tools, APIs, and business systems. From activating a sim card to troubleshooting a new Wi-Fi device, agents can trigger real-world actions mid-conversation, securely and reliably.",
        },
        {
            title: "Meet your customers where they are",
            description: "Launch across phone lines, websites, apps, or embedded systems. ElevenLabs Agents are channel-agnostic and ready for global use, with multilingual support and telephony built in.",
        },
    ];

    const shoppingFeatures = [
        {
            title: "Reduce cart abandonment",
            description: "Our embedded shopping concierges are context-aware, proactively answering product questions, reducing cart abandonment, and driving higher conversion rates.",
        },
        {
            title: "Proactively drive retention and upsell",
            description: "Create marketing agents that automatically reach out when customers approach plan renewal or become eligible for new offers, helping increase retention and lifetime value.",
        },
        {
            title: "Scale in-store experts",
            description: "Enable customers to access on-demand expertise through QR code scans in physical locations. Customers get instant access to knowledgeable agents, ensuring no sales opportunity is lost to staffing limitations.",
        },
    ];

    const workflowFeatures = [
        {
            title: "Integrate agents into your existing systems and workflows",
            description: "Design structured workflows using intuitive tools. Our agents connect directly to your contact center and tools so you can define rules for handoffs to human agents.",
        },
        {
            title: "Test guardrails and ensure compliance",
            description: "Define success criteria, test tool calls, and ensure responses meet your standards - all before deploying to production. Our platform is built for the highest compliance standards, including GDPR, EU data residency, and zero data retention options.",
        },
        {
            title: "Monitor performance and CX",
            description: "Track agent accuracy, task completion, and overall customer experience through built-in analytics. Spot issues, optimize flows, and iterate confidently with full transparency.",
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main>
                <OutBondHero />
                <OutBondIntro />
                <OutBondTopics />
                <OutBondCTA />
            </main>

            <Footer />
        </div>
    );
};

export default OutBondPage;
