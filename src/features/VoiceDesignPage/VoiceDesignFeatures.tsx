import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Mock Data for the Table
const GUIDE_DATA = [
    { attribute: "Age", example: "Young, younger, adult, old, elderly, in his/her 60s" },
    { attribute: "Accent", example: "Britsh, Scottish accent, 'slight' Asian-American accent" },
    { attribute: "Gender", example: "Male, female, gender-neutral, ambiguous gender" },
    { attribute: "Tone/Pacing", example: "Deep, warm, gravelly, smooth, shrill, bubbly, raspy" },
];

const VoiceDesignFeatures = () => {
    return (
        <section className="py-20 bg-secondary/20">
            <div className="container mx-auto px-6 md:px-12 space-y-32">

                {/* Feature 1: Prompt to Voice */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="order-2 lg:order-1 space-y-6">
                        <h3 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                            Prompt to voice in seconds
                        </h3>
                        <p className="text-muted text-lg leading-relaxed">
                            Easily customize the voice by choosing age, gender, and pitch. Fine-tune the emotion, delivery, and overall direction. Adjust audio quality and preview your text before generating.
                        </p>
                        <Button size="sm" variant="outline" className="rounded-full text-xs font-bold px-6">
                            SIGN UP
                        </Button>
                    </div>
                    <div className="order-1 lg:order-2">
                        {/* Visual Mockup: Prompt UI */}
                        <div className="bg-background rounded-2xl border border-border p-6 shadow-card hover:shadow-elevated transition-shadow duration-500">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="text-primary text-xs font-bold">VD</span>
                                </div>
                                <span className="font-semibold text-sm">Voice Design</span>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-muted">Prompt</label>
                                    <div className="p-3 bg-secondary/30 rounded-lg text-sm text-foreground italic border border-border/50">
                                        "A woman in her 30s with a relaxing and calm voice, yet confident and assured. She should have a soothing tone that inspires trust while maintaining a strong presence."
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-[10px] font-medium border border-blue-200">Little Noise</span>
                                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-[10px] font-medium border border-purple-200">Angry Tone</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature 2: Prompting Guide */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="order-2 lg:order-2 space-y-6">
                        <h3 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                            Design the perfect AI voice with our Voice Prompting Guide
                        </h3>
                        <p className="text-muted text-lg leading-relaxed">
                            Check out our prompting guide for more details on how to produce the best possible voices from Voice Design, and get inspired by sample prompts to help you get started.
                        </p>
                        <Button size="sm" variant="outline" className="rounded-full text-xs font-bold px-6">
                            Sign Up
                        </Button>
                    </div>
                    <div className="order-1 lg:order-1">
                        {/* Visual Mockup: Table */}
                        <div className="bg-background rounded-2xl border border-border shadow-card overflow-hidden">
                            <div className="bg-secondary/40 px-6 py-3 border-b border-border flex justify-between">
                                <span className="text-xs font-bold text-muted uppercase">Attribute</span>
                                <span className="text-xs font-bold text-muted uppercase">Examples</span>
                            </div>
                            <div className="divide-y divide-border/50">
                                {GUIDE_DATA.map((item, i) => (
                                    <div key={i} className="px-6 py-4 grid grid-cols-3 gap-4 hover:bg-secondary/20 transition-colors">
                                        <span className="text-sm font-medium text-foreground col-span-1">{item.attribute}</span>
                                        <span className="text-xs text-muted col-span-2 leading-relaxed">{item.example}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature 3: API */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="order-2 lg:order-1 space-y-6">
                        <h3 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                            Voice Design API
                        </h3>
                        <p className="text-muted text-lg leading-relaxed">
                            Integrate Voice Design into your product or workflow with our API. We have an endpoint for generating voice previews from a prompt and a separate endpoint for saving those previews to your library.
                        </p>
                        <div className="flex gap-3">
                            <Button size="sm" variant="outline" className="rounded-full text-xs font-bold px-6">
                                SIGN UP
                            </Button>
                            <Button size="sm" variant="ghost" className="rounded-full text-xs font-bold px-6 hover:bg-secondary/50">
                                EXPLORE DOCS
                            </Button>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        {/* Visual Mockup: Code Block */}
                        <div className="bg-[#1e1e1e] rounded-2xl border border-neutral-800 p-6 shadow-2xl relative overflow-hidden group">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <pre className="font-mono text-xs text-neutral-300 overflow-x-auto leading-relaxed">
                                <code>
                                    <span className="text-purple-400">import</span> {'{ ElevenLabs }'} <span className="text-purple-400">from</span> <span className="text-green-400">'elevenlabs'</span>;{'\n\n'}
                                    <span className="text-blue-400">const</span> client = <span className="text-purple-400">new</span> <span className="text-yellow-400">ElevenLabs</span>({'{'}{'\n'}
                                    {'  '}apiKey: <span className="text-green-400">"YOUR_API_KEY"</span>{'\n'}
                                    {'}'});{'\n\n'}
                                    <span className="text-blue-400">await</span> client.textToVoice.create_preview({'{'}{'\n'}
                                    {'  '}voice_description: <span className="text-green-400">"A raspry, elderly male voice..."</span>,{'\n'}
                                    {'  '}text: <span className="text-green-400">"Hello world! This is my new voice."</span>{'\n'}
                                    {'}'});
                                </code>
                            </pre>
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-[10px] text-neutral-500 font-mono">JS / TS</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default VoiceDesignFeatures;
