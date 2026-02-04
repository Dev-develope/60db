import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
    {
        id: 'cinematic',
        name: 'Cinematic',
        title: 'Epic Triumphant Orchestral',
        prompt: 'A grand, sweeping orchestral piece with rising strings, booming percussion, and a sense of ultimate victory.',
        style: ['Orchestral', 'Epic', 'Triumphant'],
        image: '/music-covers/cover4.png'
    },
    {
        id: 'hiphop',
        name: 'Hip Hop',
        title: '90s New York Street Vibes',
        prompt: 'Gritty, boom-bap hip hop beat with a soulful saxophone sample and urban city atmosphere.',
        style: ['Hip Hop', 'Boom Bap', '90s'],
        image: '/music-covers/cover1.png'
    },
    {
        id: 'rock',
        name: 'Indie Rock',
        title: 'Dreamy Pastel Sunsets',
        prompt: 'Soft, reverb-heavy indie rock with jangling guitars and a nostalgic, dreamy atmosphere.',
        style: ['Indie', 'Rock', 'Dreamy'],
        image: '/music-covers/cover2.png'
    },
    {
        id: 'electronic',
        name: 'Electronic',
        title: 'Cyberpunk Neon Drive',
        prompt: 'High-energy synthwave with aggressive basslines, neon synth stabs, and a fast-paced futuristic feel.',
        style: ['Synthwave', 'Cyberpunk', 'Electronic'],
        image: '/music-covers/cover3.png'
    }
];

const MusicShowcase = () => {
    const [activeTab, setActiveTab] = useState(categories[0]);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1B] mb-6 tracking-tight">Compose music for any use case</h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Navigation Tabs */}
                    <div className="w-full lg:w-128 flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 no-scrollbar">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveTab(category)}
                                className={`px-8 py-5 rounded-2xl text-left transition-all whitespace-nowrap lg:whitespace-normal font-bold flex flex-col gap-1 border-2 ${activeTab.id === category.id
                                        ? 'bg-[#1D1D1B] text-white border-[#1D1D1B]'
                                        : 'bg-transparent text-[#1D1D1B]/40 border-transparent hover:bg-black/5'
                                    }`}
                            >
                                <span className="text-lg">{category.name}</span>
                                {activeTab.id === category.id && (
                                    <span className="text-[10px] uppercase tracking-widest opacity-60">Currently viewing</span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 w-full min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="bg-[#FDFCF6] rounded-[3rem] p-8 lg:p-12 border border-black/5 shadow-xl flex flex-col md:flex-row gap-12 items-center"
                            >
                                <div className="w-full md:w-64 lg:w-80 h-64 lg:h-80 rounded-[2rem] overflow-hidden shadow-2xl flex-shrink-0">
                                    <img src={activeTab.image} alt={activeTab.title} className="w-full h-full object-cover" />
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-4 text-purple-600 bg-purple-50 w-fit px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                        <Sparkles className="w-3 h-3" />
                                        Prompt used
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-[#1D1D1B] mb-4">{activeTab.title}</h3>
                                    <p className="text-[#1D1D1B]/60 text-lg mb-8 leading-relaxed italic">
                                        "{activeTab.prompt}"
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {activeTab.style.map((s, i) => (
                                            <span key={i} className="px-4 py-1.5 bg-black/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-black/60">
                                                {s}
                                            </span>
                                        ))}
                                    </div>

                                    <Button className="px-8 py-6 rounded-2xl bg-[#1D1D1B] text-white font-bold flex items-center gap-3 hover:scale-105 transition-transform group">
                                        <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        Play Preview
                                    </Button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MusicShowcase;
