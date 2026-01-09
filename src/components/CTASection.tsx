import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />

      {/* Decorative Blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
            Ready to Transform
            <br />
            Your Audio Experience?
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-xl mx-auto">
            Join thousands of developers and creators building the future of voice. 
            Start with 10,000 free characters today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="cta" size="xl">
              Start Creating Free
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="xl"
              className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
            >
              Schedule a Demo
            </Button>
          </div>

          {/* Trust Note */}
          <p className="mt-8 text-sm text-primary-foreground/50">
            No credit card required • 10,000 characters free • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
