const AiReceptionistTopics = () => {
    const topics = [
        { label: "AI VOICE AGENTS", link: "/agents" },
        { label: "AI AGENTS", link: "/agents" },
    ];

    return (
        <section className="py-20 bg-background border-t border-border">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground text-center mb-8">
                    You might also be interested in
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {topics.map((topic, index) => (
                        <a
                            key={index}
                            href={topic.link}
                            className="px-6 py-3 rounded-full border border-border bg-background hover:bg-secondary transition-colors text-sm font-medium text-foreground"
                        >
                            {topic.label}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AiReceptionistTopics;
