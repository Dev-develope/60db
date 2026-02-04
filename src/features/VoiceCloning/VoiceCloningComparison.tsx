
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VoiceCloningComparison = () => {
    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground font-serif max-w-lg leading-tight">
                        AI voices that stay unmistakably yours
                    </h2>
                    <p className="text-muted-foreground max-w-md text-lg">
                        Create lifelike voice clones that carry your tone, emotion, delivery, and personality with unmatched realism.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Card: PVC Visual */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-blue-600 rounded-[32px] p-8 md:p-12 text-white relative min-h-[500px] flex flex-col justify-end overflow-hidden"
                    >
                        {/* Background Gradient/Texture */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />

                        {/* Center Visual */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-12">
                            <div className="bg-background rounded-xl shadow-2xl p-6 text-foreground">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">My cloned voice</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-inner" />
                                    </div>
                                    <div className="flex justify-center gap-2 text-xs">
                                        <span className="px-3 py-1 rounded-full border border-border">English</span>
                                        <span className="px-3 py-1 rounded-full border border-border">Canadian</span>
                                        <span className="px-3 py-1 rounded-full border border-border">Female</span>
                                    </div>
                                    <div className="flex gap-2 pt-2">
                                        <button className="flex-1 py-2 text-xs font-medium border border-border rounded-lg hover:bg-muted/10">Upload samples</button>
                                        <button className="flex-1 py-2 text-xs font-medium border border-border rounded-lg hover:bg-muted/10">Record yourself</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 pt-60 md:pt-40">
                            <h3 className="text-xl font-bold mb-2 font-serif">Professional Voice Cloning (PVC)</h3>
                            <p className="text-blue-100 text-sm leading-relaxed max-w-md">
                                Capture every nuance of a voice using a dedicated hyper-realistic voice model that's indistinguishable from the original voice.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Card: IVC Visual */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-card rounded-[32px] p-8 md:p-12 relative min-h-[500px] flex flex-col justify-end border border-border/50"
                    >
                        {/* Comparison Circles */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-8 w-full">
                            <div className="text-center group cursor-pointer">
                                <div className="w-32 h-32 rounded-full overflow-hidden relative mb-4">
                                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=320&auto=format&fit=crop" alt="Original" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/0 transition-colors">
                                        <div className="bg-white rounded-full p-2 shadow-lg">
                                            <Play className="w-4 h-4 text-black ml-0.5" />
                                        </div>
                                    </div>
                                </div>
                                <span className="text-sm font-medium text-muted-foreground">Original voice</span>
                            </div>

                            <div className="text-center group cursor-pointer">
                                <div className="w-32 h-32 rounded-full overflow-hidden relative mb-4 bg-gradient-to-tr from-orange-400 to-purple-500">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-white rounded-full p-2 shadow-lg group-hover:scale-110 transition-transform">
                                            <Play className="w-4 h-4 text-black ml-0.5" />
                                        </div>
                                    </div>
                                </div>
                                <span className="text-sm font-medium text-muted-foreground">Cloned voice</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2 text-foreground font-serif">Instant Voice Cloning (IVC)</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                                Create a lifelike voice in moments using just a 10-second recording. Ideal for fast, high-quality voice generation.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VoiceCloningComparison;
