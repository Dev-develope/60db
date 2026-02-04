import { Button } from "@/components/ui/button";

const AboutJoinUs = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Join us to shape the future of AI audio
            </h2>
            <p className="text-lg text-muted-foreground">
              We're always looking for talented and driven minds from diverse
              backgrounds to join our team. Whether you're a machine learning
              engineer, product manager, designer, or passionate about voice AI,
              we want to hear from you.
            </p>
            <Button size="lg">See openings</Button>
          </div>

          {/* Image placeholder */}
          <div className="rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-border h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">👥</div>
              <p className="text-muted-foreground">Team collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJoinUs;
