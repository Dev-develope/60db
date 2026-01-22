import { Button } from "@/components/ui/button";

const IconicMarketplaceIntro = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Introducing the 60db.ai Iconic Marketplace
            </h2>
            <p className="text-lg text-muted-foreground">
              Create authentic, engaging content with iconic voice likenesses.
              Whether you're producing music, podcasts, films, or interactive
              experiences, our marketplace makes it easy to license and use
              legendary voices legally and ethically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Browse Marketplace</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          {/* Isometric visual */}
          <div className="relative h-96 flex items-center justify-center">
            <div className="w-64 h-64 transform -rotate-45 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-border rounded-lg flex items-center justify-center shadow-lg">
              <div className="text-6xl">🎙️</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconicMarketplaceIntro;
