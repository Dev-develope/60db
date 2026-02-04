import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can users contact us about their concerns?",
    answer:
      "Users can report safety concerns through our support portal, email, or direct contact forms on our website. We have a dedicated team that reviews all reports and responds promptly.",
  },
  {
    question: "How do we cooperate with governmental authorities?",
    answer:
      "We cooperate fully with governmental authorities in accordance with applicable laws. We maintain clear communication channels and respond to lawful requests in a timely manner.",
  },
  {
    question: "What is the appeals system for EU users?",
    answer:
      "EU users have the right to appeal safety decisions through our formal appeals process. This ensures fair and transparent handling of safety-related decisions.",
  },
  {
    question: "How can EU users settle disputes out-of-court?",
    answer:
      "We offer dispute resolution mechanisms including mediation and alternative dispute resolution (ADR) for EU users. Users can access these services without going to court.",
  },
];

const SafetyFAQ = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Frequently asked questions
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-4"
            >
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

export default SafetyFAQ;
