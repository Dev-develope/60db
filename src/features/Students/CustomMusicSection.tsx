const CustomMusicSection = () => {
  const musicGenres = [
    {
      title: "Dreamy Indie Rock",
      tags: ["Slow Tempo", "Atmospheric", "Dreamy"],
      icon: "🎵",
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Slow Latin Reggaeton",
      tags: ["Reggaeton", "Slow Groove", "Charismatic Vocals"],
      icon: "🎶",
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Conscious Hip Hop",
      tags: ["Conscious Rap", "Jazzy", "Experimental"],
      icon: "🎤",
      color: "from-purple-500/20 to-pink-500/20",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-2 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Generate high-quality, customized music
          </h2>
          <p className="text-muted-foreground">
            Create original AI-generated music for your projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {musicGenres.map((genre, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg border border-border bg-gradient-to-br ${genre.color} backdrop-blur-sm hover:shadow-lg transition-shadow`}
            >
              <div className="text-5xl mb-4">{genre.icon}</div>
              <h3 className="text-xl font-bold mb-4">{genre.title}</h3>
              <div className="flex flex-wrap gap-2">
                {genre.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-background/50 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomMusicSection;
