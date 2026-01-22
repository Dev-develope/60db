import { Button } from "@/components/ui/button";

const AudioRealisticCTA = () => {
    return (
        <section className="py-16 md:py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground text-center md:text-left">
                        The most realistic audio AI platform
                    </h2>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Button
                            variant="outline"
                            className="rounded-full px-6 py-6 text-base font-medium border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                            Explore docs
                        </Button>
                        <Button
                            className="rounded-full px-6 py-6 text-base font-medium bg-black text-white hover:bg-gray-800 transition-colors"
                        >
                            Get API key
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AudioRealisticCTA;
