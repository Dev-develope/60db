import { Globe, ShieldCheck, Box, Award, CheckCircle2, Lock, FileKey, Headphones } from "lucide-react";

const EnterpriseSecuritySection = () => {
    const securityFeatures = [
        {
            icon: Lock,
            title: "Secure & compliant",
            description: "SOC 2-compliant, single sign-on, audit logs and Master Service Agreement support ensure governance and peace of mind.",
            active: true,
        },
        {
            icon: ShieldCheck,
            title: "Broader commercial rights and IP protection",
            description: "Full ownership of your generated content and comprehensive IP indemnification.",
            active: false,
        },
        {
            icon: Headphones,
            title: "Audio engineering & training",
            description: "Expert support for custom voice modeling and audio infrastructure.",
            active: false,
        },
        {
            icon: FileKey,
            title: "Managed services and professional support",
            description: "Dedicated account management and 24/7 technical support for enterprise needs.",
            active: false,
        },
    ];

    const gridItems = [
        { icon: Globe, label: "Data Residency options" },
        { icon: ShieldCheck, label: "HIPAA attestation" },
        { icon: Box, label: "Zero Retention mode" },
        { icon: Award, label: "SOC 2 Type II, ISO 27001" },
    ];

    return (
        <section className="py-20 bg-background font-sans relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

                {/* Section Title */}
                <div className="mb-16 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight leading-[1.1]">
                        Enterprise-grade security and infrastructure at scale
                    </h2>
                </div>

                {/* Main Content Grid with Borders */}
                <div className="relative border-t border-border">
                    {/* Top Dot */}
                    <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-foreground rounded-full -translate-x-[2px] -translate-y-1/2 z-10"></div>
                    <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-foreground rounded-full translate-x-[2px] -translate-y-1/2 z-10"></div>
                    {/* Middle Dot (Desktop) */}
                    <div className="hidden lg:block absolute top-0 left-[40%] w-1.5 h-1.5 bg-foreground rounded-full -translate-x-1/2 -translate-y-1/2 z-10"></div>


                    <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[500px]">

                        {/* Left Column: Feature List */}
                        <div className="lg:col-span-2 py-10 lg:pr-10 lg:border-r border-border relative">
                            <div className="space-y-8">
                                {securityFeatures.map((feature, idx) => (
                                    <div key={idx} className={`group cursor-pointer transition-all duration-300 ${feature.active ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}>
                                        <div className="flex items-start gap-4">
                                            <feature.icon className={`w-5 h-5 mt-1 ${feature.active ? 'text-primary' : 'text-muted-foreground'}`} />
                                            <div>
                                                <h3 className="text-lg font-medium text-foreground mb-2">{feature.title}</h3>
                                                {feature.active && (
                                                    <p className="text-sm text-muted-foreground leading-relaxed animate-fade-in">
                                                        {feature.description}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Grid Icons */}
                        <div className="lg:col-span-3 grid grid-cols-2">
                            {gridItems.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`
                        relative flex flex-col items-center justify-center p-10 text-center gap-6
                        ${idx === 0 || idx === 1 ? 'border-b' : ''} border-border
                        ${idx % 2 === 0 ? 'border-r' : ''} border-border
                      `}
                                >
                                    <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mb-2">
                                        <item.icon className="w-8 h-8 text-foreground stroke-[1.5]" />
                                    </div>
                                    <span className="text-sm font-medium text-muted-foreground font-mono uppercase tracking-wider">
                                        {item.label}
                                    </span>

                                    {/* Corner Dots for inner grid items */}
                                    <div className="absolute top-0 right-0 w-1 h-1 bg-border rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                    <div className="absolute bottom-0 left-0 w-1 h-1 bg-border rounded-full translate-y-1/2 -translate-x-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Border */}
                    <div className="absolute bottom-0 left-0 w-full h-px bg-border"></div>
                    {/* Bottom Dots */}
                    <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-foreground rounded-full -translate-x-[2px] translate-y-1/2 z-10"></div>
                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-foreground rounded-full translate-x-[2px] translate-y-1/2 z-10"></div>
                    <div className="hidden lg:block absolute bottom-0 left-[40%] w-1.5 h-1.5 bg-foreground rounded-full -translate-x-1/2 translate-y-1/2 z-10"></div>
                </div>
            </div>
        </section>
    );
};

export default EnterpriseSecuritySection;
