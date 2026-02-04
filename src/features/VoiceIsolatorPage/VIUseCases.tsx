import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Quote, Headphones, Camera, Mic2, Star } from 'lucide-react';

const cases = [
    {
        icon: Headphones,
        role: "Podcasters",
        title: "Clean audio, every time",
        description: "Never worry about background hums or neighbor noise again. Give your listeners studio-quality clarity even if you recorded in a closet.",
        color: "bg-blue-500"
    },
    {
        icon: Camera,
        role: "Filmmakers",
        title: "Rescue on-location audio",
        description: "Save time in ADR. Isolate clear dialogue from noisy sets, wind, or distant traffic without losing the actor's natural performance.",
        color: "bg-rose-500"
    },
    {
        icon: Mic2,
        role: "Live Streamers",
        title: "Banish keyboard clicks",
        description: "Clean up your recordings for VODs. Remove mechanical keyboard sounds and fan noise, leaving only your voice for your audience.",
        color: "bg-indigo-500"
    },
    {
        icon: Star,
        role: "Professionals",
        title: "Perfect your interviews",
        description: "Convert transcriptions of noisy cafe interviews into high-quality audio clips for sharing or archiving purposes.",
        color: "bg-amber-500"
    }
];

const VIUseCases = () => {
    return (
        <section className="py-24 bg-gray-50 font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-[#1D1D1B] mb-6 tracking-tight"
                    >
                        Built for creators
                    </motion.h2>
                    <p className="text-[#1D1D1B]/60 text-lg font-medium">
                        The world's most advanced vocal isolation tool is already empowering millions of projects.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000 }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        className="pb-16 vi-swiper"
                    >
                        {cases.map((item, i) => (
                            <SwiperSlide key={i} className="h-full">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-10 rounded-[2.5rem] bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all h-full flex flex-col group"
                                >
                                    <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-black/5`}>
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">{item.role}</span>
                                    <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                                    <p className="text-[#1D1D1B]/50 font-medium leading-relaxed mb-8 flex-1">
                                        {item.description}
                                    </p>

                                    <div className="pt-8 border-t border-black/5 flex items-center justify-between">
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, idx) => (
                                                <Star key={idx} className="w-3 h-3 fill-amber-400 text-amber-400" />
                                            ))}
                                        </div>
                                        <Quote className="w-6 h-6 text-black/5 group-hover:text-black/10 transition-colors" />
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <style>{`
                .vi-swiper .swiper-pagination-bullet {
                    background: #000;
                    opacity: 0.1;
                }
                .vi-swiper .swiper-pagination-bullet-active {
                    opacity: 1;
                    width: 24px;
                    border-radius: 12px;
                }
            `}</style>
        </section>
    );
};

export default VIUseCases;
