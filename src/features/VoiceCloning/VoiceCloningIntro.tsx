
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, AudioWaveform, Globe } from "lucide-react";

const VoiceCloningIntro = () => {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground font-serif leading-tight">
                            Meet the most accurate and advanced AI Voice cloning
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Create a digital replica of your voice that sounds just like you. Create instant voice clones with just a few seconds of sample audio, or capture very unique accents and vocal traits using our professional voice cloning. Perfect for any use case imaginable.
                        </p>
                        <Button className="rounded-full px-8 h-12">
                            Clone your voice
                        </Button>
                    </div>

                    {/* Right Visuals */}
                    <div className="relative">
                        {/* Background Card */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="bg-card rounded-3xl p-6 md:p-8 ml-auto max-w-md relative z-10 border border-border/50 shadow-soft"
                        >
                            {/* Floating PVC Card */}
                            <div className="absolute -top-12 -right-4 md:-right-12 bg-background p-6 rounded-2xl shadow-elevated border border-border/50 w-64 md:w-72 hidden md:block">
                                <div className="text-xs font-semibold text-muted-foreground mb-4">Professional Voice Clone</div>
                                <div className="flex justify-center mb-4">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-amber-500 relative flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full border-2 border-white/20" />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-sm font-bold text-foreground">30 mins provided</div>
                                    <div className="text-xs text-muted-foreground mt-1">Create clone or add more recordings</div>
                                </div>
                            </div>

                            {/* Main Card Content (Instant) */}
                            <div className="space-y-6 pt-4 md:pt-0">
                                <div className="flex gap-4 border-b border-border/50 pb-4">
                                    <span className="text-sm font-medium text-foreground border-b-2 border-primary pb-4 -mb-4.5">Instant Voice Clone</span>
                                    <span className="text-sm text-muted-foreground">Voice Info</span>
                                    <span className="text-sm text-muted-foreground">Finish up</span>
                                </div>

                                <div className="bg-background rounded-xl border border-border/50 p-8 flex items-center justify-center h-40">
                                    <AudioWaveform className="w-12 h-12 text-muted-foreground/30" />
                                </div>

                                <div className="flex justify-between items-center text-xs text-muted-foreground">
                                    <span>11:00 / 10:00 seconds provided</span>
                                </div>

                                <Button variant="outline" className="w-full justify-between group">
                                    Next
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VoiceCloningIntro;
