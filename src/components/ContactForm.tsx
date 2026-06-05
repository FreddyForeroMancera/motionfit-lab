"use client";

import { useState } from "react";
import { createMessage } from "../app/actions/message-actions";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    
    // Map 'interest' field to 'subject' for the server action
    const subjectValue = formData.get("interest");
    if (subjectValue) {
      formData.set("subject", subjectValue as string);
    }
    
    const result = await createMessage(formData);
    
    if (result.success) {
      setStatus("success");
      setMessage("Merci ! Votre demande a été envoyée avec succès. Notre équipe vous contactera bientôt.");
    } else {
      setStatus("error");
      setMessage(result.error || "Une erreur s'est produite. Veuillez réessayer.");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.successMessage}>
        <div className={styles.successIcon}>✓</div>
        <h3>{message}</h3>
        <button className="btn btn-secondary" style={{marginTop: '1.5rem'}} onClick={() => setStatus("idle")}>
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className={styles.formContainer}>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Votre nom</label>
        <input type="text" name="name" placeholder="Nom complet" required className={styles.input} />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Votre courriel</label>
        <input type="email" name="email" placeholder="Adresse courriel" required className={styles.input} />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Votre Téléphone</label>
        <input type="tel" name="phone" placeholder="Numéro (optionnel)" className={styles.input} />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Services</label>
        <select name="interest" className={styles.select} required defaultValue="">
          <option value="" disabled>Sélectionnez un service</option>
          <option value="Évaluation Initiale">Évaluation Initiale (Biotonix / 3D)</option>
          <option value="Entraînement Privé">Entraînement Privé</option>
          <option value="Abonnement VIP">Abonnement VIP Premium</option>
          <option value="Services Corporatifs">Services Corporatifs</option>
          <option value="Autre">Autre question</option>
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Message</label>
        <textarea name="message" placeholder="Comment pouvons-nous vous aider ?" rows={4} className={styles.textarea}></textarea>
      </div>
      
      {status === "error" && <p className={styles.errorMessage}>{message}</p>}
      
      <button type="submit" className={styles.submitBtn} disabled={status === "loading"}>
        <span className={styles.submitIcon}>➤</span>
        {status === "loading" ? "Envoi..." : "Envoyer"}
      </button>
    </form>
  );
}
