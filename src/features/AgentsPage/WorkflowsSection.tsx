import { Workflow, Shield, BarChart3 } from "lucide-react";

const WorkflowsSection = () => {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="rounded-xl border bg-background p-2 shadow-2xl">
                            <div className="aspect-square rounded-lg bg-muted/50 p-8 flex items-center justify-center">
                                <div className="space-y-4 w-full max-w-md">
                                    {/* Abstract visuals for workflow */}
                                    <div className="flex justify-center"><div className="h-12 w-32 rounded bg-primary/20 border border-primary/30" /></div>
                                    <div className="h-8 w-0.5 bg-border mx-auto" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="h-12 rounded bg-muted border" />
                                        <div className="h-12 rounded bg-muted border" />
                                    </div>
                                    <div className="h-8 w-0.5 bg-border mx-auto" />
                                    <div className="flex justify-center"><div className="h-12 w-32 rounded bg-primary/20 border border-primary/30" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Create multi-agent workflows with strict guardrails
                        </h2>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <Workflow className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Build multi-agent workflows</h3>
                                    <p className="text-muted-foreground">
                                        Design rich conversational flows using intuitive visual tools. Combine scripted steps with dynamic agents and customize behavior at each stage.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <Shield className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Test guardrails</h3>
                                    <p className="text-muted-foreground">
                                        Run agent simulations using past or custom conversations. Define success criteria and ensure responses meet your standards before deploying.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <BarChart3 className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Monitor performance</h3>
                                    <p className="text-muted-foreground">
                                        Track agent accuracy, task completion, and user experience through built-in analytics. Spot issues and iterate confidently.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkflowsSection;
