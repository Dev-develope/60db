import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const TTSHero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden font-sans">
            {/* Background Mesh Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-br from-indigo-500/40 via-purple-500/20 to-transparent blur-[120px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gradient-to-tl from-orange-400/30 via-rose-500/10 to-transparent blur-[100px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 tracking-tighter leading-[0.9] lg:leading-[1]">
                            Text to Speech with <br className="hidden md:block" />
                            <span className="text-foreground/80">high quality, human-like AI voice generator</span>
                        </h1>

                        <p className="text-foreground/60 text-lg md:text-xl leading-relaxed font-medium mb-12 max-w-2xl mx-auto">
                            Convert text to audio in real-time. Generate natural sounding speech in any language,
                            instantly. Perfect for video creators, developers, and businesses.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button className="w-full sm:w-auto px-10 py-7 text-lg font-bold bg-black text-white rounded-full hover:scale-105 transition-all">
                                Get Started Free
                            </Button>
                            <Button variant="outline" className="w-full sm:w-auto px-10 py-7 text-lg font-bold rounded-full hover:bg-secondary/50 transition-all border-border">
                                Contact Sales
                            </Button>
                        </div>
                    </motion.div>

                    {/* Secondary Navigation Tags */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="mt-20 flex flex-wrap justify-center gap-3"
                    >
                        {["AI Voice Generator", "Cloning", "Dubbing", "Translation", "API"].map((tag) => (
                            <span key={tag} className="px-5 py-2 rounded-full bg-secondary/30 border border-border/50 text-xs font-bold tracking-widest uppercase text-foreground/40 hover:text-foreground/80 hover:bg-secondary/50 transition-all cursor-default">
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TTSHero;
