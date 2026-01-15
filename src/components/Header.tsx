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
      label: "Products",
      columns: [
        {
          title: "Platform",
          items: [
            { name: "Product Overview", desc: "Discover 60db.ai Voice Platform" },
            { name: "Studio", desc: "Generate long-form audio" },
            { name: "Voice Library", desc: "Voices for any character" },
            { name: "Productions", desc: "Human-edited content" },
            { name: "Mobile App", desc: "Lifelike voiceovers on the go" },
          ],
        },
        {
          title: "Create",
          items: [
            { name: "Text to Speech", desc: "Generate human-like AI Voice" },
            { name: "Speech to Text", desc: "Transcribe audio and video" },
            { name: "Voice Isolator", desc: "Extract crystal-clear speech" },
            { name: "Sound Effects", desc: "Generate any sound" },
            { name: "Music", desc: "Convert an idea into a song" },
          ],
        },
        {
          title: "Advanced",
          items: [
            { name: "Voice Design", desc: "Generate a custom voice" },
            { name: "Realtime Speech", desc: "Live speech transcription" },
            { name: "Voice Changer", desc: "Deliver audio in any voice" },
            { name: "Voice Cloning", desc: "Create a replica of your voice" },
            { name: "Dubbing", desc: "Localize audio content" },
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
            { name: "Product Overview", desc: "Discover 60db.ai Agents" },
            { name: "Integrations", desc: "Connect agents to tools" },
            { name: "Customer Stories", desc: "Learn from success stories" },
            { name: "Trust & Reliability", desc: "Deploy safe AI agents" },
          ],
        },
        {
          title: "Industries",
          items: [
            { name: "Telecommunications", desc: "Smarter conversations at scale" },
            { name: "Financial Services", desc: "Deliver secure service" },
            { name: "Healthcare", desc: "Streamline patient operations" },
            { name: "Technology", desc: "Drive growth with AI" },
            { name: "Retail", desc: "Increase sales and loyalty" },
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
            { name: "Overview", desc: "Get started with our APIs" },
            { name: "Documentation", desc: "Comprehensive guides" },
            { name: "API Reference", desc: "Complete API specs" },
            { name: "Enterprise", desc: "Custom solutions" },
            { name: "Community", desc: "Join the discussion" },
          ],
        },
        {
          title: "APIs",
          items: [
            { name: "Agents API", desc: "Deploy Voice Agents" },
            { name: "Text to Speech", desc: "Generate speech via API" },
            { name: "Speech to Text", desc: "Transcribe in bulk" },
            { name: "Dubbing API", desc: "Translate audio via API" },
            { name: "Music API", desc: "Compose songs via API" },
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
                                <a
                                  href="#"
                                  className="block rounded-md p-2 hover:bg-accent transition-colors group"
                                >
                                  <span className="block text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                    {item.name}
                                  </span>
                                  <span className="block text-xs text-muted mt-0.5">
                                    {item.desc}
                                  </span>
                                </a>
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
              <a
                href="#pricing"
                className="inline-flex h-10 items-center justify-center px-4 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                Pricing
              </a>
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
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Sign up
            </Button>
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
                              <a
                                href="#"
                                className="block py-2 pl-2 text-sm text-muted hover:text-foreground transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <a
              href="#pricing"
              className="py-3 text-sm font-medium text-foreground border-b border-border/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            
            <div className="flex flex-col gap-2 pt-4">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-center">
                  Log in
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">
                  Sign up
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
