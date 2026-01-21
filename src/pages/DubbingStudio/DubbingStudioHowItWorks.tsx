import { Upload, Wand2, Sliders, Download } from "lucide-react";

const steps = [
    {
        icon: Upload,
        title: "1. Upload your content",
        description: "Upload your video or audio file directly to the studio. We support MP4, MOV, MP3, and more."
    },
    {
        icon: Wand2,
        title: "2. AI Analysis",
        description: "Our AI automatically transcribes the audio, detects speakers, and translates the text to your target language."
    },
    {
        icon: Sliders,
        title: "3. Refine & Edit",
        description: "Use the timeline editor to adjust translations, timing, and assign specific voices to different speakers."
    },
    {
        icon: Download,
        title: "4. Download",
        description: "Export your localized content with the new dubbed audio track seamlessly integrated."
    }
];

const DubbingStudioHowItWorks = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 z-10 relative">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground font-serif mb-4">
                        How it works
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A simple, streamlined workflow to go from raw footage to fully localized content in minutes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative group">
                            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <step.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DubbingStudioHowItWorks;
