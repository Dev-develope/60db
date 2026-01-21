const IntegrationsHero = () => {
    const categories = [
        { id: "automation", label: "Automation" },
        { id: "crm", label: "CRM" },
        { id: "customer_support_cx", label: "Customer Support & CX" },
        { id: "data_platform", label: "Data Platform" },
        { id: "llm", label: "Inference Provider" },
        { id: "payment", label: "Payment" },
        { id: "retail", label: "Retail" },
        { id: "scheduling_communication", label: "Scheduling & Communication" },
        { id: "telephony", label: "Telephony" },
    ];

    const scrollToCategory = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section className="pt-32 pb-16 px-4 bg-background">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6 text-foreground">
                        Integrations
                    </h1>
                    <p className="text-base md:text-lg text-muted max-w-3xl mx-auto mb-8">
                        Explore integrations that connect your Conversational Agent to a wide range of tools,
                        enabling it to execute complex workflows.
                    </p>
                </div>

                {/* Category Navigation */}
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => scrollToCategory(category.id)}
                            className="px-4 py-2 rounded-full border border-border bg-background hover:bg-secondary transition-colors text-sm font-medium text-foreground"
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IntegrationsHero;
