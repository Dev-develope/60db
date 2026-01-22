import React from 'react';
import { Pause } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LeadQualificationSupportCTA = () => {
    return (
        <section className="relative py-32 bg-background overflow-hidden font-sans">
            {/* Wavy Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#999" stopOpacity="0.2" />
                            <stop offset="50%" stopColor="#222" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#999" stopOpacity="0.2" />
                        </linearGradient>
                    </defs>
                    <motion.path
                        d="M0,300 Q150,200 300,300 T600,300 T900,300 T1200,300 L1200,600 L0,600 Z"
                        fill="url(#waveGrad)"
                        animate={{
                            d: [
                                "M0,300 Q150,200 300,300 T600,300 T900,300 T1200,300 L1200,600 L0,600 Z",
                                "M0,300 Q150,400 300,300 T600,300 T900,300 T1200,300 L1200,600 L0,600 Z",
                                "M0,300 Q150,200 300,300 T600,300 T900,300 T1200,300 L1200,600 L0,600 Z"
                            ]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.path
                        d="M0,350 Q200,250 400,350 T800,350 T1200,350 L1200,600 L0,600 Z"
                        fill="url(#waveGrad)"
                        animate={{
                            d: [
                                "M0,350 Q200,250 400,350 T800,350 T1200,350 L1200,600 L0,600 Z",
                                "M0,350 Q200,450 400,350 T800,350 T1200,350 L1200,600 L0,600 Z",
                                "M0,350 Q200,250 400,350 T800,350 T1200,350 L1200,600 L0,600 Z"
                            ]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />
                </svg>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-md mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-[2.5rem] p-12 shadow-2xl border border-gray-100 flex flex-col items-center text-center"
                    >
                        {/* Audio / Pause Icon */}
                        <div className="w-16 h-16 rounded-full border-2 border-gray-100 flex items-center justify-center mb-8 bg-white shadow-sm">
                            <Pause className="w-6 h-6 text-foreground" />
                        </div>

                        <h2 className="text-3xl font-bold text-foreground mb-10 leading-[1.2]">
                            Create with the highest quality AI Audio
                        </h2>

                        <Link
                            to="/signup"
                            className="w-full bg-black text-white py-5 rounded-full text-sm font-bold tracking-tight hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg mb-6 uppercase"
                        >
                            Get Started Free
                        </Link>

                        <p className="text-sm font-bold text-foreground/40">
                            Already have an account? <Link to="/login" className="text-foreground underline underline-offset-4 hover:text-black">Log In</Link>
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-64 bg-gradient-to-t from-background to-transparent z-0"></div>
        </section>
    );
};

export default LeadQualificationSupportCTA;
