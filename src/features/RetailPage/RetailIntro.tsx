import { Quote } from "lucide-react";

const RetailIntro = () => {
    return (
        <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                        ElevenLabs Agents for Retail
                    </h2>
                    <p className="text-lg text-muted max-w-4xl mx-auto leading-relaxed">
                        Our conversational agents are intelligent, real-time AI agents that talk, type, and take action. Resolve customer issues, automate tasks, and deliver accurate answers – all grounded in your data, tailored to your workflows, and ready to deploy at scale.
                    </p>
                </div>

                {/* Testimonial */}
                <div className="bg-card border border-border rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
                    <Quote className="h-12 w-12 text-primary mb-6" />
                    <blockquote className="text-xl md:text-2xl font-serif text-foreground mb-6 leading-relaxed">
                        "Our goal was to create a voice experience that truly feels human – and ElevenLabs helped us achieve that. The clarity, warmth, and tone of the voice played a key role in building trust with our users at scale."
                    </blockquote>
                    <div className="border-t border-border pt-6">
                        <p className="font-semibold text-foreground">Siddharth Gupta</p>
                        <p className="text-sm text-muted">
                            GM - New Initiatives at Meesho, a leading Indian e-commerce marketplace with over 200 million consumers
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RetailIntro;
