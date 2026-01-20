/* ========================================
   SOPHIE LEROOY - Portfolio JavaScript
   Animations scroll, parallax et interactions
   ======================================== */

// ========================================
// MENU HAMBURGER
// ========================================
const menuButton = document.getElementById('menuButton');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fermer le menu au clic sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuButton.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========================================
// SMOOTH PARALLAX MOUSE
// ========================================
let mouseX = 0;
let mouseY = 0;
let smoothMouseX = 0;
let smoothMouseY = 0;

document.addEventListener('mousemove', (e) => {
    // Normaliser entre -1 et 1
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

// Smooth animation avec requestAnimationFrame
function updateSmoothMouse() {
    // Spring damping pour smooth
    const damping = 0.1;
    smoothMouseX += (mouseX - smoothMouseX) * damping;
    smoothMouseY += (mouseY - smoothMouseY) * damping;

    requestAnimationFrame(updateSmoothMouse);
}
updateSmoothMouse();

// ========================================
// HERO SCROLL ANIMATIONS
// ========================================
const heroSection = document.getElementById('heroSection');
const heroImages = document.getElementById('heroImages');
const heroText = document.getElementById('heroText');
const scrollIndicator = document.getElementById('scrollIndicator');
const heroImgs = document.querySelectorAll('.hero-img');

// Fonction d'interpolation
function lerp(start, end, progress) {
    return start + (end - start) * progress;
}

// Fonction pour mapper les valeurs
function mapValue(value, inMin, inMax, outMin, outMax) {
    return outMin + (outMax - outMin) * ((value - inMin) / (inMax - inMin));
}

// Variables pour le scroll progress
let scrollProgress = 0;

// Animation au scroll
function updateHeroScroll() {
    if (!heroSection) return;

    const rect = heroSection.getBoundingClientRect();
    const sectionHeight = heroSection.offsetHeight;
    const windowHeight = window.innerHeight;

    // Progress de 0 à 1 pendant tout le scroll de la section
    scrollProgress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - windowHeight)));

    // === ANIMATIONS IMAGES ===
    // Valeurs basées sur le template original
    const imgOpacity = lerp(1, 0.39, scrollProgress * 1.5); // Plus rapide fade out
    const imgBlur = lerp(0, 18.4, scrollProgress * 1.5);
    const imgScale = lerp(1, 1.18, scrollProgress);
    const imgYPercent = lerp(0, -153, scrollProgress);

    heroImages.style.opacity = imgOpacity;
    heroImages.style.filter = `blur(${imgBlur}px)`;
    heroImages.style.transform = `scale(${imgScale}) translateY(${imgYPercent}%)`;

    // === TEXTE / CTA REVEAL ===
    // Apparaît progressivement après 5% de scroll
    if (scrollProgress < 0.05) {
        heroText.style.height = '0px';
        heroText.style.opacity = '0';
    } else if (scrollProgress < 0.17) {
        const textProgress = mapValue(scrollProgress, 0.05, 0.17, 0, 1);
        heroText.style.height = `${lerp(0, 96, textProgress)}px`;
        heroText.style.opacity = `${lerp(0, 0.35, textProgress)}`;
    } else if (scrollProgress < 0.3) {
        const textProgress = mapValue(scrollProgress, 0.17, 0.3, 0, 1);
        heroText.style.height = `${lerp(96, 200, textProgress)}px`;
        heroText.style.opacity = `${lerp(0.35, 1, textProgress)}`;
    } else {
        heroText.style.height = '200px';
        heroText.style.opacity = '1';
    }

    // === SCROLL INDICATOR ===
    // Fade out entre 40% et 55%
    if (scrollProgress < 0.4) {
        scrollIndicator.style.opacity = '1';
    } else if (scrollProgress < 0.55) {
        const indicatorProgress = mapValue(scrollProgress, 0.4, 0.55, 0, 1);
        scrollIndicator.style.opacity = `${lerp(1, 0, indicatorProgress)}`;
    } else {
        scrollIndicator.style.opacity = '0';
    }
}

// ========================================
// PARALLAX IMAGES - Animation Continue
// ========================================
function updateParallaxImages() {
    if (!heroSection) return;

    // Grid offset basé sur le scroll
    const gridXBase = lerp(-20, -19, scrollProgress);
    const gridYBase = lerp(9, 0.4, scrollProgress);

    heroImgs.forEach(img => {
        const baseX = parseFloat(img.dataset.x);
        const baseY = parseFloat(img.dataset.y);
        const parallaxX = parseFloat(img.dataset.px);
        const parallaxY = parseFloat(img.dataset.py);

        // AUGMENTER L'INTENSITÉ du parallax souris (x3 pour être plus visible)
        const parallaxIntensity = 3;
        const finalX = baseX + gridXBase + (smoothMouseX * parallaxX * parallaxIntensity);
        const finalY = baseY + gridYBase + (smoothMouseY * parallaxY * parallaxIntensity);

        img.style.left = `calc(50% + ${finalX}vw)`;
        img.style.top = `calc(50% + ${finalY}vh)`;
    });

    // Boucle d'animation continue
    requestAnimationFrame(updateParallaxImages);
}

// Démarrer l'animation parallax en continu
updateParallaxImages();

// Throttle scroll pour performance
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateHeroScroll();
            ticking = false;
        });
        ticking = true;
    }
});

// Init au chargement
updateHeroScroll();

// ========================================
// INTERSECTION OBSERVER - GALLERY
// ========================================
const observerOptions = {
    threshold: 0.2, // Trigger quand 20% visible
    rootMargin: '0px'
};

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Ne plus observer après l'animation
            projectObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer tous les projets
const projectItems = document.querySelectorAll('.collection-item');
projectItems.forEach(item => {
    projectObserver.observe(item);
});

// ========================================
// SMOOTH SCROLL POUR LES ANCRES
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Ne pas empêcher le comportement par défaut si c'est juste "#"
        if (href === '#') return;

        e.preventDefault();

        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// RESIZE HANDLER
// ========================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        updateHeroScroll();
    }, 250);
});

// ========================================
// CONSOLE INFO
// ========================================
console.log('%c🎨 Sophie Lerooy Portfolio', 'font-size: 16px; font-weight: bold; color: #C4A77D;');
console.log('%cVanilla JS - HTML/CSS - Ready for WordPress', 'font-size: 12px; color: #e5dfd5;');
