import { Button } from "@/components/ui/button";
import { Shield, TestTube, Activity } from "lucide-react";

const AITrustHero = () => {
    const quickLinks = [
        { id: "guardrails", label: "Define guardrails", icon: Shield },
        { id: "testing", label: "Test agents", icon: TestTube },
        { id: "monitoring", label: "Monitor performance", icon: Activity },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section className="pt-32 pb-16 px-4 bg-background">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6 leading-tight">
                        Build AI systems you can trust in production
                    </h1>
                    <p className="text-base md:text-lg text-muted max-w-3xl mx-auto mb-8 leading-relaxed">
                        Ensure AI behaves predictably and safely with guardrails you can define and test before launch.
                        Our platform provides full visibility and monitoring across every agent, ensuring compliant,
                        transparent operations at scale.
                    </p>
                    <Button size="lg" className="rounded-full">
                        Talk to Sales
                    </Button>
                </div>

                {/* Quick Links */}
                <div className="flex flex-wrap justify-center gap-4 mt-12">
                    {quickLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background hover:bg-secondary transition-colors text-sm font-medium text-foreground"
                            >
                                <Icon className="h-4 w-4" />
                                {link.label}
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AITrustHero;
