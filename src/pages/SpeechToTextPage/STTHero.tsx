import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const STTHero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden font-sans bg-[#FCFAF3]">
            {/* Background Accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-gradient-to-bl from-amber-200/40 via-orange-100/20 to-transparent blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-gradient-to-tr from-blue-100/30 via-indigo-50/10 to-transparent blur-[100px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#1D1D1B] mb-8 tracking-tighter leading-[0.9] lg:leading-[1]">
                            The most accurate <br className="hidden md:block" />
                            Speech to Text models
                        </h1>

                        <p className="text-[#1D1D1B]/60 text-lg md:text-xl leading-relaxed font-medium mb-12 max-w-2xl mx-auto">
                            Convert audio to text with Scribe v2 and Scribe v2 Realtime.
                            Experience industry-leading accuracy and low-latency transcription.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button className="w-full sm:w-auto px-10 py-7 text-lg font-bold bg-black text-white rounded-full hover:scale-105 transition-all">
                                Start transcribing
                            </Button>
                            <Button variant="outline" className="w-full sm:w-auto px-10 py-7 text-lg font-bold rounded-full hover:bg-black/5 transition-all border-black/10 text-black">
                                Explore the docs
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default STTHero;
