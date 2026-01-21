import React from 'react';
import { motion } from 'framer-motion';
import { FileAudio, Video, ListMusic, Layers } from 'lucide-react';

const STTStandardDetail = () => {
    return (
        <section className="py-24 bg-white font-sans overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-20">
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-6 border border-blue-100">
                                <FileAudio className="w-3 h-3" />
                                Scribe v2 standard
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-[#1D1D1B] mb-8 tracking-tighter leading-tight">
                                Transcribe, tag, <br />
                                <span className="text-[#1D1D1B]/80">and caption</span>
                            </h2>
                            <p className="text-[#1D1D1B]/60 text-lg leading-relaxed font-medium mb-10 max-w-xl">
                                Perfect for long-form content. Scribe v2 provides the highest standard of accuracy
                                for audio files, complete with speaker diarization and automated captioning.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span className="text-sm font-bold">Speaker Diarization</span>
                                    </div>
                                    <p className="text-xs text-[#1D1D1B]/40 font-medium">Detect and label multiple speakers automatically with high precision.</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span className="text-sm font-bold">Automated Captions</span>
                                    </div>
                                    <p className="text-xs text-[#1D1D1B]/40 font-medium">Generate SRT and VTT files for video content in seconds.</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span className="text-sm font-bold">Keyterm Prompting</span>
                                    </div>
                                    <p className="text-xs text-[#1D1D1B]/40 font-medium">Provide rare words or technical terms to guide the transcription model.</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span className="text-sm font-bold">Global Languages</span>
                                    </div>
                                    <p className="text-xs text-[#1D1D1B]/40 font-medium">Support for 29+ languages with localized accents and context.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-black/5 rounded-[3rem] p-10 relative overflow-hidden"
                        >
                            {/* Video Editor Mockup */}
                            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-black/5 aspect-video relative flex flex-col">
                                <div className="h-8 bg-gray-50 border-b border-black/5 flex items-center px-4 gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                </div>

                                <div className="flex-1 bg-black relative flex flex-col">
                                    <div className="flex-1 flex items-center justify-center">
                                        <div className="text-center px-10">
                                            <p className="text-white text-lg font-bold italic mb-4">"Our goal at ElevenLabs is to make audio content accessible globally."</p>
                                            <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                                                <motion.div
                                                    animate={{ width: ["0%", "100%", "0%"] }}
                                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                                    className="h-full bg-blue-500"
                                                ></motion.div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-900 border-t border-white/10 p-4">
                                        <div className="flex gap-2 mb-2 overflow-x-hidden">
                                            <div className="h-6 bg-blue-500/30 border border-blue-500/50 rounded flex items-center px-3 text-[8px] font-bold text-blue-100 flex-shrink-0">SPEAKER 1: 00:02</div>
                                            <div className="h-6 bg-purple-500/30 border border-purple-500/50 rounded flex items-center px-3 text-[8px] font-bold text-purple-100 flex-shrink-0">SPEAKER 2: 00:08</div>
                                        </div>
                                        <div className="h-10 bg-white/5 rounded border border-dashed border-white/10 flex items-center px-4">
                                            <div className="flex gap-0.5">
                                                {[...Array(40)].map((_, i) => (
                                                    <div key={i} className="w-0.5 bg-blue-400/50" style={{ height: `${Math.random() * 20 + 5}px` }}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Capabilities */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 pointer-events-none">
                                <Video className="absolute top-10 left-10 w-12 h-12 text-blue-500/5 rotate-12" />
                                <ListMusic className="absolute bottom-10 right-10 w-12 h-12 text-purple-500/5 -rotate-12" />
                                <Layers className="absolute top-1/2 right-0 w-8 h-8 text-black/5" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default STTStandardDetail;
