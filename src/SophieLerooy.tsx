import { useRef, useState, useEffect } from "react"
import {
    motion,
    useScroll,
    useTransform,
    useMotionValue,
    useSpring,
} from "framer-motion"

/*
 * Sophie Lerooy - Portfolio Artistique
 * V7 - Positionnement absolu des images comme le template original
 */

export default function SophieLerooy() {
    const [menuOpen, setMenuOpen] = useState(false)
    const heroRef = useRef(null)

    // Position souris pour effet parallax
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const springConfig = { damping: 25, stiffness: 150 }
    const mouseXSpring = useSpring(mouseX, springConfig)
    const mouseYSpring = useSpring(mouseY, springConfig)

    // Scroll progress
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    })

    // Animations basées sur les valeurs inspectées du template
    // À scrollYProgress ~0.17 : opacity 0.88, blur 3.6px, translateY -34.6%, scale 1.036
    const imgOpacity = useTransform(
        scrollYProgress,
        [0, 0.17, 0.35, 0.5, 0.67],
        [1, 0.88, 0.74, 0.5, 0.39]
    )
    const imgBlur = useTransform(
        scrollYProgress,
        [0, 0.17, 0.35, 0.5, 0.67],
        [0, 3.6, 10, 15, 18.4]
    )
    const imgScale = useTransform(
        scrollYProgress,
        [0, 0.17, 0.35, 0.5, 0.67],
        [1, 1.036, 1.08, 1.12, 1.18]
    )
    const imgYPercent = useTransform(
        scrollYProgress,
        [0, 0.17, 0.35, 0.5, 0.67],
        [0, -34.6, -70, -110, -153]
    )

    // Texte/CTA - apparaît progressivement
    // À scrollYProgress ~0.17 : height ~96px, opacity ~0.35
    const textHeight = useTransform(
        scrollYProgress,
        [0, 0.05, 0.17, 0.3],
        [0, 0, 96, 200]
    )
    const textOpacity = useTransform(
        scrollYProgress,
        [0.05, 0.17, 0.3],
        [0, 0.35, 1]
    )

    // Scroll indicator
    const scrollIndicatorOpacity = useTransform(
        scrollYProgress,
        [0, 0.4, 0.55],
        [1, 1, 0]
    )

    // Mouvement souris
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const { innerWidth, innerHeight } = window
            const x = (clientX / innerWidth - 0.5) * 2
            const y = (clientY / innerHeight - 0.5) * 2
            mouseX.set(x)
            mouseY.set(y)
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [mouseX, mouseY])

    // Grid parallax - combine souris ET scroll
    // Template début: ~-20vw, ~9vw | À 0.17: ~-19.3vw, ~5.8vw
    const gridXBase = useTransform(scrollYProgress, [0, 0.67], [-20, -19])
    const gridYBase = useTransform(scrollYProgress, [0, 0.67], [9, 0.4])
    const gridXMouse = useTransform(mouseXSpring, [-1, 1], [-1, 1])
    const gridYMouse = useTransform(mouseYSpring, [-1, 1], [-1.5, 1.5])

    // Images avec positions absolues exactes (convertir les positions CSS en coordonnées absolues)
    // Chaque image est 20vw de large, positionnée dans une grille 4x3 avec offsets
    const heroImages = [
        // Row 1
        {
            src: "https://images.squarespace-cdn.com/content/v1/641eca46d495e35ab9135e80/b26053e3-1b76-4757-b90b-5e73ba9f773a/IMG_5336.jpg",
            x: -45,
            y: -25,
            parallaxX: 1,
            parallaxY: -0.5,
        },
        {
            src: "https://images.squarespace-cdn.com/content/v1/641eca46d495e35ab9135e80/4bf71508-605f-4c11-8166-9a6e6d01ae1c/IMG_5335.jpg",
            x: -45,
            y: 25,
            parallaxX: 0,
            parallaxY: 0,
        },
        {
            src: "https://images.squarespace-cdn.com/content/v1/641eca46d495e35ab9135e80/07200a28-bb18-4db9-bbc9-95bcaa5918de/IMG_5340.jpg",
            x: -15,
            y: -30,
            parallaxX: 2,
            parallaxY: -1,
        },
        {
            src: "https://images.squarespace-cdn.com/content/v1/641eca46d495e35ab9135e80/9d7cacf5-f524-4856-b0e8-34faeefd2fd3/IMG_0502.jpg",
            x: -15,
            y: 22,
            parallaxX: 0,
            parallaxY: 0,
        },
        // Row 2
        {
            src: "https://images.squarespace-cdn.com/content/v1/641eca46d495e35ab9135e80/2736d987-aafd-453f-8a36-ed255c889911/IMG_0503.jpg",
            x: 15,
            y: -32,
            parallaxX: -4,
            parallaxY: 2,
        },
        {
            src: "https://images.squarespace-cdn.com/content/v1/641eca46d495e35ab9135e80/6f5de855-aaa4-4f53-b673-5e9e236a937e/RACHEL+1.jpg",
            x: 15,
            y: 28,
            parallaxX: -2,
            parallaxY: 1,
        },
        {
            src: "https://images.squarespace-cdn.com/content/v1/641eca46d495e35ab9135e80/f274e63d-c4ee-4774-9d9f-5d3e49bbdd1a/Rachel.jpg",
            x: 45,
            y: -35,
            parallaxX: -2,
            parallaxY: 1,
        },
        {
            src: "https://images.squarespace-cdn.com/content/v1/641eca46d495e35ab9135e80/108dfc22-5861-4714-865c-51e1056e2e81/RACHEL+2.jpg",
            x: 45,
            y: 15,
            parallaxX: -5,
            parallaxY: 2.5,
        },
        // Row 3
        {
            src: "https://images.squarespace-cdn.com/content/v1/641eca46d495e35ab9135e80/e0e9bf97-26bf-42ce-a3ed-2d889aab5f6f/IMG_0504.jpg",
            x: -50,
            y: -5,
            parallaxX: 0,
            parallaxY: 0,
        },
        {
            src: "https://images.squarespace-cdn.com/content/v1/641eca46d495e35ab9135e80/ccff88b1-98d4-480c-af1a-2706f8085a84/IMG_5290.jpg",
            x: -20,
            y: 5,
            parallaxX: 2,
            parallaxY: -1,
        },
        {
            src: "https://images.squarespace-cdn.com/content/v1/641eca46d495e35ab9135e80/490ca1ce-a7a3-44f2-825d-ac61d6da4eb9/IMG_5292.jpg",
            x: 20,
            y: -8,
            parallaxX: -3,
            parallaxY: 1.5,
        },
        {
            src: "https://images.squarespace-cdn.com/content/v1/641eca46d495e35ab9135e80/65a65d86-7e89-4e6b-8552-97aee3a91e16/MIKA+photo+courte+-+Copie+version+carre.jpg",
            x: 50,
            y: 5,
            parallaxX: 0,
            parallaxY: 0,
        },
    ]

    const projects = [
        {
            title: "Sculpture Abstraite I",
            artist: "Sophie Lerooy",
            image: heroImages[0].src,
        },
        {
            title: "Forme Organique",
            artist: "Sophie Lerooy",
            image: heroImages[2].src,
        },
        { title: "Rachel", artist: "Sophie Lerooy", image: heroImages[5].src },
        {
            title: "Composition II",
            artist: "Sophie Lerooy",
            image: heroImages[4].src,
        },
        {
            title: "Série Blanche",
            artist: "Sophie Lerooy",
            image: heroImages[9].src,
        },
        { title: "Mika", artist: "Sophie Lerooy", image: heroImages[11].src },
    ]

    return (
        <div style={styles.container}>
            <style>{globalCSS}</style>

            {/* NAVBAR */}
            <nav style={styles.navbar}>
                <div style={styles.blockNavbar}>
                    <a href="#" style={styles.logo}>
                        <span style={styles.logoText}>SOPHIE</span>
                        <span style={styles.logoAccent}>Lerooy</span>
                    </a>
                    <button
                        style={styles.menuButton}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <div style={styles.menuIcon}>
                            <div
                                style={{
                                    ...styles.menuLine,
                                    transform: menuOpen
                                        ? "rotate(45deg) translateY(7px)"
                                        : "none",
                                }}
                            />
                            <div
                                style={{
                                    ...styles.menuLine,
                                    opacity: menuOpen ? 0 : 1,
                                }}
                            />
                            <div
                                style={{
                                    ...styles.menuLine,
                                    transform: menuOpen
                                        ? "rotate(-45deg) translateY(-7px)"
                                        : "none",
                                }}
                            />
                        </div>
                    </button>
                </div>
                <motion.div
                    style={styles.navMenu}
                    initial={false}
                    animate={{
                        clipPath: menuOpen
                            ? "inset(0% 0% 0% 0%)"
                            : "inset(0% 0% 100% 0%)",
                    }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    <div style={styles.navLinks}>
                        {["Accueil", "Galerie", "Contact", "À propos"].map(
                            (item, i) => (
                                <motion.div
                                    key={item}
                                    style={styles.navOverflow}
                                    initial={{ y: 80 }}
                                    animate={{ y: menuOpen ? 0 : 80 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: menuOpen ? 0.1 * i : 0,
                                        ease: [0.76, 0, 0.24, 1],
                                    }}
                                >
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        style={styles.navLink}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item}
                                    </a>
                                </motion.div>
                            )
                        )}
                    </div>
                </motion.div>
                <div style={styles.navGradient} />
            </nav>

            {/* HERO SECTION */}
            <section ref={heroRef} className="section-hero">
                <div className="hero-sticky">
                    {/* Texte centré */}
                    <div className="block-hero">
                        <div className="hero-overflow-a">
                            <h1 className="heading-hero">SOPHIE</h1>
                        </div>
                        <div className="hero-overflow-b">
                            <h1 className="heading-hero-accent">LEROOY</h1>
                        </div>
                        <motion.div
                            className="hero-overflow-c"
                            style={{ height: textHeight, opacity: textOpacity }}
                        >
                            <div className="line-hero">
                                <div className="line-light" />
                            </div>
                            <h5 className="paragraph-hero">
                                ARTISTE SCULPTEUR AVEC EXPERTISE EN{" "}
                                <span className="text-accent">
                                    DESIGN ORGANIQUE
                                </span>{" "}
                                ET{" "}
                                <span className="text-accent">
                                    ART CONTEMPORAIN.
                                </span>
                            </h5>
                            <a href="#galerie" className="button">
                                Découvrir mes œuvres
                            </a>
                        </motion.div>
                    </div>

                    {/* Images avec positionnement absolu */}
                    <motion.div
                        className="block-img-hero"
                        style={{
                            opacity: imgOpacity,
                            scale: imgScale,
                            y: useTransform(imgYPercent, (v) => `${v}%`),
                            filter: useTransform(
                                imgBlur,
                                (v) => `blur(${v}px)`
                            ),
                        }}
                    >
                        {heroImages.map((img, index) => (
                            <HeroImage
                                key={index}
                                src={img.src}
                                baseX={img.x}
                                baseY={img.y}
                                parallaxX={img.parallaxX}
                                parallaxY={img.parallaxY}
                                mouseXSpring={mouseXSpring}
                                mouseYSpring={mouseYSpring}
                                gridXBase={gridXBase}
                                gridYBase={gridYBase}
                                gridXMouse={gridXMouse}
                                gridYMouse={gridYMouse}
                            />
                        ))}
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        className="scroll"
                        style={{ opacity: scrollIndicatorOpacity }}
                    >
                        <div className="scroll-line">
                            <motion.div
                                className="scroll-line-light"
                                animate={{ y: ["-120%", "200%"] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>
                        <span className="text-scroll">SCROLL</span>
                    </motion.div>
                </div>
            </section>

            {/* PROJETS */}
            <section id="galerie" className="section">
                <div style={styles.content}>
                    {projects.map((project, index) => (
                        <ProjectItem
                            key={index}
                            project={project}
                            index={index}
                            isRight={index % 2 === 1}
                        />
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section style={styles.sectionCTA}>
                <motion.div
                    style={styles.ctaContent}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={styles.headingCTA}>
                        Prêt à découvrir{" "}
                        <span className="text-accent">
                            votre prochaine œuvre ?
                        </span>
                    </h2>
                    <div className="line-hero" style={{ marginBottom: "25px" }}>
                        <div className="line-light" />
                    </div>
                    <a href="#contact" className="button">
                        Me contacter
                    </a>
                </motion.div>
            </section>

            {/* FOOTER */}
            <footer style={styles.sectionFooter}>
                <div style={styles.footer}>
                    <a
                        href="https://sophielerooy.com"
                        style={styles.footerLink}
                    >
                        sophielerooy.com
                    </a>
                    <a href="#" style={styles.footerLink}>
                        Instagram
                    </a>
                </div>
                <div style={styles.footer}>
                    <span style={styles.footerLink}>© 2024 Sophie Lerooy</span>
                </div>
            </footer>
        </div>
    )
}

// Types pour les props
interface HeroImageProps {
    src: string
    baseX: number
    baseY: number
    parallaxX: number
    parallaxY: number
    mouseXSpring: any
    mouseYSpring: any
    gridXBase: any
    gridYBase: any
    gridXMouse: any
    gridYMouse: any
}

// Image positionnée de manière absolue
function HeroImage({
    src,
    baseX,
    baseY,
    parallaxX,
    parallaxY,
    mouseXSpring,
    mouseYSpring,
    gridXBase,
    gridYBase,
    gridXMouse,
    gridYMouse,
}: HeroImageProps) {
    // Combiner position de base + grid offset + parallax souris
    const finalX = useTransform(
        [gridXBase, gridXMouse, mouseXSpring],
        (values: number[]) => {
            const [gx, gxm, mx] = values
            return `calc(50% + ${baseX}vw + ${gx + gxm}vw + ${mx * parallaxX}vw)`
        }
    )
    const finalY = useTransform(
        [gridYBase, gridYMouse, mouseYSpring],
        (values: number[]) => {
            const [gy, gym, my] = values
            return `calc(50% + ${baseY}vh + ${gy + gym}vw + ${my * parallaxY}vw)`
        }
    )

    return (
        <motion.img
            src={src}
            alt=""
            className="hero-img"
            style={{
                position: "absolute",
                width: "18vw",
                maxWidth: "none",
                left: finalX,
                top: finalY,
                transform: "translate(-50%, -50%)",
            }}
        />
    )
}

interface ProjectItemProps {
    project: {
        title: string
        artist: string
        image: string
    }
    index: number
    isRight: boolean
}

function ProjectItem({ project, isRight }: ProjectItemProps) {
    const ref = useRef(null)
    const [isInView, setIsInView] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsInView(true)
            },
            { threshold: 0.2 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])
    return (
        <motion.div
            ref={ref}
            style={{
                ...styles.collectionItem,
                justifyContent: isRight ? "flex-end" : "flex-start",
            }}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
            <div style={styles.project}>
                <a href="#" style={styles.linkImageProject}>
                    <motion.div
                        style={styles.blockImageProject}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            style={styles.imageProject}
                        />
                    </motion.div>
                </a>
                <motion.div
                    style={styles.projectInfo}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h5 style={styles.headingProject}>{project.title}</h5>
                    <p style={styles.headingInfo}>{project.artist}</p>
                </motion.div>
            </div>
        </motion.div>
    )
}

const globalCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Taviraj:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300;1,400&display=swap');

    :root {
        --dark: #1A1A1A;
        --paragraphs: #e5dfd599;
        --light: #e5dfd5;
        --border: #e5dfd526;
        --accent: #C4A77D;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { background-color: var(--dark); color: var(--paragraphs); font-family: 'Cormorant Garamond', serif; }
    ::selection { background: rgba(196, 167, 125, 0.4); color: var(--light); }

    .section-hero {
        height: 300vh;
        position: relative;
    }

    .hero-sticky {
        position: sticky;
        top: 0;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .block-hero {
        z-index: 200;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    .hero-overflow-a, .hero-overflow-b { overflow: hidden; }

    .hero-overflow-c {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
    }

    .heading-hero {
        font-family: 'Cormorant Garamond', serif;
        text-transform: uppercase;
        margin-bottom: 0;
        font-size: clamp(60px, 12vw, 160px);
        font-weight: 400;
        line-height: 0.95;
        color: var(--light);
        letter-spacing: 0.05em;
    }

    .heading-hero-accent {
        font-family: 'Taviraj', serif;
        text-transform: uppercase;
        margin-bottom: 0;
        font-size: clamp(60px, 12vw, 160px);
        font-style: italic;
        font-weight: 200;
        line-height: 0.95;
        color: var(--light);
        letter-spacing: 0.02em;
    }

    .line-hero {
        background-color: var(--border);
        width: 54px;
        height: 1px;
        margin-top: 20px;
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .line-light {
        background-color: var(--light);
        width: 12px;
        height: 1px;
    }

    .paragraph-hero {
        text-transform: uppercase;
        max-width: 500px;
        margin-bottom: 30px;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.8;
        color: var(--paragraphs);
        letter-spacing: 0.15em;
        font-family: 'Cormorant Garamond', serif;
    }

    .text-accent {
        font-family: 'Taviraj', serif;
        font-style: italic;
        font-weight: 300;
        color: var(--accent);
    }

    .button {
        box-shadow: inset 0 0 0 1px var(--light);
        color: var(--light);
        letter-spacing: 0.15em;
        text-transform: uppercase;
        background-color: transparent;
        border-radius: 50px;
        padding: 16px 36px;
        font-size: 12px;
        font-weight: 500;
        text-decoration: none;
        transition: all 0.4s cubic-bezier(.25, .46, .45, .94);
        font-family: 'Cormorant Garamond', serif;
    }

    .button:hover {
        box-shadow: inset 0 0 0 40px var(--light);
        color: var(--dark);
    }

    .block-img-hero {
        position: absolute;
        inset: 0;
        z-index: 0;
        will-change: opacity, filter, transform;
    }

    .hero-img {
        will-change: transform;
        object-fit: cover;
    }

    .scroll {
        z-index: 50;
        position: absolute;
        bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .text-scroll {
        color: rgba(229, 223, 213, 0.4);
        letter-spacing: 0.2em;
        text-transform: uppercase;
        margin-top: 12px;
        font-size: 11px;
        font-family: 'Cormorant Garamond', serif;
    }

    .scroll-line {
        background-color: var(--border);
        width: 1px;
        height: 26px;
        overflow: hidden;
    }

    .scroll-line-light {
        background-color: var(--light);
        width: 1px;
        height: 26px;
    }

    .section {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 100px 12%;
        background-color: var(--dark);
    }
`

const styles = {
    container: {
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#1A1A1A",
        color: "#e5dfd599",
        fontFamily: "'Cormorant Garamond', serif",
        overflowX: "hidden" as const,
    },
    navbar: {
        position: "fixed" as const,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 500,
        padding: "20px 25px",
    },
    blockNavbar: {
        display: "flex",
        justifyContent: "space-between" as const,
        alignItems: "center" as const,
        position: "relative" as const,
        zIndex: 100,
    },
    logo: {
        textDecoration: "none",
        display: "flex",
        gap: "8px",
        alignItems: "baseline" as const,
    },
    logoText: {
        fontSize: "13px",
        fontWeight: 500,
        letterSpacing: "0.15em",
        color: "#E5DFD5",
    },
    logoAccent: {
        fontSize: "13px",
        fontWeight: 300,
        letterSpacing: "0.1em",
        color: "#C4A77D",
        fontStyle: "italic",
        fontFamily: "'Taviraj', serif",
    },
    menuButton: {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "10px",
        zIndex: 150,
    },
    menuIcon: {
        display: "flex",
        flexDirection: "column" as const,
        gap: "5px",
        width: "24px",
    },
    menuLine: {
        height: "1px",
        backgroundColor: "#E5DFD5",
        transition: "all 0.4s cubic-bezier(0.76, 0, 0.24, 1)",
    },
    navMenu: {
        position: "fixed" as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(26, 26, 26, 0.95)",
        backdropFilter: "blur(40px)",
        display: "flex",
        alignItems: "center" as const,
        justifyContent: "center" as const,
        zIndex: 50,
    },
    navLinks: {
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center" as const,
        gap: "15px",
    },
    navOverflow: { overflow: "hidden" as const },
    navLink: {
        fontSize: "clamp(32px, 6vw, 64px)",
        fontWeight: 300,
        fontStyle: "italic",
        color: "#E5DFD5",
        textDecoration: "none",
        fontFamily: "'Taviraj', serif",
    },
    navGradient: {
        position: "fixed" as const,
        top: 0,
        left: 0,
        right: 0,
        height: "100px",
        background:
            "linear-gradient(180deg, rgba(26, 26, 26, 0.6) 0%, transparent 100%)",
        pointerEvents: "none" as const,
        zIndex: 49,
    },
    content: { width: "100%", maxWidth: "1400px" },
    collectionItem: { display: "flex", marginBottom: "100px", width: "100%" },
    project: { width: "65vw", maxWidth: "850px" },
    linkImageProject: { display: "block", textDecoration: "none" },
    blockImageProject: {
        width: "100%",
        aspectRatio: "16 / 10",
        overflow: "hidden" as const,
        borderRadius: "2px",
    },
    imageProject: { width: "100%", height: "100%", objectFit: "cover" as const },
    projectInfo: { paddingTop: "20px" },
    headingProject: {
        fontSize: "clamp(20px, 2.2vw, 28px)",
        fontWeight: 400,
        fontStyle: "italic",
        color: "#E5DFD5",
        margin: "0 0 6px 0",
        fontFamily: "'Taviraj', serif",
    },
    headingInfo: {
        fontSize: "12px",
        fontWeight: 400,
        color: "rgba(229, 223, 213, 0.4)",
        margin: 0,
        letterSpacing: "0.1em",
        textTransform: "uppercase" as const,
    },
    sectionCTA: {
        padding: "120px 5vw",
        position: "relative" as const,
        backgroundColor: "#1A1A1A",
        display: "flex",
        justifyContent: "center" as const,
    },
    ctaContent: {
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center" as const,
        textAlign: "center" as const,
    },
    headingCTA: {
        fontSize: "clamp(24px, 3.5vw, 42px)",
        fontWeight: 300,
        lineHeight: 1.4,
        color: "#E5DFD5",
        marginBottom: "20px",
        fontFamily: "'Cormorant Garamond', serif",
    },
    sectionFooter: {
        padding: "30px 5vw",
        display: "flex",
        justifyContent: "space-between" as const,
        alignItems: "center" as const,
        borderTop: "1px solid rgba(229, 223, 213, 0.08)",
        backgroundColor: "#1A1A1A",
    },
    footer: { display: "flex", gap: "25px" },
    footerLink: {
        fontSize: "11px",
        fontWeight: 400,
        color: "rgba(229, 223, 213, 0.4)",
        textDecoration: "none",
        letterSpacing: "0.05em",
    },
}
