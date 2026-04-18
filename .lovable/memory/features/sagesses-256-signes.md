---
name: Sagesses Sign Meanings
description: 256 Fa signs — image authentique du PDF + résumé reformulé (proverbe, essence, vigilance, engagement)
type: feature
---
Source : PDF "Les 256 signes de Fâ" uploadé par l'utilisateur.

## État actuel
- **Pages 1-50 parsées** → 95 signes extraits (indices 1-99, manquants : 77, 78, 92, 93)
- Images scannées copiées dans `src/assets/signs/page_X_image_Y_v2.jpg` (92 fichiers)
- Données dans `src/data/signMeanings.ts`

## Niveau de contenu par tier
- **16 signes mères (1-16)** : `proverb` + `essence` + `vigilance` + `engagement` rédigés à la main, ton sagesse universelle (vocabulaire religieux/sacrificiel reformulé en valeurs humanistes)
- **Enfants 17-99** : `proverb` extrait automatiquement du texte du PDF, `essence/vigilance/engagement` vides → fallback gracieux
- **Signes 100-256** : pas encore couverts → `resolveFaSign` retourne `null` → `SignDisplay` affiche un placeholder discret

## Mapping SIGNS → numéro Fa (1-256)
Notre tableau `SIGNS` (src/data/fongbe.ts) suit l'ordre traditionnel mais avec Ka et Trukpin/Tula/Lɛtɛ/Cɛ inversés par rapport au PDF.
Le mapping est dans `FONGBE_TO_PDF_ORDER` :
```
[0,1,2,3,4,5,6,7,8,9,11,12,13,10,14,15]
```
Notre index 10 (Ka) → position PDF 14 (Fa #15), notre index 11-13 → positions PDF 11-13.

Pour les enfants, ordre PDF : 17 = Gbe-Yeku, 18 = Gbe-Woli, ... 31 = Gbe-Fu, 32 = Yeku-Gbe, etc. (ligne par ligne en sautant la diagonale).
Formule : `faNum = 17 + px * 15 + (py > px ? py - 1 : py)`

## Composant
`src/components/sagesses/SignDisplay.tsx` — affiche image + nom + proverbe + (si dispo) essence/vigilance/engagement avec puces vert/jaune/rouge (palette Bénin). Mode `compact` disponible.

Intégré dans :
- `ConsultationModal` (sous le tracé combiné, avant le case QCM)
- `SandMatrix` reveal panel (après le mot dynamique)

## TODO pour étendre la couverture
1. Re-uploader le PDF par tranches (pages 51-100, 101-150, 151-200, 201-250)
2. Re-lancer `/tmp/sign_work/parse_signs.py` puis `build_meanings.py` adapté
3. Pour chaque enfant : rédiger essence/vigilance/engagement en ton universel (~3 phrases chacun)
