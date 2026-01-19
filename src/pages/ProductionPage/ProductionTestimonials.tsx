import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        handle: "@codebasics",
        text: "This mixed conversation in English and Hindi and the dubs provided shows the REAL POWER of AI. Language barriers are being diminished as we speak! Simply amazing!",
        author: "Lex Fridman x Narendra Modi",
        category: "Dubbing",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lex"
    },
    {
        handle: "@anandk.excel",
        text: "did anyone notice audio tracks 🔥🔥 All audio feels authentic and real. Like a 1 person speaking multiple languages",
        author: "Nano Banana x ElevenLabs",
        category: "Dubbing",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nano"
    },
    {
        handle: "#WarriorOfScience",
        text: "I am fluent in all 3 languages- this is the most emotional interview I have seen recently.",
        author: "Lex Fridman x Volodymyr Zelenskyy",
        category: "Dubbing",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zelenskyy"
    },
    {
        handle: "@dedel.lufefe",
        text: "I love your content, but I don't speak fluent English. Please keep dubbing in Brazilian Portuguese. I would be really happy if you do!",
        author: "Yes Theory",
        category: "Dubbing",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=YesTheory"
    },
    {
        handle: "Mickael B",
        text: "Impressed by the French translation, it feels so natural. We were talking about it with MW— so the tool is ElevenLabs!",
        author: "Matthieu Stefani / GDIY",
        category: "Dubbing",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Matthieu"
    },
    {
        handle: "@jmg8908",
        text: "It's amazing because to me it sounds like it's maintaining his voice/accent",
        author: "Andrew Huberman",
        category: "Dubbing",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andrew"
    }
];

const ProductionTestimonials = () => {
    return (
        <section className="py-24 bg-background font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                        Trusted by the World's Leading Creators & their communities
                    </h2>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="break-inside-avoid bg-white rounded-3xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                        >
                            <span className="text-[11px] font-bold text-foreground/40 mb-3 uppercase tracking-widest">{t.handle}</span>
                            <p className="text-foreground/80 text-base md:text-lg leading-relaxed font-medium mb-8">
                                "{t.text}"
                            </p>

                            <div className="mt-auto flex items-center gap-4">
                                <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full bg-secondary border border-border/30" />
                                <div>
                                    <div className="flex items-center gap-1">
                                        <p className="text-xs font-bold text-foreground/80">{t.author}</p>
                                        <svg className="w-2.5 h-2.5 text-foreground/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7l10 10M17 7H7v10" /></svg>
                                    </div>
                                    <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest">{t.category}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductionTestimonials;
