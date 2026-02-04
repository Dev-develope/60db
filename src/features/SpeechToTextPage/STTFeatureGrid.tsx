import React from 'react';
import { motion } from 'framer-motion';
import { KeyRound, Tags, Users, ShieldCheck, Zap, Globe } from 'lucide-react';

const sttFeatures = [
    {
        icon: KeyRound,
        title: "Keyterm Prompting",
        description: "Guide the model with rare words, acronyms, or technical jargon to ensure perfect transcription."
    },
    {
        icon: Tags,
        title: "Dynamic Audio Tagging",
        description: "Automatically detect and tag type of audio—whether it's speech, background music, or noise."
    },
    {
        icon: Users,
        title: "Speaker Detection",
        description: "Accurately separate and label different speakers in an audio file, and detect entity types."
    },
    {
        icon: ShieldCheck,
        title: "Enterprise Grade",
        description: "Secure, SOC 2 and ISO 27001 compliant infrastructure built for critical business workflows."
    },
    {
        icon: Zap,
        title: "Timestamp Accuracy",
        description: "Get word-level timestamps that are perfectly synchronized with your audio input."
    },
    {
        icon: Globe,
        title: "Multilingual Support",
        description: "One model for the whole world. Scribe v2 supports 29+ languages and 70+ accents."
    }
];

const STTFeatureGrid = () => {
    return (
        <section className="py-24 bg-[#FCFAF3] font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-[#1D1D1B] mb-6 tracking-tight"
                    >
                        Built for ultimate creativity
                    </motion.h2>
                    <p className="text-[#1D1D1B]/60 text-lg font-medium">
                        Highly accurate, performant and secure Speech to Text models designed to power the next generation of audio apps.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sttFeatures.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-[2.5rem] bg-white border border-black/5 hover:bg-black hover:text-white transition-all duration-300 group shadow-sm"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center mb-8 group-hover:bg-white/10 group-hover:scale-110 transition-all">
                                <feature.icon className="w-7 h-7 text-[#1D1D1B] group-hover:text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 tracking-tight leading-tight">{feature.title}</h3>
                            <p className="text-[#1D1D1B]/50 group-hover:text-white/60 font-medium leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default STTFeatureGrid;
