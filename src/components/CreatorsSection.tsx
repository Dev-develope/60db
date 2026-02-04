import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const creators = [
    {
        id: 1,
        name: "Michael Caine",
        description: "Create content faster with",
        highlight: "Voice Cloning",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
        id: 2,
        name: "Andrew Huberman",
        description: "Voice over your videos with",
        highlight: "Text to Speech",
        image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
        id: 3,
        name: "Arianna Huffington",
        description: "Create AI audiobooks with",
        highlight: "Studio",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
        id: 4,
        name: "Matthew McConaughey",
        description: "Translate your content with",
        highlight: "Dubbing",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
];

const CreatorsSection = () => {
    return (
        <section className="py-20 lg:py-32 bg-background border-t border-border">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-12 lg:mb-16">
                    Used by millions of the best creators
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
                    {creators.map((creator) => (
                        <div key={creator.id} className="group relative">
                            <div className="mb-4 h-12 text-sm md:text-base text-muted">
                                {creator.description}{" "}
                                <span className="font-semibold text-foreground block md:inline">
                                    {creator.highlight}
                                </span>
                            </div>

                            <div className="relative aspect-square overflow-hidden rounded-3xl bg-secondary mb-4">
                                <img
                                    src={creator.image}
                                    alt={creator.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />

                                {/* Gradient overlay for text readability if needed, though design seems clean */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full overflow-hidden bg-muted">
                                    <img
                                        src={creator.image}
                                        alt={creator.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="font-semibold text-foreground text-sm">
                                    {creator.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                    <Button variant="secondary" className="rounded-full px-6 bg-secondary/80 hover:bg-secondary text-secondary-foreground font-semibold" asChild>
                        <Link href={process.env.NEXT_PUBLIC_AUTH_URL || "https://qlabsui.netlify.app/"}>
                            GET STARTED
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CreatorsSection;
