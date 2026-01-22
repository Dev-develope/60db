const FeaturedVoices = () => {
  const featured = [
    {
      name: "Voice Legend One",
      description: "Iconic Hollywood actress known for timeless performances",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    },
    {
      name: "Voice Legend Two",
      description: "Golden Age cinema star with distinctive vocal presence",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Voice Legend Three",
      description: "Legendary performer with unforgettable voice",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured Voices
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Discover our most popular iconic voice likenesses
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((voice, index) => (
            <div key={index} className="space-y-4">
              {/* Isometric image */}
              <div className="relative h-64 flex items-center justify-center">
                <div className="w-56 h-56 transform -rotate-45 overflow-hidden rounded-lg border border-border shadow-lg">
                  <img
                    src={voice.image}
                    alt={voice.name}
                    className="w-full h-full object-cover transform rotate-45 scale-125"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center">{voice.name}</h3>
              <p className="text-center text-muted-foreground text-sm">
                {voice.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVoices;
