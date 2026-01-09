import { useState } from "react";
import { Gamepad2, BookOpen, Headphones } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const useCases = [
  {
    id: "gaming",
    icon: Gamepad2,
    title: "Gaming & Interactive",
    description: "Bring NPCs to life with dynamic, responsive dialogue. Real-time generation enables characters that react naturally to player choices.",
    features: [
      "Dynamic NPC dialogue generation",
      "Emotional voice modulation",
      "Multi-character conversations",
      "< 100ms response time",
    ],
    stats: { label: "Games Powered", value: "500+" },
  },
  {
    id: "audiobooks",
    icon: BookOpen,
    title: "Audiobooks & Podcasts",
    description: "Transform written content into engaging audio experiences. Multiple narrators, character voices, and natural pacing—all automated.",
    features: [
      "Multiple narrator voices",
      "Automatic chapter detection",
      "Background music integration",
      "EPUB & PDF support",
    ],
    stats: { label: "Hours Generated", value: "1M+" },
  },
  {
    id: "support",
    icon: Headphones,
    title: "Customer Support",
    description: "Deploy AI agents that sound human. Reduce wait times while maintaining the personal touch your customers expect.",
    features: [
      "Real-time conversation",
      "Sentiment-aware responses",
      "Seamless human handoff",
      "Multi-language support",
    ],
    stats: { label: "Calls Handled", value: "10M+" },
  },
];

const UseCasesSection = () => {
  const [activeTab, setActiveTab] = useState("gaming");

  return (
    <section id="use-cases" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Built for Every Use Case
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto">
            From immersive games to enterprise support, 60db powers the world's best audio experiences.
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
          <TabsList className="w-full grid grid-cols-3 h-auto p-1 bg-secondary/50 rounded-xl mb-8">
            {useCases.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <TabsTrigger
                  key={useCase.id}
                  value={useCase.id}
                  className="flex items-center gap-2 py-3 px-4 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-soft transition-all"
                >
                  <Icon className="h-5 w-5" />
                  <span className="hidden sm:inline">{useCase.title.split(' ')[0]}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <TabsContent key={useCase.id} value={useCase.id} className="mt-0">
                <Card className="p-6 lg:p-10 border-border/50 bg-card shadow-card">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Content */}
                    <div>
                      <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 mb-6">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      
                      <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                        {useCase.title}
                      </h3>
                      
                      <p className="text-muted leading-relaxed mb-6">
                        {useCase.description}
                      </p>

                      <ul className="space-y-3">
                        {useCase.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visual / Stats */}
                    <div className="relative">
                      <div className="aspect-square rounded-2xl bg-gradient-warm border border-border/50 flex items-center justify-center">
                        <div className="text-center">
                          <div className="font-serif text-5xl lg:text-6xl font-semibold text-foreground mb-2">
                            {useCase.stats.value}
                          </div>
                          <div className="text-muted">{useCase.stats.label}</div>
                        </div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-primary/5 blur-2xl" />
                      <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-secondary/50 blur-2xl" />
                    </div>
                  </div>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default UseCasesSection;
