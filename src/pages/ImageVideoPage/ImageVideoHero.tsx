import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Upload, ArrowRight, Play, Image as ImageIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ImageVideoHero = () => {
    return (
        <section className="relative pt-32 pb-24 overflow-hidden font-sans bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-bold text-[#1D1D1B] mb-8 tracking-tighter leading-[0.85]">
                            Bring your content <br />
                            to life
                        </h1>
                        <p className="text-[#1D1D1B]/60 text-lg md:text-xl leading-relaxed font-medium mb-12 max-w-2xl mx-auto">
                            The best audio, video and image models and tools in one platform.
                        </p>
                        <Button className="px-10 py-8 text-lg font-bold bg-[#1D1D1B] text-white rounded-full hover:bg-black transition-all flex items-center gap-2 mx-auto">
                            Start creating
                        </Button>
                    </motion.div>
                </div>

                {/* Studio Mockup Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="max-w-5xl mx-auto mt-20 relative"
                >
                    <div className="relative bg-[#F9F9F9] rounded-[3rem] p-4 lg:p-8 border border-black/5 shadow-2xl overflow-hidden">
                        {/* Comparison Slider / Side-by-side */}
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="relative group rounded-3xl overflow-hidden aspect-video shadow-lg">
                                <img src="/image-video-assets/original.png" alt="Original Content" className="w-full h-full object-cover" />
                                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                    Original
                                </div>
                            </div>
                            <div className="relative group rounded-3xl overflow-hidden aspect-video shadow-lg">
                                <img src="/image-video-assets/enhanced.png" alt="Enhanced Content" className="w-full h-full object-cover" />
                                <div className="absolute top-4 left-4 bg-purple-500/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1">
                                    <Sparkles className="w-2.5 h-2.5" />
                                    AI Enhanced
                                </div>
                                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-1.5">
                                    <Play className="w-3 h-3 text-white fill-current" />
                                </div>
                            </div>
                        </div>

                        {/* Prompt Input Area */}
                        <div className="bg-white rounded-[2rem] p-4 border border-black/5 shadow-sm max-w-2xl mx-auto">
                            <div className="flex items-center gap-4 px-4 py-2">
                                <div className="flex -space-x-2">
                                    <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center border-2 border-white shadow-sm">
                                        <ImageIcon className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center border-2 border-white shadow-sm">
                                        <Upload className="w-5 h-5 text-blue-600" />
                                    </div>
                                </div>
                                <div className="flex-1 text-sm font-medium text-black/20">
                                    Describe your vision or upload a reference...
                                </div>
                                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center">
                                    <ArrowRight className="w-4 h-4 text-black/40" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
                    <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default ImageVideoHero;
