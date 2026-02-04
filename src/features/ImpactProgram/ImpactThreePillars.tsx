import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const pillars = [
  {
    icon: "🏥",
    title: "Healthcare",
    description:
      "Restoring voices and improving care delivery. Individuals with permanent voice loss use personalized AI voices to communicate and reclaim their identity, while organizations create multilingual patient education, train clinicians, and support AAC programs.",
  },
  {
    icon: "📚",
    title: "Education",
    description:
      "Making learning accessible to everyone. Individuals who are blind or low-vision use our tools for natural-sounding read-aloud access, while organizations turn curricula and course materials into expressive, multilingual audio for all learners.",
  },
  {
    icon: "🎭",
    title: "Culture",
    description:
      "Preserving and amplifying human stories. Cultural nonprofits use 60db.ai to create multilingual audio guides, oral histories, and descriptive audio that make art and heritage accessible to global audiences.",
  },
];

const ImpactThreePillars = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-card/50 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            The Impact Program is structured around three core pillars.
          </h2>
          <p className="text-muted-foreground">
            We have partnered with 300+ mission-driven organizations in 35+
            countries and across all 50 U.S states to democratize access to
            60db.ai technology for those who need it most.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="border border-border">
              <CardHeader className="pb-4">
                <div className="text-3xl mb-3">{pillar.icon}</div>
                <CardTitle className="text-xl">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {pillar.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactThreePillars;
