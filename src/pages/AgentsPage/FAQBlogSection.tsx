import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const FAQBlogSection = () => {
    const faqs = [
        {
            question: "Can I integrate ElevenLabs Conversational AI into my own app?",
            answer: "Yes, you can integrate our Conversational AI into your application using our WebSocket API. This allows for real-time, low-latency interactions. We provide SDKs and documentation to help you get started quickly."
        },
        {
            question: "How many agents can I create?",
            answer: "The number of agents you can create depends on your subscription plan. On our Enterprise plan, you can create unlimited custom agents tailored to specific use cases, knowledge bases, and voice personas."
        },
        {
            question: "What LLMs can I use with my voice agents?",
            answer: "Our platform is LLM-agnostic. You can bring your own LLM (like GPT-4, Claude, or custom models) or use our built-in default models. This flexibility ensures you can optimize for cost, performance, or specific capabilities."
        },
        {
            question: "Can my agent make API calls to external services?",
            answer: "Absolutely. Our agents support function calling (tool use), enabling them to fetch data from your CRM, book appointments, check order status, or trigger any external workflow via REST APIs during the conversation."
        },
        {
            question: "How can I make and receive phone calls with Conversational AI?",
            answer: "We support integration with major telephony providers like Twilio. You can easily configure your agent to handle inbound support calls or make outbound qualification calls directly through phone lines."
        }
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container px-4 mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* FAQ Column */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8">Frequently asked questions</h2>
                        <Accordion type="single" collapsible className="w-full mb-8">
                            {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                                    <AccordionTrigger className="text-left py-4 text-sm md:text-base font-medium hover:text-primary transition-colors hover:no-underline">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                        <Button variant="outline" className="rounded-full px-6">
                            View FAQs
                        </Button>
                    </div>

                    {/* Blog Column */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8">Latest Blogs</h2>
                        <div className="space-y-4 mb-8">
                            {[
                                "Introducing ElevenLabs Agents",
                                "ElevenLabs Agents can now navigate IVR phone trees",
                                "How we engineered RAG to be 50% faster",
                                "AI Voice Agents",
                                "Conversational AI Platform"
                            ].map((blog, i) => (
                                <div key={i} className="py-4 border-b border-border flex items-center justify-between group cursor-pointer">
                                    <span className="text-sm md:text-base font-medium group-hover:text-primary transition-colors">{blog}</span>
                                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                            ))}
                        </div>
                        <Button variant="outline" className="rounded-full px-6">
                            View Blog
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQBlogSection;
