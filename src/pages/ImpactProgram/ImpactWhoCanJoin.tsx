const ImpactWhoCanJoin = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Who can join the Impact Program?
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Nonprofit Organizations */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Nonprofit organizations</h3>
            <p className="text-muted-foreground">
              Could your nonprofit benefit from audio AI?
            </p>

            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                If your nonprofit works in healthcare, education, or culture,
                you can apply through our Impact Partnership Application for a
                free, renewable 12-month 60db.ai license.
              </p>

              <p>
                If your organization serves a region or diagnosis that causes
                permanent voice loss or blindness that isn't yet represented by
                our current partners, and you'd like to help us expand access to
                60db.ai, please apply.
              </p>
            </div>
          </div>

          {/* Individuals */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              Individuals (patients and clinicians)
            </h3>
            <p className="text-muted-foreground">
              Are you living with a condition that affects your ability to speak
              or access written information?
            </p>

            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                If you have permanent voice loss, blindness or low-vision, or
                are a clinician (SLP, OT, AAC specialist) supporting those who
                do, you may be eligible for free access through the 60db.ai
                Impact Program.
              </p>

              <p>
                Individuals with speech loss and their clinicians can apply for
                an AI voice clone to communicate, while blind or low-vision
                users can access ElevenReader for natural-sounding audio
                versions of written content.
              </p>

              <p>
                We currently support a wide range of diagnoses and regions
                through our nonprofit application partners. You can find the
                full list in our FAQs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactWhoCanJoin;
