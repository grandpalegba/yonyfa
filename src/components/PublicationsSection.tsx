import SectionWrapper from "./SectionWrapper";

const items = [
  "Analyses",
  "Interprétations",
  "Créations",
  "Retours d'expérience",
  "Perspectives internationales",
];

const PublicationsSection = () => (
  <SectionWrapper id="ouvrages">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
        Les ouvrages
      </h2>
      <p className="text-muted-foreground text-base md:text-lg mb-8">
        Les contributions issues de la communauté nourrissent des publications. Ces ouvrages rassemblent :
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {items.map((item) => (
          <span
            key={item}
            className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground"
          >
            {item}
          </span>
        ))}
      </div>

      <p className="text-muted-foreground text-sm">
        Ils constituent une mémoire évolutive du projet.
      </p>
    </div>
  </SectionWrapper>
);

export default PublicationsSection;
