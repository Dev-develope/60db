import { Button } from "@/components/ui/button";

const ElevenReaderSection = () => {
  const benefits = [
    {
      title: "Turn downtime into study time",
      description:
        "Listen to class readings, research papers, textbooks, and course materials",
      icon: "📚",
    },
    {
      title: "Build your daily reading habit",
      description:
        "Listen while commuting, at the gym, cooking, or on the move",
      icon: "🎧",
    },
    {
      title: "Find time to read for leisure",
      description: "Choose from thousands of top titles and literary classics",
      icon: "📖",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-2 mb-12">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest">
            ElevenReader
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Listen and learn with natural-sounding voice AI
            </h2>
            <p className="text-lg text-muted-foreground">
              ElevenReader allows you to read aloud PDFs, articles, ePubs, and
              more. Generate podcasts and explore thousands of top literary
              titles with the highest quality AI voices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Download iOS App</Button>
              <Button size="lg" variant="outline">
                Download Android App
              </Button>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-border h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1507238691621-bada96a03951?w=500&h=400&fit=crop"
              alt="ElevenReader App"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-border bg-background hover:bg-secondary/50 transition-colors"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElevenReaderSection;
