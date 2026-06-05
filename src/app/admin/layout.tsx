import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import styles from "./admin.module.css";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className={styles.adminLayout}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarLogo}>MOTIONFIT-LAB ADMIN</div>
        <nav className={styles.sidebarNav}>
          <Link href="/admin" className={styles.navLink}>Tableau de bord</Link>
          <Link href="/admin/articles" className={styles.navLink}>Articles</Link>
          <Link href="/admin/messages" className={styles.navLink}>Messages</Link>
          <Link href="/admin/users" className={styles.navLink}>Utilisateurs</Link>
          <a href="/api/auth/signout" className={styles.navLink}>Déconnexion</a>
        </nav>
      </aside>
      <main className={styles.adminMain}>
        {children}
      </main>
    </div>
  );
}
