import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "../../lib/prisma";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Espace Client | MotionFit-Lab",
};

export default async function PlateformePage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    redirect("/login");
  }

  // Fetch the full user from DB to get their plan and status
  const user = await prisma.user.findUnique({
    where: { email: session.user.email }
  });

  if (!user) {
    redirect("/login");
  }

  if (user.status === "INACTIVE" || user.status === "SUSPENDED") {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header theme="dark" />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
          <div style={{ background: 'white', padding: '3rem', borderRadius: '12px', textAlign: 'center', maxWidth: '500px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <h1 style={{ color: '#e53e3e', marginBottom: '1rem' }}>Accès Restreint</h1>
            <p style={{ color: '#4a5568', marginBottom: '2rem' }}>
              Votre compte est actuellement inactif ou suspendu. Veuillez contacter notre équipe pour rétablir votre accès.
            </p>
            <a href="/contact" style={{ background: 'var(--color-accent)', color: 'white', padding: '0.8rem 2rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>
              Nous Contacter
            </a>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header theme="dark" />
      
      <div style={{ flex: 1, padding: '4rem 2rem', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
            <div>
              <h1 style={{ fontSize: '2.5rem', color: '#1a202c', margin: 0 }}>Bienvenue, {user.name || "Client"}</h1>
              <p style={{ color: '#718096', fontSize: '1.1rem', marginTop: '0.5rem' }}>Espace Personnel MotionFit-Lab</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.9rem', color: '#718096', textTransform: 'uppercase', letterSpacing: '1px' }}>Abonnement Actif</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-accent)' }}>
                {user.plan === "NONE" ? "Aucun Plan Actif" : user.plan.replace('_', ' ')}
              </div>
            </div>
          </div>

          {user.plan === "NONE" ? (
            <div style={{ background: 'white', padding: '3rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', marginTop: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👋</div>
              <h2 style={{ color: '#1a202c', marginBottom: '1rem', fontSize: '1.8rem' }}>Ravi de vous compter parmi nous !</h2>
              <p style={{ color: '#4a5568', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
                Vous êtes actuellement sur le profil gratuit. Pour débloquer l'accès aux vidéos d'entraînement, réserver vos séances en direct, et recevoir votre plan personnalisé, découvrez nos abonnements.
              </p>
              
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/abonnements" style={{ background: 'var(--color-accent)', color: 'white', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', transition: 'transform 0.2s' }}>
                  Voir les Abonnements VIP
                </a>
                <a href="/plateforme" style={{ background: 'transparent', color: 'var(--color-accent)', border: '2px solid var(--color-accent)', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
                  Regarder une vidéo d'essai gratuite
                </a>
              </div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              
              {/* VOD Section */}
              <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <div style={{ background: '#1a202c', padding: '1.5rem', color: 'white' }}>
                  <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Vidéos à la Demande (VOD)</h2>
                </div>
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p style={{ color: '#4a5568' }}>Accédez à votre bibliothèque d'entraînements guidés.</p>
                  <button style={{ background: 'var(--color-accent)', color: 'white', border: 'none', padding: '0.8rem', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
                    Explorer le catalogue
                  </button>
                </div>
              </div>

              {/* Live Section */}
              <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <div style={{ background: '#1a202c', padding: '1.5rem', color: 'white' }}>
                  <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Entraînement en Direct</h2>
                </div>
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p style={{ color: '#4a5568' }}>Rejoignez nos sessions Live exclusives via Zoom.</p>
                  <button style={{ background: 'var(--color-accent)', color: 'white', border: 'none', padding: '0.8rem', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
                    Voir le calendrier
                  </button>
                </div>
              </div>

              {/* Documents Section */}
              <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <div style={{ background: '#1a202c', padding: '1.5rem', color: 'white' }}>
                  <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Mes Documents & Bilan</h2>
                </div>
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p style={{ color: '#4a5568' }}>Téléchargez vos bilans posturaux et plans nutritionnels.</p>
                  <button style={{ background: 'transparent', color: 'var(--color-accent)', border: '2px solid var(--color-accent)', padding: '0.8rem', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
                    Accéder aux dossiers
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
