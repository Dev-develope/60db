import React from 'react';
import { Button } from "@/components/ui/button";
import { Mic, ArrowRight } from "lucide-react";

const RealtimeHero = () => {
    return (
        <section className="pt-32 pb-20 container mx-auto px-6 md:px-12 text-center">

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                <div className="text-left max-w-2xl">
                    <div className="text-sm font-semibold text-muted mb-4 uppercase tracking-wider">Realtime Speech to Text</div>
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1] tracking-tight">
                        Transcribe live speech instantly
                    </h1>
                    <div className="flex flex-wrap gap-4 mt-8">
                        <Button className="rounded-full px-6 py-6 text-sm font-bold bg-foreground text-background hover:bg-foreground/90">
                            Start transcribing
                        </Button>
                        <Button variant="ghost" className="rounded-full px-6 py-6 text-sm font-bold hover:bg-secondary/50">
                            Explore the docs <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </div>
                <div className="text-left max-w-sm">
                    <p className="text-sm text-muted leading-relaxed">
                        Scribe v2 Realtime is the most accurate real-time transcription model with 150ms latency across 90+ languages. Available via API.
                    </p>
                </div>
            </div>

            {/* Interactive Gradient Card */}
            <div className="relative w-full aspect-video md:aspect-[2/1] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
                {/* Grainy Gradient Background */}
                <div className="absolute inset-0 bg-[#1a1a1a]">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/40 via-purple-500/40 to-blue-600/40 blur-3xl opacity-80" />
                    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-yellow-500/30 rounded-full blur-[100px] animate-pulse-glow" />
                    <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-[100px] animate-pulse-glow delay-1000" />
                    {/* Noise Overlay */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
                </div>

                {/* Center Card */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-12 md:p-16 text-center shadow-xl max-w-xl w-full transition-transform duration-500 group-hover:scale-105">
                        <div className="w-16 h-16 bg-[#333] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <Mic className="text-white w-6 h-6" />
                        </div>
                        <h3 className="font-serif text-2xl font-semibold mb-2 text-gray-900">Click to start transcribing</h3>
                        <p className="text-gray-500 text-sm">Experience the power of Scribe v2 Realtime</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default RealtimeHero;
