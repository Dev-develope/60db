import { Button } from "@/components/ui/button";

const CreatorsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest">
                For Creators
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              The most expressive Text to Speech model
            </h2>
            <p className="text-lg text-muted-foreground">
              Narrate your class presentations, group projects, films, or
              startup demo with lifelike AI voices.
            </p>
            <Button size="lg">Get Started Free</Button>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden border border-border h-96 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&h=400&fit=crop"
              alt="Studio microphone"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorsSection;
