import { Button } from "@/components/ui/button";

const DevelopersSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* APIs Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-semibold text-primary uppercase tracking-widest">
                  For Developers
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Build faster than ever with our APIs
              </h2>
              <p className="text-lg text-muted-foreground">
                Easily integrate 60db.ai into your codebase for agents,
                chatbots, or apps with our extensive docs.
              </p>
              <Button size="lg">API Reference</Button>
            </div>

            <div className="rounded-lg overflow-hidden border border-border h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f70a504f9?w=500&h=400&fit=crop"
                alt="API Documentation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Models Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden border border-border h-96 bg-gradient-to-br from-green-500/10 to-blue-500/10 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop"
                alt="AI Models"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Models optimized for different use cases
              </h2>
              <p className="text-lg text-muted-foreground">
                Use our high-performance models to power interactions that
                require fast responses and precise outputs.
              </p>
              <Button size="lg">Explore Models</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;
