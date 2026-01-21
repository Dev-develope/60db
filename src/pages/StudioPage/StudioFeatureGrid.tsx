import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MessageSquare, Type, Video, Layout } from 'lucide-react';

const StudioFeatureGrid = () => {
    return (
        <section className="py-24 bg-transparent overflow-hidden font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                        All your creative tools, in one seamless timeline
                    </h2>
                    <p className="text-foreground/60 text-base leading-relaxed">
                        From captions and collaborative video editing and multi-lingual audio, Studio 3.0 combines every tool you need to edit, produce, and share at scale.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Timeline Card - Large */}
                    <div className="md:col-span-2 bg-secondary/30 rounded-3xl p-8 border border-border/50 flex flex-col overflow-hidden group">
                        <div className="max-w-sm mb-12">
                            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                                <Layout className="w-5 h-5 text-foreground/40" /> Timeline
                            </h3>
                            <p className="text-foreground/60 text-sm font-medium">
                                Trim, merge, and edit audio and video with precision. Sync voiceovers, music, and sound effects on a single intuitive editing timeline.
                            </p>
                        </div>
                        <div className="mt-auto relative h-40 md:h-64">
                            <div className="absolute inset-x-0 bottom-0 top-10 bg-background rounded-t-2xl shadow-elevated border border-border/50 p-4 transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                                {/* Mock Timeline UI */}
                                <div className="w-full h-full flex flex-col gap-4 opacity-40">
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                                            <div key={i} className="flex-1 h-1 bg-foreground/10 rounded-full"></div>
                                        ))}
                                    </div>
                                    <div className="space-y-3">
                                        <div className="w-full h-8 bg-espresso/5 rounded-lg border border-espresso/10"></div>
                                        <div className="w-4/5 h-8 bg-espresso/5 rounded-lg border border-espresso/10 ml-10"></div>
                                        <div className="w-3/4 h-8 bg-espresso/5 rounded-lg border border-espresso/10"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Video Support Card */}
                    <div className="bg-secondary/30 rounded-3xl p-8 border border-border/50 flex flex-col group">
                        <div className="mb-12">
                            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                                <Video className="w-5 h-5 text-foreground/40" /> Video support
                            </h3>
                            <p className="text-foreground/60 text-sm font-medium">
                                Upload MP4 or MOV files and enhance them with AI: add voiceovers, background music, and sound effects.
                            </p>
                        </div>
                        <div className="mt-auto aspect-video bg-background rounded-2xl overflow-hidden shadow-card border border-border/50 relative">
                            <img
                                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&auto=format&fit=crop&q=60"
                                className="w-full h-full object-cover opacity-80"
                                alt="Video Support"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                                    <div className="w-0 h-0 border-t-8 border-t-transparent border_l-[12px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Captions Card */}
                    <div className="bg-secondary/30 rounded-3xl p-8 border border-border/50 flex flex-col group">
                        <div className="mb-12">
                            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                                <Type className="w-5 h-5 text-foreground/40" /> Captions
                            </h3>
                            <p className="text-foreground/60 text-sm font-medium">
                                Generate captions in one click for accessibility and engagement. Customize style and add multilingual subtitles.
                            </p>
                        </div>
                        <div className="mt-auto grid grid-cols-2 gap-3 pb-4">
                            <div className="bg-background p-3 rounded-xl border border-border/50 shadow-sm text-[10px] font-bold text-center">Minimal</div>
                            <div className="bg-background p-3 rounded-xl border border-border/50 shadow-sm text-[10px] font-bold text-center opacity-60">Classical</div>
                            <div className="bg-background p-3 rounded-xl border border-border/50 shadow-sm text-[10px] font-bold text-center opacity-40">Modern</div>
                            <div className="bg-background p-3 rounded-xl border border-border/50 shadow-sm text-[10px] font-bold text-center opacity-20">Creative</div>
                        </div>
                    </div>

                    {/* Public project URLs Card */}
                    <div className="bg-secondary/30 rounded-3xl p-8 border border-border/50 flex flex-col group">
                        <div className="mb-12">
                            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                                <MessageSquare className="w-5 h-5 text-foreground/40" /> Public project URLs
                            </h3>
                            <p className="text-foreground/60 text-sm font-medium">
                                Share edit-only links for client or team feedback. Collect time-stamped comments directly on the timeline.
                            </p>
                        </div>
                        <div className="mt-auto space-y-3">
                            <div className="bg-background p-3 rounded-2xl shadow-sm border border-border/50 max-w-[80%]">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                                    <span className="text-[10px] font-bold">Alice</span>
                                </div>
                                <p className="text-[9px] text-foreground/60">Should be "Studio 3.0" here</p>
                            </div>
                            <div className="bg-background p-3 rounded-2xl shadow-sm border border-border/50 max-w-[80%] ml-auto">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                                    <span className="text-[10px] font-bold">Bob</span>
                                </div>
                                <p className="text-[9px] text-foreground/60">Love this transition!</p>
                            </div>
                        </div>
                    </div>

                    {/* Language Support Card */}
                    <div className="bg-secondary/30 rounded-3xl p-8 border border-border/50 flex flex-col group">
                        <div className="mb-12">
                            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                                <Globe className="w-5 h-5 text-foreground/40" /> 32+ Language support
                            </h3>
                            <p className="text-foreground/60 text-sm font-medium">
                                Produce audio and video in over 30 languages with expressive accents and localized narration.
                            </p>
                        </div>
                        <div className="mt-auto bg-background rounded-2xl p-4 shadow-sm border border-border/50 space-y-3">
                            {[
                                { name: "Spanish", flag: "🇪🇸" },
                                { name: "English", flag: "🇬🇧" },
                                { name: "German", flag: "🇩🇪" },
                                { name: "French", flag: "🇫🇷" },
                                { name: "Italian", flag: "🇮🇹" }
                            ].map((lang, i) => (
                                <div key={i} className="flex items-center justify-between text-[10px] font-bold">
                                    <div className="flex items-center gap-2">
                                        <span>{lang.flag}</span>
                                        <span>{lang.name}</span>
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-primary/20"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StudioFeatureGrid;
