import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const VoiceDesignIntroduction = () => {
    return (
        <section className="py-20 lg:py-32 bg-background text-foreground relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 text-center space-y-16">

                {/* Header Text */}
                <div className="space-y-6 max-w-4xl mx-auto animate-in slide-in-from-bottom-5 fade-in duration-700">
                    {/* Small Pill Badge */}
                    <div className="inline-flex items-center justify-center gap-2 mb-4">
                        <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold border border-border text-foreground">v3</span>
                    </div>

                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-foreground">
                        Introducing Voice Design, powered by our latest Text to Speech v3 model.
                    </h2>
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        Create lifelike voices from any description - curated for serious, funny, or heroic characters allowing you to bring your stories to life.
                    </p>
                </div>

                {/* Hero Image */}
                <div className="relative max-w-5xl mx-auto group animate-in zoom-in-95 fade-in duration-1000 delay-200">
                    {/* Subtle colored glow behind - adjusted for light theme */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-[2rem] opacity-40 group-hover:opacity-60 blur-xl transition-opacity duration-500"></div>
                    <img
                        src="https://eleven-public-cdn.elevenlabs.io/payloadcms/ijtmhgvckrr-Timeline 1_01_10_22_08.webp"
                        alt="Voice Design Timeline Visualization"
                        className="relative rounded-[1.5rem] w-full shadow-elevated border border-border"
                    />
                </div>

                {/* CTA Section */}
                <div className="space-y-8 pt-8 animate-in slide-in-from-bottom-5 fade-in duration-700 delay-300">
                    <div className="space-y-2">
                        <h3 className="font-serif text-2xl font-semibold text-foreground">Try Voice Design v3</h3>
                        <p className="text-muted max-w-xl mx-auto text-sm">
                            Create new character inspiration with Voice Design v3. Available now in 60db. Free to start.
                        </p>
                    </div>

                    <Button className="rounded-full px-8 py-6 text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all transform hover:scale-105">
                        Start Creating <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default VoiceDesignIntroduction;
