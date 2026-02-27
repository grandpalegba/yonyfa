import { useTranslation } from "react-i18next";
import SectionWrapper from "./SectionWrapper";

const StructureSection = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="structure">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-8 text-center">
          {t("structure.title")}
        </h2>
        <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
          <p>{t("structure.p1")}</p>
          <p>{t("structure.p2")}</p>
          <ul className="space-y-3 pl-6">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span><strong className="text-foreground">{t("structure.item1")}</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span><strong className="text-foreground">{t("structure.item2")}</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span><strong className="text-foreground">{t("structure.item3")}</strong></span>
            </li>
          </ul>
          <p className="text-sm border-l-2 border-accent pl-6 py-2">
            {t("structure.note")}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default StructureSection;
