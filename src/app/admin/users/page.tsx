import { prisma } from "../../../lib/prisma";
import styles from "../articles/articles.module.css";
import UserRoleForm from "../components/UserRoleForm";

export const metadata = {
  title: "Utilisateurs | MotionFit Admin",
};

export default async function UsersPage() {
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });

  return (
    <div className={styles.adminContainer}>
      <div className={styles.headerRow}>
        <h1 className={styles.pageTitle}>Utilisateurs Enregistrés</h1>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date d'inscription</th>
              <th>Utilisateur</th>
              <th>Gestion des Accès (Rôle / Plan / Statut)</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={3} style={{ textAlign: "center", padding: "2rem" }}>
                  Aucun utilisateur trouvé.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{new Date(user.createdAt).toLocaleDateString("fr-FR", { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                  <td>
                    <strong>{user.name || "Sans nom"}</strong>
                    <br />
                    <a href={`mailto:${user.email}`} style={{ color: "var(--color-accent)", fontSize: "0.85rem" }}>{user.email}</a>
                  </td>
                  <td>
                    <UserRoleForm user={{ id: user.id, role: user.role, plan: user.plan, status: user.status }} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
