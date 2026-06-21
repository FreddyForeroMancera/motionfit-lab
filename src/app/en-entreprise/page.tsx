import Image from "next/image";
import Link from "next/link";
import * as LucideIcons from 'lucide-react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import QuoteCta from "../../components/QuoteCta";
import { courses } from "../../data/courses";
import styles from "./page.module.css";

const CourseIcon = ({ name }: { name: string }) => {
  const Icon = (LucideIcons as any)[name];
  return Icon ? <Icon size={18} /> : <span>●</span>;
};

export const metadata = {
  title: "Programmes Entreprises | MotionFit-Lab",
  description: "Bien-être au travail à Québec. Offrez à vos équipes une stratégie de santé corporative avec MotionFit-Lab.",
};

export default function EnEntreprisePage() {
  return (
    <main className={styles.mainWrapper}>
      <Header />
      
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <Image 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2000&auto=format&fit=crop" 
            alt="Corporate Wellness Training" 
            fill 
            style={{ objectFit: "cover", objectPosition: "center" }} 
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={styles.heroContentWrapper}>
          <div>
            <span className={styles.heroSubtitleTop}>P R O G R A M M E S</span>
            <h1 className={styles.heroTitle}>ENTREPRISES</h1>
          </div>
        </div>
        <QuoteCta variant="primary" />
      </section>

      {/* INTRO SECTION */}
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

      {/* CARDS SECTION */}
      <section className={styles.cardsSection}>
        <div className={styles.cardsGrid}>
          <div className={`${styles.card} ${styles.cardDark}`}>
            <h3 className={styles.cardTitle}>Bien-être au<br/>travail</h3>
            <div className={styles.cardText}>
              <p style={{ marginBottom: "1rem" }}>Offrez à vos équipes bien plus qu'une activité physique : une véritable stratégie de mieux-être.</p>
              <p>Nos programmes corporatifs aident à réduire la fatigue, améliorer l'énergie quotidienne et favoriser un meilleur équilibre physique et mental au travail. Un employé qui se sent mieux est plus engagé, plus concentré et plus performant.</p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cardAccent}`}>
            <h3 className={styles.cardTitle}>Santé &<br/>Performance</h3>
            <div className={styles.cardText}>
              <p style={{ marginBottom: "1rem" }}>Nos interventions en entreprise sont conçues pour améliorer la posture, la mobilité, la force fonctionnelle et la gestion du stress.</p>
              <p style={{ marginBottom: "1rem" }}>Grâce à une approche scientifique, moderne et adaptable à tous les niveaux, nous aidons vos collaborateurs à prévenir les inconforts liés au travail et à développer une meilleure capacité physique au quotidien.</p>
              <p>Une équipe en meilleure santé est une équipe plus forte.</p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cardLight}`}>
            <h3 className={styles.cardTitle}>Culture<br/>d'entreprise</h3>
            <div className={styles.cardText}>
              <p style={{ marginBottom: "1rem" }}>Investir dans la santé de vos employés, c'est aussi renforcer votre culture interne. Nos ateliers, séances et évaluations créent des expériences positives qui favorisent la cohésion, la motivation et le sentiment d'appartenance.</p>
              <p>Une entreprise qui prend soin de ses gens devient naturellement plus attractive, plus humaine et plus durable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES SECTION (NOS COURS STYLE) */}
      <section className={styles.coursesSection}>
        <div className="container">
          <h2 className={styles.additionalServicesTitle}>Cours</h2>
          <div className={styles.gridContainer}>
            {courses.map((course) => (
              <div key={course.id} className={styles.courseCard}>
                <Link href={`/nos-cours/${course.id}`} className={styles.imageWrapper}>
                  <Image 
                    src={course.image} 
                    alt={course.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                </Link>
                <div className={styles.courseCardContent}>
                  <h2 className={styles.courseCardTitle}>{course.title}</h2>
                  <p className={styles.courseCardDescription}>{course.description}</p>
                  
                  <div className={styles.lieuxBox}>
                    <strong>Lieux :</strong>{' '}
                    {course.lieux.split(', ').map((lieu, i) => {
                      const getLieuLink = (l: string) => l === "En Entreprise" ? "/en-entreprise" : "/abonnements";
                      return (
                        <Link href={getLieuLink(lieu)} key={i} className={styles.lieuTag}>
                          {lieu}
                        </Link>
                      );
                    })}
                  </div>

                  <div className={styles.cardFooter}>
                    <div className={styles.iconsRow}>
                      {course.icons?.map((iconDef, idx) => (
                        <span key={idx} className={styles.accentIcon} data-tooltip={iconDef.label} title={iconDef.label}>
                          <CourseIcon name={iconDef.name} />
                        </span>
                      ))}
                    </div>
                    <Link href={`/nos-cours/${course.id}`} className={styles.actionButton}>
                      <span className={styles.arrowUpRight}>↗</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className={styles.imageGridSection} style={{ paddingTop: 0 }}>
        <h2 className={styles.additionalServicesTitle}>Services additionnels</h2>
        <div className={styles.imageGridTwo}>
          <div className={styles.imageCard}>
            <Image src="https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1000&auto=format&fit=crop" alt="Bilan postural" fill style={{ objectFit: "cover" }} />
            <div className={styles.imageCardOverlay}></div>
            <div className={styles.imageCardContent}>
              <span className={styles.imageCardLabel}>Évaluation</span>
              <h3 className={styles.imageCardTitle}>Bilan postural</h3>
              <button className={styles.imageCardBtn}>Commencer</button>
            </div>
          </div>
          <div className={styles.imageCard}>
            <Image src="https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1000&auto=format&fit=crop" alt="Analyse corporelle" fill style={{ objectFit: "cover" }} />
            <div className={styles.imageCardOverlay}></div>
            <div className={styles.imageCardContent}>
              <span className={styles.imageCardLabel}>Évaluation</span>
              <h3 className={styles.imageCardTitle}>Analyse de la composition corporelle</h3>
              <button className={styles.imageCardBtn}>Commencer</button>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryImageWrapper}>
          <Image src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1000&auto=format&fit=crop" alt="Corporate Activity 1" fill style={{ objectFit: "cover" }} />
        </div>
        <div className={styles.galleryImageWrapper}>
          <Image src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1000&auto=format&fit=crop" alt="Corporate Activity 2" fill style={{ objectFit: "cover" }} />
        </div>
        <div className={styles.galleryImageWrapper}>
          <Image src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" alt="Corporate Activity 3" fill style={{ objectFit: "cover" }} />
        </div>
        <div className={styles.galleryImageWrapper}>
          <Image src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop" alt="Corporate Activity 4" fill style={{ objectFit: "cover" }} />
        </div>
      </section>

      {/* CTA SECTION WITH MODAL */}
      <QuoteCta />

      <Footer />
    </main>
  );
}
