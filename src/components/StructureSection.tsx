import SectionWrapper from "./SectionWrapper";

const StructureSection = () => (
  <SectionWrapper id="structure">
    <div className="max-w-3xl mx-auto">
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-8 text-center">
        Une structure claire
      </h2>
      <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
        <p>
          YonyFâ est un cadre structuré d'exploration des valeurs humaines.
        </p>
        <p>Il repose sur :</p>
        <ul className="space-y-3 pl-6">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
            <span><strong className="text-foreground">16 valeurs fondamentales</strong></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
            <span><strong className="text-foreground">256 dynamiques</strong> issues de leurs combinaisons</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
            <span>Une <strong className="text-foreground">méthode d'expression</strong> individuelle et collective</span>
          </li>
        </ul>
        <p className="text-sm border-l-2 border-accent pl-6 py-2">
          Le protocole ne propose ni doctrine ni interprétation unique. Il offre une structure ouverte que chacun peut investir à sa manière.
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default StructureSection;
