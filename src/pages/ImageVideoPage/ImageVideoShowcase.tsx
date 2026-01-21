import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, Maximize2, Sparkles, Video, Image as ImageIcon, Zap, Monitor, Layers } from 'lucide-react';

const showcaseItems = [
    {
        id: 1,
        title: "Space Exploration",
        description: "Cinematic space flight through nebulae.",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop",
        videoStill: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Cyberpunk City",
        description: "Neon-lit streets of a future metropolis.",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop",
        videoStill: "https://images.unsplash.com/photo-1545156521-77bd85671d30?q=80&w=2080&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Nature's Calm",
        description: "Serene landscapes and waterfalls.",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2074&auto=format&fit=crop",
        videoStill: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Abstract Art",
        description: "Flowing colors and digital movements.",
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop",
        videoStill: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Urban Life",
        description: "Fast-paced motion in the heart of the city.",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop",
        videoStill: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2044&auto=format&fit=crop"
    }
];

const ImageVideoShowcase = () => {
    const [activeItem, setActiveItem] = useState(showcaseItems[0]);
    const [isPlaying, setIsPlaying] = useState(true);

    return (
        <section className="py-24 bg-white font-sans overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Video Player Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative max-w-6xl mx-auto rounded-[3rem] overflow-hidden bg-black shadow-2xl aspect-video mb-12"
                >
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={activeItem.id}
                            src={activeItem.videoStill}
                            alt={activeItem.title}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full object-cover"
                        />
                    </AnimatePresence>

                    {/* Video Controls Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-between p-8">
                        <div className="flex justify-between items-start">
                            <div className="bg-black/20 backdrop-blur-md rounded-full px-4 py-2 text-white/80 text-xs font-bold uppercase tracking-widest border border-white/10">
                                AI Generated Video
                            </div>
                            <button className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                                <Volume2 className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Thumbnails on video */}
                        <div className="flex justify-center items-end gap-3 mb-4">
                            {showcaseItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveItem(item)}
                                    className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${activeItem.id === item.id ? 'border-white scale-110 shadow-xl' : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
                                        }`}
                                >
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white-20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                            >
                                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                            </button>
                            <div className="flex items-center gap-4">
                                <span className="text-white/60 text-xs font-mono">0:24 / 1:00</span>
                                <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                                    <Maximize2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Sub-features Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            icon: ImageIcon,
                            title: "Create or edit any images",
                            desc: "Generate, refine, or remix visuals in any style, from storyboards to thumbnails — all inside ElevenLabs.",
                            delay: 0.1
                        },
                        {
                            icon: Video,
                            title: "Turn ideas into videos",
                            desc: "Bring concepts to life with the world's top video models — start from text, image, or frame and create in seconds.",
                            delay: 0.2
                        },
                        {
                            icon: Monitor,
                            title: "Top models in a single place",
                            desc: "Access Veo, Sora, Kling, Wan and more — all integrated in one creative workspace, no setup needed.",
                            delay: 0.3
                        }
                    ].map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: card.delay, duration: 0.6 }}
                            className="bg-[#F9F9F9] rounded-[2.5rem] p-10 border border-black/5 hover:bg-white hover:shadow-2xl hover:border-transparent transition-all duration-500 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-all duration-500">
                                <card.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-[#1D1D1B]">{card.title}</h3>
                            <p className="text-[#1D1D1B]/50 text-sm leading-relaxed font-medium">
                                {card.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Models Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 pt-12 border-t border-black/5 flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                >
                    {["Veed LipSync", "Google Veo", "OpenAI Sora", "Flux 1", "Kling", "Seedance"].map((model, i) => (
                        <div key={i} className="flex items-center gap-2 font-bold text-sm tracking-tighter">
                            <Zap className="w-4 h-4" />
                            {model}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ImageVideoShowcase;
