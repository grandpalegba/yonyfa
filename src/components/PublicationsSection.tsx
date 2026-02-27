import { useTranslation } from "react-i18next";
import SectionWrapper from "./SectionWrapper";

const PublicationsSection = () => {
  const { t } = useTranslation();
  const items = t("publications.items", { returnObjects: true }) as string[];

  return (
    <SectionWrapper id="ouvrages">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
          {t("publications.title")}
        </h2>
        <p className="text-muted-foreground text-base md:text-lg mb-8">
          {t("publications.intro")}
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
          {t("publications.outro")}
        </p>
      </div>
    </SectionWrapper>
  );
};

export default PublicationsSection;
