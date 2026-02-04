import React from 'react';
import { motion } from 'framer-motion';

const ProductionCrafted = () => {
    return (
        <section className="py-24 bg-background font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-tight"
                    >
                        AI audio, crafted by humans
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-foreground/60 text-base md:text-lg leading-relaxed font-medium mb-12 max-w-2xl mx-auto"
                    >
                        Productions unlocks human-edited transcripts, captions, subtitles, dubs,
                        and audiobooks directly on the ElevenLabs platform. Made for creators and
                        media businesses.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full font-bold text-sm tracking-tight hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg">
                            Order a Production
                        </button>
                        <button className="w-full sm:w-auto bg-white text-foreground border border-border px-8 py-4 rounded-full font-bold text-sm tracking-tight hover:bg-secondary/50 transition-all hover:scale-105 active:scale-95">
                            Contact Sales
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProductionCrafted;
