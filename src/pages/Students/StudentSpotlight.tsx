const StudentSpotlight = () => {
  const spotlights = [
    {
      title: "AI assistant to help seniors",
      name: "Arlan Marat",
      school: "Minerva University",
      description:
        "Building Eldering, an AI personal assistant that calls seniors to deliver personalized reminders",
      icon: "👥",
      link: "https://www.eldering.ai/",
    },
    {
      title: "Lifelike 3D virtual moderator 'James'",
      name: "Tiago Aragona",
      school: "The New School",
      description:
        "Built James: a 3D avatar designed to serve as a virtual event moderator",
      icon: "🤖",
      link: "https://www.tiagoaragona.com/james",
    },
    {
      title: "Have your project featured here",
      name: "Your Project",
      school: "Your University",
      description:
        "Building with 60db.ai? We'd love to feature your project and showcase it to our community",
      icon: "⭐",
      link: "#",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Student Spotlight
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {spotlights.map((spotlight, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 transition-colors space-y-4"
            >
              <div className="text-5xl">{spotlight.icon}</div>
              <h3 className="text-xl font-bold">{spotlight.title}</h3>
              <p className="text-sm text-muted-foreground font-medium">
                {spotlight.name}, {spotlight.school}
              </p>
              <p className="text-muted-foreground">{spotlight.description}</p>
              <a
                href={spotlight.link}
                className="inline-block text-primary font-semibold hover:underline text-sm"
              >
                {index === 2 ? "Apply to be featured" : "Explore"} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentSpotlight;
