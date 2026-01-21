import React from 'react';
import { motion } from 'framer-motion';

const StudioFeatures = () => {
    const features = [
        {
            title: "Add new voiceovers",
            desc: "Bring your script to life with natural-sounding voiceovers. Choose from over 10,000 voices — realistic accents, character voices, or professional narration — then edit recordings by simply editing the text."
        },
        {
            title: "Generate bespoke background music with Eleven Music",
            desc: "Create music that feels custom-made for your content. Generate soundtracks in any genre or style, or let Studio auto-score your video with music created to match your scene."
        },
        {
            title: "Add custom sound effects",
            desc: "Enrich your content with every sound effect you can describe with a prompt. Browse whole environments, cinematic impact, and unique effects in Studio for a polished production."
        },
        {
            title: "Fix mistakes in seconds with Speech Correction",
            desc: "Edit spoken audio intuitively using brush-in-editing. Just smudge out errors and breath sounds with the brush tool — no re-recording necessary."
        },
        {
            title: "Clean up noisy audio with Voice Isolator",
            desc: "Remove background noise, reverb, and unwanted audio with AI-powered isolation. Restore voices with studio-quality so dialogue always sounds clear and professional."
        }
    ];

    const voices = [
        { name: "Burt Reynolds", meta: "Elevenlabs' Iconic Voice", gradient: "from-blue-400 to-indigo-600" },
        { name: "Enrique Montragón", meta: "Middle aged male with a Mexican Spanish accent", gradient: "from-blue-700 to-blue-900" },
        { name: "Finn", meta: "A well-connected, young conversational male", gradient: "from-purple-400 to-indigo-500" },
        { name: "Hope", meta: "A warm, soothing, and captivating voice", gradient: "from-red-400 to-orange-500" },
        { name: "Magic Jack", meta: "Casual, friendly, heart-felt voice", gradient: "from-orange-400 to-red-600" },
        { name: "Jack Bass", meta: "A calm and gritty storyteller", gradient: "from-gray-400 to-gray-600" },
        { name: "Jarrathan", meta: "A warm, smooth, and versatile voice", gradient: "from-sky-400 to-blue-300" },
        { name: "Lean Stern", meta: "A rich, deep voice for fantasy", gradient: "from-rose-400 to-pink-500" },
    ];

    return (
        <section className="py-24 bg-transparent overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Left Column - Scrolling Features */}
                    <div className="space-y-40 lg:pb-[50vh]">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="max-w-md"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                                    {feature.title}
                                </h2>
                                <p className="text-foreground/70 text-lg leading-relaxed font-medium">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column - Sticky Visual */}
                    <div className="hidden lg:block relative text-foreground">
                        <div className="sticky top-40">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="bg-background rounded-3xl border border-border shadow-2xl overflow-hidden"
                            >
                                {/* Header */}
                                <div className="px-6 py-4 border-b border-border bg-secondary/30">
                                    <span className="text-[10px] items-center flex gap-1 font-bold text-foreground/40 uppercase tracking-widest">
                                        Select a voice
                                    </span>
                                </div>

                                {/* Voice List */}
                                <div className="p-4 space-y-2">
                                    {voices.map((voice, i) => (
                                        <div
                                            key={i}
                                            className={`flex items-center gap-3 p-3 rounded-2xl transition-all duration-300 cursor-pointer ${i === 0 ? "bg-secondary shadow-sm border border-border" : "hover:bg-secondary/50"}`}
                                        >
                                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${voice.gradient} flex-shrink-0 shadow-inner`}></div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-center mb-0.5">
                                                    <h4 className="text-xs font-bold text-foreground truncate">{voice.name}</h4>
                                                </div>
                                                <p className="text-[10px] text-foreground/40 truncate font-medium">{voice.meta}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Spacer Decoration */}
                                <div className="h-2 bg-gradient-to-r from-transparent via-gray-50 to-transparent"></div>
                            </motion.div>

                            {/* Decorative Blur Background behind the card */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-50 blur-[100px] opacity-60 rounded-full"></div>
                        </div>
                    </div>

                    {/* Mobile Voice Preview (Simpler) */}
                    <div className="lg:hidden mt-20 p-6 bg-secondary rounded-3xl border border-border">
                        <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-6 px-1">Select a voice</div>
                        <div className="space-y-4">
                            {voices.slice(0, 4).map((voice, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${voice.gradient} shadow-inner flex-shrink-0`}></div>
                                    <div>
                                        <h4 className="text-sm font-bold text-foreground">{voice.name}</h4>
                                        <p className="text-[10px] text-foreground/40 font-medium">{voice.meta}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Page Footer Transition Branding */}
            <div className="mt-40 text-center">
                <p className="text-2xl md:text-4xl font-bold text-foreground tracking-tight">
                    All your creative tools. In one seamless timeline.
                </p>
            </div>
        </section>
    );
};

export default StudioFeatures;
