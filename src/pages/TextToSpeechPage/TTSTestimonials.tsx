import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        quote: "The voice quality is indistinguishable from a professional voice actor. It's transformed our content pipeline.",
        author: "Sarah J.",
        role: "Production Lead at MediaFlow",
        avatar: "SJ"
    },
    {
        quote: "Integrating the API was a breeze. Low latency and high reliability makes it perfect for our realtime apps.",
        author: "David K.",
        role: "CTO at Nexus AI",
        avatar: "DK"
    },
    {
        quote: "The emotional range is incredible. We use it for all our game NPCs now.",
        author: "Alex M.",
        role: "Game Director at FrostByte",
        avatar: "AM"
    },
    {
        quote: "Finally, a generator that handles technical and medical terms without sounding robotic.",
        author: "Emily R.",
        role: "E-learning Specialist",
        avatar: "ER"
    },
    {
        quote: "Support for 29+ languages allowed us to go global in just one week.",
        author: "Marc L.",
        role: "Head of Growth at Streamline",
        avatar: "ML"
    },
    {
        quote: "The most realistic voice AI platform I've ever used. Simply outstanding.",
        author: "Jordan P.",
        role: "Independent Creator",
        avatar: "JP"
    }
];

const TTSTestimonials = () => {
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
                        Voices that resonate
                    </motion.h2>
                    <p className="text-foreground/60 text-lg font-medium">
                        Join millions of creators who are already pushing the boundaries of what's possible with AI audio.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {testimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="break-inside-avoid p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all"
                        >
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <Quote className="w-8 h-8 text-gray-200 mb-4" />
                            <p className="text-foreground/80 font-medium leading-relaxed mb-8">
                                "{item.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-600">
                                    {item.avatar}
                                </div>
                                <div className="text-left">
                                    <p className="text-sm font-bold text-foreground">{item.author}</p>
                                    <p className="text-[10px] font-medium text-foreground/40 uppercase tracking-widest">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TTSTestimonials;
