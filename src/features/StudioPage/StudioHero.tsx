import React from 'react';

const StudioHero = () => {
    return (
        <section className="py-20 md:py-32 bg-transparent">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 max-w-7xl mx-auto">
                    {/* Left Side */}
                    <div className="flex-1 max-w-2xl">
                        <h1 className="text-4xl md:text-7xl font-bold text-foreground leading-[1.05] mb-8 tracking-tight">
                            The best AI audio models in one powerful editor
                        </h1>
                        <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-base hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg">
                            Try Studio for free
                        </button>
                    </div>

                    {/* Right Side */}
                    <div className="md:w-1/3 mt-4 md:mt-12">
                        <p className="text-foreground/70 text-sm md:text-base leading-relaxed font-medium">
                            Built for video creators, podcasters and audiobook authors — bring your stories to life with expressive AI voiceovers, music and sound effects, and real-world recordings.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudioHero;
