import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, AudioWaveform, ShieldCheck, Layers } from "lucide-react";

const features = [
    {
        id: "ai",
        icon: BrainCircuit,
        title: "Built on advanced AI & deep learning",
        description: "Our voice cloning technology uses state-of-the-art neural networks to capture pitch, tone, accent, and rhythm. The result is natural, lifelike speech that faithfully reflects the original voice."
    },
    {
        id: "detail",
        icon: AudioWaveform,
        title: "Trained to capture every vocal detail",
        description: "Our models analyze thousands of vocal characteristics to ensure that even the subtlest nuances—breaths, intonations, and inflections—are preserved in the cloned voice."
    },
    {
        id: "flexible",
        icon: Layers,
        title: "Flexible Cloning for Different Use Cases",
        description: "Whether you need a quick clone for a social media post or a professional high-fidelity clone for an audiobook, our platform matches the technology to your specific needs."
    },
    {
        id: "responsible",
        icon: ShieldCheck,
        title: "Designed for responsible use",
        description: "We implement strict verification processes and safety safeguards to ensure that voice cloning is used ethically and only with the consent of the voice owner."
    }
];

const VoiceCloningTechnology = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground font-serif max-w-2xl leading-tight">
                        Built on advanced AI, designed for responsible use
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Interactive List */}
                    <div className="space-y-4">
                        {features.map((feature, index) => (
                            <div
                                key={feature.id}
                                onClick={() => setActiveFeature(index)}
                                className={`cursor-pointer transition-all duration-300 rounded-2xl p-6 ${activeFeature === index ? "bg-gray-50 shadow-sm" : "hover:bg-gray-50/50"}`}
                            >
                                <div className="flex items-center gap-4 mb-2">
                                    <feature.icon className={`w-5 h-5 ${activeFeature === index ? "text-foreground" : "text-muted-foreground"}`} />
                                    <h3 className={`text-lg font-bold ${activeFeature === index ? "text-foreground" : "text-muted-foreground"}`}>
                                        {feature.title}
                                    </h3>
                                </div>

                                <AnimatePresence>
                                    {activeFeature === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-muted-foreground leading-relaxed pl-9 pb-2">
                                                {feature.description}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Right: Visual Visualization */}
                    <div className="relative h-[500px] flex items-center justify-center bg-gray-50/50 rounded-[40px] border border-gray-100/50 overflow-hidden">

                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeFeature}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="relative z-10 w-full h-full flex items-center justify-center p-12"
                            >
                                {activeFeature === 0 && (
                                    // Wireframe Cylinders (Matches image roughly)
                                    <svg viewBox="0 0 400 300" className="w-full h-full text-foreground/20 stroke-current" fill="none" strokeWidth="1">
                                        {/* Base Circles */}
                                        <ellipse cx="200" cy="250" rx="100" ry="40" className="opacity-50" />
                                        <ellipse cx="200" cy="50" rx="100" ry="40" className="opacity-50" />

                                        {/* Vertical Lines */}
                                        <line x1="100" y1="50" x2="100" y2="250" />
                                        <line x1="300" y1="50" x2="300" y2="250" />

                                        {/* Inner Structures (Cylinders) */}
                                        <path d="M160 100 v100 a40 15 0 0 1 -80 0 v-100 a40 15 0 0 1 80 0" className="fill-background/50" />
                                        <path d="M160 100 a40 15 0 0 1 -80 0" />

                                        <path d="M320 140 v80 a40 15 0 0 1 -80 0 v-80 a40 15 0 0 1 80 0" className="fill-background/50" />
                                        <path d="M320 140 a40 15 0 0 1 -80 0" />
                                    </svg>
                                )}

                                {activeFeature === 1 && (
                                    // Sound Wave Visual
                                    <div className="flex items-center gap-1 h-32">
                                        {[...Array(20)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ height: [20, Math.random() * 100 + 20, 20] }}
                                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.05 }}
                                                className="w-2 bg-foreground/20 rounded-full"
                                            />
                                        ))}
                                    </div>
                                )}

                                {activeFeature === 2 && (
                                    // Layers Visual
                                    <div className="relative w-48 h-48">
                                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-blue-100 rounded-2xl border border-blue-200 transform rotate-6" />
                                        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} className="absolute inset-0 bg-purple-100 rounded-2xl border border-purple-200 transform rotate-3 translate-y-[-10px]" />
                                        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} className="absolute inset-0 bg-background rounded-2xl border border-border flex items-center justify-center translate-y-[-20px] shadow-sm">
                                            <UsersIcon />
                                        </motion.div>
                                    </div>
                                )}

                                {activeFeature === 3 && (
                                    // Shield Visual
                                    <motion.div
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        className="w-48 h-48 text-foreground/20"
                                    >
                                        <ShieldCheck className="w-full h-full" />
                                    </motion.div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

const UsersIcon = () => (
    <div className="flex gap-2">
        <div className="w-8 h-8 rounded-full bg-gray-200" />
        <div className="w-8 h-8 rounded-full bg-gray-300" />
    </div>
);

export default VoiceCloningTechnology;
