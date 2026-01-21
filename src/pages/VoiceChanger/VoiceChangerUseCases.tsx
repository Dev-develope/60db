
import { motion } from "framer-motion";
import { Camera, Video, Mic, Gamepad2, GraduationCap, Clapperboard } from "lucide-react";

const useCases = [
    {
        icon: Camera,
        title: "Content Creators",
        description: "Create engaging voiceovers for YouTube, TikTok, and social media. Change your voice to protect identity or add variety.",
        className: "md:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-900 text-white border-transparent",
        iconClassName: "text-white/90",
        textClassName: "text-blue-100"
    },
    {
        icon: Video,
        title: "YouTubers & Streamers",
        description: "Reach global audiences with transformed voices across different languages. Create character voices for gaming content.",
        className: "md:col-span-2 bg-card border-transparent",
        iconClassName: "text-foreground",
        textClassName: "text-muted-foreground"
    },
    {
        icon: Mic,
        title: "Podcasters",
        description: "Produce professional-quality podcasts with studio-grade voice transformation. Create distinct voices for different segments.",
        className: "md:col-span-1 bg-card border-transparent",
        iconClassName: "text-foreground",
        textClassName: "text-muted-foreground"
    },
    {
        icon: Gamepad2,
        title: "Game Developers",
        description: "Build immersive gaming experiences with diverse character voices. Create consistent performances across dialogue lines.",
        className: "md:col-span-1 bg-card border-transparent",
        iconClassName: "text-foreground",
        textClassName: "text-muted-foreground"
    },
    {
        icon: GraduationCap,
        title: "E-Learning Professionals",
        description: "Develop engaging educational content with clear voiceovers. Create accessible content in multiple languages efficiently.",
        className: "md:col-span-1 bg-card border-transparent",
        iconClassName: "text-foreground",
        textClassName: "text-muted-foreground"
    },
    {
        icon: Clapperboard,
        title: "Animation Studios",
        description: "Create character voices for animated content without managing multiple voice actors. Generate consistent performances across scenes.",
        className: "md:col-span-1 bg-card border-transparent",
        iconClassName: "text-foreground",
        textClassName: "text-muted-foreground"
    }
];

const VoiceChangerUseCases = () => {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground font-serif max-w-xl leading-tight">
                        Who Uses ElevenLabs Voice Changer?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-md text-left md:text-right font-medium">
                        Our AI voice changer serves creators and professionals across industries
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={useCase.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 rounded-[32px] flex flex-col justify-between h-full min-h-[320px] ${useCase.className}`}
                        >
                            <div className="mb-8">
                                <useCase.icon className={`w-8 h-8 ${useCase.iconClassName}`} />
                            </div>

                            <div>
                                <h3 className={`text-xl font-bold font-serif mb-3 ${useCase.title === "Content Creators" ? "text-white" : "text-foreground"}`}>
                                    {useCase.title}
                                </h3>
                                <p className={`text-base leading-relaxed ${useCase.textClassName}`}>
                                    {useCase.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VoiceChangerUseCases;
