# Sophie Lerooy - Portfolio Artistique

Portfolio d'artiste sculpteur avec expertise en design organique et art contemporain.

## Technologies

- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool moderne et rapide
- **Framer Motion** - Animations avancées (scroll, parallax, transitions)
- **Netlify** - Hébergement et déploiement continu

## Fonctionnalités

- Hero section avec scroll sticky et 12 images en parallax
- Animations scroll-driven avec Framer Motion
- Effet parallax basé sur la position de la souris
- Navigation responsive avec menu hamburger animé
- Galerie de projets avec animations d'entrée
- Design responsive (mobile, tablet, desktop)
- Performance optimisée avec Vite

## Développement Local

### Installation

```bash
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Build de production

```bash
npm run build
```

### Prévisualiser le build

```bash
npm run preview
```

## Structure du Projet

```
sophie/
├── src/
│   ├── main.tsx              # Point d'entrée React
│   ├── App.tsx               # Composant racine
│   └── SophieLerooy.tsx      # Composant principal du portfolio
├── index.html                # HTML d'entrée
├── package.json              # Dépendances et scripts
├── vite.config.ts            # Configuration Vite
├── tsconfig.json             # Configuration TypeScript
└── netlify.toml              # Configuration Netlify
```

## Déploiement

Le projet est configuré pour un déploiement automatique sur Netlify.

### Configuration Netlify

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 20

Chaque push sur la branche `main` déclenche automatiquement un nouveau déploiement.

## Images

Les images sont actuellement hébergées sur le CDN Squarespace pour un chargement rapide et optimisé.

## License

© 2024 Sophie Lerooy - Tous droits réservés
