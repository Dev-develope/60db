import { Button } from "@/components/ui/button";

const AffiliatesMediaPack = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Affiliates media pack
            </h2>
            <p className="text-lg text-muted-foreground">
              Get all the media resources you might need. Download the media pack or find out more in your affiliates dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Download Media Pack</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden border border-border h-48 bg-gradient-to-br from-gray-500/10 to-slate-500/10">
              <img
                src="https://images.unsplash.com/photo-1611532736957-c3400ca199e7?w=300&h=300&fit=crop"
                alt="Media pack preview 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-border h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f70a504f9?w=300&h=300&fit=crop"
                alt="Media pack preview 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-border h-48 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 col-span-2">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop"
                alt="Media pack preview 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliatesMediaPack;
