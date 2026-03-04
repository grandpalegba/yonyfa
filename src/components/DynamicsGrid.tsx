import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { DYNAMICS_MATRIX } from "@/data/dynamics";

const DynamicsGrid = () => {
  const { t } = useTranslation();
  const values = t("values.list", { returnObjects: true }) as string[];
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null);

  const getShortLabel = useCallback((value: string) => {
    return value.length > 4 ? value.slice(0, 3) + "." : value;
  }, []);

  const getDynamicWord = useCallback((row: number, col: number) => {
    return DYNAMICS_MATRIX[row]?.[col] ?? "";
  }, []);

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[600px] max-w-4xl mx-auto">
        {/* Tooltip */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key={`${hovered.row}-${hovered.col}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.15 }}
              className="text-center mb-4 h-14 flex items-center justify-center"
            >
              <div className="inline-flex flex-col items-center gap-1 bg-foreground text-primary-foreground px-5 py-2 rounded-xl text-sm font-medium shadow-lg">
                {hovered.row === hovered.col ? (
                  <span className="text-base font-semibold">{values[hovered.row]}</span>
                ) : (
                  <>
                    <span className="text-[11px] opacity-70">
                      {values[hovered.row]} <span className="text-accent">×</span> {values[hovered.col]}
                    </span>
                    <span className="text-base font-semibold text-accent">
                      {getDynamicWord(hovered.row, hovered.col)}
                    </span>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {!hovered && <div className="h-14 mb-4" />}

        {/* Column headers */}
        <div className="grid gap-[2px]" style={{ gridTemplateColumns: `40px repeat(16, 1fr)` }}>
          <div /> {/* empty corner */}
          {values.map((v, i) => (
            <div
              key={`col-${i}`}
              className={`text-center text-[8px] sm:text-[9px] md:text-[10px] font-medium py-1 transition-colors duration-200 truncate ${
                hovered?.col === i ? "text-accent" : "text-muted-foreground"
              }`}
              title={v}
            >
              {getShortLabel(v)}
            </div>
          ))}

          {/* Grid rows */}
          {values.map((rowVal, row) => (
            <>
              {/* Row header */}
              <div
                key={`row-${row}`}
                className={`flex items-center justify-end pr-1 text-[8px] sm:text-[9px] md:text-[10px] font-medium transition-colors duration-200 truncate ${
                  hovered?.row === row ? "text-accent" : "text-muted-foreground"
                }`}
                title={rowVal}
              >
                {getShortLabel(rowVal)}
              </div>

              {/* Cells */}
              {values.map((_, col) => {
                const isHovered = hovered?.row === row && hovered?.col === col;
                const isRowOrCol = hovered?.row === row || hovered?.col === col;
                const isDiagonal = row === col;

                return (
                  <motion.div
                    key={`${row}-${col}`}
                    onMouseEnter={() => setHovered({ row, col })}
                    onMouseLeave={() => setHovered(null)}
                    className={`aspect-square rounded-[2px] cursor-pointer transition-all duration-200 ${
                      isHovered
                        ? "bg-accent scale-125 z-10 shadow-lg"
                        : isRowOrCol
                        ? "bg-accent/30"
                        : isDiagonal
                        ? "bg-foreground/15"
                        : "bg-foreground/5 hover:bg-foreground/10"
                    }`}
                    style={{ position: "relative" }}
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                );
              })}
            </>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-6 text-[10px] sm:text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-[2px] bg-foreground/15 inline-block" />
            {t("dynamics.legendSame", "Valeur × elle-même")}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-[2px] bg-accent inline-block" />
            {t("dynamics.legendCombo", "Combinaison")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DynamicsGrid;
