import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = [
  "All",
  "Product",
  "Agents Platform Stories",
  "Developer",
  "Company",
  "Impact",
];

const blogPosts = [
  {
    title: "Deutsche Telekom and ElevenLabs announce partnership",
    description:
      "Bringing ElevenLabs' AI voice agents to the customer service of Europe's largest Telco",
    category: "Agents Platform Stories",
    date: "Jan 21, 2026",
    featured: true,
  },
  {
    title: "Introducing Scribe v2",
    description:
      "The most accurate transcription model ever released, with support for more than 90 languages.",
    category: "Research",
    date: "Jan 9, 2026",
  },
  {
    title: "Liberty Global Partnership",
    description:
      "We're partnering with Liberty Global to accelerate voice AI expansion across Europe",
    category: "Agents Platform Stories",
    date: "Nov 21, 2025",
  },
  {
    title: "Introducing Image & Video",
    description:
      "Within ElevenLabs, you can now bring ideas to life in one complete creative workflow.",
    category: "Product",
    date: "Nov 17, 2025",
  },
  {
    title: "Toyota AI Experience",
    description:
      "Toyota engages fans with AI-powered experiences and nearly 2 minutes of average interaction.",
    category: "Agents Platform Stories",
    date: "Dec 4, 2025",
  },
  {
    title: "TVS Motor Multimodal Agents",
    description:
      "TVS Motor Company deploys multimodal AI agents with 35% lift in lead capture.",
    category: "Agents Platform Stories",
    date: "Dec 1, 2025",
  },
];

interface BlogGridProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const BlogGrid = ({ selectedCategory, onCategoryChange }: BlogGridProps) => {
  const filteredPosts =
    selectedCategory && selectedCategory !== "All"
      ? blogPosts.filter((post) => post.category === selectedCategory)
      : blogPosts;

  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={
                selectedCategory === category ||
                (category === "All" && !selectedCategory)
                  ? "default"
                  : "outline"
              }
              onClick={() =>
                onCategoryChange(category === "All" ? null : category)
              }
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Card
              key={post.title}
              className={`border border-border flex flex-col hover:border-primary/50 transition-colors cursor-pointer ${
                post.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
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
                <CardTitle className={post.featured ? "text-2xl" : "text-lg"}>
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="line-clamp-2 text-base">
                  {post.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2">
          <Button variant="outline" size="sm">
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-primary text-primary-foreground"
          >
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
