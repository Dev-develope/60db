import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Globe, Mic2 } from "lucide-react";

const DubbingStudioCapabilities = () => {
    return (
        <section className="py-24 bg-background border-t border-border/50">
            <div className="max-w-7xl mx-auto px-4 space-y-32">

                {/* Block 1: Original Voices */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl font-bold font-serif text-foreground mb-4">
                            AI dubbing with original voices
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                            Our dubbing tool maintains the original speaker's voice and style across all supported languages, ensuring your content remains emotionally and audibly authentic to audiences worldwide.
                        </p>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="bg-card rounded-2xl p-4 shadow-xl border border-border/50">
                            <div className="aspect-video bg-black/5 rounded-xl overflow-hidden relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?q=80&w=800&auto=format&fit=crop"
                                    alt="Original Voice Dubbing"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center gap-2">
                                    <div className="bg-black/60 backdrop-blur-md text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                                        <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-4 h-3 rounded-[2px]" />
                                        English
                                    </div>
                                    <div className="w-full h-0.5 bg-white/20 rounded-full mx-2 relative">
                                        <div className="absolute inset-0 bg-white w-1/2 rounded-full" />
                                    </div>
                                    <div className="bg-black/60 backdrop-blur-md text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                                        <img src="https://flagcdn.com/w20/in.png" alt="Hindi" className="w-4 h-3 rounded-[2px]" />
                                        Hindi
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-3 text-xs font-medium text-muted-foreground">
                                Localize content across 29 languages with AI dubbing.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Block 2: Any Source */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-2">
                        <h2 className="text-3xl font-bold font-serif text-foreground mb-4">
                            Instantly dub from any source
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                            Upload or link your videos from any platform, be it YouTube, Twitter, TikTok, Vimeo, or a URL, and start translating videos immediately, no matter where your content lives.
                        </p>
                    </div>
                    <div className="order-1 lg:order-1">
                        <div className="bg-[#F3F5FA] rounded-[32px] p-8 md:p-12 relative overflow-hidden flex items-center justify-center min-h-[300px]">
                            <div className="flex items-center gap-4 md:gap-8">
                                {/* Youtube Mock */}
                                <div className="w-32 md:w-40 aspect-[9/16] bg-black rounded-xl overflow-hidden relative shadow-xl transform -rotate-6 translate-y-4">
                                    <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400&auto=format&fit=crop" alt="Social 1" className="w-full h-full object-cover" />
                                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" /></svg>
                                    </div>
                                </div>

                                {/* Upload Icon Center */}
                                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-foreground z-10">
                                    <Upload className="w-8 h-8 text-black" />
                                </div>

                                {/* TikTok Mock */}
                                <div className="w-32 md:w-40 aspect-[9/16] bg-black rounded-xl overflow-hidden relative shadow-xl transform rotate-6 translate-y-4">
                                    <img src="https://images.unsplash.com/photo-1611605698389-eb4f91555211?q=80&w=400&auto=format&fit=crop" alt="Social 2" className="w-full h-full object-cover" />
                                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-black rounded-full flex items-center justify-center text-white border border-white/20">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Block 3: Fully Managed */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl font-bold font-serif text-foreground mb-4">
                            Fully managed dubbing with ElevenStudios
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                            Expand your reach to global audiences by translating your content for foreign audiences. Let our AI and bilingual dubbing experts do the work for you.
                        </p>
                        <Button className="rounded-full px-8 h-12 bg-black text-white hover:bg-gray-800">
                            Learn more
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="bg-[#F89B29] rounded-[32px] p-8 md:p-12 relative overflow-hidden min-h-[300px] flex items-center justify-center">
                            {/* Node Network Visual */}
                            <div className="relative w-full max-w-md h-48">
                                {/* Center Node */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                    <div className="w-20 h-20 rounded-full border-4 border-[#F89B29] overflow-hidden bg-black shadow-lg">
                                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" alt="Manager" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute -right-3 bottom-0 bg-black text-white rounded-full p-1.5">
                                        <Mic2 className="w-3 h-3" />
                                    </div>
                                </div>

                                {/* Audio Wave */}
                                <div className="absolute top-1/2 left-1/2 translate-x-10 -translate-y-1/2 flex items-center gap-0.5 h-12 opacity-40">
                                    <div className="w-1 h-4 bg-black rounded-full" />
                                    <div className="w-1 h-8 bg-black rounded-full" />
                                    <div className="w-1 h-6 bg-black rounded-full" />
                                    <div className="w-1 h-10 bg-black rounded-full" />
                                    <div className="w-1 h-5 bg-black rounded-full" />
                                    <div className="w-1 h-12 bg-black rounded-full" />
                                    <div className="w-1 h-6 bg-black rounded-full" />
                                </div>

                                {/* Satellites */}
                                {[0, 1, 2, 3].map((i) => (
                                    <div key={i} className="absolute w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md z-10"
                                        style={{
                                            top: '50%',
                                            left: '20%',
                                            transform: `translate(${Math.cos(i * 1.2 + 2) * 80}px, ${Math.sin(i * 1.2 + 2) * 80}px)`
                                        }}>
                                        {/* Flag Icons (Mock) */}
                                        <div className={`w-6 h-6 rounded-full bg-gray-200 border border-gray-100 ${i === 0 ? "bg-[url('https://flagcdn.com/w40/es.png')] bg-cover" :
                                                i === 1 ? "bg-[url('https://flagcdn.com/w40/de.png')] bg-cover" :
                                                    i === 2 ? "bg-[url('https://flagcdn.com/w40/fr.png')] bg-cover" :
                                                        "bg-[url('https://flagcdn.com/w40/jp.png')] bg-cover"
                                            }`} />
                                    </div>
                                ))}

                                {/* Connecting Lines */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                    <path d="M100,100 Q150,110 200,120" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.5" />
                                    <path d="M100,150 Q150,130 200,120" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.5" />
                                    <path d="M80,50 Q140,80 200,120" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DubbingStudioCapabilities;
