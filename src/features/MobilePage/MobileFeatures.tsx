import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Globe, Shield, Mic2, Star, Cloud } from 'lucide-react';

const mobileFeatures = [
    {
        icon: Zap,
        title: "Instant Streaming",
        description: "Zero latency voice output. Listen to your content as soon as you generate it."
    },
    {
        icon: Globe,
        title: "Multi-language Support",
        description: "Generate natural-sounding speech in over 29 languages with a single tap."
    },
    {
        icon: Mic2,
        title: "Voice Design",
        description: "Create and customize your own unique voices directly from your mobile device."
    },
    {
        icon: Cloud,
        title: "Seamless Sync",
        description: "Your library and voices are automatically synced across all your devices."
    },
    {
        icon: Shield,
        title: "Secure & Private",
        description: "Advanced encryption ensures your recordings and data are always protected."
    },
    {
        icon: Star,
        title: "Premium Quality",
        description: "Studio-quality audio output optimized for mobile listening environments."
    }
];

const MobileFeatures = () => {
    return (
        <section className="py-24 bg-background font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-foreground mb-6"
                    >
                        Powerful features, perfectly pocketed
                    </motion.h2>
                    <p className="text-foreground/60 text-lg font-medium">
                        Everything you love about ElevenLabs, fine-tuned for the ultimate mobile experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mobileFeatures.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-3xl bg-secondary/30 border border-border/50 hover:bg-secondary/50 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white border border-border flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <feature.icon className="w-6 h-6 text-foreground" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                            <p className="text-foreground/50 font-medium leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MobileFeatures;
