import { useTranslation } from "react-i18next";
import SectionWrapper from "./SectionWrapper";
import DynamicsGrid from "./DynamicsGrid";

const DynamicsSection = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="dynamiques" alternate>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
          {t("dynamics.title")}
        </h2>
        <p className="text-muted-foreground text-base md:text-lg mb-4">
          {t("dynamics.p1")}
        </p>
        <p className="font-display text-2xl md:text-3xl text-foreground mb-4">
          {t("dynamics.formula")}
        </p>
        <p className="text-muted-foreground text-base md:text-lg mb-12">
          {t("dynamics.p2")}
        </p>

        <DynamicsGrid />

        <p className="text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed mt-12">
          {t("dynamics.note")}
        </p>
      </div>
    </SectionWrapper>
  );
};

export default DynamicsSection;
