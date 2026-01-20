# Sophie Lerooy - Portfolio Artistique

Portfolio d'artiste sculpteur avec expertise en design organique et art contemporain.

## Technologies

- **HTML5** - Structure sémantique
- **CSS3** - Styles et animations
- **JavaScript (Vanilla)** - Animations et interactions
- **Google Fonts** - Typographies (Cormorant Garamond, Taviraj)
- **Netlify** - Hébergement et déploiement continu

## Fonctionnalités

- Hero section avec scroll sticky et 12 images en parallax
- Animations scroll-driven personnalisées
- Effet parallax basé sur la position de la souris
- Navigation responsive avec menu hamburger animé
- Galerie de 6 projets avec animations d'entrée
- Design responsive (mobile, tablet, desktop)
- Performance optimisée avec HTML statique
- Images hébergées sur CDN Squarespace

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
├── index.html              # Page principale
├── style.css               # Styles et animations CSS
├── script.js               # Animations JavaScript
├── README.md               # Documentation
└── netlify.toml            # Configuration Netlify
```

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

**Gallery Projects (6):**
1. Sculpture Abstraite I
2. Forme Organique
3. Rachel
4. Composition II
5. Série Blanche
6. Mika

## Personnalisation

### Couleurs

Les couleurs principales sont définies dans `style.css` via des variables CSS :

```css
:root {
    --dark: #000000;           /* Fond sombre */
    --light: #e5dfd5;          /* Texte clair */
    --paragraphs: #e5dfd599;   /* Paragraphes */
    --border: #e5dfd526;       /* Bordures */
    --accent: #C4A77D;         /* Accent doré */
}
```

### Typographies

Le site utilise deux polices Google Fonts :
- **Cormorant Garamond** - Titres et texte principal
- **Taviraj** - Accents italiques

## Performance

- Site 100% statique (pas de build, pas de bundle)
- Images optimisées via CDN Squarespace
- Animations CSS et JavaScript vanilla (pas de bibliothèques lourdes)
- Chargement ultra-rapide

## License

© 2025 Sophie Lerooy - Tous droits réservés
