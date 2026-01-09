import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-sm font-medium text-muted mb-8 animate-fade-in-up">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Now with 29+ Languages & Voice Cloning
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-semibold text-foreground leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Studio-Quality Voice
            <br />
            <span className="text-gradient-espresso">in Milliseconds</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Transform text into lifelike speech with the world's most natural-sounding AI voices. 
            Perfect for games, audiobooks, podcasts, and customer experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero">
              Start Creating Free
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="heroOutline">
              <Play className="h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Metrics */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {[
              { value: "50ms", label: "Avg Latency" },
              { value: "1M+", label: "API Calls/Day" },
              { value: "99.9%", label: "Uptime SLA" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-2xl md:text-3xl font-semibold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
