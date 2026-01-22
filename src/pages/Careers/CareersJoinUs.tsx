import { Button } from "@/components/ui/button";

const CareersJoinUs = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Join our mission
        </h2>

        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          We're looking for exceptional individuals who combine technical
          excellence with ethical awareness, who are excited by hard problems
          and motivated by human impact. Every role at 60db.ai is an opportunity
          to shape the future of AI.
        </p>

        <div className="bg-card border border-border rounded-lg p-8 space-y-6">
          <h3 className="text-2xl font-semibold">Open Positions</h3>

          <div className="space-y-4">
            <div className="pb-4 border-b border-border last:border-0">
              <h4 className="font-semibold text-lg">Engineering & Product</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Android Engineer, Audio Engineering, Automations Engineer, and
                more
              </p>
              <Button variant="outline" size="sm" className="mt-3">
                View Positions
              </Button>
            </div>

            <div className="pb-4 border-b border-border last:border-0">
              <h4 className="font-semibold text-lg">Growth</h4>
              <p className="text-sm text-muted-foreground mt-1">
                AI Creative Producer, Brand Design, Creator Marketing Lead, and
                more
              </p>
              <Button variant="outline" size="sm" className="mt-3">
                View Positions
              </Button>
            </div>

            <div className="pb-4 border-b border-border last:border-0">
              <h4 className="font-semibold text-lg">Operations</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Customer Support Specialist, GTM Recruiter, and more
              </p>
              <Button variant="outline" size="sm" className="mt-3">
                View Positions
              </Button>
            </div>

            <div className="pb-4 border-b border-border last:border-0">
              <h4 className="font-semibold text-lg">
                Research & Research Engineering
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                Research Engineer, Machine Learning Researcher, and more
              </p>
              <Button variant="outline" size="sm" className="mt-3">
                View Positions
              </Button>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Revenue</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Account Executive, Enterprise Sales, Revenue Operations, and
                more
              </p>
              <Button variant="outline" size="sm" className="mt-3">
                View Positions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersJoinUs;
