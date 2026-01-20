import React from 'react';
import { motion } from 'framer-motion';

const models = [
    { name: "Google Veo", color: "from-blue-400 to-indigo-500" },
    { name: "OpenAI Sora", color: "from-green-400 to-emerald-500" },
    { name: "Wan", color: "from-orange-400 to-red-500" },
    { name: "Kling", color: "from-purple-400 to-pink-500" },
    { name: "Seedance", color: "from-cyan-400 to-blue-500" },
    { name: "Midjourney", color: "from-blue-600 to-indigo-900" },
    { name: "Stable Diffusion", color: "from-purple-600 to-fuchsia-900" }
];

const ModelShowcase = () => {
    return (
        <section className="py-24 bg-[#F9F9F9] overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1B] mb-4">Integrated with the best models</h2>
                <p className="text-[#1D1D1B]/40 font-medium">Powering your creativity with industry-leading AI foundation models.</p>
            </div>

            <div className="flex relative items-center">
                {/* Infinite Scrolling Belt */}
                <motion.div
                    className="flex gap-8 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear"
                    }}
                >
                    {[...models, ...models].map((model, i) => (
                        <div
                            key={i}
                            className={`px-10 py-6 rounded-3xl bg-white border border-black/5 shadow-sm flex items-center gap-4 group hover:shadow-lg transition-all duration-300`}
                        >
                            <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${model.color} shadow-inner`} />
                            <span className="text-xl font-bold text-[#1D1D1B] opacity-80 group-hover:opacity-100">{model.name}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Fades */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#F9F9F9] to-transparent z-10" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#F9F9F9] to-transparent z-10" />
            </div>
        </section>
    );
};

export default ModelShowcase;
