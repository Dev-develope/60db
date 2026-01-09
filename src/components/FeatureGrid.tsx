import { Zap, Globe, Mic, Shield, Sliders, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "50ms Latency",
    description: "Real-time voice synthesis with industry-leading speed. Perfect for live applications and conversational AI.",
    highlight: true,
  },
  {
    icon: Globe,
    title: "29+ Languages",
    description: "Global reach with native-quality pronunciation across languages, dialects, and accents.",
    highlight: false,
  },
  {
    icon: Mic,
    title: "Voice Cloning",
    description: "Create custom voices from just 30 seconds of audio. Maintain brand consistency at scale.",
    highlight: true,
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified. Your data is encrypted at rest and in transit.",
    highlight: false,
  },
  {
    icon: Sliders,
    title: "Granular Controls",
    description: "Fine-tune pitch, speed, emotion, and emphasis. Make every word sound exactly right.",
    highlight: false,
  },
  {
    icon: Sparkles,
    title: "Emotion & Style",
    description: "Express happiness, sadness, excitement, and more. Add whispers, emphasis, and breathing.",
    highlight: false,
  },
];

const FeatureGrid = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Built for Performance
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto">
            Enterprise-grade infrastructure meets intuitive design. 
            Every feature designed to help you ship faster.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLarge = feature.highlight && index < 2;
            
            return (
              <Card
                key={feature.title}
                className={`group p-6 lg:p-8 border-border/50 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-card ${
                  isLarge ? 'md:row-span-2 flex flex-col justify-center' : ''
                }`}
              >
                <div className={`mb-4 inline-flex items-center justify-center rounded-xl bg-primary/10 ${
                  isLarge ? 'h-14 w-14' : 'h-12 w-12'
                }`}>
                  <Icon className={`text-primary ${isLarge ? 'h-7 w-7' : 'h-6 w-6'}`} />
                </div>
                
                <h3 className={`font-serif font-semibold text-foreground mb-2 ${
                  isLarge ? 'text-2xl lg:text-3xl' : 'text-xl'
                }`}>
                  {feature.title}
                </h3>
                
                <p className={`text-muted leading-relaxed ${
                  isLarge ? 'text-base lg:text-lg' : 'text-sm'
                }`}>
                  {feature.description}
                </p>

                {isLarge && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <span>Available on all plans</span>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
