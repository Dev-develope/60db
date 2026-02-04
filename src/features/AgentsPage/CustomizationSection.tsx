import { Database, MessageSquare, Activity } from "lucide-react";

const CustomizationSection = () => {
    return (
        <section className="py-24">
            <div className="container px-4 mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Fully customizable to your brand and systems
                </h2>
            </div>

            <div className="container px-4 mx-auto max-w-4xl">
                <div className="space-y-8">
                    <div className="rounded-xl border bg-card p-8 flex flex-col md:flex-row gap-8 items-start hover:shadow-lg transition-shadow">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Database className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Powered by your knowledge base</h3>
                            <p className="text-muted-foreground mb-4">
                                Connect internal documents, FAQs, and URLs. With built-in RAG, agents provide accurate, real-time answers grounded in your own content, automatically reindexed as it changes.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-xl border bg-card p-8 flex flex-col md:flex-row gap-8 items-start hover:shadow-lg transition-shadow">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <MessageSquare className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Unique brand voices</h3>
                            <p className="text-muted-foreground mb-4">
                                Pick from a wide range of expressive voices or clone your own. Adjust tone, pacing, and language. Each agent can switch voices mid-conversation.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-xl border bg-card p-8 flex flex-col md:flex-row gap-8 items-start hover:shadow-lg transition-shadow">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Activity className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Seamless integration</h3>
                            <p className="text-muted-foreground mb-4">
                                Connect agents to your internal tools and APIs. Fetch account data, trigger workflows, send updates, or log events in your existing systems in real time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomizationSection;
