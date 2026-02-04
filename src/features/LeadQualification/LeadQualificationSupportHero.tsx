import { Button } from "@/components/ui/button";

const LeadQualificationSupportHero = () => {
    return (
        <section className="pt-32 pb-20 px-4 bg-background overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="flex gap-3">
                            <span className="px-3 py-1 rounded-full border border-border text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                                AI Agents
                            </span>
                            <span className="px-3 py-1 rounded-full border border-border text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                                Call Centers
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight leading-tight uppercase">
                            Customer<br />Support
                        </h1>

                        <p className="text-lg md:text-xl text-muted max-w-xl leading-relaxed">
                            Power your applications with lifelike speech. Our low latency models are designed to enhance user interactions, making every conversation more engaging and realistic.
                        </p>

                        <Button size="lg" className="rounded-full px-8 h-12 bg-foreground text-background hover:bg-foreground/90 font-medium uppercase text-sm tracking-wide">
                            Contact Sales
                        </Button>
                    </div>

                    {/* Right Visual */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-lg aspect-square">
                            {/* Placeholder for the gradient bubbles image */}
                            <img
                                src="/images/customer-support-hero.png"
                                alt="AI Customer Support Conversation"
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    target.parentElement!.innerHTML += `
                                        <div class="w-full h-full flex flex-col items-end justify-center gap-6 p-8">
                                            <div class="w-2/3 aspect-[2/1] bg-gradient-to-r from-purple-300 to-fuchsia-300 rounded-[2rem] rounded-bl-none shadow-xl transform -translate-x-12"></div>
                                            <div class="w-2/3 aspect-[2/1] bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-[2rem] rounded-tr-none shadow-xl transform translate-x-4"></div>
                                        </div>
                                    `;
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadQualificationSupportHero;
