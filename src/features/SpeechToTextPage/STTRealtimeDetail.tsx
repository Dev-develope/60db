import React from 'react';
import { motion } from 'framer-motion';
import { Zap, BarChart3, Clock, MessageSquareQuote } from 'lucide-react';

const STTRealtimeDetail = () => {
    return (
        <section className="py-24 bg-white font-sans overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-[10px] font-bold tracking-widest uppercase mb-6 border border-orange-100">
                                <Zap className="w-3 h-3 fill-current" />
                                Realtime Performance
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-[#1D1D1B] mb-8 tracking-tighter leading-tight">
                                Transcribe with <br />
                                <span className="text-[#1D1D1B]/80">zero latency</span>
                            </h2>
                            <p className="text-[#1D1D1B]/60 text-lg leading-relaxed font-medium mb-10 max-w-xl">
                                Scribe v2 Realtime is built for conversational AI. With latency as low as 150ms,
                                it enables fluid, natural voice interactions for any application.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-black" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#1D1D1B] mb-1">Ultra-low Latency</h3>
                                        <p className="text-sm text-[#1D1D1B]/40 font-medium">Built for the speed of conversation, faster than human reaction time.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center flex-shrink-0">
                                        <BarChart3 className="w-6 h-6 text-black" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#1D1D1B] mb-1">State-of-the-Art Accuracy</h3>
                                        <p className="text-sm text-[#1D1D1B]/40 font-medium">Industry-leading WER (Word Error Rate) for real-time transcription.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-black/5 rounded-[3rem] p-10 relative"
                        >
                            {/* Comparison Chart Mockup */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-black/5">
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-xs font-bold uppercase tracking-widest text-black/40">Transcription Speed (ms)</span>
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-black/10"></div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
                                            <span>Scribe v2 Realtime</span>
                                            <span className="text-orange-600">150ms</span>
                                        </div>
                                        <div className="h-6 bg-orange-500 rounded-lg w-[30%]"></div>
                                    </div>
                                    <div className="space-y-2 opacity-40">
                                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
                                            <span>Competitor A</span>
                                            <span>450ms</span>
                                        </div>
                                        <div className="h-6 bg-black rounded-lg w-[60%]"></div>
                                    </div>
                                    <div className="space-y-2 opacity-40">
                                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
                                            <span>Competitor B</span>
                                            <span>850ms</span>
                                        </div>
                                        <div className="h-6 bg-black rounded-lg w-[90%]"></div>
                                    </div>
                                </div>

                                <div className="mt-10 pt-6 border-t border-black/5 flex items-center justify-center gap-2">
                                    <Zap className="w-3 h-3 fill-orange-500 text-orange-500" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#1D1D1B]">3x Faster than industry average</span>
                                </div>
                            </div>

                            {/* Floating Message Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-white border border-black/5 shadow-2xl max-w-[200px]"
                            >
                                <MessageSquareQuote className="w-6 h-6 text-orange-500 mb-2" />
                                <p className="text-[10px] font-bold leading-tight">"The speed of ElevenLabs is a game changer for our AI agents."</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default STTRealtimeDetail;
