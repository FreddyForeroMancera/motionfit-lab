import Image from "next/image";
import Link from "next/link";
import styles from "../app/page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerCol}>
          <Image src="/logo.png" alt="MotionFit-Lab" width={310} height={84} style={{ marginBottom: "1.5rem", objectFit: 'contain' }} />
          <p>Studio d'optimisation humaine, posturologie et entraînement fonctionnel. Investissez dans votre évolution.</p>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.footerCol}>
          <h4>Menu</h4>
          <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/qui-sommes-nous">Qui sommes-nous</Link></li>
            <li><Link href="/nos-cours">Nos Cours</Link></li>
            <li><Link href="/#evaluations">Évaluations & Analyses</Link></li>
            <li><Link href="/#entreprises">Entreprises</Link></li>
            <li><Link href="/#abonnements">Abonnements</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>Contact</h4>
          <ul style={{ lineHeight: '1.8' }}>
            <li><strong>Motion Fit Lab</strong></li>
            <li>2323 rue Galvani<br/>Porte 130<br/>Québec, QC G1N 4G3</li>
            <li style={{ marginTop: '1rem' }}>📧 info@motionfit-lab.com</li>
            <li>📞 418-575-5540</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div>&copy; {new Date().getFullYear()} MotionFit-Lab. Tous droits réservés.</div>
        <div>Conçu pour la performance.</div>
      </div>
    </footer>
  );
}
