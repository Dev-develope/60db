import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "How does the Text to Speech generator work?",
        answer: "Our Text to Speech generator uses advanced deep learning models to analyze text and synthesize natural-sounding speech. It captures the nuances of human intonation, rhythm, and emotion to provide high-fidelity output."
    },
    {
        question: "Is there a limit to how many words I can generate?",
        answer: "Free accounts have a monthly limit. Our paid plans offer significantly higher character limits, commercial rights, and access to more advanced features like professional voice cloning."
    },
    {
        question: "Can I use the generated audio for commercial purposes?",
        answer: "Yes, once you subscribe to a paid plan (Starter and above), you receive commercial rights for all content generated while your subscription is active."
    },
    {
        question: "Does it support multiple languages?",
        answer: "Absolutely! ElevenLabs supports 29+ languages and 70+ accents. Our Multilingual v2 models can even maintain the same unique voice profile across different languages."
    },
    {
        question: "How do I integrate TTS into my application?",
        answer: "We provide a robust REST API and official SDKs for major programming languages. You can find detailed documentation and examples in our developer portal."
    }
];

const TTSFAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-background font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                        <p className="text-foreground/60 font-medium">Everything you need to know about our TTS technology.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border-b border-border">
                                <button
                                    onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                    className="w-full py-6 flex items-center justify-between text-left group"
                                >
                                    <span className="text-lg font-bold text-foreground group-hover:text-foreground/80 transition-colors">
                                        {faq.question}
                                    </span>
                                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-secondary">
                                        {activeIndex === i ? (
                                            <Minus className="w-4 h-4" />
                                        ) : (
                                            <Plus className="w-4 h-4" />
                                        )}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {activeIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pb-8 text-foreground/60 font-medium leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TTSFAQ;
