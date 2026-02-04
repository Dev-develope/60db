import React from 'react';
import { motion } from 'framer-motion';

const screenshots = [
    {
        title: "Voice Generation",
        description: "Choose from hundreds of unique voices",
        image: "https://eleven-public-cdn.elevenlabs.io/payloadcms/3860u5o0g37-Mobile-Generator.png"
    },
    {
        title: "Global Library",
        description: "Access voices in 29+ languages",
        image: "https://eleven-public-cdn.elevenlabs.io/payloadcms/7e0i6f86r9h-Mobile-Library.png"
    },
    {
        title: "Instant Conversion",
        description: "Transform text on the fly",
        image: "https://eleven-public-cdn.elevenlabs.io/payloadcms/0y8v6j0m7e8-MobileHero.png"
    }
];

const MobileAppPreview = () => {
    return (
        <section className="py-24 bg-white font-sans overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-foreground mb-6"
                    >
                        Built for ultimate creativity
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/60 text-lg font-medium"
                    >
                        Our mobile app is designed to be the perfect companion for your desktop workflow.
                        Take your workspace wherever you go.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                    {screenshots.map((screen, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="relative mb-10 w-full max-w-[280px]">
                                <img
                                    src={screen.image}
                                    alt={screen.title}
                                    className="w-full relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                                />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/10 rounded-full blur-2xl -z-0"></div>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-3">{screen.title}</h3>
                            <p className="text-foreground/50 font-medium">{screen.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MobileAppPreview;
