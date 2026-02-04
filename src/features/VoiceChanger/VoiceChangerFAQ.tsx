
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Is the AI Voice Changer free?",
        answer: "Yes, you can try our AI Voice Changer for free. We offer a generous free tier that allows you to experiment with voice transformation and generation."
    },
    {
        question: "Can I use the voice changer in real-time?",
        answer: "Absolutely. Our low-latency technology is designed for real-time applications, making it perfect for live streaming, gaming, and online calls."
    },
    {
        question: "Is it safe to use?",
        answer: "We prioritize user safety and data privacy. All voice processing is encrypted and we strictly adhere to ethical AI guidelines."
    },
    {
        question: "What languages are supported?",
        answer: "Our voice changer supports 29 languages, allowing you to maintain the accent and nuance of the original speech across different languages."
    },
    {
        question: "Can I clone my own voice?",
        answer: "Yes, with our Voice Cloning technology, you can create a digital replica of your own voice or any voice you have rights to, and use it with the voice changer."
    }
];

const VoiceChangerFAQ = () => {
    return (
        <section className="py-24 bg-gray-50 border-t border-gray-200">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Frequently Asked Questions
                    </h2>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 bg-white px-6 rounded-2xl">
                            <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline py-6">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-500 pb-6 text-base leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default VoiceChangerFAQ;
