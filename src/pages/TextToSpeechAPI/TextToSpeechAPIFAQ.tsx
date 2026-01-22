import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Which Text to Speech model should I use?",
    answer:
      "Choose based on your use case: Nova for ultra-low latency real-time applications, Sonic for balanced quality and latency, and Opus for expressive long-form content.",
  },
  {
    question: "What latency can I expect?",
    answer:
      "Nova provides ultra-low latency (~25ms), Sonic offers ~250-300ms with high quality, and Opus is optimized for long-form content with natural delivery.",
  },
  {
    question: "How many languages are supported?",
    answer:
      "Our models support 32+ languages for most use cases, with Opus supporting 70+ languages for maximum global coverage.",
  },
  {
    question: "What are the character limits per request?",
    answer:
      "Nova and Sonic support up to 40,000 characters per request, while Opus supports up to 3,000 characters optimized for expressive delivery.",
  },
  {
    question: "Can I control emotion and delivery?",
    answer:
      "Yes, our models support emotion tags, delivery cues, and audio events for expressive, controllable speech generation.",
  },
  {
    question: "How many voices are available?",
    answer:
      "We provide access to 10,000+ pre-built voices, plus the ability to create custom voices through voice cloning and design.",
  },
  {
    question: "Does the API support streaming?",
    answer:
      "Yes, all models support both streaming and batch processing for flexibility in your application architecture.",
  },
  {
    question: "Can I use custom voices?",
    answer:
      "Absolutely, our voice cloning technology allows you to create custom voices from voice samples in seconds.",
  },
];

const TextToSpeechAPIFAQ = () => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our API
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-left font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default TextToSpeechAPIFAQ;
