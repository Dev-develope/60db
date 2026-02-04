const VoiceDataWantSection = () => {
  const voiceDataTypes = [
    {
      title: "Conversations",
      description: "Natural conversations from any setting",
      icon: "💬",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
      color:
        "from-blue-500/10 to-blue-400/5 border-blue-200 dark:border-blue-900",
    },
    {
      title: "Narratives",
      description: "Book readings, storytelling, or long-form content",
      icon: "📖",
      image:
        "https://images.unsplash.com/photo-1507238691621-bada96a03951?w=400&h=300&fit=crop",
      color:
        "from-teal-500/10 to-teal-400/5 border-teal-200 dark:border-teal-900",
    },
    {
      title: "Unique Characters",
      description: "Distinctive voices with specific accents or styles",
      icon: "🎭",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f70a504f9?w=400&h=300&fit=crop",
      color:
        "from-amber-500/10 to-amber-400/5 border-amber-200 dark:border-amber-900",
    },
    {
      title: "News Reporting",
      description: "Professional news and reporting voice data",
      icon: "📰",
      image:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop",
      color:
        "from-purple-500/10 to-purple-400/5 border-purple-200 dark:border-purple-900",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-2 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Voice Data Do We Want?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're looking for diverse voice data across multiple categories
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {voiceDataTypes.map((type, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg border bg-gradient-to-br ${type.color} backdrop-blur-sm transition-all hover:shadow-lg hover:scale-105`}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 space-y-3">
                <div className="text-4xl">{type.icon}</div>
                <h3 className="text-2xl font-bold">{type.title}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-lg border border-border bg-secondary/30 space-y-4">
          <h3 className="text-xl font-semibold">Quality Requirements</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-sm">
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Clear audio with minimal background noise</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Native or highly fluent speaker of the language</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Consistent recording environment and quality</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Diverse phrases and intonations</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VoiceDataWantSection;
