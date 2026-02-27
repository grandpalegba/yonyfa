import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const current = i18n.language;

  return (
    <div className="flex items-center gap-1 border border-border rounded-md overflow-hidden text-xs font-medium">
      <button
        onClick={() => i18n.changeLanguage("fr")}
        className={`px-2.5 py-1.5 transition-colors ${
          current === "fr"
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`px-2.5 py-1.5 transition-colors ${
          current === "en"
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
