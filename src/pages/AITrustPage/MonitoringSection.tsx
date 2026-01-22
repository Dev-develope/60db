import { TrendingUp, MessageSquare } from "lucide-react";

const MonitoringSection = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Performance Analytics */}
                    <div className="bg-card border border-border rounded-2xl p-8">
                        <div className="flex items-center gap-2 mb-8">
                            <TrendingUp className="h-5 w-5 text-primary" />
                            <div>
                                <h3 className="font-semibold text-foreground">Monitor performance</h3>
                                <p className="text-sm text-muted">Track live agent interactions and key metrics</p>
                            </div>
                        </div>

                        {/* Agent Performance Section */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm text-muted">← Shopping Assistant</span>
                            </div>

                            <h4 className="text-lg font-semibold mb-6">Agent performance</h4>

                            {/* Performance Graph Placeholder */}
                            <div className="relative h-48 mb-6">
                                <svg viewBox="0 0 400 150" className="w-full h-full">
                                    {/* Grid lines */}
                                    <line x1="0" y1="30" x2="400" y2="30" stroke="currentColor" strokeWidth="1" className="text-border" opacity="0.2" />
                                    <line x1="0" y1="75" x2="400" y2="75" stroke="currentColor" strokeWidth="1" className="text-border" opacity="0.2" />
                                    <line x1="0" y1="120" x2="400" y2="120" stroke="currentColor" strokeWidth="1" className="text-border" opacity="0.2" />

                                    {/* Performance curve */}
                                    <path
                                        d="M 0 100 Q 50 80, 100 90 T 200 70 T 300 85 T 400 120"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="text-foreground"
                                    />

                                    {/* Drop indicator */}
                                    <circle cx="320" cy="120" r="4" fill="currentColor" className="text-destructive" />
                                    <line x1="320" y1="120" x2="320" y2="10" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" className="text-destructive" opacity="0.5" />
                                </svg>

                                {/* Success Rate Drop Annotation */}
                                <div className="absolute top-0 right-12 bg-destructive/10 border border-destructive/20 rounded-lg px-3 py-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-medium text-destructive">⚠ Success Rate Drop</span>
                                    </div>
                                    <p className="text-xs text-muted mt-1">Your agent is responding<br />outside its SLA (500ms)</p>
                                </div>
                            </div>

                            {/* Insights */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-secondary/30 rounded-lg p-4">
                                    <h5 className="text-sm font-medium mb-2">New cross-border tariff rules</h5>
                                    <p className="text-xs text-muted">Policies and updates are still figuring out. Ensure your agent's latest knowledge base hasn't been updated yet.</p>
                                </div>
                                <div className="bg-secondary/30 rounded-lg p-4">
                                    <h5 className="text-sm font-medium mb-2">Suggested solution</h5>
                                    <p className="text-xs text-muted">Update the knowledge base with the latest policies to ensure the agents...</p>
                                    <button className="text-xs text-primary font-medium mt-2">Add Policy</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Chat Interface Preview */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
                            {/* Chat Bubble */}
                            <div className="bg-white rounded-2xl p-6 max-w-sm shadow-2xl">
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                                        <MessageSquare className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-700 mb-3">
                                            Hey, you've reached our Support team. How can I help you?
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-3 mb-3 text-sm text-gray-700">
                                    I just got charged extra customs on your parcel - yesterday's order was fine. What changed?
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                                        <MessageSquare className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700">
                                        I don't have up-to-date information on customs policies. Let me redirect you to a human agent who can look into this.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center gap-2 mt-6">
                            <button className="w-2 h-2 rounded-full bg-muted"></button>
                            <button className="w-2 h-2 rounded-full bg-foreground"></button>
                            <button className="w-2 h-2 rounded-full bg-muted"></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MonitoringSection;
