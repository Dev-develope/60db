import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const StudentsFAQ = () => {
  const faqs = [
    {
      question: "Who is eligible for the student discount?",
      answer:
        "Any student with a valid .edu email address or proof of enrollment is eligible for our student discount. This includes undergraduate, graduate, and PhD students.",
    },
    {
      question: "How do I get the student discount?",
      answer:
        "Sign up with your school-issued email address on our website. You'll be automatically verified and receive instant access to student pricing and benefits.",
    },
    {
      question: "Does my email need to match my school-issued email address?",
      answer:
        "Yes, you'll need to sign up with a valid school-issued email address to qualify for the student discount. This helps us verify your student status.",
    },
    {
      question: "Is the student discount available in all countries?",
      answer:
        "Our student program is available in most countries. Please check our website for region-specific details and any local restrictions.",
    },
    {
      question: "What happens after the student discount ends?",
      answer:
        "Once you graduate, your student pricing will be converted to our standard pricing. You'll receive advance notice before any changes to your account.",
    },
    {
      question: "What if I already have a paid plan?",
      answer:
        "If you already have a paid plan, you can apply the student benefits to your existing account. Contact our support team for assistance with plan migration.",
    },
    {
      question: "Can I transfer my voice library from one account to another?",
      answer:
        "Yes, you can transfer your voice library to another account. Please contact our support team and we'll help you with the migration process.",
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

export default StudentsFAQ;
