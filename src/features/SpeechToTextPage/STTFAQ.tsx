import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const sttFaqs = [
    {
        question: "How accurate are the Scribe v2 models?",
        answer: "Scribe v2 is our most accurate Speech to Text model yet, with industry-leading word error rates (WER). It's trained on over 1 million hours of diverse audio content to handle various accents, background noise, and overlapping speech."
    },
    {
        question: "What is the latency of Scribe v2 Realtime?",
        answer: "Scribe v2 Realtime is designed for sub-second latency, typically delivering transcription results in under 150ms. This makes it ideal for interactive AI agents and live captioning."
    },
    {
        question: "Does it support speaker diarization?",
        answer: "Yes, both our standard and realtime models support speaker diarization, allowing you to accurately distinguish between multiple speakers in any audio stream or file."
    },
    {
        question: "How many languages are supported?",
        answer: "Our multilingual models support 29+ languages and 70+ accents, including localized nuance and contextual awareness for global business use."
    },
    {
        question: "Can I use Scribe for commercial projects?",
        answer: "Yes, all transcriptions generated under our paid plans include full commercial rights. Please refer to our pricing page for more details on each tier's specific features."
    }
];

const STTFAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-[#FCFAF3] font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#1D1D1B] mb-4">Frequently Asked Questions</h2>
                        <p className="text-[#1D1D1B]/60 font-medium">Everything you need to know about Scribe v2 and transcription.</p>
                    </div>

                    <div className="space-y-4">
                        {sttFaqs.map((faq, i) => (
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

export default STTFAQ;
