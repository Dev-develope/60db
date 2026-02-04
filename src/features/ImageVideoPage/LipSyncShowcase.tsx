import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Sparkles, Play, Volume2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const LipSyncShowcase = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full relative"
                    >
                        <div className="absolute -inset-4 bg-blue-100/50 blur-3xl rounded-[3rem] -z-10"></div>
                        <div className="bg-[#1D1D1B] rounded-[3rem] overflow-hidden shadow-2xl aspect-video relative group">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                                alt="LipSync Demo"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                                </div>
                            </div>

                            {/* Overlay UI */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                                        <Volume2 className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-blue-500"
                                                animate={{ width: ["0%", "100%", "0%"] }}
                                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                            />
                                        </div>
                                    </div>
                                    <span className="text-white/60 text-[10px] font-bold font-mono">0:05</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-8 border border-blue-100">
                            <UserCheck className="w-3 h-3" />
                            Next-gen LipSync
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1B] mb-6 leading-tight">
                            Voice to video in perfect harmony.
                        </h2>
                        <p className="text-[#1D1D1B]/60 text-lg md:text-xl leading-relaxed mb-8">
                            Our LipSync model maps any voice from our library or your own clones onto video, delivering natural movements and professional results.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="p-6 rounded-[2rem] bg-[#F9F9F9] border border-black/5">
                                <Sparkles className="w-6 h-6 text-blue-500 mb-4" />
                                <h4 className="font-bold mb-2">High Precision</h4>
                                <p className="text-xs text-[#1D1D1B]/40 font-medium">Sub-pixel accurate mouth mapping.</p>
                            </div>
                            <div className="p-6 rounded-[2rem] bg-[#F9F9F9] border border-black/5">
                                <Volume2 className="w-6 h-6 text-blue-500 mb-4" />
                                <h4 className="font-bold mb-2">Multi-lingual</h4>
                                <p className="text-xs text-[#1D1D1B]/40 font-medium">Works across 29+ languages.</p>
                            </div>
                        </div>

                        <Button className="w-full py-7 text-lg font-bold bg-[#1D1D1B] text-white rounded-2xl hover:bg-black transition-all">
                            Try LipSync now
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LipSyncShowcase;
