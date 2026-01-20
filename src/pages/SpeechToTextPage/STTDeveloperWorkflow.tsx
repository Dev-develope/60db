import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Bot, Layers, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const STTDeveloperWorkflow = () => {
    return (
        <section className="py-24 bg-white font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-[#1D1D1B] mb-6 tracking-tight"
                    >
                        Built for every workflow
                    </motion.h2>
                    <p className="text-[#1D1D1B]/60 text-lg font-medium">
                        Whether you're developing high-latency apps, real-time agents, or professional content, we have you covered.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* API & SDKs */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-[2.5rem] bg-black text-white flex flex-col h-full"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                <Code2 className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-widest opacity-80">API & SDKs</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Developers first</h3>
                        <p className="text-white/40 text-sm font-medium mb-8 flex-1">
                            Integrate ultra-low latency Speech to Text into your codebase in minutes using our Python, JS, and Swift SDKs.
                        </p>

                        <div className="bg-white/5 rounded-2xl p-6 font-mono text-xs text-white/60 mb-8 border border-white/5">
                            <div className="flex justify-between mb-4 border-b border-white/10 pb-2">
                                <span className="text-orange-400">scribe_v2.py</span>
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                                </div>
                            </div>
                            <p><span className="text-purple-400">import</span> elevenlabs</p>
                            <p className="mt-2 text-white/80">scribe = elevenlabs.Scribe()</p>
                            <p className="mt-2">t = scribe.transcribe(</p>
                            <p className="ml-4">file=<span className="text-green-400">"audio.mp3"</span></p>
                            <p>)</p>
                        </div>

                        <Button variant="outline" className="w-full rounded-2xl border-white/20 text-white hover:bg-white/10 font-bold py-6">Read Documentation</Button>
                    </motion.div>

                    {/* Agents */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-8 rounded-[2.5rem] bg-orange-500 text-white flex flex-col h-full"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                <Bot className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-widest opacity-80">Conversational AI</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Voice Agents</h3>
                        <p className="text-white/80 text-sm font-medium mb-8 flex-1">
                            Build life-like AI agents that hear and respond with Scribe v2 Realtime combined with ElevenLabs models.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5" />
                                <span className="text-xs font-bold">150ms Realtime Latency</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5" />
                                <span className="text-xs font-bold">Speaker-Adaptive Models</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5" />
                                <span className="text-xs font-bold">Full Context Awareness</span>
                            </div>
                        </div>

                        <Button className="w-full bg-white text-orange-500 hover:bg-white/90 rounded-2xl font-bold py-6">Try Conversation AI</Button>
                    </motion.div>

                    {/* Studio */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 rounded-[2.5rem] bg-gray-50 border border-black/5 flex flex-col h-full"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center">
                                <Layers className="w-5 h-5 text-black" />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-widest text-black/40">Creator Tools</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-[#1D1D1B]">The Studio</h3>
                        <p className="text-black/40 text-sm font-medium mb-8 flex-1">
                            The ultimate workstation for transcribing content, generating subtitles, and localizing videos.
                        </p>

                        <div className="relative mb-8 flex-1 flex items-center justify-center">
                            <div className="w-full aspect-video bg-black/5 rounded-2xl border border-dashed border-black/10 flex items-center justify-center">
                                <Terminal className="w-10 h-10 text-black/10" />
                            </div>
                        </div>

                        <Button variant="ghost" className="w-full bg-black/5 text-[#1D1D1B] hover:bg-black/10 rounded-2xl font-bold py-6">Launch Studio</Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default STTDeveloperWorkflow;
