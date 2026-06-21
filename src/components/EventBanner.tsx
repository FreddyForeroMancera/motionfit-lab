import React from 'react';
import Link from 'next/link';
import styles from './EventBanner.module.css';

export default function EventBanner() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.bannerContainer}>
        {/* Animated glowing backgrounds */}
        <div className={styles.glowCircle1}></div>
        <div className={styles.glowCircle2}></div>

        <div className={styles.bannerContent}>
          <div className={styles.textColumn}>
            <span className={styles.badge}>Spécial</span>
            <h2 className={styles.title}>Prochain Atelier d'Animal Flow</h2>
            <p className={styles.subtitle}>Samedi 25 Octobre - Places Limitées</p>
          </div>
          
          <div className={styles.actionColumn}>
            <Link href="/contact" className={styles.ctaButton}>
              Réservez votre place
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
