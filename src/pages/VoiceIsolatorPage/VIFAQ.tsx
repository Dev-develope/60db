import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const viFaqs = [
    {
        question: "Is the Voice Isolator free to use?",
        answer: "Yes, you can use the Voice Isolator for free within our monthly character and file limits. Paid plans offer higher limits, commercial rights, and priority processing."
    },
    {
        question: "What file types are supported?",
        answer: "We support most common audio formats including MP3, WAV, M4A, AAC, and AIFF. The file size limit for free accounts is 100MB."
    },
    {
        question: "Can it remove music from background speech?",
        answer: "Absolutely. Our model is specifically trained to separate human speech from non-speech elements, including complex background music, sirens, and ambient chatter."
    },
    {
        question: "Does it work with music vocals?",
        answer: "While specifically optimized for spoken word, the Voice Isolator can often successfully extract vocals from songs, though the output quality may vary depending on the track's complexity."
    },
    {
        question: "Is my audio data secure?",
        answer: "We take privacy seriously. Your uploaded audio is processed securely and is never used to train our base models without explicit permission."
    }
];

const VIFAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-gray-50 font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#1D1D1B] mb-4">Frequently Asked Questions</h2>
                        <p className="text-[#1D1D1B]/60 font-medium">Common questions about isolating speech and removing noise.</p>
                    </div>

                    <div className="space-y-4">
                        {viFaqs.map((faq, i) => (
                            <div key={i} className="border-b border-black/5">
                                <button
                                    onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                    className="w-full py-6 flex items-center justify-between text-left group"
                                >
                                    <span className="text-lg font-bold text-[#1D1D1B] group-hover:text-[#1D1D1B]/80 transition-colors">
                                        {faq.question}
                                    </span>
                                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white border border-black/5">
                                        {activeIndex === i ? (
                                            <Minus className="w-4 h-4 text-black/40" />
                                        ) : (
                                            <Plus className="w-4 h-4 text-black/40" />
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

export default VIFAQ;
