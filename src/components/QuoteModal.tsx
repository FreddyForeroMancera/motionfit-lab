"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import styles from "./QuoteModal.module.css";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    employeeCount: "",
    message: ""
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleServiceChange = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after 3 seconds and close
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          companyName: "",
          contactName: "",
          email: "",
          phone: "",
          employeeCount: "",
          message: ""
        });
        setSelectedServices([]);
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Fermer">
          <X size={24} />
        </button>

        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Demande de Soumission</h2>
          <p className={styles.modalSubtitle}>
            Remplissez le formulaire ci-dessous pour obtenir une proposition adaptée aux besoins de votre entreprise.
          </p>
        </div>

        {isSuccess ? (
          <div className={styles.successMessage}>
            <div className={styles.successIcon}>✓</div>
            <h3>Demande envoyée avec succès !</h3>
            <p>Notre équipe vous contactera dans les plus brefs délais.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="companyName">Nom de l'entreprise *</label>
                <input 
                  type="text" 
                  id="companyName" 
                  required 
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  placeholder="Ex: Acme Corp"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contactName">Personne contact *</label>
                <input 
                  type="text" 
                  id="contactName" 
                  required 
                  value={formData.contactName}
                  onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                  placeholder="Ex: Jean Tremblay"
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Courriel professionnel *</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="jean@entreprise.com"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Numéro de téléphone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="(555) 555-5555"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="employeeCount">Taille de l'entreprise *</label>
              <select 
                id="employeeCount" 
                required
                value={formData.employeeCount}
                onChange={(e) => setFormData({...formData, employeeCount: e.target.value})}
              >
                <option value="" disabled>Sélectionnez une option</option>
                <option value="1-10">1 à 10 employés</option>
                <option value="11-50">11 à 50 employés</option>
                <option value="51-200">51 à 200 employés</option>
                <option value="201+">Plus de 200 employés</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Services d'intérêt</label>
              <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel}>
                  <input 
                    type="checkbox" 
                    checked={selectedServices.includes("Cours en entreprise")}
                    onChange={() => handleServiceChange("Cours en entreprise")}
                  />
                  <span>Cours d'entraînement</span>
                </label>
                <label className={styles.checkboxLabel}>
                  <input 
                    type="checkbox" 
                    checked={selectedServices.includes("Évaluations posturales")}
                    onChange={() => handleServiceChange("Évaluations posturales")}
                  />
                  <span>Évaluations posturales</span>
                </label>
                <label className={styles.checkboxLabel}>
                  <input 
                    type="checkbox" 
                    checked={selectedServices.includes("Ateliers mensuels")}
                    onChange={() => handleServiceChange("Ateliers mensuels")}
                  />
                  <span>Ateliers santé & performance</span>
                </label>
                <label className={styles.checkboxLabel}>
                  <input 
                    type="checkbox" 
                    checked={selectedServices.includes("Plateforme en ligne")}
                    onChange={() => handleServiceChange("Plateforme en ligne")}
                  />
                  <span>Accès plateforme en ligne</span>
                </label>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Besoins spécifiques ou questions</label>
              <textarea 
                id="message" 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Décrivez brièvement vos objectifs..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={styles.submitBtn} 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Demander ma soumission"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
