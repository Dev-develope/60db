import React from 'react';

const LOGOS = [
    { name: "twilio", src: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg" }, // Using generic or text if SVG fails
    { name: "lovable", text: "♥ Lovable" },
    { name: "jamie", text: "Jamie" },
    { name: "cars24", text: "CARS24" },
    { name: "fieldy", text: "FIELDY" },
];

const LogoCarousel = () => {
    return (
        <section className="py-12 border-y border-border overflow-hidden bg-background">
            <div className="container mx-auto px-6 mb-8 text-center md:text-left">
                <p className="text-sm text-muted font-medium">Trusted by innovative teams</p>
            </div>

            <div className="relative">
                {/* Gradient Masks for smooth fade */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

                <div className="flex w-full overflow-hidden">
                    <div className="flex animate-marquee gap-16 md:gap-32 min-w-full items-center">
                        {/* Double the logos to create seamless loop */}
                        {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
                            <div key={index} className="flex-shrink-0 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                                {logo.src ? (
                                    <img src={logo.src} alt={logo.name} className="h-8 md:h-10 w-auto object-contain" />
                                ) : (
                                    <span className="text-xl md:text-2xl font-bold font-serif text-foreground">{logo.text}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoCarousel;
