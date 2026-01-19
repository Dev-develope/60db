import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
    const faqs = [
        {
            question: "What is the ElevenLabs Creative Platform?",
            answer: "The Creative Platform is a comprehensive suite of tools designed for generating, editing, and localizing premium audio and video content at scale.",
        },
        {
            question: "What types of content can I create?",
            answer: "You can create lifelike voiceovers for articles, books, video dubbing across languages, and custom AI voices for your brand.",
        },
        {
            question: "Is the content generated safe for commercial use?",
            answer: "Yes, our Enterprise and Business plans include commercial rights and indemnification for generated content.",
        },
        {
            question: "How does localization work?",
            answer: "Our localization tools automatically transcribe, translate, and re-dub your video or audio content while preserving the original speaker's voice.",
        },
        {
            question: "Can I create a custom voice for my brand?",
            answer: "Absolutely. Creating a Professional Voice Clone (PVC) allows you to create a unique, brand-consistent voice for all your applications.",
        },
        {
            question: "What is ElevenLabs Studio?",
            answer: "Studio is our all-in-one editor that gives you precise control over pronunciation, timing, emotion, and emphasis in your generated audio.",
        },
        {
            question: "Do you offer managed services?",
            answer: "Yes, for enterprise clients, we offer managed services to help with large-scale implementation, custom training, and support.",
        },
        {
            question: "How is the Creative Platform different from the Agents Platform?",
            answer: "The Creative Platform focuses on content generation (audio/video files), whereas the Agents Platform is for building interactive conversational AI agents.",
        },
        {
            question: "Is the Creative Platform built for teams?",
            answer: "Yes, we offer team features like shared workspaces, role-based access control, and credit pooling.",
        },
        {
            question: "Is the platform enterprise-ready?",
            answer: "Our platform is SOC 2 compliant, GDPR ready, and supports SSO, making it fully ready for enterprise deployment.",
        },
        {
            question: "Can credits be shared across the team?",
            answer: "Yes, on our Team and Enterprise plans, usage credits are pooled and can be shared across all members.",
        },
        {
            question: "Are APIs available?",
            answer: "Yes, our comprehensive API allows you to integrate all our generation and editing capabilities directly into your own applications.",
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-background font-sans">
            <div className="">
                <div
                    className="absolute z-20 flex h-20 w-20 items-center justify-center rounded-full left-0 top-0 -translate-x-1/2 -translate-y-1/2"
                    style={{ backgroundColor: "var(--marker-background-color, #FDFCFC)" }}
                >
                    {/* content here */}
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-12">
                    Frequently asked questions
                </h2>

                <div className="space-y-0">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-border border-dashed last:border-0"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full py-6 flex items-center justify-between text-left group hover:bg-secondary/20 transition-colors px-2 rounded-lg"
                            >
                                <span className="text-lg font-normal text-foreground/90 group-hover:text-foreground">
                                    {faq.question}
                                </span>
                                <span className="ml-6 text-muted-foreground">
                                    {openIndex === index ? (
                                        <Minus className="h-5 w-5" />
                                    ) : (
                                        <Plus className="h-5 w-5" />
                                    )}
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-muted-foreground px-2 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
