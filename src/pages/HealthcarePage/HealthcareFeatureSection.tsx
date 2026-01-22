import { LucideIcon } from "lucide-react";

interface Feature {
    title: string;
    description: string;
}

interface HealthcareFeatureSectionProps {
    title: string;
    icon: LucideIcon;
    features: Feature[];
    bgColor?: string;
    showVisual?: boolean;
}

const HealthcareFeatureSection = ({
    title,
    icon: Icon,
    features,
    bgColor = "bg-background",
    showVisual = false
}: HealthcareFeatureSectionProps) => {
    if (showVisual) {
        return (
            <section className={`py-20 ${bgColor}`}>
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Content */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Icon className="h-6 w-6 text-primary" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
                                    {title}
                                </h2>
                            </div>

                            <div className="space-y-6">
                                {features.map((feature, index) => (
                                    <div key={index}>
                                        <h3 className="text-lg font-semibold text-foreground mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-muted leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Visual */}
                        <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
                            {/* Placeholder visual - customization based on section context */}
                            <div className="bg-white/95 backdrop-blur rounded-xl p-6 shadow-xl w-full max-w-sm border border-white/20">
                                <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
                                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-teal-600" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Dr. Smith's Assistant</div>
                                        <div className="text-xs text-teal-600 flex items-center gap-1">
                                            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                                            Online
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-end">
                                        <div className="bg-teal-50 text-teal-900 rounded-2xl rounded-tr-none p-3 text-sm max-w-[85%]">
                                            I'd like to schedule an appointment for next Tuesday.
                                        </div>
                                    </div>
                                    <div className="flex justify-start">
                                        <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-tl-none p-3 text-sm max-w-[85%]">
                                            I can help with that. Is this for a routine check-up or a specific concern?
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <div className="bg-teal-50 text-teal-900 rounded-2xl rounded-tr-none p-3 text-sm max-w-[85%]">
                                            It's for a persistent headache perfectly.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={`py-20 ${bgColor}`}>
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex items-center gap-3 mb-12">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
                        {title}
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="space-y-3">
                            <h3 className="text-lg font-semibold text-foreground">
                                {feature.title}
                            </h3>
                            <p className="text-muted leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HealthcareFeatureSection;
