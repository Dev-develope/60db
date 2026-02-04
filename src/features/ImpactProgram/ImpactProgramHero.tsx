import { Button } from "@/components/ui/button";

const ImpactProgramHero = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 text-center border-b border-border">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            60db.ai Impact Program
          </h1>
          <p className="text-lg text-muted-foreground">
            On a mission to empower one million voices, the 60db.ai Impact
            Program provides free licenses to individuals with accessibility
            needs and nonprofit organizations across healthcare, education, and
            culture.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">I am a nonprofit</Button>
          <Button size="lg" variant="outline">
            I am an individual
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImpactProgramHero;
