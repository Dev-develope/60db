
import { motion } from "framer-motion";
import { Heart, User, Zap, Fingerprint, Check, SlidersHorizontal } from "lucide-react";

const features = [
    {
        icon: Heart,
        title: "Preserve Emotional Delivery",
        description: "Capture and preserve whispers, laughs, and emotional cues. The original accent and speaking style transfer seamlessly to your new voice.",
        className: "md:col-span-2 bg-gradient-to-br from-indigo-950 via-purple-900 to-amber-900/40 text-white border-transparent relative overflow-hidden",
        iconClassName: "text-white",
        textClassName: "text-gray-200"
    },
    {
        icon: User,
        title: "Wide Voice Selection",
        description: "Access thousands of high-quality voices from our extensive library. Choose from different ages, genders, and accents across 29 languages.",
        className: "md:col-span-2 bg-[#F9F9F9] border-transparent",
        iconClassName: "text-gray-900",
        textClassName: "text-gray-500"
    },
    {
        icon: Zap,
        title: "Fast Real-Time Processing",
        description: "Experience rapid audio generation with our Turbo model, achieving response times as low as ~400 milliseconds. Transform audio files instantly.",
        className: "md:col-span-1 bg-[#F9F9F9] border-transparent",
        iconClassName: "text-gray-900",
        textClassName: "text-gray-500"
    },
    {
        icon: Fingerprint,
        title: "Voice Cloning Integration",
        description: "Use your own custom voices or create voice clones for consistent character voices across multiple recording sessions.",
        className: "md:col-span-1 bg-[#F9F9F9] border-transparent",
        iconClassName: "text-gray-900",
        textClassName: "text-gray-500"
    },
    {
        icon: Check,
        title: "Background Noise Removal",
        description: "Working with imperfect recordings? Enable background noise removal to clean up environmental sounds and produce professional results.",
        className: "md:col-span-1 bg-[#F9F9F9] border-transparent",
        iconClassName: "text-gray-900",
        textClassName: "text-gray-500"
    },
    {
        icon: SlidersHorizontal,
        title: "Fine-Tune Delivery",
        description: "Adjust style and stability parameters to achieve the exact delivery you want. Control emotions, timing, and inflections for perfect results.",
        className: "md:col-span-1 bg-[#F9F9F9] border-transparent",
        iconClassName: "text-gray-900",
        textClassName: "text-gray-500"
    }
];

const VoiceChangerFeatures = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 max-w-xl leading-tight">
                        Realistic AI Voice Changer Features
                    </h2>
                    <p className="text-lg text-gray-500 max-w-md text-left md:text-right font-medium">
                        Built for creators, developers, and storytellers who demand studio-quality results
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 rounded-[32px] flex flex-col justify-between h-full min-h-[340px] ${feature.className}`}
                        >
                            <div className="mb-8">
                                <feature.icon className={`w-8 h-8 ${feature.iconClassName}`} />
                            </div>

                            <div className="space-y-3">
                                <h3 className={`text-xl font-bold ${feature.className.includes("text-white") ? "text-white" : "text-gray-900"}`}>
                                    {feature.title}
                                </h3>
                                <p className={`text-sm leading-relaxed ${feature.textClassName}`}>
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VoiceChangerFeatures;
