import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const VoiceDesignFAQ = () => {
    return (
        <section className="py-20 lg:py-32 bg-card text-foreground">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-12 text-center text-foreground">
                    Frequently asked questions
                </h2>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1" className="border border-border rounded-lg px-6 bg-background">
                        <AccordionTrigger className="text-left font-medium text-lg hover:no-underline py-6 text-foreground">
                            What types of voices can I create with Voice Design?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted text-base leading-relaxed pb-6">
                            You can create virtually any voice you can imagine! From funny aliens to wise wizards, serious narrators to energetic gaming characters.
                            The system analyzes your text prompt for descriptors like age, gender, accent, tone, pacing, and delivery style to generate a unique voice model.
                            Check out our <a href="#" className="underline text-primary hover:text-primary/80">prompting guide</a> for tips.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border border-border rounded-lg px-6 bg-background">
                        <AccordionTrigger className="text-left font-medium text-lg hover:no-underline py-6 text-foreground">
                            Is there a Voice Design API?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted text-base leading-relaxed pb-6">
                            Yes! Voice Design is available via our API. You can check out <a href="#" className="underline text-primary hover:text-primary/80">this endpoint</a> for creating voice designs
                            and <a href="#" className="underline text-primary hover:text-primary/80">this endpoint</a> for creating voices from samples.
                            It allows you to integrate dynamic voice generation directly into your applications, games, or workflows.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border border-border rounded-lg px-6 bg-background">
                        <AccordionTrigger className="text-left font-medium text-lg hover:no-underline py-6 text-foreground">
                            Can I create voices with specific accents?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted text-base leading-relaxed pb-6">
                            Absolutely. You can specify accents such as American, British, Australian, Indian, and many more in your prompt.
                            You can also describe the intensity of the accent or even mix accents for a unique character sound.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border border-border rounded-lg px-6 bg-background">
                        <AccordionTrigger className="text-left font-medium text-lg hover:no-underline py-6 text-foreground">
                            Is it free to start?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted text-base leading-relaxed pb-6">
                            Yes, you can try Voice Design v3 for free. We offer a free tier that allows you to experiment with the tool and generate voices.
                            For higher usage limits and commercial rights, you can upgrade to one of our subscription plans.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default VoiceDesignFAQ;
