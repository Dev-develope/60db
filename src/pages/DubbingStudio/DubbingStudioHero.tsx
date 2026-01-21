import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";
import { motion } from "framer-motion";

const DubbingStudioHero = () => {
    return (
        <section className="relative overflow-hidden bg-background pt-32 pb-20 md:pt-48 md:pb-32">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
                <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px]" />
                <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/50 border border-border/50 text-xs font-medium text-foreground mb-8">
                        <Globe className="w-3 h-3" />
                        <span>Supports 29 languages</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold font-serif text-foreground mb-6 tracking-tight leading-tight">
                        Localize content across <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                            29 languages
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                        Expand your reach to global audiences by translating your content automatically.
                        Maintain the original voice and performance with our advanced AI dubbing.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="rounded-full h-12 px-8 text-base">
                            Start Dubbing
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-base bg-transparent border-gray-300 hover:bg-gray-100/50">
                            View Dubbing API
                        </Button>
                    </div>
                </motion.div>

                {/* Hero Visual mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-20 relative mx-auto max-w-4xl"
                >
                    <div className="rounded-xl overflow-hidden shadow-2xl border border-border/50 bg-card">
                        <div className="aspect-video bg-black/5 relative flex items-center justify-center group cursor-pointer m-2 rounded-lg overflow-hidden border border-border/20">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <img
                                src="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format&fit=crop"
                                alt="Dubbing Editor Interface"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-6 left-6 text-left">
                                <div className="text-white font-medium text-lg">Global Reach Initiative</div>
                                <div className="text-white/70 text-sm">Dubbed from English to Spanish</div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                                </div>
                            </div>
                        </div>
                        {/* Fake Editor Timeline */}
                        <div className="h-24 bg-card border-t border-border flex flex-col p-4 gap-2">
                            <div className="flex gap-2 opacity-50">
                                <div className="w-full h-2 rounded-full bg-indigo-500/20" />
                                <div className="w-2/3 h-2 rounded-full bg-purple-500/20" />
                            </div>
                            <div className="flex gap-2">
                                <div className="w-1/2 h-8 rounded-md bg-indigo-500 border border-indigo-400 opacity-90" />
                                <div className="w-1/3 h-8 rounded-md bg-purple-500 border border-purple-400 opacity-90" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DubbingStudioHero;
