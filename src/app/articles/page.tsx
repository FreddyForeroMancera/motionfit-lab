import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "../../lib/prisma";
import styles from "./page.module.css";
import rootStyles from "../page.module.css";

export default async function Articles() {
  const articles = await prisma.article.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className={rootStyles.mainWrapper}>
      <Header theme="light" />

      <div className={styles.pageContainer}>
        {/* --- HEADER --- */}
        <section className={styles.headerSection}>
          <div className="animate-fade-up">
            <h1 className={styles.mainTitle}>Derniers articles</h1>
          </div>
        </section>

        {/* --- ARTICLES GRID --- */}
        <section className={styles.articlesGrid}>
          {articles.length === 0 ? (
            <div style={{ color: "white", padding: "4rem", textAlign: "center", gridColumn: "1/-1" }}>
              Aucun article pour le moment.
            </div>
          ) : (
            articles.map((article) => (
              <article key={article.id} className={styles.articleCard}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={article.imageUrl || "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1000&auto=format&fit=crop"} 
                    alt={article.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <div className={styles.textContainer}>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <div className={styles.articleMeta}>
                    {article.date} &bull; <span>{article.category}</span>
                  </div>
                  <p className={styles.articleExcerpt}>{article.excerpt}</p>
                  <Link href={`/articles/${article.slug}`} className={styles.readMoreBtn}>
                    VOIR PLUS
                  </Link>
                </div>
              </article>
            ))
          )}
        </section>

        {/* --- LOAD MORE --- */}
        {articles.length > 0 && (
          <section className={styles.loadMoreSection}>
            <button className={styles.loadMoreBtn}>PLUS D'ARTICLES</button>
          </section>
        )}
      </div>

      <Footer />
    </main>
  );
}
