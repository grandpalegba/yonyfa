import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SandMatrix from "@/components/sagesses/SandMatrix";

const Sagesses = () => {
  return (
    <div className="min-h-screen" style={{ background: "hsl(30, 10%, 8%)", color: "hsl(40, 20%, 90%)" }}>
      {/* Minimal header */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b" style={{ background: "hsl(30, 10%, 8%)/0.9", borderColor: "hsl(36, 25%, 20%)" }}>
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium" style={{ color: "hsl(36, 25%, 60%)" }}>
            <ArrowLeft size={16} />
            YonyFâ
          </Link>
          <h1 className="font-display text-lg" style={{ color: "hsl(40, 60%, 65%)" }}>
            Matrice de Sable
          </h1>
          <div className="w-16" /> {/* spacer */}
        </div>
      </nav>

      {/* Main content */}
      <main className="pt-24 pb-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Intro */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4" style={{ color: "hsl(40, 60%, 65%)" }}>
              Les Sagesses
            </h2>
            <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: "hsl(36, 25%, 55%)" }}>
              Tirez dans la matrice pour révéler un signe combiné du Fâ.
              Chaque case mêle deux des 16 signes mères, ouvrant une dynamique unique à explorer.
            </p>
          </div>

          <SandMatrix />
        </motion.div>
      </main>
    </div>
  );
};

export default Sagesses;
