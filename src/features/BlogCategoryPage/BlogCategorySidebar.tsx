interface BlogCategory {
    id: string;
    label: string;
    path: string;
}

interface BlogCategorySidebarProps {
    activeCategory: string;
}

const BlogCategorySidebar = ({ activeCategory }: BlogCategorySidebarProps) => {
    const categories: BlogCategory[] = [
        { id: "featured", label: "Featured", path: "/blog" },
        { id: "api-platform-stories", label: "API Platform Stories", path: "/blog/category/api-platform-stories" },
        { id: "affiliates", label: "Affiliates", path: "/blog/category/affiliates" },
        { id: "agents-platform-stories", label: "Agents Platform Stories", path: "/blog/category/agents-platform-stories" },
        { id: "company", label: "Company", path: "/blog/category/company" },
        { id: "creative-platform-stories", label: "Creative Platform Stories", path: "/blog/category/creative-platform-stories" },
        { id: "customer-stories", label: "Customer stories", path: "/blog/category/customer-stories" },
        { id: "developer", label: "Developer", path: "/blog/category/developer" },
        { id: "impact", label: "Impact", path: "/blog/category/impact" },
        { id: "product", label: "Product", path: "/blog/category/product" },
        { id: "research", label: "Research", path: "/blog/category/research" },
    ];

    return (
        <aside className="w-full lg:w-64 lg:sticky lg:top-24 self-start mb-8 lg:mb-0">
            <nav className="space-y-1">
                {categories.map((category) => (
                    <a
                        key={category.id}
                        href={category.path}
                        className={`block px-4 py-2 text-sm rounded-lg transition-colors ${activeCategory === category.id
                                ? "bg-secondary text-foreground font-medium"
                                : "text-muted hover:text-foreground hover:bg-secondary/50"
                            }`}
                    >
                        {category.label}
                    </a>
                ))}
            </nav>
        </aside>
    );
};

export default BlogCategorySidebar;
