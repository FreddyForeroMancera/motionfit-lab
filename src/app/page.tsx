import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "../components/HeroCarousel";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <main className={styles.mainWrapper}>
      
      {/* --- HEADER --- */}
      <Header />

      {/* --- HERO SECTION --- */}
      <section className={styles.heroContainer}>
        <HeroCarousel />
        
        <div className={`${styles.heroContent} animate-fade-up`}>
          <h1 className={styles.heroTitle}>Optimisez votre corps.<br/>Élevez votre performance.</h1>
          <div className={styles.heroBottomRow}>
            <div className={styles.heroButtons}>
              <Link href="#programmes" className="btn btn-primary">Explorer les programmes</Link>
              <Link href="#contact" className="btn btn-secondary" style={{ marginLeft: '1rem' }}>En savoir plus</Link>
            </div>

            <div className={`${styles.promoCard} animate-fade-up`} style={{ animationDelay: '0.5s' }}>
              <h4>Évaluation 3D</h4>
              <p>Obtenez une analyse biomécanique complète lors de votre première visite.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- LIGHT SECTION: INTRO & PROGRAMMES --- */}
      <section id="programmes" className={styles.sectionLight}>
        
        <div className={styles.introGrid}>
          <div className={styles.introTextContent}>
            <div style={{ display: 'inline-block', border: '1px solid var(--color-text-dark)', borderRadius: '100px', padding: '0.4rem 1.2rem', marginBottom: '1.5rem', fontWeight: 600 }}>MotionFit-Lab Center</div>
            <h2 className={styles.sectionTitleDark}>
              Bienvenue au MotionFit-Lab, où la science rencontre le mouvement pour renforcer le corps et l'esprit.
            </h2>
            <Link href="#contact" className="btn btn-dark" style={{ borderRadius: 'var(--border-radius-btn)' }}>Plus d'infos ↗</Link>
          </div>

          <div className={styles.introImages}>
            <div className={styles.introImageMain}>
              <Image src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop" alt="Entraînement MotionFit" fill style={{objectFit: 'cover'}} />
            </div>
            <div className={styles.introImageSecondary}>
              <Image src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=400&auto=format&fit=crop" alt="Détail Équipement" fill style={{objectFit: 'cover'}} />
            </div>
          </div>
        </div>

        <div className={styles.roundedGrid}>
          
          <div className={styles.roundedCard}>
            <Image src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop" alt="Fonctionnel" fill className={styles.roundedCardImage} />
            <div className={styles.roundedCardOverlay}></div>
            <div className={styles.roundedCardPill}>Mouvement</div>
            <div className={styles.roundedCardText}>Entraînement Fonctionnel</div>
          </div>

          <div className={styles.roundedCard}>
            <Image src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop" alt="Posture" fill className={styles.roundedCardImage} />
            <div className={styles.roundedCardOverlay}></div>
            <div className={styles.roundedCardPill}>Posturologie</div>
            <div className={styles.roundedCardText}>Correction & Alignement</div>
          </div>

          <div className={styles.roundedCard}>
            <Image src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop" alt="Animal Flow" fill className={styles.roundedCardImage} />
            <div className={styles.roundedCardOverlay}></div>
            <div className={styles.roundedCardPill}>Mobilité</div>
            <div className={styles.roundedCardText}>Animal Flow & Flexibilité</div>
          </div>

        </div>

      </section>

      {/* --- BENTO SECTION: FEATURES --- */}
      <section id="evaluations" className={styles.bentoContainer}>
        
        <div className={`${styles.bentoBox} ${styles.bentoColSpan2}`}>
          <div className={styles.bentoIcon}>✦</div>
          <h3>Coaches Professionnels</h3>
          <p>Experts certifiés avec plus de 5 ans d'expérience en biomécanique clinique.</p>
        </div>

        <div className={styles.bentoBox}>
          <div className={styles.bentoIcon}>🎯</div>
          <h3>Haute Précision</h3>
          <p>Analyse Biotonix.</p>
        </div>

        <div className={styles.bentoBox}>
          <div className={styles.bentoIcon}>📊</div>
          <h3>Scanner 3D</h3>
          <p>Cartographie complète.</p>
        </div>

        <div className={`${styles.bentoBox} ${styles.bentoColSpan2}`}>
          <div className={styles.bentoIcon}>✚</div>
          <h3>Suivi Médical</h3>
          <p>Cabinet de professionnels médicaux intégrés pour votre réhabilitation.</p>
        </div>



        <div className={styles.bentoBox}>
          <div className={styles.bentoIcon}>⚡</div>
          <h3>Performance</h3>
          <p>Optimisation neuro-musculaire.</p>
        </div>

        <div id="abonnements" className={styles.bentoBox}>
           <h3 style={{ fontSize: '3rem', margin: 0, lineHeight: 1 }}>4</h3>
           <p>Zones sportives</p>
        </div>

      </section>

      {/* --- APP PROMO SECTION --- */}
      <section id="app" className={styles.appPromoContainer}>
        <Image 
          src="/app-mfl.png" 
          alt="Application Motion Fit Lab" 
          width={1920} 
          height={1080} 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
      </section>

      {/* --- CONTACT FORM SECTION --- */}
      <section id="contact" className={styles.sectionLight}>
        <div className={styles.contactSplitContainer}>
          <div className={styles.contactInfoSide}>
            <div className={styles.contactPill}>
              <span className={styles.contactPillIcon}>✉</span>
              <span>Démarrez un programme</span>
            </div>
            <h2 className={styles.contactSplitTitle}>Construisons Votre Avenir Physique</h2>
            <p className={styles.contactSplitDesc}>
              Prêt à lancer votre prochain programme ? Remplissez le formulaire ou contactez-nous directement pour commencer une conversation sur vos objectifs et comment nous pouvons vous aider à évoluer.
            </p>
            
            <div className={styles.contactDetails}>
              <div className={styles.contactDetailItem}>
                <div className={styles.contactDetailIcon}>📞</div>
                <span>+1(418) 575-5540</span>
              </div>
              <div className={styles.contactDetailItem}>
                <div className={styles.contactDetailIcon}>📍</div>
                <span>Québec, QC G1N 4G3</span>
              </div>
              <div className={styles.contactDetailItem}>
                <div className={styles.contactDetailIcon}>✉</div>
                <span>info@motionfit-lab.com</span>
              </div>
            </div>
          </div>
          
          <div className={styles.contactFormSide}>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <div className="container">
        <CallToAction />
      </div>

      {/* --- FOOTER --- */}
      <Footer />

    </main>
  );
}
