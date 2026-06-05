import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import rootStyles from "../page.module.css";

export default function Programmes() {
  return (
    <main className={rootStyles.mainWrapper}>
      <Header theme="light" />
      
      <section className={styles.heroContainer}>
        
        <div className={styles.heroText}>
          <h1 className={`${styles.mainTitle} animate-fade-up`}>
            Transformez Votre Bien-Être avec Motion Fit-Lab
          </h1>
          <p className={`${styles.subtitle} animate-fade-up`} style={{ animationDelay: '0.1s' }}>
            Découvrez comment nos solutions de bien-être premium peuvent améliorer votre posture, optimiser vos mouvements et transformer votre qualité de vie.
          </p>
        </div>

        <div className={`${styles.imageWrapper} animate-fade-up`} style={{ animationDelay: '0.2s' }}>
          {/* Using a placeholder unsplash image of outdoor yoga matching the vibe of the mockup */}
          <Image 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop" 
            alt="Motion Fit Lab Programmes" 
            fill 
            style={{ objectFit: 'cover' }} 
          />
        </div>

        <div className={`${styles.featuresGrid} animate-fade-up`} style={{ animationDelay: '0.3s' }}>
          <div className={styles.featureSidebar}>
            <h2>Fonctionnalités Clés de Nos Logiciels</h2>
            <Link href="#plus" className={styles.discoverLink}>Découvrir Plus</Link>
          </div>
          
          <div className={styles.featureColumns}>
            <div id="studio" className={styles.featureItem}>
              <h3>Studio : Entraînement Personnalisé</h3>
              <p>Profitez d'un coaching en studio sur mesure pour maximiser vos performances physiques et votre conscience corporelle.</p>
            </div>
            
            <div id="entreprise" className={styles.featureItem}>
              <h3>Enterprise : Bien-Être en Entreprise</h3>
              <p>Intégrez nos solutions de bien-être dans votre entreprise pour améliorer la santé et la productivité de vos équipes.</p>
            </div>

            <div id="ligne" className={styles.featureItem}>
              <h3>Online : Flexibilité et Accessibilité</h3>
              <p>Accédez à nos programmes de coaching en ligne, où que vous soyez, pour une optimisation continue de votre métabolisme.</p>
            </div>
            
            <div className={styles.featureItem}>
              <h3>Analyse Avancée du Corps</h3>
              <p>Utilisez notre technologie de pointe pour une analyse corporelle détaillée et des recommandations personnalisées.</p>
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}
