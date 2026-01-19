import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';

const MobileCTA = () => {
    return (
        <section className="py-24 font-sans px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto rounded-[3rem] bg-black p-12 md:p-24 text-center text-white relative overflow-hidden"
            >
                {/* Background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/10 opacity-50"></div>

                <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
                        Join the future of <br /> AI audio today
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                        Start generating studio-quality voices from the palm of your hand.
                        Download ElevenLabs for iOS and Android.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="w-full sm:w-auto flex items-center justify-center gap-4 bg-white text-black px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 active:scale-95">
                            <Apple className="w-8 h-8 fill-current" />
                            <span className="text-lg">App Store</span>
                        </button>
                        <button className="w-full sm:w-auto flex items-center justify-center gap-4 bg-white text-black px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 active:scale-95">
                            <Play className="w-8 h-8 fill-current" />
                            <span className="text-lg">Google Play</span>
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default MobileCTA;
