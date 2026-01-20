import React from 'react';
import { Mic, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
    { name: "Advertisement", icon: Mic },
    { name: "Characters & Animation", icon: Mic },
    { name: "Entertainment & TV", icon: Mic },
    { name: "Informative & Education", icon: Mic },
    { name: "Narrative & Story", icon: Mic },
];

const VoiceLibraryCategories = () => {
    return (
        <section className="py-20 bg-background font-sans overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 tracking-tight">
                    Explore all our voice categories
                </h2>

                <div className="flex flex-wrap gap-4">
                    {categories.map((cat, i) => (
                        <motion.button
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 px-6 py-4 bg-background border border-border rounded-full hover:shadow-md transition-all group"
                        >
                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <cat.icon className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-bold text-foreground/80 group-hover:text-foreground transition-colors">
                                {cat.name}
                            </span>
                            <ArrowUpRight className="w-4 h-4 text-foreground/20 group-hover:text-foreground/40 transition-colors" />
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VoiceLibraryCategories;
