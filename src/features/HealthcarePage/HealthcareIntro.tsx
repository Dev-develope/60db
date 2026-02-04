import { Quote } from "lucide-react";

const HealthcareIntro = () => {
    return (
        <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                        ElevenLabs Agents for Healthcare
                    </h2>
                    <p className="text-lg text-muted max-w-4xl mx-auto leading-relaxed">
                        Our conversational agents are intelligent, real-time AI agents that talk, type, and take action. They resolve patient inquiries, automate intake and scheduling, and streamline revenue cycle workflows for providers.
                    </p>
                </div>

                {/* Testimonial */}
                <div className="bg-card border border-border rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
                    <Quote className="h-12 w-12 text-primary mb-6" />
                    <blockquote className="text-xl md:text-2xl font-serif text-foreground mb-6 leading-relaxed">
                        "Our partnership with ElevenLabs has been transformative. Their voice technology has allowed us to create AI agents that not only sound natural but can also communicate fluently in multiple languages. This has been a game-changer for healthcare providers and patients in diverse communities."
                    </blockquote>
                    <div className="border-t border-border pt-6">
                        <p className="font-semibold text-foreground">Tessya Federico</p>
                        <p className="text-sm text-muted">
                            Director of Partnerships, Elise AI
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HealthcareIntro;
