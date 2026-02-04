import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const models = [
  {
    name: "Nova",
    subtitle: "Lowest latency speech synthesis",
    features: [
      "Ultra-low latency (~25ms)",
      "32 languages supported",
      "40,000 character limit",
      "~$0.06 per minute",
    ],
    highlighted: false,
  },
  {
    name: "Sonic",
    subtitle: "Balanced quality and latency",
    features: [
      "Low latency (~250-300ms)",
      "High quality voice generation",
      "32 languages supported",
      "40,000 character limit",
      "~$0.06 per minute",
    ],
    highlighted: true,
  },
  {
    name: "Opus",
    subtitle: "Most emotionally rich model",
    features: [
      "Natural-sounding output",
      "70+ languages supported",
      "3,000 character limit",
      "Multi-speaker dialogue",
      "~$0.12 per minute",
    ],
    highlighted: false,
  },
];

const TextToSpeechAPIModels = () => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Built on the most powerful Voice AI models
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the right model for your use case: from ultra-low latency
            agents to expressive, long-form narration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {models.map((model) => (
            <Card
              key={model.name}
              className={`flex flex-col ${model.highlighted ? "border-primary/50 md:scale-105" : ""}`}
            >
              <CardHeader>
                <CardTitle className="text-2xl">{model.name}</CardTitle>
                <CardDescription>{model.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3 mb-6">
                  {model.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="px-6 pb-6">
                <Button variant="outline" className="w-full">
                  View Docs
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Button size="lg">Get API Key</Button>
          <Button size="lg" variant="outline">
            Explore Docs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TextToSpeechAPIModels;
