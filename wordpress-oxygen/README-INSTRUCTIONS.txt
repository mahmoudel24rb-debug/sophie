========================================
SOPHIE LEROOY - WordPress Oxygen 6.0
Guide d'installation
========================================

STRUCTURE DES FICHIERS :
========================

Chaque page a son propre fichier HTML + CSS.
Le header (barre de navigation + cadre) est un composant separe.

1. header.html + header.css
   -> Creer un "Header" dans Oxygen > Templates > Header
   -> Coller le HTML dans un Code Block
   -> Coller le CSS de header.css dans le champ CSS du Code Block
   -> header.css contient les styles de base (reset, body, typo, cadre, nav, menu mobile, .page-content, .page-title, .text-block)
   -> Ce CSS est charge automatiquement sur TOUTES les pages via le header

2. menu.js
   -> Ajouter via un Code Block <script> dans le header OU via Oxygen > Settings > Custom JS
   -> Gere le menu hamburger mobile

3. page-accueil.html + page-accueil.css
   -> Page d'accueil (Front Page), slug: accueil ou /
   -> Creer une page WordPress "Accueil", editer avec Oxygen
   -> Ajouter un Code Block, coller le HTML
   -> Coller le CSS de page-accueil.css dans le champ CSS du Code Block

4. page-oeuvres.html + page-oeuvres.css
   -> Page "OEuvres" avec grille des 5 themes
   -> Slug: oeuvres

5. page-demarche.html + page-demarche.css
   -> Page "Demarche" avec layout split image/texte
   -> Slug: demarche

6. page-expositions.html + page-expositions.css
   -> Page "Expositions" avec 3 sections (a venir, recentes, permanentes)
   -> Slug: expositions

7. page-bio.html + page-bio.css
   -> Page "Bio" avec biographie + infos
   -> Slug: bio

8. page-atelier.html + page-atelier.css
   -> Page "Atelier" avec layout split + galerie images
   -> Slug: atelier

9. page-contact.html + page-contact.css
   -> Page "Contact" avec email + localisation
   -> Slug: contact

10. 5 sous-pages themes (chacune utilise page-theme.css) :
    -> page-theme-emergence.html    -> Slug: oeuvres/emergence
    -> page-theme-presence.html     -> Slug: oeuvres/presence
    -> page-theme-revelation.html   -> Slug: oeuvres/revelation
    -> page-theme-interiorite.html  -> Slug: oeuvres/interiorite
    -> page-theme-equilibre.html    -> Slug: oeuvres/equilibre
    -> Coller le CSS de page-theme.css dans le champ CSS de chacune de ces 5 pages

COMMENT INSTALLER CHAQUE PAGE :
================================
1. Creer la page dans WordPress avec le bon slug (voir liste ci-dessous)
2. Editer avec Oxygen
3. Ajouter un Code Block
4. Coller le HTML du fichier correspondant
5. Coller le CSS du fichier correspondant dans le champ CSS du Code Block
6. Publier

IMAGES :
========
- Uploader toutes les images du dossier /images/ dans la mediatheque WordPress
- Remplacer les chemins "/wp-content/uploads/..." par les vrais URLs de la mediatheque
- Les images Squarespace CDN peuvent rester telles quelles ou etre re-uploadees

POLICES :
=========
Google Fonts Inter est charge via header.css (@import dans le header)
Pas besoin de plugin supplementaire.

LIENS :
=======
Tous les liens utilisent des chemins relatifs WordPress (/).
Adapter si le site est dans un sous-dossier.

COULEURS :
==========
- Fond : #F6F4EF (ivory)
- Texte : #3A3A3A
- Texte secondaire : #666, #888
- Border frame : #F6F4EF (33px desktop, 25px tablet, 15px mobile)
