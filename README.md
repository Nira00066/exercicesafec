Exercices AFEC

Bienvenue sur mon dépôt GitHub dédié à mes exercices réalisés en solo dans le cadre de la formation Développement Web & Web Mobile à l’AFEC.

Ce repo est en quelque sorte mon carnet de bord : chaque dossier correspond à un cours ou à un ensemble d’exos, et j’y explique ce que j’ai fait, ce que j’ai appris, et les modifications que j’ai pu apporter au fur et à mesure.
Au fil de l’année, de nouveaux dossiers vont s’ajouter avec des cours plus avancés.
📁 Contenu actuel
0304 - Premiers pas en HTML

Ce dossier correspond à notre tout premier cours HTML.
Plutôt une révision pour moi, mais j’ai quand même découvert pas mal de trucs, notamment :

    La structure de base d’une page HTML

    Les tableaux (grosse découverte, je ne m’y attendais pas)

    Les formulaires (form, input, select, textarea, etc.)

    Les listes

0704 - Accessibilité & SEO

Ici, on a bossé sur l’importance des bonnes balises pour :

    Améliorer l’accessibilité de nos pages (screen readers, navigation clavier, etc.)

    Optimiser le SEO avec des balises sémantiques (main, article, section, header, etc.)

exo 1, 2, 3 CSS - Bases du CSS

Premiers pas avec le CSS :

    Sélecteurs de base

    Mise en forme simple (couleurs, polices, espacements)

    Structure et organisation d’un fichier CSS

    Compréhension du lien entre HTML & CSS

### 1104 - CSS Responsive

#### 🎯 Objectif

Réaliser le CSS **+ CSS responsive** pour reproduire les visuels fournis.  
L’objectif est d’appliquer des _media queries_ pour rendre la version mobile utilisable.

> Vous pouvez utiliser la page HTML fournie (lien plus bas ou dans le `.zip`)  
> Et uploader votre travail via **FileZilla** pour le tester sur votre téléphone :  
> Exemple : `https://www.afecdax.ovh/alvyn/`

Deux options pour écrire le CSS :

- Dans une **nouvelle feuille de style externe**
- Ou directement dans la page HTML entre les balises `<style>...</style>`

---

#### 📐 Consignes techniques

- La grille doit être **fluide** :
  - Plus l’écran est large, plus il y a de **colonnes**.
  - Plus l’écran est étroit, plus les colonnes passent **les unes sous les autres** (comme dans la vidéo).
- En version mobile :
  - Les **images doivent être à gauche** des noms des produits (et **pas au-dessus**, comme en desktop/tablette).

---

#### ✅ À ne pas oublier

- **Accessibilité** : structure logique, contrastes, navigation clavier, `aria`, etc.
- Utiliser **Lighthouse** dans Chrome pour vérifier l’accessibilité :  
  [Doc Lighthouse Microsoft](https://learn.microsoft.com/fr-fr/microsoft-edge/devtools-guide-chromium/accessibility/lighthouse)
- Penser aux bonnes pratiques **SEO** :
  - Titres bien hiérarchisés (`h1`, `h2`, etc.)
  - Balises `alt` sur les images

📌 À venir

Ce README sera mis à jour régulièrement avec de nouveaux dossiers au fur et à mesure de la formation.
Je rajouterai aussi mes modifications perso, améliorations, tests, etc.
