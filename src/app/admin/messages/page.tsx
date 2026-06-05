import { prisma } from "../../../lib/prisma";
import styles from "../articles/articles.module.css";
import DeleteMessageButton from "../components/DeleteMessageButton";

export const metadata = {
  title: "Messages | MotionFit Admin",
};

export default async function MessagesPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });

  return (
    <div className={styles.adminContainer}>
      <div className={styles.headerRow}>
        <h1 className={styles.pageTitle}>Messages de Contact</h1>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Nom</th>
              <th>Sujet</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ textAlign: "center", padding: "2rem" }}>
                  Aucun message pour le moment.
                </td>
              </tr>
            ) : (
              messages.map((msg) => (
                <tr key={msg.id}>
                  <td>{new Date(msg.createdAt).toLocaleDateString("fr-FR", { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                  <td>
                    <strong>{msg.name}</strong>
                    <br />
                    <a href={`mailto:${msg.email}`} style={{ color: "var(--color-accent)", fontSize: "0.85rem" }}>{msg.email}</a>
                    {msg.phone && <div style={{ fontSize: "0.8rem", color: "#718096" }}>{msg.phone}</div>}
                  </td>
                  <td><span className={styles.statusBadge}>{msg.subject}</span></td>
                  <td style={{ maxWidth: "300px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} title={msg.message}>
                    {msg.message}
                  </td>
                  <td>
                    <DeleteMessageButton id={msg.id} />
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
