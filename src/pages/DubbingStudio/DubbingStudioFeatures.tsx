import { Layout, Languages, Wand2, Mic2 } from "lucide-react";

const features = [
    {
        icon: Layout,
        title: "Video transcript and translation editing",
        description: "Fine-tune your content with our advanced editor. Modify translations to capture the right nuance and timing perfectly."
    },
    {
        icon: Mic2,
        title: "Automatic speaker detection",
        description: "Our system intelligently identifies multiple speakers in a video and assigns distinct voices to each one automatically."
    },
    {
        icon: Wand2,
        title: "Dubbing with original voices",
        description: "Preserve the identity of the original speakers. Our technology clones the original voice while speaking the target language."
    },
    {
        icon: Languages,
        title: "29 Languages Supported",
        description: "From English and Spanish to Japanese and Hindi, reach a truly global audience with high-quality localization."
    }
];

const DubbingStudioFeatures = () => {
    return (
        <section className="py-24 bg-card border-y border-border/50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <h2 className="text-4xl font-bold text-foreground font-serif mb-6 leading-tight">
                            Complete control over your dubbing workflow
                        </h2>
                        <p className="text-muted-foreground text-lg mb-12">
                            The Dubbing Studio gives you granular control to ensure your localized content meets professional standards.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {features.map((feature, idx) => (
                                <div key={idx} className="space-y-3">
                                    <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center shadow-sm text-foreground">
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-foreground text-lg">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Visual - Editor Abstract */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-[40px] blur-2xl" />
                        <div className="bg-background rounded-[32px] border border-border shadow-2xl overflow-hidden relative min-h-[500px] flex flex-col">
                            {/* Header */}
                            <div className="h-12 border-b border-border flex items-center px-4 gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                                </div>
                                <div className="mx-auto text-xs font-medium text-muted-foreground">Studio Editor - Project_Global.mp4</div>
                            </div>

                            {/* Editor Content Area */}
                            <div className="flex-1 p-6 flex flex-col gap-6">
                                {/* Video Preview Area */}
                                <div className="flex gap-4 h-48">
                                    <div className="flex-1 bg-black/5 rounded-lg border border-border overflow-hidden relative">
                                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-bold tracking-widest uppercase">Original</div>
                                    </div>
                                    <div className="flex-1 bg-black/5 rounded-lg border border-border overflow-hidden relative">
                                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-bold tracking-widest uppercase">Dubbed</div>
                                    </div>
                                </div>

                                {/* Tracks */}
                                <div className="space-y-3">
                                    {/* Track 1 */}
                                    <div className="bg-muted/30 rounded-lg p-2 border border-border/50">
                                        <div className="flex justify-between text-xs mb-1 px-1">
                                            <span className="font-medium text-foreground">Speaker A (Original)</span>
                                        </div>
                                        <div className="h-8 bg-indigo-500/20 rounded relative overflow-hidden">
                                            <svg className="absolute inset-0 w-full h-full text-indigo-500" preserveAspectRatio="none">
                                                <path d="M0,15 Q5,5 10,15 T20,15 T30,10 T40,20 V32 H0 Z" fill="currentColor" />
                                                <path d="M50,15 Q55,25 60,15 T70,15 T80,5 T90,15 V32 H50 Z" fill="currentColor" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Track 2 */}
                                    <div className="bg-muted/30 rounded-lg p-2 border border-border/50">
                                        <div className="flex justify-between text-xs mb-1 px-1">
                                            <span className="font-medium text-foreground">Speaker A (Spanish)</span>
                                            <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">Synced</span>
                                        </div>
                                        <div className="h-8 bg-green-500/20 rounded relative overflow-hidden">
                                            <svg className="absolute inset-0 w-full h-full text-green-500" preserveAspectRatio="none">
                                                <path d="M0,15 Q5,10 10,15 T20,20 T30,10 T40,20 V32 H0 Z" fill="currentColor" />
                                                <path d="M52,15 Q57,25 62,15 T72,15 T82,8 T92,15 V32 H52 Z" fill="currentColor" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Translation Edit Box */}
                                    <div className="bg-background border border-indigo-500/30 rounded-lg p-3 shadow-sm mt-2 relative">
                                        <div className="absolute -top-1.5 left-4 w-3 h-3 bg-background border-t border-l border-indigo-500/30 rotate-45" />
                                        <div className="text-xs text-muted-foreground mb-1 font-medium">Spanish Translation</div>
                                        <div className="text-sm text-foreground">Hola, bienvenidos a nuestro canal. Hoy vamos a explorar...</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DubbingStudioFeatures;
