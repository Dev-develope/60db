import React from 'react';

const VoiceLibraryHero = () => {
    return (
        <section className="pt-32 pb-16 bg-background font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight">
                        Voice Library
                    </h1>
                    <div className="max-w-2xl">
                        <p className="text-foreground/70 text-lg md:text-xl leading-relaxed font-medium">
                            Discover the AI audio community where you can innovate, collaborate, and earn.
                            From audiobook narrators to unique characters and everything in between,
                            Voice Library has the best voices for your project
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VoiceLibraryHero;
