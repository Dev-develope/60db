const SafetyMission = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our Safety Mission
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-base text-muted-foreground leading-relaxed">
              At 60db.ai, we believe deeply in the immense benefits of AI audio.
              Our technology is used by millions of individuals and thousands of
              businesses to make content and information accessible to audiences
              for whom it was previously out of reach, to create engaging
              education tools, to power immersive entertainment experiences, to
              bring voices back for people who have lost the ability to speak
              due to accident or illness, and so much more.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              As with all transformational technologies, we also recognize that
              when technology is misused, it can cause harm. That's why we are
              committed to protecting against the misuse of our models and
              products – especially efforts to deceive or to exploit others. Our
              safety principles guide our everyday work and are reflected in
              concrete, multi-layered safeguards designed to prevent and address
              abuse.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-8 space-y-4">
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "AI safety is inseparable from innovation at 60db.ai. Ensuring
                our systems are developed, deployed, and used safely remains at
                the core of our strategy."
              </p>
              <div>
                <p className="font-semibold text-foreground">Sarah Chen</p>
                <p className="text-sm text-muted-foreground">
                  Co-founder at 60db.ai
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 space-y-4">
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "The volume of AI-generated content will keep growing. We want
                to provide the needed transparency, helping verify the origins
                of digital content."
              </p>
              <div>
                <p className="font-semibold text-foreground">
                  Marcus Rodriguez
                </p>
                <p className="text-sm text-muted-foreground">
                  Co-founder at 60db.ai
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyMission;
