import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Headphones, Activity, ShieldCheck, Server, ArrowRight } from "lucide-react";

const TelecommunicationsPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-16 px-4">
                <div className="container mx-auto text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                        <Server className="h-4 w-4" />
                        <span>Telecommunications Solution</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        AI Agents for Next-Gen Telecom
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Handle millions of support calls, manage outages, and streamline billing with enterprise-grade voice AI that scales instantly.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="rounded-full">
                            Get a Demo
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full">
                            Contact Sales
                        </Button>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 bg-muted/30">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-bold mb-16 text-center">Transforming Telecom Operations</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-background p-8 rounded-xl border">
                            <Headphones className="h-8 w-8 text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">Technical Support</h3>
                            <p className="text-muted-foreground">Triaging technical issues and guiding users through basic troubleshooting steps before escalating.</p>
                        </div>
                        <div className="bg-background p-8 rounded-xl border">
                            <Activity className="h-8 w-8 text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">Outage Management</h3>
                            <p className="text-muted-foreground">Proactively notifying customers about outages and providing real-time status updates.</p>
                        </div>
                        <div className="bg-background p-8 rounded-xl border">
                            <ShieldCheck className="h-8 w-8 text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">Billing & Account</h3>
                            <p className="text-muted-foreground">Securely handling payment processing, plan upgrades, and balance inquiries.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats / ROI */}
            <section className="py-24">
                <div className="container px-4 mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for scale and reliability</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Telecom networks demand zero downtime and instant response. Our infrastructure is optimized for high-throughput voice processing.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4">
                                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">✓</div>
                                    <div><span className="font-bold">99.99%</span> Uptime SLA</div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">✓</div>
                                    <div><span className="font-bold">&lt; 400ms</span> Voice Latency</div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">✓</div>
                                    <div><span className="font-bold">ISO 27001</span> Certified Security</div>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-zinc-950 rounded-2xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-32 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
                            <div className="space-y-6 relative z-10">
                                <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                                    <span className="text-zinc-400">Concurrent Calls</span>
                                    <span className="text-2xl font-mono text-green-400">12,450</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                                    <span className="text-zinc-400">Avg Response Time</span>
                                    <span className="text-2xl font-mono text-blue-400">380ms</span>
                                </div>
                                <div className="flex justify-between items-center pb-4">
                                    <span className="text-zinc-400">Deflection Rate</span>
                                    <span className="text-2xl font-mono text-purple-400">64%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary text-primary-foreground">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to upgrade your customer experience?</h2>
                    <Button size="lg" variant="secondary" className="gap-2 rounded-full">
                        Speak with an Expert <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TelecommunicationsPage;
