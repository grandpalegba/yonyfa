import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import CombinedTrace from "./CombinedTrace";
import wallVideoAsset from "@/assets/wall-ambience.mp4.asset.json";
import { computeGlobalScore, type Consultation } from "@/data/consultations";

interface Props {
  consultation: Consultation | null;
  onClose: () => void;
}

const ConsultationModal = ({ consultation, onClose }: Props) => {
  const [resonance, setResonance] = useState([50]);
  const [relevance, setRelevance] = useState([50]);
  const [clarity, setClarity] = useState([50]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setResonance([50]);
      setRelevance([50]);
      setClarity([50]);
      onClose();
    }, 1800);
  };

  return (
    <AnimatePresence>
      {consultation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md"
          style={{ background: "hsl(30, 10%, 4%, 0.85)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 md:p-8"
            style={{
              background: "hsl(30, 10%, 10%)",
              borderColor: "hsl(36, 40%, 25%)",
            }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full transition-colors hover:bg-white/5"
              style={{ color: "hsl(36, 25%, 60%)" }}
              aria-label="Fermer"
            >
              <X size={18} />
            </button>

            {/* Video */}
            <div className="relative aspect-video rounded-xl overflow-hidden mb-5" style={{ background: "hsl(30, 10%, 6%)" }}>
              <video
                src={wallVideoAsset.url}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{
                  filter: `hue-rotate(${(consultation.videoSeed % 40) - 20}deg) brightness(0.7)`,
                }}
              />
              <div className="absolute bottom-3 left-3 text-xs px-2 py-1 rounded-md backdrop-blur-sm" style={{ background: "hsl(30, 10%, 8%, 0.7)", color: "hsl(40, 60%, 65%)" }}>
                ✦ {consultation.author}
              </div>
            </div>

            {/* Sign + value */}
            <div className="flex items-center gap-4 mb-5">
              <CombinedTrace leftCode={consultation.signX.code} rightCode={consultation.signY.code} size={64} color="hsl(40, 60%, 65%)" />
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-xl truncate" style={{ color: "hsl(40, 60%, 65%)" }}>
                  {consultation.signX.name}-{consultation.signY.name}
                </h3>
                <p className="text-xs" style={{ color: "hsl(36, 25%, 55%)" }}>
                  {consultation.signX.value} × {consultation.signY.value}
                </p>
                <p className="font-display text-base mt-1" style={{ color: "hsl(32, 60%, 52%)" }}>
                  {consultation.dynamicWord}
                </p>
              </div>
            </div>

            {/* Case + answer */}
            <div className="rounded-xl p-4 mb-5" style={{ background: "hsl(30, 10%, 8%)", border: "1px solid hsl(36, 25%, 18%)" }}>
              <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-widest" style={{ color: "hsl(32, 60%, 52%)" }}>
                <span className="text-lg">{consultation.lifeCase.emoji}</span>
                <span>{consultation.lifeCase.label}</span>
              </div>
              <p className="text-sm italic mb-3" style={{ color: "hsl(36, 25%, 65%)" }}>
                « {consultation.lifeCase.situation} »
              </p>
              <div className="text-xs uppercase tracking-widest mb-1" style={{ color: "hsl(36, 25%, 50%)" }}>
                Réponse choisie
              </div>
              <p className="text-sm mb-3" style={{ color: "hsl(40, 60%, 65%)" }}>
                {String.fromCharCode(65 + consultation.selectedOption)}. {consultation.lifeCase.options[consultation.selectedOption]}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(40, 20%, 85%)" }}>
                {consultation.reflection}
              </p>
            </div>

            {/* Current scores */}
            <div className="flex items-center justify-between mb-5 px-1">
              <div className="text-xs uppercase tracking-widest" style={{ color: "hsl(36, 25%, 50%)" }}>
                Score global communauté
              </div>
              <div className="flex items-center gap-3">
                <span className="font-display text-2xl" style={{ color: "hsl(40, 60%, 65%)" }}>
                  {computeGlobalScore(consultation.scores)}
                </span>
                <span className="text-xs" style={{ color: "hsl(36, 25%, 50%)" }}>
                  ({consultation.scores.count} avis)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-6 text-center">
              {[
                { label: "Résonance", value: consultation.scores.resonance },
                { label: "Pertinence", value: consultation.scores.relevance },
                { label: "Clarté", value: consultation.scores.clarity },
              ].map((s) => (
                <div key={s.label} className="rounded-lg p-2" style={{ background: "hsl(30, 10%, 8%)", border: "1px solid hsl(36, 25%, 16%)" }}>
                  <div className="text-[10px] uppercase tracking-wider mb-1" style={{ color: "hsl(36, 25%, 50%)" }}>{s.label}</div>
                  <div className="font-display text-lg" style={{ color: "hsl(32, 60%, 52%)" }}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* Evaluation */}
            {!submitted ? (
              <div className="space-y-5 pt-5 border-t" style={{ borderColor: "hsl(36, 25%, 18%)" }}>
                <p className="text-xs uppercase tracking-widest text-center" style={{ color: "hsl(32, 60%, 52%)" }}>
                  Votre évaluation
                </p>

                {[
                  { label: "Résonance", question: "Cette réponse résonne-t-elle en vous ?", value: resonance, set: setResonance },
                  { label: "Pertinence", question: "Le conseil est-il adapté à la situation ?", value: relevance, set: setRelevance },
                  { label: "Clarté", question: "Le message est-il clair et bien exprimé ?", value: clarity, set: setClarity },
                ].map((c) => (
                  <div key={c.label}>
                    <div className="flex items-baseline justify-between mb-2">
                      <div>
                        <span className="text-sm font-medium" style={{ color: "hsl(40, 60%, 65%)" }}>{c.label}</span>
                        <span className="text-xs ml-2 italic" style={{ color: "hsl(36, 25%, 55%)" }}>{c.question}</span>
                      </div>
                      <span className="font-display text-lg" style={{ color: "hsl(32, 60%, 52%)" }}>{c.value[0]}</span>
                    </div>
                    <Slider value={c.value} onValueChange={c.set} max={100} step={1} />
                  </div>
                ))}

                <button
                  onClick={handleSubmit}
                  className="w-full py-3 rounded-xl text-sm font-semibold transition-all"
                  style={{ background: "hsl(32, 60%, 52%)", color: "hsl(30, 10%, 8%)" }}
                >
                  Transmettre mon évaluation
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-6"
              >
                <p className="font-display text-lg" style={{ color: "hsl(40, 60%, 65%)" }}>
                  ✦ Votre regard a été reçu.
                </p>
                <p className="text-xs mt-2 italic" style={{ color: "hsl(36, 25%, 55%)" }}>
                  Chaque évaluation nourrit le discernement collectif.
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationModal;
