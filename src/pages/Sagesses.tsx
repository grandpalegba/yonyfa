import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SandMatrix from "@/components/sagesses/SandMatrix";
import SynchronicityWall from "@/components/sagesses/SynchronicityWall";

type Tab = "matrice" | "mur";

const Sagesses = () => {
  const [tab, setTab] = useState<Tab>("matrice");
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Minimal header */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/85 border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            YonyFâ
          </Link>
          <h1 className="font-display text-lg text-foreground">
            Les Sagesses
          </h1>
          {/* Subtle Benin flag stripe */}
          <div className="flex items-center gap-0.5" aria-hidden>
            <span className="w-2 h-2 rounded-full" style={{ background: "hsl(var(--benin-green))" }} />
            <span className="w-2 h-2 rounded-full" style={{ background: "hsl(var(--benin-yellow))" }} />
            <span className="w-2 h-2 rounded-full" style={{ background: "hsl(var(--benin-red))" }} />
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="pt-24 pb-16 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Intro */}
          <div className="text-center mb-8">
            <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
              Voix du Bénin
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4 text-foreground">
              {tab === "matrice" ? "Matrice de Sable" : "Mur de Synchronicité"}
            </h2>
            <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed text-muted-foreground">
              {tab === "matrice"
                ? "Tirez dans la matrice pour révéler un signe combiné du Fâ. Chaque case mêle deux des 16 signes mères, ouvrant une dynamique unique à explorer."
                : "Un mur vivant de sagesses partagées. Laissez un visage vous appeler."}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 rounded-full bg-muted border border-border">
              {([
                { id: "matrice" as Tab, label: "Matrice" },
                { id: "mur" as Tab, label: "Mur de Synchronicité" },
              ]).map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className="relative px-5 sm:px-6 py-2 text-xs sm:text-sm font-medium rounded-full transition-all"
                  style={{
                    color: tab === t.id ? "hsl(var(--background))" : "hsl(var(--muted-foreground))",
                    background: tab === t.id ? "hsl(var(--foreground))" : "transparent",
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {tab === "matrice" ? <SandMatrix /> : <SynchronicityWall />}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
};

export default Sagesses;
