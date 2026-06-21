import React from 'react';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marissa James",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
    },
    {
      name: "Jinga Low",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>TÉMOIGNAGES</h2>
        <div className={styles.subtitleWrapper}>
          <h3 className={styles.subtitle}>REJOIGNEZ LE MOUVEMENT</h3>
        </div>
        
        <div className={styles.grid}>
          {testimonials.map((t, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.avatar}></div>
              <div className={styles.content}>
                <p className={styles.text}>"{t.text}"</p>
                <p className={styles.name}>{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
