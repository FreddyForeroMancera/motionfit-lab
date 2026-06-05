import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import CallToAction from "../../components/CallToAction";
import styles from "./page.module.css";
import rootStyles from "../page.module.css";

export default function EnLigne() {
  return (
    <main className={rootStyles.mainWrapper}>
      <Header />

      {/* --- HERO SECTION --- */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <Image 
            src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2000&auto=format&fit=crop" 
            alt="En Ligne Training" 
            fill 
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>

        <div className={styles.heroContentWrapper}>
          <div className="animate-fade-up">
            <span className={styles.heroSubtitleTop}>E N  L I G N E</span>
            <h1 className={styles.heroTitle}>ACCOMPAGNEMENT<br/>GLOBAL</h1>
            <p className={styles.heroSubtitleCyan}>Optimisation complète accessible partout</p>
          </div>
        </div>
      </section>

      {/* --- SERVICES CARDS GRID --- */}
      <section className={styles.cardsSection}>
        <div className={styles.cardsGrid}>
          
          {/* Left Card (Cyan) */}
          <div className={styles.cardLeft}>
            <h2 className={styles.cardTitle}>ENTRAÎNEMENT</h2>
            <ul className={styles.cardList}>
              <li>Entraînement privé – LIVE (suivi personnalisé en ligne) : Entrainement fonctionnel (Kettlebell Warrior, Mace Warrior), Animal Flow, Callisthénie, Hand-stand factory, Yoga, Pilates, Danse Naturelle, Mobilité & stabilité fonctionnelle</li>
              <li>Séances de groupe : Entrainement fonctionnel (Kettlebell Warrior, Mace Warrior), Animal Flow, Callisthénie, Hand-stand factory, Yoga, Pilates, Danse Naturelle, Mobilité & stabilité fonctionnelle</li>
            </ul>
          </div>

          {/* Right Card (Dark Grey) */}
          <div className={styles.cardRight}>
            <h2 className={styles.cardTitle}>SERVICES</h2>
            <ul className={styles.cardList}>
              <li>Plateforme d'entraînement et suivi alimentaire structuré</li>
              <li>Programmes d'optimisation métabolique - live ou enregistrement</li>
              <li>Programmes d'optimisation de la composition corporelle et du métabolisme, en direct ou enregistrés</li>
              <li>Correction posturale guidée (avoir fait le bilan en présentiel)</li>
              <li>Ateliers, formation, évènements, conférences - en ligne</li>
            </ul>
          </div>

        </div>
      </section>

      {/* --- IMAGE GRID SECTION (7 SERVICES) --- */}
      <section className={styles.imageGridSection}>
        <h2 className={styles.additionalServicesTitle}>Cours</h2>
        <div className={styles.imageGrid}>
          
          {/* Service 1: Calisthénie */}
          <div className={styles.imageCard}>
            <Image src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1000&auto=format&fit=crop" alt="Calisthénie" fill style={{ objectFit: 'cover' }} />
            <div className={styles.imageCardOverlay}></div>
            <div className={styles.imageCardContent}>
              <span className={styles.imageCardLabel}>Cours</span>
              <h3 className={styles.imageCardTitle}>Calisthénie</h3>
              <p className={styles.imageCardSubtext}>En privé / En semi-privé / Groupes</p>
              <button className={styles.imageCardBtn}>Commencer</button>
            </div>
          </div>

          {/* Service 2: Animal Flow */}
          <div className={styles.imageCard}>
            <Image src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop" alt="Animal Flow" fill style={{ objectFit: 'cover' }} />
            <div className={styles.imageCardOverlay}></div>
            <div className={styles.imageCardContent}>
              <span className={styles.imageCardLabel}>Programme</span>
              <h3 className={styles.imageCardTitle}>Animal Flow</h3>
              <p className={styles.imageCardSubtext}>En privé / En semi-privé / Groupes</p>
              <button className={styles.imageCardBtn}>Commencer</button>
            </div>
          </div>

          {/* Service 3: Yoga */}
          <div className={styles.imageCard}>
            <Image src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" alt="Yoga" fill style={{ objectFit: 'cover' }} />
            <div className={styles.imageCardOverlay}></div>
            <div className={styles.imageCardContent}>
              <span className={styles.imageCardLabel}>Cours</span>
              <h3 className={styles.imageCardTitle}>Yoga</h3>
              <p className={styles.imageCardSubtext}>En privé / En semi-privé / Groupes</p>
              <button className={styles.imageCardBtn}>Commencer</button>
            </div>
          </div>

          {/* Service 4: Pilates */}
          <div className={styles.imageCard}>
            <Image src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1000&auto=format&fit=crop" alt="Pilates" fill style={{ objectFit: 'cover' }} />
            <div className={styles.imageCardOverlay}></div>
            <div className={styles.imageCardContent}>
              <span className={styles.imageCardLabel}>Programme</span>
              <h3 className={styles.imageCardTitle}>Pilates</h3>
              <p className={styles.imageCardSubtext}>En privé / En semi-privé / Groupes</p>
              <button className={styles.imageCardBtn}>Commencer</button>
            </div>
          </div>

          {/* Service 5: Handstand */}
          <div className={styles.imageCard}>
            <Image src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop" alt="Handstand" fill style={{ objectFit: 'cover' }} />
            <div className={styles.imageCardOverlay}></div>
            <div className={styles.imageCardContent}>
              <span className={styles.imageCardLabel}>Cours</span>
              <h3 className={styles.imageCardTitle}>Handstand</h3>
              <p className={styles.imageCardSubtext}>En privé / En semi-privé / Groupes</p>
              <button className={styles.imageCardBtn}>Commencer</button>
            </div>
          </div>

          {/* Service 6: Entrainement fonctionnel */}
          <div className={styles.imageCard}>
            <Image src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" alt="Entrainement fonctionnel" fill style={{ objectFit: 'cover' }} />
            <div className={styles.imageCardOverlay}></div>
            <div className={styles.imageCardContent}>
              <span className={styles.imageCardLabel}>Programme</span>
              <h3 className={styles.imageCardTitle}>Entrainement<br/>fonctionnel</h3>
              <p className={styles.imageCardSubtext}>En privé / En semi-privé / Groupes</p>
              <button className={styles.imageCardBtn}>Commencer</button>
            </div>
          </div>

          {/* Service 7: Danse (Centered in last row) */}
          <div className={`${styles.imageCard} ${styles.imageCardCenter}`}>
            <Image src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1000&auto=format&fit=crop" alt="Danse" fill style={{ objectFit: 'cover' }} />
            <div className={styles.imageCardOverlay}></div>
            <div className={styles.imageCardContent}>
              <span className={styles.imageCardLabel}>Cours</span>
              <h3 className={styles.imageCardTitle}>Danse</h3>
              <p className={styles.imageCardSubtext}>En privé / En semi-privé / Groupes</p>
              <button className={styles.imageCardBtn}>Commencer</button>
            </div>
          </div>

        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className={styles.ctaSection}>
        <Link href="/plateforme" className={styles.ctaLink}>
          ACCÉDER À LA PLATEFORME
        </Link>
      </section>

      {/* --- CTA GLOBAL SECTION --- */}
      <div className="container">
        <CallToAction />
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Footer />
      </div>
      
    </main>
  );
}
