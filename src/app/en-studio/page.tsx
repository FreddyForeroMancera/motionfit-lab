import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import CallToAction from "../../components/CallToAction";
import styles from "./page.module.css";
import rootStyles from "../page.module.css"; // Para utilidades globales si hicieran falta

export const metadata = {
  title: "Entraînement In Studio",
  description: "Programmes spécialisés en studio. Entraînement privé, semi-privé et cours de groupe à Québec.",
};

export default function EnStudio() {
  return (
    <main className={rootStyles.mainWrapper}>
      <Header />

      {/* --- HERO SECTION --- */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <Image 
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2000&auto=format&fit=crop" 
            alt="MotionFit Studio" 
            fill 
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>

        <div className={styles.heroContentWrapper}>
          <div className={`${styles.heroLeft} animate-fade-up`}>
            <span className={styles.heroSubtitle}>Programmes d'entraînement</span>
            <h1 className={styles.heroTitle}>In Studio</h1>
            <Link href="/#contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
              Commencez dès aujourd'hui
            </Link>
          </div>

          <div className={`${styles.heroRight} animate-fade-up`} style={{ animationDelay: '0.2s' }}>
            <div className={styles.heroFloatingCard}>
              <h2 className={styles.floatingCardTitle}>
                Essayez un pass gratuit<br/>
                de 5 jours pour votre<br/>
                entraînement
              </h2>
              <Link href="/#contact" className={styles.floatingCardSubtitle}>Obtenez votre passe</Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- INTRO SECTION --- */}
      <section className={styles.introSection}>
        <h2 className={styles.introTitle}>Programmes en studio</h2>
        <p className={styles.introText}>
          Découvrez nos programmes spécialisés en studio. Nous offrons une approche globale combinant force, mobilité et conscience corporelle. Chaque séance est conçue pour optimiser vos performances et améliorer votre posture de manière durable.
        </p>
        <div className={styles.introBadgeContainer}>
          <span className={styles.introBadge}>Entraînement</span>
        </div>
      </section>

      {/* --- CARDS GRID --- */}
      <section className={styles.cardsSection}>
        
        <div className={styles.cardsGrid}>
          
          {/* Card 1 */}
          <div className={`${styles.card} ${styles.cardDark}`}>
            <h3 className={styles.cardTitle}>Entraînement<br/>Privé</h3>
            <p className={styles.cardText}>
              Entraînement privé (suivi personnalisé complet) : Entrainement fonctionnel (Kettlebell Warrior, Mace Warrior), Animal Flow, Callisthénie, Hand-stand factory, Yoga, Pilates, Danse Naturelle, Mobilité & stabilité fonctionnelle, (Suivi alimentaire structuré)
            </p>
          </div>

          {/* Card 2 (Pushed Down) */}
          <div className={`${styles.card} ${styles.cardMiddle} ${styles.cardAccent}`}>
            <h3 className={styles.cardTitle}>Groupe<br/>Restreint</h3>
            <p className={styles.cardText}>
              Séances semi-privées (1 à 5 personnes) : Entrainement fonctionnel (Kettlebell Warrior, Mace Warrior), Animal Flow, Callisthénie, Hand-stand factory, Yoga, Pilates, Danse Naturelle, Mobilité & stabilité fonctionnelle
            </p>
          </div>

          {/* Card 3 */}
          <div className={`${styles.card} ${styles.cardLight}`}>
            <h3 className={styles.cardTitle}>Séances de<br/>Groupe &<br/>Entreprises</h3>
            <p className={styles.cardText}>
              Séances de groupe (10 à 15 personnes) ou formule entreprise : Entrainement fonctionnel (Kettlebell Warrior, Mace Warrior), Animal Flow, Callisthénie, Hand-stand factory, Yoga, Pilates, Danse Naturelle, Mobilité & stabilité fonctionnelle
            </p>
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
              <p className={styles.imageCardSubtext}>En privé / En semi-privé / Groupes</p>
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
              <p className={styles.imageCardSubtext}>En privé / En semi-privé / Groupes</p>
              <button className={styles.imageCardBtn}>Commencer</button>
            </div>
          </div>
        </div>
      </section>

      {/* --- EVALUATIONS SECTION --- */}
      <section className={styles.evalSection}>
        <div className={styles.evalHeader}>
          <h2 className={styles.evalTitle}>Évaluations & Analyses<br/>Avancées</h2>
          <div className={styles.evalDivider}></div>
        </div>

        <div className={styles.evalGrid}>
          <div className={styles.evalCard}>
            <div className={styles.evalIcon}></div>
            <p className={styles.evalText}>
              <strong>Évaluation de la composition corporelle</strong> par bio impédance (individuelle ou entreprise) - Visbody
            </p>
          </div>
          <div className={styles.evalCard}>
            <div className={styles.evalIcon}></div>
            <p className={styles.evalText}>
              <strong>Scanner corporel 3D</strong> - Visbody
            </p>
          </div>
          <div className={styles.evalCard}>
            <div className={styles.evalIcon}></div>
            <p className={styles.evalText}>
              <strong>Double évaluation posturale complète</strong> (analyse dynamique & biomécanique) - Biotonix
            </p>
          </div>
          <div className={styles.evalCard}>
            <div className={styles.evalIcon}></div>
            <p className={styles.evalText}>
              <strong>Bilan postural complet</strong> réalisé par un posturologue certifié - CIES
            </p>
          </div>
        </div>
      </section>

      {/* --- MEDIA SECTION --- */}
      <section className={styles.mediaSection}>
        <div className={styles.mediaWrapper}>
          <div className={styles.actionButton}></div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className={styles.testiSection}>
        <div className={styles.testiHeader}>
          <h2 className={styles.testiTitle}>TÉMOIGNAGES</h2>
          <h3 className={styles.testiSubtitle}>REJOIGNEZ LE MOUVEMENT</h3>
          <div className={styles.testiDivider}></div>
        </div>

        <div className={styles.testiGrid}>
          {/* Testimonial 1 */}
          <div className={styles.testiCard}>
            <div className={styles.testiAvatarWrapper}>
              <div className={styles.testiAvatar}></div>
            </div>
            <div className={styles.testiContent}>
              <p className={styles.testiText}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in"
              </p>
              <span className={styles.testiAuthor}>Marissa James</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className={styles.testiCard}>
            <div className={styles.testiAvatarWrapper}>
              <div className={styles.testiAvatar}></div>
            </div>
            <div className={styles.testiContent}>
              <p className={styles.testiText}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in"
              </p>
              <span className={styles.testiAuthor}>Jinga Low</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <div className="container">
        <CallToAction />
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Footer />
      </div>
      
    </main>
  );
}
