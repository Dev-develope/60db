import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const sfxFaqs = [
    {
        question: "How does the AI Sound Effects generator work?",
        answer: "Our generator uses a foundation model trained specifically on audio samples. It interprets your text descriptions and synthesizes unique sound effects from scratch, rather than searching a library of pre-recorded clips."
    },
    {
        question: "What kind of sounds can I generate?",
        answer: "You can generate almost any sound imaginable—from cinematic hits and nature ambiances to mechanical noises and sci-fi weapons. The more descriptive your prompt, the better the result."
    },
    {
        question: "Are the generated sounds royalty-free?",
        answer: "Yes, once you subscribe to a paid plan (Starter and above), you receive commercial rights for all content generated. You can use them in apps, games, films, or YouTube videos without attribution."
    },
    {
        question: "What is the quality of the generated audio?",
        answer: "All sound effects are generated at studio-quality 44.1kHz. This ensures high-fidelity audio that is ready to be used in professional post-production workflows."
    },
    {
        question: "Is there a limit to how many sounds I can generate?",
        answer: "Free accounts have a monthly credit limit. Paid tiers offer higher usage limits, priority generation, and access to more advanced features."
    }
];

const SFXFAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#1D1D1B] mb-4">Frequently Asked Questions</h2>
                        <p className="text-[#1D1D1B]/60 font-medium">Everything you need to know about AI-generated sound effects.</p>
                    </div>

                    <div className="space-y-4">
                        {sfxFaqs.map((faq, i) => (
                            <div key={i} className="border-b border-black/5">
                                <button
                                    onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                    className="w-full py-6 flex items-center justify-between text-left group"
                                >
                                    <span className="text-lg font-bold text-[#1D1D1B] group-hover:text-[#1D1D1B]/80 transition-colors">
                                        {faq.question}
                                    </span>
                                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black/5">
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
                                            <p className="pb-8 text-[#1D1D1B]/60 font-medium leading-relaxed">
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

export default SFXFAQ;
