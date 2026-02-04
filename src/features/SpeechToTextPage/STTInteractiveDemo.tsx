import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, FileAudio, Play, Pause, RotateCcw } from 'lucide-react';
import { Button } from "@/components/ui/button";

const STTInteractiveDemo = () => {
    const [activeTab, setActiveTab] = useState<'realtime' | 'standard'>('realtime');
    const [isRecording, setIsRecording] = useState(false);

    return (
        <section className="pb-24 bg-[#FCFAF3] font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-black/5 overflow-hidden"
                    >
                        {/* Tabs Navigation */}
                        <div className="flex border-b border-black/5 p-1 bg-black/5 rounded-t-[2.5rem]">
                            <button
                                onClick={() => setActiveTab('realtime')}
                                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-t-[2rem] font-bold text-sm transition-all ${activeTab === 'realtime'
                                        ? 'bg-white text-black shadow-sm'
                                        : 'text-black/40 hover:text-black/60'
                                    }`}
                            >
                                <div className={`w-2 h-2 rounded-full ${activeTab === 'realtime' ? 'bg-orange-500 animate-pulse' : 'bg-black/20'}`}></div>
                                Scribe v2 Realtime
                            </button>
                            <button
                                onClick={() => setActiveTab('standard')}
                                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-t-[2rem] font-bold text-sm transition-all ${activeTab === 'standard'
                                        ? 'bg-white text-black shadow-sm'
                                        : 'text-black/40 hover:text-black/60'
                                    }`}
                            >
                                <FileAudio className="w-4 h-4" />
                                Scribe v2
                            </button>
                        </div>

                        {/* Interactive Area */}
                        <div className="p-12 min-h-[400px] flex flex-col items-center justify-center text-center">
                            <AnimatePresence mode="wait">
                                {activeTab === 'realtime' ? (
                                    <motion.div
                                        key="realtime"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="w-full max-w-2xl"
                                    >
                                        <div
                                            onClick={() => setIsRecording(!isRecording)}
                                            className={`w-24 h-24 rounded-full flex items-center justify-center mb-8 mx-auto cursor-pointer transition-all ${isRecording
                                                    ? 'bg-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.4)] scale-110'
                                                    : 'bg-[#1D1D1B] hover:scale-105'
                                                }`}
                                        >
                                            {isRecording ? (
                                                <div className="flex gap-1 items-center">
                                                    {[...Array(3)].map((_, i) => (
                                                        <motion.div
                                                            key={i}
                                                            animate={{ height: [8, 24, 8] }}
                                                            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                                                            className="w-1 bg-white rounded-full"
                                                        />
                                                    ))}
                                                </div>
                                            ) : (
                                                <Mic className="w-8 h-8 text-white" />
                                            )}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4">Click to start transcribing</h3>
                                        <p className="text-black/40 font-medium mb-12">Experience Scribe v2 Realtime with industry-leading latency.</p>

                                        {/* Transcript Mockup */}
                                        <div className="bg-black/5 rounded-2xl p-6 text-left space-y-4">
                                            <div className="flex gap-3">
                                                <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0"></div>
                                                <div className="h-4 bg-black/5 rounded-full w-3/4"></div>
                                            </div>
                                            <div className="flex gap-3 justify-end italic text-black/20 text-sm font-medium">
                                                <span>Waiting for audio input...</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="standard"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="w-full max-w-2xl"
                                    >
                                        <div className="w-24 h-24 rounded-full bg-black/5 flex items-center justify-center mb-8 mx-auto border-2 border-dashed border-black/10">
                                            <FileAudio className="w-8 h-8 text-black/20" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4">Upload a file</h3>
                                        <p className="text-black/40 font-medium mb-12">Transcribe pre-recorded content with extreme accuracy.</p>

                                        <div className="flex items-center justify-center gap-4">
                                            <Button className="bg-[#1D1D1B] text-white px-8 py-6 rounded-2xl font-bold">Select Audio File</Button>
                                            <Button variant="ghost" className="text-black/40 font-bold">Try an example</Button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Demo Footer */}
                        <div className="bg-black/5 px-8 py-6 flex items-center justify-between border-t border-black/5">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">Realtime Ready</span>
                                </div>
                                <div className="h-4 w-px bg-black/10"></div>
                                <div className="flex items-center gap-2">
                                    <RotateCcw className="w-3 h-3 text-black/40" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">Reset Context</span>
                                </div>
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-black/20 italic">v2.5 Enterprise Tier Accuracy</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default STTInteractiveDemo;
