const principles = [
  {
    title: "First principles",
    description:
      "Approach the problem without bias; start with the first principles to try to find the best solution",
    icon: "🧠",
  },
  {
    title: "Excellence everywhere",
    description:
      "We want to lead in what we do - from the way we build our models to how we engage with our community, and for that we go the extra mile",
    icon: "⭐",
  },
  {
    title: "Owning outcomes",
    description:
      "We take responsibility for our individual work to function well as a team and we develop our technology mindful of its impact",
    icon: "🎯",
  },
];

const CareersPrinciples = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border bg-card/50">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our principles</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle) => (
            <div key={principle.title} className="space-y-4">
              <div className="text-4xl">{principle.icon}</div>
              <h3 className="text-xl font-semibold">{principle.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersPrinciples;
