import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Music, Ghost, Wind, Flame, CloudRain, Car, Siren, Sword, Cpu } from 'lucide-react';

const categories = [
    { icon: Ghost, name: "Horror", count: "1,200+ sounds" },
    { icon: Cpu, name: "Sci-fi", count: "850+ sounds" },
    { icon: CloudRain, name: "Nature", count: "2,100+ sounds" },
    { icon: Car, name: "Vehicles", count: "600+ sounds" },
    { icon: Sword, name: "Combat", count: "1,400+ sounds" },
    { icon: Music, name: "Ambient", count: "3,200+ sounds" },
    { icon: Flame, name: "Fire", count: "450+ sounds" },
    { icon: Wind, name: "Weather", count: "900+ sounds" },
    { icon: Siren, name: "Emergency", count: "300+ sounds" },
    { icon: Zap, name: "Industrial", count: "1,100+ sounds" },
];

const SFXCategories = () => {
    return (
        <section className="py-24 bg-[#FDFCF6] font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1B] mb-6 tracking-tight">Trending Categories</h2>
                        <p className="text-[#1D1D1B]/60 text-lg font-medium">Explore our vast library of AI-generated sound effects, meticulously categorized for your convenience.</p>
                    </div>
                    <button className="text-[10px] font-bold uppercase tracking-widest text-black/40 hover:text-black flex items-center gap-2 pb-2 border-b border-black/10">
                        View all categories
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="p-8 rounded-[2rem] bg-white border border-black/5 hover:border-black/20 hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <cat.icon className="w-6 h-6 text-[#1D1D1B]" />
                            </div>
                            <h3 className="text-xl font-bold mb-1 tracking-tight">{cat.name}</h3>
                            <p className="text-[10px] font-bold text-black/20 uppercase tracking-widest">{cat.count}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SFXCategories;
