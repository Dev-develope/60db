import { Button } from "@/components/ui/button";

const CreativePlatformSection = () => {
    return (
        <section className="py-20 lg:py-32 bg-background font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-7xl mx-auto">
                    {/* Left Column: Heading and Buttons */}
                    <div className="space-y-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1]">
                            The AI creative platform to <br />
                            bring your content to life
                        </h1>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <Button className="rounded-full px-8 py-6 text-base font-medium bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors">
                                Sign up
                            </Button>
                            <Button variant="outline" className="rounded-full px-8 py-6 text-base font-medium border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                Contact sales
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Description */}
                    <div className="lg:pt-4">
                        <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
                            A single platform to generate, edit, and localize premium audio and video in minutes. Powering millions of creators, marketing teams, and media companies worldwide.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreativePlatformSection;
