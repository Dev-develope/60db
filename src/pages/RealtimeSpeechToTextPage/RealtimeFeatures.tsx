import React from 'react';
import { Button } from "@/components/ui/button";
import { Play, Volume2 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList, Cell } from 'recharts';

const DATA = [
    { name: 'Scribe v2 Realtime', value: 95, color: '#3b82f6' }, // Blue
    { name: 'OpenAI Whisper', value: 85, color: '#e5e7eb' }, // Gray
    { name: 'Google Cloud STT', value: 80, color: '#e5e7eb' },
    { name: 'Deepgram Nova 3', value: 78, color: '#e5e7eb' },
];

const RealtimeFeatures = () => {
    return (
        <section className="py-20 lg:py-32 bg-background">
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground leading-tight">
                        Introducing Scribe v2 Realtime, <br />
                        built for speed and accuracy
                    </h2>
                    <p className="text-muted text-lg max-w-xl mx-auto">
                        Ultra-fast, ultra-accurate, and built for live speech. Scribe v2 Realtime delivers instant transcription for agents, meetings, and conversational AI.
                    </p>
                    <Button variant="outline" className="rounded-full pl-2 pr-6 py-2 gap-2 h-auto text-sm font-medium border-border/60 hover:bg-secondary/50">
                        <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center">
                            <Play className="w-3 h-3 fill-current" />
                        </div>
                        Watch intro
                    </Button>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Feature 1: Accuracy Graph */}
                    <div className="bg-secondary/10 rounded-3xl p-8 lg:p-12 border border-border/50">
                        <div className="h-[300px] w-full mb-8">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={DATA} margin={{ top: 20, right: 30, left: 0, bottom: 0 }} barCategoryGap="20%">
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.5} />
                                    <XAxis
                                        dataKey="name"
                                        tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
                                        axisLine={false}
                                        tickLine={false}
                                        interval={0}
                                        tickMargin={12}
                                    />
                                    <YAxis hide domain={[60, 100]} />
                                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                                        {DATA.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={index === 0 ? "url(#colorGradient)" : entry.color} />
                                        ))}
                                        <LabelList dataKey="value" position="top" formatter={(val: number) => `${val}%`} style={{ fill: 'hsl(var(--foreground))', fontSize: 12, fontWeight: 600 }} />
                                    </Bar>
                                    <defs>
                                        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#1e3a8a" stopOpacity={0.9} />
                                            <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.9} />
                                        </linearGradient>
                                    </defs>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold font-serif text-foreground">High Accuracy</h3>
                            <p className="text-sm text-muted leading-relaxed">
                                Trained on diverse global data and fine-tuned for natural speech, Scribe achieves industry-best Word Error Rates across major languages and accents.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2: Latency Visual */}
                    <div className="bg-secondary/10 rounded-3xl p-8 lg:p-12 border border-border/50 flex flex-col justify-between">

                        {/* Mock UI */}
                        <div className="relative mb-12">
                            <div className="absolute right-0 top-0">
                                <Button size="icon" variant="ghost" className="rounded-full bg-white shadow-sm hover:bg-white/90 w-8 h-8">
                                    <Volume2 className="w-4 h-4 text-black" />
                                </Button>
                            </div>

                            <div className="space-y-6 pt-8">
                                <div className="space-y-2">
                                    <p className="text-lg font-medium text-foreground leading-relaxed">
                                        Hey, I booked an appointment for Friday afternoon, but I need to reschedule it to next Tuesday instead. If that's possible please.
                                    </p>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-green-600 font-mono font-bold text-xl">0ms</span>
                                    <span className="text-xs text-muted uppercase tracking-wider font-semibold">Median Latency</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-bold font-serif text-foreground">Ultra-low Latency</h3>
                            <p className="text-sm text-muted leading-relaxed">
                                Stream audio and receive transcripts in ~150ms, enabling real-time understanding for live agents, meetings, and conversational AI.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RealtimeFeatures;
