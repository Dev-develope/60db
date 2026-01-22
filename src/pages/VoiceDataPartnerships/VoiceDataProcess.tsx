const VoiceDataProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Submit Interest",
      description:
        "Tell us about your voice data and why you'd like to share it with 60db.ai",
      icon: "📋",
    },
    {
      number: "2",
      title: "Share Samples",
      description:
        "If it's a good fit, we'll ask for voice samples and recordings",
      icon: "🎙️",
    },
    {
      number: "3",
      title: "Choose Permissions",
      description:
        "Decide how your voice can be used - training models or fine-tuning",
      icon: "✅",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-2 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Simple 3-Step Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started is easy. Here's how voice data partnerships work
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              {/* Circle number badge */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-white font-bold text-2xl">
                  {step.number}
                </div>
              </div>

              {/* Icon emoji */}
              <div className="text-5xl mb-4">{step.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>

              {/* Connecting line - only show between items on desktop */}
              {step.number !== "3" && (
                <div className="hidden md:block absolute right-0 top-8 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-y-1/2 translate-x-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoiceDataProcess;
