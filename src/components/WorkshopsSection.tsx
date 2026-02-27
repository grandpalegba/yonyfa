import SectionWrapper from "./SectionWrapper";

const steps = [
  "Le tirage d'une dynamique",
  "Une phase d'exploration",
  "Un temps de partage",
  "Une synthèse collective",
];

const roles = [
  "Garantir le cadre",
  "Assurer le respect",
  "Faciliter l'échange",
  "Préserver la neutralité",
];

const WorkshopsSection = () => (
  <SectionWrapper id="ateliers" alternate>
    <div className="max-w-3xl mx-auto">
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 text-center">
        Les ateliers
      </h2>
      <p className="text-muted-foreground text-center text-base md:text-lg mb-12">
        Des ateliers peuvent être organisés localement, facilités par des <strong className="text-foreground">Tisseurs et Tisseuses</strong> formés au protocole.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="border border-border rounded-md p-8 bg-card">
          <h3 className="font-display text-xl text-foreground mb-5">Rôle des facilitateurs</h3>
          <ul className="space-y-3">
            {roles.map((r) => (
              <li key={r} className="flex items-start gap-3 text-muted-foreground text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-border rounded-md p-8 bg-card">
          <h3 className="font-display text-xl text-foreground mb-5">Déroulement</h3>
          <ol className="space-y-3">
            {steps.map((s, i) => (
              <li key={s} className="flex items-start gap-3 text-muted-foreground text-sm">
                <span className="w-6 h-6 rounded-full bg-accent/15 text-accent flex items-center justify-center text-xs font-semibold flex-shrink-0">
                  {i + 1}
                </span>
                {s}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default WorkshopsSection;
