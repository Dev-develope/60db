import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const VoiceDataFAQ = () => {
  const faqs = [
    {
      question: "How high quality does my voice data need to be?",
      answer:
        "We're looking for clear, natural voice data with minimal background noise. Professional studio quality isn't required – good room acoustics and a decent microphone are sufficient. The key is consistency and clarity so our models can learn accurately.",
    },
    {
      question: "Can 60db.ai help me clean or prepare my voice data?",
      answer:
        "Yes, we can provide guidance on preparing your voice data. We'll give you detailed specifications on recording quality, file formats, and processing steps once your data is approved. Our team can also assist with preprocessing if needed.",
    },
    {
      question: "Do I need to provide transcripts for my voice data?",
      answer:
        "Transcripts are helpful but not always required. However, providing accurate transcripts significantly improves the quality of our models. We can work with you to transcribe your data or accept pre-transcribed data.",
    },
    {
      question: "Will my voice data be shared with others?",
      answer:
        "No. Your voice data remains proprietary. You have complete control over how your voice is used through our permission settings. We never share raw voice data with third parties without your explicit consent.",
    },
    {
      question: "Is my dataset too small to participate?",
      answer:
        "Not necessarily. We accept datasets of various sizes. While larger datasets are valuable, smaller high-quality datasets for specific use cases are also appreciated. We'll evaluate your submission and let you know what works best.",
    },
    {
      question: "I'm not sure about licenses – should I apply?",
      answer:
        "We can work with you on licensing terms. If you own the voice data and have rights to share it, you can apply. Our legal team can discuss licensing options and agreements during the partnership process.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-2 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about voice data partnerships
          </p>
        </div>

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

export default VoiceDataFAQ;
