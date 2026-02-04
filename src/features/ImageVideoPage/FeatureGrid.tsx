import React from 'react';
import { motion } from 'framer-motion';
import { Video, Image as ImageIcon, Languages, Maximize, UserCheck, Music, Headphones, Type } from 'lucide-react';

const features = [
    {
        icon: Video,
        title: "Image & Video",
        description: "Generate high-quality video from static images or text prompts.",
        color: "bg-orange-50 text-orange-600"
    },
    {
        icon: UserCheck,
        title: "LipSync",
        description: "Synchronize audio perfectly with any talking head in a video.",
        color: "bg-blue-50 text-blue-600"
    },
    {
        icon: Maximize,
        title: "Upscale",
        description: "Enhance resolution and detail of your images and videos.",
        color: "bg-green-50 text-green-600"
    },
    {
        icon: Music,
        title: "AI Music",
        description: "Compose original soundtracks and loops for your visuals.",
        color: "bg-purple-50 text-purple-600"
    },
    {
        icon: Headphones,
        title: "AI Sound Effects",
        description: "Generate cinematic SFX using simple natural language.",
        color: "bg-pink-50 text-pink-600"
    },
    {
        icon: Languages,
        title: "Voice Changer",
        description: "Translate or transform voices while maintaining emotion.",
        color: "bg-indigo-50 text-indigo-600"
    },
    {
        icon: Type,
        title: "Captions",
        description: "Auto-generate beautiful captions for any video content.",
        color: "bg-yellow-50 text-yellow-600"
    },
    {
        icon: ImageIcon,
        title: "Image Editor",
        description: "Advanced AI tools to edit and refine every pixel.",
        color: "bg-red-50 text-red-600"
    }
];

const FeatureGrid = () => {
    return (
        <section className="py-24 bg-white font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="group p-8 rounded-[2rem] bg-[#F9F9F9] border border-transparent hover:border-black/5 hover:bg-white hover:shadow-xl transition-all duration-500 cursor-pointer"
                        >
                            <div className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-[#1D1D1B]">{feature.title}</h3>
                            <p className="text-[#1D1D1B]/40 text-sm leading-relaxed font-medium">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;
