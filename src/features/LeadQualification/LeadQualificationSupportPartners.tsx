const LeadQualificationSupportPartners = () => {
    const partners = [
        {
            text: "Powering voices for your personal AI-avatar tutor",
            logo: "praktika.ai",
            color: "text-blue-600"
        },
        {
            text: "Speaking to your general curiosity",
            logo: "perplexity",
            color: "text-teal-600"
        },
        {
            text: "One on one chess coaching for every level",
            logo: "Chess.com",
            color: "text-green-600"
        },
        {
            text: "Creating engaging and helpful customer service",
            logo: "PolyAI",
            color: "text-indigo-600"
        }
    ];

    return (
        <section className="py-16 bg-background border-b border-border/50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid md:grid-cols-4 gap-12 text-left">
                    {partners.map((partner, index) => (
                        <div key={index} className="space-y-4">
                            <p className="text-sm font-medium text-muted-foreground leading-relaxed max-w-[200px]">
                                {partner.text.split(' ').map((word, i) => {
                                    const boldWords = ['your', 'personal', 'AI-avatar', 'tutor', 'general', 'curiosity', 'chess', 'coaching', 'customer', 'service'];
                                    return boldWords.includes(word.replace(/[^a-zA-Z-]/g, '')) ? (
                                        <span key={i} className="text-foreground font-semibold">{word} </span>
                                    ) : (
                                        <span key={i}>{word} </span>
                                    );
                                })}
                            </p>

                            {/* Logo Placeholder - In a real app, these would be SVGs */}
                            <div className={`text-2xl font-bold ${partner.color} flex items-center gap-2`}>
                                {/* Simple icon placeholders for the visual effect */}
                                {index === 0 && <span className="text-xl">💬</span>}
                                {index === 1 && <span className="text-xl">❄️</span>}
                                {index === 2 && <span className="text-xl">♟️</span>}
                                {index === 3 && <span className="text-xl">⚡</span>}
                                {partner.logo}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeadQualificationSupportPartners;
