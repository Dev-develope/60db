import React from 'react';
import { motion } from 'framer-motion';

const StudioAPISection = () => {
    const codeSnippet = `import { ElevenLabsClient } from "elevenlabs";

const client = new ElevenLabsClient({ apiKey: "YOUR_API_KEY" });

await client.textToSpeech.convert("pNc07pDpkCdaGXL5vjS0", {
  output_format: "mp3_44100_128",
  text: "The first thing we shall do is everything, in section 1.",
  model_id: "eleven_multilingual_v2"
});`;

    // Simple syntax highlighting simulation
    const highlightCode = (code: string) => {
        return code.split('\n').map((line, i) => {
            // Very basic regex highlighting for demo purposes
            const highlightedLine = line
                .replace(/import|from|const|new|await/g, '<span class="text-blue-500">$1</span>')
                .replace(/"[^"]*"/g, '<span class="text-rose-500">$&</span>')
                .replace(/\{|\}|\[|\]|\(|\)/g, '<span class="text-gray-400">$8</span>')
                .replace(/\/\/.*$/g, '<span class="text-gray-400">$&</span>');

            return (
                <div key={i} className="whitespace-pre">
                    <span className="inline-block w-8 text-foreground/20 select-none">{i + 1}</span>
                    <span dangerouslySetInnerHTML={{ __html: highlightedLine }} />
                </div>
            );
        });
    };

    return (
        <section className="py-24 bg-transparent overflow-hidden font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
                        Everything in Studio, available through our API
                    </h2>
                    <p className="text-foreground/60 text-base md:text-lg leading-relaxed font-medium">
                        Access the same voices, music, and audio tools behind Studio 3.0 — programmatically, at scale, in any workflow.
                    </p>
                </div>

                {/* Code Editor Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-background rounded-3xl border border-border shadow-2xl overflow-hidden">
                        {/* Editor Header */}
                        <div className="px-6 py-4 border-b border-border bg-secondary/30 flex items-center justify-between">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-border"></div>
                                <div className="w-3 h-3 rounded-full bg-border"></div>
                                <div className="w-3 h-3 rounded-full bg-border"></div>
                            </div>
                            <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">elevenlabs-sdk.js</span>
                        </div>

                        {/* Code Area */}
                        <div className="p-8 md:p-12 overflow-x-auto">
                            <code className="text-sm md:text-base font-mono leading-relaxed block text-foreground/80">
                                {codeSnippet.split('\n').map((line, i) => (
                                    <div key={i} className="whitespace-pre-wrap flex">
                                        <span className="inline-block w-12 text-foreground/20 select-none flex-shrink-0">{i + 1}</span>
                                        <span>
                                            {line.split(' ').map((word, j) => {
                                                if (['import', 'from', 'const', 'new', 'await'].includes(word)) {
                                                    return <span key={j} className="text-blue-600 font-bold">{word} </span>;
                                                }
                                                if (word.startsWith('"') || word.endsWith('"')) {
                                                    return <span key={j} className="text-rose-500">{word} </span>;
                                                }
                                                return <span key={j}>{word} </span>;
                                            })}
                                        </span>
                                    </div>
                                ))}
                            </code>
                        </div>
                    </div>

                    {/* API CTA Button */}
                    <div className="text-center mt-12">
                        <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-sm tracking-tight hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg">
                            Explore API docs
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StudioAPISection;
