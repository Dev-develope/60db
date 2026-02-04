const BrowseAllVoices = () => {
  const voices = [
    { name: "Classic Voice One", usage: "Dramatic Narration" },
    { name: "Legendary Icon A", usage: "Film Dubbing" },
    { name: "Historic Voice B", usage: "Podcast Hosting" },
    { name: "Golden Age Star", usage: "Audiobook Narration" },
    { name: "Iconic Performer C", usage: "Commercial Voice-Over" },
    { name: "Classic Legend D", usage: "Documentary Narration" },
    { name: "Timeless Voice E", usage: "Interactive Media" },
    { name: "Cultural Icon F", usage: "Music Production" },
    { name: "Legendary Figure G", usage: "Game Voice-Over" },
    { name: "Historic Talent H", usage: "Animation Dubbing" },
    { name: "Classic Persona I", usage: "Educational Content" },
    { name: "Iconic Voice J", usage: "Brand Narration" },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Browse all voices
        </h2>
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search voices..."
            className="w-full px-4 py-2 rounded-lg border border-border bg-background"
          />
        </div>

        <div className="space-y-3">
          {voices.map((voice, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-lg border border-border bg-background hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  •
                </div>
                <div>
                  <p className="font-semibold">{voice.name}</p>
                  <p className="text-sm text-muted-foreground">{voice.usage}</p>
                </div>
              </div>
              <button className="text-primary font-semibold text-sm">
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseAllVoices;
