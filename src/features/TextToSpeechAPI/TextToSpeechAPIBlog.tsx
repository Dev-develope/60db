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
    title: "Getting Started with Text-to-Speech API",
    description:
      "Learn how to integrate our TTS API into your application in minutes.",
    category: "Getting Started",
  },
  {
    title: "Best Practices for Production Voice Applications",
    description:
      "Optimize latency, quality, and cost in your voice-powered applications.",
    category: "Best Practices",
  },
  {
    title: "Multi-language Voice Generation at Scale",
    description:
      "Deploy voice applications across 30+ languages with consistent quality.",
    category: "Advanced",
  },
  {
    title: "Building Real-time Voice Agents with our API",
    description:
      "Create responsive voice agents with our ultra-low latency models.",
    category: "Tutorials",
  },
  {
    title: "Custom Voice Cloning for Brand Voice",
    description:
      "Create a unique brand voice with our voice cloning technology.",
    category: "Features",
  },
  {
    title: "Emotion and Delivery Control in Speech",
    description:
      "Master expressive speech generation with emotion tags and delivery cues.",
    category: "Advanced",
  },
];

const TextToSpeechAPIBlog = () => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Latest updates
          </h2>
          <Button variant="outline" className="mx-auto">
            All updates
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card
              key={post.title}
              className="border border-border flex flex-col hover:border-primary/50 transition-colors cursor-pointer"
            >
              <CardHeader className="pb-4">
                <div className="text-xs font-semibold text-primary mb-2">
                  {post.category}
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
    </section>
  );
};

export default TextToSpeechAPIBlog;
