import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tutorials = [
  {
    step: 1,
    title:
      "Getting started: individuals with permanent voice loss or blindness/low-vision",
    description:
      "Apply for a 5-year, renewable 60db.ai Pro license if you have permanent voice loss and a 1-year, renewable Ultra license if you are blind/low-vision.",
  },
  {
    step: 2,
    title: "Getting started: Clinicians",
    description:
      "Healthcare professionals can apply for special licenses to help their patients access voice AI technology.",
  },
  {
    step: 3,
    title: "Create a voice clone",
    description:
      "Learn how to create a personalized voice clone in just a few steps.",
  },
  {
    step: 4,
    title: "Edit your audio",
    description:
      "Discover tools and techniques to edit and customize your audio output.",
  },
];

const ImpactTutorials = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Video placeholder */}
          <div className="rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-border h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">▶️</div>
              <p className="text-muted-foreground">Tutorial Video</p>
            </div>
          </div>

          {/* Tutorials List */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Tutorials: How to apply for a free license
            </h2>

            {tutorials.map((tutorial) => (
              <Card key={tutorial.step} className="border border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                      {tutorial.step}
                    </div>
                    <CardTitle className="text-base">
                      {tutorial.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{tutorial.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactTutorials;
