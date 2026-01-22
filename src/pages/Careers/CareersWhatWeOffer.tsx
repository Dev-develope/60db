const benefits = [
  {
    title: "A truly global team",
    description:
      "Our diverse team spans 30+ countries with hubs in New York, London, and Warsaw, fostering a rich blend of cultural perspectives.",
    icon: "🌍",
  },
  {
    title: "High velocity innovation",
    description:
      "We embrace rapid experimentation and lean team structures, empowering individuals to make meaningful decisions.",
    icon: "⚡",
  },
  {
    title: "Asynchronous excellence",
    description:
      "We are intentional about remote collaboration through thoughtful documentation and efficient communication.",
    icon: "🔄",
  },
  {
    title: "Continuous growth",
    description:
      "Work alongside AI industry leaders in an environment where the best ideas win, regardless of origin.",
    icon: "📈",
  },
];

const CareersWhatWeOffer = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border bg-card/50">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold">What we offer</h2>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Here is what you can expect when you join 60db.ai.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="space-y-3">
              <div className="text-3xl">{benefit.icon}</div>
              <h3 className="text-lg font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersWhatWeOffer;
