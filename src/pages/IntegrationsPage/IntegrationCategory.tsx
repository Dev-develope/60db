import { ArrowRight } from "lucide-react";

interface Integration {
    name: string;
    description: string;
    icon?: string;
}

interface IntegrationCategoryProps {
    id: string;
    title: string;
    description: string;
    integrations: Integration[];
}

const IntegrationCategory = ({ id, title, description, integrations }: IntegrationCategoryProps) => {
    return (
        <section id={id} className="py-16 scroll-mt-20">
            <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-3">
                    {title}
                </h2>
                <p className="text-muted text-base md:text-lg max-w-3xl">
                    {description}
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {integrations.map((integration, index) => (
                    <div
                        key={index}
                        className="group bg-card border border-border rounded-xl p-6 hover:shadow-card transition-all cursor-pointer"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                                {integration.icon ? (
                                    <span className="text-2xl">{integration.icon}</span>
                                ) : (
                                    <span className="text-lg font-semibold text-foreground">
                                        {integration.name.charAt(0)}
                                    </span>
                                )}
                            </div>
                            <ArrowRight className="h-5 w-5 text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                            {integration.name}
                        </h3>
                        <p className="text-sm text-muted line-clamp-2">
                            {integration.description}
                        </p>
                    </div>
                ))}
            </div>
        </section >
    );
};

export default IntegrationCategory;
