import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const productions = [
    {
        id: 1,
        title: "Echoed Stories",
        category: "Audiobook",
        date: "2025.07.26",
        status: "In Progress",
        video: "https://eleven-public-cdn.elevenlabs.io/payloadcms/vzdfxf86hao-Audiobook.mp4",
    },
    {
        id: 2,
        title: "Thursday Night Highlights - Spanish",
        category: "Captions",
        date: "2025.09.12",
        status: "Ready",
        video: "https://eleven-public-cdn.elevenlabs.io/payloadcms/4cetl2kogyi-Captions.mp4",
    },
    {
        id: 3,
        title: "10 Days on the Road",
        category: "Dubbing",
        date: "2025.11.11",
        status: "In Progress",
        video: "https://eleven-public-cdn.elevenlabs.io/payloadcms/637tlu3bja4-Dubbing.mp4",
    },
    {
        id: 4,
        title: "Huberman Lab",
        category: "Captions",
        date: "2025.09.15",
        status: "Ready",
        video: "https://eleven-public-cdn.elevenlabs.io/payloadcms/nfgsctevc8g-Transcript.mp4",
    }
];

const ProductionCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative mx-auto max-w-[1400px] overflow-hidden pb-[10vh] pt-24 lg:pt-[15vh] font-sans">
            {/* Side Gradients for Focus */}
            <div className="absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-background to-transparent md:w-80 pointer-events-none"></div>
            <div className="absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-background to-transparent md:w-80 pointer-events-none"></div>

            <div className="relative rotate-[-2deg]">
                <Swiper
                    modules={[Autoplay, EffectCoverflow]}
                    spaceBetween={0}
                    slidesPerView={1.2}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 2.5,
                        }
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="!overflow-visible"
                >
                    {productions.map((prod, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <SwiperSlide key={prod.id} className="px-4">
                                <div
                                    className={`relative transition-all duration-700 ease-in-out skew-x-[-8deg]
                                        ${isActive
                                            ? 'scale-100 opacity-100 -translate-y-5 z-10'
                                            : 'scale-[80%] opacity-40 z-0'
                                        }`}
                                >
                                    <div className="relative mb-8 aspect-[3/2] overflow-hidden rounded-2xl shadow-2xl border border-white/10">
                                        {!isActive && <div className="absolute inset-0 bg-black/40 z-10"></div>}
                                        <video
                                            className={`h-full w-full object-cover transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-60'}`}
                                            playsInline
                                            muted
                                            loop
                                            autoPlay={isActive}
                                            src={prod.video}
                                        ></video>

                                        <div className="absolute right-6 top-6 z-20">
                                            <span className={`rounded-full px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase shadow-lg backdrop-blur-md border border-white/20
                                                ${prod.status === 'Ready'
                                                    ? 'bg-emerald-500/80 text-white'
                                                    : 'bg-black/40 text-white/90'
                                                }`}
                                            >
                                                {prod.status}
                                            </span>
                                        </div>
                                    </div>

                                    <div className={`transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-30'}`}>
                                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 truncate">{prod.title}</h3>
                                        <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-foreground/40 uppercase tracking-widest">
                                            <span>{prod.category}</span>
                                            <span className="w-1 h-1 rounded-full bg-foreground/20"></span>
                                            <span>{prod.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default ProductionCarousel;
