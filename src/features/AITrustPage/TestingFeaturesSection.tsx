const TestingFeaturesSection = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="space-y-24">
                    {/* Feature 1: Guardrails */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                                Prevent harmful or off-brand AI outputs by defining guardrails
                            </h3>
                            <p className="text-muted leading-relaxed">
                                Define and test behavioral, safety, and compliance guardrails before deployment.
                                Our platform lets you set clear boundaries and rules that ensure your agents stay
                                aligned with brand voice and regulatory requirements.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
                            <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-xl">
                                <div className="mb-4">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                                        <span className="font-semibold text-gray-900">Agent</span>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700 space-y-2">
                                        <p>✓ Do not share personal information</p>
                                        <p>✓ Do not make unauthorized claims about our products</p>
                                        <p>✓ Redirect to human for: refunds, complaints</p>
                                        <p>✓ Always maintain professional tone</p>
                                    </div>
                                </div>
                                <div className="text-xs text-gray-500 mt-4">
                                    <span className="font-medium">Test Coverage:</span> 98%
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2: Simulation */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
                                <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-xl">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-semibold text-gray-900">Test Simulation</h4>
                                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Running</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                            <span className="text-sm text-gray-700">Scenario 1: Product inquiry</span>
                                            <span className="ml-auto text-xs text-green-600">✓ Passed</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                            <span className="text-sm text-gray-700">Scenario 2: Refund request</span>
                                            <span className="ml-auto text-xs text-green-600">✓ Passed</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
                                            <span className="text-sm text-gray-700">Scenario 3: Complaint handling</span>
                                            <span className="ml-auto text-xs text-gray-500">Testing...</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-gray-200">
                                        <div className="flex justify-between text-xs text-gray-600">
                                            <span>Progress: 67%</span>
                                            <span>2/3 Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                                Simulate real-world conversations before launch
                            </h3>
                            <p className="text-muted leading-relaxed">
                                Simulate agents behave as expected. Catch issues early and run test scenarios to
                                optimize your agent's performance before launching to production.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3: Performance Monitoring */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                                Ensure reliable and safe performance at scale
                            </h3>
                            <p className="text-muted leading-relaxed">
                                Track live agent interactions and key metrics such as latency, cost and success rates
                                through enterprise-grade analytics and performance dashboards.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
                            <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-xl">
                                <h4 className="font-semibold text-gray-900 mb-4">Live Metrics</h4>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-gray-700">Success Rate</span>
                                            <span className="font-semibold text-green-600">94.2%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '94.2%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-gray-700">Avg. Latency</span>
                                            <span className="font-semibold text-blue-600">42ms</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-gray-700">Active Conversations</span>
                                            <span className="font-semibold text-purple-600">1,247</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-purple-500 h-2 rounded-full" style={{ width: '62%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500">
                                    Last updated: 2 seconds ago
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestingFeaturesSection;
