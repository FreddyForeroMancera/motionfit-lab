import { prisma } from "../../../lib/prisma";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import styles from "./article.module.css";
import rootStyles from "../../page.module.css";

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug },
  });

  if (!article) {
    notFound();
  }

  return (
    <main className={rootStyles.mainWrapper}>
      <Header theme="light" />

      <article className={styles.articleContainer}>
        {/* --- HERO IMAGE --- */}
        <section className={styles.heroSection}>
          <Image 
            src={article.imageUrl || "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2000&auto=format&fit=crop"} 
            alt={article.title} 
            fill 
            style={{ objectFit: 'cover' }} 
            priority
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <div className={styles.metaBadge}>{article.category}</div>
            <h1 className={styles.title}>{article.title}</h1>
            <div className={styles.date}>{article.date}</div>
          </div>
        </section>

        {/* --- ARTICLE CONTENT --- */}
        <section className={styles.contentSection}>
          <div className={styles.backLinkWrapper}>
            <Link href="/articles" className={styles.backLink}>
              &larr; Retour aux articles
            </Link>
          </div>

          <div 
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />
        </section>
      </article>

      <Footer />
    </main>
  );
}
