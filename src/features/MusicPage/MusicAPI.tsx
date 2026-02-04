import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Copy } from 'lucide-react';

const MusicAPI = () => {
    const codeSnippet = `const music = await eleven.generateMusic({
  prompt: "A retro 80s synthwave track with heavy bass",
  duration: 60,
  style: "retrowave",
  model: "music-v1"
});

music.play();`;

    return (
        <section className="py-24 bg-[#1D1D1B] text-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-white/60 text-[10px] font-bold tracking-widest uppercase mb-8 border border-white/5">
                            <Terminal className="w-3 h-3" />
                            Developers First
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Build with the <br /> Music API
                        </h2>
                        <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-8">
                            Integrate studio-quality music generation into your own apps, games, or workflows. Simple, powerful, and ready for scale.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-white/90 transition-all">
                                Read Documentation
                            </button>
                            <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-2xl hover:bg-white/5 transition-all">
                                Get API Key
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-purple-500/20 blur-3xl -z-10 rounded-[3rem]"></div>
                        <div className="bg-[#0D0D0D] border border-white/5 rounded-[2.5rem] p-6 shadow-2xl relative">
                            <div className="flex items-center justify-between mb-6 px-2">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                </div>
                                <button className="text-white/20 hover:text-white transition-colors">
                                    <Copy className="w-4 h-4" />
                                </button>
                            </div>
                            <pre className="font-mono text-sm leading-relaxed overflow-x-auto p-4 bg-white/5 rounded-2xl">
                                <code className="text-purple-400">const</code> <code className="text-white">music = </code> <code className="text-purple-400">await</code> <code className="text-white">eleven.</code><code className="text-blue-400">generateMusic</code><code className="text-white">({"{"}</code>{"\n"}
                                {"  "}<code className="text-orange-400">prompt:</code> <code className="text-green-400">"A retro 80s synthwave track"</code>,{"\n"}
                                {"  "}<code className="text-orange-400">duration:</code> <code className="text-yellow-400">60</code>,{"\n"}
                                {"  "}<code className="text-orange-400">style:</code> <code className="text-green-400">"retrowave"</code>,{"\n"}
                                {"  "}<code className="text-orange-400">model:</code> <code className="text-green-400">"music-v1"</code>{"\n"}
                                <code className="text-white">{"}"});</code>{"\n\n"}
                                <code className="text-white">music.</code><code className="text-blue-400">play</code><code className="text-white">();</code>
                            </pre>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MusicAPI;
