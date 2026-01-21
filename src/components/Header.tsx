import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  const menuData = {
    products: {
      label: "Product",
      columns: [
        {
          title: "Platform",
          items: [
            { name: "Image & Video", desc: "Discover our visual tools", path: "/image-video" },
            { name: "Products Overview", desc: "Discover 60db.ai Voice Platform", path: "/products" },
            { name: "Studio", desc: "Generate long-form audio", path: "/studio" },
            { name: "Voice Library", desc: "Voices for any character", path: "/voice-library" },
            { name: "Productions", desc: "Human-edited content", path: "/production" },
            { name: "Mobile App", desc: "Lifelike voiceovers on the go", path: "/mobile" },
          ],
        },
        {
          title: "Create",
          items: [
            { name: "Text to Speech", desc: "Generate human-like AI Voice", path: "/text-to-speech" },
            { name: "Speech to Text", desc: "Transcribe audio and video", path: "/speech-to-text" },
            { name: "Voice Isolator", desc: "Extract crystal-clear speech", path: "/voice-isolator" },
            { name: "Sound Effects", desc: "Generate any sound", path: "/sound-effects" },
            { name: "Music", desc: "Convert an idea into a song", path: "/music" },
          ],
        },
        {
          title: "Advanced",
          items: [
            { name: "Voice Design", desc: "Generate a custom voice", path: "/voice-design" },
            { name: "Realtime Speech", desc: "Live speech transcription", path: "/realtime-speech-to-text" },
            { name: "Voice Changer", desc: "Deliver audio in any voice", path: "/voice-changer" },
            { name: "Voice Cloning", desc: "Create a replica of your voice", path: "/voice-cloning" },
            { name: "Dubbing", desc: "Localize audio content", path: "/dubbing-studio" },
          ],
        },
      ],
    },
    agents: {
      label: "Agents Platform",
      columns: [
        {
          title: "General",
          items: [
            { name: "Product Overview", desc: "Discover 60db.ai Agents", path: "/agents" },
            { name: "Integrations", desc: "Connect agents to tools", path: "/agents/integrations" },
            { name: "Customer Stories", desc: "Learn from success stories" },
            { name: "Trust & Reliability", desc: "Deploy safe AI agents" },
          ],
        },
        {
          title: "Industries",
          items: [
            { name: "Telecommunications", desc: "Smarter conversations at scale", path: "/agents/telecommunications" },
            { name: "Financial Services", desc: "Deliver secure service", path: "/agents/financial-services" },
            { name: "Healthcare", desc: "Streamline patient operations", path: "/agents/healthcare" },
            { name: "Technology", desc: "Drive growth with AI", path: "/agents/technology" },
            { name: "Retail", desc: "Increase sales and loyalty", path: "/agents/retail" },
          ],
        },
        {
          title: "Use Cases",
          items: [
            { name: "Customer Support", desc: "Resolve inquiries with AI" },
            { name: "Lead Qualification", desc: "Turn leads into revenue" },
            { name: "AI Receptionist", desc: "Streamline operations" },
            { name: "Outbound", desc: "Scale outreach efficiently" },
          ],
        },
      ],
    },
    developers: {
      label: "Developers",
      columns: [
        {
          title: "Platform",
          items: [
            { name: "Overview", desc: "Get started with our APIs", path: "#" },
            { name: "Documentation", desc: "Comprehensive guides", path: "#" },
            { name: "API Reference", desc: "Complete API specs", path: "#" },
            { name: "Enterprise", desc: "Custom solutions", path: "#" },
            { name: "Community", desc: "Join the discussion", path: "#" },
          ],
        },
        {
          title: "APIs",
          items: [
            { name: "Agents API", desc: "Deploy Voice Agents", path: "#" },
            { name: "Text to Speech", desc: "Generate speech via API", path: "/text-to-speech" },
            { name: "Speech to Text", desc: "Transcribe in bulk", path: "/speech-to-text" },
            { name: "Dubbing API", desc: "Translate audio via API", path: "#" },
            { name: "Music API", desc: "Compose songs via API", path: "/music" },
          ],
        },
      ],
    },
    resources: {
      label: "Resources",
      columns: [
        {
          title: "Company",
          items: [
            { name: "About", desc: "Our mission and team" },
            { name: "Safety", desc: "Our commitment to safety" },
            { name: "Blog", desc: "Latest news and updates" },
            { name: "Careers", desc: "Join our team" },
          ],
        },
        {
          title: "Initiatives",
          items: [
            { name: "Impact Program", desc: "Making a difference" },
            { name: "Voice Partnerships", desc: "Collaborate with us" },
            { name: "Grants for Startups", desc: "Support for founders" },
            { name: "For Students", desc: "Educational resources" },
            { name: "Affiliate Program", desc: "Partner with us" },
          ],
        },
      ],
    },
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/60db-logo.png"
            alt="60db.ai Logo"
            className="h-[3rem] w-[6rem]"
          />
          {/* Optional: Keep text next to logo */}
          {/* <span className="font-serif text-xl font-semibold text-foreground">60db.ai</span> */}
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            {Object.entries(menuData).map(([key, menu]) => (
              <NavigationMenuItem key={key}>
                <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-muted hover:text-foreground hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-foreground">
                  {menu.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] gap-0 p-6 lg:w-[800px]" style={{ gridTemplateColumns: `repeat(${menu.columns.length}, 1fr)` }}>
                    {menu.columns.map((column, idx) => (
                      <div key={idx} className="space-y-4">
                        <h4 className="text-xs font-medium uppercase tracking-wider text-muted">
                          {column.title}
                        </h4>
                        <ul className="space-y-1">
                          {column.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={item.path || "#"}
                                  className="block rounded-md p-2 hover:bg-accent transition-colors group"
                                >
                                  <span className="block text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                    {item.name}
                                  </span>
                                  <span className="block text-xs text-muted mt-0.5">
                                    {item.desc}
                                  </span>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}

            {/* Simple links */}
            <NavigationMenuItem>
              <Link
                to="/pricing"
                className="inline-flex h-10 items-center justify-center px-4 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                Pricing
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="text-muted hover:text-foreground">
              Log in
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="sm">Get Started Free</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {Object.entries(menuData).map(([key, menu]) => (
              <div key={key} className="border-b border-border/50 pb-2">
                <button
                  onClick={() => setOpenMobileMenu(openMobileMenu === key ? null : key)}
                  className="flex w-full items-center justify-between py-3 text-sm font-medium text-foreground"
                >
                  {menu.label}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      openMobileMenu === key && "rotate-180"
                    )}
                  />
                </button>
                {openMobileMenu === key && (
                  <div className="pb-4 pl-2 space-y-4">
                    {menu.columns.map((column, idx) => (
                      <div key={idx}>
                        <h4 className="text-xs font-medium uppercase tracking-wider text-muted mb-2">
                          {column.title}
                        </h4>
                        <ul className="space-y-1">
                          {column.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                to={item.path || "#"}
                                className="block py-2 pl-2 text-sm text-muted hover:text-foreground transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/pricing"
              className="py-3 text-sm font-medium text-foreground border-b border-border/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>

            <div className="flex flex-col gap-2 pt-4">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-center">
                  Log in
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">Get Started Free</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
