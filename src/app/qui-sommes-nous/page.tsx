import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import rootStyles from "../page.module.css";

export default function QuiSommesNous() {
  return (
    <main className={rootStyles.mainWrapper}>
      <Header theme="light" />
      
      <section className={styles.aboutHeroContainer}>
        
        {/* Title */}
        <h1 className={`${styles.mainTitle} animate-fade-up`}>
          Une équipe, une mission : transformer votre potentiel en réalité
        </h1>

        {/* 2-Column Content */}
        <div className={`${styles.contentGrid} animate-fade-up`} style={{ animationDelay: '0.2s' }}>
          
          <div className={styles.imageWrapper}>
            <Image 
              src="/gym_motion_fitlab.png" 
              alt="Coach MotionFit" 
              fill 
              style={{ objectFit: 'contain', objectPosition: 'bottom' }} 
            />
          </div>

          <div className={styles.textContent}>
            <h2>Bienvenue chez<br/><span style={{ color: 'var(--color-accent)' }}>Motion Fit Lab</span></h2>
            <p>
              Chez Motion Fit Lab, nous combinons science, mouvement et accompagnement personnalisé pour transformer durablement votre corps et votre posture. Notre approche va bien au-delà de l'entraînement traditionnel : elle vise à améliorer votre performance, votre énergie et votre bien-être global.
            </p>
            <Link href="/#contact" className="btn btn-outline-dark">Contactez-nous</Link>
          </div>

        </div>

      </section>

      {/* 4-Image Horizontal Grid */}
      <section className={`${styles.galleryContainer} animate-fade-up`} style={{ animationDelay: '0.3s' }}>
        <div className={styles.galleryImageWrapper}>
          <Image src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop" alt="Gym weights" fill className={styles.galleryImage} />
        </div>
        <div className={styles.galleryImageWrapper}>
          <Image src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop" alt="Workout" fill className={styles.galleryImage} />
        </div>
        <div className={styles.galleryImageWrapper}>
          <Image src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop" alt="Rowing machine" fill className={styles.galleryImage} />
        </div>
        <div className={styles.galleryImageWrapper}>
          <Image src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop" alt="Yoga mat" fill className={styles.galleryImage} />
        </div>
      </section>

      {/* Team Section */}
      <section className={`${styles.teamContainer} animate-fade-up`} style={{ animationDelay: '0.4s' }}>
        
        {/* Javier Rivera */}
        <div className={styles.instructorCard}>
          <div className={styles.instructorImageWrapper}>
            <Image src="/2.jpg" alt="Javier Rivera" fill style={{ objectFit: 'cover' }} />
          </div>
          <h3 className={styles.instructorName}>Javier Rivera</h3>
          <p className={styles.instructorRole}>Co-fondateur de MotionFit-Lab | Expert en Mouvement, Coaching systémique & Optimisation Humaine</p>
          <p className={styles.instructorBio}>
            Je suis passionné par l'optimisation du corps humain dans sa globalité : posture, mouvement, alimentation et mental. Mon approche combine expérience, science, précision biomécanique et mouvement naturel pour créer des transformations durables, pas temporaires. Ce qui me motive, c'est aider les personnes ambitieuses à retrouver puissance, énergie et contrôle de leur corps.
          </p>
        </div>

        {/* Davina Barreyre */}
        <div className={styles.instructorCard}>
          <div className={styles.instructorImageWrapper}>
            <Image src="/1.jpg" alt="Davina Barreyre" fill style={{ objectFit: 'cover' }} />
          </div>
          <h3 className={styles.instructorName}>Davina Barreyre</h3>
          <p className={styles.instructorRole}>Co-fondatrice de MotionFit-Lab</p>
          <p className={styles.instructorBio}>
            Je guide mes élèves dans l'exploration du mouvement comme outil de bien-être, d'expression et de reconnexion à soi. Mon approche fusionne danse, conscience corporelle et techniques énergétiques pour créer des expériences transformatrices et durables. Mon objectif : aider chacun à retrouver confiance, fluidité et équilibre dans son corps et son esprit.
          </p>
        </div>

      </section>

      {/* Footer */}
      <Footer />

    </main>
  );
}
