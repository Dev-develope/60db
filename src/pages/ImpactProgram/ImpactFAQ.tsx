import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the Impact Program?",
    answer:
      "The Impact Program is 60db.ai's initiative to democratize access to voice AI technology for individuals and organizations that need it most. We provide free or heavily discounted licenses to those with accessibility needs and mission-driven nonprofits.",
  },
  {
    question: "What types of organizations are we looking to partner with?",
    answer:
      "We partner with nonprofits in healthcare, education, and culture sectors that can demonstrate how 60db.ai technology will help them serve their mission and communities.",
  },
  {
    question: "How can I express interest in partnering together?",
    answer:
      "You can submit an application through our Impact Partners portal. We review applications on a rolling basis and connect with organizations that align with our impact goals.",
  },
  {
    question:
      "If I have permanent voice loss (e.g., ALS, mouth cancer, MS) how do I apply for a voice?",
    answer:
      "Individuals with permanent voice loss can apply directly through our Impact Program website. You'll need to provide documentation of your condition and complete a verification process.",
  },
  {
    question: "Can I get assistance editing my audio?",
    answer:
      "Yes, we provide support and tutorials for audio editing. Our team can also assist with voice clone creation and optimization.",
  },
  {
    question: "Is it possible to clone a child's voice?",
    answer:
      "Voice cloning for children is handled with special care and requires parental consent and additional verification. Contact our team to discuss specific situations.",
  },
  {
    question: "How will I hear back from ElevenLabs?",
    answer:
      "We aim to respond to all applications within 2-3 weeks. You'll receive updates via email about your application status.",
  },
  {
    question: "What are some examples of ways we partnered with organizations?",
    answer:
      "We work with partners in various ways: providing free licenses, technical support, custom features, and collaborative development of new accessibility tools.",
  },
];

const ImpactFAQ = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-card/50 border-b border-border">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently asked questions
          </h2>
        </div>

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

export default ImpactFAQ;
