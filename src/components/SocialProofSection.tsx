const logos = [
  { name: "Spotify", width: "w-28" },
  { name: "Discord", width: "w-28" },
  { name: "Unity", width: "w-24" },
  { name: "Shopify", width: "w-28" },
  { name: "Notion", width: "w-24" },
  { name: "Figma", width: "w-24" },
  { name: "Stripe", width: "w-20" },
  { name: "Vercel", width: "w-24" },
];

const SocialProofSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <p className="text-center text-sm font-medium text-muted mb-10 uppercase tracking-wider">
          Trusted by Industry Leaders
        </p>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-secondary/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-secondary/30 to-transparent z-10" />

          {/* Scrolling Logos */}
          <div className="flex animate-marquee">
            {/* First set */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className={`flex items-center justify-center px-8 lg:px-12 ${logo.width}`}
              >
                <div className="h-8 flex items-center justify-center">
                  <span className="font-semibold text-xl text-muted/60 hover:text-muted transition-colors whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className={`flex items-center justify-center px-8 lg:px-12 ${logo.width}`}
              >
                <div className="h-8 flex items-center justify-center">
                  <span className="font-semibold text-xl text-muted/60 hover:text-muted transition-colors whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "10,000+", label: "Active Developers" },
            { value: "500M+", label: "Characters Generated" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "4.9★", label: "Developer Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-2xl lg:text-3xl font-semibold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
