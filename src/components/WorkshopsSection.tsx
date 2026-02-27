import { useTranslation } from "react-i18next";
import SectionWrapper from "./SectionWrapper";

const WorkshopsSection = () => {
  const { t } = useTranslation();
  const roles = t("workshops.roles", { returnObjects: true }) as string[];
  const steps = t("workshops.steps", { returnObjects: true }) as string[];

  return (
    <SectionWrapper id="ateliers" alternate>
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 text-center">
          {t("workshops.title")}
        </h2>
        <p
          className="text-muted-foreground text-center text-base md:text-lg mb-12"
          dangerouslySetInnerHTML={{ __html: t("workshops.intro") }}
        />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-border rounded-md p-8 bg-card">
            <h3 className="font-display text-xl text-foreground mb-5">{t("workshops.rolesTitle")}</h3>
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
            <h3 className="font-display text-xl text-foreground mb-5">{t("workshops.stepsTitle")}</h3>
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
};

export default WorkshopsSection;
