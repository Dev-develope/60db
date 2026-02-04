
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const comparisonData = [
    {
        label: "Time to clone",
        ivc: "Instant (seconds)",
        pvc: "Training takes ~4 weeks"
    },
    {
        label: "Audio data needed",
        ivc: "1-5 minutes",
        pvc: "30+ minutes of clean audio"
    },
    {
        label: "Quality",
        ivc: "High quality, lifelike",
        pvc: "Indistinguishable from original"
    },
    {
        label: "Use Case",
        ivc: "Ideal for content creators and podcasters",
        pvc: "Perfect for audiobooks and video games"
    },
    {
        label: "Language Support",
        ivc: "Supports 29+ languages automatically",
        pvc: "Enterprise-grade security and voice verification"
    },
    {
        label: "Fine-tuning",
        ivc: "Full control over pitch and speaking pace",
        pvc: "Dedicated support and priority processing"
    }
];

const VoiceCloningModeSelection = () => {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8 border-b border-border/50 pb-12">
                    <h2 className="text-4xl font-bold text-foreground font-serif max-w-sm leading-tight">
                        Select the cloning mode based on your needs
                    </h2>
                    <p className="text-muted-foreground max-w-md text-sm">
                        Choose between instant voice cloning for speed, or professional voice cloning for maximum realism and long-term use.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Header Col (Hidden on Mobile usually, but we keep it simple) */}
                    <div className="hidden lg:block col-span-1" />

                    {/* Headers for columns */}
                    <div className="col-span-2 hidden lg:grid grid-cols-2 gap-8 mb-8 px-4">
                        <div className="text-sm font-bold text-foreground font-serif">Instant Voice Cloning</div>
                        <div className="text-sm font-bold text-foreground font-serif">Professional Voice Cloning</div>
                    </div>
                </div>

                <div className="space-y-4">
                    {comparisonData.map((row, index) => (
                        <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-4 border-b border-border/50 pb-8 pt-4 hover:bg-muted/10 transition-colors rounded-xl px-4">
                            <div className="font-medium text-muted-foreground text-sm lg:pt-0 mb-2 lg:mb-0">
                                {row.label}
                            </div>
                            <div className="text-foreground text-sm font-medium leading-relaxed">
                                <span className="lg:hidden text-muted-foreground text-xs block mb-1">Instant: </span>
                                {row.ivc}
                            </div>
                            <div className="text-foreground text-sm font-medium leading-relaxed">
                                <span className="lg:hidden text-muted-foreground text-xs block mb-1">Professional: </span>
                                {row.pvc}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center space-y-8">
                    <h3 className="text-3xl font-bold text-foreground font-serif">Create a digital replica of your voice</h3>
                    <p className="text-muted-foreground">Get started today and begin using your AI voice clone in just a few minutes.</p>
                    <Button className="rounded-full px-8 h-12">
                        Clone your voice
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default VoiceCloningModeSelection;
