import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type PlanCategory = "all" | "creators" | "agents" | "api";

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  cta: string;
  ctaVariant: "default" | "outline" | "hero";
  popular?: boolean;
  features: string[];
}

const creatorPlans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "For trying out the platform",
    cta: "Build for free",
    ctaVariant: "default",
    features: [
      "20,000 credits/month",
      "Create custom voices",
      "Unlimited projects",
      "Commercial license",
    ],
  },
  {
    name: "Starter",
    price: "$5",
    period: "/month",
    description: "For hobbyists",
    cta: "Choose Starter",
    ctaVariant: "outline",
    features: [
      "60,000 credits/month",
      "Instant voice cloning",
      "Professional voice cloning",
      "All languages",
      "Priority support",
    ],
  },
  {
    name: "Creator",
    price: "$11",
    period: "/month",
    description: "For content creators",
    cta: "Choose Creator",
    ctaVariant: "hero",
    popular: true,
    features: [
      "200,000 credits/month",
      "Professional voice cloning",
      "Projects & Audiobooks access",
      "Dubbing Studio",
      "Advanced audio editing",
      "Higher quality audio",
    ],
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    description: "For power users",
    cta: "Choose Pro",
    ctaVariant: "outline",
    features: [
      "1,000,000 credits/month",
      "All Creator features",
      "Ultra high quality audio",
      "44.1 kHz audio output",
      "Usage analytics dashboard",
      "Priority queue access",
    ],
  },
];

const businessPlans: Plan[] = [
  {
    name: "Scale",
    price: "$330",
    period: "/month",
    description: "For growing teams",
    cta: "Choose Scale",
    ctaVariant: "default",
    features: [
      "3,000,000 credits/month",
      "Onboarding & dedicated support",
      "Up to 10 team members",
      "Higher rate limits",
      "Priority support",
    ],
  },
  {
    name: "Business",
    price: "$1,320",
    period: "/month",
    description: "For organizations",
    cta: "Choose Business",
    ctaVariant: "default",
    features: [
      "20,000,000 credits/month",
      "Custom solutions available",
      "SSO/SAML",
      "White-labeling option",
      "Dedicated account manager",
      "Private Slack channel",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom pricing",
    period: "",
    description: "For large organizations",
    cta: "Contact us",
    ctaVariant: "outline",
    features: [
      "All Business features",
      "Custom onboarding",
      "Flexible contracts",
      "Enterprise SLAs",
      "Dedicated infrastructure",
      "Custom integrations",
    ],
  },
];

const comparisonFeatures = [
  { name: "Text to Speech", free: true, starter: true, creator: true, pro: true },
  { name: "API Access", free: true, starter: true, creator: true, pro: true },
  { name: "Monthly Credits", free: "10K", starter: "30K", creator: "100K", pro: "500K" },
  { name: "Audio Quality (kHz)", free: "22", starter: "22", creator: "44.1", pro: "44.1" },
  { name: "Voices per month", free: "3", starter: "10", creator: "30", pro: "100" },
  { name: "Concurrent requests", free: "2", starter: "5", creator: "15", pro: "30" },
  { name: "Voice Cloning", free: false, starter: true, creator: true, pro: true },
  { name: "Voice Designer", free: false, starter: true, creator: true, pro: true },
  { name: "Sound Effects", free: false, starter: false, creator: true, pro: true },
  { name: "Voice Isolator", free: false, starter: false, creator: true, pro: true },
  { name: "Music", free: false, starter: false, creator: false, pro: true },
  { name: "Empty Studio", free: false, starter: false, creator: false, pro: true },
  { name: "Audio Dubbing", free: false, starter: false, creator: true, pro: true },
  { name: "Subtitling Mode", free: false, starter: false, creator: false, pro: true },
  { name: "AI Agents", free: true, starter: true, creator: true, pro: true },
  { name: "Voices", free: true, starter: true, creator: true, pro: true },
  { name: "Music", free: false, starter: false, creator: false, pro: true },
  { name: "Productions", free: false, starter: false, creator: false, pro: true },
];

const faqs = [
  {
    question: "What is usage-based billing?",
    answer: "Usage-based billing means you only pay for what you use. Each plan includes a certain number of credits per month, and additional usage is billed at a per-credit rate.",
  },
  {
    question: "How do characters and credits work?",
    answer: "Characters are counted in your text input. One credit equals approximately one character. Different features may use credits at different rates.",
  },
  {
    question: "Which plan do I need, and should I switch to API?",
    answer: "If you're a content creator, the Creator plan offers the best value. For developers building applications, consider the API-focused plans with higher rate limits.",
  },
  {
    question: "Is there a limit to how many credits I can use in a single request?",
    answer: "Yes, each plan has a maximum request size. Free plans support up to 5,000 characters per request, while paid plans support larger requests.",
  },
  {
    question: "Am I charged for every generation?",
    answer: "Yes, each generation consumes credits based on the length of the content generated. Preview mode uses fewer credits.",
  },
  {
    question: "What happens if I upgrade, downgrade, or cancel my subscription?",
    answer: "Upgrades take effect immediately with prorated billing. Downgrades and cancellations take effect at the end of your billing period.",
  },
  {
    question: "When can I cancel my subscription?",
    answer: "You can cancel your subscription at any time from your account settings. Your access continues until the end of the current billing period.",
  },
  {
    question: "How do I know how many credits I'm sending?",
    answer: "Our dashboard shows real-time credit usage. You can also use our API to check your remaining credits programmatically.",
  },
  {
    question: "What are the payment options you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express) and offer invoice billing for Enterprise customers.",
  },
];

const Pricing = () => {
  const [category, setCategory] = useState<PlanCategory>("all");
  const [isAnnual, setIsAnnual] = useState(false);

  const categories: { key: PlanCategory; label: string }[] = [
    { key: "all", label: "All" },
    { key: "creators", label: "Creators" },
    { key: "agents", label: "Agents" },
    { key: "api", label: "API" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1] mb-6">
                Flexible pricing for your needs
              </h1>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-4 mt-12">
              <div className="flex gap-2 bg-secondary rounded-full p-1">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setCategory(cat.key)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${category === cat.key
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted hover:text-foreground"
                      }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4 ml-auto">
                <div className="flex items-center gap-2">
                  <span className={`text-sm ${!isAnnual ? "text-foreground font-medium" : "text-muted"}`}>USD ($)</span>
                </div>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className="flex items-center gap-2 text-sm"
                >
                  <span className={`${!isAnnual ? "text-foreground" : "text-muted"}`}>Monthly</span>
                  <div className={`w-10 h-6 rounded-full p-1 transition-colors ${isAnnual ? "bg-primary" : "bg-border"}`}>
                    <div className={`w-4 h-4 rounded-full bg-background transition-transform ${isAnnual ? "translate-x-4" : ""}`} />
                  </div>
                  <span className={`${isAnnual ? "text-foreground" : "text-muted"}`}>Annually</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {creatorPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-background rounded-2xl border p-6 flex flex-col ${plan.popular ? "border-primary shadow-card" : "border-border"
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                        Creator
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted">{plan.description}</p>
                  </div>
                  <div className="mb-6">
                    <span className="font-serif text-4xl font-semibold text-foreground">
                      {isAnnual && plan.price !== "$0" && plan.price !== "Custom pricing"
                        ? `$${Math.round(parseInt(plan.price.slice(1)) * 0.8)}`
                        : plan.price}
                    </span>
                    <span className="text-muted">{plan.period}</span>
                  </div>
                  <Button variant={plan.ctaVariant} className="w-full mb-6">
                    {plan.cta}
                  </Button>
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Business Plans */}
            <div className="mt-20 max-w-7xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">For Businesses</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {businessPlans.map((plan) => (
                  <div
                    key={plan.name}
                    className="bg-background rounded-2xl border border-border p-6 flex flex-col"
                  >
                    <div className="mb-6">
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                      <p className="text-sm text-muted">{plan.description}</p>
                    </div>
                    <div className="mb-6">
                      <span className="font-serif text-3xl font-semibold text-foreground">{plan.price}</span>
                      <span className="text-muted">{plan.period}</span>
                    </div>
                    <Button variant={plan.ctaVariant} className="w-full mb-6">
                      {plan.cta}
                    </Button>
                    <ul className="space-y-3 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Startup Grants */}
            <div className="mt-20 max-w-7xl mx-auto">
              <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Startup Grants Program
                </h2>
                <p className="text-muted max-w-2xl mb-8">
                  Get a head start with free credits and technical support to help scale your voice AI product. Apply today to receive a Starter subscription.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="font-serif text-2xl font-semibold text-foreground">12 Months Free</div>
                    <div className="text-sm text-muted">on the Starter plan</div>
                  </div>
                  <div>
                    <div className="font-serif text-2xl font-semibold text-foreground">22M+ Characters</div>
                    <div className="text-sm text-muted">of premium text-to-speech</div>
                  </div>
                </div>
                <Button variant="outline">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Compare Plans Table */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">
              Compare plans
            </h2>
            <div className="max-w-6xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-medium text-muted">Features</th>
                    <th className="text-center py-4 px-4 font-medium text-foreground">Free</th>
                    <th className="text-center py-4 px-4 font-medium text-foreground">Starter</th>
                    <th className="text-center py-4 px-4 font-medium text-foreground">Creator</th>
                    <th className="text-center py-4 px-4 font-medium text-foreground">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, idx) => (
                    <tr key={feature.name} className={idx % 2 === 0 ? "bg-background/50" : ""}>
                      <td className="py-3 px-4 text-sm text-foreground flex items-center gap-1">
                        {feature.name}
                        <HelpCircle className="h-3 w-3 text-muted" />
                      </td>
                      <td className="py-3 px-4 text-center text-sm">
                        {typeof feature.free === "boolean" ? (
                          feature.free ? <Check className="h-4 w-4 text-primary mx-auto" /> : <span className="text-muted">—</span>
                        ) : (
                          <span className="text-foreground">{feature.free}</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center text-sm">
                        {typeof feature.starter === "boolean" ? (
                          feature.starter ? <Check className="h-4 w-4 text-primary mx-auto" /> : <span className="text-muted">—</span>
                        ) : (
                          <span className="text-foreground">{feature.starter}</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center text-sm">
                        {typeof feature.creator === "boolean" ? (
                          feature.creator ? <Check className="h-4 w-4 text-primary mx-auto" /> : <span className="text-muted">—</span>
                        ) : (
                          <span className="text-foreground">{feature.creator}</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center text-sm">
                        {typeof feature.pro === "boolean" ? (
                          feature.pro ? <Check className="h-4 w-4 text-primary mx-auto" /> : <span className="text-muted">—</span>
                        ) : (
                          <span className="text-foreground">{feature.pro}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-12">
              Frequently asked questions
            </h2>
            <div className="max-w-3xl">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-foreground text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold">
                Create with the highest quality AI Audio
              </h2>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90" asChild>
                  <Link href={process.env.NEXT_PUBLIC_AUTH_URL || "https://qlabsui.netlify.app/"}>
                    Get started
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                  Contact sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
