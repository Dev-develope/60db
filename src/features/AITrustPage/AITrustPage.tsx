import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AITrustHero from "./AITrustHero";
import TrustFeatureCard from "./TrustFeatureCard";
import TrustFAQ from "./TrustFAQ";
import MonitoringSection from "./MonitoringSection";
import TestingFeaturesSection from "./TestingFeaturesSection";
import { Shield, TestTube, Activity, Eye, Lock, Zap } from "lucide-react";

const AITrustPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main>
                <AITrustHero />

                {/* Main Features Section */}
                <section className="py-20 bg-secondary/30">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
                                Set up your AI agents to behave safely and predictably
                            </h2>
                            <p className="text-lg text-muted max-w-3xl mx-auto">
                                Ensure your agents follow well-defined guardrails, behave as expected,
                                and remain reliable in real-world scenarios at scale.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <TrustFeatureCard
                                id="guardrails"
                                icon={Shield}
                                title="Prevent harmful or off-brand AI outputs by defining guardrails"
                                description="Define and test behavioral, safety, and compliance guardrails before deployment - ensuring agents stay aligned with brand and regulatory requirements."
                            />
                            <TrustFeatureCard
                                id="testing"
                                icon={TestTube}
                                title="Simulate real-world conversations before launch"
                                description="Validate agents behave as expected. Catch issues early and iterate on your configuration to optimize performance before launching."
                            />
                            <TrustFeatureCard
                                id="monitoring"
                                icon={Activity}
                                title="Ensure reliable and safe performance at scale"
                                description="Track live agent interactions and key metrics such as latency, cost and success rates through enterprise-grade analytics and performance dashboards."
                            />
                        </div>
                    </div>
                </section>

                {/* Testing Features Section */}
                <TestingFeaturesSection />

                {/* Visibility and Control Section */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
                                Gain full visibility and control over how your AI operates
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <TrustFeatureCard
                                icon={Eye}
                                title="Build secure, compliant AI systems"
                                description="Meet enterprise security and compliance standards with SOC 2, GDPR, HIPAA compliance. Implement end-to-end encryption and secure data handling practices."
                            />
                            <TrustFeatureCard
                                icon={Lock}
                                title="Build secure AI systems at scale with ElevenLabs"
                                description="Deploy with confidence using our enterprise-grade infrastructure. Get dedicated support, custom SLAs, and priority access to new features and capabilities."
                            />
                        </div>
                    </div>
                </section>

                {/* Monitoring Section */}
                <MonitoringSection />

                {/* Performance Metrics Section */}
                <section className="py-20 bg-secondary/30">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Zap className="h-8 w-8 text-primary" />
                                </div>
                                <div className="text-4xl font-serif font-semibold text-foreground mb-2">99.9%</div>
                                <div className="text-muted">Uptime SLA</div>
                            </div>
                            <div>
                                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Activity className="h-8 w-8 text-primary" />
                                </div>
                                <div className="text-4xl font-serif font-semibold text-foreground mb-2">&lt;50ms</div>
                                <div className="text-muted">Average Latency</div>
                            </div>
                            <div>
                                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Shield className="h-8 w-8 text-primary" />
                                </div>
                                <div className="text-4xl font-serif font-semibold text-foreground mb-2">SOC 2</div>
                                <div className="text-muted">Type II Certified</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <TrustFAQ />
            </main>

            <Footer />
        </div>
    );
};

export default AITrustPage;
