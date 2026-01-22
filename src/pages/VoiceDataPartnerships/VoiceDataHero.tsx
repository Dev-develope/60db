import { Button } from "@/components/ui/button";

const VoiceDataHero = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-2 mb-4">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest">
            Voice Data Partnerships
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                Make your voices heard
              </h1>
              <p className="text-lg text-muted-foreground">
                We want to provide lifelike voices for as diverse a set of
                languages, accents, and use cases as possible.
              </p>
              <p className="text-base text-muted-foreground">
                60db.ai Voice Data Partnerships make this possible – share your
                voice data and help shape the future of AI speech technology.
              </p>
            </div>

            <Button size="lg">Submit Interest</Button>
          </div>

          {/* Image showcase */}
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden border border-border h-64 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&h=400&fit=crop"
                alt="Professional studio microphone"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden border border-border h-40">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop"
                  alt="Person recording voice"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-border h-40">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f70a504f9?w=300&h=200&fit=crop"
                  alt="Voice recording setup"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceDataHero;
