const AffiliateBenefits = () => {
  const benefits = [
    {
      title: "Rewarding referrals",
      description:
        "For every new paid subscriber plan, you'll earn 22% of all payments for the first 12 months — with no limits!",
      icon: "💰",
    },
    {
      title: "Spread the word",
      description:
        "Share 60db.ai with your friends and followers - and help make content universally accessible.",
      icon: "📢",
    },
    {
      title: "Transparent tracking",
      description: "Keep an eye on your earnings with our intuitive dashboard.",
      icon: "📊",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 transition-colors space-y-4"
            >
              <div className="text-5xl">{benefit.icon}</div>
              <h3 className="text-xl font-bold">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliateBenefits;
