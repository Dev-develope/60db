import { Quote } from "lucide-react";

const FinancialIntro = () => {
    return (
        <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                        ElevenLabs Agents for Financial Services
                    </h2>
                    <p className="text-lg text-muted max-w-4xl mx-auto leading-relaxed">
                        Our conversational agents are intelligent, real-time AI agents that talk, type, and take action. Resolve customer issues, automate tasks, and deliver accurate answers – all grounded in your data, tailored to your workflows, and ready to deploy at scale.
                    </p>
                </div>

                {/* Testimonial */}
                <div className="bg-card border border-border rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
                    <Quote className="h-12 w-12 text-primary mb-6" />
                    <blockquote className="text-xl md:text-2xl font-serif text-foreground mb-6 leading-relaxed">
                        "For an AI agent to feel human, latency matters as much as voice quality. ElevenLabs offered the right balance."
                    </blockquote>
                    <div className="border-t border-border pt-6">
                        <p className="font-semibold text-foreground">Debojyoti Chakraborty</p>
                        <p className="text-sm text-muted">
                            Sr. Engineering Manager at Funding Societies, a leading Asian digital financing platform scaling with outbound agents
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinancialIntro;
