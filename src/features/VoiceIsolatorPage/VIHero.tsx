import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Mic, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";

const VIHero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden font-sans bg-white">
            {/* Background Wavy Decorations */}
            <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
                <svg className="absolute top-0 right-0 w-1/2 h-full text-purple-100" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" fillOpacity="0.5" />
                </svg>
                <div className="absolute top-[20%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-br from-cyan-100/40 via-purple-100/20 to-transparent blur-[120px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#1D1D1B] mb-8 tracking-tighter leading-[0.9] lg:leading-[1]">
                            Extract crystal-clear <br className="hidden md:block" />
                            speech from any audio
                        </h1>

                        <p className="text-[#1D1D1B]/60 text-lg md:text-xl leading-relaxed font-medium mb-12 max-w-2xl mx-auto">
                            Remove background noise and isolate vocals with industry-leading AI.
                            Perfect for films, podcasts, and clearing up interviews.
                        </p>

                        <Button className="px-10 py-7 text-lg font-bold bg-black text-white rounded-full hover:scale-105 transition-all shadow-xl shadow-black/10">
                            ISOLATE SPEECH FREE
                        </Button>
                    </motion.div>
                </div>

                {/* Interactive Demo Interface */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-gray-50 rounded-[3rem] p-4 border border-black/5 shadow-2xl relative overflow-hidden group">
                        <div className="bg-white rounded-[2.5rem] p-16 flex flex-col items-center justify-center text-center border border-black/5 min-h-[460px] relative z-10">
                            <div className="w-24 h-24 rounded-full bg-black/5 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                                <Upload className="w-10 h-10 text-black/20" />
                            </div>

                            <h3 className="text-2xl font-bold mb-4 tracking-tight">Drop your audio file here</h3>
                            <p className="text-black/40 font-medium mb-12 max-w-sm">Support for mp3, wav, m4a up to 100MB. Isolate vocals in seconds.</p>

                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Button className="bg-[#1D1D1B] text-white px-10 py-7 rounded-2xl font-bold text-lg hover:shadow-lg transition-all">
                                    Upload Audio
                                </Button>
                                <Button variant="ghost" className="text-black/40 font-bold flex items-center gap-2 py-7">
                                    <Mic className="w-4 h-4" />
                                    Record live
                                </Button>
                            </div>
                        </div>

                        {/* Decorative Background for Demo */}
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <div className="flex gap-2">
                                {[...Array(20)].map((_, i) => (
                                    <div key={i} className="w-1 bg-black rounded-full" style={{ height: `${Math.random() * 80 + 20}px` }}></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-8">
                        <div className="flex items-center gap-2 opacity-30 group cursor-pointer hover:opacity-100 transition-opacity">
                            <Play className="w-4 h-4 text-black fill-current" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Listen to sample</span>
                        </div>
                        <div className="h-4 w-px bg-black/10"></div>
                        <div className="flex items-center gap-2 opacity-30">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-[10px] font-bold uppercase tracking-widest">Processing Ready</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VIHero;
