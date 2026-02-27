import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const actions = [
  "Explorer les 16 valeurs",
  "Partager vos contributions",
  "Participer à des ateliers",
  "Suivre des membres inspirants",
  "Contribuer aux futures publications",
];

const CommunitySection = () => (
  <SectionWrapper id="communaute" alternate>
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
        Rejoindre la communauté
      </h2>
      <p className="text-muted-foreground text-base md:text-lg mb-4">
        YonyFâ est un espace structuré et ouvert. Vous pouvez :
      </p>

      <ul className="space-y-3 mb-8 inline-block text-left">
        {actions.map((a) => (
          <li key={a} className="flex items-center gap-3 text-foreground text-sm">
            <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
            {a}
          </li>
        ))}
      </ul>

      <div className="border-t border-border pt-8 mt-8">
        <p className="text-muted-foreground text-sm mb-8">
          Le protocole est stable. Les interprétations sont multiples.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#"
            className="bg-accent text-accent-foreground font-medium px-8 py-3 rounded-md hover:opacity-90 transition-opacity text-sm"
          >
            Rejoindre la communauté
          </a>
          <a
            href="#"
            className="border border-border text-foreground font-medium px-8 py-3 rounded-md hover:bg-muted transition-colors text-sm"
          >
            S'inscrire à la newsletter
          </a>
        </motion.div>
      </div>
    </div>
  </SectionWrapper>
);

export default CommunitySection;
