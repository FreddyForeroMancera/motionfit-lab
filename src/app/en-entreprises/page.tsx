import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import rootStyles from "../page.module.css";

export default function EnEntreprises() {
  return (
    <main className={rootStyles.mainWrapper}>
      <Header />

      {/* --- HERO SECTION --- */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <Image 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2000&auto=format&fit=crop" 
            alt="Corporate Wellness Training" 
            fill 
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>

        <div className={styles.heroContentWrapper}>
          <div className="animate-fade-up">
            <span className={styles.heroSubtitleTop}>P R O G R A M M E S</span>
            <h1 className={styles.heroTitle}>ENTREPRISES</h1>
          </div>
        </div>
      </section>

      {/* --- INTRO & FORMULES SECTION --- */}
      <section className={styles.introSection}>
        <p className={styles.introText}>
          Offrez à vos équipes une expérience bien-être complète, combinant entraînement fonctionnel, suivi personnalisé, nutrition structurée et prévention posturale. Motion FIT-LAB accompagne votre entreprise pour améliorer énergie, cohésion, performance durable et qualité de vie au travail, en présentiel ou en ligne.
        </p>
        
        <h2 className={styles.formulesTitle}>FORMULES ENTREPRISES</h2>
        
        <div className={styles.formulesGrid}>
          <div className={styles.formuleCard}>
            <span className={styles.formuleDot}></span>
            <p>Une approche santé corporative moderne et scientifique.</p>
          </div>
          <div className={styles.formuleCard}>
            <span className={styles.formuleDot}></span>
            <p>Évaluations corporelles et posturales</p>
          </div>
          <div className={styles.formuleCard}>
            <span className={styles.formuleDot}></span>
            <p>Programmes santé corporative</p>
          </div>
          <div className={styles.formuleCard}>
            <span className={styles.formuleDot}></span>
            <p>Ateliers mensuels santé & performance : en présentiel et en ligne</p>
          </div>
        </div>
      </section>

      {/* --- CARDS GRID (STAGGERED) --- */}
      <section className={styles.cardsSection}>
        <div className={styles.cardsGrid}>
          
          {/* Card 1 */}
          <div className={`${styles.card} ${styles.cardDark}`}>
            <h3 className={styles.cardTitle}>Bien-être au<br/>travail</h3>
            <div className={styles.cardText}>
              <p style={{ marginBottom: '1rem' }}>Offrez à vos équipes bien plus qu'une activité physique : une véritable stratégie de mieux-être.</p>
              <p>Nos programmes corporatifs aident à réduire la fatigue, améliorer l'énergie quotidienne et favoriser un meilleur équilibre physique et mental au travail. Un employé qui se sent mieux est plus engagé, plus concentré et plus performant.</p>
            </div>
          </div>

          {/* Card 2 (Middle Staggered) */}
          <div className={`${styles.card} ${styles.cardAccent} ${styles.cardMiddle}`}>
            <h3 className={styles.cardTitle}>Santé &<br/>Performance</h3>
            <div className={styles.cardText}>
              <p style={{ marginBottom: '1rem' }}>Nos interventions en entreprise sont conçues pour améliorer la posture, la mobilité, la force fonctionnelle et la gestion du stress.</p>
              <p style={{ marginBottom: '1rem' }}>Grâce à une approche scientifique, moderne et adaptable à tous les niveaux, nous aidons vos collaborateurs à prévenir les inconforts liés au travail et à développer une meilleure capacité physique au quotidien.</p>
              <p>Une équipe en meilleure santé est une équipe plus forte.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className={`${styles.card} ${styles.cardLight}`}>
            <h3 className={styles.cardTitle}>Culture<br/>d'entreprise</h3>
            <div className={styles.cardText}>
              <p style={{ marginBottom: '1rem' }}>Investir dans la santé de vos employés, c'est aussi renforcer votre culture interne. Nos ateliers, séances et évaluations créent des expériences positives qui favorisent la cohésion, la motivation et le sentiment d'appartenance.</p>
              <p>Une entreprise qui prend soin de ses gens devient naturellement plus attractive, plus humaine et plus durable.</p>
            </div>
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
              <button className={styles.imageCardBtn}>Commencer</button>
            </div>
          </div>

        </div>
      </section>

      {/* --- ADDITIONAL SERVICES SECTION --- */}
      <section className={styles.imageGridSection}>
        <h2 className={styles.additionalServicesTitle}>Services additionnels</h2>
        
        <div className={styles.imageGridTwo}>
          {/* Service 8: Bilan postural */}
          <div className={styles.imageCard}>
            <Image src="https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1000&auto=format&fit=crop" alt="Bilan postural" fill style={{ objectFit: 'cover' }} />
            <div className={styles.imageCardOverlay}></div>
            <div className={styles.imageCardContent}>
              <span className={styles.imageCardLabel}>Évaluation</span>
              <h3 className={styles.imageCardTitle}>Bilan postural</h3>
              <button className={styles.imageCardBtn}>Commencer</button>
            </div>
          </div>

          {/* Service 9: Analyse de la composition corporelle */}
          <div className={styles.imageCard}>
            <Image src="https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1000&auto=format&fit=crop" alt="Analyse de la composition corporelle" fill style={{ objectFit: 'cover' }} />
            <div className={styles.imageCardOverlay}></div>
            <div className={styles.imageCardContent}>
              <span className={styles.imageCardLabel}>Évaluation</span>
              <h3 className={styles.imageCardTitle}>Analyse de la composition corporelle</h3>
              <button className={styles.imageCardBtn}>Commencer</button>
            </div>
          </div>
        </div>
      </section>

      {/* --- GALLERY STRIP --- */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryImageWrapper}>
          <Image src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1000&auto=format&fit=crop" alt="Corporate Activity 1" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.galleryImageWrapper}>
          <Image src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1000&auto=format&fit=crop" alt="Corporate Activity 2" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.galleryImageWrapper}>
          <Image src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" alt="Corporate Activity 3" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.galleryImageWrapper}>
          <Image src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop" alt="Corporate Activity 4" fill style={{ objectFit: 'cover' }} />
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className={styles.ctaSection}>
        <Link href="/contact" className={styles.ctaLink}>
          OBTENIR UNE SOUMISSION<br/>PERSONNALISÉE
        </Link>
      </section>

      <div style={{ marginTop: '2rem' }}>
        <Footer />
      </div>
      
    </main>
  );
}
