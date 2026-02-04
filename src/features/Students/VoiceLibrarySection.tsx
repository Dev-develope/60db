import { Button } from "@/components/ui/button";

const VoiceLibrarySection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-lg overflow-hidden border border-border h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 order-2 md:order-1 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f70a504f9?w=500&h=400&fit=crop"
              alt="Voice library"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold">
              Find the perfect voice for your projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Create a signature voice for your student organization, school
              mascot, or project demo.
            </p>
            <Button size="lg">Explore Voice Library</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceLibrarySection;
