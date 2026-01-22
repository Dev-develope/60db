import { Button } from "@/components/ui/button";

const VoiceDataCTA = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-primary/10 to-primary/5 border-b border-border">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to join 60db.ai voice partners?
          </h2>
          <p className="text-lg text-muted-foreground">
            Be part of the revolution in AI voice technology. Share your voice
            data and help create the most diverse and inclusive voice models
            available.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base">
            Submit Interest
          </Button>
          <Button size="lg" variant="outline" className="text-base">
            Learn More
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pt-8">
          <div className="space-y-2">
            <p className="text-3xl font-bold">1000+</p>
            <p className="text-sm text-muted-foreground">
              Active Voice Partners
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold">50+</p>
            <p className="text-sm text-muted-foreground">Languages Supported</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold">24/7</p>
            <p className="text-sm text-muted-foreground">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceDataCTA;
