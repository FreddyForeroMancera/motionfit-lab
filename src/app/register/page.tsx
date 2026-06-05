"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { registerUser } from "../actions/auth-actions";
import styles from "../login/page.module.css"; // Reuse login styles

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);

    const result = await registerUser(formData);

    if (result.error) {
      setStatus("error");
      setMessage(result.error);
    } else if (result.success) {
      setStatus("success");
      setMessage("Compte créé avec succès ! Redirection en cours...");
      
      // Auto login after registration
      await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      setTimeout(() => {
        router.push("/plateforme");
      }, 1500);
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
        <h1 className={styles.loginTitle}>Créer un compte</h1>
        
        {status === "error" && <div className={styles.errorMessage}>{message}</div>}
        {status === "success" && <div style={{ background: '#d1fae5', color: '#065f46', padding: '1rem', borderRadius: '4px', marginBottom: '1.5rem', textAlign: 'center' }}>{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Nom complet</label>
            <input 
              type="text" 
              className={styles.formInput} 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </div>
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
              minLength={6}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Confirmer le mot de passe</label>
            <input 
              type="password" 
              className={styles.formInput} 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required 
              minLength={6}
            />
          </div>
          <button type="submit" className={styles.submitBtn} disabled={status === "loading" || status === "success"}>
            {status === "loading" ? "Création..." : "Créer mon compte"}
          </button>

          <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem', color: '#4a5568' }}>
            Vous avez déjà un compte ?{" "}
            <Link href="/login" style={{ color: 'var(--color-accent)', fontWeight: 'bold', textDecoration: 'none' }}>
              Se connecter
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
