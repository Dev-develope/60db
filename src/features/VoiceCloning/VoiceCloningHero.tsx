
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const VoiceCloningHero = () => {
    return (
        <section className="relative pt-32 pb-24 px-4 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Column: Text Content */}
                <div className="space-y-8 max-w-xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold tracking-tight text-foreground font-serif leading-[1.1]"
                    >
                        Create a replica of your voice that sounds just like you
                    </motion.h1>

                    <div className="flex items-center gap-4">
                        <Button size="lg" className="rounded-full px-8 h-12 text-base font-medium min-w-[120px]">
                            Sign up
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base font-medium min-w-[120px]">
                            Explore the docs
                        </Button>
                    </div>
                </div>

                {/* Right Column: Descriptions */}
                <div className="lg:pl-12">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground leading-relaxed max-w-md"
                    >
                        Upload a short audio sample and generate natural-sounding speech from text for voiceovers, ads, podcasts, and more - all in your own voice.
                    </motion.p>
                </div>

            </div>

            {/* Demo Card Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="max-w-7xl mx-auto mt-20"
            >
                <div className="bg-card rounded-[32px] p-8 md:p-12 relative overflow-hidden shadow-card border border-border/50">
                    {/* Header of Card */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                        <div>
                            <h3 className="text-xl font-bold text-foreground font-serif">Lily</h3>
                            <p className="text-muted-foreground">Graceful female narrator voice</p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" className="rounded-full bg-background/50 h-9">
                                Examples
                            </Button>
                            <Button variant="ghost" className="rounded-full text-muted-foreground text-sm h-9 hover:bg-background">
                                Clone your voice
                            </Button>
                        </div>
                    </div>

                    {/* Visualizations */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16 relative">
                        {/* Connector Line */}
                        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px border-t border-dashed border-gray-300 -z-10" />

                        {/* Original Voice */}
                        <div className="flex flex-col items-center gap-6 text-center">
                            <div className="relative group cursor-pointer">
                                <div className="w-48 h-48 rounded-full overflow-hidden relative">
                                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388&auto=format&fit=crop" alt="Original Voice" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                                        <Play className="w-6 h-6 text-black ml-1" />
                                    </div>
                                </div>
                            </div>
                            <span className="font-medium text-gray-600">Original voice</span>
                        </div>

                        {/* Cloned Voice */}
                        <div className="flex flex-col items-center gap-6 text-center">
                            <div className="relative group cursor-pointer">
                                <div className="w-48 h-48 rounded-full overflow-hidden relative bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500">

                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                                        <Play className="w-6 h-6 text-black ml-1" />
                                    </div>
                                </div>
                            </div>
                            <span className="font-medium text-gray-600">Cloned voice</span>
                        </div>
                    </div>

                    {/* Footer / Toggles */}
                    <div className="flex justify-center gap-2">
                        {["Lily", "Chris", "Laura"].map((name, i) => (
                            <button
                                key={name}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${i === 0 ? "bg-background shadow-soft text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                            >
                                {name}
                            </button>
                        ))}
                    </div>

                </div>

                {/* Logos */}
                <div className="mt-16 flex justify-center items-center gap-12 opacity-40 grayscale flex-wrap">
                    {/* Simple placeholders for logos as per image */}
                    <span className="text-xl font-bold">twilio</span>
                    <span className="text-xl font-bold">meesho</span>
                    <span className="text-xl font-bold">CISCO</span>
                    <span className="text-xl font-bold">perplexity</span>
                    <span className="text-xl font-bold">traba</span>
                </div>
            </motion.div>
        </section>
    );
};

export default VoiceCloningHero;
