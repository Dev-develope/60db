import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Mic, ChevronDown, Volume2, Settings2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const voices = [
    { id: 1, name: "Chris", type: "Conversational", avatar: "CH" },
    { id: 2, name: "Brian", type: "Narration", avatar: "BR" },
    { id: 3, name: "Lily", type: "Cheerful", avatar: "LI" },
    { id: 4, name: "Jessica", type: "Professional", avatar: "JE" },
];

const TTSInteractiveDemo = () => {
    const [selectedVoice, setSelectedVoice] = useState(voices[0]);
    const [text, setText] = useState("In the ancient land of Eldoria, where skies shimmered and forests whispered secrets to the wind...");

    return (
        <section className="py-12 bg-background font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden"
                    >
                        {/* Demo Header */}
                        <div className="px-8 py-6 border-b border-gray-50 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold">US</div>
                                    <span className="text-sm font-bold">English (US)</span>
                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                </div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-[10px] text-indigo-600 font-bold">{selectedVoice.avatar}</div>
                                    <span className="text-sm font-bold">{selectedVoice.name}</span>
                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="sm" className="rounded-full gap-2 text-gray-500 hover:text-black">
                                    <Settings2 className="w-4 h-4" />
                                    Settings
                                </Button>
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-8">
                            <textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                className="w-full h-40 bg-transparent border-none focus:ring-0 text-xl md:text-2xl leading-relaxed text-foreground placeholder:text-gray-300 resize-none font-medium"
                                placeholder="Start typing something for the AI to speak..."
                            />

                            <div className="mt-8 flex items-center justify-between">
                                <div className="flex items-center gap-6 text-gray-400">
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                                        <Volume2 className="w-4 h-4" />
                                        <span>Preview mode</span>
                                    </div>
                                    <span className="text-xs font-bold">{text.length} / 5000</span>
                                </div>

                                <Button className="bg-black text-white px-10 py-6 rounded-2xl font-bold flex items-center gap-3 transition-all hover:scale-105 active:scale-95 group">
                                    <Play className="w-5 h-5 fill-current transition-transform group-hover:scale-110" />
                                    Generate Audio
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TTSInteractiveDemo;
