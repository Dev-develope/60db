import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const creators = [
    {
        title: "Video creators",
        desc: "Edit video online with AI. Sync narration with visuals, auto-generate captions, and add background music or sound effects to bring your stories to life.",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=80"
    },
    {
        title: "Audiobook authors",
        desc: "Review narration effortlessly with text-based editing, correct audio with modern speech-repair, and generate cinematic audiobook trailers.",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&auto=format&fit=crop&q=80"
    },
    {
        title: "Podcasters",
        desc: "Clean up dialogue with voice isolation, fix mistakes without re-recording, and design custom theme music or sound effects for every episode.",
        image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&auto=format&fit=crop&q=80"
    },
    {
        title: "Gaming content",
        desc: "Level up your gaming clips with unique character voices, immersive soundscapes, and real-time voice reactions.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80"
    }
];

const StudioCreatorShowcase = () => {
    return (
        <section className="py-24 bg-transparent overflow-hidden font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
                        Built for every creator
                    </h2>
                    <p className="text-foreground/60 text-base md:text-lg leading-relaxed font-medium">
                        From video creators to podcasters and audiobook authors, Studio 3.0 adapts to every workflow — combining AI audio editing, video editing, and professional sound design.
                    </p>
                </div>

                {/* Swiper Carousel */}
                <div className="max-w-7xl mx-auto relative group">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={24}
                        slidesPerView={1.2}
                        breakpoints={{
                            640: { slidesPerView: 2.2 },
                            1024: { slidesPerView: 3 },
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true
                        }}
                        loop={true}
                        centeredSlides={false}
                        className="pb-16"
                    >
                        {creators.map((creator, i) => (
                            <SwiperSlide key={i}>
                                <div className="flex flex-col h-full group/card cursor-grab active:cursor-grabbing">
                                    <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 relative bg-secondary/20 border border-border/50 shadow-sm transition-transform duration-500 group-hover/card:scale-[1.02]">
                                        <img
                                            src={creator.image}
                                            alt={creator.title}
                                            className="w-full h-full object-cover opacity-90 mix-blend-multiply transition-transform duration-700 group-hover/card:scale-110"
                                        />
                                        {/* Stylized Overlay inspired by the screenshot's color profile */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-espresso/40 via-transparent to-tan/20 pointer-events-none opacity-60 group-hover/card:opacity-40 transition-opacity"></div>
                                    </div>
                                    <div className="px-2">
                                        <h3 className="text-xl font-bold text-foreground mb-3">{creator.title}</h3>
                                        <p className="text-foreground/60 text-sm leading-relaxed font-medium">
                                            {creator.desc}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Nav buttons visible on hover on large screens */}
                    <div className="hidden lg:block">
                        {/* Swiper adds 'swiper-button-next/prev' classes by default if Navigation module is used */}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .swiper-pagination-bullet {
                    background: var(--espresso);
                    opacity: 0.2;
                }
                .swiper-pagination-bullet-active {
                    opacity: 1;
                    background: var(--espresso);
                }
            `}} />
        </section>
    );
};

export default StudioCreatorShowcase;
