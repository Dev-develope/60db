import React from 'react';
import { Box, Code2, Disc, Globe2, Mic, Settings2 } from "lucide-react";

const RealtimeCapabilities = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6 md:px-12 space-y-8">

                {/* Row 1: Large Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Card 1: Purpose-built for Agents (Dark) */}
                    <div className="relative overflow-hidden rounded-3xl bg-[#0a0a0a] min-h-[500px] group border border-neutral-800">
                        {/* Visual: Chat UI */}
                        <div className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-blue-900/20 to-transparent p-8 flex flex-col items-center justify-center">
                            {/* Abstract Grain/Noise background */}
                            <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

                            {/* Chat Bubbles */}
                            <div className="relative w-full max-w-sm space-y-4">
                                <div className="flex justify-end animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                                    <div className="bg-white text-black px-6 py-3 rounded-2xl rounded-tr-sm shadow-xl font-medium text-sm">
                                        I'm happy to help. What's your email address?
                                    </div>
                                </div>
                                <div className="flex justify-start animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
                                    <div className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-2xl rounded-tl-sm border border-white/10 shadow-xl font-medium text-sm flex items-center gap-2">
                                        <span>It's</span>
                                        <div className="h-4 w-16 bg-white/20 rounded-full animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 text-[10px] text-white/40 uppercase tracking-widest font-bold">Live call</div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="absolute inset-x-0 bottom-0 p-8 space-y-4">
                            <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Purpose-built for Agents and voice apps</div>
                            <h3 className="text-2xl md:text-3xl font-serif text-white font-medium">
                                Scribe v2 Realtime is purpose-built for developers creating conversational agents...
                            </h3>
                        </div>
                    </div>

                    {/* Card 2: 90 Languages (Light) */}
                    <div className="relative overflow-hidden rounded-3xl bg-[#f5f5f4] min-h-[500px] border border-border group">
                        {/* Visual: Globe/Languages */}
                        <div className="absolute inset-x-0 top-0 h-[60%] flex items-center justify-center relative">
                            {/* Decorative Circle */}
                            <div className="w-96 h-96 rounded-full border border-neutral-200 flex items-start justify-center pt-8 relative">
                                {/* Language Labels placed around */}
                                <span className="absolute top-4 text-xs font-medium text-neutral-400">Polish</span>
                                <span className="absolute top-12 left-20 text-xs font-medium text-neutral-400">Japanese</span>
                                <span className="absolute top-12 right-20 text-xs font-medium text-neutral-400">Mandarin</span>
                            </div>
                            {/* Fade out bottom */}
                            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#f5f5f4] to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="absolute inset-x-0 bottom-0 p-8 space-y-4">
                            <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Capture speech accurately in 90 languages</div>
                            <h3 className="text-2xl md:text-3xl font-serif text-foreground font-medium">
                                Scribe v2 Realtime ensures consistent understanding everywhere...
                            </h3>
                        </div>
                    </div>

                </div>

                {/* Row 2: Smaller Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 3 */}
                    <div className="bg-secondary/20 rounded-2xl p-8 min-h-[240px] flex flex-col justify-end border border-border hover:bg-secondary/30 transition-colors">
                        <div className="mb-auto">
                            <Disc className="w-6 h-6 text-foreground opacity-70" />
                        </div>
                        <h4 className="text-sm font-bold text-muted uppercase tracking-wider mb-2">Multiple audio formats</h4>
                        <p className="text-base text-foreground font-medium">
                            Supports PCM (8-48 kHz) and μ-law encoding for compatibility across telephony.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-secondary/20 rounded-2xl p-8 min-h-[240px] flex flex-col justify-end border border-border hover:bg-secondary/30 transition-colors">
                        <div className="mb-auto">
                            <Mic className="w-6 h-6 text-foreground opacity-70" />
                        </div>
                        <h4 className="text-sm font-bold text-muted uppercase tracking-wider mb-2">Voice Activity Detection</h4>
                        <p className="text-base text-foreground font-medium">
                            Detects when speech starts and stops, segmenting audio precisely.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-secondary/20 rounded-2xl p-8 min-h-[240px] flex flex-col justify-end border border-border hover:bg-secondary/30 transition-colors">
                        <div className="mb-auto">
                            <Settings2 className="w-6 h-6 text-foreground opacity-70" />
                        </div>
                        <h4 className="text-sm font-bold text-muted uppercase tracking-wider mb-2">Manual Commit control</h4>
                        <p className="text-base text-foreground font-medium">
                            Gives developers control over when to finalize transcripts.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default RealtimeCapabilities;
