import React from 'react';
import { motion } from 'framer-motion';
import { Settings2, Volume2, Sliders, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";

const controls = [
    { label: "Stability", value: 50, desc: "Higher values make the voice more consistent but less expressive." },
    { label: "Clarity + Similarity Enhancement", value: 75, desc: "Enhances the clarity of the voice and similarity to the original." },
    { label: "Style Exaggeration", value: 0, desc: "Adds more emotion and character to the generated speech." },
    { label: "Speaker Boost", value: 100, desc: "Boosts the presence and volume of the selected speaker." }
];

const TTSAdvancedControls = () => {
    return (
        <section className="py-24 bg-background font-sans overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-foreground/60 text-[10px] font-bold tracking-widest uppercase mb-6 border border-border/50">
                                <Settings2 className="w-3 h-3" />
                                Professional Controls
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-tighter leading-tight">
                                Fine-tune every <br />
                                <span className="text-foreground/80">syllable and breath</span>
                            </h2>
                            <p className="text-foreground/60 text-lg leading-relaxed font-medium mb-10 max-w-xl">
                                Our professional studio interface gives you total control over the personality of the voice.
                                Adjust stability for consistent narration or boost similarity for perfect cloning.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-6 rounded-2xl bg-white border border-border/50 shadow-sm">
                                    <Zap className="w-6 h-6 text-yellow-500 mb-4" />
                                    <h3 className="text-sm font-bold mb-2">Instant Tuning</h3>
                                    <p className="text-xs text-foreground/40 font-medium">Changes apply in real-time as you drag the sliders.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white border border-border/50 shadow-sm">
                                    <Sliders className="w-6 h-6 text-blue-500 mb-4" />
                                    <h3 className="text-sm font-bold mb-2">Precision Control</h3>
                                    <p className="text-xs text-foreground/40 font-medium">Fine-tune values down to a single percentage point.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2.5rem] p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100"
                        >
                            <div className="space-y-10">
                                {controls.map((control, i) => (
                                    <div key={i} className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-bold tracking-tight">{control.label}</span>
                                            <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{control.value}%</span>
                                        </div>
                                        <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div
                                                className="absolute top-0 left-0 h-full bg-black rounded-full"
                                                style={{ width: `${control.value}%` }}
                                            ></div>
                                        </div>
                                        <p className="text-[10px] font-medium text-foreground/30 leading-normal">{control.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-10 border-t border-gray-50 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                                        <Volume2 className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-bold text-foreground/60 transition-colors cursor-pointer hover:text-black">Reset to default</span>
                                </div>
                                <Button size="sm" className="rounded-full bg-black text-white px-6">Apply All</Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TTSAdvancedControls;
