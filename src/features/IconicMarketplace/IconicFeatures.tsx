const IconicFeatures = () => {
  const features = [
    {
      title: "Iconic Figures",
      description:
        "Access voices of legendary performers, historical figures, and cultural icons. Each voice is carefully licensed and verified for authenticity.",
      icon: "⭐",
    },
    {
      title: "Commercial Usage Rights",
      description:
        "Get full commercial licensing rights for your projects. Use iconic voices in films, music, podcasts, games, and commercial applications.",
      icon: "💼",
    },
    {
      title: "Unlimited Creative Possibilities",
      description:
        "Create authentic content across any medium. From interactive experiences to streaming content, the possibilities are endless.",
      icon: "🎨",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Why Choose 60db.ai Iconic Marketplace?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-border bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconicFeatures;
