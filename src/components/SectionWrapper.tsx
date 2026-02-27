import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id?: string;
  children: ReactNode;
  className?: string;
  alternate?: boolean;
}

const SectionWrapper = ({ id, children, className = "", alternate }: Props) => (
  <section
    id={id}
    className={`py-24 md:py-32 ${alternate ? "bg-secondary" : "bg-background"} ${className}`}
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-6"
    >
      {children}
    </motion.div>
  </section>
);

export default SectionWrapper;
