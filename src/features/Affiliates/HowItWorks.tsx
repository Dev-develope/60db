const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Share",
      description:
        "Create content with your unique affiliate link on your channels. You'll have access to promotional best practices, guides, and more.",
      icon: "🔗",
    },
    {
      number: "2",
      title: "Subscribe",
      description:
        "With our intuitive dashboard, you can easily track the resonance of your message and 60db.ai purchases.",
      icon: "📈",
    },
    {
      number: "3",
      title: "Earn",
      description:
        "You will receive 22% of all payments from referrals for the first year of the subscription.",
      icon: "💵",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Start earning in 3 easy steps
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="space-y-6 text-center">
              {/* Icon Circle */}
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <span className="text-4xl">{step.icon}</span>
                </div>
              </div>

              {/* Step Number */}
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="font-bold text-primary">Step {step.number}</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
