
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const LatestUpdatesSection = () => {
    const updates = [
        {
            title: "Eleven Music: new tools for exploring, editing and producing music with AI",
            image: "linear-gradient(135deg, #c084fc 0%, #a855f7 100%)", // Purple/Pink gradient placeholder
            category: "IIElevenMusic",
            isGradient: true
        },
        {
            title: "Introducing Templates on the ElevenLabs Creative Platform",
            image: "bg-gray-100", // Placeholder for image
            category: "Templates", // This is implied from the text
            isGradient: false
        },
        {
            title: "Introducing ElevenLabs Image & Video",
            image: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)", // Blue gradient placeholder
            category: "Image & Video",
            isGradient: true
        }
    ];

    return (
        <section className="py-20 lg:py-32 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground">
                            Latest updates
                        </h2>
                        <Button variant="outline" className="rounded-full px-6 transition-colors">
                            All updates
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="group cursor-pointer">
                            <div className="aspect-square w-full rounded-2xl overflow-hidden mb-4 relative" style={{ background: 'linear-gradient(135deg, #B19BFC 0%, #D488CC 100%)' }}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white text-3xl font-bold tracking-tight opacity-90">IIElevenMusic</span>
                                </div>
                            </div>
                            <h3 className="text-sm font-medium text-foreground leading-snug">
                                Eleven Music: new tools for exploring, editing and producing music with AI
                            </h3>
                        </div>

                        {/* Card 2 */}
                        <div className="group cursor-pointer">
                            <div className="aspect-square w-full rounded-2xl overflow-hidden mb-4 bg-[#F5F5F3] relative flex items-center justify-center p-8">
                                {/* Abstract representation of the UI templates from the screenshot */}
                                <div className="w-full h-full relative">
                                    <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-white rounded-lg shadow-sm border border-gray-100 p-2 overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                                        <div className="w-full h-2/3 bg-gray-50 rounded mb-2"></div>
                                        <div className="w-1/2 h-2 bg-gray-100 rounded"></div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-white rounded-lg shadow-md border border-gray-200 z-10 overflow-hidden p-3 flex flex-col justify-center">
                                        <span className="text-4xl font-light tracking-tighter block mb-1">Templates</span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-sm font-medium text-foreground leading-snug">
                                Introducing Templates on the ElevenLabs Creative Platform
                            </h3>
                        </div>

                        {/* Card 3 */}
                        <div className="group cursor-pointer">
                            <div className="aspect-square w-full rounded-2xl overflow-hidden mb-4 relative" style={{ background: 'linear-gradient(135deg, #5356FF 0%, #378CE7 100%)' }}>
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                    <span className="text-4xl font-light">Image</span>
                                    <span className="text-4xl font-light">& Video</span>
                                </div>
                            </div>
                            <h3 className="text-sm font-medium text-foreground leading-snug">
                                Introducing ElevenLabs Image & Video
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestUpdatesSection;
