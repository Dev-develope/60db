import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "./BlogHero";
import BlogGrid from "./BlogGrid";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        <BlogHero />
        <BlogGrid
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
