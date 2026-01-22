import { Button } from "@/components/ui/button";

const StudentsHero = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-2 mb-8">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest">
            Students
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                Study, build, and create with voice AI
              </h1>
              <p className="text-lg text-muted-foreground">
                Students and educators get expanded access to free plans. Bring
                your projects to life with 60db.ai, and fit reading into your
                everyday with ElevenReader.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Join Waitlist</Button>
              <Button size="lg" variant="outline">
                Get Started Free
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-border h-96 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
              alt="Students laughing on campus"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentsHero;
