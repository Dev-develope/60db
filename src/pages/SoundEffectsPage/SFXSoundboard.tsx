import React from 'react';
import { motion } from 'framer-motion';
import { Music2, Radio, PlayCircle, Layers } from 'lucide-react';

const sfxTriggers = [
    { label: "BASS DROP", color: "bg-orange-500" },
    { label: "RISER", color: "bg-purple-500" },
    { label: "SWOOSH", color: "bg-blue-500" },
    { label: "IMPACT", color: "bg-emerald-500" },
    { label: "GLITCH", color: "bg-rose-500" },
    { label: "AMBIENT", color: "bg-indigo-500" },
    { label: "REVERSE", color: "bg-amber-500" },
    { label: "DRUMS", color: "bg-slate-500" },
];

const SFXSoundboard = () => {
    return (
        <section className="py-24 bg-[#FDFCF6] font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 text-black/60 text-[10px] font-bold tracking-widest uppercase mb-8 border border-black/5">
                                <Radio className="w-3 h-3" />
                                SB1 Infinite SFX Tool
                            </div>
                            <h2 className="text-5xl md:text-7xl font-bold text-[#1D1D1B] mb-8 tracking-tighter leading-tight">
                                Unlimited <br />
                                <span className="text-black/40">possibilities</span>
                            </h2>
                            <p className="text-[#1D1D1B]/60 text-lg leading-relaxed font-medium mb-10 max-w-xl">
                                Our SB1 technology generates soundscapes that never repeat. Each trigger creates a
                                unique variation based on your creative parameters.
                            </p>

                            <div className="flex flex-wrap gap-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-black">
                                        <Layers className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-bold">Multi-layer Synthesis</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-black">
                                        <PlayCircle className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-bold">Infinite Loop Support</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-[#1D1D1B] rounded-[3rem] p-12 shadow-2xl relative overflow-hidden"
                        >
                            {/* Soundboard UI Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 relative z-10">
                                {sfxTriggers.map((sfx, i) => (
                                    <motion.button
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="aspect-square bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-4 group transition-all hover:bg-white/10"
                                    >
                                        <div className={`w-3 h-3 rounded-full ${sfx.color} group-hover:scale-125 transition-transform group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]`}></div>
                                        <span className="text-[10px] font-bold text-white/40 group-hover:text-white transition-colors tracking-widest">{sfx.label}</span>
                                    </motion.button>
                                ))}
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 p-8 opacity-20">
                                <Music2 className="w-24 h-24 text-white" />
                            </div>

                            <div className="mt-12 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <div className="w-12 h-1.5 rounded-full bg-white/20 overflow-hidden">
                                        <motion.div
                                            animate={{ x: [-48, 48] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            className="h-full w-full bg-orange-500"
                                        ></motion.div>
                                    </div>
                                    <div className="w-12 h-1.5 rounded-full bg-white/20 overflow-hidden">
                                        <motion.div
                                            animate={{ x: [48, -48] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                            className="h-full w-full bg-blue-500"
                                        ></motion.div>
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest italic">REALTIME_SYTH_ACTIVE</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SFXSoundboard;
