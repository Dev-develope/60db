import { CheckCircle2 } from "lucide-react";

const LeadQualificationSupportScale = () => {
    const items = [
        "Enterprise-level SLAs",
        "Dedicated support",
        "Priority access",
        "API access",
        "Unlimited seats",
        "Volume discounts"
    ];

    return (
        <section className="py-24 bg-secondary/20">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
                            Power conversational AI at scale
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {items.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span className="text-lg text-foreground/80 font-medium">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual representation of scale/voice */}
                    <div className="relative">
                        <div className="aspect-square rounded-full bg-gradient-to-tr from-purple-100 to-blue-100 blur-3xl opacity-60 absolute inset-0 transform scale-90"></div>
                        <div className="relative bg-background border border-border p-8 rounded-3xl shadow-sm">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between border-b border-border pb-4">
                                    <div className="font-semibold">Active Calls</div>
                                    <div className="text-green-500 font-mono">1,248</div>
                                </div>
                                <div className="flex items-center justify-between border-b border-border pb-4">
                                    <div className="font-semibold">Avg Latency</div>
                                    <div className="text-blue-500 font-mono">450ms</div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="font-semibold">Satisfaction</div>
                                    <div className="text-purple-500 font-mono">4.9/5.0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadQualificationSupportScale;
