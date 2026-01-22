import { Button } from "@/components/ui/button";

const TextToSpeechAPIHero = () => {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Ultra-realistic and low latency
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                speech generation
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Build with high-quality, controllable speech generation for real-time and bulk
            applications. Models optimized for latency, fidelity, and long-form consistency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="text-base h-12 px-8">
              Get API Key
            </Button>
            <Button size="lg" variant="outline" className="text-base h-12 px-8">
              Explore Docs
            </Button>
          </div>

          {/* Demo/Code section */}
          <div className="mt-16 bg-card border border-border rounded-lg p-8 max-w-3xl mx-auto">
            <div className="flex gap-4 mb-6">
              <button className="text-sm font-medium text-foreground border-b-2 border-primary pb-2">
                Demo
              </button>
              <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Code
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground italic">
                "In the ancient land of Eldoria, where skies shimmered and forests whispered
                secrets to the wind, lived a dragon named Zephyros. Not the 'burn it all down'
                kind... but he was gentle, wise, with eyes like old stars. Even the birds fell
                silent when he passed."
              </p>

              <div className="flex items-center justify-between">
                <select className="bg-background border border-border rounded px-3 py-2 text-sm">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
                <select className="bg-background border border-border rounded px-3 py-2 text-sm">
                  <option>Sarah</option>
                  <option>John</option>
                  <option>Jessica</option>
                </select>
                <Button size="sm" variant="outline">
                  Play
                </Button>
              </div>
            </div>
          </div>

          {/* Companies */}
          <div className="pt-16 border-t border-border">
            <p className="text-sm text-muted-foreground mb-6">Trusted by leading companies</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
              <div className="font-semibold">60db</div>
              <div className="font-semibold">Meta</div>
              <div className="font-semibold">Stripe</div>
              <div className="font-semibold">Twilio</div>
              <div className="font-semibold">OpenAI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextToSpeechAPIHero;
