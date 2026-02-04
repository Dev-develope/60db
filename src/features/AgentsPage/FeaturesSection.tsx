import { Mic, Terminal, Globe } from "lucide-react";

const FeaturesSection = () => {
    return (
        <section className="py-24">
            <div className="container px-4 mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl">
                        ElevenLabs Agents resolve issues, deliver answers, and take action
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                            <Mic className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Speak, read, and see</h3>
                        <p className="text-muted-foreground">
                            Multimodal by design, Agents understand spoken or written inputs, retrieve the right answers, and respond naturally in real time across voice and chat.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                            <Terminal className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">External tool calls</h3>
                        <p className="text-muted-foreground">
                            Connect your agent to internal tools, APIs, and business systems. Update orders, book appointments, and trigger real-world actions securely.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                            <Globe className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Deploy anywhere</h3>
                        <p className="text-muted-foreground">
                            Launch across phone lines, websites, apps, or embedded systems. Channel-agnostic and ready for global use with multilingual support.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
