import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Volume2, ListMusic } from 'lucide-react';
import { Button } from "@/components/ui/button";

const MusicDemo = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1B] mb-6 leading-tight">
                            Studio-quality music in seconds.
                        </h2>
                        <p className="text-[#1D1D1B]/60 text-lg md:text-xl leading-relaxed mb-8">
                            Whether you need a full-length track for a video, a background loop for a game, or a specific style for your next project, Eleven Music delivers.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Any Genre", description: "From Hip Hop to Classical, Jazz to Metal." },
                                { title: "Custom Length", description: "Generate snippets or full tracks up to 3 minutes." },
                                { title: "Multi-track Stemming", description: "Download instrumental, vocals, and drums separately." }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#1D1D1B]">{feature.title}</h4>
                                        <p className="text-[#1D1D1B]/50">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-tr from-purple-100/50 via-blue-100/30 to-pink-100/50 blur-3xl -z-10 rounded-[3rem]"></div>
                        <div className="bg-[#1D1D1B] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden text-white relative">
                            {/* Player Interface */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-48 h-48 rounded-2xl overflow-hidden mb-8 shadow-large">
                                    <img src="/music-covers/cover3.png" alt="Current Track" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Neon City Nights</h3>
                                <p className="text-white/40 mb-8 uppercase tracking-widest text-xs font-bold font-sans">Cyberpunk • Electronic • Synthwave</p>

                                {/* Waveform Placeholder */}
                                <div className="w-full h-12 flex items-end gap-[2px] mb-8">
                                    {[...Array(40)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: [10, Math.random() * 40 + 10, 10] }}
                                            transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.05 }}
                                            className="grow bg-purple-500/40 rounded-full"
                                        />
                                    ))}
                                </div>

                                {/* Controls */}
                                <div className="flex items-center gap-8 mb-8">
                                    <button className="text-white/40 hover:text-white transition-colors">
                                        <SkipBack className="w-6 h-6" />
                                    </button>
                                    <button className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform">
                                        <Play className="w-6 h-6 fill-current ml-1" />
                                    </button>
                                    <button className="text-white/40 hover:text-white transition-colors">
                                        <SkipForward className="w-6 h-6" />
                                    </button>
                                </div>

                                <div className="w-full flex items-center gap-4">
                                    <Volume2 className="w-4 h-4 text-white/40" />
                                    <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                                        <div className="w-2/3 h-full bg-white rounded-full" />
                                    </div>
                                    <ListMusic className="w-4 h-4 text-white/40" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MusicDemo;
