import { useEffect, useState } from "react";

interface SidebarCategory {
    id: string;
    label: string;
}

interface IntegrationsSidebarProps {
    categories: SidebarCategory[];
}

const IntegrationsSidebar = ({ categories }: IntegrationsSidebarProps) => {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = categories.map((cat) => ({
                id: cat.id,
                element: document.getElementById(cat.id),
            }));

            // Find which section is currently in view
            const currentSection = sections.find((section) => {
                if (!section.element) return false;
                const rect = section.element.getBoundingClientRect();
                return rect.top <= 150 && rect.bottom >= 150;
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, [categories]);

    const scrollToCategory = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <aside className="hidden lg:block w-64 sticky top-24 self-start">
            <nav className="space-y-1">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => scrollToCategory(category.id)}
                        className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-colors ${activeSection === category.id
                                ? "bg-secondary text-foreground font-medium"
                                : "text-muted hover:text-foreground hover:bg-secondary/50"
                            }`}
                    >
                        {category.label}
                    </button>
                ))}
            </nav>
        </aside>
    );
};

export default IntegrationsSidebar;
