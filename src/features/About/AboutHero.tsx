const AboutHero = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">
              About
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto">
              The voice of innovation. Empowering creators,
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                businesses, and human connection.
              </span>
            </h1>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-border h-96 md:h-[500px] flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🎤</div>
            <p className="text-muted-foreground">Team photo showcase</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
