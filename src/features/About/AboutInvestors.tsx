const investors = [
  "Andreessen Horowitz",
  "Sequoia Capital",
  "NEA",
  "T-Mobile",
  "Salesforce",
  "Google Ventures",
  "Samsung",
  "Spotify",
  "Microsoft",
  "Amazon",
  "Meta",
  "Sony",
];

const AboutInvestors = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            We're backed by leading names
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            {investors.map((investor) => (
              <div
                key={investor}
                className="flex items-center justify-center h-20 rounded-lg bg-card border border-border/50 hover:border-border transition-colors p-4"
              >
                <p className="text-sm font-medium text-center text-muted-foreground">
                  {investor}
                </p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto text-left space-y-6 border-t border-border pt-12">
            <p className="text-base text-muted-foreground leading-relaxed">
              60db.ai is an AI audio company at the forefront of voice
              technology innovation. We're committed to making voice interaction
              natural, accessible, and transformative for businesses and
              creators worldwide.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Our mission is to democratize advanced voice AI technology. From
              ultra-realistic text-to-speech to intelligent voice agents, we're
              building the infrastructure that powers the next generation of
              audio experiences.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Through our comprehensive platform, organizations deploy
              intelligent voice solutions that enhance customer experiences,
              improve accessibility, and unlock new possibilities in audio
              creation and interaction. Our technology enables seamless
              communication across 70+ languages, reaching audiences globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInvestors;
