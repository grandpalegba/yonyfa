import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const links = [
    { label: t("nav.protocol"), href: "#structure" },
    { label: t("nav.values"), href: "#valeurs" },
    { label: t("nav.dynamics"), href: "#dynamiques" },
    { label: t("nav.workshops"), href: "#ateliers" },
    { label: t("nav.community"), href: "#communaute" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#" className="font-display text-xl tracking-tight">
          <span className="text-foreground">Yony</span>
          <span className="text-accent">Fâ</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#communaute"
            className="text-sm font-medium bg-accent text-accent-foreground px-5 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            {t("nav.join")}
          </a>
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            className="text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#communaute"
                onClick={() => setOpen(false)}
                className="text-sm font-medium bg-accent text-accent-foreground px-5 py-2 rounded-md text-center hover:opacity-90 transition-opacity"
              >
                {t("nav.join")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
