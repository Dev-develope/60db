const CareersWhoWeAre = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold">Who we are</h2>

        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are a global team of passionate and innovative individuals united
            by curiosity and a shared goal: to be the first choice for AI audio
            solutions. Together, we solve challenges and create tools that
            change how people work with sound.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Our team has learned their craft in various startups and high-growth
            environments. We bring diverse perspectives from leading tech
            companies, AI research labs, and creative studios worldwide. This
            diversity fuels our innovation and helps us build products that
            truly resonate with our global user base.
          </p>
        </div>

        {/* Team image placeholder */}
        <div className="rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-border h-96 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">👥</div>
            <p className="text-muted-foreground">Global team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersWhoWeAre;
