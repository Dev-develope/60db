import { Button } from "@/components/ui/button";

const safeguards = [
  {
    title: "Prevent",
    description:
      "We redteam our models prior to release and vet our customers at sign up. We also embed product features to deter bad or irresponsible actors.",
    action: "Learn More",
  },
  {
    title: "Inform",
    description:
      "We incorporate third-party standards and support external efforts to enhance deepfake detection tools. We've released industry-leading AI Audio Classifiers.",
    action: "Learn More",
  },
  {
    title: "Detect",
    description:
      "We actively monitor our platform for violations, leveraging AI classifiers, human reviewers, and internal investigations.",
    action: "Learn More",
  },
  {
    title: "Enforce",
    description:
      "Customers who violate our Prohibited Usage Policy are subject to enforcement actions, including bans for persistent or serious violators.",
    action: "Learn More",
  },
];

const SafeguardsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Safeguards</h2>
        <p className="text-muted-foreground mb-12 max-w-3xl">
          We strive to maximize friction for bad actors attempting to misuse our
          tools, while maintaining a seamless experience for legitimate users.
          We deploy a comprehensive set of safeguards in a multi-layered defense
          system.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {safeguards.map((safeguard) => (
            <div
              key={safeguard.title}
              className="bg-card border border-border rounded-lg p-8 space-y-4"
            >
              <h3 className="text-lg font-semibold">{safeguard.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {safeguard.description}
              </p>
              <Button variant="link" className="p-0 h-auto">
                {safeguard.action} →
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-8 space-y-6">
          <h3 className="text-lg font-semibold">Additional Resources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-medium">Report Content</h4>
              <p className="text-sm text-muted-foreground mb-3">
                If you find concerning content, report it to us.
              </p>
              <Button variant="outline" size="sm">
                Report
              </Button>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Prohibited Policy</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Learn about content and activities not allowed.
              </p>
              <Button variant="outline" size="sm">
                View Policy
              </Button>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">AI Speech Classifier</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Detect if audio was created with our tools.
              </p>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Safety Partnership</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Support organizations developing detection solutions.
              </p>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafeguardsSection;
