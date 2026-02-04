
import { motion } from "framer-motion";

const useCases = [
    {
        title: "Audiobooks",
        description: "Authors and publishers use professional voice cloning to create high-quality audiobook narration without expensive studio sessions.",
        image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=3000&auto=format&fit=crop", // Placeholder for simple UI or book cover vibe
        type: "card",
        className: "col-span-1 md:col-span-2 bg-gray-50"
    },
    {
        title: "Podcasts",
        description: "Produce episodes faster by cloning your voice. Fix mistakes, add new segments, or create entire episodes using text to speech with your own voice.",
        image: null,
        type: "simple",
        className: "col-span-1 bg-gray-50"
    },
    {
        title: "Video Voiceovers",
        description: "Content creators scale their production by generating voiceovers for YouTube, social media, and marketing videos in their own voice.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2874&auto=format&fit=crop",
        type: "image-card",
        className: "col-span-1 bg-indigo-50"
    },
    {
        title: "Video Games",
        description: "Game developers generate character dialogue at scale. Create themes for voices for NPCs and protagonists with emotional depth.",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2940&auto=format&fit=crop",
        type: "image-card",
        className: "col-span-1 bg-gray-900 text-white"
    },
    {
        title: "Advertising",
        description: "Brands produce localized ad campaigns across markets using voice clones that maintain consistent brand voice in any language.",
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2940&auto=format&fit=crop",
        type: "image-card",
        className: "col-span-1 bg-orange-50"
    }
];

const VoiceCloningUseCases = () => {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                    <h2 className="text-4xl font-bold text-foreground font-serif max-w-sm">
                        AI voice clones for a wide range of use cases
                    </h2>
                    <p className="text-muted-foreground max-w-sm text-sm">
                        Powering everything from long-form narration to real-time dialogue with consistent, human-level quality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Audiobooks (Big Card) */}
                    <div className="col-span-1 md:col-span-2 bg-card rounded-[32px] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden min-h-[400px] border border-border/50">
                        <div className="relative z-10 max-w-md">
                            <h3 className="text-lg font-bold mb-3 text-foreground font-serif">Audiobooks</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Authors and publishers use professional voice cloning to create high-quality audiobook narration without expensive studio sessions.
                            </p>
                        </div>
                        <div className="mt-8 flex gap-4">
                            {/* Mock UI of Audiobook player */}
                            <div className="bg-background rounded-xl shadow-sm p-4 w-full max-w-md border border-border/50 flex items-center gap-4">
                                <div className="w-12 h-16 bg-blue-600 rounded-md shrink-0 shadow-md" />
                                <div>
                                    <div className="font-bold text-foreground text-sm">Dario Amodei — Machines of Loving Grace</div>
                                    <div className="text-xs text-muted-foreground mt-1">Generated Audiobook</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Podcasts */}
                    <div className="col-span-1 bg-card rounded-[32px] p-8 flex flex-col relative overflow-hidden border border-border/50">
                        <h3 className="text-lg font-bold mb-3 text-foreground font-serif">Podcasts</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                            Produce episodes faster by cloning your voice. Fix mistakes, add new segments, or create entire episodes.
                        </p>
                        <div className="mt-auto bg-background rounded-xl border border-border/50 p-4 shadow-sm">
                            {/* Fake Chat/Audio UI */}
                            <div className="space-y-3">
                                <div className="flex gap-2 items-center">
                                    <div className="w-6 h-6 rounded-full bg-blue-100" />
                                    <div className="h-2 bg-gray-100 rounded w-full" />
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-6 h-6 rounded-full bg-green-100" />
                                    <div className="h-2 bg-gray-100 rounded w-3/4" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    {[
                        { title: "Video Voiceovers", desc: "Content creators scale their production by generating voiceovers for social media.", img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=3000&auto=format&fit=crop" },
                        { title: "Video Games", desc: "Game developers generate character dialogue at scale for NPCs.", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2940&auto=format&fit=crop" },
                        { title: "Advertising", desc: "Brands produce localized ad campaigns across markets using voice clones.", img: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=2940&auto=format&fit=crop" }
                    ].map((item) => (
                        <div key={item.title} className="col-span-1 h-[320px] rounded-[32px] overflow-hidden relative group">
                            <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-200 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VoiceCloningUseCases;
