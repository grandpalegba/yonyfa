import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionWrapper from "./SectionWrapper";
import { PenLine, Move, Eye, Music, BookOpen, Brain } from "lucide-react";

const icons = [Move, PenLine, Eye, Music, Brain, BookOpen];

const PracticeSection = () => {
  const { t } = useTranslation();
  const items = t("practice.items", { returnObjects: true }) as string[];

  return (
    <SectionWrapper id="pratique">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 text-center">
          {t("practice.title")}
        </h2>
        <p className="text-muted-foreground text-center text-base md:text-lg mb-12">
          {t("practice.intro")}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
          {items.map((label, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center gap-3 border border-border rounded-md p-6 bg-card hover:border-accent/40 transition-colors"
              >
                <Icon size={24} className="text-accent" />
                <span className="text-sm font-medium text-foreground text-center">{label}</span>
              </motion.div>
            );
          })}
        </div>

        <p className="text-muted-foreground text-center text-sm max-w-lg mx-auto">
          {t("practice.outro")}
        </p>
      </div>
    </SectionWrapper>
  );
};

export default PracticeSection;
