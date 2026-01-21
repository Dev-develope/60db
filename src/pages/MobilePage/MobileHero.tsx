import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';

const MobileHero = () => {
    return (
        <section className="pt-32 pb-16 bg-background font-sans overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-foreground/60 text-[10px] font-bold tracking-widest uppercase mb-6 border border-border/50">
                                Now in your pocket
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tighter leading-[0.9]">
                                AI Voices on the <br />
                                <span className="text-secondary-foreground">GO</span>
                            </h1>
                            <p className="text-foreground/60 text-lg md:text-xl leading-relaxed font-medium mb-12 max-w-xl mx-auto lg:mx-0">
                                Experience the world's most advanced AI voices on your iPhone and Android.
                                Generate, convert, and listen to content anywhere, anytime.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95">
                                    <Apple className="w-6 h-6 fill-current" />
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase tracking-wider opacity-60 leading-none mb-1">Download on the</p>
                                        <p className="text-lg leading-none">App Store</p>
                                    </div>
                                </button>
                                <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95">
                                    <Play className="w-6 h-6 fill-current" />
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase tracking-wider opacity-60 leading-none mb-1">Get it on</p>
                                        <p className="text-lg leading-none">Google Play</p>
                                    </div>
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, x: 50, rotate: 5 }}
                            animate={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative z-10"
                        >
                            <img
                                src="https://eleven-public-cdn.elevenlabs.io/payloadcms/0y8v6j0m7e8-MobileHero.png"
                                alt="Mobile App UI"
                                className="w-full max-w-[500px] mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
                            />
                        </motion.div>

                        {/* Decorative elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/20 rounded-full blur-3xl -z-0"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileHero;
