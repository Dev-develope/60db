const SoundEffectsSection = () => {
  const features = [
    {
      title: "Instant generation",
      description: "Start generating and get four samples within seconds",
      icon: "⚡",
    },
    {
      title: "Precise control",
      description:
        "Add nuance to your sound effects through precise text prompts",
      icon: "🎯",
    },
    {
      title: "Royalty free",
      description:
        "Use our sound effects in your projects with no licensing fees",
      icon: "✓",
    },
    {
      title: "Highest quality audio",
      description:
        "Enjoy clear, high-fidelity sound that enhances your projects",
      icon: "🔊",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-2 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Create distinctive sound effects with a prompt
          </h2>
          <p className="text-muted-foreground">
            Generate professional sound effects using simple text descriptions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-border bg-background hover:bg-secondary/50 transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoundEffectsSection;
