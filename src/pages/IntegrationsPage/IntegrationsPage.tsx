import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntegrationsHero from "./IntegrationsHero";
import IntegrationCategory from "./IntegrationCategory";
import IntegrationsSidebar from "./IntegrationsSidebar";

const IntegrationsPage = () => {
    const integrationCategories = [
        {
            id: "automation",
            title: "Automation",
            description: "Automate repetitive tasks and streamline workflows with pre-built integrations.",
            integrations: [
                {
                    name: "Zapier",
                    description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding.",
                    icon: "⚡",
                },
                {
                    name: "n8n",
                    description: "Build complex automation workflows with a visual interface and connect your AI agents to hundreds of services.",
                    icon: "🔗",
                },
                {
                    name: "Make",
                    description: "Create powerful automation scenarios that connect your conversational AI to your entire tech stack.",
                    icon: "🔧",
                },
            ],
        },
        {
            id: "crm",
            title: "CRM",
            description: "Connect your CRM to streamline customer interactions and data management.",
            integrations: [
                {
                    name: "Salesforce",
                    description: "Sync customer data and automate workflows with the world's leading CRM platform.",
                    icon: "☁️",
                },
                {
                    name: "HubSpot",
                    description: "Integrate with HubSpot to manage contacts, deals, and customer communications seamlessly.",
                    icon: "🎯",
                },
                {
                    name: "Pipedrive",
                    description: "Connect your sales pipeline with AI-powered voice agents for better customer engagement.",
                    icon: "📊",
                },
                {
                    name: "Monday.com",
                    description: "Streamline project management and customer workflows with Monday.com integration.",
                    icon: "📅",
                },
                {
                    name: "Zoho",
                    description: "Integrate with Zoho CRM to automate customer interactions and data synchronization.",
                    icon: "🔷",
                },
                {
                    name: "Jotform",
                    description: "Transform form submissions into intelligent voice conversations with real-time AI agents.",
                    icon: "📝",
                },
            ],
        },
        {
            id: "customer_support_cx",
            title: "Customer Support & CX",
            description: "Enhance customer experience with intelligent support integrations.",
            integrations: [
                {
                    name: "Zendesk",
                    description: "Provide seamless customer support by integrating AI agents with your Zendesk ticketing system.",
                    icon: "🎧",
                },
                {
                    name: "ServiceNow",
                    description: "Automate IT service management and customer support workflows with AI-powered agents.",
                    icon: "🛠️",
                },
            ],
        },
        {
            id: "data_platform",
            title: "Data Platform",
            description: "Connect to data platforms for enhanced analytics and workflow management.",
            integrations: [
                {
                    name: "Airtable",
                    description: "Sync your conversational AI data with Airtable's flexible database platform.",
                    icon: "📋",
                },
                {
                    name: "Asana",
                    description: "Integrate task management and project tracking with your AI agents.",
                    icon: "✅",
                },
                {
                    name: "Palantir Foundry",
                    description: "Connect enterprise data operations with AI-powered conversational interfaces.",
                    icon: "🏢",
                },
            ],
        },
        {
            id: "llm",
            title: "Inference Provider",
            description: "Leverage powerful AI models from leading inference providers.",
            integrations: [
                {
                    name: "Together AI",
                    description: "Access cutting-edge open-source models for enhanced conversational capabilities.",
                    icon: "🤖",
                },
                {
                    name: "Groq Cloud",
                    description: "Ultra-fast inference for real-time conversational AI applications.",
                    icon: "⚡",
                },
                {
                    name: "Samba Nova Cloud",
                    description: "Enterprise-grade AI inference for scalable conversational agents.",
                    icon: "☁️",
                },
                {
                    name: "Cloudflare Workers",
                    description: "Deploy AI models at the edge for low-latency global conversations.",
                    icon: "🌐",
                },
            ],
        },
        {
            id: "payment",
            title: "Payment",
            description: "Securely process payments and handle transactions through voice interactions.",
            integrations: [
                {
                    name: "Stripe",
                    description: "Enable secure payment processing and subscription management through conversational AI.",
                    icon: "💳",
                },
            ],
        },
        {
            id: "retail",
            title: "Retail",
            description: "Connect e-commerce platforms to enable voice-powered shopping experiences.",
            integrations: [
                {
                    name: "Shopify",
                    description: "Integrate your Shopify store with AI agents for automated customer service and sales.",
                    icon: "🛍️",
                },
            ],
        },
        {
            id: "scheduling_communication",
            title: "Scheduling & Communication",
            description: "Streamline scheduling and communication workflows with intelligent integrations.",
            integrations: [
                {
                    name: "Calendly",
                    description: "Automate appointment scheduling through conversational AI interactions.",
                    icon: "📅",
                },
                {
                    name: "Cal.com",
                    description: "Open-source scheduling integrated with your AI voice agents.",
                    icon: "🗓️",
                },
                {
                    name: "Slack",
                    description: "Connect team communication with AI-powered conversational workflows.",
                    icon: "💬",
                },
                {
                    name: "Mailchimp",
                    description: "Automate email marketing campaigns triggered by voice interactions.",
                    icon: "📧",
                },
                {
                    name: "Docusign",
                    description: "Enable document signing and contract management through voice commands.",
                    icon: "✍️",
                },
                {
                    name: "Supabase",
                    description: "Real-time database and authentication for conversational AI applications.",
                    icon: "🔐",
                },
            ],
        },
        {
            id: "telephony",
            title: "Telephony",
            description: "Native integration with major VoIP and telephony providers for seamless voice communications.",
            integrations: [
                {
                    name: "Twilio",
                    description: "Industry-leading cloud communications platform for voice, SMS, and video.",
                    icon: "📞",
                },
                {
                    name: "Vonage",
                    description: "Enterprise-grade communication APIs for global voice connectivity.",
                    icon: "🌍",
                },
                {
                    name: "Telnyx",
                    description: "Carrier-grade voice infrastructure with global coverage and reliability.",
                    icon: "📡",
                },
                {
                    name: "Amazon Connect",
                    description: "Cloud-based contact center service with AI-powered customer interactions.",
                    icon: "☁️",
                },
                {
                    name: "Genesys",
                    description: "Omnichannel customer experience platform with advanced AI capabilities.",
                    icon: "🎯",
                },
                {
                    name: "Ring Central",
                    description: "Unified communications platform for voice, video, and messaging.",
                    icon: "💼",
                },
                {
                    name: "Plivo",
                    description: "Cloud communication platform with voice and SMS APIs.",
                    icon: "📲",
                },
                {
                    name: "SIP Trunking",
                    description: "Connect your existing phone systems with AI-powered voice agents.",
                    icon: "🔌",
                },
            ],
        },
    ];

    const sidebarCategories = integrationCategories.map((cat) => ({
        id: cat.id,
        label: cat.title,
    }));

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main>
                <IntegrationsHero />

                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex gap-8">
                        {/* Sidebar */}
                        <IntegrationsSidebar categories={sidebarCategories} />

                        {/* Main Content */}
                        <div className="flex-1 min-w-0">
                            {integrationCategories.map((category) => (
                                <IntegrationCategory
                                    key={category.id}
                                    id={category.id}
                                    title={category.title}
                                    description={category.description}
                                    integrations={category.integrations}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default IntegrationsPage;
