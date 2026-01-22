const CollaborateSection = () => {
  const steps = [
    {
      number: "1",
      title: "Explore",
      description:
        "Browse our collection of iconic voice likenesses and find the perfect voice for your project",
      icon: "🔍",
    },
    {
      number: "2",
      title: "License",
      description:
        "Select your licensing tier based on your project type and usage requirements",
      icon: "📋",
    },
    {
      number: "3",
      title: "Create",
      description:
        "Integrate the voice into your project and bring your creative vision to life",
      icon: "✨",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Tell your story and collaborate with an icon
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Getting started is easy. Follow these simple steps to license and use
          iconic voices
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center space-y-4">
              <div className="text-5xl">{step.icon}</div>
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-primary font-bold">
                  Step {step.number}
                </span>
              </div>
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;
