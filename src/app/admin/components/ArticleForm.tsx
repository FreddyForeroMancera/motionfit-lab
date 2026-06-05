"use client";

import { useState } from "react";
import { createArticle, updateArticle } from "../../actions/article-actions";
import styles from "./ArticleForm.module.css";
import Link from "next/link";

type Article = {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  date: string;
};

export default function ArticleForm({ article }: { article?: Article }) {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [fileName, setFileName] = useState<string>("");

  // Auto-generate slug from title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    const form = e.target.form;
    if (form && !article) { // Only auto-fill if creating new
      const slugInput = form.elements.namedItem("slug") as HTMLInputElement;
      if (slugInput && !slugInput.value) {
        slugInput.value = title
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "");
      }
    }
  };

  async function handleSubmit(formData: FormData) {
    setIsPending(true);
    setError(null);
    
    let result;
    if (article?.id) {
      result = await updateArticle(article.id, formData);
    } else {
      result = await createArticle(formData);
    }

    if (result?.error) {
      setError(result.error);
      setIsPending(false);
    }
  }

  return (
    <form action={handleSubmit} className={styles.formContainer}>
      {error && <div className={styles.errorMessage}>{error}</div>}

      <div className={styles.formGroup}>
        <label htmlFor="title">Titre *</label>
        <input 
          type="text" 
          id="title" 
          name="title" 
          required 
          defaultValue={article?.title}
          onChange={handleTitleChange}
          placeholder="Titre de l'article"
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="slug">Slug (URL) *</label>
          <input 
            type="text" 
            id="slug" 
            name="slug" 
            required 
            defaultValue={article?.slug}
            placeholder="mon-super-article"
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="category">Catégorie</label>
          <input 
            type="text" 
            id="category" 
            name="category" 
            defaultValue={article?.category || "Non classé"}
            placeholder="Ex: Entraînement"
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="date">Date d'affichage</label>
          <input 
            type="text" 
            id="date" 
            name="date" 
            defaultValue={article?.date || new Date().toLocaleDateString("fr-FR", { day: '2-digit', month: 'short', year: 'numeric' })}
            placeholder="Ex: 12 OCT, 2026"
          />
        </div>
      </div>

      <div className={styles.formGroup} style={{ border: '1px solid #e2e8f0', padding: '1rem', borderRadius: '8px' }}>
        <label>Image de couverture</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
          <div>
            <span style={{ fontSize: '0.85rem', color: '#718096', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>Option 1 : Télécharger un fichier depuis votre ordinateur</span>
            
            <div className={styles.fileInputContainer}>
              <label htmlFor="imageFile" className={styles.fileUploadButton}>
                Choisir un fichier
              </label>
              <span className={styles.fileName}>
                {fileName || "Aucun fichier sélectionné"}
              </span>
            </div>

            <input 
              type="file" 
              id="imageFile" 
              name="imageFile" 
              accept="image/*"
              style={{ display: 'none' }}
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setFileName(e.target.files[0].name);
                } else {
                  setFileName("");
                }
              }}
            />
            <p style={{ fontSize: '0.75rem', color: '#a0aec0', margin: 0, marginTop: '0.5rem' }}>
              * Spécifications recommandées : Format horizontal (ex: 1200x800px), JPG ou WebP, poids maximum de 1 Mo à 2 Mo pour une vitesse optimale.
            </p>
          </div>
          <div>
            <label htmlFor="imageUrl" style={{ fontSize: '0.85rem', color: '#718096' }}>Option 2 : Utiliser une URL d'image existante</label>
            <input 
              type="text" 
              id="imageUrl" 
              name="imageUrl" 
              defaultValue={article?.imageUrl}
              placeholder="https://images.unsplash.com/..."
              style={{ display: 'block', width: '100%', marginTop: '0.25rem' }}
            />
          </div>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="excerpt">Extrait (Résumé court)</label>
        <textarea 
          id="excerpt" 
          name="excerpt" 
          rows={3} 
          defaultValue={article?.excerpt}
          placeholder="Résumé court visible sur la page du blog..."
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="content">Contenu (HTML ou texte) *</label>
        <textarea 
          id="content" 
          name="content" 
          rows={15} 
          required 
          defaultValue={article?.content}
          placeholder="<p>Le contenu de votre article...</p>"
        />
      </div>

      <div className={styles.formActions}>
        <Link href="/admin/articles" className={styles.cancelButton}>
          Annuler
        </Link>
        <button type="submit" disabled={isPending} className={styles.submitButton}>
          {isPending ? "Enregistrement..." : (article?.id ? "Mettre à jour" : "Créer l'article")}
        </button>
      </div>
    </form>
  );
}
