import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const partners = [
  { name: "Bridging Voice", category: "ALS/MND", type: "Application Partner" },
  {
    name: "The Scott-Morgan Foundation",
    category: "Permanent Speech Impairment",
    type: "Application Partner",
  },
  { name: "MND Association", category: "ALS/MND", type: "Application Partner" },
  {
    name: "Multiple System Atrophy Trust",
    category: "MSA",
    type: "Application Partner",
  },
  {
    name: "National Federation of the Blind",
    category: "Blind and Low-Vision",
    type: "Application Partner",
  },
  { name: "60db.ai", category: "Healthcare", type: "Application Partner" },
];

const ImpactPartners = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-card/50 border-b border-border">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Partnered with 300+ nonprofit organizations
          </h2>
          <p className="text-muted-foreground mt-4">
            Our application partners help us distribute access to individuals
            with accessibility needs. Our other nonprofit partners use 60db.ai
            technology for their own projects in healthcare, education, and
            culture.
          </p>
        </div>

        {/* Categories filter */}
        <div className="flex flex-wrap gap-3 justify-center">
          <Button variant="default" size="sm">
            All Categories
          </Button>
          <Button variant="outline" size="sm">
            Healthcare
          </Button>
          <Button variant="outline" size="sm">
            Education
          </Button>
          <Button variant="outline" size="sm">
            Culture
          </Button>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {partners.map((partner) => (
            <Card key={partner.name} className="border border-border">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                    {partner.category}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">
                    {partner.type}
                  </span>
                </div>
                <CardTitle className="text-lg">{partner.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Supporting individuals and organizations with our technology.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline">View 283 more partners</Button>
        </div>
      </div>
    </section>
  );
};

export default ImpactPartners;
