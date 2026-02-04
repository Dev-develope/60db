const StudentShowcase = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left image */}
          <div className="rounded-lg overflow-hidden h-80 border border-border shadow-lg transform hover:scale-105 transition-transform">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop"
              alt="Student studying"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center image (larger) */}
          <div className="rounded-lg overflow-hidden h-96 border border-border shadow-lg transform hover:scale-105 transition-transform md:row-span-1">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop"
              alt="Students collaborating"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right image */}
          <div className="rounded-lg overflow-hidden h-80 border border-border shadow-lg transform hover:scale-105 transition-transform">
            <img
              src="https://images.unsplash.com/photo-1507238691621-bada96a03951?w=400&h=400&fit=crop"
              alt="Student working on project"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentShowcase;
