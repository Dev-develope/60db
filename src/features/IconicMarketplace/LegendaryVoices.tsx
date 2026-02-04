const LegendaryVoices = () => {
  const voices = [
    {
      name: "Classic Icon 1",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
    {
      name: "Classic Icon 2",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    },
    {
      name: "Classic Icon 3",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          License Legendary Voices
        </h2>

        {/* Isometric diamond grid */}
        <div className="flex justify-center items-center min-h-96">
          <div className="relative w-full max-w-2xl h-96">
            {/* Left diamond */}
            <div className="absolute left-0 top-12 w-40 h-40 transform -rotate-45 overflow-hidden rounded-lg shadow-lg border border-border">
              <img
                src={voices[0].image}
                alt={voices[0].name}
                className="w-full h-full object-cover transform rotate-45 scale-125"
              />
            </div>

            {/* Right diamond */}
            <div className="absolute right-0 top-12 w-40 h-40 transform -rotate-45 overflow-hidden rounded-lg shadow-lg border border-border">
              <img
                src={voices[1].image}
                alt={voices[1].name}
                className="w-full h-full object-cover transform rotate-45 scale-125"
              />
            </div>

            {/* Center diamond (larger) */}
            <div className="absolute left-1/2 top-32 -translate-x-1/2 w-48 h-48 transform -rotate-45 overflow-hidden rounded-lg shadow-lg border border-border">
              <img
                src={voices[2].image}
                alt={voices[2].name}
                className="w-full h-full object-cover transform rotate-45 scale-125"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegendaryVoices;
