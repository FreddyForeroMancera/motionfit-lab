import Link from "next/link";
import styles from "./CallToAction.module.css";

export default function CallToAction() {
  return (
    <section className={styles.ctaContainer}>
      <div className={styles.ctaContent}>
        <h2 className={styles.title}>COMMENCEZ AVEC UNE ÉVALUATION GRATUITE</h2>
        <p className={styles.description}>
          Découvrez une approche complète du mouvement, de la posture et de l'optimisation corporelle pour atteindre vos objectifs avec précision et durabilité.
        </p>
        <div className={styles.phone}>
          (462)-567-8901
        </div>
        <Link href="/contact" className={styles.button}>
          RÉSERVEZ VOTRE ÉVALUATION GRATUITE
        </Link>
      </div>
    </section>
  );
}
