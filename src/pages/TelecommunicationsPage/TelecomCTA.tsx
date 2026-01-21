import { Button } from "@/components/ui/button";

const TelecomCTA = () => {
    return (
        <section className="py-20 bg-background border-t border-border">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
                        The most realistic voice AI platform
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="outline" className="rounded-full">
                            Talk to sales
                        </Button>
                        <Button className="rounded-full">
                            Create an AI agent
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TelecomCTA;
