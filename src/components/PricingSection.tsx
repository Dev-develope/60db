import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    description: "Perfect for side projects and experiments",
    price: "Free",
    period: "",
    features: [
      "10,000 characters/month",
      "5 standard voices",
      "API access",
      "Community support",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    description: "For growing products and teams",
    price: "$29",
    period: "/month",
    features: [
      "500,000 characters/month",
      "All 50+ premium voices",
      "Voice cloning (3 voices)",
      "Priority support",
      "Advanced analytics",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large-scale needs",
    price: "Custom",
    period: "",
    features: [
      "Unlimited characters",
      "Unlimited voice clones",
      "Dedicated infrastructure",
      "Custom SLA",
      "24/7 phone support",
      "On-premise deployment",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto">
            Start free, scale as you grow. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative p-6 lg:p-8 border-border/50 transition-all duration-300 hover:shadow-elevated ${
                plan.popular
                  ? 'bg-primary text-primary-foreground shadow-card scale-105 lg:scale-110 z-10'
                  : 'bg-card hover:bg-card/80'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-serif text-xl font-semibold mb-2 ${
                  plan.popular ? 'text-primary-foreground' : 'text-foreground'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${
                  plan.popular ? 'text-primary-foreground/70' : 'text-muted'
                }`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className={`font-serif text-4xl lg:text-5xl font-semibold ${
                  plan.popular ? 'text-primary-foreground' : 'text-foreground'
                }`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`text-sm ${
                    plan.popular ? 'text-primary-foreground/70' : 'text-muted'
                  }`}>
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 shrink-0 mt-0.5 ${
                      plan.popular ? 'text-primary-foreground' : 'text-primary'
                    }`} />
                    <span className={`text-sm ${
                      plan.popular ? 'text-primary-foreground/90' : 'text-foreground'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={plan.popular ? "cta" : "outline"}
                size="lg"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* FAQ Teaser */}
        <div className="text-center mt-12">
          <p className="text-muted">
            Questions? Check our{" "}
            <a href="#faq" className="text-foreground underline underline-offset-4 hover:text-primary">
              FAQ
            </a>{" "}
            or{" "}
            <a href="#contact" className="text-foreground underline underline-offset-4 hover:text-primary">
              contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
