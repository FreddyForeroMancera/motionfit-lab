import ArticleForm from "../../../components/ArticleForm";
import Link from "next/link";
import styles from "../../articles.module.css";
import { prisma } from "../../../../../lib/prisma";
import { notFound } from "next/navigation";

export default async function EditArticlePage({ params }: { params: { id: string } }) {
  const article = await prisma.article.findUnique({
    where: { id: params.id },
  });

  if (!article) {
    notFound();
  }

  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <Link href="/admin/articles" style={{ color: "#718096", textDecoration: "none", fontSize: "0.9rem" }}>
          &larr; Retour aux articles
        </Link>
      </div>

      <header className={styles.header}>
        <div>
          <h1>Éditer l'article</h1>
          <p>Modifiez les informations de l'article "{article.title}".</p>
        </div>
      </header>

      <ArticleForm article={article} />
    </div>
  );
}
