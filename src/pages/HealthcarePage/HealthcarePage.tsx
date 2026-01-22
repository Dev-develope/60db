import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HealthcareHero from "./HealthcareHero";
import HealthcareIntro from "./HealthcareIntro";
import HealthcareFeatureSection from "./HealthcareFeatureSection";
import HealthcareCTA from "./HealthcareCTA";
import RelatedTopics from "../TelecommunicationsPage/RelatedTopics";
import { UserCheck, RefreshCw, Pill, ShieldCheck } from "lucide-react";

const HealthcarePage = () => {
    const patientFeatures = [
        {
            title: "Resolve patient inquiries and benefits questions",
            description: "Conversational agents handle high-volume informational requests from coverage questions to opening hours, improving patient experience and bottlenecks to accessing care."
        },
        {
            title: "Automate intake, onboarding, and scheduling",
            description: "Connect your agent to your systems to handle new-patient intake, appointment bookings and cancellations, and pre-visit coordination. This reduces administrative effort and ensures patients arrive prepared."
        },
        {
            title: "Enable safe triage and seamless post-visit care",
            description: "Agents collect symptoms, classify urgency, route patients appropriately, and conduct structured follow-up checks after procedures. This closes care gaps and strengthens continuity without adding clinical workload."
        }
    ];

    const revenueFeatures = [
        {
            title: "Manage health insurance enrollment workflows",
            description: "Agents collect patient details, verify eligibility, and prepare enrollment data for payer systems. This reduces manual form processing and accelerates onboarding."
        },
        {
            title: "Speed up verification and claims workflows",
            description: "From eligibility checks to claims status inquiries, AI agents reduce front-desk workload and shorten the revenue cycle. Staff spend less time on administrative calls and more time on patient-facing tasks."
        },
        {
            title: "Improve payment collection and financial clarity",
            description: "Outbound agents handle balances, negotiate payment plans, and update billing systems in real time. Clinics reduce outstanding AR and strengthen financial predictability."
        }
    ];

    const pharmacyFeatures = [
        {
            title: "Automate prescription refill requests",
            description: "Agents capture refill needs, verify eligibility, and sync directly with pharmacy systems - reducing call volume and improving turnaround time."
        },
        {
            title: "Provide medication status and instructions",
            description: "Patients receive instant updates on prescription readiness, prior authorization status, dosage guidance, and common medication FAQs."
        },
        {
            title: "Strengthen adherence and follow-up workflows",
            description: "Track agent accuracy, task completion, and overall customer experience through built-in analytics. Spot issues, optimize flows, and iterate confidently with full transparency."
        }
    ];

    const complianceFeatures = [
        {
            title: "Enterprise-grade data privacy and controls",
            description: "Support for HIPAA, SOC 2, GDPR, EU data residency, and zero-retention modes ensures safe handling of ePHI across all interactions."
        },
        {
            title: "Full audit trails and governance",
            description: "Every conversation is stored with permissions, export controls, and retention policies. Healthcare teams maintain complete visibility for QA, compliance audits, and clinical review."
        },
        {
            title: "Guardrails, testing, and safe deployment at scale",
            description: "Simulations validate workflows, tool calls, and scripts before launch. Guardrails ensure agents follow approved protocols, reducing clinical and regulatory risk."
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main>
                <HealthcareHero />
                <HealthcareIntro />

                <HealthcareFeatureSection
                    title="Transform patient operations across the full care journey"
                    icon={UserCheck}
                    features={patientFeatures}
                    bgColor="bg-background"
                    showVisual={true}
                />

                <HealthcareFeatureSection
                    title="Streamline enrollment and revenue cycle workflows"
                    icon={RefreshCw}
                    features={revenueFeatures}
                    bgColor="bg-secondary/30"
                    showVisual={true}
                />

                <HealthcareFeatureSection
                    title="Modernize pharmacy and prescription management"
                    icon={Pill}
                    features={pharmacyFeatures}
                    bgColor="bg-background"
                    showVisual={true}
                />

                <HealthcareFeatureSection
                    title="Built for HIPAA compliance, auditability, and operational trust"
                    icon={ShieldCheck}
                    features={complianceFeatures}
                    bgColor="bg-secondary/30"
                    showVisual={true}
                />

                <RelatedTopics />
                <HealthcareCTA />
            </main>

            <Footer />
        </div>
    );
};

export default HealthcarePage;
