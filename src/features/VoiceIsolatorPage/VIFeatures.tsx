import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, UserCheck, Waves } from 'lucide-react';

const features = [
    {
        tag: "Extraction",
        title: "Extract vocals with precision",
        description: "Our state-of-the-art AI separating spoken words from background music, noise, and chatter. Whether it's a bustling cafe or a loud concert, get the speech you need.",
        icon: Sparkles,
        color: "text-purple-500",
        bg: "bg-purple-50",
        border: "border-purple-100",
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800"
    },
    {
        tag: "Isolation",
        title: "Isolate voices from any environment",
        description: "Clear up low-quality recordings or enhance vintage audio. Scribe's isolation model understands human speech patterns to reconstruct lost clarity.",
        icon: Waves,
        color: "text-cyan-500",
        bg: "bg-cyan-50",
        border: "border-cyan-100",
        image: "https://images.unsplash.com/photo-1478737270239-2fccd27ee10f?auto=format&fit=crop&q=80&w=800"
    },
    {
        tag: "Production",
        title: "Cinema-grade vocal quality",
        description: "Built for creators who demand professional-level audio. Remove air-conditioning hums, traffic noise, and unwanted background ambiance instantly.",
        icon: UserCheck,
        color: "text-emerald-500",
        bg: "bg-emerald-50",
        border: "border-emerald-100",
        image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800"
    }
];

const VIFeatures = () => {
    return (
        <section className="py-24 bg-white font-sans overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="space-y-32">
                    {features.map((feature, i) => (
                        <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-20`}>
                            <div className="w-full lg:w-1/2">
                                <motion.div
                                    initial={{ opacity: 0, x: i % 2 === 1 ? 30 : -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${feature.bg} ${feature.color} text-[10px] font-bold tracking-widest uppercase mb-6 border ${feature.border}`}>
                                        <feature.icon className="w-3 h-3" />
                                        {feature.tag}
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-bold text-[#1D1D1B] mb-8 tracking-tighter leading-tight">
                                        {feature.title}
                                    </h2>
                                    <p className="text-[#1D1D1B]/60 text-lg leading-relaxed font-medium mb-10 max-w-xl">
                                        {feature.description}
                                    </p>

                                    <div className="flex items-center gap-4 py-6 border-t border-black/5">
                                        <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                                            <Shield className="w-4 h-4 text-black/40" />
                                        </div>
                                        <p className="text-xs font-bold text-black/40 tracking-wide uppercase">Lossless Isolation Quality</p>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="w-full lg:w-1/2">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, rotate: i % 2 === 1 ? -2 : 2 }}
                                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="relative group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent rounded-[3rem] -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="aspect-[4/5] lg:aspect-square rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl">
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        {/* Visual Wave Overlay */}
                                        <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/60 to-transparent">
                                            <div className="flex gap-1 items-end h-12">
                                                {[...Array(30)].map((_, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        animate={{ height: [`${Math.random() * 20 + 5}px`, `${Math.random() * 40 + 5}px`, `${Math.random() * 20 + 5}px`] }}
                                                        transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.05 }}
                                                        className={`w-1 rounded-full ${idx > 15 ? 'bg-white/20' : 'bg-white'}`}
                                                    />
                                                ))}
                                            </div>
                                            <div className="mt-4 flex justify-between items-center">
                                                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Original Audio</span>
                                                <span className="text-[10px] font-bold text-white uppercase tracking-widest text-right">Isolated Voice</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VIFeatures;
