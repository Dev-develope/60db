import { MessageCircle } from "lucide-react";

const CustomerSupportConcurrency = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                            Concurrency that scales
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                            Scale your applications without limits. Handle peak traffic with concurrent processing, ensuring they run smoothly even under high demand
                        </p>
                    </div>

                    {/* Right Visual - Praktika Case Study */}
                    <div className="relative">
                        <div className="bg-[#F6F6F6] rounded-[2rem] p-12 aspect-square relative flex flex-col justify-between overflow-hidden">
                            {/* Gradient overlay/background effect - Silver/Gray for Praktika based on screenshot */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300"></div>

                            <div className="relative z-10">
                                <span className="bg-white/80 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase text-gray-900 border border-gray-200">
                                    Customer Stories
                                </span>
                            </div>

                            <div className="relative z-10 flex-1 flex items-center justify-center">
                                {/* Praktika Logo Placeholder - Purple Theme */}
                                <div className="flex items-center gap-3">
                                    <MessageCircle className="w-12 h-12 text-[#6C5CE7] fill-current" />
                                    <span className="text-5xl font-bold tracking-tight text-[#6C5CE7]">Praktika</span>
                                </div>
                            </div>

                            <div className="relative z-10">
                                <p className="text-2xl font-medium text-white leading-tight drop-shadow-md">
                                    Praktika Scales immersive language learning with ElevenLabs
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 text-sm font-medium text-gray-900">
                            Praktika AI
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerSupportConcurrency;
