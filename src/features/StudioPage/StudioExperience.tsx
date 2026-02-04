import React, { useState } from 'react';
import { Play, Mic, Music, Volume2, Type, UserRound, Zap, Languages, Video } from 'lucide-react';

const StudioExperience = () => {
    const [activeMode, setActiveMode] = useState<"Video" | "Audio">("Video");

    const features = [
        { icon: <Mic className="w-4 h-4" />, label: "Text to Speech" },
        { icon: <Music className="w-4 h-4" />, label: "Eleven Music" },
        { icon: <Volume2 className="w-4 h-4" />, label: "AI Sound Effects" },
        { icon: <Type className="w-4 h-4" />, label: "Captions" },
        { icon: <UserRound className="w-4 h-4" />, label: "Voice Changer" },
        { icon: <Languages className="w-4 h-4" />, label: "Transcription" },
        { icon: <Zap className="w-4 h-4" />, label: "Voice Isolator" },
        { icon: <Video className="w-4 h-4" />, label: "Video support" },
    ];

    return (
        <section className="py-20 md:py-32 bg-transparent">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Interface Preview Card */}
                    <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-espresso/20 via-tan to-espresso/30 p-1 shadow-2xl mb-12 transform hover:scale-[1.01] transition-transform duration-700">
                        <div className="bg-background rounded-[2.4rem] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1626544823126-64670af9583b?w=1200&auto=format&fit=crop&q=80"
                                alt="Studio 3.0 Interface"
                                className="w-full h-auto object-cover opacity-90"
                            />

                            {/* Interface Overlay simulation (Simplified) */}
                            <div className="absolute inset-0 flex items-center justify-center p-8 md:p-16">
                                <div className="w-full h-full bg-background/80 backdrop-blur-xl rounded-2xl shadow-inner border border-white/20 flex flex-col p-4 md:p-8">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-sm font-bold opacity-60 text-foreground">Studio 3.0</span>
                                        <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-medium">Export</div>
                                    </div>
                                    <div className="flex flex-1 gap-6">
                                        <div className="hidden lg:block w-48 space-y-4">
                                            <div className="h-4 w-32 bg-espresso/10 rounded animate-pulse"></div>
                                            <div className="h-4 w-24 bg-espresso/10 rounded animate-pulse"></div>
                                            <div className="h-4 w-28 bg-espresso/10 rounded animate-pulse"></div>
                                        </div>
                                        <div className="flex-1 space-y-4">
                                            <div className="h-8 w-3/4 bg-espresso/5 rounded"></div>
                                            <div className="h-4 w-full bg-espresso/5 rounded"></div>
                                            <div className="h-4 w-5/6 bg-espresso/5 rounded"></div>
                                        </div>
                                        <div className="w-48 md:w-64 aspect-[4/5] bg-espresso/10 rounded-xl overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=60" className="w-full h-full object-cover" alt="Editor Preview" />
                                        </div>
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-espresso/10 flex items-center justify-center">
                                        <Play className="w-8 h-8 text-foreground fill-current" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Video/Audio Toggle */}
                    <div className="flex justify-center mb-16">
                        <div className="bg-secondary p-1.5 rounded-full flex items-center border border-border shadow-inner">
                            <button
                                onClick={() => setActiveMode("Video")}
                                className={`flex items-center gap-2 px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeMode === "Video" ? "bg-background text-foreground shadow-md scale-105" : "text-foreground/40 hover:text-foreground/60"}`}
                            >
                                <Video className="w-4 h-4" /> Video
                            </button>
                            <button
                                onClick={() => setActiveMode("Audio")}
                                className={`flex items-center gap-2 px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeMode === "Audio" ? "bg-background text-foreground shadow-md scale-105" : "text-foreground/40 hover:text-foreground/60"}`}
                            >
                                <Mic className="w-4 h-4" /> Audio
                            </button>
                        </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="text-center max-w-4xl mx-auto space-y-8">
                        <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">Introducing Studio 3.0</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-[1.1] tracking-tight">
                            Create immersive experiences with Studio 3.0 — from podcasts and audiobooks to videos. Enhance your content with AI voices, music, and captions, all in one editor.
                        </h2>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-y-10 pt-8">
                            {features.map((feature, i) => (
                                <div key={i} className="flex items-center justify-center gap-2 text-foreground/60 hover:text-foreground transition-colors cursor-default group">
                                    <span className="p-2 bg-secondary rounded-lg group-hover:bg-accent group-hover:text-foreground transition-colors">
                                        {feature.icon}
                                    </span>
                                    <span className="text-sm font-bold tracking-tight">{feature.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Watch Intro Button */}
                        <div className="pt-12">
                            <button className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-sm tracking-tight hover:opacity-90 transition-all hover:scale-105 hover:shadow-xl active:scale-95">
                                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                    <Play className="w-3 h-3 fill-current ml-0.5" />
                                </div>
                                Watch intro
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudioExperience;
