import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import heroPattern from "@/assets/hero-pattern.jpg";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
      <img src={heroPattern} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-hero/60 via-hero/40 to-hero" />

      <div className="relative z-10 container mx-auto px-6 text-center py-32">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight mb-6"
        >
          <span className="text-hero-foreground">Yony</span>
          <span className="text-hero-accent">Fâ</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-xl sm:text-2xl md:text-3xl text-hero-foreground/80 mb-4"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-hero-foreground/60 text-base sm:text-lg mb-12 space-y-1 font-body"
        >
          <p>{t("hero.line1")}</p>
          <p>{t("hero.line2")}</p>
          <p>{t("hero.line3")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#structure" className="bg-accent text-accent-foreground font-medium px-8 py-3 rounded-md hover:opacity-90 transition-opacity text-sm">
            {t("hero.cta1")}
          </a>
          <a href="#communaute" className="border border-hero-foreground/30 text-hero-foreground font-medium px-8 py-3 rounded-md hover:bg-hero-foreground/10 transition-colors text-sm">
            {t("hero.cta2")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
