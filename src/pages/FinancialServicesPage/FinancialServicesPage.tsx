import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinancialHero from "./FinancialHero";
import FinancialIntro from "./FinancialIntro";
import FinancialFeatureSection from "./FinancialFeatureSection";
import RelatedTopics from "../TelecommunicationsPage/RelatedTopics";
import TelecomCTA from "../TelecommunicationsPage/TelecomCTA";
import { Activity, TrendingUp, ShieldCheck } from "lucide-react";

const FinancialServicesPage = () => {
    const scalingFeatures = [
        {
            title: "Handle inbound with intelligent routing",
            description: "Multimodal by design, ElevenLabs Agents understand spoken or written inputs, retrieve the right answers, and respond naturally in real time. They integrate with your tools to resolve up to 90% of queries and seamlessly hand off to humans through native contact center and telephony integrations."
        },
        {
            title: "Qualify leads in real time",
            description: "Launch ElevenLabs Agents on phone lines, websites, or apps to qualify prospects, reducing friction from forms and manual reviews. Agents can update CRMs, trigger actions like card issuances, or schedule follow-ups - accelerating time to revenue for high-value financial products like mortgages."
        },
        {
            title: "Monitor performance and CX",
            description: "Track agent accuracy, task completion, and overall customer experience through built-in analytics. Spot issues, optimize flows, and iterate confidently with full transparency."
        }
    ];

    const revenueFeatures = [
        {
            title: "Scale outbound at a fraction of the cost",
            description: "Run compliant, large-scale outreach using Twilio or SIP trunking. Launch thousands of calls in parallel with batch calling, automate follow up effectively with voicemail detection, and keep costs below human-staffed operations."
        },
        {
            title: "Automate compliant collections, sales, and servicing workflows",
            description: "Launch agents for debt collection, insurance sales, lead follow-up, and claims processing. ElevenLabs Agents can qualify prospects, navigate payer IVRs, and connect high-intent customers to advisors - reducing manual effort and accelerating revenue impact."
        },
        {
            title: "Train your team faster with role-play AI agents",
            description: "Use ElevenLabs Agents to simulate customer conversations and reduce onboarding time, while ensuring new hires practice against real-world scenarios. Role-play agents reinforce compliance standards, provide consistent feedback, and help teams deliver accurate, compliant responses before speaking with customers."
        }
    ];

    const securityFeatures = [
        {
            title: "Simulations to test adherence to rules, policies and guardrails",
            description: "Our agent platform simulates millions of customer conversations to test agent adherence to rules, policies, and brand guidelines. This ensures you can deploy ElevenLabs Agents with confidence."
        },
        {
            title: "Enterprise-level data protection",
            description: "Data is encrypted in transit and at rest, with support for SOC 2, HIPAA, and GDPR compliance. EU Data Residency and Zero Retention modes are available for stricter data control."
        },
        {
            title: "Permission management and enterprise SLA’s",
            description: "Designed for scale, our platform supports unlimited user seats with role-based access control. Your dedicated support team and custom Service Level Agreements ensure your operations run smoothly at all times"
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main>
                <FinancialHero />
                <FinancialIntro />

                <FinancialFeatureSection
                    title="Always-on AI agents, ready to scale during seasonal spikes"
                    icon={Activity}
                    features={scalingFeatures}
                    bgColor="bg-background"
                    showVisual={true}
                />

                <FinancialFeatureSection
                    title="Reduce costs, drive revenue, and stay compliant in outbound and servicing"
                    icon={TrendingUp}
                    features={revenueFeatures}
                    bgColor="bg-secondary/30"
                    showVisual={true}
                />

                <FinancialFeatureSection
                    title="Enterprise-grade security and reliability to reduce brand and compliance risk"
                    icon={ShieldCheck}
                    features={securityFeatures}
                    bgColor="bg-background"
                    showVisual={true}
                />

                <RelatedTopics />
                <TelecomCTA />
            </main>

            <Footer />
        </div>
    );
};

export default FinancialServicesPage;
