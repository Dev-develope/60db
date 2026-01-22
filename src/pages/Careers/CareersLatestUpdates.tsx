import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const updates = [
  {
    title: "Introducing The Eleven Album",
    description:
      "A landmark musical release created in collaboration with world-class artists.",
    date: "Jan 21, 2026",
  },
  {
    title: "Mindset Health personalizes digital therapeutics",
    description:
      "Leveraging 60db.ai technology for personalized health experiences.",
    date: "Jan 20, 2026",
  },
  {
    title: "MasterClass brings AI instructors to life",
    description:
      "Making education more accessible and engaging with AI voices.",
    date: "Jan 15, 2026",
  },
  {
    title: "New Voice Engine Released",
    description:
      "Ultra-low latency and improved naturalness for all use cases.",
    date: "Jan 10, 2026",
  },
  {
    title: "Expanding Global Operations",
    description:
      "Opening new offices in Asia-Pacific to serve our growing customer base.",
    date: "Jan 5, 2026",
  },
  {
    title: "Partnership Announcements",
    description:
      "Strategic partnerships with leading enterprises to advance AI voice technology.",
    date: "Dec 28, 2025",
  },
];

const CareersLatestUpdates = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Latest company updates
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {updates.map((update) => (
            <Card
              key={update.title}
              className="border border-border hover:border-primary/50 transition-colors cursor-pointer"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{update.title}</CardTitle>
                <CardDescription className="text-xs">
                  {update.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {update.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersLatestUpdates;
