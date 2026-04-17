import { useState } from "react";
import { motion } from "framer-motion";
import { CONSULTATIONS, type Consultation } from "@/data/consultations";
import WallTile from "./WallTile";
import ConsultationModal from "./ConsultationModal";

const SynchronicityWall = () => {
  const [selected, setSelected] = useState<Consultation | null>(null);
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-xl mx-auto text-center py-16"
      >
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="font-display text-2xl md:text-3xl mb-6 leading-relaxed"
          style={{ color: "hsl(40, 60%, 65%)" }}
        >
          Prenez un instant.<br />Respirez.<br />Laissez une image vous appeler.
        </motion.p>
        <p className="text-sm italic mb-8" style={{ color: "hsl(36, 25%, 55%)" }}>
          Sans logique. Sans tri. Suivez la synchronicité.
        </p>
        <button
          onClick={() => setEntered(true)}
          className="px-6 py-3 rounded-xl text-sm font-medium transition-all"
          style={{
            border: "1px solid hsl(32, 60%, 52%)",
            color: "hsl(40, 60%, 65%)",
            background: "hsl(32, 60%, 52%, 0.1)",
          }}
        >
          Entrer dans le Mur
        </button>
      </motion.div>
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <p className="text-center text-xs italic mb-6" style={{ color: "hsl(36, 25%, 50%)" }}>
          Touchez la tuile qui vous appelle…
        </p>

        <div className="overflow-x-auto">
          <div
            className="grid gap-[2px] min-w-[400px] mx-auto"
            style={{ gridTemplateColumns: "repeat(16, 1fr)", maxWidth: "min(900px, 100%)" }}
          >
            {CONSULTATIONS.map((c, i) => (
              <WallTile
                key={c.id}
                consultation={c}
                index={i}
                onClick={setSelected}
              />
            ))}
          </div>
        </div>

        <p className="text-center text-[11px] italic mt-6" style={{ color: "hsl(36, 25%, 40%)" }}>
          {CONSULTATIONS.length} voix présentes
        </p>
      </motion.div>

      <ConsultationModal consultation={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default SynchronicityWall;
