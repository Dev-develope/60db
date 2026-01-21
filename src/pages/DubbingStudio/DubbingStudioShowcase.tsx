import { useState } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

const DubbingStudioShowcase = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [language, setLanguage] = useState<"original" | "dubbed">("original");

    return (
        <section className="py-24 bg-card border-y border-border/50">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-foreground font-serif mb-12">
                    Experience the quality
                </h2>

                <div className="max-w-4xl mx-auto bg-background rounded-[32px] overflow-hidden shadow-2xl border border-border">
                    <div className="aspect-video bg-black relative flex items-center justify-center group">
                        <img
                            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1200&auto=format&fit=crop"
                            alt="Video Preview"
                            className="w-full h-full object-cover opacity-80"
                        />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                            >
                                {isPlaying ? (
                                    <Pause className="w-8 h-8 text-white fill-current" />
                                ) : (
                                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                                )}
                            </button>
                        </div>

                        {/* Language Toggle */}
                        <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-md rounded-full p-1 flex border border-white/10">
                            <button
                                onClick={() => setLanguage("original")}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${language === "original" ? "bg-white text-black" : "text-white/70 hover:text-white"}`}
                            >
                                Original (English)
                            </button>
                            <button
                                onClick={() => setLanguage("dubbed")}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${language === "dubbed" ? "bg-white text-black" : "text-white/70 hover:text-white"}`}
                            >
                                Dubbed (Spanish)
                            </button>
                        </div>

                        {/* Video Controls (Mock) */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <div className="h-1 bg-white/30 rounded-full mb-4 overflow-hidden">
                                <div className="h-full bg-indigo-500 w-1/3" />
                            </div>
                            <div className="flex justify-between text-white/90 text-sm">
                                <span>0:12 / 1:45</span>
                                <div className="flex gap-4">
                                    <span>CC</span>
                                    <span>HD</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <Button size="lg" className="rounded-full px-8 h-12">
                        Get Started with Dubbing
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default DubbingStudioShowcase;
