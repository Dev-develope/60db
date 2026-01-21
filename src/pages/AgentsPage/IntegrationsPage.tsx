import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Database, MessageSquare, Phone, CreditCard, Zap, ArrowRight, Puzzle } from "lucide-react";

const IntegrationsPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-16 px-4">
                <div className="container mx-auto text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Puzzle className="h-4 w-4" />
                        <span>Integrations</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Connect your agents to the world
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Seamlessly integrate with your existing tech stack. From CRMs to payment gateways, our agents work with the tools you already use.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="rounded-full">
                            Explore Documentation
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full">
                            View API Reference
                        </Button>
                    </div>
                </div>
            </section>

            {/* Integration Categories */}
            <section className="py-24 bg-muted/30">
                <div className="container px-4 mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* CRM */}
                        <div className="bg-background border rounded-xl p-8 hover:shadow-lg transition-all">
                            <Database className="h-10 w-10 text-blue-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">CRM & Database</h3>
                            <p className="text-muted-foreground mb-4">Sync customer data with Salesforce, HubSpot, and custom databases.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-muted px-2 py-1 rounded text-xs">Salesforce</span>
                                <span className="bg-muted px-2 py-1 rounded text-xs">HubSpot</span>
                                <span className="bg-muted px-2 py-1 rounded text-xs">Airtable</span>
                            </div>
                        </div>

                        {/* Communication */}
                        <div className="bg-background border rounded-xl p-8 hover:shadow-lg transition-all">
                            <MessageSquare className="h-10 w-10 text-green-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Communication</h3>
                            <p className="text-muted-foreground mb-4">Connect with WhatsApp, Slack, and Email providers.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-muted px-2 py-1 rounded text-xs">WhatsApp</span>
                                <span className="bg-muted px-2 py-1 rounded text-xs">Slack</span>
                                <span className="bg-muted px-2 py-1 rounded text-xs">Gmail</span>
                            </div>
                        </div>

                        {/* Telephony */}
                        <div className="bg-background border rounded-xl p-8 hover:shadow-lg transition-all">
                            <Phone className="h-10 w-10 text-purple-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Telephony</h3>
                            <p className="text-muted-foreground mb-4">Native integration with major VoIP and telephony providers.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-muted px-2 py-1 rounded text-xs">Twilio</span>
                                <span className="bg-muted px-2 py-1 rounded text-xs">Vonage</span>
                                <span className="bg-muted px-2 py-1 rounded text-xs">Telnyx</span>
                            </div>
                        </div>

                        {/* Payments */}
                        <div className="bg-background border rounded-xl p-8 hover:shadow-lg transition-all">
                            <CreditCard className="h-10 w-10 text-yellow-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Payments</h3>
                            <p className="text-muted-foreground mb-4">Securely process payments and handle transactions.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-muted px-2 py-1 rounded text-xs">Stripe</span>
                                <span className="bg-muted px-2 py-1 rounded text-xs">PayPal</span>
                            </div>
                        </div>

                        {/* Automation */}
                        <div className="bg-background border rounded-xl p-8 hover:shadow-lg transition-all">
                            <Zap className="h-10 w-10 text-orange-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Automation</h3>
                            <p className="text-muted-foreground mb-4">Trigger complex workflows across thousands of apps.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-muted px-2 py-1 rounded text-xs">Zapier</span>
                                <span className="bg-muted px-2 py-1 rounded text-xs">Make</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Integration CTA */}
            <section className="py-24">
                <div className="container px-4 mx-auto">
                    <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-bold mb-4">Need a custom integration?</h2>
                            <p className="text-primary-foreground/80 text-lg">
                                Our flexible API allows you to build custom connectors for any internal tool or proprietary system.
                            </p>
                        </div>
                        <Button size="lg" variant="secondary" className="gap-2 shrink-0">
                            Read API Docs <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default IntegrationsPage;
