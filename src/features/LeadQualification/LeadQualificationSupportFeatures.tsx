import { Zap, Users, Activity } from "lucide-react";

const LeadQualificationSupportFeatures = () => {
    const features = [
        {
            icon: Users,
            title: "Make interactions feel human",
            description: "Make engaging with your applications feel as natural as speaking to a person with our natural voices and low latency models"
        },
        {
            icon: Activity,
            title: "Concurrency that scales",
            description: "Scale your applications without limits. Handle peak traffic with concurrent processing, ensuring they run smoothly even under high demand"
        },
        {
            icon: Zap,
            title: "Ultra low latency",
            description: "Our fastest models ensure you can spend less time stuck in thought and more time moving the conversation forward"
        }
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-2xl font-bold text-foreground tracking-tight">
                                {feature.title}
                            </h3>
                            <div className="h-1 w-12 bg-primary/20 rounded-full"></div>
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

export default LeadQualificationSupportFeatures;
