"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../app/page.module.css";

interface HeaderProps {
  theme?: 'dark' | 'light';
}

export default function Header({ theme = 'dark' }: HeaderProps) {
  const isLight = theme === 'light';
  const linkClass = isLight ? styles.navLinkLight : styles.navLink;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="MotionFit-Lab" width={208} height={55} style={{ objectFit: 'contain' }} />
      </div>

      {/* Mobile Hamburger Button */}
      <button 
        className={`${styles.hamburgerBtn} ${isLight ? styles.hamburgerBtnLight : ''} ${isMobileMenuOpen ? styles.hamburgerBtnOpen : ''}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>

      <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        <Link href="/" className={linkClass} onClick={() => setIsMobileMenuOpen(false)}>Accueil</Link>
        <Link href="/qui-sommes-nous" className={linkClass} onClick={() => setIsMobileMenuOpen(false)}>Qui sommes-nous</Link>
        
        <div 
          className={`${styles.dropdown} ${isDropdownOpen ? styles.dropdownActive : ''}`} 
          ref={dropdownRef}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <Link href="/nos-cours" className={linkClass} onClick={() => { setIsMobileMenuOpen(false); }}>
            Nos Cours <span className={styles.dropdownArrow}>▾</span>
          </Link>
          <div className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.dropdownMenuOpen : ''}`}>
            <Link href="/en-studio" className={styles.dropdownItem} onClick={() => { setIsDropdownOpen(false); setIsMobileMenuOpen(false); }}>En Studio</Link>
            <Link href="/en-ligne" className={styles.dropdownItem} onClick={() => { setIsDropdownOpen(false); setIsMobileMenuOpen(false); }}>En Ligne</Link>
            <Link href="/en-entreprises" className={styles.dropdownItem} onClick={() => { setIsDropdownOpen(false); setIsMobileMenuOpen(false); }}>En Entreprise</Link>
          </div>
        </div>
        
        <Link href="/abonnements" className={linkClass} onClick={() => setIsMobileMenuOpen(false)}>Abonnements</Link>
        <Link href="/articles" className={linkClass} onClick={() => setIsMobileMenuOpen(false)}>Articles</Link>
        <Link href="/contact" className={linkClass} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        <Link href="/login" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', borderRadius: 'var(--border-radius-btn)' }} onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
      </nav>
    </header>
  );
}
