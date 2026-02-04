import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Headphones, SlidersHorizontal } from 'lucide-react';

const sfxFeatures = [
    {
        icon: Zap,
        title: "Instant Generation",
        description: "Generate any sound effect in seconds. Our AI model is optimized for speed without compromising audio quality."
    },
    {
        icon: SlidersHorizontal,
        title: "Precise Control",
        description: "Guide the model with detailed prompts. Specify duration, intensity, and ambient details for the perfect sound."
    },
    {
        icon: ShieldCheck,
        title: "Royalty Free",
        description: "All generated sounds come with commercial rights. Use them in your games, films, or YouTube videos without worry."
    },
    {
        icon: Headphones,
        title: "Highest Quality",
        description: "Studio-grade 44.1kHz audio files. Clean, crisp, and ready for professional sound design and mixing."
    }
];

const SFXFeatures = () => {
    return (
        <section className="py-24 bg-white font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1B] mb-6 tracking-tight">Sound for blockbusters</h2>
                    <p className="text-[#1D1D1B]/60 text-lg font-medium">The most advanced AI sound model built for professional creators.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {sfxFeatures.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-black/5 flex items-center justify-center mb-8 mx-auto group-hover:bg-black group-hover:text-white transition-all">
                                <feature.icon className="w-7 h-7 text-[#1D1D1B]" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                            <p className="text-[#1D1D1B]/40 text-sm font-medium leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SFXFeatures;
