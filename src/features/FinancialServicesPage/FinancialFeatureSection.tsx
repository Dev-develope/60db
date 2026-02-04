import { LucideIcon } from "lucide-react";

interface Feature {
    title: string;
    description: string;
}

interface FinancialFeatureSectionProps {
    title: string;
    icon: LucideIcon;
    features: Feature[];
    bgColor?: string;
    showVisual?: boolean;
}

const FinancialFeatureSection = ({
    title,
    icon: Icon,
    features,
    bgColor = "bg-background",
    showVisual = false
}: FinancialFeatureSectionProps) => {
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
                        <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
                            {/* Placeholder visual - we can customize this later based on specific section type if needed */}
                            <div className="bg-white/90 backdrop-blur rounded-xl p-6 shadow-xl w-full max-w-sm">
                                <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
                                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Financial Agent</div>
                                        <div className="text-xs text-green-600 flex items-center gap-1">
                                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                            Active now
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
                                        Checking account balance...
                                    </div>
                                    <div className="bg-emerald-50 rounded-lg p-3 text-sm text-gray-800 border border-emerald-100">
                                        Your current balance is $12,450.50. Would you like to review recent transactions?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // Original grid layout (fallback if needed, though plan is to use visual layout)
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

export default FinancialFeatureSection;
