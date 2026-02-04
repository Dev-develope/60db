import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Sliders, Download } from 'lucide-react';

const steps = [
    {
        icon: Upload,
        title: "Upload Audio",
        description: "Drag and drop your audio file or record directly into the browser. We support all major formats including MP3, WAV, and AIFF."
    },
    {
        icon: Sliders,
        title: "Isolate Vocals",
        description: "Our AI model analyzes your audio and separates speech from background elements instantly while preserving voice nuance."
    },
    {
        icon: Download,
        title: "Download Clean Copy",
        description: "Listen to the preview and download your crystal-clear audio file. Perfect for editing, sharing, or content creation."
    }
];

const VIHowItWorks = () => {
    return (
        <section className="py-24 bg-white font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl font-bold text-[#1D1D1B] mb-6">How it works</h2>
                    <p className="text-[#1D1D1B]/60 text-lg font-medium">Clear audio is just three clicks away.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto relative">
                    {/* Connection Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-black/5 -translate-y-24"></div>

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="text-center relative z-10"
                        >
                            <div className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center mb-10 mx-auto shadow-2xl shadow-black/20 ring-8 ring-white">
                                <step.icon className="w-8 h-8" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border border-black/5 flex items-center justify-center text-[10px] font-bold text-black shadow-sm">
                                    0{i + 1}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 tracking-tight">{step.title}</h3>
                            <p className="text-[#1D1D1B]/40 font-medium leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VIHowItWorks;
