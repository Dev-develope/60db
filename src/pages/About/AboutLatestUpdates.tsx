import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "60db.ai Launches New Voice Engine with Ultra-Low Latency",
    description:
      "Introducing our breakthrough voice synthesis model optimized for real-time applications.",
    date: "Jan 2025",
    category: "Product Launch",
  },
  {
    title: "Expanding into Asia-Pacific Markets",
    description:
      "We're excited to announce our expansion with new regional offices and localized services.",
    date: "Dec 2024",
    category: "Company News",
  },
  {
    title: "The Future of Conversational AI with Voice Agents",
    description:
      "Exploring how intelligent voice agents are transforming customer service and support.",
    date: "Nov 2024",
    category: "Insights",
  },
  {
    title: "60db.ai Joins the AI Safety Initiative",
    description:
      "Commitment to responsible AI development and safety in voice technology.",
    date: "Oct 2024",
    category: "Corporate",
  },
  {
    title: "Supporting Content Creators: Voice Tools for Everyone",
    description:
      "How 60db.ai empowers creators to produce professional-quality audio content.",
    date: "Sep 2024",
    category: "Features",
  },
  {
    title: "Breaking Language Barriers: Voice Translation at Scale",
    description:
      "Bridging communication gaps with support for 70+ languages in real-time.",
    date: "Aug 2024",
    category: "Technology",
  },
];

const AboutLatestUpdates = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-bold">Latest updates</h2>
            <Button variant="outline">View all</Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card
                key={post.title}
                className="border border-border flex flex-col hover:border-primary/50 transition-colors cursor-pointer"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="line-clamp-2">
                    {post.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLatestUpdates;
