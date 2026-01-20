import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const imageVideoFaqs = [
    {
        question: "Which video models are supported?",
        answer: "We support industry-leading models including Google Veo, OpenAI Sora, Wan, Kling, and Seedance. You can choose the model that best fits your creative needs within the Studio interface."
    },
    {
        question: "Can I generate videos from images?",
        answer: "Yes, our Image-to-Video feature allows you to upload any static image and bring it to life with realistic motion and cinematic effects using simple text descriptions."
    },
    {
        question: "How does LipSync work?",
        answer: "LipSync uses advanced AI to synchronize the mouth movements of any talking head in a video with a chosen audio clip. It works with both library voices and your own custom voice clones."
    },
    {
        question: "What download formats are available?",
        answer: "Images can be downloaded in high-resolution JPG or PNG formats. Videos are typically exported as MP4 or MOV files, optimized for web and professional editing workflows."
    },
    {
        question: "Do I need a separate subscription for video?",
        answer: "Video generation uses your existing ElevenLabs credits. Some advanced models or high-resolution exports may require a paid plan (Starter or higher)."
    }
];

const ImageVideoFAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#1D1D1B] mb-4">Frequently Asked Questions</h2>
                        <p className="text-[#1D1D1B]/60 font-medium">Everything you need to know about AI image and video generation.</p>
                    </div>

                    <div className="space-y-4">
                        {imageVideoFaqs.map((faq, i) => (
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

export default ImageVideoFAQ;
