import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import styles from "./page.module.css";
import rootStyles from "../page.module.css";

export default function Contact() {
  return (
    <main className={rootStyles.mainWrapper}>
      <Header />

      <div className={styles.pageContainer}>
        {/* --- HERO SECTION --- */}
        <section className={styles.heroSection}>
          <Image 
            src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2000&auto=format&fit=crop" 
            alt="Contactez-nous background" 
            fill 
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }} 
            priority
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <div className="animate-fade-up">
              <h1 className={styles.heroTitle}>Contactez-nous</h1>
              <p className={styles.heroSubtitle}>
                MotionFit-Lab est prêt à vous accompagner selon vos besoins.
              </p>
            </div>
          </div>
        </section>

        {/* --- OVERLAP CARD --- */}
        <section className={styles.contentSection}>
          <div className={styles.contactCard}>
            
            {/* Left Column: Info */}
            <div className={styles.infoCol}>
              <h2 className={styles.colTitle}>Entrez en contact</h2>
              <p className={styles.infoSubtitle}>
                Avez-vous des questions ou souhaitez-vous en savoir plus sur nos services ? N'hésitez pas à nous écrire.
              </p>

              {/* Address */}
              <div className={styles.infoBlock}>
                <div className={styles.iconWrapper}>📍</div>
                <div className={styles.infoText}>
                  <h4>Siège Social</h4>
                  <p>2323 rue Galvani<br/>Porte 130<br/>Québec, QC G1N 4G3</p>
                </div>
              </div>

              {/* Email */}
              <div className={styles.infoBlock}>
                <div className={styles.iconWrapper}>✉️</div>
                <div className={styles.infoText}>
                  <h4>Email</h4>
                  <p>info@motionfit-lab.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className={styles.infoBlock}>
                <div className={styles.iconWrapper}>📞</div>
                <div className={styles.infoText}>
                  <h4>Téléphone</h4>
                  <p>418-575-5540</p>
                </div>
              </div>

              {/* Social Media */}
              <div className={styles.socialMedia}>
                <h4>Suivez-nous sur les réseaux sociaux</h4>
                <div className={styles.socialIcons}>
                  <a href="#" className={styles.socialIcon}>f</a>
                  <a href="#" className={styles.socialIcon}>in</a>
                  <a href="#" className={styles.socialIcon}>X</a>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className={styles.formCol}>
              <h2 className={styles.colTitle}>Envoyez-nous un message</h2>
              
              <form className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Nom</label>
                  <input type="text" className={styles.formInput} placeholder="Votre nom" />
                </div>
                
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Entreprise</label>
                  <input type="text" className={styles.formInput} placeholder="Votre entreprise" />
                </div>
                
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Téléphone</label>
                  <input type="tel" className={styles.formInput} placeholder="Votre téléphone" />
                </div>
                
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Email</label>
                  <input type="email" className={styles.formInput} placeholder="Votre adresse email" />
                </div>
                
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.formLabel}>Sujet</label>
                  <input type="text" className={styles.formInput} placeholder="Sujet de votre message" />
                </div>
                
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.formLabel}>Message</label>
                  <textarea className={styles.formTextarea} placeholder="Écrivez votre message ici..."></textarea>
                </div>
                
                <div className={styles.fullWidth}>
                  <button type="button" className={styles.submitBtn}>Envoyer le message</button>
                </div>
              </form>
            </div>

          </div>
        </section>

        {/* --- MAP SECTION --- */}
        <section className={styles.mapSection}>
          <iframe 
            src="https://maps.google.com/maps?q=2323%20rue%20Galvani,%20Qu%C3%A9bec,%20QC%20G1N%204G3&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className={styles.mapIframe}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

      </div>

      <Footer />
    </main>
  );
}
