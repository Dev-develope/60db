import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadQualificationSupportHero from "./LeadQualificationSupportHero";
import LeadQualificationSupportPartners from "./LeadQualificationSupportPartners";
import LeadQualificationSupportHumanInteraction from "./LeadQualificationtHumanInteraction";
import LeadQualificationSupportConcurrency from "./CustomerSupportConcurrency";
import LeadQualificationSupportLatency from "./LeadQualificationSupportLatency";
import LeadQualificationSupportScale from "./LeadQualificationSupportScale";
import LeadQualificationSupportCTA from "./LeadQualificationSupportCTA";

const LeadQualificationSupportPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main>
                <LeadQualificationSupportHero/>
                <LeadQualificationSupportPartners />
                <LeadQualificationSupportHumanInteraction />
                <LeadQualificationSupportConcurrency />
                <LeadQualificationSupportLatency />
                <LeadQualificationSupportScale />
                <LeadQualificationSupportCTA />

                {/* Reusing this CTA component but passing children or specific props would be better if strictly needed, 
                    but strict adherence to screenshot for hero was the priority. 
                    I'll add a specific CTA here inline if I need to match a specific design, 
                    but the plan was to reuse similar components. 
                    Actually, let's just make sure the page is complete.
                */}
                <section className="py-20 bg-background border-t border-border">
                    <div className="container mx-auto px-4 max-w-6xl text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">
                            Don't just take our word for it
                        </h2>
                        {/* Placeholder for testimonials carousel if needed, or just end here as per main sections requested */}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default LeadQualificationSupportPage;
