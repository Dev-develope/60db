const missionPoints = [
  {
    title: "Innovation in AI Audio",
    description:
      "We push the boundaries of what's possible with voice and audio technology, continuously advancing our models for better quality, lower latency, and broader capabilities.",
  },
  {
    title: "Accessibility for All",
    description:
      "Making advanced voice AI accessible to creators, developers, and enterprises of all sizes, regardless of technical expertise or budget constraints.",
  },
  {
    title: "Global Reach",
    description:
      "Supporting 70+ languages and diverse accents, enabling businesses to communicate authentically with audiences worldwide.",
  },
  {
    title: "Ethical AI",
    description:
      "Building with responsibility in mind. We're committed to safety, transparency, and protecting user rights in all our voice AI applications.",
  },
];

const AboutMission = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Mission & Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empowering the world through intelligent voice and audio AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {missionPoints.map((point) => (
              <div key={point.title} className="space-y-3">
                <h3 className="text-lg font-semibold">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
