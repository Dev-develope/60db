const CustomerSupportHumanInteraction = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                            Make interactions feel human
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                            Make engaging with your applications feel as natural as speaking to a person with our natural voices and low latency models
                        </p>
                    </div>

                    {/* Right Visual - Rabbit Case Study */}
                    <div className="relative">
                        <div className="bg-[#FFF5F3] rounded-[2rem] p-12 aspect-square relative flex flex-col justify-between overflow-hidden">
                            {/* Gradient overlay/background effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>

                            <div className="relative z-10">
                                <span className="text-xs font-bold tracking-widest uppercase text-gray-900/60">
                                    Customer Stories
                                </span>
                            </div>

                            <div className="relative z-10 flex-1 flex items-center justify-center">
                                {/* Rabbit Logo Placeholder */}
                                <div className="text-4xl font-semibold tracking-tighter flex items-center gap-2 text-gray-900">
                                    rabbit<span className="text-orange-500 text-xs align-top">™</span>
                                </div>
                            </div>

                            <div className="relative z-10">
                                <p className="text-2xl font-medium text-gray-900 leading-tight">
                                    ElevenLabs gives lifelike voice to rabbit's r1 device
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 text-sm font-medium text-gray-900">
                            Rabbit
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerSupportHumanInteraction;
