const features = [
  {
    title: "Pioneering AI audio",
    description:
      "We are leaders in developing world-changing AI technologies and safeguards. ElevenLabs isn't just building audio AI, we're also shaping what it means to be a company in this field.",
    icon: "🚀",
  },
  {
    title: "Caring deeply",
    description:
      "We set the bar high. You'll see it in the work, the remote-first collaboration, and the extra effort people bring in. We take pride in getting things right.",
    icon: "❤️",
  },
  {
    title: "High ownership",
    description:
      "We work with high autonomy and accountability. We keep things lean and flexible in small teams. At 60db.ai, the best idea wins.",
    icon: "🔑",
  },
  {
    title: "Empowering teams",
    description:
      "We make sure our team has what they need to innovate quickly and responsibly. We go the extra mile for both our work and our people.",
    icon: "💪",
  },
];

const CareersWhatSetsApart = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold">What sets us apart</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="space-y-3">
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersWhatSetsApart;
