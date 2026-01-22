import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Control emotion and delivery",
    description:
      "Create controllable, expressive speech, layered with emotion, audio events, and immersive soundscapes.",
    icon: "🎭",
  },
  {
    title: "Access 10,000+ voices",
    description:
      "Explore an ever-growing collection of expressive, lifelike voices for any use case.",
    icon: "🎤",
  },
  {
    title: "Voice design & cloning",
    description:
      "Create in over 30 languages with natural voices, expressive accents, and localized audio tailored to your audience.",
    icon: "🎨",
  },
  {
    title: "Multi-speaker dialogue",
    description:
      "Create natural multi-speaker conversations across 30+ languages with expressive, controllable voices.",
    icon: "👥",
  },
  {
    title: "Audio events and direction",
    description:
      "Control delivery with audio tags, timing cues, and narrative direction built into the speech.",
    icon: "🎯",
  },
  {
    title: "Pronunciation dictionaries",
    description:
      "Define custom pronunciations to ensure consistent, accurate speech for names and terminology.",
    icon: "📚",
  },
];

const TextToSpeechAPIFeatures = () => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Everything you need to build production-ready speech
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Generate expressive, controllable speech with models built for real-time, long-form, and
            production use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border border-border">
              <CardHeader className="pb-4">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextToSpeechAPIFeatures;
