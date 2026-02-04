import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VoiceAgentsSection = () => {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Industry-leading</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">Voice Agents</h3>
                        <p className="text-lg text-muted-foreground mb-8 text-pretty">
                            ElevenLabs Agents are intelligent, real-time AI agents that talk, type, and take action. Resolve customer issues, automate tasks, and deliver accurate answers – all grounded in your data, tailored to your workflows, and ready to deploy at scale.
                        </p>
                        <Button variant="outline" className="gap-2">
                            <Play className="h-4 w-4" /> Watch Video
                        </Button>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl blur-2xl opacity-50" />
                        <div className="relative rounded-xl border bg-background/50 p-8 backdrop-blur-sm">
                            <blockquote className="space-y-4">
                                <p className="text-lg font-medium leading-relaxed">
                                    "Using the voice really added a nice punchy feel to it, without it, it gets lost in the shuffle as just another chat bot. We wanted the agent to feel like a live reading partner, available for off-script conversational deep dives"
                                </p>
                                <footer className="text-sm">
                                    <div className="font-semibold">Felix Su</div>
                                    <div className="text-muted-foreground">Head of Engineering at Scale AI</div>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VoiceAgentsSection;
