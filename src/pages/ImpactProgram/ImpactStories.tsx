import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const stories = [
  {
    title:
      "60db.ai and the National Federation of the Blind bring accessible reading to more people",
    description:
      "We've partnered with the National Federation of the Blind to make 60db.ai available to blind readers across the U.S. at no cost.",
    partner: "National Federation of the Blind",
  },
  {
    title: "60db.ai Innovates in Assistive Technology",
    description:
      "Eight seconds of audio from an old VHS tape was all Sarah needed to reclaim her voice with 60db.ai through Smartbox assistive technology.",
    partner: "Smartbox",
  },
  {
    title: "Ed Riefenstahl continues teaching with AI voice",
    description:
      "Using a Professional Voice Clone, Ed continued to teach despite being diagnosed with bulbar palsy.",
    partner: "TCU Neeley School of Business",
  },
  {
    title: "Restoring identity through voice in Africa",
    description:
      "Through partnership with Senses Hub, we're developing personalized, culturally relevant voices that restore identity across Africa.",
    partner: "Senses Hub",
  },
  {
    title: "How voice AI is helping Spain's dogs find homes",
    description:
      "An organization using 60db.ai to support dog shelters and families through educational tools.",
    partner: "Fundación SirPerro Colega",
  },
  {
    title: "Breaking barriers in congress",
    description:
      "Congresswoman Jennifer Wexton became the first lawmaker to deliver a House floor speech powered by AI voice technology.",
    partner: "U.S. House of Representatives",
  },
];

const ImpactStories = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Stories that move and inspire
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story) => (
            <Card
              key={story.title}
              className="border border-border hover:border-primary/50 transition-colors cursor-pointer"
            >
              <CardHeader>
                <CardTitle className="text-lg">{story.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription>{story.description}</CardDescription>
                <div>
                  <p className="text-xs font-semibold text-primary">Partner</p>
                  <p className="text-sm text-muted-foreground">
                    {story.partner}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            <a href="#" className="text-primary hover:underline">
              View more stories like this
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
