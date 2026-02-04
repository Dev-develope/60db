import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Languages, Star } from 'lucide-react';

const languages = [
    { name: "English", flag: "🇺🇸", count: "120+ voices" },
    { name: "Spanish", flag: "🇪🇸", count: "80+ voices" },
    { name: "French", flag: "🇫🇷", count: "65+ voices" },
    { name: "German", flag: "🇩🇪", count: "70+ voices" },
    { name: "Japanese", flag: "🇯🇵", count: "55+ voices" },
    { name: "Chinese", flag: "🇨🇳", count: "90+ voices" },
    { name: "Arabic", flag: "🇸🇦", count: "45+ voices" },
    { name: "Hindi", flag: "🇮🇳", count: "60+ voices" }
];

const TTSGlobalVoice = () => {
    return (
        <section className="py-24 bg-background font-sans overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative z-10"
                        >
                            {/* Stylized Globe Placeholder */}
                            <div className="aspect-square rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent border border-indigo-500/10 relative flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 opacity-20">
                                    <Globe2 className="w-full h-full text-indigo-600 animate-[spin_20s_linear_infinite]" />
                                </div>
                                <div className="relative z-10 text-center">
                                    <p className="text-[120px] font-bold text-foreground/5 leading-none">29+</p>
                                    <p className="text-xl font-bold tracking-widest text-foreground/40 uppercase">Languages</p>
                                </div>

                                {/* Orbiting Elements */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 z-2"
                                >
                                    <div className="absolute top-10 left-10 p-3 rounded-xl bg-white shadow-lg border border-border">
                                        <span className="text-xl">🇺🇸</span>
                                    </div>
                                    <div className="absolute bottom-20 right-10 p-3 rounded-xl bg-white shadow-lg border border-border">
                                        <span className="text-xl">🇯🇵</span>
                                    </div>
                                    <div className="absolute top-1/2 left-0 p-3 rounded-xl bg-white shadow-lg border border-border">
                                        <span className="text-xl">🇪🇸</span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-foreground/60 text-[10px] font-bold tracking-widest uppercase mb-6 border border-border/50">
                                <Languages className="w-3 h-3" />
                                Global Reach
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-tighter leading-tight">
                                Speak to the <br />
                                <span className="text-foreground/80">entire world</span>
                            </h2>
                            <p className="text-foreground/60 text-lg leading-relaxed font-medium mb-10">
                                Our Turbo v2.5 models support 29+ languages and 70+ accents with localized nuance.
                                Expand your reach instantly without localizing content manually.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {languages.map((lang, i) => (
                                    <div key={i} className="p-4 rounded-xl bg-white border border-border/50 hover:border-blue-500/50 hover:bg-blue-50/10 transition-all cursor-default group">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xl">{lang.flag}</span>
                                            <Star className="w-3 h-3 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <p className="text-sm font-bold text-foreground">{lang.name}</p>
                                        <p className="text-[10px] font-medium text-foreground/40 uppercase tracking-widest">{lang.count}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TTSGlobalVoice;
