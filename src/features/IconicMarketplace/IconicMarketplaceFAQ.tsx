import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const IconicMarketplaceFAQ = () => {
  const faqs = [
    {
      question: "What is the Iconic Marketplace?",
      answer:
        "The Iconic Marketplace is 60db.ai's curated collection of licensed voice likenesses of legendary performers and iconic figures. It provides creators with legal, ethical access to iconic voices for their projects.",
    },
    {
      question: "How can I use iconic voices in my project?",
      answer:
        "Simply browse the marketplace, select an iconic voice, choose your licensing tier, and integrate it into your project. We provide detailed documentation and API access for seamless integration.",
    },
    {
      question: "What licensing options are available?",
      answer:
        "We offer multiple licensing tiers: Personal Creative (indie creators), Commercial Professional (businesses), and Enterprise (large-scale operations). Each tier has different usage rights and pricing.",
    },
    {
      question: "Can I use iconic voices for commercial projects?",
      answer:
        "Yes, all voices in the Iconic Marketplace can be used commercially with the appropriate license tier. We ensure all usage rights are properly cleared and documented.",
    },
    {
      question: "What uses are covered under the Iconic Marketplace license?",
      answer:
        "Commercial licenses cover music production, film and television, podcasts, audiobooks, games, advertising, streaming content, and most commercial applications.",
    },
    {
      question: "How do I get started using the Iconic Marketplace?",
      answer:
        "Create a 60db.ai account, browse available iconic voices, choose your project type, select a licensing tier that fits your needs, and start creating. Our support team is available 24/7 to help.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently asked questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default IconicMarketplaceFAQ;
