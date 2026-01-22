import { Button } from "@/components/ui/button";

const CareersHero = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Pioneer the future of
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Audio AI
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Join us in shaping the future of voice technology and AI
          </p>
        </div>

        <Button size="lg">Open Positions</Button>
      </div>
    </section>
  );
};

export default CareersHero;
