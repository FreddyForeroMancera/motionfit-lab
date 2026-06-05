import styles from "./admin.module.css";
import { prisma } from "../../lib/prisma";

export default async function AdminDashboard() {
  const articleCount = await prisma.article.count();
  const messageCount = await prisma.contactMessage.count();
  const userCount = await prisma.user.count();

  return (
    <div>
      <header className={styles.dashboardHeader}>
        <h1>Tableau de bord</h1>
        <p>Bienvenue dans votre espace d'administration MotionFit-Lab.</p>
      </header>

      <div className={styles.cardGrid}>
        <div className={styles.statCard}>
          <h3>Articles (Blog)</h3>
          <p>{articleCount}</p>
        </div>
        <div className={styles.statCard}>
          <h3>Messages Reçus</h3>
          <p>{messageCount}</p>
        </div>
        <div className={styles.statCard}>
          <h3>Administrateurs</h3>
          <p>{userCount}</p>
        </div>
      </div>
    </div>
  );
}
