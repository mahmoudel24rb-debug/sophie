# Sophie Lerooy - Portfolio Artistique

Portfolio minimaliste d'artiste sculpteur avec expertise en design organique et art contemporain.

**Design**: Une seule page Hero immersive basée sur le template Artivo Collection.

## Technologies

- **HTML5** - Un seul fichier standalone (tout inline)
- **CSS3** - Styles Webflow + styles personnalisés inline
- **GSAP 3.12** - Animations professionnelles (split text, parallax)
- **Lenis** - Smooth scroll fluide
- **Google Fonts** - Typographies (Lato, Cormorant Garamond, Inter, Grey Qo)
- **Netlify** - Hébergement et déploiement continu

## Fonctionnalités

- **Hero fullscreen** avec rotation automatique des 12 sculptures (4s)
- **Animations GSAP split text** - Chaque lettre apparaît individuellement
- **Effet parallax** sur le mouvement de la souris
- **Smooth scroll** avec Lenis
- **Design ultra-minimaliste** - Une seule page, maximum d'impact
- **Responsive** - Mobile, tablet, desktop
- **Performance optimale** - Un seul fichier HTML, aucun build
- **Images hébergées sur CDN Squarespace**

## Développement Local

Aucune installation de dépendances n'est nécessaire ! Le site est en HTML/CSS/JS pur.

### Prévisualiser localement

Ouvrez simplement le fichier `index.html` dans votre navigateur, ou utilisez un serveur local :

```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (si installé)
npx serve .

# Avec PHP
php -S localhost:8000
```

Le site sera accessible sur `http://localhost:8000`

## Structure du Projet

```
sophie/
├── index.html              # SEUL FICHIER - Page Hero complète (HTML + CSS + JS inline)
├── README.md               # Documentation
└── netlify.toml            # Configuration Netlify
```

**Architecture**: Un seul fichier HTML autonome contenant tout (structure, styles, scripts).

## Déploiement

Le projet est configuré pour un déploiement automatique sur Netlify.

### Configuration Netlify

- **Build command:** (aucune - site statique)
- **Publish directory:** `.` (racine du projet)

Chaque push sur la branche `main` déclenche automatiquement un nouveau déploiement.

## Images

Les 12 images du hero et les 6 images de la galerie sont hébergées sur le CDN Squarespace pour un chargement rapide et optimisé.

**Hero Images (12):**
- IMG_5336.jpg, IMG_5335.jpg, IMG_5340.jpg
- IMG_0502.jpg, IMG_0503.jpg, IMG_0504.jpg
- RACHEL 1.jpg, Rachel.jpg, RACHEL 2.jpg
- IMG_5290.jpg, IMG_5292.jpg, MIKA.jpg

## Contenu

**Une seule page Hero** présentant:
- Texte principal: "Découvrir" (h2) + "L'Art Intemporel" (h1)
- CTA: "Découvrir la Galerie" (lien email)
- 12 sculptures en rotation automatique en arrière-plan

## Personnalisation

### Couleurs

Le design utilise un fond noir (#000) avec texte blanc et dégradé sombre pour la lisibilité.

### Typographies

Polices Google Fonts utilisées :
- **Cormorant Garamond** - Titres Hero (élégant, sérif)
- **Lato** - Éléments UI (moderne, sans-sérif)

## Performance

- **Un seul fichier HTML** (15KB) - Pas de requêtes multiples
- **Site 100% statique** - Pas de build, pas de bundle
- **Images optimisées** via CDN Squarespace
- **Animations GSAP professionnelles** via CDN (mise en cache)
- **Chargement instantané** - Architecture minimaliste

## License

© 2025 Sophie Lerooy - Tous droits réservés
