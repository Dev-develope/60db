import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCategoryHero from "./BlogCategoryHero";
import BlogCategorySidebar from "./BlogCategorySidebar";
import BlogPostCard from "./BlogPostCard";

const BlogCategoryPage = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Deutsche Telekom and ElevenLabs announce partnership",
            excerpt: "Bringing ElevenLabs' AI voice agents to the customer service of Europe's largest Telco (via app and phone).",
            date: "Jan 15, 2026",
            author: "ElevenLabs Team",
            category: "Agents Platform Stories",
            logo: "🇩🇪",
            featured: true,
        },
        {
            id: 2,
            title: "How we scaled our customer interview process with ElevenLabs Agents",
            excerpt: "We used ElevenLabs Agents to interview over 230 users of our ElevenReader app in 24 Hours.",
            date: "Jan 10, 2026",
            author: "Product Team",
            category: "Agents Platform Stories",
            logo: "💬",
            featured: true,
        },
        {
            id: 3,
            title: "Cars24 uses ElevenLabs Agents to power India's largest voice-driven car retail operation",
            excerpt: "How Cars24 uses Speech to Text and Agents Platform to increase conversions, reduce operational gaps, and standardize quality across 300+ hubs.",
            date: "Jan 8, 2026",
            author: "Cars24 Team",
            category: "Agents Platform Stories",
            logo: "🚗",
        },
        {
            id: 4,
            title: "Building clinical-grade voice agents for Pharma",
            excerpt: "Increasing physician reach by 30% and cutting admin time by 10 hrs/week with Synthio Labs.",
            date: "Jan 5, 2026",
            author: "Synthio Labs",
            category: "Agents Platform Stories",
            logo: "⚕️",
        },
        {
            id: 5,
            title: "MyPlanAdvocate makes Medicare enrollment twice as efficient with ElevenLabs Agents",
            excerpt: "AI agents pre-qualify ~210,000 calls per month, concentrating licensed capacity on eligible demand.",
            date: "Dec 28, 2025",
            author: "MyPlanAdvocate",
            category: "Agents Platform Stories",
            logo: "🏥",
        },
        {
            id: 6,
            title: "Lemon Slice launches real-time avatar agents powered by ElevenLabs",
            excerpt: "Bringing expressive, interactive avatars to life with ElevenLabs Agents Platform.",
            date: "Dec 20, 2025",
            author: "Lemon Slice",
            category: "Agents Platform Stories",
            logo: "🍋",
        },
        {
            id: 7,
            title: "City of Midland cuts missed calls and scales citizen support with 'Jacky'",
            excerpt: "From 3,000 daily calls and long IVR trees to natural, multilingual assistance across phone and web.",
            date: "Dec 15, 2025",
            author: "City of Midland",
            category: "Agents Platform Stories",
            logo: "🏛️",
        },
        {
            id: 8,
            title: "Freedom Forever scales support nationwide with ElevenLabs Agents",
            excerpt: "Freedom Forever enhances support performance, increases automation capacity, and improves customer and sales experience.",
            date: "Dec 10, 2025",
            author: "Freedom Forever",
            category: "Agents Platform Stories",
            logo: "⚡",
        },
        {
            id: 9,
            title: "TELUS Digital cuts onboarding time by 20% using ElevenLabs Agents",
            excerpt: "50k simulations completed, 20% faster proficiency, and lower churn across onboarding.",
            date: "Dec 5, 2025",
            author: "TELUS Digital",
            category: "Agents Platform Stories",
            logo: "📱",
        },
        {
            id: 10,
            title: "Toyota engages fans with AI-powered Brock Purdy experience",
            excerpt: "Driving deeper engagement with nearly 2 minutes of average interaction time per user.",
            date: "Nov 28, 2025",
            author: "Toyota",
            category: "Agents Platform Stories",
            logo: "🚙",
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main>
                <BlogCategoryHero />

                <div className="container mx-auto px-4 max-w-7xl pb-20">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar */}
                        <BlogCategorySidebar activeCategory="agents-platform-stories" />

                        {/* Blog Posts Grid */}
                        <div className="flex-1">
                            <div className="grid md:grid-cols-2 gap-6">
                                {blogPosts.map((post) => (
                                    <BlogPostCard
                                        key={post.id}
                                        title={post.title}
                                        excerpt={post.excerpt}
                                        date={post.date}
                                        author={post.author}
                                        category={post.category}
                                        logo={post.logo}
                                        featured={post.featured}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BlogCategoryPage;
