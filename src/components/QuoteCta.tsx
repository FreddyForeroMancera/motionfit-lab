"use client";

import { useState } from "react";
import QuoteModal from "./QuoteModal";
import styles from "../app/en-entreprise/page.module.css";

interface QuoteCtaProps {
  variant?: 'huge' | 'primary';
}

export default function QuoteCta({ variant = 'huge' }: QuoteCtaProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {variant === 'huge' ? (
        <section className={styles.ctaSection}>
          <button 
            onClick={() => setIsModalOpen(true)} 
            className={styles.ctaLink}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
          >
            OBTENIR UNE SOUMISSION<br/>PERSONNALISÉE
          </button>
        </section>
      ) : (
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="btn btn-primary"
          style={{ position: 'absolute', bottom: '2rem', right: '2rem', padding: '1rem 2rem', fontSize: '1.1rem', zIndex: 10, borderRadius: 'var(--border-radius-btn, 8px)' }}
        >
          Demander une soumission
        </button>
      )}

      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
