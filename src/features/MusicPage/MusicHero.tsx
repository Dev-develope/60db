import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Music, Play, Wand2, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";

const MusicHero = () => {
    const [prompt, setPrompt] = useState("");

    const covers = [
        "/music-covers/cover1.png",
        "/music-covers/cover2.png",
        "/music-covers/cover3.png",
        "/music-covers/cover4.png",
    ];

    return (
        <section className="relative pt-32 pb-24 overflow-hidden font-sans bg-[#FDFCF6]">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-40 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-bl from-purple-100/50 via-pink-50/20 to-transparent blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-tr from-blue-50/30 via-indigo-50/10 to-transparent blur-[100px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-8">
                {/* Floating Carousel (Simplified implementation for Hero) */}
                <div className="relative h-[300px] mb-12 flex justify-center items-center perspective-1000">
                    <div className="flex gap-8 items-center">
                        {covers.map((cover, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50, rotateY: -20 }}
                                animate={{
                                    opacity: 1,
                                    y: [0, -10, 0],
                                    rotateY: 0
                                }}
                                transition={{
                                    delay: i * 0.1,
                                    duration: 0.8,
                                    y: {
                                        repeat: Infinity,
                                        duration: 4 + i,
                                        ease: "easeInOut"
                                    }
                                }}
                                className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform-gpu"
                            >
                                <img src={cover} alt={`Music Cover ${i + 1}`} className="w-full h-full object-cover" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 text-black/60 text-[10px] font-bold tracking-widest uppercase mb-8 border border-black/5">
                            <Music className="w-3 h-3" />
                            Eleven AI Music Generator
                        </div>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#1D1D1B] mb-8 tracking-tighter leading-[0.85]">
                            Create music <br className="hidden md:block" />
                            from text
                        </h1>
                        <p className="text-[#1D1D1B]/60 text-lg md:text-xl leading-relaxed font-medium mb-12 max-w-2xl mx-auto">
                            Generate studio-quality tracks instantly, any genre, any style, vocals or instrumental, in minutes using simple text prompts.
                        </p>
                    </motion.div>
                </div>

                {/* Interactive Prompt Box */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-white rounded-[2rem] p-4 border border-black/5 shadow-2xl flex flex-col md:flex-row items-center gap-4">
                            <div className="flex-1 flex items-center gap-4 px-6 py-4 w-full">
                                <Search className="w-6 h-6 text-black/20" />
                                <input
                                    type="text"
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder="Describe your song... e.g. 90s hip hop with a soulful sax"
                                    className="w-full bg-transparent border-none outline-none text-xl font-medium placeholder:text-black/20"
                                />
                            </div>
                            <Button className="w-full md:w-auto px-10 py-8 text-lg font-bold bg-[#1D1D1B] text-white rounded-2xl hover:bg-black transition-all flex items-center gap-2">
                                <Wand2 className="w-5 h-5" />
                                Generate
                            </Button>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4 opacity-40">
                        <span className="text-[10px] font-bold uppercase tracking-widest">Try these:</span>
                        {["Lo-fi Study Beats", "Epic Orchestral", "Summer House", "Dreamy Indie Pop"].map((tag, i) => (
                            <button
                                key={i}
                                onClick={() => setPrompt(tag)}
                                className="text-[10px] font-bold uppercase tracking-widest hover:text-black transition-colors"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MusicHero;
