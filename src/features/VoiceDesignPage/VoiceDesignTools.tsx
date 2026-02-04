import React from 'react';
import { Mic, FileText, ArrowRight, Wand2 } from "lucide-react";

const VoiceDesignTools = () => {
    return (
        <section className="py-20 lg:py-32 bg-background text-foreground">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-2xl mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                        Elevate your workflow with professional AI tools. Start free today
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Card 1: Voice Cloning */}
                    <div className="border border-border rounded-2xl p-8 md:p-12 hover:shadow-card transition-shadow duration-300 flex flex-col items-center text-center group bg-card/30">
                        <div className="flex items-center gap-2 mb-12">
                            <Wand2 className="w-4 h-4 text-muted" />
                            <span className="text-xs font-bold tracking-widest text-muted uppercase">Voice Cloning</span>
                        </div>

                        {/* Visual */}
                        <div className="relative w-48 h-48 mb-12 flex items-center justify-center">
                            {/* Glowing Orb */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-full blur-2xl animate-pulse-glow" />
                            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 flex items-center justify-center overflow-hidden border border-white/20">
                                <img
                                    src="https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=1000&auto=format&fit=crop"
                                    alt="Voice Visualization"
                                    className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
                                />
                                <div className="relative z-10 w-16 h-16 rounded-full bg-background shadow-lg flex items-center justify-center">
                                    <Mic className="w-6 h-6 text-foreground" />
                                </div>
                            </div>
                            {/* Secondary Orb */}
                            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 blur-md opacity-80" />
                        </div>

                        <p className="text-lg font-medium text-foreground max-w-sm">
                            Automate video voiceovers, ad reads, podcasts, and more, in your own voice
                        </p>
                    </div>

                    {/* Card 2: Text to Speech */}
                    <div className="border border-border rounded-2xl p-8 md:p-12 hover:shadow-card transition-shadow duration-300 flex flex-col items-center text-center group bg-card/30">
                        <div className="flex items-center gap-2 mb-12">
                            <FileText className="w-4 h-4 text-muted" />
                            <span className="text-xs font-bold tracking-widest text-muted uppercase">Text to Speech</span>
                        </div>

                        {/* Visual */}
                        <div className="relative h-48 flex items-center w-full max-w-sm mb-12">
                            <div className="flex-1 space-y-3 text-left opacity-30 group-hover:opacity-50 transition-opacity">
                                <div className="h-2 bg-foreground/20 rounded-full w-3/4"></div>
                                <div className="h-2 bg-foreground/20 rounded-full w-full"></div>
                                <div className="h-2 bg-foreground/20 rounded-full w-5/6"></div>
                                <div className="h-2 bg-foreground/20 rounded-full w-4/5"></div>
                            </div>

                            <div className="mx-4 flex items-center justify-center">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg flex items-center justify-center text-white">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>

                            <div className="flex-1 h-24 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-blue-500/20 flex items-center justify-center overflow-hidden">
                                {/* Fake Waveform */}
                                <div className="flex gap-1 items-center h-full px-4">
                                    {[...Array(12)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-1 bg-gradient-to-t from-cyan-400 to-blue-500 rounded-full animate-wave"
                                            style={{
                                                height: `${Math.random() * 60 + 20}%`,
                                                animationDelay: `${i * 0.1}s`
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <p className="text-lg font-medium text-foreground max-w-sm">
                            Refine your content with the most advanced text to speech engine
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VoiceDesignTools;
