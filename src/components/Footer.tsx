import Image from "next/image";
import Link from "next/link";
import styles from "../app/page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerCol}>
          <Image src="/logo.png" alt="MotionFit-Lab" width={207} height={56} style={{ marginBottom: "1.5rem", objectFit: 'contain' }} />
          <p>Studio d'optimisation humaine, posturologie et entraînement fonctionnel. Investissez dans votre évolution.</p>
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
