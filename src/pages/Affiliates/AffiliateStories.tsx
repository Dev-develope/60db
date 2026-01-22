const AffiliateStories = () => {
  const stories = [
    {
      planType: "Creator",
      referrals: 10,
      earnings: "$580",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      name: "Alex Morgan",
    },
    {
      planType: "Pro",
      referrals: 20,
      earnings: "$5,227",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      name: "Jordan Lee",
    },
    {
      planType: "Creator",
      referrals: 15,
      earnings: "$1,240",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop",
      name: "Sam Taylor",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Affiliate Success Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow h-96"
            >
              {/* Background Image */}
              <img
                src={story.image}
                alt={story.name}
                className="w-full h-full object-cover"
              />

              {/* Overlay Card */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <div className="bg-white/95 rounded-lg p-4 space-y-3 backdrop-blur-sm">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                      Plan Type
                    </p>
                    <p className="text-lg font-bold">{story.planType}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                      Referrals
                    </p>
                    <p className="text-xl font-bold">{story.referrals}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                      Total Earnings
                    </p>
                    <p className="text-2xl font-bold text-primary">{story.earnings}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliateStories;
