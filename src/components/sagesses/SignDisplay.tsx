import { motion } from "framer-motion";
import { resolveFaSign, type SignMeaning } from "@/data/signMeanings";

interface Props {
  signXIdx: number;
  signYIdx: number;
  /** Compact mode: smaller image, shorter text */
  compact?: boolean;
}

/**
 * Displays the authentic Fa sign representation extracted from the PDF
 * along with its reformulated meaning (proverb, essence, vigilance, engagement).
 *
 * Falls back to a placeholder when the sign is not yet documented (signs 100-256).
 */
const SignDisplay = ({ signXIdx, signYIdx, compact = false }: Props) => {
  const meaning: SignMeaning | null = resolveFaSign(signXIdx, signYIdx);

  if (!meaning) {
    return (
      <div className="rounded-xl border border-dashed border-border p-4 text-center bg-muted/30">
        <p className="text-xs italic text-muted-foreground">
          La lecture complète de ce signe sera bientôt disponible.
        </p>
      </div>
    );
  }

  const isMother = meaning.tier === "mother";
  const imgSize = compact ? "w-16 h-20" : "w-20 h-28 sm:w-24 sm:h-32";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="rounded-xl border border-border bg-card p-4 sm:p-5"
    >
      <div className="flex gap-4">
        {/* Authentic Fa sign image from PDF (or placeholder) */}
        <div className="flex-shrink-0">
          {meaning.image ? (
            <div
              className={`${imgSize} rounded-lg bg-background border border-border flex items-center justify-center overflow-hidden`}
            >
              <img
                src={meaning.image}
                alt={`Tracé authentique du signe ${meaning.name}`}
                className="w-full h-full object-contain p-1.5"
                loading="lazy"
              />
            </div>
          ) : (
            <div
              className={`${imgSize} rounded-lg bg-muted border border-border flex items-center justify-center`}
            >
              <span className="text-xs text-muted-foreground">—</span>
            </div>
          )}
          {isMother && (
            <div className="mt-1.5 text-center">
              <span
                className="inline-block text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded-full font-medium"
                style={{
                  background: "hsl(var(--benin-yellow) / 0.15)",
                  color: "hsl(var(--benin-yellow) / 0.9)",
                  border: "1px solid hsl(var(--benin-yellow) / 0.3)",
                }}
              >
                Signe mère
              </span>
            </div>
          )}
        </div>

        {/* Name + proverb */}
        <div className="flex-1 min-w-0">
          <h4 className="font-display text-base sm:text-lg leading-tight text-foreground">
            {meaning.name}
          </h4>
          {meaning.proverb && (
            <p className="text-xs sm:text-sm italic text-foreground/70 mt-1.5 leading-relaxed">
              « {meaning.proverb} »
            </p>
          )}
        </div>
      </div>

      {/* Detailed reading (only when content is available) */}
      {(meaning.essence || meaning.vigilance || meaning.engagement) && !compact && (
        <div className="mt-4 pt-4 border-t border-border space-y-3">
          {meaning.essence && (
            <Block
              label="Essence"
              text={meaning.essence}
              dot="hsl(var(--benin-green))"
            />
          )}
          {meaning.vigilance && (
            <Block
              label="Vigilance"
              text={meaning.vigilance}
              dot="hsl(var(--benin-red))"
            />
          )}
          {meaning.engagement && (
            <Block
              label="Engagement"
              text={meaning.engagement}
              dot="hsl(var(--benin-yellow))"
            />
          )}
        </div>
      )}

      {/* Compact mode: just essence inline */}
      {compact && meaning.essence && (
        <p className="mt-3 pt-3 border-t border-border text-xs leading-relaxed text-foreground/75">
          {meaning.essence}
        </p>
      )}
    </motion.div>
  );
};

const Block = ({
  label,
  text,
  dot,
}: {
  label: string;
  text: string;
  dot: string;
}) => (
  <div>
    <div className="flex items-center gap-1.5 mb-1">
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: dot }}
      />
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
        {label}
      </span>
    </div>
    <p className="text-xs sm:text-sm leading-relaxed text-foreground/80">{text}</p>
  </div>
);

export default SignDisplay;
