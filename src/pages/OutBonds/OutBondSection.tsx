import { LucideIcon } from "lucide-react";

interface Feature {
    title: string;
    description: string;
}

interface TelecomFeatureSectionProps {
    title: string;
    icon: LucideIcon;
    features: Feature[];
    bgColor?: string;
    showVisual?: boolean;
}

const OutBondFeatureSection = ({
    title,
    icon: Icon,
    features,
    bgColor = "bg-background",
    showVisual = false
}: TelecomFeatureSectionProps) => {
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
                        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
                            <div className="space-y-4 w-full max-w-md">
                                {/* Chat bubble 1 */}
                                <div className="bg-white rounded-2xl p-4 shadow-lg ml-auto max-w-xs">
                                    <div className="flex items-start gap-2 mb-2">
                                        <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                                        <span className="text-xs font-medium text-gray-600">Start</span>
                                    </div>
                                    <p className="text-sm text-gray-700">
                                        Welcome! Is there anything I can help you with today?
                                    </p>
                                </div>

                                {/* Info text */}
                                <div className="text-center">
                                    <p className="text-xs text-white/70">Asks for human agent</p>
                                </div>

                                {/* Chat bubble 2 */}
                                <div className="bg-white rounded-2xl p-4 shadow-lg mr-auto max-w-xs">
                                    <div className="mb-2">
                                        <span className="text-xs font-medium text-gray-600">Transfer to Human</span>
                                    </div>
                                    <p className="text-sm text-gray-700">
                                        Reiterate to the customer that you need their details in order...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // Original grid layout
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

export default OutBondFeatureSection;
