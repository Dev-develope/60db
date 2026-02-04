import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const TrustFAQ = () => {
    const faqs = [
        {
            question: "How do ElevenLabs Agents deliver reliable, predictable behavior in production?",
            answer: "ElevenLabs Agents use advanced guardrails and testing frameworks to ensure consistent, predictable behavior. You can define behavioral boundaries, test agents in simulated environments, and validate performance before deployment. Our platform includes built-in safety mechanisms and compliance controls that help maintain reliability at scale.",
        },
        {
            question: "How can I evaluate whether my agents are performing as intended after launch?",
            answer: "Our platform provides comprehensive analytics and evaluation tools that track key performance metrics in real-time. You can monitor success rates, conversation quality, latency, and user satisfaction. The dashboard includes detailed logs of agent interactions, allowing you to identify and address issues quickly.",
        },
        {
            question: "What visibility do I have into how my agents perform?",
            answer: "You have complete visibility through our enterprise-grade dashboard. Track live agent interactions, monitor key metrics such as latency and cost, analyze conversation transcripts, and view detailed performance analytics. The platform provides real-time alerts for anomalies and comprehensive reporting tools.",
        },
        {
            question: "Which enterprise security and compliance standards do ElevenLabs Agents meet?",
            answer: "ElevenLabs Agents meet industry-leading security and compliance standards including SOC 2 Type II, GDPR, HIPAA, and ISO 27001. We implement end-to-end encryption, secure data handling practices, and regular security audits. Our compliance documentation is available for enterprise customers.",
        },
        {
            question: "What support does ElevenLabs provide for enterprise deployment and scaling?",
            answer: "We provide dedicated enterprise support including technical account managers, custom onboarding, priority support channels, and SLA guarantees. Our team works with you to ensure smooth deployment, optimal configuration, and successful scaling. We also offer training sessions and ongoing optimization consultations.",
        },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl font-bold mb-8">
                    Frequently asked questions
                </h2>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border-b border-border"
                        >
                            <AccordionTrigger className="text-left py-4 text-sm md:text-base font-medium hover:text-primary transition-colors hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default TrustFAQ;
