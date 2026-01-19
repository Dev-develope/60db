import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, BookOpen, MessageSquare, MonitorPlay, Radio, Code2 } from 'lucide-react';

const cases = [
    {
        icon: Gamepad2,
        title: "Gaming",
        description: "Breathe life into NPCs with dynamic, emotional voices that react to player actions in real-time.",
        color: "bg-blue-500/10 text-blue-600"
    },
    {
        icon: BookOpen,
        title: "Publishing",
        description: "Convert long-form articles or entire books into studio-quality audiobooks in minutes.",
        color: "bg-purple-500/10 text-purple-600"
    },
    {
        icon: MessageSquare,
        title: "Conversational AI",
        description: "Power realistic customer support agents and virtual assistants that sound truly human.",
        color: "bg-emerald-500/10 text-emerald-600"
    },
    {
        icon: MonitorPlay,
        title: "Youtube & Social",
        description: "Voice your videos in 29+ languages and reach a global audience without the cost of a studio.",
        color: "bg-rose-500/10 text-rose-600"
    },
    {
        icon: Radio,
        title: "Podcast & News",
        description: "Automate news narration or create entire podcast episodes from simple scripts.",
        color: "bg-amber-500/10 text-amber-600"
    },
    {
        icon: Code2,
        title: "Developer First",
        description: "Integrate ultra-low latency TTS into your apps with our robust and easy-to-use API.",
        color: "bg-slate-500/10 text-slate-600"
    }
];

const TTSIndustryShowcase = () => {
    return (
        <section className="py-24 bg-white font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight"
                    >
                        Built for ultimate creativity
                    </motion.h2>
                    <p className="text-foreground/60 text-lg font-medium">
                        Our AI voice generator is trusted by millions of creators and top companies worldwide to power their most ambitious projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${item.color} group-hover:scale-110 transition-transform shadow-sm`}>
                                <item.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">{item.title}</h3>
                            <p className="text-foreground/50 font-medium leading-relaxed">
                                {item.description}
                            </p>

                            <div className="mt-8 pt-8 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-sm font-bold text-foreground inline-flex items-center gap-2 cursor-pointer hover:gap-3 transition-all">
                                    Learn more →
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TTSIndustryShowcase;
