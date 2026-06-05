"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Identifiants invalides");
    } else {
      // Redirect everyone to plateforme initially. Admins can click a link there to go to Admin.
      router.push("/plateforme");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.loginLogo}>
          <Link href="/">
            <Image src="/logo.png" alt="MotionFit-Lab" width={150} height={40} style={{ objectFit: 'contain' }} />
          </Link>
        </div>
        <h1 className={styles.loginTitle}>Connexion</h1>
        
        {error && <div className={styles.errorMessage}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Email</label>
            <input 
              type="email" 
              className={styles.formInput} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Mot de passe</label>
            <input 
              type="password" 
              className={styles.formInput} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className={styles.submitBtn}>
            Se connecter
          </button>
          
          <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem', color: '#4a5568' }}>
            Pas encore de compte ?{" "}
            <Link href="/register" style={{ color: 'var(--color-accent)', fontWeight: 'bold', textDecoration: 'none' }}>
              Créer un compte
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
