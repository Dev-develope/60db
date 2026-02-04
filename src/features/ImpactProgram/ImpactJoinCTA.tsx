import { Button } from "@/components/ui/button";

const ImpactJoinCTA = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Join the Impact Program
          </h2>
          <p className="text-lg text-muted-foreground">
            Together, we're using AI voice technology to expand access, amplify
            inclusion, and ensure that every voice has the power to be heard.
          </p>
        </div>

        <div className="text-sm text-muted-foreground space-y-4">
          <p>Help us empower one million voices</p>
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

export default ImpactJoinCTA;
