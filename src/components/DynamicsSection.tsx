import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionWrapper from "./SectionWrapper";

const exampleIndices = [[15, 13], [2, 14], [9, 8], [12, 1]];

const DynamicsSection = () => {
  const { t } = useTranslation();
  const values = t("values.list", { returnObjects: true }) as string[];

  const examples = exampleIndices.map(([a, b]) => [values[a], values[b]]);

  return (
    <SectionWrapper id="dynamiques" alternate>
      <div className="max-w-3xl mx-auto text-center">
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

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {examples.map(([a, b], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-md p-5 text-center"
            >
              <span className="text-sm font-medium text-foreground">{a}</span>
              <span className="block text-accent text-lg my-1">×</span>
              <span className="text-sm font-medium text-foreground">{b}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
          {t("dynamics.note")}
        </p>
      </div>
    </SectionWrapper>
  );
};

export default DynamicsSection;
