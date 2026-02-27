import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionWrapper from "./SectionWrapper";

const ValuesGrid = () => {
  const { t } = useTranslation();
  const values = t("values.list", { returnObjects: true }) as string[];

  return (
    <SectionWrapper id="valeurs" alternate>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 text-center">
        {t("values.title")}
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-base md:text-lg">
        {t("values.intro")}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
        {values.map((v, i) => (
          <motion.div
            key={v}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="aspect-square flex items-center justify-center border border-border rounded-md bg-card hover:bg-accent/10 hover:border-accent/40 transition-colors cursor-default"
          >
            <span className="font-medium text-sm sm:text-base text-foreground text-center px-2">
              {v}
            </span>
          </motion.div>
        ))}
      </div>

      <p className="text-muted-foreground text-center max-w-xl mx-auto mt-12 text-sm leading-relaxed">
        {t("values.outro")}
      </p>
    </SectionWrapper>
  );
};

export default ValuesGrid;
