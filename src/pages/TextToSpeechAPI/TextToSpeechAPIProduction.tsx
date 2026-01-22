import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const productionFeatures = [
  {
    title: "Enterprise-level data protection",
    description:
      "Data is encrypted in transit and at rest, with support for SOC 2, HIPAA, and GDPR compliance. EU Data Residency and Zero Retention modes are available for stricter data control.",
    icon: "🔒",
  },
  {
    title: "Python and TypeScript SDKs",
    description:
      "Official SDKs for seamless integration with your existing tech stack.",
    icon: "⚙️",
  },
  {
    title: "Elevated support and custom deployments",
    description:
      "Dedicated support team and custom deployment options for enterprise customers.",
    icon: "🤝",
  },
];

const TextToSpeechAPIProduction = () => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            APIs built for production
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by enterprise customers worldwide for mission-critical
            applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {productionFeatures.map((feature) => (
            <Card key={feature.title} className="border border-border">
              <CardHeader className="pb-4">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextToSpeechAPIProduction;
