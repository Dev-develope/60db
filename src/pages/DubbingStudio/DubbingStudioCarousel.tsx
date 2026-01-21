import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const cases = [
    {
        id: 1,
        title: "AI and Anime: Nik Shaw's Journey with ElevenLabs",
        category: "Creator Stories",
        image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=600&auto=format&fit=crop",
        color: "bg-yellow-400"
    },
    {
        id: 2,
        title: "Never too small - ElevenLabs fuels global reach",
        category: "Business Scale",
        image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=600&auto=format&fit=crop",
        color: "bg-green-800"
    },
    {
        id: 3,
        title: "Revolutionizing Education with Multilingual Content",
        category: "Education",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
        color: "bg-blue-600"
    }
];

const DubbingStudioCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % cases.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + cases.length) % cases.length);
    };

    return (
        <section className="py-24 bg-[#111111] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight">
                        See how creators and businesses <br />
                        are leveraging AI speech narration
                    </h2>
                </div>

                <div className="relative flex items-center justify-center min-h-[400px]">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 md:left-0 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 md:right-0 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm transition-colors"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Carousel Container */}
                    <div className="flex items-center justify-center gap-8 perspective-1000">
                        <AnimatePresence mode="popLayout">
                            {cases.map((item, index) => {
                                // Simple circular logic for only 3 items to show "active" in center
                                // In a real infinite carousel with many items, logic would be more complex.
                                // For 3 items: 
                                // If active is 0: show 2(left), 0(center), 1(right)
                                // If active is 1: show 0(left), 1(center), 2(right)
                                // If active is 2: show 1(left), 2(center), 0(right)

                                let position = "center";
                                if (index === activeIndex) position = "center";
                                else if (index === (activeIndex - 1 + cases.length) % cases.length) position = "left";
                                else if (index === (activeIndex + 1) % cases.length) position = "right";
                                else position = "hidden";

                                if (position === "hidden") return null;

                                return (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{
                                            opacity: position === "center" ? 1 : 0.4,
                                            scale: position === "center" ? 1 : 0.8,
                                            x: position === "center" ? 0 : position === "left" ? "-50%" : "50%",
                                            zIndex: position === "center" ? 10 : 0
                                        }}
                                        transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
                                        className={`relative w-[300px] md:w-[500px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 cursor-pointer ${position !== "center" ? "pointer-events-none grayscale" : ""}`}
                                        onClick={() => position === "center" ? null : position === "left" ? prevSlide() : nextSlide()}
                                    >
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/20" />

                                        {/* Content Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent pt-20 text-left">
                                            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-3 uppercase tracking-wider">
                                                {item.category}
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold leading-tight mb-2">
                                                {item.title}
                                            </h3>
                                            {position === "center" && (
                                                <div className="mt-4 flex items-center text-sm font-bold text-white/80 group">
                                                    Watch Story <Play className="w-3 h-3 ml-2 fill-current" />
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DubbingStudioCarousel;
