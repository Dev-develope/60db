import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    company: "Meta",
    quote:
      "From dubbing Reels in local languages, to generating music and character voices in Horizon, 60db.ai platform enables global creators, businesses, and enterprises to build with voice, music, and sound at scale.",
  },
  {
    company: "Chess.com",
    quote:
      "Millions of people learn chess from creators like Hikaru, Levy, and Magnus every day. With 60db.ai, we've taken a big step toward creating immersive, personal learning experiences.",
  },
  {
    company: "Twilio",
    quote:
      "We've integrated 60db.ai's generative AI voice technology into our CPaaS, enhancing conversational interactions with the most expressive, human-sounding voices available.",
  },
];

const TextToSpeechAPISocialProof = () => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Powering world's leading companies and brands
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by companies building at scale
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.company} className="border border-border">
              <CardHeader>
                <CardTitle className="text-lg">{testimonial.company}</CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="text-sm text-muted-foreground italic">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextToSpeechAPISocialProof;
