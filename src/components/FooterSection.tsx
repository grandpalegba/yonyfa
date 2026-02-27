const FooterSection = () => (
  <footer className="bg-primary text-primary-foreground py-16">
    <div className="container mx-auto px-6">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        <div>
          <h4 className="font-display text-xl mb-4">
            <span>Yony</span>
            <span className="text-accent">Fâ</span>
          </h4>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Un protocole pédagogique pour explorer les valeurs humaines.
          </p>
        </div>

        <div>
          <h5 className="font-semibold text-sm mb-4 uppercase tracking-wider text-primary-foreground/80">Navigation</h5>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li><a href="#structure" className="hover:text-primary-foreground transition-colors">Protocole</a></li>
            <li><a href="#valeurs" className="hover:text-primary-foreground transition-colors">Valeurs</a></li>
            <li><a href="#dynamiques" className="hover:text-primary-foreground transition-colors">Dynamiques</a></li>
            <li><a href="#ateliers" className="hover:text-primary-foreground transition-colors">Ateliers</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-sm mb-4 uppercase tracking-wider text-primary-foreground/80">Communauté</h5>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li><a href="#communaute" className="hover:text-primary-foreground transition-colors">Rejoindre</a></li>
            <li><a href="#" className="hover:text-primary-foreground transition-colors">Newsletter</a></li>
            <li><a href="#" className="hover:text-primary-foreground transition-colors">Réseaux sociaux</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-sm mb-4 uppercase tracking-wider text-primary-foreground/80">Légal</h5>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li><a href="#" className="hover:text-primary-foreground transition-colors">Charte éthique</a></li>
            <li><a href="#" className="hover:text-primary-foreground transition-colors">Mentions légales</a></li>
            <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} YonyFâ — Tous droits réservés
      </div>
    </div>
  </footer>
);

export default FooterSection;
