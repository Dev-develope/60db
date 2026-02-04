import { Button } from "@/components/ui/button";

const AffiliatesHero = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest">
                Affiliates Program
              </p>
              <h1 className="text-4xl md:text-5xl font-bold">
                Become an affiliate and earn with every recommendation
              </h1>
              <p className="text-lg text-muted-foreground">
                Do you love 60db.ai? Are you interested in earning money by promoting 60db.ai products? We're always on the lookout for passionate individuals to partner with on our affiliate program.
              </p>
            </div>

            <Button size="lg">Instant Sign Up</Button>
          </div>

          {/* Hero Image - Collage */}
          <div className="rounded-lg overflow-hidden border border-border h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
              alt="Affiliate success stories collage"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliatesHero;
