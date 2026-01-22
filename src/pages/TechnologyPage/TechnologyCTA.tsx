import { Button } from "@/components/ui/button";

const TechnologyCTA = () => {
    return (
        <section className="py-20 bg-background border-t border-border">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-3">
                            Start building with ElevenLabs Agents
                        </h2>
                        <p className="text-muted max-w-xl">
                            Transform your customer experience with natural, low-latency AI agents.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="outline" className="rounded-full">
                            Talk to Sales
                        </Button>
                        <Button className="rounded-full">
                            Create AI Agent
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologyCTA;
