import ArticleForm from "../../components/ArticleForm";
import Link from "next/link";
import styles from "../articles.module.css";

export default function CreateArticlePage() {
  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <Link href="/admin/articles" style={{ color: "#718096", textDecoration: "none", fontSize: "0.9rem" }}>
          &larr; Retour aux articles
        </Link>
      </div>

      <header className={styles.header}>
        <div>
          <h1>Créer un nouvel article</h1>
          <p>Remplissez les informations ci-dessous pour publier un nouvel article sur le blog.</p>
        </div>
      </header>

      <ArticleForm />
    </div>
  );
}
