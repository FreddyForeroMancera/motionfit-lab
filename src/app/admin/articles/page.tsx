import { prisma } from "../../../lib/prisma";
import Link from "next/link";
import styles from "./articles.module.css";
import { deleteArticle } from "../../actions/article-actions";

export default async function AdminArticles() {
  const articles = await prisma.article.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <header className={styles.header}>
        <div>
          <h1>Articles du Blog</h1>
          <p>Gérez vos publications, créez de nouveaux articles ou modifiez les existants.</p>
        </div>
        <Link href="/admin/articles/create" className={styles.createButton}>
          + Nouvel Article
        </Link>
      </header>

      <div className={styles.tableContainer}>
        {articles.length === 0 ? (
          <div className={styles.emptyState}>
            <p>Aucun article pour le moment.</p>
            <Link href="/admin/articles/create" className={styles.createButtonSecondary}>
              Créer votre premier article
            </Link>
          </div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Titre</th>
                <th>Catégorie</th>
                <th>Date d'affichage</th>
                <th>Créé le</th>
                <th className={styles.actionsColumn}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article.id}>
                  <td className={styles.titleCell}>
                    <strong>{article.title}</strong>
                    <span className={styles.slugText}>/{article.slug}</span>
                  </td>
                  <td>
                    <span className={styles.categoryBadge}>{article.category}</span>
                  </td>
                  <td>{article.date}</td>
                  <td>{new Date(article.createdAt).toLocaleDateString("fr-FR")}</td>
                  <td className={styles.actionsCell}>
                    <Link href={`/admin/articles/${article.id}/edit`} className={styles.editButton}>
                      Éditer
                    </Link>
                    <form action={async () => {
                      "use server";
                      await deleteArticle(article.id);
                    }}>
                      <button type="submit" className={styles.deleteButton}>
                        Supprimer
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
