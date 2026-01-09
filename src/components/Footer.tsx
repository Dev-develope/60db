import { Twitter, Github, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "API Docs", href: "#docs" },
    { label: "Changelog", href: "#changelog" },
  ],
  "Use Cases": [
    { label: "Gaming", href: "#gaming" },
    { label: "Audiobooks", href: "#audiobooks" },
    { label: "Customer Support", href: "#support" },
    { label: "Podcasts", href: "#podcasts" },
  ],
  Resources: [
    { label: "Documentation", href: "#docs" },
    { label: "Blog", href: "#blog" },
    { label: "Tutorials", href: "#tutorials" },
    { label: "Status", href: "#status" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
    { label: "Press Kit", href: "#press" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#twitter", label: "Twitter" },
  { icon: Github, href: "#github", label: "GitHub" },
  { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
  { icon: Youtube, href: "#youtube", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="font-serif text-lg font-bold text-primary-foreground">60</span>
              </div>
              <span className="font-serif text-xl font-semibold text-foreground">60db.ai</span>
            </a>
            <p className="text-sm text-muted max-w-xs mb-6">
              Studio-quality AI voices for developers and creators. 
              Transform text into lifelike speech in milliseconds.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="h-10 w-10 rounded-lg bg-background border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary/50 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} 60db.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="text-sm text-muted hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm text-muted hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="text-sm text-muted hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
