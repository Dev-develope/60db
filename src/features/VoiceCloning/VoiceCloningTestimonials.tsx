import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "With Stancul, I've created an AI Twin of myself—so anyone, anywhere in the world, in any language, can sit down and have a life-changing conversation with me.",
        author: "Tony Robbins",
        role: "#1 New York Times bestselling author",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
        logoConfig: { type: "text", content: "TR" }
    },
    {
        quote: "Our mission is to build a chess coach that teaches at the right level, welcomes players of every skill level, and demystifies chess while keeping it fun and full of personality. With ElevenLabs and these amazing new voices, we've taken a big step toward making that vision a reality.",
        author: "Daniel J.",
        role: "Senior Product Manager, Chess.com",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
        logoConfig: { type: "icon", content: "♟️" }
    },
    {
        quote: "Elevated Audio Creation with Diverse Voice Options",
        author: "Christopher M.",
        role: "Associate Software Engineer",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
        logoConfig: { type: "icon", content: "D" }
    },
    {
        quote: "Seamless Text-to-Speech for Perfect YouTube Voiceovers",
        author: "Jeremy A.",
        role: "YouTube Creator",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
        logoConfig: { type: "icon", content: "▶️" }
    },
    {
        quote: "Our decision to go with ElevenLabs was simple: ElevenLabs has the best, most human-sounding, natural quality voices. When Particle first launched our Listen to the News feature, people were blown away that the voices are AI.",
        author: "Ben B.",
        role: "Co-Founder & CEO of Particle",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        logoConfig: { type: "icon", content: "P" }
    },
    {
        quote: "Natural sounding text to voice with voice cloning feature",
        author: "David L. R.",
        role: "Partner, Product Trainer",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
        logoConfig: { type: "icon", content: "D" }
    },
    {
        quote: "Unmatched Realism and Emotional Depth in Voice Generation",
        author: "Mohammed J. A.",
        role: "Process Lead, Real Estate",
        image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=200&auto=format&fit=crop",
        logoConfig: { type: "icon", content: "M" }
    },
    {
        quote: "Revolutionary voice quality and incredible speed",
        author: "Lisa P.",
        role: "Media Producer",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
        logoConfig: { type: "icon", content: "L" }
    }
];

const VoiceCloningTestimonials = () => {
    return (
        <section className="py-24 bg-background border-t border-border/50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground font-serif max-w-3xl mx-auto leading-tight">
                        Trusted by the World's Leading Creators & their communities
                    </h2>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="break-inside-avoid bg-card rounded-[24px] p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="mb-6">
                                <Quote className="w-8 h-8 text-muted-foreground/20 fill-current" />
                            </div>

                            <blockquote className="text-foreground text-lg mb-8 leading-relaxed font-medium">
                                "{item.quote}"
                            </blockquote>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                                    <img src={item.image} alt={item.author} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="font-bold text-foreground text-sm flex items-center gap-2">
                                        {item.author}
                                    </div>
                                    <div className="text-muted-foreground text-xs">{item.role}</div>
                                </div>

                                {/* Visual Logo Placeholder */}
                                <div className="ml-auto w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">
                                    {item.logoConfig.content}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VoiceCloningTestimonials;
