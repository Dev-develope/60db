import { Button } from "@/components/ui/button";

const FinancialHero = () => {
    return (
        <section className="pt-32 pb-16 px-4 bg-background">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6 leading-tight">
                        Elevate every client interaction
                    </h1>
                    <p className="text-base md:text-lg text-muted max-w-4xl mx-auto mb-8 leading-relaxed">
                        Launch natural, human-sounding agents in 32 languages with leading accuracy and ultra-low latency in voice or chat. From account queries to claims, our agents deliver faster resolutions with enterprise-grade reliability.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="rounded-full">
                            Talk to Sales
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full">
                            Create AI Agent
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinancialHero;
