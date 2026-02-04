import { Button } from "@/components/ui/button";

const CampusProgram = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Bring 60db.ai to your campus
            </h2>
            <p className="text-lg text-muted-foreground">
              If you're a student leader hosting a student hackathon, or an
              educator teaching with voice AI, we'd love to work with you.
            </p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>
                  Join our community of student developers and creators
                </span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Free credits for your hackathon</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Direct support from our team</span>
              </div>
            </div>
            <Button size="lg">Apply Now</Button>
          </div>

          <div className="rounded-lg overflow-hidden border border-border h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
              alt="Campus program"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusProgram;
