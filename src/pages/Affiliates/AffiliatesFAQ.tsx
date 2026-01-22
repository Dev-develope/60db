import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AffiliatesFAQ = () => {
  const faqs = [
    {
      question: "How much can I earn as an affiliate?",
      answer:
        "You can earn 22% of all payments from referrals for the first 12 months of each subscription with no earning limits. The more you promote, the more you earn!",
    },
    {
      question: "How do I join the 60db.ai Creator Affiliate Program?",
      answer:
        "Simply click 'Instant Sign Up' and complete the registration process. You'll need a valid email address and some basic information about how you plan to promote 60db.ai.",
    },
    {
      question: "When and how will I get paid?",
      answer:
        "Payments are processed monthly. You'll receive your earnings via the payment method specified in your dashboard (bank transfer, PayPal, etc.) once you reach the minimum payout threshold.",
    },
    {
      question: "What is the minimum payout threshold for the Creator Affiliate program?",
      answer:
        "The minimum payout threshold is $50. Once your earnings reach this amount, you're eligible for payment in the next payment cycle.",
    },
    {
      question: "How can I track my sales and commissions?",
      answer:
        "Your affiliate dashboard provides real-time tracking of all your referrals, conversions, and earnings. You can see detailed analytics and performance metrics anytime.",
    },
    {
      question: "Do I need to have a blog or website to join?",
      answer:
        "No, you don't need a blog or website. You can promote 60db.ai through any channel - social media, YouTube, podcasts, newsletters, or personal networks.",
    },
    {
      question: "Can I refer other affiliates and earn from their sales?",
      answer:
        "Our standard affiliate program focuses on direct referrals of paying customers. For multi-level opportunities, please contact our partnership team.",
    },
    {
      question: "What happens if a customer I referred requests a refund?",
      answer:
        "If a referred customer requests a refund within the refund period, the associated commission will be reversed. We only credit commissions for retained subscriptions.",
    },
    {
      question: "Who can I contact if I have more questions or need support?",
      answer:
        "You can reach our affiliate support team through the help section in your dashboard or email support@60db.ai. We're here to help!",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30 border-b border-border">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Creator affiliate program FAQ
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

export default AffiliatesFAQ;
