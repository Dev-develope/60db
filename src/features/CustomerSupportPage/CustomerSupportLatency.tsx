import { Zap } from "lucide-react";

const CustomerSupportLatency = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                            Ultra low latency
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                            Our fastest models ensure you can spend less time stuck in thought and more time moving the conversation forward
                        </p>
                    </div>

                    {/* Right Visual - Latency Card */}
                    <div className="relative">
                        <div className="bg-white border border-border/50 rounded-[2rem] p-8 md:p-12 shadow-sm aspect-square relative flex flex-col justify-between overflow-hidden">

                            <div className="relative z-10 flex items-center gap-2">
                                <span className="text-2xl font-bold tracking-tight text-foreground">
                                    II Turbo
                                </span>
                                <span className="px-2 py-0.5 rounded-full border border-foreground text-xs font-bold">
                                    v2
                                </span>
                            </div>

                            <div className="relative z-10 flex-1 flex items-center justify-center my-8">
                                {/* Wave Visual Placeholder */}
                                <div className="w-full h-32 relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 opacity-80"
                                        style={{
                                            clipPath: 'polygon(0% 40%, 15% 45%, 30% 60%, 45% 40%, 60% 30%, 75% 45%, 90% 60%, 100% 50%, 100% 100%, 0% 100%)'
                                        }}>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 opacity-60 transform translate-y-4"
                                        style={{
                                            clipPath: 'polygon(0% 60%, 20% 50%, 40% 65%, 60% 45%, 80% 60%, 100% 40%, 100% 100%, 0% 100%)'
                                        }}>
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10 flex flex-wrap gap-3">
                                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100">
                                    <span className="text-lg">🇺🇸</span>
                                    <span className="text-sm font-semibold text-gray-700">English</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100">
                                    <span className="text-sm font-semibold text-gray-700">ultra low latency</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerSupportLatency;
