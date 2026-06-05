import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import CallToAction from "../../components/CallToAction";
import styles from "./page.module.css";
import rootStyles from "../page.module.css";

export default function Abonnements() {
  return (
    <main className={rootStyles.mainWrapper}>
      <Header theme="light" />

      <div className={styles.pageContainer}>
        {/* --- TITLE SECTION --- */}
        <section className={styles.titleSection}>
          <div className="animate-fade-up">
            <h1 className={styles.mainTitle}>
              INVESTISSEZ DANS VOTRE ÉVOLUTION
            </h1>
          </div>
        </section>

        {/* --- BANNER GRID SECTION --- */}
        <section className={styles.bannerGrid}>
          {/* STANDARD */}
          <div className={styles.bannerCard}>
            <Image src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop" alt="Standard Plan" fill style={{ objectFit: 'cover' }} />
            <div className={styles.bannerOverlay}></div>
            <div className={styles.bannerTextContent}>
              <h2 className={styles.bannerTitle}>STANDARD</h2>
              <div className={styles.bannerTitleLine}></div>
            </div>
          </div>

          {/* VIP */}
          <div className={styles.bannerCard}>
            <Image src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" alt="VIP Plan" fill style={{ objectFit: 'cover' }} />
            <div className={styles.bannerOverlay}></div>
            <div className={styles.bannerTextContent}>
              <h2 className={styles.bannerTitle}>VIP</h2>
              <div className={styles.bannerTitleLine}></div>
            </div>
          </div>

          {/* VIP PREMIUM */}
          <div className={styles.bannerCard}>
            <Image src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1000&auto=format&fit=crop" alt="VIP Premium Plan" fill style={{ objectFit: 'cover' }} />
            <div className={styles.bannerOverlay}></div>
            <div className={styles.bannerTextContent}>
              <h2 className={styles.bannerTitle}>VIP<span>PREMIUM</span></h2>
              <div className={styles.bannerTitleLine}></div>
            </div>
          </div>

          {/* VIP ENTERPRISE */}
          <div className={styles.bannerCard}>
            <Image src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1000&auto=format&fit=crop" alt="VIP Enterprise Plan" fill style={{ objectFit: 'cover' }} />
            <div className={styles.bannerOverlay}></div>
            <div className={styles.bannerTextContent}>
              <h2 className={styles.bannerTitle}>VIP<span>ENTERPRISE</span></h2>
              <div className={styles.bannerTitleLine}></div>
            </div>
          </div>
        </section>

        {/* --- PRICING GRID SECTION --- */}
        <section className={styles.pricingSection}>
          <div className={styles.pricingGrid}>
            
            {/* STANDARD PRICING */}
            <div className={`${styles.pricingCard} ${styles.cardStandard}`}>
              <span className={styles.pricingName}>STANDARD</span>
              <div className={styles.pricingPrice}>$149</div>
              <ul className={styles.pricingFeatures}>
                <li>Accès aux programmes</li>
                <li>Accès à la plateforme en ligne</li>
              </ul>
              <button className={`${styles.btnBase} ${styles.btnLime}`}>COMMENCER</button>
            </div>

            {/* VIP PRICING */}
            <div className={`${styles.pricingCard} ${styles.cardVip}`}>
              <span className={styles.pricingName}>VIP</span>
              <div className={styles.pricingPrice}>$399</div>
              <ul className={styles.pricingFeatures}>
                <li>Entrainement privé</li>
                <li>Évaluation corporelle complète</li>
                <li>Planification personnalisée</li>
                <li>Suivi alimentaire</li>
                <li>Accès aux ateliers mensuels</li>
                <li>Accès à la plateforme en ligne</li>
              </ul>
              <button className={`${styles.btnBase} ${styles.btnWhite}`}>COMMENCER</button>
            </div>

            {/* VIP PREMIUM PRICING */}
            <div className={`${styles.pricingCard} ${styles.cardPremium}`}>
              <span className={styles.pricingName}>VIP PREMIUM</span>
              <div className={styles.pricingPrice}>$449</div>
              <ul className={styles.pricingFeatures}>
                <li>Entraînement privé</li>
                <li>Évaluation corporelle complète</li>
                <li>Planification personnalisée</li>
                <li>Bilan postural</li>
                <li>Suivi alimentaire</li>
                <li>Accès aux ateliers mensuels</li>
                <li>Accès à la plateforme en ligne</li>
                <li>Rapport biomécanique complet</li>
              </ul>
              <button className={`${styles.btnBase} ${styles.btnLime}`}>COMMENCER</button>
            </div>

            {/* VIP ENTERPRISE PRICING */}
            <div className={`${styles.pricingCard} ${styles.cardEnterprise}`}>
              <span className={styles.pricingName}>VIP ENTERPRISE</span>
              <div className={styles.pricingPrice}>$449</div>
              <ul className={styles.pricingFeatures}>
                <li>Évaluation de vos employés</li>
                <li>Conférences mensuelles</li>
                <li>Bilan postural</li>
                <li>Planification de groupe</li>
              </ul>
              <button className={`${styles.btnBase} ${styles.btnWhite}`}>PARLONS</button>
            </div>

          </div>
        </section>
      </div>

      {/* --- CTA SECTION --- */}
      <div className="container">
        <CallToAction />
      </div>

      <Footer />
    </main>
  );
}
