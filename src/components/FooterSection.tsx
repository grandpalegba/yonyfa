import { useTranslation } from "react-i18next";

const FooterSection = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h4 className="font-display text-xl mb-4">
              <span>Yony</span>
              <span className="text-accent">Fâ</span>
            </h4>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-sm mb-4 uppercase tracking-wider text-primary-foreground/80">{t("footer.navTitle")}</h5>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#structure" className="hover:text-primary-foreground transition-colors">{t("nav.protocol")}</a></li>
              <li><a href="#valeurs" className="hover:text-primary-foreground transition-colors">{t("nav.values")}</a></li>
              <li><a href="#dynamiques" className="hover:text-primary-foreground transition-colors">{t("nav.dynamics")}</a></li>
              <li><a href="#ateliers" className="hover:text-primary-foreground transition-colors">{t("nav.workshops")}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-sm mb-4 uppercase tracking-wider text-primary-foreground/80">{t("footer.communityTitle")}</h5>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#communaute" className="hover:text-primary-foreground transition-colors">{t("footer.join")}</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t("footer.newsletter")}</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t("footer.social")}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-sm mb-4 uppercase tracking-wider text-primary-foreground/80">{t("footer.legalTitle")}</h5>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t("footer.charter")}</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t("footer.legal")}</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t("footer.contact")}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} YonyFâ — {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
