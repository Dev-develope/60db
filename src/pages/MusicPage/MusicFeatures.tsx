import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Headphones, SlidersHorizontal, Share2, Download } from 'lucide-react';

const musicFeatures = [
    {
        icon: Zap,
        title: "Instant Composition",
        description: "Generate full tracks in seconds. Our state-of-the-art model understands complex musical structures and genres."
    },
    {
        icon: SlidersHorizontal,
        title: "Lyrics & Style",
        description: "Specify lyrics, mood, and instrumentation. Guide the AI to create exactly what you have in mind."
    },
    {
        icon: ShieldCheck,
        title: "Commercial Rights",
        description: "Music generated on paid plans includes a commercial license. Use it in any project, anywhere."
    },
    {
        icon: Headphones,
        title: "Studio-Grade Audio",
        description: "Pristine audio quality ready for professional production. High-fidelity output for all your needs."
    }
];

const MusicFeatures = () => {
    return (
        <section className="py-24 bg-[#F9F9F9] font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1B] mb-6 tracking-tight">Make the perfect song for any moment</h2>
                    <p className="text-[#1D1D1B]/60 text-lg font-medium">The most advanced AI music generator built for professional creators and dreamers.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {musicFeatures.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-xl transition-all group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 tracking-tight text-[#1D1D1B]">{feature.title}</h3>
                            <p className="text-[#1D1D1B]/50 text-sm font-medium leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MusicFeatures;
