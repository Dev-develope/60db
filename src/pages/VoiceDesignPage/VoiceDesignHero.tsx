import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, SkipForward, SkipBack, Volume2, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data for the diverse characters/backgrounds
const SCENES = [
    {
        id: 1,
        type: "image",
        src: "https://images.unsplash.com/photo-1633511090164-843818e54dc7?q=80&w=2560&auto=format&fit=crop", // Alien/Creature vibes
        alt: "Alien character",
        prompt: "A funny alien from outer space with a ludicrous and annoying voice that always slightly gargles in a silly high-pitch tone.",
        previewText: "Greetings, earthlings. I must say your voice models are out of this world!",
        color: "from-blue-900/80 via-transparent to-black"
    },
    {
        id: 2,
        type: "image",
        src: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=2560&auto=format&fit=crop", // Wise person/wizard vibe
        alt: "Ethereal character",
        prompt: "An elderly wise narrator with a deep, soothing, and resonant voice that commands attention and tells ancient stories.",
        previewText: "Long ago, before the mountains were formed, the stars danced in the sky...",
        color: "from-purple-900/80 via-transparent to-black"
    },
    {
        id: 3,
        type: "image",
        src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2560&auto=format&fit=crop", // Futurist/Cyberpunk
        alt: "Cyberpunk character",
        prompt: "A gritty cyberpunk mercenary with a rough, digitized voice and a slight mechanical stutter.",
        previewText: "System breach detected. Uploading countermeasures. Stay out of my way.",
        color: "from-red-900/80 via-transparent to-black"
    }
];

const VoiceDesignHero = () => {
    const [activeSceneIndex, setActiveSceneIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(30);

    const activeScene = SCENES[activeSceneIndex];

    const handleNext = () => {
        setActiveSceneIndex((prev) => (prev + 1) % SCENES.length);
    };

    const handlePrev = () => {
        setActiveSceneIndex((prev) => (prev - 1 + SCENES.length) % SCENES.length);
    };

    const handleBackgroundClick = (e: React.MouseEvent) => {
        // Only switch if clicking the background directly, not interactive elements
        if ((e.target as HTMLElement).tagName === "DIV" || (e.target as HTMLElement).tagName === "IMG") {
            handleNext();
        }
    };

    return (
        <div
            className="relative w-full h-screen overflow-hidden bg-black text-white font-sans selection:bg-white/20"
            onClick={handleBackgroundClick}
        >
            {/* Background Layer - Swaps based on state */}
            <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
                {SCENES.map((scene, index) => (
                    <div
                        key={scene.id}
                        className={cn(
                            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
                            index === activeSceneIndex ? "opacity-100" : "opacity-0"
                        )}
                    >
                        {/* Gradient Overlay for text readability */}
                        <div className={cn("absolute inset-0 bg-gradient-to-r z-10", scene.color)} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-90" />

                        <img
                            src={scene.src}
                            alt={scene.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Main Content Overlay */}
            <div className="relative z-20 container mx-auto h-full flex flex-col justify-end pb-24 px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">

                    {/* Left Column: Headings & CTA */}
                    <div className="space-y-6 max-w-2xl lg:pb-12">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] animate-in slide-in-from-bottom-5 fade-in duration-700">
                            Generate any AI voice you can imagine using just a text prompt
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-300 font-medium max-w-xl animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100">
                            Customise the tone, accent, age, pacing, and delivery of your voices to create infinite characters with expressive delivery.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 pt-4 animate-in slide-in-from-bottom-7 fade-in duration-700 delay-200">
                            <Button className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6 text-sm font-bold tracking-wide uppercase">
                                Design a Voice
                            </Button>
                            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm rounded-full px-8 py-6 text-sm font-bold tracking-wide uppercase">
                                Watch Video
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Floating Cards */}
                    <div className="flex flex-col gap-4 relative animate-in slide-in-from-right-5 fade-in duration-700 delay-300">

                        {/* Audio Control Bar (Small, floating) */}
                        <div className="self-end mb-8 flex items-center gap-2">
                            <button onClick={handlePrev} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                                <SkipBack className="w-5 h-5 text-white/70" />
                            </button>
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                            >
                                {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
                            </button>
                            <button onClick={handleNext} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                                <SkipForward className="w-5 h-5 text-white/70" />
                            </button>
                            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md ml-2">
                                <Volume2 className="w-4 h-4 text-white" />
                            </button>
                        </div>

                        {/* Prompt Card */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-full max-w-lg self-end shadow-2xl overflow-hidden group hover:bg-white/15 transition-all duration-300">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-bold uppercase tracking-wider text-white/60">Prompt</span>
                            </div>
                            <p className="text-lg font-medium leading-relaxed text-white/90 group-hover:text-white transition-colors">
                                {activeScene.prompt}
                            </p>
                        </div>

                        {/* Preview Card */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-full max-w-lg self-end shadow-2xl group hover:bg-white/15 transition-all duration-300 relative overflow-hidden">
                            {/* Progress Bar background */}
                            <div
                                className="absolute bottom-0 left-0 h-1 bg-white/20 w-full"
                            >
                                <div className="h-full bg-white/80 transition-all duration-300" style={{ width: `${progress}%` }} />
                            </div>

                            <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-bold uppercase tracking-wider text-white/60">Text to preview</span>
                            </div>
                            <p className="text-lg font-medium leading-relaxed text-white/90 group-hover:text-white transition-colors pb-2">
                                "{activeScene.previewText}"
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default VoiceDesignHero;
