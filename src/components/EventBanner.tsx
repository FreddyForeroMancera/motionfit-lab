import React from 'react';
import Link from 'next/link';
import styles from './EventBanner.module.css';

export default function EventBanner() {
  return (
    <div className={styles.wrapper}>
      <section style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'center', padding: '0 1rem' }}>
        <Link href="/abonnements" style={{ width: '100%', display: 'block', borderRadius: '16px', overflow: 'hidden' }}>
          <img 
            src="/promo_banner.png?v=2" 
            alt="Promotion" 
            style={{ width: '100%', height: 'auto', maxHeight: '250px', objectFit: 'cover', display: 'block' }}
          />
        </Link>
      </section>
    </div>
  );
}
