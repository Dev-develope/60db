import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, FreeMode, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/effect-coverflow';

const producers = [
    {
        name: "Mateus",
        age: 32,
        specialty: "Portuguese dubs",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mateus&backgroundColor=b6e3f4",
        gradient: "from-blue-400/20 to-indigo-500/20"
    },
    {
        name: "Carmen",
        age: 27,
        specialty: "Chinese translations",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carmen&backgroundColor=ffd5dc",
        gradient: "from-rose-400/20 to-orange-500/20"
    },
    {
        name: "Chris",
        age: 52,
        specialty: "English captions and audiobooks",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chris&backgroundColor=c1f8cf",
        gradient: "from-emerald-400/20 to-teal-500/20"
    },
    {
        name: "Elena",
        age: 29,
        specialty: "Spanish localization",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena&backgroundColor=f8d7da",
        gradient: "from-purple-400/20 to-pink-500/20"
    },
    {
        name: "Yuki",
        age: 35,
        specialty: "Japanese dubbing",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yuki&backgroundColor=fff3cd",
        gradient: "from-amber-400/20 to-yellow-500/20"
    },
    {
        name: "Amara",
        age: 24,
        specialty: "Arabic localization",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amara&backgroundColor=e2e8f0",
        gradient: "from-slate-400/20 to-zinc-500/20"
    }
];

const benefits = [
    { id: 1, text: "Transcription, captioning, subtitling, dubbing, and audiobook jobs" },
    { id: 2, text: "Flexible working schedule" },
    { id: 3, text: "Competitive per-task compensation from $0.50 per minute" },
    { id: 4, text: "Training and certifications" }
];

const ProducerNetwork = () => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <section className="py-24 bg-background font-sans overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="text-left max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight"
                        >
                            Join our Producer network
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-foreground/60 text-sm md:text-base leading-relaxed font-medium"
                        >
                            Productions is powered by expert linguists and localization professionals.
                            Join our Producer network to work on some of the most exciting audio projects in the world.
                        </motion.p>
                    </div>

                    <div className="flex items-center gap-4">
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-black text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all hover:scale-105 mr-4"
                        >
                            Apply now
                        </motion.button>

                        <div className="flex gap-2">
                            <button
                                ref={prevRef}
                                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                ref={nextRef}
                                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Swiper Section */}
                <div className="mb-20">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation, FreeMode, EffectCoverflow]}
                        effect={'coverflow'}
                        centeredSlides={true}
                        slidesPerView={1.2}
                        spaceBetween={30}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            // @ts-ignore
                            swiper.params.navigation.prevEl = prevRef.current;
                            // @ts-ignore
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        loop={true}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            1024: { slidesPerView: 3 }
                        }}
                        className="!pb-14 !overflow-visible"
                    >
                        {producers.map((producer, i) => (
                            <SwiperSlide key={i}>
                                <div className={`relative aspect-square md:aspect-[4/5] max-w-[340px] mx-auto rounded-3xl overflow-hidden bg-gradient-to-br ${producer.gradient} border border-border group cursor-grab active:cursor-grabbing`}>
                                    <img
                                        src={producer.image}
                                        alt={producer.name}
                                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                                        <p className="text-lg font-bold mb-1">{producer.name}, {producer.age}</p>
                                        <p className="text-xs font-medium text-white/70">{producer.specialty}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {benefits.map((benefit) => (
                        <motion.div
                            key={benefit.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: benefit.id * 0.1 }}
                            className="flex flex-col items-center md:items-start text-center md:text-left"
                        >
                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-[10px] font-bold text-foreground/40 mb-4 border border-border">
                                {benefit.id}
                            </div>
                            <p className="text-xs md:text-sm text-foreground/50 font-medium leading-relaxed">
                                {benefit.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProducerNetwork;
