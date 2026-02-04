import { LucideIcon } from "lucide-react";

interface TrustFeatureCardProps {
    id?: string;
    icon: LucideIcon;
    title: string;
    description: string;
}

const TrustFeatureCard = ({ id, icon: Icon, title, description }: TrustFeatureCardProps) => {
    return (
        <div id={id} className="bg-card border border-border rounded-xl p-8 hover:shadow-card transition-all scroll-mt-20">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
                {title}
            </h3>
            <p className="text-muted leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default TrustFeatureCard;
