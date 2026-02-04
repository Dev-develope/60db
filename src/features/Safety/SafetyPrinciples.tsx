const principles = [
  {
    icon: "🔒",
    title: "Safety by Design",
    description:
      "We build safety into everything we do—from the ground up. Our models undergo rigorous evaluations before release, and we embed safeguards directly into our products to stop and deter abuse.",
  },
  {
    icon: "📋",
    title: "Traceability & Accountability",
    description:
      "We maintain comprehensive records of AI-generated content and take responsibility for the impact of our technology on society.",
  },
  {
    icon: "📖",
    title: "Transparency",
    description:
      "We openly communicate our safety measures, limitations, and ongoing efforts to improve. We believe informed users make better decisions.",
  },
  {
    icon: "⚡",
    title: "Agility",
    description:
      "We continuously evolve our safety measures to keep pace with advancements in our models, products, and emerging threats.",
  },
  {
    icon: "🤝",
    title: "Collaboration",
    description:
      "We work with industry partners, researchers, and stakeholders to develop comprehensive safety solutions and best practices.",
  },
];

const SafetyPrinciples = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Safety Principles
        </h2>
        <p className="text-muted-foreground mb-12">
          Our safety program is guided by the following principles:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle) => (
            <div key={principle.title} className="space-y-3">
              <div className="text-3xl">{principle.icon}</div>
              <h3 className="text-lg font-semibold">{principle.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyPrinciples;
